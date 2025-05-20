import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryCreateWithoutCategoryInputSchema } from './promo_ads_categoryCreateWithoutCategoryInputSchema';
import { promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema } from './promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema';
import { promo_ads_categoryCreateOrConnectWithoutCategoryInputSchema } from './promo_ads_categoryCreateOrConnectWithoutCategoryInputSchema';
import { promo_ads_categoryCreateManyCategoryInputEnvelopeSchema } from './promo_ads_categoryCreateManyCategoryInputEnvelopeSchema';
import { promo_ads_categoryWhereUniqueInputSchema } from './promo_ads_categoryWhereUniqueInputSchema';

export const promo_ads_categoryCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.promo_ads_categoryCreateNestedManyWithoutCategoryInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_ads_categoryCreateWithoutCategoryInputSchema),
					z.lazy(() => promo_ads_categoryCreateWithoutCategoryInputSchema).array(),
					z.lazy(() => promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema),
					z.lazy(() => promo_ads_categoryUncheckedCreateWithoutCategoryInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => promo_ads_categoryCreateOrConnectWithoutCategoryInputSchema),
					z.lazy(() => promo_ads_categoryCreateOrConnectWithoutCategoryInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => promo_ads_categoryCreateManyCategoryInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_ads_categoryCreateNestedManyWithoutCategoryInputSchema;
