/**
 * Test: gwop.invoices.cancel()
 *
 * Creates an invoice then cancels it. Tests cancel response shape,
 * idempotent cancel, and cancel-after-cancel behavior.
 *
 * Run: npx tsx --env-file=tests/.env tests/04-invoices-cancel.ts
 */

import { Gwop } from "../src/index.js";

const gwop = new Gwop();

async function main() {
  console.log("=== invoices.cancel() ===\n");

  // Create a fresh invoice to cancel
  const { result: created } = await gwop.invoices.create({
    idempotencyKey: crypto.randomUUID(),
    body: {
      amountUsdc: 100_000, // $0.10
      description: "Cancel test invoice",
    },
  });
  console.log("Created invoice:", created.id);
  console.log("Status before cancel:", created.status);

  // --- Test 1: Cancel the invoice ---
  console.log("\n--- Cancel ---");
  const { result: canceled } = await gwop.invoices.cancel({
    id: created.id, // NOTE: merchant-side UUID, not publicInvoiceId
  });

  console.log("id:", canceled.id);
  console.log("status:", canceled.status);
  console.log("canceledAt:", canceled.canceledAt);

  // --- Test 2: Verify via get ---
  console.log("\n--- Verify via get ---");
  const { result: fetched } = await gwop.invoices.get({
    id: created.publicInvoiceId,
  });
  console.log("Status after cancel:", fetched.status);
  console.log("paymentMethods?", fetched.paymentMethods ? "present" : "absent");
  console.log("Status is CANCELED?", fetched.status === "CANCELED" ? "PASS" : "FAIL");

  // --- Test 3: Cancel already-canceled invoice ---
  console.log("\n--- Cancel again (idempotent?) ---");
  try {
    const { result: again } = await gwop.invoices.cancel({ id: created.id });
    console.log("Second cancel status:", again.status);
    console.log("Idempotent cancel? PASS");
  } catch (err: any) {
    console.log("Second cancel threw:", err.constructor.name);
    if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
      console.log("Error message:", err.data$.error.message);
    }
    console.log("Cancel is NOT idempotent — noted for docs");
  }

  // --- Test 4: Cancel a paid invoice (should fail) ---
  console.log("\n--- Cancel paid invoice ---");
  const { result: paidList } = await gwop.invoices.list({ status: "PAID", limit: 1 });
  if (paidList.invoices.length > 0) {
    try {
      await gwop.invoices.cancel({ id: paidList.invoices[0]!.id });
      console.log("FAIL — should not be able to cancel paid invoice");
    } catch (err: any) {
      console.log("Error class:", err.constructor.name);
      if (err.data$?.error) {
        console.log("Error code:", err.data$.error.code);
        console.log("Error message:", err.data$.error.message);
      }
      console.log("PASS — cannot cancel paid invoice");
    }
  } else {
    console.log("No paid invoices — skipping");
  }

  console.log("\n--- Full cancel response JSON ---");
  console.log(JSON.stringify(canceled, null, 2));
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
