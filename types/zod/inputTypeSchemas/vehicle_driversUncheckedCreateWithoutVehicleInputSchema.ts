import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const vehicle_driversUncheckedCreateWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_driversUncheckedCreateWithoutVehicleInput> =
	z
		.object({
			vehicle_drivers_id: z.string().uuid().optional(),
			driver_id: z.string(),
			can_drive: z.boolean().optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default vehicle_driversUncheckedCreateWithoutVehicleInputSchema;
