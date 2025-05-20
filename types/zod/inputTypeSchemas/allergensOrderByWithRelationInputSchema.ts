import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const allergensOrderByWithRelationInputSchema: z.ZodType<Prisma.allergensOrderByWithRelationInput> = z.object({
  allergen_id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  code: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default allergensOrderByWithRelationInputSchema;
