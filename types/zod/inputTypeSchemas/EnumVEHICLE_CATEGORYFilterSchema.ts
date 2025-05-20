import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { NestedEnumVEHICLE_CATEGORYFilterSchema } from './NestedEnumVEHICLE_CATEGORYFilterSchema';

export const EnumVEHICLE_CATEGORYFilterSchema: z.ZodType<Prisma.EnumVEHICLE_CATEGORYFilter> = z
	.object({
		equals: z.lazy(() => VEHICLE_CATEGORYSchema).optional(),
		in: z
			.lazy(() => VEHICLE_CATEGORYSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => VEHICLE_CATEGORYSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => VEHICLE_CATEGORYSchema), z.lazy(() => NestedEnumVEHICLE_CATEGORYFilterSchema)])
			.optional(),
	})
	.strict();

export default EnumVEHICLE_CATEGORYFilterSchema;
