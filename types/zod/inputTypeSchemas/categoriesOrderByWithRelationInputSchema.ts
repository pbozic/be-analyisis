import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { filesOrderByWithRelationInputSchema } from './filesOrderByWithRelationInputSchema';
import { menu_categories_categoriesOrderByRelationAggregateInputSchema } from './menu_categories_categoriesOrderByRelationAggregateInputSchema';
import { promo_ads_categoryOrderByRelationAggregateInputSchema } from './promo_ads_categoryOrderByRelationAggregateInputSchema';
import { categoriesOrderByRelationAggregateInputSchema } from './categoriesOrderByRelationAggregateInputSchema';
import { translatableOrderByWithRelationInputSchema } from './translatableOrderByWithRelationInputSchema';
import { wordsOrderByRelationAggregateInputSchema } from './wordsOrderByRelationAggregateInputSchema';

export const categoriesOrderByWithRelationInputSchema: z.ZodType<Prisma.categoriesOrderByWithRelationInput> = z.object({
  categories_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tag: z.lazy(() => SortOrderSchema).optional(),
  icon_file_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  category_type: z.lazy(() => SortOrderSchema).optional(),
  parent_categories_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  translatable_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  deleted_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  icon: z.lazy(() => filesOrderByWithRelationInputSchema).optional(),
  menu_categories: z.lazy(() => menu_categories_categoriesOrderByRelationAggregateInputSchema).optional(),
  promo_ads_category: z.lazy(() => promo_ads_categoryOrderByRelationAggregateInputSchema).optional(),
  parent_category: z.lazy(() => categoriesOrderByWithRelationInputSchema).optional(),
  sub_categories: z.lazy(() => categoriesOrderByRelationAggregateInputSchema).optional(),
  translatable: z.lazy(() => translatableOrderByWithRelationInputSchema).optional(),
  words: z.lazy(() => wordsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default categoriesOrderByWithRelationInputSchema;
