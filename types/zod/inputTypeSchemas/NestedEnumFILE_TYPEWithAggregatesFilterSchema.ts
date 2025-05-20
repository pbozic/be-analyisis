import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumFILE_TYPEFilterSchema } from './NestedEnumFILE_TYPEFilterSchema';

export const NestedEnumFILE_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFILE_TYPEWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => FILE_TYPESchema).optional(),
			in: z
				.lazy(() => FILE_TYPESchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => FILE_TYPESchema)
				.array()
				.optional(),
			not: z
				.union([z.lazy(() => FILE_TYPESchema), z.lazy(() => NestedEnumFILE_TYPEWithAggregatesFilterSchema)])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumFILE_TYPEFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumFILE_TYPEFilterSchema).optional(),
		})
		.strict();

export default NestedEnumFILE_TYPEWithAggregatesFilterSchema;
