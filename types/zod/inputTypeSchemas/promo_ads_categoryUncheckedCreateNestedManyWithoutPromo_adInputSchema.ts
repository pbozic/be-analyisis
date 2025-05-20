import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryCreateWithoutPromo_adInputSchema } from './promo_ads_categoryCreateWithoutPromo_adInputSchema';
import { promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema } from './promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema';
import { promo_ads_categoryCreateOrConnectWithoutPromo_adInputSchema } from './promo_ads_categoryCreateOrConnectWithoutPromo_adInputSchema';
import { promo_ads_categoryCreateManyPromo_adInputEnvelopeSchema } from './promo_ads_categoryCreateManyPromo_adInputEnvelopeSchema';
import { promo_ads_categoryWhereUniqueInputSchema } from './promo_ads_categoryWhereUniqueInputSchema';

export const promo_ads_categoryUncheckedCreateNestedManyWithoutPromo_adInputSchema: z.ZodType<Prisma.promo_ads_categoryUncheckedCreateNestedManyWithoutPromo_adInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_ads_categoryCreateWithoutPromo_adInputSchema),
					z.lazy(() => promo_ads_categoryCreateWithoutPromo_adInputSchema).array(),
					z.lazy(() => promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema),
					z.lazy(() => promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => promo_ads_categoryCreateOrConnectWithoutPromo_adInputSchema),
					z.lazy(() => promo_ads_categoryCreateOrConnectWithoutPromo_adInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => promo_ads_categoryCreateManyPromo_adInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_ads_categoryUncheckedCreateNestedManyWithoutPromo_adInputSchema;
