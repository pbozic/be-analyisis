import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { EnumTRANSACTION_TYPEFilterSchema } from './EnumTRANSACTION_TYPEFilterSchema';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';

export const transactionsScalarWhereInputSchema: z.ZodType<Prisma.transactionsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => transactionsScalarWhereInputSchema),z.lazy(() => transactionsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => transactionsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => transactionsScalarWhereInputSchema),z.lazy(() => transactionsScalarWhereInputSchema).array() ]).optional(),
  transaction_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumTRANSACTION_TYPEFilterSchema),z.lazy(() => TRANSACTION_TYPESchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  delivery_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  taxi_order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  wallet_fund_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default transactionsScalarWhereInputSchema;
