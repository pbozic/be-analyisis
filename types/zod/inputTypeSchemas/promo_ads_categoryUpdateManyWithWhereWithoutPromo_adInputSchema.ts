import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryScalarWhereInputSchema } from './promo_ads_categoryScalarWhereInputSchema';
import { promo_ads_categoryUpdateManyMutationInputSchema } from './promo_ads_categoryUpdateManyMutationInputSchema';
import { promo_ads_categoryUncheckedUpdateManyWithoutPromo_adInputSchema } from './promo_ads_categoryUncheckedUpdateManyWithoutPromo_adInputSchema';

export const promo_ads_categoryUpdateManyWithWhereWithoutPromo_adInputSchema: z.ZodType<Prisma.promo_ads_categoryUpdateManyWithWhereWithoutPromo_adInput> =
	z
		.object({
			where: z.lazy(() => promo_ads_categoryScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => promo_ads_categoryUpdateManyMutationInputSchema),
				z.lazy(() => promo_ads_categoryUncheckedUpdateManyWithoutPromo_adInputSchema),
			]),
		})
		.strict();

export default promo_ads_categoryUpdateManyWithWhereWithoutPromo_adInputSchema;
