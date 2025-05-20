import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema: z.ZodType<Prisma.promo_sections_buyUncheckedCreateWithoutPromo_sectionInput> =
	z
		.object({
			promo_sections_buy_id: z.string().uuid().optional(),
			stripe_subscription_id: z.string().optional().nullable(),
			business_id: z.string(),
			user_id: z.string().optional().nullable(),
			active_at: z.coerce.date().optional().nullable(),
			expires_at: z.coerce.date().optional().nullable(),
			tier: z.number().int(),
		})
		.strict();

export default promo_sections_buyUncheckedCreateWithoutPromo_sectionInputSchema;
