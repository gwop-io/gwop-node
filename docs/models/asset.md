# Asset

## Example Usage

```typescript
import { Asset } from "gwop/models";

let value: Asset = {
  symbol: "USDC",
  decimals: 6,
  contract: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `symbol`                                                                            | [models.Symbol](../models/symbol.md)                                                | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `decimals`                                                                          | [models.InvoicePaymentMethodDecimals](../models/invoice-payment-method-decimals.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `contract`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |