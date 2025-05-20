import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsWhereUniqueInputSchema } from './promo_adsWhereUniqueInputSchema';
import { promo_adsCreateWithoutCategoriesInputSchema } from './promo_adsCreateWithoutCategoriesInputSchema';
import { promo_adsUncheckedCreateWithoutCategoriesInputSchema } from './promo_adsUncheckedCreateWithoutCategoriesInputSchema';

export const promo_adsCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.promo_adsCreateOrConnectWithoutCategoriesInput> =
	z
		.object({
			where: z.lazy(() => promo_adsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => promo_adsCreateWithoutCategoriesInputSchema),
				z.lazy(() => promo_adsUncheckedCreateWithoutCategoriesInputSchema),
			]),
		})
		.strict();

export default promo_adsCreateOrConnectWithoutCategoriesInputSchema;
