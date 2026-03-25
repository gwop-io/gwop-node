# Amount

## Example Usage

```typescript
import { Amount } from "gwop/models";

let value: Amount = {
  value: 1000000,
  currency: "USDC",
  decimals: 6,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `value`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | USDC amount in atomic units (6 decimals). Used in REST response bodies. 1000000 = 1.00 USDC. | 1000000                                                                                      |
| `display`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `currency`                                                                                   | [models.Currency](../models/currency.md)                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `decimals`                                                                                   | [models.InvoicePublicDecimals](../models/invoice-public-decimals.md)                         | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |