# ExchangeAuthIntentResponse

## Example Usage

```typescript
import { ExchangeAuthIntentResponse } from "gwop/models/operations";

let value: ExchangeAuthIntentResponse = {
  headers: {},
  result: {
    accessToken: "<value>",
    tokenType: "Bearer",
    expiresIn: 21600,
    principal: {
      sub: "base:0x742d35cc6634c0532925a3b844bc9e7595f2bd18",
      chain: "base",
      walletAddress: "<value>",
    },
    session: {
      sid: "sess_m1xyz98abcde7654",
      sub: "<value>",
      amr: [
        "x402_payment",
      ],
    },
    account: {
      id: "904e9f44-a5a3-4e07-94c9-9c425d6bbe64",
      isNewAccount: true,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ExchangeAuthIntentResponse](../../models/exchange-auth-intent-response.md) | :heavy_check_mark:                                                                 | N/A                                                                                |