# ListInvoicesRequest

## Example Usage

```typescript
import { ListInvoicesRequest } from "gwop/models/operations";

let value: ListInvoicesRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    | 20                                                     |
| `offset`                                               | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    | 0                                                      |
| `status`                                               | [models.InvoiceStatus](../../models/invoice-status.md) | :heavy_minus_sign:                                     | Filter by invoice status                               |                                                        |