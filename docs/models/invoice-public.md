# InvoicePublic

## Example Usage

```typescript
import { InvoicePublic } from "gwop/models";

let value: InvoicePublic = {
  schemaVersion: "gwop.invoice.v4",
  id: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
  status: "OPEN",
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `schemaVersion`                                                                               | [models.SchemaVersion](../models/schema-version.md)                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | inv_01JXYZ8A4S5D6F7G8H9JKL0MNP                                                                |
| `status`                                                                                      | [models.InvoiceStatus](../models/invoice-status.md)                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `amount`                                                                                      | [models.Amount](../models/amount.md)                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `pricing`                                                                                     | [models.Pricing](../models/pricing.md)                                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `merchant`                                                                                    | [models.Merchant](../models/merchant.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `statusCheck`                                                                                 | [models.StatusCheck](../models/status-check.md)                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `links`                                                                                       | [models.Links](../models/links.md)                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentMethods`                                                                              | [models.InvoicePaymentMethod](../models/invoice-payment-method.md)[]                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `paidAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `paidAmount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | USDC amount in atomic units (6 decimals). Used in REST response bodies. 1000000 = 1.00 USDC.  | 1000000                                                                                       |
| `paymentChain`                                                                                | [models.InvoicePublicPaymentChain](../models/invoice-public-payment-chain.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `paymentChainCaip2`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `paidTxHash`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `txUrl`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |