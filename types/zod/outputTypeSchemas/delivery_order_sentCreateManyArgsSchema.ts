import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_order_sentCreateManyInputSchema } from '../inputTypeSchemas/delivery_order_sentCreateManyInputSchema';

export const delivery_order_sentCreateManyArgsSchema: z.ZodType<Prisma.delivery_order_sentCreateManyArgs> = z
	.object({
		data: z.union([delivery_order_sentCreateManyInputSchema, delivery_order_sentCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default delivery_order_sentCreateManyArgsSchema;
