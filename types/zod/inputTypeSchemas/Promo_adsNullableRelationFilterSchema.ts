import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';

export const Promo_adsNullableRelationFilterSchema: z.ZodType<Prisma.Promo_adsNullableRelationFilter> = z
	.object({
		is: z
			.lazy(() => promo_adsWhereInputSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => promo_adsWhereInputSchema)
			.optional()
			.nullable(),
	})
	.strict();

export default Promo_adsNullableRelationFilterSchema;
