import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereInputSchema } from './translatableWhereInputSchema';
import { TranslationsListRelationFilterSchema } from './TranslationsListRelationFilterSchema';
import { WordsListRelationFilterSchema } from './WordsListRelationFilterSchema';
import { CategoriesListRelationFilterSchema } from './CategoriesListRelationFilterSchema';
import { Promo_sectionsListRelationFilterSchema } from './Promo_sectionsListRelationFilterSchema';

export const translatableWhereUniqueInputSchema: z.ZodType<Prisma.translatableWhereUniqueInput> = z.object({
  translatable_id: z.string().uuid()
})
.and(z.object({
  translatable_id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => translatableWhereInputSchema),z.lazy(() => translatableWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => translatableWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => translatableWhereInputSchema),z.lazy(() => translatableWhereInputSchema).array() ]).optional(),
  translations: z.lazy(() => TranslationsListRelationFilterSchema).optional(),
  words: z.lazy(() => WordsListRelationFilterSchema).optional(),
  categories: z.lazy(() => CategoriesListRelationFilterSchema).optional(),
  promo_sections: z.lazy(() => Promo_sectionsListRelationFilterSchema).optional()
}).strict());

export default translatableWhereUniqueInputSchema;
