import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsUpdateWithoutBannerInputSchema } from './promo_adsUpdateWithoutBannerInputSchema';
import { promo_adsUncheckedUpdateWithoutBannerInputSchema } from './promo_adsUncheckedUpdateWithoutBannerInputSchema';
import { promo_adsCreateWithoutBannerInputSchema } from './promo_adsCreateWithoutBannerInputSchema';
import { promo_adsUncheckedCreateWithoutBannerInputSchema } from './promo_adsUncheckedCreateWithoutBannerInputSchema';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';

export const promo_adsUpsertWithoutBannerInputSchema: z.ZodType<Prisma.promo_adsUpsertWithoutBannerInput> = z
	.object({
		update: z.union([
			z.lazy(() => promo_adsUpdateWithoutBannerInputSchema),
			z.lazy(() => promo_adsUncheckedUpdateWithoutBannerInputSchema),
		]),
		create: z.union([
			z.lazy(() => promo_adsCreateWithoutBannerInputSchema),
			z.lazy(() => promo_adsUncheckedCreateWithoutBannerInputSchema),
		]),
		where: z.lazy(() => promo_adsWhereInputSchema).optional(),
	})
	.strict();

export default promo_adsUpsertWithoutBannerInputSchema;
