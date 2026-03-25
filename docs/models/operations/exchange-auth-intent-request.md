# ExchangeAuthIntentRequest

## Example Usage

```typescript
import { ExchangeAuthIntentRequest } from "gwop/models/operations";

let value: ExchangeAuthIntentRequest = {
  authIntentId: "ai_m1abc12defgh3456",
  idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `authIntentId`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | Auth intent ID from create response                                                                  | ai_m1abc12defgh3456                                                                                  |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Client-generated UUID v4 for safe retries.<br/>Requests with the same key return the original response.<br/> | 550e8400-e29b-41d4-a716-446655440000                                                                 |