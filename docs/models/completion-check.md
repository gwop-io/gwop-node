# CompletionCheck

## Example Usage

```typescript
import { CompletionCheck } from "gwop/models";

let value: CompletionCheck = {
  method: "GET",
  path: "/usr/libexec",
  field: "status",
  successValue: "PAID",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `method`                                                                | [models.AgentProtocolMethodGet](../models/agent-protocol-method-get.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `path`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `field`                                                                 | [models.AgentProtocolField](../models/agent-protocol-field.md)          | :heavy_check_mark:                                                      | N/A                                                                     |
| `successValue`                                                          | [models.SuccessValue](../models/success-value.md)                       | :heavy_check_mark:                                                      | N/A                                                                     |