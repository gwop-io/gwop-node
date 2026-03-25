# AuthChallenge

## Example Usage

```typescript
import { AuthChallenge } from "gwop/models";

let value: AuthChallenge = {
  amountUsdcAtomic: "5125000",
  paymentMethods: [
    {
      id: "x402-base",
      chain: "base",
      paymentUrl: "https://narrow-bandwidth.name/",
    },
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `amountUsdcAtomic`                                                                                                    | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | USDC amount in atomic units as a numeric string. Used in webhook payloads and auth challenges. "1000000" = 1.00 USDC. | 5125000                                                                                                               |
| `paymentMethods`                                                                                                      | [models.AuthPaymentMethod](../models/auth-payment-method.md)[]                                                        | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |