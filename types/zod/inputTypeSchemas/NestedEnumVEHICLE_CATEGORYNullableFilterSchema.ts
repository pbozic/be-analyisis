import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';

export const NestedEnumVEHICLE_CATEGORYNullableFilterSchema: z.ZodType<Prisma.NestedEnumVEHICLE_CATEGORYNullableFilter> =
	z
		.object({
			equals: z
				.lazy(() => VEHICLE_CATEGORYSchema)
				.optional()
				.nullable(),
			in: z
				.lazy(() => VEHICLE_CATEGORYSchema)
				.array()
				.optional()
				.nullable(),
			notIn: z
				.lazy(() => VEHICLE_CATEGORYSchema)
				.array()
				.optional()
				.nullable(),
			not: z
				.union([
					z.lazy(() => VEHICLE_CATEGORYSchema),
					z.lazy(() => NestedEnumVEHICLE_CATEGORYNullableFilterSchema),
				])
				.optional()
				.nullable(),
		})
		.strict();

export default NestedEnumVEHICLE_CATEGORYNullableFilterSchema;
