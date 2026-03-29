/**
 * Test: gwop.authIntents.create()
 *
 * Creates a wallet auth challenge against identity.gwop.io.
 * Validates response shape, payment methods, and challenge amount.
 *
 * Run: npx tsx --env-file=tests/.env tests/05-auth-create-intent.ts
 */

import { Gwop } from "../src/index.js";

const gwop = new Gwop();

async function main() {
  console.log("=== authIntents.create() ===\n");

  // --- Test 1: Basic auth intent creation ---
  console.log("--- Create auth intent ---");
  const { result } = await gwop.authIntents.create({
    idempotencyKey: crypto.randomUUID(),
  });

  console.log("authIntentId:", result.authIntentId);
  console.log("status:", result.status);
  console.log("expiresAt:", result.expiresAt);

  console.log("\n--- Challenge ---");
  console.log("amountUsdcAtomic:", result.challenge.amountUsdcAtomic);
  console.log("paymentMethods count:", result.challenge.paymentMethods.length);

  for (const pm of result.challenge.paymentMethods) {
    console.log(`\n  Method: ${pm.id}`);
    console.log(`  chain: ${pm.chain}`);
    console.log(`  paymentUrl: ${pm.paymentUrl}`);
    console.log(`  hint: ${pm.hint}`);
  }

  // --- Test 2: With knownWalletHint ---
  console.log("\n--- With knownWalletHint ---");
  const { result: result2 } = await gwop.authIntents.create({
    idempotencyKey: crypto.randomUUID(),
    body: {
      knownWalletHint: "base:0x742d35Cc6634C0532925a3b844Bc9e7595f5bA16",
      metadata: { source: "sdk-test" },
    },
  });
  console.log("authIntentId:", result2.authIntentId);
  console.log("status:", result2.status);
  console.log("payment methods:", result2.challenge.paymentMethods.length);

  // --- Test 3: Idempotency ---
  // Auth intents enforce strict idempotency — same key with different request
  // body returns IDEMPOTENCY_CONFLICT (409). This is stricter than invoices.
  console.log("\n--- Idempotency behavior ---");
  const key = crypto.randomUUID();
  const { result: first } = await gwop.authIntents.create({ idempotencyKey: key });
  console.log("First call authIntentId:", first.authIntentId);
  try {
    await gwop.authIntents.create({ idempotencyKey: key });
    console.log("Second call: returned (idempotent)");
  } catch (err: any) {
    console.log("Second call error code:", err.body ? JSON.parse(err.body).error.code : err.message);
    console.log("Auth intents have strict idempotency — document this");
  }

  console.log("\n--- Full JSON (for docs) ---");
  console.log(JSON.stringify(result, null, 2));

  // Save for exchange test
  console.log("\n--- ID for exchange test ---");
  console.log(`AUTH_INTENT_ID=${result.authIntentId}`);
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
