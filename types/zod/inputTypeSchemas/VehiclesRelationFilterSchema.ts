import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const VehiclesRelationFilterSchema: z.ZodType<Prisma.VehiclesRelationFilter> = z
	.object({
		is: z.lazy(() => vehiclesWhereInputSchema).optional(),
		isNot: z.lazy(() => vehiclesWhereInputSchema).optional(),
	})
	.strict();

export default VehiclesRelationFilterSchema;
