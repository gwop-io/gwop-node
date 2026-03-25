# ListInvoicesResponse

## Example Usage

```typescript
import { ListInvoicesResponse } from "gwop/models/operations";

let value: ListInvoicesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    invoices: [],
    pagination: {
      total: 128163,
      limit: 374500,
      offset: 222092,
      hasMore: false,
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `headers`                                                           | Record<string, *string*[]>                                          | :heavy_check_mark:                                                  | N/A                                                                 |
| `result`                                                            | [models.InvoiceListResponse](../../models/invoice-list-response.md) | :heavy_check_mark:                                                  | N/A                                                                 |