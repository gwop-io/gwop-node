# AuthSessions

## Overview

### Available Operations

* [revoke](#revoke) - Revoke session
* [get](#get) - Get session status

## revoke

Revoke an auth session.

The JWT remains cryptographically valid until expiry. Use session lookup
when immediate logout enforcement matters.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="revokeAuthSession" method="post" path="/v1/auth-sessions/revoke" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.authSessions.revoke({
    sessionId: "sess_m1xyz98abcde7654",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { authSessionsRevoke } from "gwop/funcs/auth-sessions-revoke.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await authSessionsRevoke(gwop, {
    sessionId: "sess_m1xyz98abcde7654",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authSessionsRevoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.RevokeSessionRequest](../../models/revoke-session-request.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.RevokeAuthSessionResponse](../../models/operations/revoke-auth-session-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400, 401, 403, 404      | application/json        |
| errors.RateLimitError   | 429                     | application/json        |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |

## get

Get the current status of an auth session.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAuthSession" method="get" path="/v1/auth-sessions/{session_id}" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.authSessions.get({
    sessionId: "sess_m1xyz98abcde7654",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { authSessionsGet } from "gwop/funcs/auth-sessions-get.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await authSessionsGet(gwop, {
    sessionId: "sess_m1xyz98abcde7654",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authSessionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAuthSessionRequest](../../models/operations/get-auth-session-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetAuthSessionResponse](../../models/operations/get-auth-session-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 401, 403, 404           | application/json        |
| errors.RateLimitError   | 429                     | application/json        |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |