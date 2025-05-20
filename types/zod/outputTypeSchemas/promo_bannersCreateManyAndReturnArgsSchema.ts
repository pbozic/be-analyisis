import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersCreateManyInputSchema } from '../inputTypeSchemas/promo_bannersCreateManyInputSchema';

export const promo_bannersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.promo_bannersCreateManyAndReturnArgs> = z
	.object({
		data: z.union([promo_bannersCreateManyInputSchema, promo_bannersCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default promo_bannersCreateManyAndReturnArgsSchema;
