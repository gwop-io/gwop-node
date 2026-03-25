# InvoiceListResponse

## Example Usage

```typescript
import { InvoiceListResponse } from "gwop/models";

let value: InvoiceListResponse = {
  invoices: [
    {
      id: "6442bc04-4700-4f7c-a757-db5d5ed44778",
      publicInvoiceId: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
      status: "CANCELED",
      amountUsdc: 1000000,
      currency: "USDC",
      expiresAt: new Date("2026-03-24T11:02:33.812Z"),
      createdAt: new Date("2026-03-24T11:02:33.812Z"),
      paidAt: new Date("2026-03-24T11:02:33.812Z"),
    },
  ],
  pagination: {
    total: 128163,
    limit: 374500,
    offset: 222092,
    hasMore: false,
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `invoices`                                                 | [models.InvoiceListItem](../models/invoice-list-item.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `pagination`                                               | [models.Pagination](../models/pagination.md)               | :heavy_check_mark:                                         | N/A                                                        |