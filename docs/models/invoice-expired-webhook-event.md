# InvoiceExpiredWebhookEvent

## Example Usage

```typescript
import { InvoiceExpiredWebhookEvent } from "gwop/models";

let value: InvoiceExpiredWebhookEvent = {
  eventId: "93bd2eb5-2fa3-44f1-b83b-8d8422961340",
  eventType: "invoice.expired",
  eventVersion: 503581,
  createdAt: new Date("2026-03-24T11:02:33.812Z"),
  data: {
    invoiceId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    publicInvoiceId: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
    merchantId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    status: "EXPIRED",
    amountUsdc: "5125000",
    currency: "USDC",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `eventType`                                                                                         | [models.InvoiceExpiredWebhookEventEventType](../models/invoice-expired-webhook-event-event-type.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `eventVersion`                                                                                      | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 | 2026-03-24T11:02:33.812Z                                                                            |
| `data`                                                                                              | [models.WebhookExpiredInvoiceData](../models/webhook-expired-invoice-data.md)                       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |