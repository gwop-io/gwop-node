/**
 * Test: gwop.authIntents.exchange()
 *
 * Attempts to exchange an unsettled auth intent for a JWT.
 * Expected to fail (intent not paid) — captures the error shape.
 *
 * Run: npx tsx --env-file=tests/.env tests/06-auth-exchange.ts
 */

import { Gwop } from "../src/index.js";

const gwop = new Gwop({
  merchantApiKey: process.env.GWOP_CHECKOUT_API_KEY!,
});

async function main() {
  console.log("=== authIntents.exchange() ===\n");

  // Create a fresh auth intent
  const { result: intent } = await gwop.authIntents.create({
    idempotencyKey: crypto.randomUUID(),
  });
  console.log("Created authIntentId:", intent.authIntentId);

  // --- Test 1: Exchange without payment (should fail) ---
  console.log("\n--- Exchange unsettled intent ---");
  try {
    await gwop.authIntents.exchange({
      authIntentId: intent.authIntentId,
      idempotencyKey: crypto.randomUUID(),
    });
    console.log("UNEXPECTED — exchange succeeded without payment");
  } catch (err: any) {
    console.log("Error class:", err.constructor.name);
    console.log("Status:", err.statusCode);
    if (err.body) {
      const body = JSON.parse(err.body);
      console.log("Error code:", body.error?.code);
      console.log("Error message:", body.error?.message);
    }
    console.log("PASS — expected failure for unsettled intent");
  }

  // --- Test 2: Exchange with invalid intent ID ---
  console.log("\n--- Exchange invalid intent ID ---");
  try {
    await gwop.authIntents.exchange({
      authIntentId: "ai_doesnotexist",
      idempotencyKey: crypto.randomUUID(),
    });
    console.log("UNEXPECTED — exchange succeeded with bad ID");
  } catch (err: any) {
    console.log("Error class:", err.constructor.name);
    console.log("Status:", err.statusCode);
    if (err.body) {
      const body = JSON.parse(err.body);
      console.log("Error code:", body.error?.code);
      console.log("Error message:", body.error?.message);
    }
    console.log("PASS — expected failure for invalid intent");
  }
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
