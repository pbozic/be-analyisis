import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsWhereInputSchema } from './promo_sectionsWhereInputSchema';

export const Promo_sectionsListRelationFilterSchema: z.ZodType<Prisma.Promo_sectionsListRelationFilter> = z
	.object({
		every: z.lazy(() => promo_sectionsWhereInputSchema).optional(),
		some: z.lazy(() => promo_sectionsWhereInputSchema).optional(),
		none: z.lazy(() => promo_sectionsWhereInputSchema).optional(),
	})
	.strict();

export default Promo_sectionsListRelationFilterSchema;
