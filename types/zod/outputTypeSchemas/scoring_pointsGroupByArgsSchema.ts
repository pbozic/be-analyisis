import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { scoring_pointsWhereInputSchema } from '../inputTypeSchemas/scoring_pointsWhereInputSchema';
import { scoring_pointsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/scoring_pointsOrderByWithAggregationInputSchema';
import { Scoring_pointsScalarFieldEnumSchema } from '../inputTypeSchemas/Scoring_pointsScalarFieldEnumSchema';
import { scoring_pointsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/scoring_pointsScalarWhereWithAggregatesInputSchema';

export const scoring_pointsGroupByArgsSchema: z.ZodType<Prisma.scoring_pointsGroupByArgs> = z
	.object({
		where: scoring_pointsWhereInputSchema.optional(),
		orderBy: z
			.union([
				scoring_pointsOrderByWithAggregationInputSchema.array(),
				scoring_pointsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: Scoring_pointsScalarFieldEnumSchema.array(),
		having: scoring_pointsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export default scoring_pointsGroupByArgsSchema;
