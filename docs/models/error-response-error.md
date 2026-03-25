# ErrorResponseError

## Example Usage

```typescript
import { ErrorResponseError } from "gwop/models";

let value: ErrorResponseError = {
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