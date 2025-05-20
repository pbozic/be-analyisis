import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesWhereInputSchema } from '../inputTypeSchemas/order_lobbiesWhereInputSchema';
import { order_lobbiesOrderByWithRelationInputSchema } from '../inputTypeSchemas/order_lobbiesOrderByWithRelationInputSchema';
import { order_lobbiesWhereUniqueInputSchema } from '../inputTypeSchemas/order_lobbiesWhereUniqueInputSchema';

export const order_lobbiesAggregateArgsSchema: z.ZodType<Prisma.order_lobbiesAggregateArgs> = z
	.object({
		where: order_lobbiesWhereInputSchema.optional(),
		orderBy: z
			.union([order_lobbiesOrderByWithRelationInputSchema.array(), order_lobbiesOrderByWithRelationInputSchema])
			.optional(),
		cursor: order_lobbiesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default order_lobbiesAggregateArgsSchema;
