import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBUSINESS_TYPEFilterSchema } from './NestedEnumBUSINESS_TYPEFilterSchema';

export const NestedEnumBUSINESS_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBUSINESS_TYPEWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => BUSINESS_TYPESchema).optional(),
			in: z
				.lazy(() => BUSINESS_TYPESchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => BUSINESS_TYPESchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => BUSINESS_TYPESchema),
					z.lazy(() => NestedEnumBUSINESS_TYPEWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumBUSINESS_TYPEFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumBUSINESS_TYPEFilterSchema).optional(),
		})
		.strict();

export default NestedEnumBUSINESS_TYPEWithAggregatesFilterSchema;
