/**
 * Test: gwop.invoices.create()
 *
 * Creates a $1 test invoice against production.
 * Validates response shape, field types, and agent protocol.
 *
 * Run: npx tsx --env-file=tests/.env tests/01-invoices-create.ts
 */

import { Gwop } from "../src/index.js";

const gwop = new Gwop();

async function main() {
  console.log("=== invoices.create() ===\n");

  // --- Test 1: Basic creation ---
  const idempotencyKey = crypto.randomUUID();
  console.log("Idempotency key:", idempotencyKey);

  const { headers, result } = await gwop.invoices.create({
    idempotencyKey,
    body: {
      amountUsdc: 1_000_000, // $1.00
      description: "SDK test invoice",
      metadata: { test: "true", ts: new Date().toISOString() },
    },
  });

  console.log("\n--- Response ---");
  console.log("id (merchant UUID):", result.id);
  console.log("publicInvoiceId:", result.publicInvoiceId);
  console.log("merchantId:", result.merchantId);
  console.log("amountUsdc:", result.amountUsdc);
  console.log("currency:", result.currency);
  console.log("status:", result.status);
  console.log("description:", result.description);
  console.log("metadata:", result.metadata);
  console.log("metadataPublic:", result.metadataPublic);
  console.log("createdAt:", result.createdAt);
  console.log("expiresAt:", result.expiresAt);

  console.log("\n--- Agent Protocol ---");
  console.log("version:", result.agentProtocol.version);
  console.log("flow:", result.agentProtocol.flow);
  console.log("state:", result.agentProtocol.state);
  console.log("goal:", result.agentProtocol.goal);
  console.log("steps:", result.agentProtocol.steps);
  console.log("nextAction:", JSON.stringify(result.agentProtocol.nextAction, null, 2));
  console.log("completionCheck:", JSON.stringify(result.agentProtocol.completionCheck, null, 2));

  console.log("\n--- Response Headers ---");
  for (const [key, values] of Object.entries(headers)) {
    if (key.toLowerCase().startsWith("x-") || key.toLowerCase() === "retry-after") {
      console.log(`${key}: ${values.join(", ")}`);
    }
  }

  // --- Test 2: Idempotency (same key returns same response) ---
  console.log("\n=== Idempotency test (same key) ===");
  const { result: result2 } = await gwop.invoices.create({
    idempotencyKey, // same key
    body: {
      amountUsdc: 1_000_000,
      description: "SDK test invoice",
      metadata: { test: "true", ts: new Date().toISOString() },
    },
  });
  console.log("Same ID?", result.id === result2.id ? "PASS" : "FAIL");
  console.log("Same publicInvoiceId?", result.publicInvoiceId === result2.publicInvoiceId ? "PASS" : "FAIL");

  // --- Test 3: Metadata public flag ---
  console.log("\n=== metadataPublic=true ===");
  const { result: result3 } = await gwop.invoices.create({
    idempotencyKey: crypto.randomUUID(),
    body: {
      amountUsdc: 500_000, // $0.50
      description: "Public metadata test",
      metadata: { visible: "to-payer" },
      metadataPublic: true,
    },
  });
  console.log("metadataPublic:", result3.metadataPublic);
  console.log("publicInvoiceId:", result3.publicInvoiceId);

  // --- Test 4: Custom expiry ---
  console.log("\n=== Custom expiry (60s) ===");
  const { result: result4 } = await gwop.invoices.create({
    idempotencyKey: crypto.randomUUID(),
    body: {
      amountUsdc: 100_000, // $0.10
      expiresInSeconds: 60,
    },
  });
  const ttlSeconds = (result4.expiresAt.getTime() - result4.createdAt.getTime()) / 1000;
  console.log("TTL:", ttlSeconds, "seconds", Math.abs(ttlSeconds - 60) < 2 ? "PASS" : "FAIL");

  // --- Summary: Save IDs for subsequent tests ---
  console.log("\n=== IDs for next tests ===");
  console.log(`INVOICE_ID=${result.id}`);
  console.log(`PUBLIC_INVOICE_ID=${result.publicInvoiceId}`);

  console.log("\n--- Full JSON (for docs) ---");
  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
