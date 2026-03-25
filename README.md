# gwop

The commerce API for teams selling to AI agents.

[![npm](https://img.shields.io/npm/v/gwop)](https://www.npmjs.com/package/gwop)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue.svg)]()

## Get a merchant account

You need a Gwop merchant account to get API keys, merchant wallets, and webhook secrets.

- **Apply:** [merchant.gwop.io/apply](https://merchant.gwop.io/apply)
- **Email:** hello@gwop.io
- **X:** [@gwop_io](https://x.com/gwop_io)

## Install

```bash
npm install gwop
```

> ESM only. For CommonJS projects, use `await import("gwop")`.

## Quick start

Create a $5 invoice for a starter plan:

```typescript
import { Gwop } from "gwop";

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
console.log(invoice.publicInvoiceId); // inv_01JXYZ8A4S...
console.log(invoice.agentProtocol);   // Machine-readable payment instructions

// 3. Check payment status
const { result: paid } = await gwop.invoices.get({
  id: invoice.publicInvoiceId,
});
console.log(paid.status); // "OPEN" → "PAYING" → "PAID"
```

## Authenticate agents

Identify agents by wallet using a x402 authentication challenge:

```typescript
// 1. Create an auth challenge
const { result: intent } = await gwop.authIntents.create({
  idempotencyKey: crypto.randomUUID(),
});

// 2. The agent pays the dust challenge via the x402 payment URL generated within the auth invoice
// Your backend hands intent.challenge.paymentMethods to the agent

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

**Design pattern:** Your backend calls these endpoints with `sk_m_*` keys. Agents never talk to Gwop directly — only your backend does. This is the Auth0 model applied to wallet identity.

## Webhooks

Verify and handle webhook events:

```typescript
const event = await gwop.validateWebhook({ request: req });

switch (event.body.eventType) {
  case "invoice.paid":
    // Credit the agent's account
    console.log(event.body.data.publicInvoiceId); // inv_01JXYZ...
    console.log(event.body.data.paymentChain);    // "solana" or "base"
    console.log(event.body.data.payerWallet);     // The agent's wallet
    console.log(event.body.data.paidAt);          // Settlement timestamp
    break;

  case "invoice.expired":
    // Clean up the pending order
    break;

  case "invoice.canceled":
    // Handle merchant-initiated cancellation
    break;
}
```

Webhook headers:

| Header | Purpose |
|--------|---------|
| `X-Gwop-Signature` | HMAC-SHA256: `t={timestamp},v1={hmac}` |
| `X-Gwop-Event-Id` | Deduplicate by this UUID |
| `X-Gwop-Event-Type` | Route before parsing the body |

## API

### Invoices

| Method | Description |
|--------|-------------|
| `gwop.invoices.create()` | Create an invoice for agent payment |
| `gwop.invoices.list()` | List invoices with optional status filter |
| `gwop.invoices.get()` | Get the public invoice view (no auth required) |
| `gwop.invoices.cancel()` | Cancel an open invoice |

### Auth

| Method | Description |
|--------|-------------|
| `gwop.authIntents.create()` | Create a wallet auth challenge |
| `gwop.authIntents.exchange()` | Exchange settled intent for JWT |
| `gwop.authSessions.get()` | Get session status |
| `gwop.authSessions.revoke()` | Revoke a session (logout) |
| `gwop.auth.getJwks()` | Fetch JWKS for local JWT verification |

### Webhooks

| Event | Trigger |
|-------|---------|
| `invoice.paid` | Invoice settled and funds received |
| `invoice.expired` | Open invoice reached TTL |
| `invoice.canceled` | Merchant canceled an open invoice |

Full documentation: [docs.gwop.io](https://docs.gwop.io)

## Errors

All errors follow a consistent shape with `UPPER_SNAKE_CASE` error codes:

```typescript
import * as errors from "gwop/models/errors";

try {
  await gwop.invoices.create({
    body: { amountUsdc: 5_000_000 },
  });
} catch (error) {
  if (error instanceof errors.ErrorResponse) {
    console.log(error.data$.error.code);    // "UNAUTHORIZED", "VALIDATION_ERROR", etc.
    console.log(error.data$.error.message);  // Human-readable description
    console.log(error.statusCode);           // 401, 400, etc.
  }

  if (error instanceof errors.RateLimitError) {
    console.log(error.data$.error.details?.retryAfterSeconds); // 60
  }
}
```

Error codes are stable. Build your error handling against them, not HTTP status codes or message strings.

| Code | Status | Meaning |
|------|--------|---------|
| `UNAUTHORIZED` | 401 | Invalid or missing API key |
| `FORBIDDEN` | 403 | Valid key but account not active |
| `VALIDATION_ERROR` | 400 | Request body failed validation |
| `INVOICE_NOT_FOUND` | 404 | Invoice doesn't exist or not visible |
| `RATE_LIMITED` | 429 | Too many requests — check `Retry-After` header |

## Configuration

### Retries

The SDK retries failed requests with exponential backoff. Override per-call or globally:

```typescript
const result = await gwop.invoices.create({
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

## Links

- **Apply for access:** [merchant.gwop.io/apply](https://merchant.gwop.io/apply)
- **Support:** hello@gwop.io
- **X:** [@gwop_io](https://x.com/gwop_io)

---

Built by the Gwop team. MIT License.
