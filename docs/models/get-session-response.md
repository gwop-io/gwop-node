# GetSessionResponse

## Example Usage

```typescript
import { GetSessionResponse } from "gwop/models";

let value: GetSessionResponse = {
  sessionId: "<id>",
  status: "revoked",
  sub: "<value>",
  chain: "solana",
  walletAddress: "<value>",
  createdAt: new Date("2026-03-24T11:02:33.812Z"),
  expiresAt: new Date("2026-03-24T11:02:33.812Z"),
  revokedAt: null,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [models.GetSessionResponseStatus](../models/get-session-response-status.md)                   | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `sub`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `chain`                                                                                       | [models.GetSessionResponseChain](../models/get-session-response-chain.md)                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `walletAddress`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | <nil>                                                                                         |