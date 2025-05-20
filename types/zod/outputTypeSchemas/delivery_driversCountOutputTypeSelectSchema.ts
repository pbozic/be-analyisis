import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const delivery_driversCountOutputTypeSelectSchema: z.ZodType<Prisma.delivery_driversCountOutputTypeSelect> = z
	.object({
		vehicles: z.boolean().optional(),
		orders: z.boolean().optional(),
		received_orders: z.boolean().optional(),
		documents: z.boolean().optional(),
		delivery_driver_history_locations: z.boolean().optional(),
	})
	.strict();

export default delivery_driversCountOutputTypeSelectSchema;
