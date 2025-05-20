import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const driversCountOutputTypeSelectSchema: z.ZodType<Prisma.driversCountOutputTypeSelect> = z
	.object({
		vehicles: z.boolean().optional(),
		orders: z.boolean().optional(),
		received_orders: z.boolean().optional(),
		delivery_orders: z.boolean().optional(),
		received_delivery_orders: z.boolean().optional(),
		documents: z.boolean().optional(),
		driver_history_locations: z.boolean().optional(),
		driver_municipalities: z.boolean().optional(),
		activity_logs: z.boolean().optional(),
	})
	.strict();

export default driversCountOutputTypeSelectSchema;
