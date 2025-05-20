import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_bannersCreateWithoutPromo_adsInputSchema } from './promo_bannersCreateWithoutPromo_adsInputSchema';
import { promo_bannersUncheckedCreateWithoutPromo_adsInputSchema } from './promo_bannersUncheckedCreateWithoutPromo_adsInputSchema';
import { promo_bannersCreateOrConnectWithoutPromo_adsInputSchema } from './promo_bannersCreateOrConnectWithoutPromo_adsInputSchema';
import { promo_bannersCreateManyPromo_adsInputEnvelopeSchema } from './promo_bannersCreateManyPromo_adsInputEnvelopeSchema';
import { promo_bannersWhereUniqueInputSchema } from './promo_bannersWhereUniqueInputSchema';

export const promo_bannersUncheckedCreateNestedManyWithoutPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersUncheckedCreateNestedManyWithoutPromo_adsInput> =
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
			createMany: z.lazy(() => promo_bannersCreateManyPromo_adsInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => promo_bannersWhereUniqueInputSchema),
					z.lazy(() => promo_bannersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_bannersUncheckedCreateNestedManyWithoutPromo_adsInputSchema;
