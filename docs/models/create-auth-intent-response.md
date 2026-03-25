# CreateAuthIntentResponse

## Example Usage

```typescript
import { CreateAuthIntentResponse } from "gwop/models";

let value: CreateAuthIntentResponse = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authIntentId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | ai_m1abc12defgh3456                                                                           |
| `status`                                                                                      | [models.CreateAuthIntentResponseStatus](../models/create-auth-intent-response-status.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `challenge`                                                                                   | [models.AuthChallenge](../models/auth-challenge.md)                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |