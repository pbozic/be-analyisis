import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsUpdateWithoutCategoriesInputSchema } from './promo_adsUpdateWithoutCategoriesInputSchema';
import { promo_adsUncheckedUpdateWithoutCategoriesInputSchema } from './promo_adsUncheckedUpdateWithoutCategoriesInputSchema';
import { promo_adsCreateWithoutCategoriesInputSchema } from './promo_adsCreateWithoutCategoriesInputSchema';
import { promo_adsUncheckedCreateWithoutCategoriesInputSchema } from './promo_adsUncheckedCreateWithoutCategoriesInputSchema';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';

export const promo_adsUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.promo_adsUpsertWithoutCategoriesInput> = z
	.object({
		update: z.union([
			z.lazy(() => promo_adsUpdateWithoutCategoriesInputSchema),
			z.lazy(() => promo_adsUncheckedUpdateWithoutCategoriesInputSchema),
		]),
		create: z.union([
			z.lazy(() => promo_adsCreateWithoutCategoriesInputSchema),
			z.lazy(() => promo_adsUncheckedCreateWithoutCategoriesInputSchema),
		]),
		where: z.lazy(() => promo_adsWhereInputSchema).optional(),
	})
	.strict();

export default promo_adsUpsertWithoutCategoriesInputSchema;
