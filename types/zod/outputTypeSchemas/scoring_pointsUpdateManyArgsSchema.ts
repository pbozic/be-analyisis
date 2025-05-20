import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { scoring_pointsUpdateManyMutationInputSchema } from '../inputTypeSchemas/scoring_pointsUpdateManyMutationInputSchema';
import { scoring_pointsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/scoring_pointsUncheckedUpdateManyInputSchema';
import { scoring_pointsWhereInputSchema } from '../inputTypeSchemas/scoring_pointsWhereInputSchema';

export const scoring_pointsUpdateManyArgsSchema: z.ZodType<Prisma.scoring_pointsUpdateManyArgs> = z
	.object({
		data: z.union([scoring_pointsUpdateManyMutationInputSchema, scoring_pointsUncheckedUpdateManyInputSchema]),
		where: scoring_pointsWhereInputSchema.optional(),
	})
	.strict();

export default scoring_pointsUpdateManyArgsSchema;
