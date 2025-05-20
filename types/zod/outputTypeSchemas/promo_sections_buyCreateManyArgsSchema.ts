import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sections_buyCreateManyInputSchema } from '../inputTypeSchemas/promo_sections_buyCreateManyInputSchema';

export const promo_sections_buyCreateManyArgsSchema: z.ZodType<Prisma.promo_sections_buyCreateManyArgs> = z
	.object({
		data: z.union([promo_sections_buyCreateManyInputSchema, promo_sections_buyCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default promo_sections_buyCreateManyArgsSchema;
