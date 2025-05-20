import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { filesArgsSchema } from "../outputTypeSchemas/filesArgsSchema"
import { menu_categories_categoriesFindManyArgsSchema } from "../outputTypeSchemas/menu_categories_categoriesFindManyArgsSchema"
import { promo_ads_categoryFindManyArgsSchema } from "../outputTypeSchemas/promo_ads_categoryFindManyArgsSchema"
import { categoriesArgsSchema } from "../outputTypeSchemas/categoriesArgsSchema"
import { categoriesFindManyArgsSchema } from "../outputTypeSchemas/categoriesFindManyArgsSchema"
import { translatableArgsSchema } from "../outputTypeSchemas/translatableArgsSchema"
import { wordsFindManyArgsSchema } from "../outputTypeSchemas/wordsFindManyArgsSchema"
import { CategoriesCountOutputTypeArgsSchema } from "../outputTypeSchemas/CategoriesCountOutputTypeArgsSchema"

export const categoriesIncludeSchema: z.ZodType<Prisma.categoriesInclude> = z.object({
  icon: z.union([z.boolean(),z.lazy(() => filesArgsSchema)]).optional(),
  menu_categories: z.union([z.boolean(),z.lazy(() => menu_categories_categoriesFindManyArgsSchema)]).optional(),
  promo_ads_category: z.union([z.boolean(),z.lazy(() => promo_ads_categoryFindManyArgsSchema)]).optional(),
  parent_category: z.union([z.boolean(),z.lazy(() => categoriesArgsSchema)]).optional(),
  sub_categories: z.union([z.boolean(),z.lazy(() => categoriesFindManyArgsSchema)]).optional(),
  translatable: z.union([z.boolean(),z.lazy(() => translatableArgsSchema)]).optional(),
  words: z.union([z.boolean(),z.lazy(() => wordsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoriesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default categoriesIncludeSchema;
