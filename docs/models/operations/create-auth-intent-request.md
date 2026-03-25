# CreateAuthIntentRequest

## Example Usage

```typescript
import { CreateAuthIntentRequest } from "gwop/models/operations";

let value: CreateAuthIntentRequest = {
  idempotencyKey: "550e8400-e29b-41d4-a716-446655440000",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Client-generated UUID v4 for safe retries.<br/>Requests with the same key return the original response.<br/> | 550e8400-e29b-41d4-a716-446655440000                                                                 |
| `body`                                                                                               | [models.CreateAuthIntentRequest](../../models/create-auth-intent-request.md)                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |