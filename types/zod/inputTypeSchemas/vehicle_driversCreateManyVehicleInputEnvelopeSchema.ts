import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversCreateManyVehicleInputSchema } from './vehicle_driversCreateManyVehicleInputSchema';

export const vehicle_driversCreateManyVehicleInputEnvelopeSchema: z.ZodType<Prisma.vehicle_driversCreateManyVehicleInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => vehicle_driversCreateManyVehicleInputSchema),
				z.lazy(() => vehicle_driversCreateManyVehicleInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export default vehicle_driversCreateManyVehicleInputEnvelopeSchema;
