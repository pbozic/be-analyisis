import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumCASHBACK_TYPEWithAggregatesFilterSchema } from './EnumCASHBACK_TYPEWithAggregatesFilterSchema';
import { CASHBACK_TYPESchema } from './CASHBACK_TYPESchema';
import { EnumCASHBACK_SOURCEWithAggregatesFilterSchema } from './EnumCASHBACK_SOURCEWithAggregatesFilterSchema';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';
import { EnumCASHBACK_STATUSWithAggregatesFilterSchema } from './EnumCASHBACK_STATUSWithAggregatesFilterSchema';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const cashbackScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.cashbackScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => cashbackScalarWhereWithAggregatesInputSchema),z.lazy(() => cashbackScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => cashbackScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => cashbackScalarWhereWithAggregatesInputSchema),z.lazy(() => cashbackScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  cashback_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumCASHBACK_TYPEWithAggregatesFilterSchema),z.lazy(() => CASHBACK_TYPESchema) ]).optional(),
  source: z.union([ z.lazy(() => EnumCASHBACK_SOURCEWithAggregatesFilterSchema),z.lazy(() => CASHBACK_SOURCESchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumCASHBACK_STATUSWithAggregatesFilterSchema),z.lazy(() => CASHBACK_STATUSSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  earned_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  expires_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  converted_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  taxi_order_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  delivery_order_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default cashbackScalarWhereWithAggregatesInputSchema;
