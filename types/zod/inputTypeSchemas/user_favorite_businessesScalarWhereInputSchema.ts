import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumBUSINESS_TYPEFilterSchema } from './EnumBUSINESS_TYPEFilterSchema';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const user_favorite_businessesScalarWhereInputSchema: z.ZodType<Prisma.user_favorite_businessesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => user_favorite_businessesScalarWhereInputSchema),z.lazy(() => user_favorite_businessesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => user_favorite_businessesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => user_favorite_businessesScalarWhereInputSchema),z.lazy(() => user_favorite_businessesScalarWhereInputSchema).array() ]).optional(),
  user_favorite_businesses_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  business_type: z.union([ z.lazy(() => EnumBUSINESS_TYPEFilterSchema),z.lazy(() => BUSINESS_TYPESchema) ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default user_favorite_businessesScalarWhereInputSchema;
