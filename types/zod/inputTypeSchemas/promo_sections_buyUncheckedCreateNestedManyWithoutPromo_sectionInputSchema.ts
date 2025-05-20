import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateWithoutPromo_sectionInputSchema } from './promo_sections_buyCreateWithoutPromo_sectionInputSchema';
import { promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema } from './promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema';
import { promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema } from './promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema';
import { promo_sections_buyCreateManyPromo_sectionInputEnvelopeSchema } from './promo_sections_buyCreateManyPromo_sectionInputEnvelopeSchema';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';

export const promo_sections_buyUncheckedCreateNestedManyWithoutPromo_sectionInputSchema: z.ZodType<Prisma.promo_sections_buyUncheckedCreateNestedManyWithoutPromo_sectionInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_sections_buyCreateWithoutPromo_sectionInputSchema),
					z.lazy(() => promo_sections_buyCreateWithoutPromo_sectionInputSchema).array(),
					z.lazy(() => promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema),
					z.lazy(() => promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema),
					z.lazy(() => promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => promo_sections_buyCreateManyPromo_sectionInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_sections_buyUncheckedCreateNestedManyWithoutPromo_sectionInputSchema;
