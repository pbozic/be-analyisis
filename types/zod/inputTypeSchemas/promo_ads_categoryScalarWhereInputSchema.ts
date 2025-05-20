import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';

export const promo_ads_categoryScalarWhereInputSchema: z.ZodType<Prisma.promo_ads_categoryScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => promo_ads_categoryScalarWhereInputSchema),
				z.lazy(() => promo_ads_categoryScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => promo_ads_categoryScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => promo_ads_categoryScalarWhereInputSchema),
				z.lazy(() => promo_ads_categoryScalarWhereInputSchema).array(),
			])
			.optional(),
		promo_ads_category_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		promo_ads_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		categories_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
	})
	.strict();

export default promo_ads_categoryScalarWhereInputSchema;
