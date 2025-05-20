import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { wordsOrderByWithRelationInputSchema } from './wordsOrderByWithRelationInputSchema';
import { businessOrderByWithRelationInputSchema } from './businessOrderByWithRelationInputSchema';

export const word_buyOrderByWithRelationInputSchema: z.ZodType<Prisma.word_buyOrderByWithRelationInput> = z.object({
  word_buy_id: z.lazy(() => SortOrderSchema).optional(),
  word_id: z.lazy(() => SortOrderSchema).optional(),
  stripe_subscription_id: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active_at: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  business_id: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  deleted_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  word: z.lazy(() => wordsOrderByWithRelationInputSchema).optional(),
  business: z.lazy(() => businessOrderByWithRelationInputSchema).optional()
}).strict();

export default word_buyOrderByWithRelationInputSchema;
