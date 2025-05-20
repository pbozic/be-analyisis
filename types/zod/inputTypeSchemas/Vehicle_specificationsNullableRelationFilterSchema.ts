import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_specificationsWhereInputSchema } from './vehicle_specificationsWhereInputSchema';

export const Vehicle_specificationsNullableRelationFilterSchema: z.ZodType<Prisma.Vehicle_specificationsNullableRelationFilter> =
	z
		.object({
			is: z
				.lazy(() => vehicle_specificationsWhereInputSchema)
				.optional()
				.nullable(),
			isNot: z
				.lazy(() => vehicle_specificationsWhereInputSchema)
				.optional()
				.nullable(),
		})
		.strict();

export default Vehicle_specificationsNullableRelationFilterSchema;
