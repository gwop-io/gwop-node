# InvoiceCancelResponse

## Example Usage

```typescript
import { InvoiceCancelResponse } from "gwop/models";

let value: InvoiceCancelResponse = {
  id: "6442bc04-4700-4f7c-a757-db5d5ed44778",
  status: "CANCELED",
  canceledAt: new Date("2026-03-24T11:02:33.812Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 6442bc04-4700-4f7c-a757-db5d5ed44778                                                          |
| `status`                                                                                      | [models.InvoiceCancelResponseStatus](../models/invoice-cancel-response-status.md)             | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `canceledAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |