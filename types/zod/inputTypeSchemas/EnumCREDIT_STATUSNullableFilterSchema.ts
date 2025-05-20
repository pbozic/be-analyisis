import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CREDIT_STATUSSchema } from './CREDIT_STATUSSchema';
import { NestedEnumCREDIT_STATUSNullableFilterSchema } from './NestedEnumCREDIT_STATUSNullableFilterSchema';

export const EnumCREDIT_STATUSNullableFilterSchema: z.ZodType<Prisma.EnumCREDIT_STATUSNullableFilter> = z
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
			.union([z.lazy(() => CREDIT_STATUSSchema), z.lazy(() => NestedEnumCREDIT_STATUSNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export default EnumCREDIT_STATUSNullableFilterSchema;
