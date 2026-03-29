/**
 * Test: gwop.invoices.list()
 *
 * Lists invoices with pagination and status filtering.
 *
 * Run: npx tsx --env-file=tests/.env tests/02-invoices-list.ts
 */

import { Gwop } from "../src/index.js";

const gwop = new Gwop();

async function main() {
  console.log("=== invoices.list() ===\n");

  // --- Test 1: Default list (no filters) ---
  console.log("--- Default list ---");
  const { result } = await gwop.invoices.list();
  console.log("Total invoices:", result.pagination.total);
  console.log("Returned:", result.invoices.length);
  console.log("Pagination:", JSON.stringify(result.pagination));

  if (result.invoices.length > 0) {
    const first = result.invoices[0]!;
    console.log("\nFirst invoice shape:");
    console.log("  id:", first.id);
    console.log("  publicInvoiceId:", first.publicInvoiceId);
    console.log("  status:", first.status);
    console.log("  amountUsdc:", first.amountUsdc);
    console.log("  currency:", first.currency);
    console.log("  description:", first.description);
    console.log("  createdAt:", first.createdAt);
    console.log("  expiresAt:", first.expiresAt);
    console.log("  paidAt:", first.paidAt);
    console.log("  paidTxHash:", first.paidTxHash);
    console.log("  paymentChain:", first.paymentChain);
  }

  // --- Test 2: Pagination (limit=2, offset=0) ---
  console.log("\n--- Pagination (limit=2) ---");
  const { result: page1 } = await gwop.invoices.list({ limit: 2, offset: 0 });
  console.log("Page 1 count:", page1.invoices.length);
  console.log("hasMore:", page1.pagination.hasMore);

  if (page1.pagination.hasMore) {
    const { result: page2 } = await gwop.invoices.list({ limit: 2, offset: 2 });
    console.log("Page 2 count:", page2.invoices.length);
    const page1Ids = new Set(page1.invoices.map((i) => i.id));
    const overlap = page2.invoices.some((i) => page1Ids.has(i.id));
    console.log("No overlap between pages?", !overlap ? "PASS" : "FAIL");
  }

  // --- Test 3: Filter by status ---
  for (const status of ["OPEN", "PAID", "EXPIRED", "CANCELED"] as const) {
    const { result: filtered } = await gwop.invoices.list({ status, limit: 3 });
    const allMatch = filtered.invoices.every((i) => i.status === status);
    console.log(
      `\nStatus filter "${status}": ${filtered.pagination.total} total, returned ${filtered.invoices.length}, all match? ${allMatch ? "PASS" : "FAIL"}`,
    );
  }

  // --- Test 4: Find a PAID invoice to check payment fields ---
  console.log("\n--- Paid invoice fields ---");
  const { result: paidList } = await gwop.invoices.list({ status: "PAID", limit: 3 });
  if (paidList.invoices.length > 0) {
    const paid = paidList.invoices[0]!;
    console.log("paidAt:", paid.paidAt);
    console.log("paidTxHash:", paid.paidTxHash);
    console.log("paymentChain:", paid.paymentChain);
    console.log("Has paidAt?", paid.paidAt ? "PASS" : "MISSING");
    console.log("Has paidTxHash?", paid.paidTxHash ? "PASS" : "MISSING");
    console.log("Has paymentChain?", paid.paymentChain ? "PASS" : "MISSING");
  } else {
    console.log("No paid invoices found — skipping payment field check");
  }

  console.log("\n--- Full first item JSON (for docs) ---");
  if (result.invoices.length > 0) {
    console.log(JSON.stringify(result.invoices[0], null, 2));
  }
  console.log("\n--- Full pagination JSON ---");
  console.log(JSON.stringify(result.pagination, null, 2));
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
