import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumTokenTypeFilterSchema } from './EnumTokenTypeFilterSchema';
import { TokenTypeSchema } from './TokenTypeSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const tokensScalarWhereInputSchema: z.ZodType<Prisma.tokensScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => tokensScalarWhereInputSchema),z.lazy(() => tokensScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => tokensScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => tokensScalarWhereInputSchema),z.lazy(() => tokensScalarWhereInputSchema).array() ]).optional(),
  token_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumTokenTypeFilterSchema),z.lazy(() => TokenTypeSchema) ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export default tokensScalarWhereInputSchema;
