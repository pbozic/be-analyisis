import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsCreateWithoutPromo_section_buyInputSchema } from './promo_sectionsCreateWithoutPromo_section_buyInputSchema';
import { promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema } from './promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema';
import { promo_sectionsCreateOrConnectWithoutPromo_section_buyInputSchema } from './promo_sectionsCreateOrConnectWithoutPromo_section_buyInputSchema';
import { promo_sectionsUpsertWithoutPromo_section_buyInputSchema } from './promo_sectionsUpsertWithoutPromo_section_buyInputSchema';
import { promo_sectionsWhereUniqueInputSchema } from './promo_sectionsWhereUniqueInputSchema';
import { promo_sectionsUpdateToOneWithWhereWithoutPromo_section_buyInputSchema } from './promo_sectionsUpdateToOneWithWhereWithoutPromo_section_buyInputSchema';
import { promo_sectionsUpdateWithoutPromo_section_buyInputSchema } from './promo_sectionsUpdateWithoutPromo_section_buyInputSchema';
import { promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema } from './promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema';

export const promo_sectionsUpdateOneRequiredWithoutPromo_section_buyNestedInputSchema: z.ZodType<Prisma.promo_sectionsUpdateOneRequiredWithoutPromo_section_buyNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_sectionsCreateWithoutPromo_section_buyInputSchema),
					z.lazy(() => promo_sectionsUncheckedCreateWithoutPromo_section_buyInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => promo_sectionsCreateOrConnectWithoutPromo_section_buyInputSchema).optional(),
			upsert: z.lazy(() => promo_sectionsUpsertWithoutPromo_section_buyInputSchema).optional(),
			connect: z.lazy(() => promo_sectionsWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => promo_sectionsUpdateToOneWithWhereWithoutPromo_section_buyInputSchema),
					z.lazy(() => promo_sectionsUpdateWithoutPromo_section_buyInputSchema),
					z.lazy(() => promo_sectionsUncheckedUpdateWithoutPromo_section_buyInputSchema),
				])
				.optional(),
		})
		.strict();

export default promo_sectionsUpdateOneRequiredWithoutPromo_section_buyNestedInputSchema;
