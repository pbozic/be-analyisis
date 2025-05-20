import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const promo_bannersCreateManyFilesInputSchema: z.ZodType<Prisma.promo_bannersCreateManyFilesInput> = z
	.object({
		promo_banners_id: z.string().uuid().optional(),
		type: z.string(),
		size: z.string().optional().nullable(),
		title: z.string(),
		text: z.string(),
		promo_section_buy_id: z.string().optional().nullable(),
		promo_ads_id: z.string().optional().nullable(),
	})
	.strict();

export default promo_bannersCreateManyFilesInputSchema;
