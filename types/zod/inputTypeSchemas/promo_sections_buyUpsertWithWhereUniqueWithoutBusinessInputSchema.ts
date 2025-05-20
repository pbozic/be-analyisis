import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyUpdateWithoutBusinessInputSchema } from './promo_sections_buyUpdateWithoutBusinessInputSchema';
import { promo_sections_buyUncheckedUpdateWithoutBusinessInputSchema } from './promo_sections_buyUncheckedUpdateWithoutBusinessInputSchema';
import { promo_sections_buyCreateWithoutBusinessInputSchema } from './promo_sections_buyCreateWithoutBusinessInputSchema';
import { promo_sections_buyUncheckedCreateWithoutBusinessInputSchema } from './promo_sections_buyUncheckedCreateWithoutBusinessInputSchema';

export const promo_sections_buyUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.promo_sections_buyUpsertWithWhereUniqueWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => promo_sections_buyUpdateWithoutBusinessInputSchema),
				z.lazy(() => promo_sections_buyUncheckedUpdateWithoutBusinessInputSchema),
			]),
			create: z.union([
				z.lazy(() => promo_sections_buyCreateWithoutBusinessInputSchema),
				z.lazy(() => promo_sections_buyUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default promo_sections_buyUpsertWithWhereUniqueWithoutBusinessInputSchema;
