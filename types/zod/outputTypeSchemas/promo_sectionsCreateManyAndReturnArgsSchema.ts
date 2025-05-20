import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsCreateManyInputSchema } from '../inputTypeSchemas/promo_sectionsCreateManyInputSchema';

export const promo_sectionsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.promo_sectionsCreateManyAndReturnArgs> = z
	.object({
		data: z.union([promo_sectionsCreateManyInputSchema, promo_sectionsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default promo_sectionsCreateManyAndReturnArgsSchema;
