import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const vehicle_driversCreateManyDriverInputSchema: z.ZodType<Prisma.vehicle_driversCreateManyDriverInput> = z
	.object({
		vehicle_drivers_id: z.string().uuid().optional(),
		vehicle_id: z.string(),
		can_drive: z.boolean().optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
	})
	.strict();

export default vehicle_driversCreateManyDriverInputSchema;
