import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { categoriesCreateWithoutPromo_ads_categoryInputSchema } from './categoriesCreateWithoutPromo_ads_categoryInputSchema';
import { categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema } from './categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema';
import { categoriesCreateOrConnectWithoutPromo_ads_categoryInputSchema } from './categoriesCreateOrConnectWithoutPromo_ads_categoryInputSchema';
import { categoriesUpsertWithoutPromo_ads_categoryInputSchema } from './categoriesUpsertWithoutPromo_ads_categoryInputSchema';
import { categoriesWhereUniqueInputSchema } from './categoriesWhereUniqueInputSchema';
import { categoriesUpdateToOneWithWhereWithoutPromo_ads_categoryInputSchema } from './categoriesUpdateToOneWithWhereWithoutPromo_ads_categoryInputSchema';
import { categoriesUpdateWithoutPromo_ads_categoryInputSchema } from './categoriesUpdateWithoutPromo_ads_categoryInputSchema';
import { categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema } from './categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema';

export const categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInputSchema: z.ZodType<Prisma.categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => categoriesCreateWithoutPromo_ads_categoryInputSchema),
					z.lazy(() => categoriesUncheckedCreateWithoutPromo_ads_categoryInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => categoriesCreateOrConnectWithoutPromo_ads_categoryInputSchema).optional(),
			upsert: z.lazy(() => categoriesUpsertWithoutPromo_ads_categoryInputSchema).optional(),
			connect: z.lazy(() => categoriesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => categoriesUpdateToOneWithWhereWithoutPromo_ads_categoryInputSchema),
					z.lazy(() => categoriesUpdateWithoutPromo_ads_categoryInputSchema),
					z.lazy(() => categoriesUncheckedUpdateWithoutPromo_ads_categoryInputSchema),
				])
				.optional(),
		})
		.strict();

export default categoriesUpdateOneRequiredWithoutPromo_ads_categoryNestedInputSchema;
