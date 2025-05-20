import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { cashbackWhereInputSchema } from '../inputTypeSchemas/cashbackWhereInputSchema';
import { cashbackOrderByWithRelationInputSchema } from '../inputTypeSchemas/cashbackOrderByWithRelationInputSchema';
import { cashbackWhereUniqueInputSchema } from '../inputTypeSchemas/cashbackWhereUniqueInputSchema';

export const cashbackAggregateArgsSchema: z.ZodType<Prisma.cashbackAggregateArgs> = z
	.object({
		where: cashbackWhereInputSchema.optional(),
		orderBy: z
			.union([cashbackOrderByWithRelationInputSchema.array(), cashbackOrderByWithRelationInputSchema])
			.optional(),
		cursor: cashbackWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default cashbackAggregateArgsSchema;
