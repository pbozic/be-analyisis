import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_ads_categoryCreateManyInputSchema } from '../inputTypeSchemas/promo_ads_categoryCreateManyInputSchema';

export const promo_ads_categoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.promo_ads_categoryCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([promo_ads_categoryCreateManyInputSchema, promo_ads_categoryCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default promo_ads_categoryCreateManyAndReturnArgsSchema;
