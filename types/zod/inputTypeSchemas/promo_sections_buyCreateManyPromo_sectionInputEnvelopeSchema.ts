import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateManyPromo_sectionInputSchema } from './promo_sections_buyCreateManyPromo_sectionInputSchema';

export const promo_sections_buyCreateManyPromo_sectionInputEnvelopeSchema: z.ZodType<Prisma.promo_sections_buyCreateManyPromo_sectionInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => promo_sections_buyCreateManyPromo_sectionInputSchema),
				z.lazy(() => promo_sections_buyCreateManyPromo_sectionInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default promo_sections_buyCreateManyPromo_sectionInputEnvelopeSchema;
