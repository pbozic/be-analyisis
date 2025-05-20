import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCASHBACK_STATUSFilterSchema } from './NestedEnumCASHBACK_STATUSFilterSchema';

export const NestedEnumCASHBACK_STATUSWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCASHBACK_STATUSWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => CASHBACK_STATUSSchema).optional(),
			in: z
				.lazy(() => CASHBACK_STATUSSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => CASHBACK_STATUSSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => CASHBACK_STATUSSchema),
					z.lazy(() => NestedEnumCASHBACK_STATUSWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumCASHBACK_STATUSFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumCASHBACK_STATUSFilterSchema).optional(),
		})
		.strict();

export default NestedEnumCASHBACK_STATUSWithAggregatesFilterSchema;
