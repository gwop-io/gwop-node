# GetAuthSessionResponse

## Example Usage

```typescript
import { GetAuthSessionResponse } from "gwop/models/operations";

let value: GetAuthSessionResponse = {
  headers: {},
  result: {
    sessionId: "<id>",
    status: "active",
    sub: "<value>",
    chain: "base",
    walletAddress: "<value>",
    createdAt: new Date("2026-03-24T11:02:33.812Z"),
    expiresAt: new Date("2026-03-24T11:02:33.812Z"),
    revokedAt: null,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `headers`                                                         | Record<string, *string*[]>                                        | :heavy_check_mark:                                                | N/A                                                               |
| `result`                                                          | [models.GetSessionResponse](../../models/get-session-response.md) | :heavy_check_mark:                                                | N/A                                                               |