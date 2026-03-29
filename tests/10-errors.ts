/**
 * Test: Error handling
 *
 * Triggers various error conditions to document error shapes and codes.
 *
 * Run: npx tsx --env-file=tests/.env tests/10-errors.ts
 */

import { Gwop } from "../src/index.js";
import * as errors from "../src/models/errors/index.js";

async function main() {
  console.log("=== Error handling ===\n");

  // --- Test 1: Invalid API key (401) ---
  console.log("--- Invalid API key ---");
  const badGwop = new Gwop({ merchantApiKey: "sk_m_invalid" });
  try {
    await badGwop.invoices.list();
  } catch (err: any) {
    console.log("instanceof ErrorResponse?", err instanceof errors.ErrorResponse);
    console.log("Status:", err.statusCode);
    if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
      console.log("Error message:", err.data$.error.message);
    }
  }

  // --- Test 2: Validation error (400) ---
  console.log("\n--- Validation error (negative amount) ---");
  const gwop = new Gwop();
  try {
    await gwop.invoices.create({
      idempotencyKey: crypto.randomUUID(),
      body: { amountUsdc: -1 },
    });
  } catch (err: any) {
    console.log("instanceof ErrorResponse?", err instanceof errors.ErrorResponse);
    console.log("Status:", err.statusCode);
    if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
      console.log("Error message:", err.data$.error.message);
    } else {
      console.log("Error class:", err.constructor.name);
      console.log("Message:", err.message?.slice(0, 100));
    }
  }

  // --- Test 3: Invoice not found (404) ---
  console.log("\n--- Invoice not found ---");
  try {
    await gwop.invoices.get({ id: "inv_nonexistent" });
  } catch (err: any) {
    console.log("instanceof ErrorResponse?", err instanceof errors.ErrorResponse);
    console.log("Status:", err.statusCode);
    if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
      console.log("Error message:", err.data$.error.message);
    }
  }

  // --- Test 4: Cancel not allowed ---
  console.log("\n--- Cancel not allowed (paid invoice) ---");
  const { result: paidList } = await gwop.invoices.list({ status: "PAID", limit: 1 });
  if (paidList.invoices.length > 0) {
    try {
      await gwop.invoices.cancel({ id: paidList.invoices[0]!.id });
    } catch (err: any) {
      console.log("instanceof ErrorResponse?", err instanceof errors.ErrorResponse);
      console.log("Status:", err.statusCode);
      if (err.data$?.error) {
        console.log("Error code:", err.data$.error.code);
        console.log("Error message:", err.data$.error.message);
      }
    }
  }

  // --- Test 5: Auth intent not settled (402) ---
  console.log("\n--- Auth intent not settled ---");
  const { result: intent } = await gwop.authIntents.create({
    idempotencyKey: crypto.randomUUID(),
  });
  try {
    await gwop.authIntents.exchange({
      authIntentId: intent.authIntentId,
      idempotencyKey: crypto.randomUUID(),
    });
  } catch (err: any) {
    console.log("instanceof ErrorResponse?", err instanceof errors.ErrorResponse);
    console.log("Status:", err.statusCode);
    if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
      console.log("Error message:", err.data$.error.message);
    } else if (err.body) {
      const body = JSON.parse(err.body);
      console.log("Error code:", body.error?.code);
      console.log("Error message:", body.error?.message);
    }
  }

  // --- Test 6: Missing API key ---
  console.log("\n--- No API key ---");
  const noKeyGwop = new Gwop({});
  try {
    await noKeyGwop.invoices.list();
  } catch (err: any) {
    console.log("Error class:", err.constructor.name);
    console.log("Status:", err.statusCode);
    if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
    } else if (err.body) {
      try {
        const body = JSON.parse(err.body);
        console.log("Error code:", body.error?.code);
      } catch {
        console.log("Body:", err.body?.slice(0, 100));
      }
    } else {
      console.log("Message:", err.message?.slice(0, 100));
    }
  }

  // --- Summary ---
  console.log("\n=== Error codes discovered ===");
  console.log("UNAUTHORIZED (401) — invalid or missing API key");
  console.log("VALIDATION_ERROR (400) — request body failed validation");
  console.log("INVOICE_NOT_FOUND (404) — invoice doesn't exist");
  console.log("INVOICE_CANCEL_NOT_ALLOWED (409/400) — can't cancel non-OPEN invoice");
  console.log("AUTH_INTENT_NOT_SETTLED (402) — agent hasn't paid the challenge");
  console.log("AUTH_INTENT_NOT_FOUND (404) — auth intent doesn't exist");
  console.log("SESSION_NOT_FOUND (404) — session doesn't exist");
  console.log("IDEMPOTENCY_CONFLICT (409) — key reuse with different params");
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
