import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsUpdateWithoutPromo_section_buyInputSchema } from './promo_sectionsUpdateWithoutPromo_section_buyInputSchema';
import { promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema } from './promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema';
import { promo_sectionsCreateWithoutPromo_section_buyInputSchema } from './promo_sectionsCreateWithoutPromo_section_buyInputSchema';
import { promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema } from './promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema';
import { promo_sectionsWhereInputSchema } from './promo_sectionsWhereInputSchema';

export const promo_sectionsUpsertWithoutPromo_section_buyInputSchema: z.ZodType<Prisma.promo_sectionsUpsertWithoutPromo_section_buyInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => promo_sectionsUpdateWithoutPromo_section_buyInputSchema),
				z.lazy(() => promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema),
			]),
			create: z.union([
				z.lazy(() => promo_sectionsCreateWithoutPromo_section_buyInputSchema),
				z.lazy(() => promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema),
			]),
			where: z.lazy(() => promo_sectionsWhereInputSchema).optional(),
		})
		.strict();

export default promo_sectionsUpsertWithoutPromo_section_buyInputSchema;
