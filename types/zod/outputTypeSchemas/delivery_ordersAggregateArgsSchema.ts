import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { delivery_ordersWhereInputSchema } from '../inputTypeSchemas/delivery_ordersWhereInputSchema';
import { delivery_ordersOrderByWithRelationInputSchema } from '../inputTypeSchemas/delivery_ordersOrderByWithRelationInputSchema';
import { delivery_ordersWhereUniqueInputSchema } from '../inputTypeSchemas/delivery_ordersWhereUniqueInputSchema';

export const delivery_ordersAggregateArgsSchema: z.ZodType<Prisma.delivery_ordersAggregateArgs> = z
	.object({
		where: delivery_ordersWhereInputSchema.optional(),
		orderBy: z
			.union([
				delivery_ordersOrderByWithRelationInputSchema.array(),
				delivery_ordersOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: delivery_ordersWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default delivery_ordersAggregateArgsSchema;
