import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { categoriesOrderByWithRelationInputSchema } from './categoriesOrderByWithRelationInputSchema';
import { translatableOrderByWithRelationInputSchema } from './translatableOrderByWithRelationInputSchema';
import { word_buyOrderByRelationAggregateInputSchema } from './word_buyOrderByRelationAggregateInputSchema';
import { word_bundlesOrderByRelationAggregateInputSchema } from './word_bundlesOrderByRelationAggregateInputSchema';

export const wordsOrderByWithRelationInputSchema: z.ZodType<Prisma.wordsOrderByWithRelationInput> = z.object({
  word_id: z.lazy(() => SortOrderSchema).optional(),
  word: z.lazy(() => SortOrderSchema).optional(),
  popularity: z.lazy(() => SortOrderSchema).optional(),
  categories_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  translatable_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => categoriesOrderByWithRelationInputSchema).optional(),
  translatable: z.lazy(() => translatableOrderByWithRelationInputSchema).optional(),
  subscriptions: z.lazy(() => word_buyOrderByRelationAggregateInputSchema).optional(),
  bundles: z.lazy(() => word_bundlesOrderByRelationAggregateInputSchema).optional()
}).strict();

export default wordsOrderByWithRelationInputSchema;
