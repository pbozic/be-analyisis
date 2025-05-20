import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { local_pricesWhereInputSchema } from '../inputTypeSchemas/local_pricesWhereInputSchema';
import { local_pricesOrderByWithRelationInputSchema } from '../inputTypeSchemas/local_pricesOrderByWithRelationInputSchema';
import { local_pricesWhereUniqueInputSchema } from '../inputTypeSchemas/local_pricesWhereUniqueInputSchema';

export const local_pricesAggregateArgsSchema: z.ZodType<Prisma.local_pricesAggregateArgs> = z
	.object({
		where: local_pricesWhereInputSchema.optional(),
		orderBy: z
			.union([local_pricesOrderByWithRelationInputSchema.array(), local_pricesOrderByWithRelationInputSchema])
			.optional(),
		cursor: local_pricesWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default local_pricesAggregateArgsSchema;
