import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsWhereInputSchema } from './promo_adsWhereInputSchema';
import { promo_adsUpdateWithoutBannerInputSchema } from './promo_adsUpdateWithoutBannerInputSchema';
import { promo_adsUncheckedUpdateWithoutBannerInputSchema } from './promo_adsUncheckedUpdateWithoutBannerInputSchema';

export const promo_adsUpdateToOneWithWhereWithoutBannerInputSchema: z.ZodType<Prisma.promo_adsUpdateToOneWithWhereWithoutBannerInput> =
	z
		.object({
			where: z.lazy(() => promo_adsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => promo_adsUpdateWithoutBannerInputSchema),
				z.lazy(() => promo_adsUncheckedUpdateWithoutBannerInputSchema),
			]),
		})
		.strict();

export default promo_adsUpdateToOneWithWhereWithoutBannerInputSchema;
