# gwop

Infrastructure for agent-native commerce. Turn AI agents into customers.

[![npm](https://img.shields.io/npm/v/@gwop/sdk)](https://www.npmjs.com/package/@gwop/sdk)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)]()

Gwop gives merchants the missing commerce layer for selling to AI agents. Authenticate agents by wallet, sell subscriptions and credits with USDC, and manage customers — all headless, all API-first.

## What merchants build

Gwop is designed for **headless, agent-native stores** — no browser, no UI, no human in the loop:

- **Credit-based APIs** — Sell prepaid credits, enforce usage limits, track consumption per agent
- **Subscription services** — Plans with tiered access, daily caps, and model restrictions
- **One-time purchases** — Reports, datasets, API packages, or any digital good
- **Agent marketplaces** — Multi-tenant platforms where agents discover, buy, and use services

**Live example:** [AgentRouter](https://agentrouter.lol) ([skill.md](https://agentrouter.lol/skill.md)) — a headless LLM inference store built entirely on Gwop. Agents authenticate by wallet, buy a plan with USDC via x402, and spend credits on stateless LLM requests. No UI. No human. Just HTTP.

### Why not raw x402?

Raw x402 gives you stateless per-request payments. Gwop gives you **customers**:

| Raw x402 | With Gwop |
|----------|-----------|
| Anonymous wallet hits endpoint | Authenticated agent with identity and session |
| Pay per request, every request | Authenticate once, charge upfront, usage flows smoothly |
| No concept of who paid before | Account history, entitlements, plan enforcement |
| Merchant builds auth + billing | One SDK: auth, checkout, webhooks, treasury |

## Get a merchant account

You need a Gwop merchant account to get API keys, merchant wallets, and webhook secrets.

- **Apply:** [merchant.gwop.io/apply](https://merchant.gwop.io/apply)
- **Email:** hello@gwop.io
- **X:** [@gwop_io](https://x.com/gwop_io)

## Install

```bash
npm install @gwop/sdk
```

> ESM only. For CommonJS projects, use `await import("@gwop/sdk")`.

## Quick start

Create a $5 invoice for a starter plan:

```typescript
import { Gwop } from "@gwop/sdk";

const gwop = new Gwop({
  merchantApiKey: process.env.GWOP_MERCHANT_API_KEY,
});

// 1. Create an invoice
const { result: invoice } = await gwop.invoices.create({
  idempotencyKey: crypto.randomUUID(),
  body: {
    amountUsdc: 5_000_000, // $5.00 USDC (6 decimals)
    description: "Starter plan — 300 credits",
    metadata: { planId: "starter" },
  },
});

// 2. Hand the payment URL to the agent
console.log(invoice.publicInvoiceId); // inv_7dbeeaad8ebf...
console.log(invoice.agentProtocol);   // Machine-readable payment instructions

// 3. Check payment status
const { result: status } = await gwop.invoices.get({
  id: invoice.publicInvoiceId,
});
console.log(status.status); // "OPEN" → "PAYING" → "PAID"
```

### Two invoice IDs

Every invoice has two identifiers:

| Field | Format | Used by |
|-------|--------|---------|
| `id` | UUID (`ba7bc94a-...`) | Your backend — list, cancel, internal references |
| `publicInvoiceId` | `inv_*` (`inv_7dbeeaad...`) | Payers and agents — get invoice, payment URLs |

`invoices.get()` takes `publicInvoiceId`. All other methods take the merchant UUID `id`.

### Fee injection

The backend adds a 2.5% platform fee to `amountUsdc`. If you request `5_000_000` ($5.00), the invoice total will be `5_125_000` ($5.125). The fee breakdown is injected into `metadata` automatically.

## Authenticate agents

Identify agents by wallet using a x402 authentication challenge:

```typescript
// 1. Create an auth challenge
const { result: intent } = await gwop.authIntents.create({
  idempotencyKey: crypto.randomUUID(),
});

// 2. The agent pays the dust challenge ($0.001 USDC) via x402
// Hand intent.challenge.paymentMethods to the agent

// 3. Exchange the settled intent for a JWT
const { result: token } = await gwop.authIntents.exchange({
  authIntentId: intent.authIntentId,
  idempotencyKey: crypto.randomUUID(),
});

console.log(token.accessToken);          // RS256-signed JWT
console.log(token.principal.sub);        // "base:0x742d..." or "solana:7sSi..."
console.log(token.account.isNewAccount); // true on first auth

// 4. Verify JWTs locally using Gwop's public keys
const { result: jwks } = await gwop.auth.getJwks();
```

> **Note:** Auth intents enforce strict idempotency — reusing an `idempotencyKey` returns a `409 IDEMPOTENCY_CONFLICT`, not the original response. Always use a fresh UUID.

**Design pattern:** Your backend calls these endpoints with `sk_m_*` keys. Agents never talk to Gwop directly — only your backend does. This is the Auth0 model applied to wallet identity.

## Webhooks

Pass `webhookSecret` to the constructor, then call `validateWebhook()` to verify signatures, check timestamp freshness, and parse into typed events:

```typescript
const gwop = new Gwop({
  merchantApiKey: process.env.GWOP_MERCHANT_API_KEY,
  webhookSecret: process.env.GWOP_WEBHOOK_SECRET, // whsec_*
});

// Express handler
app.post(
  "/webhooks/gwop",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const event = await gwop.validateWebhook({
        request: {
          body: req.body.toString(),
          headers: {
            "x-gwop-signature": req.headers["x-gwop-signature"] as string,
            "x-gwop-event-id": req.headers["x-gwop-event-id"] as string,
            "x-gwop-event-type": req.headers["x-gwop-event-type"] as string,
            "content-type": "application/json",
          },
          url: `https://${req.headers.host}${req.originalUrl}`,
          method: "POST",
        },
      });

      switch (event.body.eventType) {
        case "invoice.paid":
          console.log(event.body.data.publicInvoiceId);
          console.log(event.body.data.paymentChain); // "solana" or "base"
          console.log(event.body.data.txHash);
          console.log(event.body.data.payerWallet);
          break;
        case "invoice.expired":
          // Clean up the pending order
          break;
        case "invoice.canceled":
          // Handle merchant-initiated cancellation
          break;
      }

      res.sendStatus(200);
    } catch (err) {
      console.error("Webhook verification failed:", err);
      res.sendStatus(401);
    }
  },
);
```

`validateWebhook()` uses the Web Crypto API internally — works in Node.js, Deno, Bun, and edge runtimes.

Webhook headers:

| Header | Purpose |
|--------|---------|
| `X-Gwop-Signature` | HMAC-SHA256: `t={timestamp},v1={hmac}` |
| `X-Gwop-Event-Id` | Deduplicate by this UUID |
| `X-Gwop-Event-Type` | Route before parsing the body |

> **Important:** Use the raw body for verification (`req.body.toString()` or `express.raw()`). Re-stringified JSON will break the signature.

## API

### Invoices

| Method | Description |
|--------|-------------|
| `gwop.invoices.create()` | Create an invoice for agent payment |
| `gwop.invoices.list()` | List invoices with pagination and status filter |
| `gwop.invoices.get()` | Get the public invoice view (takes `publicInvoiceId`) |
| `gwop.invoices.cancel()` | Cancel an open invoice (takes merchant UUID `id`) |

### Auth

| Method | Description |
|--------|-------------|
| `gwop.authIntents.create()` | Create a wallet auth challenge |
| `gwop.authIntents.exchange()` | Exchange settled intent for JWT (402 if unpaid) |
| `gwop.authSessions.get()` | Get session status |
| `gwop.authSessions.revoke()` | Revoke a session (logout) |
| `gwop.auth.getJwks()` | Fetch JWKS for local JWT verification |

### Webhooks

| Method | Description |
|--------|-------------|
| `gwop.validateWebhook()` | Verify HMAC signature + parse typed event |

| Event | Trigger |
|-------|---------|
| `invoice.paid` | Invoice settled and funds received |
| `invoice.expired` | Open invoice reached TTL |
| `invoice.canceled` | Merchant canceled an open invoice |

## Errors

All errors follow a consistent shape with `UPPER_SNAKE_CASE` error codes:

```typescript
import * as errors from "@gwop/sdk/models/errors";

try {
  await gwop.invoices.create({
    idempotencyKey: crypto.randomUUID(),
    body: { amountUsdc: -1 },
  });
} catch (error) {
  if (error instanceof errors.ErrorResponse) {
    console.log(error.data$.error.code);    // "VALIDATION_ERROR"
    console.log(error.data$.error.message);  // Human-readable description
    console.log(error.statusCode);           // 400
  }

  if (error instanceof errors.RateLimitError) {
    const wait = error.data$.error.details?.retryAfterSeconds ?? 60;
    await new Promise((r) => setTimeout(r, wait * 1000));
  }
}
```

Build your error handling against codes, not HTTP status codes or message strings. Codes are stable across SDK versions.

| Code | Status | Meaning |
|------|--------|---------|
| `UNAUTHORIZED` | 401 | Invalid, revoked, or missing API key |
| `FORBIDDEN` | 403 | Valid key but merchant account not active |
| `VALIDATION_ERROR` | 400 | Request body failed validation |
| `INVOICE_NOT_FOUND` | 404 | Invoice doesn't exist or not visible to this merchant |
| `INVOICE_CANCEL_NOT_ALLOWED` | 400 | Cannot cancel — invoice is not `OPEN` |
| `AUTH_INTENT_NOT_SETTLED` | 402 | Agent hasn't paid the auth challenge yet |
| `AUTH_INTENT_NOT_FOUND` | 404 | Auth intent doesn't exist |
| `SESSION_NOT_FOUND` | 404 | Session doesn't exist |
| `IDEMPOTENCY_CONFLICT` | 409 | Idempotency key reused with different parameters |
| `RATE_LIMITED` | 429 | Too many requests — check `Retry-After` header |

## Configuration

### Constructor options

```typescript
const gwop = new Gwop({
  merchantApiKey: "sk_m_...",       // Required — your merchant API key
  webhookSecret: "whsec_...",       // Required for validateWebhook()
  serverURL: "https://...",         // Override API base URL
  retryConfig: { /* ... */ },       // Override retry behavior
  timeoutMs: 30_000,                // Request timeout (default: none)
  debugLogger: console,             // Enable debug logging
});
```

The SDK also reads from environment variables:

| Env var | Maps to |
|---------|---------|
| `GWOP_MERCHANT_API_KEY` | `merchantApiKey` |
| `GWOP_DEBUG=true` | `debugLogger: console` |

### Retries

The SDK retries failed requests with exponential backoff. Override per-call or globally:

```typescript
const { result } = await gwop.invoices.create({
  idempotencyKey: crypto.randomUUID(),
  body: { amountUsdc: 5_000_000 },
}, {
  retries: {
    strategy: "backoff",
    backoff: { initialInterval: 1, maxInterval: 50, exponent: 1.1, maxElapsedTime: 100 },
    retryConnectionErrors: false,
  },
});
```

### Debug logging

```typescript
const gwop = new Gwop({
  merchantApiKey: process.env.GWOP_MERCHANT_API_KEY,
  debugLogger: console,
});
```

Or set `GWOP_DEBUG=true` in your environment.

> **Warning:** Debug logging prints API keys in headers. Local development only.

## Response shape

All methods return `{ headers, result }`:

```typescript
const { headers, result } = await gwop.invoices.create({
  idempotencyKey: crypto.randomUUID(),
  body: { amountUsdc: 5_000_000 },
});

// result is the typed response body
console.log(result.id);
console.log(result.publicInvoiceId);

// headers contains raw response headers
console.log(headers);
```

## Full documentation

[docs.gwop.io](https://docs.gwop.io)

## Links

- **Apply for access:** [merchant.gwop.io/apply](https://merchant.gwop.io/apply)
- **Support:** hello@gwop.io
- **X:** [@gwop_io](https://x.com/gwop_io)

---

Built by the Gwop team. MIT License.
