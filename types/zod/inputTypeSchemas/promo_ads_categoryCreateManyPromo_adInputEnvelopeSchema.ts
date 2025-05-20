import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_ads_categoryCreateManyPromo_adInputSchema } from './promo_ads_categoryCreateManyPromo_adInputSchema';

export const promo_ads_categoryCreateManyPromo_adInputEnvelopeSchema: z.ZodType<Prisma.promo_ads_categoryCreateManyPromo_adInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => promo_ads_categoryCreateManyPromo_adInputSchema),
				z.lazy(() => promo_ads_categoryCreateManyPromo_adInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default promo_ads_categoryCreateManyPromo_adInputEnvelopeSchema;
