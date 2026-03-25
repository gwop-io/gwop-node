# Flow

## Example Usage

```typescript
import { Flow } from "gwop/models";

let value: Flow = "invoice_checkout";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invoice_checkout" | "invoice_gwop_wallet" | "invoice_x402" | Unrecognized<string>
```