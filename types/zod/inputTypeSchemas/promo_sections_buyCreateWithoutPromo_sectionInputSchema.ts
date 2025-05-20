import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateNestedOneWithoutPromo_sectionsInputSchema } from './businessCreateNestedOneWithoutPromo_sectionsInputSchema';
import { usersCreateNestedOneWithoutPromo_section_buysInputSchema } from './usersCreateNestedOneWithoutPromo_section_buysInputSchema';

export const promo_sections_buyCreateWithoutPromo_sectionInputSchema: z.ZodType<Prisma.promo_sections_buyCreateWithoutPromo_sectionInput> =
	z
		.object({
			promo_sections_buy_id: z.string().uuid().optional(),
			stripe_subscription_id: z.string().optional().nullable(),
			active_at: z.coerce.date().optional().nullable(),
			expires_at: z.coerce.date().optional().nullable(),
			tier: z.number().int(),
			business: z.lazy(() => businessCreateNestedOneWithoutPromo_sectionsInputSchema),
			bought_by: z.lazy(() => usersCreateNestedOneWithoutPromo_section_buysInputSchema).optional(),
		})
		.strict();

export default promo_sections_buyCreateWithoutPromo_sectionInputSchema;
