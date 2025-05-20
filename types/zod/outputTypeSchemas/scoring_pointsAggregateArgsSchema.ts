import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { scoring_pointsWhereInputSchema } from '../inputTypeSchemas/scoring_pointsWhereInputSchema';
import { scoring_pointsOrderByWithRelationInputSchema } from '../inputTypeSchemas/scoring_pointsOrderByWithRelationInputSchema';
import { scoring_pointsWhereUniqueInputSchema } from '../inputTypeSchemas/scoring_pointsWhereUniqueInputSchema';

export const scoring_pointsAggregateArgsSchema: z.ZodType<Prisma.scoring_pointsAggregateArgs> = z
	.object({
		where: scoring_pointsWhereInputSchema.optional(),
		orderBy: z
			.union([scoring_pointsOrderByWithRelationInputSchema.array(), scoring_pointsOrderByWithRelationInputSchema])
			.optional(),
		cursor: scoring_pointsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default scoring_pointsAggregateArgsSchema;
