import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { EnumBUSINESS_TYPEWithAggregatesFilterSchema } from './EnumBUSINESS_TYPEWithAggregatesFilterSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const user_favorite_businessesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.user_favorite_businessesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => user_favorite_businessesScalarWhereWithAggregatesInputSchema),z.lazy(() => user_favorite_businessesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_favorite_businessesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_favorite_businessesScalarWhereWithAggregatesInputSchema),z.lazy(() => user_favorite_businessesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_favorite_businesses_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  business_type: z.union([ z.lazy(() => EnumBUSINESS_TYPEWithAggregatesFilterSchema),z.lazy(() => BUSINESS_TYPESchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default user_favorite_businessesScalarWhereWithAggregatesInputSchema;
