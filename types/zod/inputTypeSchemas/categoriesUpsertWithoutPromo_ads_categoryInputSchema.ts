import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesUpdateWithoutPromo_ads_categoryInputSchema } from './categoriesUpdateWithoutPromo_ads_categoryInputSchema';
import { categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema } from './categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema';
import { categoriesCreateWithoutPromo_ads_categoryInputSchema } from './categoriesCreateWithoutPromo_ads_categoryInputSchema';
import { categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema } from './categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema';
import { categoriesWhereInputSchema } from './categoriesWhereInputSchema';

export const categoriesUpsertWithoutPromo_ads_categoryInputSchema: z.ZodType<Prisma.categoriesUpsertWithoutPromo_ads_categoryInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => categoriesUpdateWithoutPromo_ads_categoryInputSchema),
				z.lazy(() => categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema),
			]),
			create: z.union([
				z.lazy(() => categoriesCreateWithoutPromo_ads_categoryInputSchema),
				z.lazy(() => categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema),
			]),
			where: z.lazy(() => categoriesWhereInputSchema).optional(),
		})
		.strict();

export default categoriesUpsertWithoutPromo_ads_categoryInputSchema;
