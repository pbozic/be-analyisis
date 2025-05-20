import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { word_buyWhereInputSchema } from './word_buyWhereInputSchema';

export const Word_buyListRelationFilterSchema: z.ZodType<Prisma.Word_buyListRelationFilter> = z.object({
  every: z.lazy(() => word_buyWhereInputSchema).optional(),
  some: z.lazy(() => word_buyWhereInputSchema).optional(),
  none: z.lazy(() => word_buyWhereInputSchema).optional()
}).strict();

export default Word_buyListRelationFilterSchema;
