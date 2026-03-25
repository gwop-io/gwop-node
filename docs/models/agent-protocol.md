# AgentProtocol

## Example Usage

```typescript
import { AgentProtocol } from "gwop/models";

let value: AgentProtocol = {
  version: "1.0",
  flow: "invoice_gwop_wallet",
  state: "invoice_unavailable",
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
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `version`                                               | [models.Version](../models/version.md)                  | :heavy_check_mark:                                      | N/A                                                     |
| `flow`                                                  | [models.Flow](../models/flow.md)                        | :heavy_check_mark:                                      | N/A                                                     |
| `state`                                                 | [models.State](../models/state.md)                      | :heavy_check_mark:                                      | N/A                                                     |
| `goal`                                                  | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `steps`                                                 | *string*[]                                              | :heavy_check_mark:                                      | N/A                                                     |
| `nextAction`                                            | [models.NextAction](../models/next-action.md)           | :heavy_minus_sign:                                      | N/A                                                     |
| `completionCheck`                                       | [models.CompletionCheck](../models/completion-check.md) | :heavy_check_mark:                                      | N/A                                                     |
| `receiptPolicy`                                         | [models.ReceiptPolicy](../models/receipt-policy.md)     | :heavy_minus_sign:                                      | N/A                                                     |