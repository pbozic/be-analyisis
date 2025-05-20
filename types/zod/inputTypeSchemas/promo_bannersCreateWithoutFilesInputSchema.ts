import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_adsCreateNestedOneWithoutBannerInputSchema } from './promo_adsCreateNestedOneWithoutBannerInputSchema';

export const promo_bannersCreateWithoutFilesInputSchema: z.ZodType<Prisma.promo_bannersCreateWithoutFilesInput> = z
	.object({
		promo_banners_id: z.string().uuid().optional(),
		type: z.string(),
		size: z.string().optional().nullable(),
		title: z.string(),
		text: z.string(),
		promo_section_buy_id: z.string().optional().nullable(),
		promo_ads: z.lazy(() => promo_adsCreateNestedOneWithoutBannerInputSchema).optional(),
	})
	.strict();

export default promo_bannersCreateWithoutFilesInputSchema;
