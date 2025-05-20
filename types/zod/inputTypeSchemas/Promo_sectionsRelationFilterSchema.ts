import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsWhereInputSchema } from './promo_sectionsWhereInputSchema';

export const Promo_sectionsRelationFilterSchema: z.ZodType<Prisma.Promo_sectionsRelationFilter> = z.object({
  is: z.lazy(() => promo_sectionsWhereInputSchema).optional(),
  isNot: z.lazy(() => promo_sectionsWhereInputSchema).optional()
}).strict();

export default Promo_sectionsRelationFilterSchema;
