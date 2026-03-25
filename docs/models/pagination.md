# Pagination

## Example Usage

```typescript
import { Pagination } from "gwop/models";

let value: Pagination = {
  total: 271635,
  limit: 56105,
  offset: 536064,
  hasMore: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `total`            | *number*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |
| `offset`           | *number*           | :heavy_check_mark: | N/A                |
| `hasMore`          | *boolean*          | :heavy_check_mark: | N/A                |