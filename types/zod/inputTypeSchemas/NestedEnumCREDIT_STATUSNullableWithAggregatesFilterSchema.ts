import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumCREDIT_STATUSNullableFilterSchema } from './NestedEnumCREDIT_STATUSNullableFilterSchema';

export const NestedEnumCREDIT_STATUSNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCREDIT_STATUSNullableWithAggregatesFilter> =
	z
		.object({
			equals: z
				.lazy(() => CREDIT_STATUSSchema)
				.optional()
				.nullable(),
			in: z
				.lazy(() => CREDIT_STATUSSchema)
				.array()
				.optional()
				.nullable(),
			notIn: z
				.lazy(() => CREDIT_STATUSSchema)
				.array()
				.optional()
				.nullable(),
			not: z
				.union([
					z.lazy(() => CREDIT_STATUSSchema),
					z.lazy(() => NestedEnumCREDIT_STATUSNullableWithAggregatesFilterSchema),
				])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumCREDIT_STATUSNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumCREDIT_STATUSNullableFilterSchema).optional(),
		})
		.strict();

export default NestedEnumCREDIT_STATUSNullableWithAggregatesFilterSchema;
