import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateWithoutBusinessInputSchema } from './promo_sections_buyCreateWithoutBusinessInputSchema';
import { promo_sections_buyUncheckedCreateWithoutBusinessInputSchema } from './promo_sections_buyUncheckedCreateWithoutBusinessInputSchema';
import { promo_sections_buyCreateOrConnectWithoutBusinessInputSchema } from './promo_sections_buyCreateOrConnectWithoutBusinessInputSchema';
import { promo_sections_buyCreateManyBusinessInputEnvelopeSchema } from './promo_sections_buyCreateManyBusinessInputEnvelopeSchema';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';

export const promo_sections_buyCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.promo_sections_buyCreateNestedManyWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_sections_buyCreateWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => promo_sections_buyUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => promo_sections_buyCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => promo_sections_buyCreateManyBusinessInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_sections_buyCreateNestedManyWithoutBusinessInputSchema;
