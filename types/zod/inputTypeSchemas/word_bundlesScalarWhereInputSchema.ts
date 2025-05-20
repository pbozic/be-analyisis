import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const word_bundlesScalarWhereInputSchema: z.ZodType<Prisma.word_bundlesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => word_bundlesScalarWhereInputSchema),z.lazy(() => word_bundlesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => word_bundlesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => word_bundlesScalarWhereInputSchema),z.lazy(() => word_bundlesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default word_bundlesScalarWhereInputSchema;
