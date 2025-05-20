import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateNestedOneWithoutPromo_bannersInputSchema } from './filesCreateNestedOneWithoutPromo_bannersInputSchema';

export const promo_bannersCreateWithoutPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersCreateWithoutPromo_adsInput> =
	z
		.object({
			promo_banners_id: z.string().uuid().optional(),
			type: z.string(),
			size: z.string().optional().nullable(),
			title: z.string(),
			text: z.string(),
			promo_section_buy_id: z.string().optional().nullable(),
			files: z.lazy(() => filesCreateNestedOneWithoutPromo_bannersInputSchema),
		})
		.strict();

export default promo_bannersCreateWithoutPromo_adsInputSchema;
