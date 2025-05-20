import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereInputSchema } from './promo_sections_buyWhereInputSchema';

export const Promo_sections_buyListRelationFilterSchema: z.ZodType<Prisma.Promo_sections_buyListRelationFilter> = z
	.object({
		every: z.lazy(() => promo_sections_buyWhereInputSchema).optional(),
		some: z.lazy(() => promo_sections_buyWhereInputSchema).optional(),
		none: z.lazy(() => promo_sections_buyWhereInputSchema).optional(),
	})
	.strict();

export default Promo_sections_buyListRelationFilterSchema;
