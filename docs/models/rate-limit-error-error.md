# RateLimitErrorError

## Example Usage

```typescript
import { RateLimitErrorError } from "gwop/models";

let value: RateLimitErrorError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `code`                | *string*              | :heavy_check_mark:    | N/A                   |
| `message`             | *string*              | :heavy_check_mark:    | N/A                   |
| `details`             | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `requestId`           | *string*              | :heavy_minus_sign:    | N/A                   |