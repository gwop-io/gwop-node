/**
 * Test: gwop.authSessions.get() + gwop.authSessions.revoke()
 *
 * Tests session endpoints. Without a real session from a completed auth flow,
 * we test error shapes for invalid session IDs.
 *
 * Run: npx tsx --env-file=tests/.env tests/08-auth-sessions.ts
 */

import { Gwop } from "../src/index.js";

const gwop = new Gwop();

async function main() {
  console.log("=== authSessions ===\n");

  // --- Test 1: Get invalid session ---
  console.log("--- Get invalid session ---");
  try {
    await gwop.authSessions.get({ sessionId: "sess_doesnotexist" });
    console.log("UNEXPECTED — should have thrown");
  } catch (err: any) {
    console.log("Error class:", err.constructor.name);
    console.log("Status:", err.statusCode);
    if (err.body) {
      const body = JSON.parse(err.body);
      console.log("Error code:", body.error?.code);
      console.log("Error message:", body.error?.message);
    } else if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
      console.log("Error message:", err.data$.error.message);
    }
    console.log("PASS — expected error for invalid session");
  }

  // --- Test 2: Revoke invalid session ---
  console.log("\n--- Revoke invalid session ---");
  try {
    await gwop.authSessions.revoke({ sessionId: "sess_doesnotexist" });
    console.log("UNEXPECTED — should have thrown");
  } catch (err: any) {
    console.log("Error class:", err.constructor.name);
    console.log("Status:", err.statusCode);
    if (err.body) {
      const body = JSON.parse(err.body);
      console.log("Error code:", body.error?.code);
      console.log("Error message:", body.error?.message);
    } else if (err.data$?.error) {
      console.log("Error code:", err.data$.error.code);
      console.log("Error message:", err.data$.error.message);
    }
    console.log("PASS — expected error for invalid session");
  }

  console.log("\n--- Session model shape (from types) ---");
  console.log(
    "GetSessionResponse fields: sessionId, status, sub, chain, walletAddress, createdAt, expiresAt, revokedAt",
  );
  console.log("Status values: active, revoked, expired");
  console.log("Chain values: base, solana");
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
