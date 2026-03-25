# GetInvoiceResponse

## Example Usage

```typescript
import { GetInvoiceResponse } from "gwop/models/operations";

let value: GetInvoiceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    schemaVersion: "gwop.invoice.v4",
    id: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
    status: "EXPIRED",
    amount: {
      value: 1000000,
      currency: "USDC",
      decimals: 6,
    },
    pricing: {
      baseAmount: 1000000,
      gwopFee: 1000000,
      total: 1000000,
    },
    expiresAt: new Date("2026-03-24T11:02:33.812Z"),
    createdAt: new Date("2026-03-24T11:02:33.812Z"),
    merchant: {
      name: "<value>",
      verified: false,
    },
    statusCheck: {
      url: "https://supportive-final.name/",
      method: "GET",
      field: "status",
      paidValue: "PAID",
    },
    links: {
      landingPage: "https://ajar-exhaust.name/",
      docs: "https://each-hamburger.org/",
    },
    paymentMethods: [
      {
        id: "x402-solana",
        kind: "x402",
        network: "<value>",
        chain: "solana",
        asset: {
          symbol: "USDC",
          decimals: 6,
          contract: "<value>",
        },
        payTo: "<value>",
        amount: 1000000,
        amountDisplay: "<value>",
        paymentUrl: "https://ugly-creator.net/",
        recoverUrl: "https://smart-mobility.info/",
      },
    ],
    paidAt: new Date("2026-03-24T11:02:33.812Z"),
    paidAmount: 1000000,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [models.InvoicePublic](../../models/invoice-public.md) | :heavy_check_mark:                                     | N/A                                                    |