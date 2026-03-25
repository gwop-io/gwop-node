# CreateInvoiceRequest

## Example Usage

```typescript
import { CreateInvoiceRequest } from "gwop/models/operations";

let value: CreateInvoiceRequest = {
  idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
  body: {
    amountUsdc: 1000000,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Client-generated UUID v4 for safe retries.<br/>Requests with the same key return the original response.<br/> | 550e8400-e29b-41d4-a716-446655440000                                                                 |
| `body`                                                                                               | [models.CreateInvoiceRequest](../../models/create-invoice-request.md)                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |