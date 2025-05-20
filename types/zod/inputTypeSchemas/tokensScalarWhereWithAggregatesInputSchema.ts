import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { EnumTokenTypeWithAggregatesFilterSchema } from './EnumTokenTypeWithAggregatesFilterSchema';
import { TokenTypeSchema } from './TokenTypeSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const tokensScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.tokensScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => tokensScalarWhereWithAggregatesInputSchema),z.lazy(() => tokensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => tokensScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => tokensScalarWhereWithAggregatesInputSchema),z.lazy(() => tokensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  token_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumTokenTypeWithAggregatesFilterSchema),z.lazy(() => TokenTypeSchema) ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default tokensScalarWhereWithAggregatesInputSchema;
