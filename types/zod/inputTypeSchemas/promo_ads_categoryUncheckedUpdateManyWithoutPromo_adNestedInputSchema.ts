import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryCreateWithoutPromo_adInputSchema } from './promo_ads_categoryCreateWithoutPromo_adInputSchema';
import { promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema } from './promo_ads_categoryUncheckedCreateWithoutPromo_adInputSchema';
import { promo_ads_categoryCreateOrConnectWithoutPromo_adInputSchema } from './promo_ads_categoryCreateOrConnectWithoutPromo_adInputSchema';
import { promo_ads_categoryUpsertWithWhereUniqueWithoutPromo_adInputSchema } from './promo_ads_categoryUpsertWithWhereUniqueWithoutPromo_adInputSchema';
import { promo_ads_categoryCreateManyPromo_adInputEnvelopeSchema } from './promo_ads_categoryCreateManyPromo_adInputEnvelopeSchema';
import { promo_ads_categoryWhereUniqueInputSchema } from './promo_ads_categoryWhereUniqueInputSchema';
import { promo_ads_categoryUpdateWithWhereUniqueWithoutPromo_adInputSchema } from './promo_ads_categoryUpdateWithWhereUniqueWithoutPromo_adInputSchema';
import { promo_ads_categoryUpdateManyWithWhereWithoutPromo_adInputSchema } from './promo_ads_categoryUpdateManyWithWhereWithoutPromo_adInputSchema';
import { promo_ads_categoryScalarWhereInputSchema } from './promo_ads_categoryScalarWhereInputSchema';

export const promo_ads_categoryUncheckedUpdateManyWithoutPromo_adNestedInputSchema: z.ZodType<Prisma.promo_ads_categoryUncheckedUpdateManyWithoutPromo_adNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => promo_ads_categoryUpsertWithWhereUniqueWithoutPromo_adInputSchema),
					z.lazy(() => promo_ads_categoryUpsertWithWhereUniqueWithoutPromo_adInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => promo_ads_categoryCreateManyPromo_adInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema),
					z.lazy(() => promo_ads_categoryWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => promo_ads_categoryUpdateWithWhereUniqueWithoutPromo_adInputSchema),
					z.lazy(() => promo_ads_categoryUpdateWithWhereUniqueWithoutPromo_adInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => promo_ads_categoryUpdateManyWithWhereWithoutPromo_adInputSchema),
					z.lazy(() => promo_ads_categoryUpdateManyWithWhereWithoutPromo_adInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => promo_ads_categoryScalarWhereInputSchema),
					z.lazy(() => promo_ads_categoryScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_ads_categoryUncheckedUpdateManyWithoutPromo_adNestedInputSchema;
