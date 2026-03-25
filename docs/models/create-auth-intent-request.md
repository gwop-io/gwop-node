# CreateAuthIntentRequest

## Example Usage

```typescript
import { CreateAuthIntentRequest } from "gwop/models";

let value: CreateAuthIntentRequest = {
  knownWalletHint: "solana:7sSiYiRgU1WTpDm8CmvdjoTWPT9C77gLSmeH3MzDV372",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `knownWalletHint`                                                   | *string*                                                            | :heavy_minus_sign:                                                  | Previous wallet identity for continuity. Format `{chain}:{wallet}`. | solana:7sSiYiRgU1WTpDm8CmvdjoTWPT9C77gLSmeH3MzDV372                 |
| `metadata`                                                          | Record<string, *any*>                                               | :heavy_minus_sign:                                                  | N/A                                                                 |                                                                     |