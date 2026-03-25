# AuthIntents

## Overview

### Available Operations

* [create](#create) - Create auth intent
* [exchange](#exchange) - Exchange auth intent for JWT

## create

Create an authentication challenge for an AI agent.

The response includes payment methods for every chain the merchant has
configured. The returned challenge amount is the source of truth for the
auth challenge amount; do not hard-code a protocol constant.


### Example Usage: invalid_hint

<!-- UsageSnippet language="typescript" operationID="createAuthIntent" method="post" path="/v1/auth-intents" example="invalid_hint" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.authIntents.create({
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      knownWalletHint: "solana:7sSiYiRgU1WTpDm8CmvdjoTWPT9C77gLSmeH3MzDV372",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { authIntentsCreate } from "gwop/funcs/auth-intents-create.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await authIntentsCreate(gwop, {
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      knownWalletHint: "solana:7sSiYiRgU1WTpDm8CmvdjoTWPT9C77gLSmeH3MzDV372",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authIntentsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: minimal

<!-- UsageSnippet language="typescript" operationID="createAuthIntent" method="post" path="/v1/auth-intents" example="minimal" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.authIntents.create({
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { authIntentsCreate } from "gwop/funcs/auth-intents-create.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await authIntentsCreate(gwop, {
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authIntentsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: no_wallets

<!-- UsageSnippet language="typescript" operationID="createAuthIntent" method="post" path="/v1/auth-intents" example="no_wallets" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.authIntents.create({
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      knownWalletHint: "solana:7sSiYiRgU1WTpDm8CmvdjoTWPT9C77gLSmeH3MzDV372",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { authIntentsCreate } from "gwop/funcs/auth-intents-create.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await authIntentsCreate(gwop, {
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      knownWalletHint: "solana:7sSiYiRgU1WTpDm8CmvdjoTWPT9C77gLSmeH3MzDV372",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authIntentsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: with_wallet_hint

<!-- UsageSnippet language="typescript" operationID="createAuthIntent" method="post" path="/v1/auth-intents" example="with_wallet_hint" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.authIntents.create({
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      knownWalletHint: "solana:7sSiYiRgU1WTpDm8CmvdjoTWPT9C77gLSmeH3MzDV372",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { authIntentsCreate } from "gwop/funcs/auth-intents-create.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await authIntentsCreate(gwop, {
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      knownWalletHint: "solana:7sSiYiRgU1WTpDm8CmvdjoTWPT9C77gLSmeH3MzDV372",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authIntentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAuthIntentRequest](../../models/operations/create-auth-intent-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.CreateAuthIntentResponse](../../models/operations/create-auth-intent-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400                     | application/json        |
| errors.ErrorResponse    | 401, 403                | application/json        |
| errors.RateLimitError   | 429                     | application/json        |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |

## exchange

Exchange a settled auth intent for a JWT access token.

Use `Idempotency-Key` on every production call. Without one, a dropped
response can consume the auth intent and force the merchant to create a
replacement challenge.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="exchangeAuthIntent" method="post" path="/v1/auth-intents/{auth_intent_id}/exchange" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.authIntents.exchange({
    authIntentId: "ai_m1abc12defgh3456",
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { authIntentsExchange } from "gwop/funcs/auth-intents-exchange.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await authIntentsExchange(gwop, {
    authIntentId: "ai_m1abc12defgh3456",
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authIntentsExchange failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExchangeAuthIntentRequest](../../models/operations/exchange-auth-intent-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ExchangeAuthIntentResponse](../../models/operations/exchange-auth-intent-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 401, 402, 403, 404      | application/json        |
| errors.ErrorResponse    | 409                     | application/json        |
| errors.RateLimitError   | 429                     | application/json        |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |