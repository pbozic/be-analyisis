import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereInputSchema } from './scoring_pointsWhereInputSchema';

export const Scoring_pointsListRelationFilterSchema: z.ZodType<Prisma.Scoring_pointsListRelationFilter> = z
	.object({
		every: z.lazy(() => scoring_pointsWhereInputSchema).optional(),
		some: z.lazy(() => scoring_pointsWhereInputSchema).optional(),
		none: z.lazy(() => scoring_pointsWhereInputSchema).optional(),
	})
	.strict();

export default Scoring_pointsListRelationFilterSchema;
