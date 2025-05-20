import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const word_buyScalarWhereInputSchema: z.ZodType<Prisma.word_buyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => word_buyScalarWhereInputSchema),z.lazy(() => word_buyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => word_buyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => word_buyScalarWhereInputSchema),z.lazy(() => word_buyScalarWhereInputSchema).array() ]).optional(),
  word_buy_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  word_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  stripe_subscription_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  active_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expires_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deleted_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default word_buyScalarWhereInputSchema;
