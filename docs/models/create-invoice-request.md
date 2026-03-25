# CreateInvoiceRequest

## Example Usage

```typescript
import { CreateInvoiceRequest } from "gwop/models";

let value: CreateInvoiceRequest = {
  amountUsdc: 1000000,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `amountUsdc`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | USDC amount in atomic units (6 decimals). Used in REST response bodies. 1000000 = 1.00 USDC. | 1000000                                                                                      |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `metadata`                                                                                   | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `metadataPublic`                                                                             | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `expiresInSeconds`                                                                           | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |