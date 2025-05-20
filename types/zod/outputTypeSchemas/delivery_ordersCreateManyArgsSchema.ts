import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersCreateManyInputSchema } from '../inputTypeSchemas/delivery_ordersCreateManyInputSchema';

export const delivery_ordersCreateManyArgsSchema: z.ZodType<Prisma.delivery_ordersCreateManyArgs> = z
	.object({
		data: z.union([delivery_ordersCreateManyInputSchema, delivery_ordersCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default delivery_ordersCreateManyArgsSchema;
