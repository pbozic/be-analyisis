import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { EnumCATEGORY_TYPEFilterSchema } from './EnumCATEGORY_TYPEFilterSchema';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { FilesNullableRelationFilterSchema } from './FilesNullableRelationFilterSchema';
import { filesWhereInputSchema } from './filesWhereInputSchema';
import { Menu_categories_categoriesListRelationFilterSchema } from './Menu_categories_categoriesListRelationFilterSchema';
import { Promo_ads_categoryListRelationFilterSchema } from './Promo_ads_categoryListRelationFilterSchema';
import { CategoriesNullableRelationFilterSchema } from './CategoriesNullableRelationFilterSchema';
import { CategoriesListRelationFilterSchema } from './CategoriesListRelationFilterSchema';
import { TranslatableRelationFilterSchema } from './TranslatableRelationFilterSchema';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';
import { WordsListRelationFilterSchema } from './WordsListRelationFilterSchema';

export const categoriesWhereInputSchema: z.ZodType<Prisma.categoriesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => categoriesWhereInputSchema),z.lazy(() => categoriesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => categoriesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => categoriesWhereInputSchema),z.lazy(() => categoriesWhereInputSchema).array() ]).optional(),
  categories_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tag: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon_file_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  category_type: z.union([ z.lazy(() => EnumCATEGORY_TYPEFilterSchema),z.lazy(() => CATEGORY_TYPESchema) ]).optional(),
  parent_categories_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  translatable_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deleted_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  icon: z.union([ z.lazy(() => FilesNullableRelationFilterSchema),z.lazy(() => filesWhereInputSchema) ]).optional().nullable(),
  menu_categories: z.lazy(() => Menu_categories_categoriesListRelationFilterSchema).optional(),
  promo_ads_category: z.lazy(() => Promo_ads_categoryListRelationFilterSchema).optional(),
  parent_category: z.union([ z.lazy(() => CategoriesNullableRelationFilterSchema),z.lazy(() => categoriesWhereInputSchema) ]).optional().nullable(),
  sub_categories: z.lazy(() => CategoriesListRelationFilterSchema).optional(),
  translatable: z.union([ z.lazy(() => TranslatableRelationFilterSchema),z.lazy(() => translatableWhereInputSchema) ]).optional(),
  words: z.lazy(() => WordsListRelationFilterSchema).optional()
}).strict();

export default categoriesWhereInputSchema;
