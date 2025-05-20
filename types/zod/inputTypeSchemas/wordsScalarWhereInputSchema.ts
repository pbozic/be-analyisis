import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const wordsScalarWhereInputSchema: z.ZodType<Prisma.wordsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => wordsScalarWhereInputSchema),z.lazy(() => wordsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => wordsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => wordsScalarWhereInputSchema),z.lazy(() => wordsScalarWhereInputSchema).array() ]).optional(),
  word_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  word: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  popularity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categories_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  translatable_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default wordsScalarWhereInputSchema;
