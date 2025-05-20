import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { vehiclesArgsSchema } from '../outputTypeSchemas/vehiclesArgsSchema';

export const vehicle_specificationsSelectSchema: z.ZodType<Prisma.vehicle_specificationsSelect> = z
	.object({
		vehicle_specification_id: z.boolean().optional(),
		class: z.boolean().optional(),
		category: z.boolean().optional(),
		people: z.boolean().optional(),
		start_cost: z.boolean().optional(),
		per_kilometre: z.boolean().optional(),
		per_minute: z.boolean().optional(),
		vehicle_id: z.boolean().optional(),
		vehicle: z.union([z.boolean(), z.lazy(() => vehiclesArgsSchema)]).optional(),
	})
	.strict();

export default vehicle_specificationsSelectSchema;
