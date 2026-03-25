# State

## Example Usage

```typescript
import { State } from "gwop/models";

let value: State = "invoice_created";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invoice_created" | "invoice_open" | "invoice_paying" | "invoice_paid" | "invoice_unavailable" | "payment_required" | Unrecognized<string>
```