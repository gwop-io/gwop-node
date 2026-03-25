# CreateAuthIntentResponse

## Example Usage

```typescript
import { CreateAuthIntentResponse } from "gwop/models/operations";

let value: CreateAuthIntentResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    authIntentId: "ai_m1abc12defgh3456",
    status: "OPEN",
    expiresAt: new Date("2026-03-24T11:02:33.812Z"),
    challenge: {
      amountUsdcAtomic: "5125000",
      paymentMethods: [
        {
          id: "x402-base",
          chain: "base",
          paymentUrl: "https://narrow-bandwidth.name/",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.CreateAuthIntentResponse](../../models/create-auth-intent-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |