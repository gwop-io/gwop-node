# Auth

## Overview

Agent identity — create challenges, exchange for JWT, manage sessions, verify with JWKS.

### Available Operations

* [getJwks](#getjwks) - JSON Web Key Set

## getJwks

Public JWK set for verifying Gwop Identity JWTs.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getJwks" method="get" path="/.well-known/jwks.json" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop();

async function run() {
  const result = await gwop.auth.getJwks();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { authGetJwks } from "gwop/funcs/auth-get-jwks.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore();

async function run() {
  const res = await authGetJwks(gwop);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authGetJwks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetJwksResponse](../../models/operations/get-jwks-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |