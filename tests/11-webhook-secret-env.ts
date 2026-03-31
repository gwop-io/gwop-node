/**
 * Test: GWOP_WEBHOOK_SECRET environment variable support
 *
 * Verifies that validateWebhook() reads the webhook secret from
 * GWOP_WEBHOOK_SECRET when not passed in the constructor.
 * Does NOT hit the network — all webhook payloads are synthetic.
 *
 * Run: npx tsx tests/11-webhook-secret-env.ts
 */

import { createHmac } from "node:crypto";
import { Gwop } from "../src/index.js";

const TEST_SECRET = "whsec_test_secret_for_env_var";
const PAID_BODY = JSON.stringify({
  event_type: "invoice.paid",
  event_id: "evt_env_test",
  data: {
    invoice_id: "ba7bc94a-5468-42f4-9f04-2502e50c7501",
    public_invoice_id: "inv_test",
    merchant_id: "9e9c9ba5-3bab-4172-8a79-336f9ca0f163",
    status: "PAID",
    amount_usdc: "1000000",
    currency: "USDC",
    tx_hash: `0x${"ab".repeat(32)}`,
    payment_chain: "base",
    payment_chain_caip2: "eip155:8453",
    paid_at: new Date().toISOString(),
    payer_wallet: `0x${"11".repeat(20)}`,
  },
});

function signPayload(body: string, timestamp: number, secret: string): string {
  const mac = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
  return `t=${timestamp},v1=${mac}`;
}

function makeWebhookRequest(body: string, secret: string) {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = signPayload(body, timestamp, secret);

  return {
    body,
    headers: {
      "x-gwop-signature": signature,
      "x-gwop-event-id": "evt_env_test",
      "x-gwop-event-type": "invoice.paid",
      "content-type": "application/json",
    },
    url: "https://example.com/webhook",
    method: "POST",
  };
}

function getErrorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

function restoreWebhookSecret(value: string | undefined) {
  if (value === undefined) {
    delete process.env.GWOP_WEBHOOK_SECRET;
    return;
  }

  process.env.GWOP_WEBHOOK_SECRET = value;
}

async function main() {
  const originalWebhookSecret = process.env.GWOP_WEBHOOK_SECRET;

  console.log("=== GWOP_WEBHOOK_SECRET env var support ===\n");

  try {
    // --- Test 1: Secret from env only (no constructor arg) ---
    console.log("--- Test 1: Secret from env only ---");
    process.env.GWOP_WEBHOOK_SECRET = TEST_SECRET;
    const gwopEnv = new Gwop();
    const envEvent = await gwopEnv.validateWebhook({
      request: makeWebhookRequest(PAID_BODY, TEST_SECRET),
    });
    console.log("Event type:", envEvent.body.eventType);
    console.log("PASS — webhook validated using env var");

    // --- Test 2: Constructor overrides env ---
    console.log("\n--- Test 2: Constructor overrides env ---");
    const constructorSecret = "whsec_constructor_override";
    process.env.GWOP_WEBHOOK_SECRET = TEST_SECRET;
    const gwopOverride = new Gwop({ webhookSecret: constructorSecret });
    const overrideEvent = await gwopOverride.validateWebhook({
      request: makeWebhookRequest(PAID_BODY, constructorSecret),
    });
    console.log("Event type:", overrideEvent.body.eventType);
    console.log("PASS — constructor secret takes precedence over env");

    // --- Test 3: Neither set → descriptive error ---
    console.log("\n--- Test 3: Neither set → error ---");
    delete process.env.GWOP_WEBHOOK_SECRET;
    const gwopNone = new Gwop();
    try {
      await gwopNone.validateWebhook({
        request: makeWebhookRequest(PAID_BODY, "whatever"),
      });
      throw new Error("Expected validateWebhook() to throw when no secret is configured");
    } catch (err) {
      const message = getErrorMessage(err);
      if (!message.includes("webhookSecret is required") || !message.includes("GWOP_WEBHOOK_SECRET")) {
        throw new Error(`Missing-secret error did not mention both config paths: ${message}`);
      }
      console.log("Error:", message);
      console.log("PASS — error mentions both constructor and env var");
    }

    // --- Test 4: Existing constructor-only behavior unchanged ---
    console.log("\n--- Test 4: Constructor-only (no env) ---");
    delete process.env.GWOP_WEBHOOK_SECRET;
    const gwopConstructor = new Gwop({ webhookSecret: TEST_SECRET });
    const constructorEvent = await gwopConstructor.validateWebhook({
      request: makeWebhookRequest(PAID_BODY, TEST_SECRET),
    });
    console.log("Event type:", constructorEvent.body.eventType);
    console.log("PASS — constructor-only still works");

    // --- Test 5: Empty string treated as unset ---
    console.log("\n--- Test 5: Empty string env var → error ---");
    process.env.GWOP_WEBHOOK_SECRET = "";
    const gwopEmpty = new Gwop();
    try {
      await gwopEmpty.validateWebhook({
        request: makeWebhookRequest(PAID_BODY, "whatever"),
      });
      throw new Error("Expected validateWebhook() to throw when env secret is an empty string");
    } catch (err) {
      const message = getErrorMessage(err);
      if (!message.includes("webhookSecret is required")) {
        throw new Error(`Unexpected error for empty-string env secret: ${message}`);
      }
      console.log("Error:", message);
      console.log("PASS — empty string treated as unset");
    }

    console.log("\n=== All GWOP_WEBHOOK_SECRET tests passed ===");
  } finally {
    restoreWebhookSecret(originalWebhookSecret);
  }
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
