import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryWhereInputSchema } from './promo_ads_categoryWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { Promo_adsRelationFilterSchema } from './Promo_adsRelationFilterSchema';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';
import { CategoriesRelationFilterSchema } from './CategoriesRelationFilterSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const promo_ads_categoryWhereUniqueInputSchema: z.ZodType<Prisma.promo_ads_categoryWhereUniqueInput> = z
	.object({
		promo_ads_category_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				promo_ads_category_id: z.string().uuid().optional(),
				AND: z
					.union([
						z.lazy(() => promo_ads_categoryWhereInputSchema),
						z.lazy(() => promo_ads_categoryWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => promo_ads_categoryWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => promo_ads_categoryWhereInputSchema),
						z.lazy(() => promo_ads_categoryWhereInputSchema).array(),
					])
					.optional(),
				promo_ads_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				categories_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				promo_ad: z
					.union([z.lazy(() => Promo_adsRelationFilterSchema), z.lazy(() => promo_adsWhereInputSchema)])
					.optional(),
				category: z
					.union([z.lazy(() => CategoriesRelationFilterSchema), z.lazy(() => categoriesWhereInputSchema)])
					.optional(),
			})
			.strict()
	);

export default promo_ads_categoryWhereUniqueInputSchema;
