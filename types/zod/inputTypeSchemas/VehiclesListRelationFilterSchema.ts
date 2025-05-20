import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';

export const VehiclesListRelationFilterSchema: z.ZodType<Prisma.VehiclesListRelationFilter> = z
	.object({
		every: z.lazy(() => vehiclesWhereInputSchema).optional(),
		some: z.lazy(() => vehiclesWhereInputSchema).optional(),
		none: z.lazy(() => vehiclesWhereInputSchema).optional(),
	})
	.strict();

export default VehiclesListRelationFilterSchema;
