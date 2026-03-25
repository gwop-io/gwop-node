# AuthPrincipal

## Example Usage

```typescript
import { AuthPrincipal } from "gwop/models";

let value: AuthPrincipal = {
  sub: "base:0x742d35cc6634c0532925a3b844bc9e7595f2bd18",
  chain: "base",
  walletAddress: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `sub`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            | base:0x742d35cc6634c0532925a3b844bc9e7595f2bd18                |
| `chain`                                                        | [models.AuthPrincipalChain](../models/auth-principal-chain.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `walletAddress`                                                | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |