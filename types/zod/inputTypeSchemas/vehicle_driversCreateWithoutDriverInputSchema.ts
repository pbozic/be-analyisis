import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateNestedOneWithoutDriversInputSchema } from './vehiclesCreateNestedOneWithoutDriversInputSchema';

export const vehicle_driversCreateWithoutDriverInputSchema: z.ZodType<Prisma.vehicle_driversCreateWithoutDriverInput> =
	z
		.object({
			vehicle_drivers_id: z.string().uuid().optional(),
			can_drive: z.boolean().optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			vehicle: z.lazy(() => vehiclesCreateNestedOneWithoutDriversInputSchema),
		})
		.strict();

export default vehicle_driversCreateWithoutDriverInputSchema;
