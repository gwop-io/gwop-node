# InvoicePaymentMethod

## Example Usage

```typescript
import { InvoicePaymentMethod } from "gwop/models";

let value: InvoicePaymentMethod = {
  id: "x402-base",
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
  paymentUrl: "https://different-zebra.org",
  recoverUrl: "https://inferior-gown.info/",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | [models.InvoicePaymentMethodId](../models/invoice-payment-method-id.md)                      | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `kind`                                                                                       | [models.Kind](../models/kind.md)                                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `network`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `chain`                                                                                      | [models.InvoicePaymentMethodChain](../models/invoice-payment-method-chain.md)                | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `asset`                                                                                      | [models.Asset](../models/asset.md)                                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `payTo`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `amount`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | USDC amount in atomic units (6 decimals). Used in REST response bodies. 1000000 = 1.00 USDC. | 1000000                                                                                      |
| `amountDisplay`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `paymentUrl`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `recoverUrl`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |