import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateNestedOneWithoutVehiclesInputSchema } from './driversCreateNestedOneWithoutVehiclesInputSchema';

export const vehicle_driversCreateWithoutVehicleInputSchema: z.ZodType<Prisma.vehicle_driversCreateWithoutVehicleInput> =
	z
		.object({
			vehicle_drivers_id: z.string().uuid().optional(),
			can_drive: z.boolean().optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			driver: z.lazy(() => driversCreateNestedOneWithoutVehiclesInputSchema),
		})
		.strict();

export default vehicle_driversCreateWithoutVehicleInputSchema;
