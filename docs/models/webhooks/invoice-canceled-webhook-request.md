# InvoiceCanceledWebhookRequest

## Example Usage

```typescript
import { InvoiceCanceledWebhookRequest } from "gwop/models/webhooks";

let value: InvoiceCanceledWebhookRequest = {
  xGwopSignature:
    "t=1711278153,v1=6bc4cb4b6f8d7c1d720c3d3dc9f2a2b6c05bd6c34b3cb47ce1f1de8fdd8d78ee",
  xGwopEventId: "c0fdb16b-21d9-45e2-87b0-4c08d96db1ff",
  xGwopEventType: "invoice.canceled",
  body: {
    eventId: "42f8bf8f-8415-40a7-9250-ea81d9803350",
    eventType: "invoice.canceled",
    eventVersion: 861575,
    createdAt: new Date("2026-03-24T11:02:33.812Z"),
    data: {
      invoiceId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
      publicInvoiceId: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
      merchantId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
      status: "CANCELED",
      amountUsdc: "5125000",
      currency: "USDC",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `xGwopSignature`                                                                     | *string*                                                                             | :heavy_check_mark:                                                                   | Verify `HMAC_SHA256("{timestamp}.{raw_body}", webhook_secret)`.                      | t=1711278153,v1=6bc4cb4b6f8d7c1d720c3d3dc9f2a2b6c05bd6c34b3cb47ce1f1de8fdd8d78ee     |
| `xGwopEventId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | c0fdb16b-21d9-45e2-87b0-4c08d96db1ff                                                 |
| `xGwopEventType`                                                                     | [models.WebhookEventType](../../models/webhook-event-type.md)                        | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `body`                                                                               | [models.InvoiceCanceledWebhookEvent](../../models/invoice-canceled-webhook-event.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |