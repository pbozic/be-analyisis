import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_ordersCreateManyInputSchema } from '../inputTypeSchemas/taxi_ordersCreateManyInputSchema';

export const taxi_ordersCreateManyArgsSchema: z.ZodType<Prisma.taxi_ordersCreateManyArgs> = z
	.object({
		data: z.union([taxi_ordersCreateManyInputSchema, taxi_ordersCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default taxi_ordersCreateManyArgsSchema;
