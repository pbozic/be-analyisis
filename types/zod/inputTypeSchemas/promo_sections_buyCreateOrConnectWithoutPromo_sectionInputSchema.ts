import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyCreateWithoutPromo_sectionInputSchema } from './promo_sections_buyCreateWithoutPromo_sectionInputSchema';
import { promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema } from './promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema';

export const promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema: z.ZodType<Prisma.promo_sections_buyCreateOrConnectWithoutPromo_sectionInput> =
	z
		.object({
			where: z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => promo_sections_buyCreateWithoutPromo_sectionInputSchema),
				z.lazy(() => promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema),
			]),
		})
		.strict();

export default promo_sections_buyCreateOrConnectWithoutPromo_sectionInputSchema;
