import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';

export const scoring_pointsCreateManyUsersInputSchema: z.ZodType<Prisma.scoring_pointsCreateManyUsersInput> = z
	.object({
		scoring_points_id: z.string().uuid().optional(),
		business_id: z.string(),
		delivery_order_id: z.string().optional().nullable(),
		taxi_order_id: z.string().optional().nullable(),
		points: z.number().int(),
		isPenalty: z.boolean(),
		reason: z.lazy(() => SCORING_POINTS_REASONSchema),
		expiration_date: z.coerce.date().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default scoring_pointsCreateManyUsersInputSchema;
