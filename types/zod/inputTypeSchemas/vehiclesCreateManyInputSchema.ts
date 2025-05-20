import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';

export const vehiclesCreateManyInputSchema: z.ZodType<Prisma.vehiclesCreateManyInput> = z
	.object({
		vehicle_id: z.string().uuid().optional(),
		business_id: z.string().optional().nullable(),
		active: z.boolean().optional().nullable(),
		class: z
			.lazy(() => VEHICLE_CLASSSchema)
			.optional()
			.nullable(),
		category: z
			.lazy(() => VEHICLE_CATEGORYSchema)
			.optional()
			.nullable(),
		make: z.string().optional().nullable(),
		model: z.string().optional().nullable(),
		color: z.string().optional().nullable(),
		license_plate: z.string().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		delivery_driver_id: z.string().optional().nullable(),
		vehicle_specification_id: z.string().optional().nullable(),
	})
	.strict();

export default vehiclesCreateManyInputSchema;
