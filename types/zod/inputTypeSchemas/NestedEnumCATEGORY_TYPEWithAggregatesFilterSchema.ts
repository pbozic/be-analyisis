import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CATEGORY_TYPESchema } from './CATEGORY_TYPESchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCATEGORY_TYPEFilterSchema } from './NestedEnumCATEGORY_TYPEFilterSchema';

export const NestedEnumCATEGORY_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCATEGORY_TYPEWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => CATEGORY_TYPESchema).optional(),
			in: z
				.lazy(() => CATEGORY_TYPESchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => CATEGORY_TYPESchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => CATEGORY_TYPESchema),
					z.lazy(() => NestedEnumCATEGORY_TYPEWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumCATEGORY_TYPEFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumCATEGORY_TYPEFilterSchema).optional(),
		})
		.strict();

export default NestedEnumCATEGORY_TYPEWithAggregatesFilterSchema;
