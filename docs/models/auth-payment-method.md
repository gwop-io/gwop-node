# AuthPaymentMethod

## Example Usage

```typescript
import { AuthPaymentMethod } from "gwop/models";

let value: AuthPaymentMethod = {
  id: "x402-solana",
  chain: "base",
  paymentUrl: "https://fixed-tentacle.net",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | [models.AuthPaymentMethodId](../models/auth-payment-method-id.md)       | :heavy_check_mark:                                                      | N/A                                                                     |
| `chain`                                                                 | [models.AuthPaymentMethodChain](../models/auth-payment-method-chain.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `paymentUrl`                                                            | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `hint`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |