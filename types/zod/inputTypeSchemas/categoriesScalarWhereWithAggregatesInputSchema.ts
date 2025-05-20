import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { EnumCATEGORY_TYPEWithAggregatesFilterSchema } from './EnumCATEGORY_TYPEWithAggregatesFilterSchema';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const categoriesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.categoriesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema),z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema),z.lazy(() => categoriesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  categories_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  tag: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  icon_file_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  category_type: z.union([ z.lazy(() => EnumCATEGORY_TYPEWithAggregatesFilterSchema),z.lazy(() => CATEGORY_TYPESchema) ]).optional(),
  parent_categories_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  translatable_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deleted_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default categoriesScalarWhereWithAggregatesInputSchema;
