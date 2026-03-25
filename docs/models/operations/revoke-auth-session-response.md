# RevokeAuthSessionResponse

## Example Usage

```typescript
import { RevokeAuthSessionResponse } from "gwop/models/operations";

let value: RevokeAuthSessionResponse = {
  headers: {},
  result: {
    revoked: true,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `result`                                                                | [models.RevokeSessionResponse](../../models/revoke-session-response.md) | :heavy_check_mark:                                                      | N/A                                                                     |