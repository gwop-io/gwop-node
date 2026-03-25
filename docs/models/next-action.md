# NextAction

## Example Usage

```typescript
import { NextAction } from "gwop/models";

let value: NextAction = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `method`                                                   | [models.NextActionMethod](../models/next-action-method.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `path`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `bodyTemplate`                                             | Record<string, *any*>                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `expectStatus`                                             | *number*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `retry`                                                    | [models.Retry](../models/retry.md)                         | :heavy_minus_sign:                                         | N/A                                                        |