# StatusCheck

## Example Usage

```typescript
import { StatusCheck } from "gwop/models";

let value: StatusCheck = {
  url: "https://kaleidoscopic-juggernaut.biz",
  method: "GET",
  field: "status",
  paidValue: "PAID",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `method`                                                         | [models.InvoicePublicMethod](../models/invoice-public-method.md) | :heavy_check_mark:                                               | N/A                                                              |
| `field`                                                          | [models.InvoicePublicField](../models/invoice-public-field.md)   | :heavy_check_mark:                                               | N/A                                                              |
| `paidValue`                                                      | [models.PaidValue](../models/paid-value.md)                      | :heavy_check_mark:                                               | N/A                                                              |
| `hint`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |