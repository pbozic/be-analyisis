import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';

export const Promo_adsRelationFilterSchema: z.ZodType<Prisma.Promo_adsRelationFilter> = z
	.object({
		is: z.lazy(() => promo_adsWhereInputSchema).optional(),
		isNot: z.lazy(() => promo_adsWhereInputSchema).optional(),
	})
	.strict();

export default Promo_adsRelationFilterSchema;
