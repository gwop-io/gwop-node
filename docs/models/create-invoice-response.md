# CreateInvoiceResponse

## Example Usage

```typescript
import { CreateInvoiceResponse } from "gwop/models";

let value: CreateInvoiceResponse = {
  id: "6442bc04-4700-4f7c-a757-db5d5ed44778",
  publicInvoiceId: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
  merchantId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
  amountUsdc: 1000000,
  currency: "USDC",
  status: "PAID",
  metadataPublic: true,
  createdAt: new Date("2026-03-24T11:02:33.812Z"),
  expiresAt: new Date("2026-03-24T11:02:33.812Z"),
  agentProtocol: {
    version: "1.0",
    flow: "invoice_checkout",
    state: "invoice_created",
    goal: "<value>",
    steps: [
      "<value 1>",
      "<value 2>",
    ],
    completionCheck: {
      method: "GET",
      path: "/opt/bin",
      field: "status",
      successValue: "PAID",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 6442bc04-4700-4f7c-a757-db5d5ed44778                                                          |
| `publicInvoiceId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | inv_01JXYZ8A4S5D6F7G8H9JKL0MNP                                                                |
| `merchantId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 6442bc04-4700-4f7c-a757-db5d5ed44778                                                          |
| `amountUsdc`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | USDC amount in atomic units (6 decimals). Used in REST response bodies. 1000000 = 1.00 USDC.  | 1000000                                                                                       |
| `currency`                                                                                    | [models.Currency](../models/currency.md)                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [models.InvoiceStatus](../models/invoice-status.md)                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `metadataPublic`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-03-24T11:02:33.812Z                                                                      |
| `agentProtocol`                                                                               | [models.AgentProtocol](../models/agent-protocol.md)                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |