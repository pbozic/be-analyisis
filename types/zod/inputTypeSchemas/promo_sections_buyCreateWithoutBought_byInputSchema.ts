import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsCreateNestedOneWithoutPromo_section_buyInputSchema } from './promo_sectionsCreateNestedOneWithoutPromo_section_buyInputSchema';
import { businessCreateNestedOneWithoutPromo_sectionsInputSchema } from './businessCreateNestedOneWithoutPromo_sectionsInputSchema';

export const promo_sections_buyCreateWithoutBought_byInputSchema: z.ZodType<Prisma.promo_sections_buyCreateWithoutBought_byInput> =
	z
		.object({
			promo_sections_buy_id: z.string().uuid().optional(),
			stripe_subscription_id: z.string().optional().nullable(),
			active_at: z.coerce.date().optional().nullable(),
			expires_at: z.coerce.date().optional().nullable(),
			tier: z.number().int(),
			promo_section: z.lazy(() => promo_sectionsCreateNestedOneWithoutPromo_section_buyInputSchema),
			business: z.lazy(() => businessCreateNestedOneWithoutPromo_sectionsInputSchema),
		})
		.strict();

export default promo_sections_buyCreateWithoutBought_byInputSchema;
