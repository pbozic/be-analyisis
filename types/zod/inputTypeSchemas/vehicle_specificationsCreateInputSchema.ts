import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { vehiclesCreateNestedOneWithoutVehicle_specificationInputSchema } from './vehiclesCreateNestedOneWithoutVehicle_specificationInputSchema';

export const vehicle_specificationsCreateInputSchema: z.ZodType<Prisma.vehicle_specificationsCreateInput> = z
	.object({
		vehicle_specification_id: z.string().uuid().optional(),
		class: z.lazy(() => VEHICLE_CLASSSchema),
		category: z.lazy(() => VEHICLE_CATEGORYSchema),
		people: z.string(),
		start_cost: z.string(),
		per_kilometre: z.string(),
		per_minute: z.string(),
		vehicle_id: z.string().optional().nullable(),
		vehicle: z.lazy(() => vehiclesCreateNestedOneWithoutVehicle_specificationInputSchema).optional(),
	})
	.strict();

export default vehicle_specificationsCreateInputSchema;
