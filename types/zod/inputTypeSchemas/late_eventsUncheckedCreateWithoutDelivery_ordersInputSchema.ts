import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema: z.ZodType<Prisma.late_eventsUncheckedCreateWithoutDelivery_ordersInput> =
	z
		.object({
			late_events_id: z.string().uuid().optional(),
			business_id: z.string(),
			user_id: z.string(),
			taxi_order_id: z.string().optional().nullable(),
			scoring_points_id: z.string().optional().nullable(),
			seconds: z.number().int(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default late_eventsUncheckedCreateWithoutDelivery_ordersInputSchema;
