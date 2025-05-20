import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { word_buyWhereInputSchema } from '../inputTypeSchemas/word_buyWhereInputSchema';
import { word_buyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/word_buyOrderByWithAggregationInputSchema';
import { Word_buyScalarFieldEnumSchema } from '../inputTypeSchemas/Word_buyScalarFieldEnumSchema';
import { word_buyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/word_buyScalarWhereWithAggregatesInputSchema';

export const word_buyGroupByArgsSchema: z.ZodType<Prisma.word_buyGroupByArgs> = z
	.object({
		where: word_buyWhereInputSchema.optional(),
		orderBy: z
			.union([word_buyOrderByWithAggregationInputSchema.array(), word_buyOrderByWithAggregationInputSchema])
			.optional(),
		by: Word_buyScalarFieldEnumSchema.array(),
		having: word_buyScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default word_buyGroupByArgsSchema;
