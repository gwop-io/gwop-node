# Pricing

## Example Usage

```typescript
import { Pricing } from "gwop/models";

let value: Pricing = {
  baseAmount: 1000000,
  gwopFee: 1000000,
  total: 1000000,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `baseAmount`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | USDC amount in atomic units (6 decimals). Used in REST response bodies. 1000000 = 1.00 USDC. | 1000000                                                                                      |
| `gwopFee`                                                                                    | *number*                                                                                     | :heavy_minus_sign:                                                                           | USDC amount in atomic units (6 decimals). Used in REST response bodies. 1000000 = 1.00 USDC. | 1000000                                                                                      |
| `total`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | USDC amount in atomic units (6 decimals). Used in REST response bodies. 1000000 = 1.00 USDC. | 1000000                                                                                      |