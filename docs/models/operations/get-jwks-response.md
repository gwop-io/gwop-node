# GetJwksResponse

## Example Usage

```typescript
import { GetJwksResponse } from "gwop/models/operations";

let value: GetJwksResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    keys: [],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `headers`                                            | Record<string, *string*[]>                           | :heavy_check_mark:                                   | N/A                                                  |
| `result`                                             | [models.JwksResponse](../../models/jwks-response.md) | :heavy_check_mark:                                   | N/A                                                  |