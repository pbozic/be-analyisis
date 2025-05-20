import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsCreateWithoutPromo_section_buyInputSchema } from './promo_sectionsCreateWithoutPromo_section_buyInputSchema';
import { promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema } from './promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema';
import { promo_sectionsCreateOrConnectWithoutPromo_section_buyInputSchema } from './promo_sectionsCreateOrConnectWithoutPromo_section_buyInputSchema';
import { promo_sectionsWhereUniqueInputSchema } from './promo_sectionsWhereUniqueInputSchema';

export const promo_sectionsCreateNestedOneWithoutPromo_section_buyInputSchema: z.ZodType<Prisma.promo_sectionsCreateNestedOneWithoutPromo_section_buyInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_sectionsCreateWithoutPromo_section_buyInputSchema),
					z.lazy(() => promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => promo_sectionsCreateOrConnectWithoutPromo_section_buyInputSchema).optional(),
			connect: z.lazy(() => promo_sectionsWhereUniqueInputSchema).optional(),
		})
		.strict();

export default promo_sectionsCreateNestedOneWithoutPromo_section_buyInputSchema;
