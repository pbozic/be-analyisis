import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { transactionsWhereInputSchema } from '../inputTypeSchemas/transactionsWhereInputSchema';
import { transactionsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/transactionsOrderByWithAggregationInputSchema';
import { TransactionsScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionsScalarFieldEnumSchema';
import { transactionsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/transactionsScalarWhereWithAggregatesInputSchema';

export const transactionsGroupByArgsSchema: z.ZodType<Prisma.transactionsGroupByArgs> = z
	.object({
		where: transactionsWhereInputSchema.optional(),
		orderBy: z
			.union([
				transactionsOrderByWithAggregationInputSchema.array(),
				transactionsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: TransactionsScalarFieldEnumSchema.array(),
		having: transactionsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default transactionsGroupByArgsSchema;
