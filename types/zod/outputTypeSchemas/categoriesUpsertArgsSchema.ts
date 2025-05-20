import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { categoriesIncludeSchema } from '../inputTypeSchemas/categoriesIncludeSchema'
import { categoriesWhereUniqueInputSchema } from '../inputTypeSchemas/categoriesWhereUniqueInputSchema'
import { categoriesCreateInputSchema } from '../inputTypeSchemas/categoriesCreateInputSchema'
import { categoriesUncheckedCreateInputSchema } from '../inputTypeSchemas/categoriesUncheckedCreateInputSchema'
import { categoriesUpdateInputSchema } from '../inputTypeSchemas/categoriesUpdateInputSchema'
import { categoriesUncheckedUpdateInputSchema } from '../inputTypeSchemas/categoriesUncheckedUpdateInputSchema'
import { filesArgsSchema } from "../outputTypeSchemas/filesArgsSchema"
import { menu_categories_categoriesFindManyArgsSchema } from "../outputTypeSchemas/menu_categories_categoriesFindManyArgsSchema"
import { promo_ads_categoryFindManyArgsSchema } from "../outputTypeSchemas/promo_ads_categoryFindManyArgsSchema"
import { categoriesArgsSchema } from "../outputTypeSchemas/categoriesArgsSchema"
import { categoriesFindManyArgsSchema } from "../outputTypeSchemas/categoriesFindManyArgsSchema"
import { translatableArgsSchema } from "../outputTypeSchemas/translatableArgsSchema"
import { wordsFindManyArgsSchema } from "../outputTypeSchemas/wordsFindManyArgsSchema"
import { CategoriesCountOutputTypeArgsSchema } from "../outputTypeSchemas/CategoriesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const categoriesSelectSchema: z.ZodType<Prisma.categoriesSelect> = z.object({
  categories_id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  tag: z.boolean().optional(),
  icon_file_id: z.boolean().optional(),
  category_type: z.boolean().optional(),
  parent_categories_id: z.boolean().optional(),
  translatable_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  icon: z.union([z.boolean(),z.lazy(() => filesArgsSchema)]).optional(),
  menu_categories: z.union([z.boolean(),z.lazy(() => menu_categories_categoriesFindManyArgsSchema)]).optional(),
  promo_ads_category: z.union([z.boolean(),z.lazy(() => promo_ads_categoryFindManyArgsSchema)]).optional(),
  parent_category: z.union([z.boolean(),z.lazy(() => categoriesArgsSchema)]).optional(),
  sub_categories: z.union([z.boolean(),z.lazy(() => categoriesFindManyArgsSchema)]).optional(),
  translatable: z.union([z.boolean(),z.lazy(() => translatableArgsSchema)]).optional(),
  words: z.union([z.boolean(),z.lazy(() => wordsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoriesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const categoriesUpsertArgsSchema: z.ZodType<Prisma.categoriesUpsertArgs> = z.object({
  select: categoriesSelectSchema.optional(),
  include: categoriesIncludeSchema.optional(),
  where: categoriesWhereUniqueInputSchema,
  create: z.union([ categoriesCreateInputSchema,categoriesUncheckedCreateInputSchema ]),
  update: z.union([ categoriesUpdateInputSchema,categoriesUncheckedUpdateInputSchema ]),
}).strict() ;

export default categoriesUpsertArgsSchema;
