import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const translationsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.translationsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => translationsScalarWhereWithAggregatesInputSchema),z.lazy(() => translationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => translationsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => translationsScalarWhereWithAggregatesInputSchema),z.lazy(() => translationsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  translations_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  translatable_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  language: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  translation: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default translationsScalarWhereWithAggregatesInputSchema;
