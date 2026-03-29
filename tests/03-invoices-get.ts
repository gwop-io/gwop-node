/**
 * Test: gwop.invoices.get()
 *
 * Fetches the full public invoice view by publicInvoiceId.
 * Tests both an OPEN invoice and a PAID invoice.
 *
 * Run: npx tsx --env-file=tests/.env tests/03-invoices-get.ts
 */

import { Gwop } from "../src/index.js";

const gwop = new Gwop();

async function main() {
  console.log("=== invoices.get() ===\n");

  // Create a fresh invoice to get
  const { result: created } = await gwop.invoices.create({
    idempotencyKey: crypto.randomUUID(),
    body: {
      amountUsdc: 1_000_000,
      description: "Get test invoice",
      metadata: { test: "get" },
      metadataPublic: true,
    },
  });

  // --- Test 1: Get OPEN invoice ---
  console.log("--- Get OPEN invoice ---");
  const { result: invoice } = await gwop.invoices.get({
    id: created.publicInvoiceId,
  });

  console.log("schemaVersion:", invoice.schemaVersion);
  console.log("id:", invoice.id);
  console.log("status:", invoice.status);

  console.log("\n--- Amount ---");
  console.log("value:", invoice.amount.value);
  console.log("display:", invoice.amount.display);
  console.log("currency:", invoice.amount.currency);
  console.log("decimals:", invoice.amount.decimals);

  console.log("\n--- Pricing ---");
  console.log("baseAmount:", invoice.pricing?.baseAmount);
  console.log("gwopFee:", invoice.pricing?.gwopFee);
  console.log("total:", invoice.pricing?.total);

  console.log("\n--- Merchant ---");
  console.log("name:", invoice.merchant.name);
  console.log("verified:", invoice.merchant.verified);

  console.log("\n--- Status Check ---");
  console.log("url:", invoice.statusCheck.url);
  console.log("method:", invoice.statusCheck.method);
  console.log("field:", invoice.statusCheck.field);
  console.log("paidValue:", invoice.statusCheck.paidValue);
  console.log("hint:", invoice.statusCheck.hint);

  console.log("\n--- Links ---");
  console.log("landingPage:", invoice.links.landingPage);
  console.log("docs:", invoice.links.docs);

  console.log("\n--- Payment Methods ---");
  console.log("Count:", invoice.paymentMethods?.length ?? 0);
  if (invoice.paymentMethods) {
    for (const pm of invoice.paymentMethods) {
      console.log(JSON.stringify(pm, null, 2));
    }
  }

  console.log("\n--- Metadata (public) ---");
  console.log("metadata:", invoice.metadata);
  console.log("description:", invoice.description);

  // --- Test 2: Get a PAID invoice ---
  console.log("\n--- Get PAID invoice ---");
  const { result: paidList } = await gwop.invoices.list({ status: "PAID", limit: 1 });
  if (paidList.invoices.length > 0) {
    const paidItem = paidList.invoices[0]!;
    const { result: paidInvoice } = await gwop.invoices.get({
      id: paidItem.publicInvoiceId,
    });

    console.log("status:", paidInvoice.status);
    console.log("paidAt:", paidInvoice.paidAt);
    console.log("paidAmount:", paidInvoice.paidAmount);
    console.log("paymentChain:", paidInvoice.paymentChain);
    console.log("paymentChainCaip2:", paidInvoice.paymentChainCaip2);
    console.log("paidTxHash:", paidInvoice.paidTxHash);
    console.log("txUrl:", paidInvoice.txUrl);
    console.log("paymentMethods present?", (paidInvoice.paymentMethods?.length ?? 0) > 0 ? "YES" : "NO");
  } else {
    console.log("No paid invoices — skipping");
  }

  // --- Test 3: 404 for non-existent invoice ---
  console.log("\n--- 404 test ---");
  try {
    await gwop.invoices.get({ id: "inv_doesnotexist" });
    console.log("FAIL — should have thrown");
  } catch (err: any) {
    console.log("Error class:", err.constructor.name);
    if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
      console.log("Error message:", err.data$.error.message);
    }
    console.log("Status:", err.statusCode);
    console.log("PASS — got expected error");
  }

  console.log("\n--- Full OPEN invoice JSON (for docs) ---");
  console.log(JSON.stringify(invoice, null, 2));
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
