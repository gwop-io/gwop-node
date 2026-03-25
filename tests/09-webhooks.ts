/**
 * Test: gwop.validateWebhook()
 *
 * Tests the fixed webhook verification: HMAC check + schema parsing.
 *
 * Run: npx tsx --env-file=tests/.env tests/09-webhooks.ts
 */

import { createHmac } from "node:crypto";
import { Gwop } from "../src/index.js";

const WEBHOOK_SECRET = process.env.GWOP_WEBHOOK_SECRET!;

const gwop = new Gwop({
  merchantApiKey: process.env.GWOP_CHECKOUT_API_KEY!,
  webhookSecret: WEBHOOK_SECRET,
});

function signPayload(body: string, timestamp: number): string {
  const mac = createHmac("sha256", WEBHOOK_SECRET)
    .update(`${timestamp}.${body}`)
    .digest("hex");
  return `t=${timestamp},v1=${mac}`;
}

async function main() {
  console.log("=== validateWebhook() ===\n");

  const paidBody = JSON.stringify({
    event_type: "invoice.paid",
    event_id: "evt_test_001",
    data: {
      invoice_id: "ba7bc94a-5468-42f4-9f04-2502e50c7501",
      public_invoice_id: "inv_7dbeeaad8ebf4f5298c380c90e4b3576",
      merchant_id: "9e9c9ba5-3bab-4172-8a79-336f9ca0f163",
      status: "PAID",
      amount_usdc: "1025000",
      currency: "USDC",
      tx_hash: "0xcd2688e1636de50f283933bd08b849dc6aef51ea9600521bc5f2de409897ad47",
      payment_chain: "base",
      payment_chain_caip2: "eip155:8453",
      paid_at: "2026-03-24T00:48:31.602Z",
      payer_wallet: "0x742d35Cc6634C0532925a3b844Bc9e7595f5bA16",
    },
  });

  // --- Test 1: Valid invoice.paid webhook ---
  console.log("--- Valid invoice.paid ---");
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = signPayload(paidBody, timestamp);

  try {
    const event = await gwop.validateWebhook({
      request: {
        body: paidBody,
        headers: {
          "x-gwop-signature": signature,
          "x-gwop-event-id": "evt_test_001",
          "x-gwop-event-type": "invoice.paid",
          "content-type": "application/json",
        },
        url: "https://api.example.com/webhooks/gwop",
        method: "POST",
      },
    });

    console.log("Event type:", event.body.eventType);
    console.log("Event ID:", event.body.eventId);
    console.log("Invoice ID:", event.body.data.publicInvoiceId);
    console.log("Payment chain:", event.body.data.paymentChain);
    console.log("Payer wallet:", event.body.data.payerWallet);
    console.log("Paid at:", event.body.data.paidAt);
    console.log("Tx hash:", event.body.data.txHash);
    console.log("PASS — valid webhook verified + parsed");
  } catch (err: any) {
    console.log("FAILED:", err.message);
  }

  // --- Test 2: Invalid signature ---
  console.log("\n--- Invalid signature ---");
  try {
    await gwop.validateWebhook({
      request: {
        body: paidBody,
        headers: {
          "x-gwop-signature": `t=${timestamp},v1=${"a".repeat(64)}`,
          "x-gwop-event-id": "evt_test_002",
          "x-gwop-event-type": "invoice.paid",
          "content-type": "application/json",
        },
        url: "https://api.example.com/webhooks/gwop",
        method: "POST",
      },
    });
    console.log("FAIL — should have rejected invalid signature");
  } catch (err: any) {
    console.log("Error:", err.message);
    console.log("PASS — invalid signature rejected");
  }

  // --- Test 3: Missing signature header ---
  console.log("\n--- Missing signature header ---");
  try {
    await gwop.validateWebhook({
      request: {
        body: paidBody,
        headers: {
          "x-gwop-event-id": "evt_test_003",
          "x-gwop-event-type": "invoice.paid",
          "content-type": "application/json",
        },
        url: "https://api.example.com/webhooks/gwop",
        method: "POST",
      },
    });
    console.log("FAIL — should have rejected missing signature");
  } catch (err: any) {
    console.log("Error:", err.message);
    console.log("PASS — missing signature rejected");
  }

  // --- Test 4: Expired timestamp (10 min old) ---
  console.log("\n--- Expired timestamp ---");
  const oldTimestamp = Math.floor(Date.now() / 1000) - 600;
  const oldSignature = signPayload(paidBody, oldTimestamp);
  try {
    await gwop.validateWebhook({
      request: {
        body: paidBody,
        headers: {
          "x-gwop-signature": oldSignature,
          "x-gwop-event-id": "evt_test_004",
          "x-gwop-event-type": "invoice.paid",
          "content-type": "application/json",
        },
        url: "https://api.example.com/webhooks/gwop",
        method: "POST",
      },
    });
    console.log("FAIL — should have rejected expired timestamp");
  } catch (err: any) {
    console.log("Error:", err.message);
    console.log("PASS — expired timestamp rejected");
  }

  // --- Test 5: Tampered body ---
  console.log("\n--- Tampered body ---");
  try {
    await gwop.validateWebhook({
      request: {
        body: paidBody + " ",
        headers: {
          "x-gwop-signature": signature,
          "x-gwop-event-id": "evt_test_005",
          "x-gwop-event-type": "invoice.paid",
          "content-type": "application/json",
        },
        url: "https://api.example.com/webhooks/gwop",
        method: "POST",
      },
    });
    console.log("FAIL — should have rejected tampered body");
  } catch (err: any) {
    console.log("Error:", err.message);
    console.log("PASS — tampered body rejected");
  }

  // --- Test 6: No webhookSecret configured ---
  console.log("\n--- No webhookSecret ---");
  const noSecretGwop = new Gwop({
    merchantApiKey: process.env.GWOP_CHECKOUT_API_KEY!,
  });
  try {
    await noSecretGwop.validateWebhook({
      request: {
        body: paidBody,
        headers: {
          "x-gwop-signature": signature,
          "x-gwop-event-id": "evt_test_006",
          "x-gwop-event-type": "invoice.paid",
          "content-type": "application/json",
        },
        url: "https://api.example.com/webhooks/gwop",
        method: "POST",
      },
    });
    console.log("FAIL — should have thrown for missing secret");
  } catch (err: any) {
    console.log("Error:", err.message);
    console.log("PASS — missing webhookSecret caught");
  }

  // --- Test 7: invoice.expired event ---
  console.log("\n--- invoice.expired ---");
  const expiredBody = JSON.stringify({
    event_type: "invoice.expired",
    event_id: "evt_test_007",
    data: {
      invoice_id: "ba7bc94a-5468-42f4-9f04-2502e50c7501",
      public_invoice_id: "inv_7dbeeaad8ebf4f5298c380c90e4b3576",
      merchant_id: "9e9c9ba5-3bab-4172-8a79-336f9ca0f163",
      status: "EXPIRED",
      amount_usdc: "1025000",
      currency: "USDC",
    },
  });
  const expiredTs = Math.floor(Date.now() / 1000);
  const expiredSig = signPayload(expiredBody, expiredTs);
  try {
    const event = await gwop.validateWebhook({
      request: {
        body: expiredBody,
        headers: {
          "x-gwop-signature": expiredSig,
          "x-gwop-event-id": "evt_test_007",
          "x-gwop-event-type": "invoice.expired",
          "content-type": "application/json",
        },
        url: "https://api.example.com/webhooks/gwop",
        method: "POST",
      },
    });
    console.log("Event type:", event.body.eventType);
    console.log("PASS — invoice.expired parsed");
  } catch (err: any) {
    console.log("FAILED:", err.message);
  }

  // --- Test 8: invoice.canceled event ---
  console.log("\n--- invoice.canceled ---");
  const canceledBody = JSON.stringify({
    event_type: "invoice.canceled",
    event_id: "evt_test_008",
    data: {
      invoice_id: "ba7bc94a-5468-42f4-9f04-2502e50c7501",
      public_invoice_id: "inv_7dbeeaad8ebf4f5298c380c90e4b3576",
      merchant_id: "9e9c9ba5-3bab-4172-8a79-336f9ca0f163",
      status: "CANCELED",
      amount_usdc: "1025000",
      currency: "USDC",
    },
  });
  const canceledTs = Math.floor(Date.now() / 1000);
  const canceledSig = signPayload(canceledBody, canceledTs);
  try {
    const event = await gwop.validateWebhook({
      request: {
        body: canceledBody,
        headers: {
          "x-gwop-signature": canceledSig,
          "x-gwop-event-id": "evt_test_008",
          "x-gwop-event-type": "invoice.canceled",
          "content-type": "application/json",
        },
        url: "https://api.example.com/webhooks/gwop",
        method: "POST",
      },
    });
    console.log("Event type:", event.body.eventType);
    console.log("PASS — invoice.canceled parsed");
  } catch (err: any) {
    console.log("FAILED:", err.message);
  }
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
