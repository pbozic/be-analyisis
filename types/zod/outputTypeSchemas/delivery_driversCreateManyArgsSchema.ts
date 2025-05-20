import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_driversCreateManyInputSchema } from '../inputTypeSchemas/delivery_driversCreateManyInputSchema';

export const delivery_driversCreateManyArgsSchema: z.ZodType<Prisma.delivery_driversCreateManyArgs> = z
	.object({
		data: z.union([delivery_driversCreateManyInputSchema, delivery_driversCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default delivery_driversCreateManyArgsSchema;
