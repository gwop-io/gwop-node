# Invoices

## Overview

Payment lifecycle — create, list, get, cancel invoices.

### Available Operations

* [create](#create) - Create invoice
* [list](#list) - List invoices
* [get](#get) - Get invoice
* [cancel](#cancel) - Cancel invoice

## create

Create an invoice for agent payment.

The response contains two IDs:
- `id` is the merchant-side UUID
- `public_invoice_id` is the payer-facing `inv_*` identifier


### Example Usage: invalid_idempotency_key

<!-- UsageSnippet language="typescript" operationID="createInvoice" method="post" path="/v1/invoices" example="invalid_idempotency_key" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.invoices.create({
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      amountUsdc: 1000000,
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
import { invoicesCreate } from "gwop/funcs/invoices-create.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await invoicesCreate(gwop, {
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      amountUsdc: 1000000,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: minimal

<!-- UsageSnippet language="typescript" operationID="createInvoice" method="post" path="/v1/invoices" example="minimal" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.invoices.create({
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      amountUsdc: 1000000,
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
import { invoicesCreate } from "gwop/funcs/invoices-create.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await invoicesCreate(gwop, {
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      amountUsdc: 1000000,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: product_invoice

<!-- UsageSnippet language="typescript" operationID="createInvoice" method="post" path="/v1/invoices" example="product_invoice" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.invoices.create({
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      amountUsdc: 5000000,
      description: "Starter plan — 300 credits",
      metadata: {
        "plan_id": "starter",
      },
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
import { invoicesCreate } from "gwop/funcs/invoices-create.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await invoicesCreate(gwop, {
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      amountUsdc: 5000000,
      description: "Starter plan — 300 credits",
      metadata: {
        "plan_id": "starter",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: validation_error

<!-- UsageSnippet language="typescript" operationID="createInvoice" method="post" path="/v1/invoices" example="validation_error" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.invoices.create({
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      amountUsdc: 1000000,
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
import { invoicesCreate } from "gwop/funcs/invoices-create.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await invoicesCreate(gwop, {
    idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
    body: {
      amountUsdc: 1000000,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateInvoiceRequest](../../models/operations/create-invoice-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateInvoiceResponse](../../models/operations/create-invoice-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400                     | application/json        |
| errors.ErrorResponse    | 401, 403, 404           | application/json        |
| errors.RateLimitError   | 429                     | application/json        |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |

## list

List invoices

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listInvoices" method="get" path="/v1/invoices" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.invoices.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { invoicesList } from "gwop/funcs/invoices-list.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await invoicesList(gwop, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInvoicesRequest](../../models/operations/list-invoices-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListInvoicesResponse](../../models/operations/list-invoices-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400, 401, 403           | application/json        |
| errors.RateLimitError   | 429                     | application/json        |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |

## get

Get the public V4 checkout invoice view.

This endpoint is public and requires no authentication. Merchants usually
hand `public_invoice_id` to agents and retain the merchant-side UUID.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getInvoice" method="get" path="/v1/invoices/{id}" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop();

async function run() {
  const result = await gwop.invoices.get({
    id: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { invoicesGet } from "gwop/funcs/invoices-get.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore();

async function run() {
  const res = await invoicesGet(gwop, {
    id: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInvoiceRequest](../../models/operations/get-invoice-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetInvoiceResponse](../../models/operations/get-invoice-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400, 404                | application/json        |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |

## cancel

Cancel an open invoice. This endpoint requires the merchant-side UUID,
not the public `inv_*` identifier.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelInvoice" method="post" path="/v1/invoices/{id}/cancel" -->
```typescript
import { Gwop } from "gwop";

const gwop = new Gwop({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const result = await gwop.invoices.cancel({
    id: "6442bc04-4700-4f7c-a757-db5d5ed44778",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GwopCore } from "gwop/core.js";
import { invoicesCancel } from "gwop/funcs/invoices-cancel.js";

// Use `GwopCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const gwop = new GwopCore({
  merchantApiKey: process.env["GWOP_MERCHANT_API_KEY"] ?? "",
});

async function run() {
  const res = await invoicesCancel(gwop, {
    id: "6442bc04-4700-4f7c-a757-db5d5ed44778",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invoicesCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelInvoiceRequest](../../models/operations/cancel-invoice-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelInvoiceResponse](../../models/operations/cancel-invoice-response.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorResponse    | 400, 401, 403, 404      | application/json        |
| errors.RateLimitError   | 429                     | application/json        |
| errors.GwopDefaultError | 4XX, 5XX                | \*/\*                   |