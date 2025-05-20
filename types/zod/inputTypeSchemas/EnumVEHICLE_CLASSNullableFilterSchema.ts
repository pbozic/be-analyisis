import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { NestedEnumVEHICLE_CLASSNullableFilterSchema } from './NestedEnumVEHICLE_CLASSNullableFilterSchema';

export const EnumVEHICLE_CLASSNullableFilterSchema: z.ZodType<Prisma.EnumVEHICLE_CLASSNullableFilter> = z
	.object({
		equals: z
			.lazy(() => VEHICLE_CLASSSchema)
			.optional()
			.nullable(),
		in: z
			.lazy(() => VEHICLE_CLASSSchema)
			.array()
			.optional()
			.nullable(),
		notIn: z
			.lazy(() => VEHICLE_CLASSSchema)
			.array()
			.optional()
			.nullable(),
		not: z
			.union([z.lazy(() => VEHICLE_CLASSSchema), z.lazy(() => NestedEnumVEHICLE_CLASSNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export default EnumVEHICLE_CLASSNullableFilterSchema;
