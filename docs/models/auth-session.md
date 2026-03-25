# AuthSession

## Example Usage

```typescript
import { AuthSession } from "gwop/models";

let value: AuthSession = {
  sid: "sess_m1xyz98abcde7654",
  sub: "<value>",
  amr: [
    "x402_payment",
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `sid`                 | *string*              | :heavy_check_mark:    | N/A                   | sess_m1xyz98abcde7654 |
| `sub`                 | *string*              | :heavy_check_mark:    | N/A                   |                       |
| `amr`                 | *string*[]            | :heavy_check_mark:    | N/A                   | [<br/>"x402_payment"<br/>] |