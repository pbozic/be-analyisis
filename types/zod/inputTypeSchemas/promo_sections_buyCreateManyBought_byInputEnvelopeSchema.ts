import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateManyBought_byInputSchema } from './promo_sections_buyCreateManyBought_byInputSchema';

export const promo_sections_buyCreateManyBought_byInputEnvelopeSchema: z.ZodType<Prisma.promo_sections_buyCreateManyBought_byInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => promo_sections_buyCreateManyBought_byInputSchema),
				z.lazy(() => promo_sections_buyCreateManyBought_byInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default promo_sections_buyCreateManyBought_byInputEnvelopeSchema;
