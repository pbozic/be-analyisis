import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const delivery_ordersCountOutputTypeSelectSchema: z.ZodType<Prisma.delivery_ordersCountOutputTypeSelect> = z
	.object({
		history: z.boolean().optional(),
		transactions: z.boolean().optional(),
		wallet_transfer: z.boolean().optional(),
		driver_history_locations: z.boolean().optional(),
		delivery_driver_history_locations: z.boolean().optional(),
		cashback: z.boolean().optional(),
		scoring_points: z.boolean().optional(),
		late_events: z.boolean().optional(),
	})
	.strict();

export default delivery_ordersCountOutputTypeSelectSchema;
