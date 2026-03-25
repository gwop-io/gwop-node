# ExchangeAuthIntentResponse

## Example Usage

```typescript
import { ExchangeAuthIntentResponse } from "gwop/models";

let value: ExchangeAuthIntentResponse = {
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
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `accessToken`                                       | *string*                                            | :heavy_check_mark:                                  | RS256-signed JWT.                                   |                                                     |
| `tokenType`                                         | [models.TokenType](../models/token-type.md)         | :heavy_check_mark:                                  | N/A                                                 |                                                     |
| `expiresIn`                                         | *number*                                            | :heavy_check_mark:                                  | N/A                                                 | 21600                                               |
| `principal`                                         | [models.AuthPrincipal](../models/auth-principal.md) | :heavy_check_mark:                                  | N/A                                                 |                                                     |
| `session`                                           | [models.AuthSession](../models/auth-session.md)     | :heavy_check_mark:                                  | N/A                                                 |                                                     |
| `account`                                           | [models.WalletAccount](../models/wallet-account.md) | :heavy_check_mark:                                  | N/A                                                 |                                                     |