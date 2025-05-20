import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsWhereUniqueInputSchema } from './promo_sectionsWhereUniqueInputSchema';
import { promo_sectionsCreateWithoutPromo_section_buyInputSchema } from './promo_sectionsCreateWithoutPromo_section_buyInputSchema';
import { promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema } from './promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema';

export const promo_sectionsCreateOrConnectWithoutPromo_section_buyInputSchema: z.ZodType<Prisma.promo_sectionsCreateOrConnectWithoutPromo_section_buyInput> =
	z
		.object({
			where: z.lazy(() => promo_sectionsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => promo_sectionsCreateWithoutPromo_section_buyInputSchema),
				z.lazy(() => promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema),
			]),
		})
		.strict();

export default promo_sectionsCreateOrConnectWithoutPromo_section_buyInputSchema;
