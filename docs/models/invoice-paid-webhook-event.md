# InvoicePaidWebhookEvent

## Example Usage

```typescript
import { InvoicePaidWebhookEvent } from "gwop/models";

let value: InvoicePaidWebhookEvent = {
  eventId: "3d26d257-f43c-457a-8f65-a7240eca8b8d",
  eventType: "invoice.paid",
  eventVersion: 3000,
  createdAt: new Date("2026-03-24T11:02:33.812Z"),
  data: {
    invoiceId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    publicInvoiceId: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
    merchantId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    status: "PAID",
    amountUsdc: "5125000",
    currency: "USDC",
    paymentChain: "solana",
    paidAt: new Date("2026-03-24T11:02:33.812Z"),
    payerWallet: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `eventType`                                                                                   | [models.InvoicePaidWebhookEventEventType](../models/invoice-paid-webhook-event-event-type.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `eventVersion`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `data`                                                                                        | [models.WebhookPaidInvoiceData](../models/webhook-paid-invoice-data.md)                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |