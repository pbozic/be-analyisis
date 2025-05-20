import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_STATUSSchema } from './CASHBACK_STATUSSchema';

export const NestedEnumCASHBACK_STATUSFilterSchema: z.ZodType<Prisma.NestedEnumCASHBACK_STATUSFilter> = z
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
			.union([z.lazy(() => CASHBACK_STATUSSchema), z.lazy(() => NestedEnumCASHBACK_STATUSFilterSchema)])
			.optional(),
	})
	.strict();

export default NestedEnumCASHBACK_STATUSFilterSchema;
