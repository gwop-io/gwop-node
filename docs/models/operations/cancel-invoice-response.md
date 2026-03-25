# CancelInvoiceResponse

## Example Usage

```typescript
import { CancelInvoiceResponse } from "gwop/models/operations";

let value: CancelInvoiceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    status: "CANCELED",
    canceledAt: new Date("2026-03-24T11:02:33.812Z"),
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `result`                                                                | [models.InvoiceCancelResponse](../../models/invoice-cancel-response.md) | :heavy_check_mark:                                                      | N/A                                                                     |