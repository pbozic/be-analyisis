import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { wordsWhereInputSchema } from '../inputTypeSchemas/wordsWhereInputSchema';
import { wordsOrderByWithRelationInputSchema } from '../inputTypeSchemas/wordsOrderByWithRelationInputSchema';
import { wordsWhereUniqueInputSchema } from '../inputTypeSchemas/wordsWhereUniqueInputSchema';

export const wordsAggregateArgsSchema: z.ZodType<Prisma.wordsAggregateArgs> = z
	.object({
		where: wordsWhereInputSchema.optional(),
		orderBy: z.union([wordsOrderByWithRelationInputSchema.array(), wordsOrderByWithRelationInputSchema]).optional(),
		cursor: wordsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default wordsAggregateArgsSchema;
