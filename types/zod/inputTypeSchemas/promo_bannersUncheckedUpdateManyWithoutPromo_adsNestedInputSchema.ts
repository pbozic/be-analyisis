import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersCreateWithoutPromo_adsInputSchema } from './promo_bannersCreateWithoutPromo_adsInputSchema';
import { promo_bannersUncheckedCreateWithoutPromo_adsInputSchema } from './promo_bannersUncheckedCreateWithoutPromo_adsInputSchema';
import { promo_bannersCreateOrConnectWithoutPromo_adsInputSchema } from './promo_bannersCreateOrConnectWithoutPromo_adsInputSchema';
import { promo_bannersUpsertWithWhereUniqueWithoutPromo_adsInputSchema } from './promo_bannersUpsertWithWhereUniqueWithoutPromo_adsInputSchema';
import { promo_bannersCreateManyPromo_adsInputEnvelopeSchema } from './promo_bannersCreateManyPromo_adsInputEnvelopeSchema';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';
import { promo_bannersUpdateWithWhereUniqueWithoutPromo_adsInputSchema } from './promo_bannersUpdateWithWhereUniqueWithoutPromo_adsInputSchema';
import { promo_bannersUpdateManyWithWhereWithoutPromo_adsInputSchema } from './promo_bannersUpdateManyWithWhereWithoutPromo_adsInputSchema';
import { promo_bannersScalarWhereInputSchema } from './promo_bannersScalarWhereInputSchema';

export const promo_bannersUncheckedUpdateManyWithoutPromo_adsNestedInputSchema: z.ZodType<Prisma.promo_bannersUncheckedUpdateManyWithoutPromo_adsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_bannersCreateWithoutPromo_adsInputSchema),
					z.lazy(() => promo_bannersCreateWithoutPromo_adsInputSchema).array(),
					z.lazy(() => promo_bannersUncheckedCreateWithoutPromo_adsInputSchema),
					z.lazy(() => promo_bannersUncheckedCreateWithoutPromo_adsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => promo_bannersCreateOrConnectWithoutPromo_adsInputSchema),
					z.lazy(() => promo_bannersCreateOrConnectWithoutPromo_adsInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => promo_bannersUpsertWithWhereUniqueWithoutPromo_adsInputSchema),
					z.lazy(() => promo_bannersUpsertWithWhereUniqueWithoutPromo_adsInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => promo_bannersCreateManyPromo_adsInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => promo_bannersWhereUniqueInputSchema),
					z.lazy(() => promo_bannersWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => promo_bannersWhereUniqueInputSchema),
					z.lazy(() => promo_bannersWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => promo_bannersWhereUniqueInputSchema),
					z.lazy(() => promo_bannersWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => promo_bannersWhereUniqueInputSchema),
					z.lazy(() => promo_bannersWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => promo_bannersUpdateWithWhereUniqueWithoutPromo_adsInputSchema),
					z.lazy(() => promo_bannersUpdateWithWhereUniqueWithoutPromo_adsInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => promo_bannersUpdateManyWithWhereWithoutPromo_adsInputSchema),
					z.lazy(() => promo_bannersUpdateManyWithWhereWithoutPromo_adsInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => promo_bannersScalarWhereInputSchema),
					z.lazy(() => promo_bannersScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_bannersUncheckedUpdateManyWithoutPromo_adsNestedInputSchema;
