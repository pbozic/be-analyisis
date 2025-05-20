import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const vehicle_driversVehicle_idDriver_idCompoundUniqueInputSchema: z.ZodType<Prisma.vehicle_driversVehicle_idDriver_idCompoundUniqueInput> =
	z
		.object({
			vehicle_id: z.string(),
			driver_id: z.string(),
		})
		.strict();

export default vehicle_driversVehicle_idDriver_idCompoundUniqueInputSchema;
