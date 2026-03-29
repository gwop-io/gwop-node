/**
 * Test: gwop.auth.getJwks()
 *
 * Fetches the JWKS from identity.gwop.io for local JWT verification.
 *
 * Run: npx tsx --env-file=tests/.env tests/07-auth-jwks.ts
 */

import { Gwop } from "../src/index.js";

const gwop = new Gwop();

async function main() {
  console.log("=== auth.getJwks() ===\n");

  const { result } = await gwop.auth.getJwks();

  console.log("Keys count:", result.keys.length);

  for (const key of result.keys) {
    console.log("\n--- Key ---");
    console.log("kty:", key.kty);
    console.log("use:", key.use);
    console.log("alg:", key.alg);
    console.log("kid:", key.kid);
    console.log("n (first 40 chars):", `${key.n?.slice(0, 40)}...`);
    console.log("e:", key.e);
  }

  console.log("\n--- Full JSON (for docs) ---");
  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  console.error("\nFAILED:", err);
  process.exit(1);
});
