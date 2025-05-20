import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTRANSACTION_TYPEFilterSchema } from './NestedEnumTRANSACTION_TYPEFilterSchema';

export const NestedEnumTRANSACTION_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTRANSACTION_TYPEWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => TRANSACTION_TYPESchema).optional(),
			in: z
				.lazy(() => TRANSACTION_TYPESchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => TRANSACTION_TYPESchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => TRANSACTION_TYPESchema),
					z.lazy(() => NestedEnumTRANSACTION_TYPEWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumTRANSACTION_TYPEFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumTRANSACTION_TYPEFilterSchema).optional(),
		})
		.strict();

export default NestedEnumTRANSACTION_TYPEWithAggregatesFilterSchema;
