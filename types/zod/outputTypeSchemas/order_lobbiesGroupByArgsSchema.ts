import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { order_lobbiesWhereInputSchema } from '../inputTypeSchemas/order_lobbiesWhereInputSchema';
import { order_lobbiesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/order_lobbiesOrderByWithAggregationInputSchema';
import { Order_lobbiesScalarFieldEnumSchema } from '../inputTypeSchemas/Order_lobbiesScalarFieldEnumSchema';
import { order_lobbiesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/order_lobbiesScalarWhereWithAggregatesInputSchema';

export const order_lobbiesGroupByArgsSchema: z.ZodType<Prisma.order_lobbiesGroupByArgs> = z
	.object({
		where: order_lobbiesWhereInputSchema.optional(),
		orderBy: z
			.union([
				order_lobbiesOrderByWithAggregationInputSchema.array(),
				order_lobbiesOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Order_lobbiesScalarFieldEnumSchema.array(),
		having: order_lobbiesScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default order_lobbiesGroupByArgsSchema;
