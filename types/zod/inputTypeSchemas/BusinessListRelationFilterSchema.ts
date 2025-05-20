import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const BusinessListRelationFilterSchema: z.ZodType<Prisma.BusinessListRelationFilter> = z.object({
  every: z.lazy(() => businessWhereInputSchema).optional(),
  some: z.lazy(() => businessWhereInputSchema).optional(),
  none: z.lazy(() => businessWhereInputSchema).optional()
}).strict();

export default BusinessListRelationFilterSchema;
