# InvoiceCanceledWebhookEvent

## Example Usage

```typescript
import { InvoiceCanceledWebhookEvent } from "gwop/models";

let value: InvoiceCanceledWebhookEvent = {
  eventId: "4aac416c-9c7e-44e3-ac67-70477082e849",
  eventType: "invoice.canceled",
  eventVersion: 158301,
  createdAt: new Date("2026-03-24T11:02:33.812Z"),
  data: {
    invoiceId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    publicInvoiceId: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
    merchantId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    status: "CANCELED",
    amountUsdc: "5125000",
    currency: "USDC",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `eventType`                                                                                           | [models.InvoiceCanceledWebhookEventEventType](../models/invoice-canceled-webhook-event-event-type.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `eventVersion`                                                                                        | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 2026-03-24T11:02:33.812Z                                                                              |
| `data`                                                                                                | [models.WebhookCanceledInvoiceData](../models/webhook-canceled-invoice-data.md)                       | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |