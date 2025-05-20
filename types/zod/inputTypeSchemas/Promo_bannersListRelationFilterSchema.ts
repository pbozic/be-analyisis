import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersWhereInputSchema } from './promo_bannersWhereInputSchema';

export const Promo_bannersListRelationFilterSchema: z.ZodType<Prisma.Promo_bannersListRelationFilter> = z.object({
  every: z.lazy(() => promo_bannersWhereInputSchema).optional(),
  some: z.lazy(() => promo_bannersWhereInputSchema).optional(),
  none: z.lazy(() => promo_bannersWhereInputSchema).optional()
}).strict();

export default Promo_bannersListRelationFilterSchema;
