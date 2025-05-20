import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { scoring_pointsCreateManyInputSchema } from '../inputTypeSchemas/scoring_pointsCreateManyInputSchema';

export const scoring_pointsCreateManyArgsSchema: z.ZodType<Prisma.scoring_pointsCreateManyArgs> = z
	.object({
		data: z.union([scoring_pointsCreateManyInputSchema, scoring_pointsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default scoring_pointsCreateManyArgsSchema;
