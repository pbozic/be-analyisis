import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SORTING_TYPESchema } from './SORTING_TYPESchema';
import { NestedEnumSORTING_TYPEWithAggregatesFilterSchema } from './NestedEnumSORTING_TYPEWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumSORTING_TYPEFilterSchema } from './NestedEnumSORTING_TYPEFilterSchema';

export const EnumSORTING_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSORTING_TYPEWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => SORTING_TYPESchema).optional(),
		in: z
			.lazy(() => SORTING_TYPESchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => SORTING_TYPESchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => SORTING_TYPESchema), z.lazy(() => NestedEnumSORTING_TYPEWithAggregatesFilterSchema)])
			.optional(),
		_count: z.lazy(() => NestedIntFilterSchema).optional(),
		_min: z.lazy(() => NestedEnumSORTING_TYPEFilterSchema).optional(),
		_max: z.lazy(() => NestedEnumSORTING_TYPEFilterSchema).optional(),
	})
	.strict();

export default EnumSORTING_TYPEWithAggregatesFilterSchema;
