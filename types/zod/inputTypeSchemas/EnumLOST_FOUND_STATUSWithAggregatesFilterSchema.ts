import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LOST_FOUND_STATUSSchema } from './LOST_FOUND_STATUSSchema';
import { NestedEnumLOST_FOUND_STATUSWithAggregatesFilterSchema } from './NestedEnumLOST_FOUND_STATUSWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLOST_FOUND_STATUSFilterSchema } from './NestedEnumLOST_FOUND_STATUSFilterSchema';

export const EnumLOST_FOUND_STATUSWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLOST_FOUND_STATUSWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => LOST_FOUND_STATUSSchema).optional(),
			in: z
				.lazy(() => LOST_FOUND_STATUSSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => LOST_FOUND_STATUSSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => LOST_FOUND_STATUSSchema),
					z.lazy(() => NestedEnumLOST_FOUND_STATUSWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumLOST_FOUND_STATUSFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumLOST_FOUND_STATUSFilterSchema).optional(),
		})
		.strict();

export default EnumLOST_FOUND_STATUSWithAggregatesFilterSchema;
