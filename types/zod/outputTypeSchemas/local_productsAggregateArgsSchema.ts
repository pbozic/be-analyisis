import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_productsWhereInputSchema } from '../inputTypeSchemas/local_productsWhereInputSchema';
import { local_productsOrderByWithRelationInputSchema } from '../inputTypeSchemas/local_productsOrderByWithRelationInputSchema';
import { local_productsWhereUniqueInputSchema } from '../inputTypeSchemas/local_productsWhereUniqueInputSchema';

export const local_productsAggregateArgsSchema: z.ZodType<Prisma.local_productsAggregateArgs> = z
	.object({
		where: local_productsWhereInputSchema.optional(),
		orderBy: z
			.union([local_productsOrderByWithRelationInputSchema.array(), local_productsOrderByWithRelationInputSchema])
			.optional(),
		cursor: local_productsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default local_productsAggregateArgsSchema;
