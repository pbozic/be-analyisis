import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { taxi_order_sentCreateManyInputSchema } from '../inputTypeSchemas/taxi_order_sentCreateManyInputSchema';

export const taxi_order_sentCreateManyArgsSchema: z.ZodType<Prisma.taxi_order_sentCreateManyArgs> = z
	.object({
		data: z.union([taxi_order_sentCreateManyInputSchema, taxi_order_sentCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default taxi_order_sentCreateManyArgsSchema;
