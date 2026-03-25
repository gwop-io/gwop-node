# CreateInvoiceResponse

## Example Usage

```typescript
import { CreateInvoiceResponse } from "gwop/models/operations";

let value: CreateInvoiceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    publicInvoiceId: "inv_01JXYZ8A4S5D6F7G8H9JKL0MNP",
    merchantId: "6442bc04-4700-4f7c-a757-db5d5ed44778",
    amountUsdc: 1000000,
    currency: "USDC",
    status: "EXPIRED",
    metadataPublic: false,
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
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `result`                                                                | [models.CreateInvoiceResponse](../../models/create-invoice-response.md) | :heavy_check_mark:                                                      | N/A                                                                     |