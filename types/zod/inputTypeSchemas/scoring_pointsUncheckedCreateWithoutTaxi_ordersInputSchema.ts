import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';
import { late_eventsUncheckedCreateNestedManyWithoutScoring_pointsInputSchema } from './late_eventsUncheckedCreateNestedManyWithoutScoring_pointsInputSchema';

export const scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema: z.ZodType<Prisma.scoring_pointsUncheckedCreateWithoutTaxi_ordersInput> =
	z
		.object({
			scoring_points_id: z.string().uuid().optional(),
			business_id: z.string(),
			user_id: z.string().optional().nullable(),
			delivery_order_id: z.string().optional().nullable(),
			points: z.number().int(),
			isPenalty: z.boolean(),
			reason: z.lazy(() => SCORING_POINTS_REASONSchema),
			expiration_date: z.coerce.date().optional().nullable(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			late_events: z.lazy(() => late_eventsUncheckedCreateNestedManyWithoutScoring_pointsInputSchema).optional(),
		})
		.strict();

export default scoring_pointsUncheckedCreateWithoutTaxi_ordersInputSchema;
