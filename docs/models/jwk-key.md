# JwkKey

## Example Usage

```typescript
import { JwkKey } from "gwop/models";

let value: JwkKey = {
  kty: "RSA",
  alg: "RS256",
  use: "sig",
  kid: "gwop-auth-v1",
  n: "<value>",
  e: "AQAB",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `kty`                          | [models.Kty](../models/kty.md) | :heavy_check_mark:             | N/A                            |                                |
| `alg`                          | [models.Alg](../models/alg.md) | :heavy_check_mark:             | N/A                            |                                |
| `use`                          | [models.Use](../models/use.md) | :heavy_check_mark:             | N/A                            |                                |
| `kid`                          | *string*                       | :heavy_check_mark:             | N/A                            | gwop-auth-v1                   |
| `n`                            | *string*                       | :heavy_check_mark:             | N/A                            |                                |
| `e`                            | *string*                       | :heavy_check_mark:             | N/A                            | AQAB                           |