import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GENDERSchema } from './GENDERSchema';
import { NestedEnumGENDERNullableWithAggregatesFilterSchema } from './NestedEnumGENDERNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumGENDERNullableFilterSchema } from './NestedEnumGENDERNullableFilterSchema';

export const EnumGENDERNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGENDERNullableWithAggregatesFilter> = z
	.object({
		equals: z
			.lazy(() => GENDERSchema)
			.optional()
			.nullable(),
		in: z
			.lazy(() => GENDERSchema)
			.array()
			.optional()
			.nullable(),
		notIn: z
			.lazy(() => GENDERSchema)
			.array()
			.optional()
			.nullable(),
		not: z
			.union([z.lazy(() => GENDERSchema), z.lazy(() => NestedEnumGENDERNullableWithAggregatesFilterSchema)])
			.optional()
			.nullable(),
		_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
		_min: z.lazy(() => NestedEnumGENDERNullableFilterSchema).optional(),
		_max: z.lazy(() => NestedEnumGENDERNullableFilterSchema).optional(),
	})
	.strict();

export default EnumGENDERNullableWithAggregatesFilterSchema;
