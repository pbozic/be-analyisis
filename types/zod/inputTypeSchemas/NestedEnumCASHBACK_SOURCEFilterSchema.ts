import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';

export const NestedEnumCASHBACK_SOURCEFilterSchema: z.ZodType<Prisma.NestedEnumCASHBACK_SOURCEFilter> = z
	.object({
		equals: z.lazy(() => CASHBACK_SOURCESchema).optional(),
		in: z
			.lazy(() => CASHBACK_SOURCESchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => CASHBACK_SOURCESchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => CASHBACK_SOURCESchema), z.lazy(() => NestedEnumCASHBACK_SOURCEFilterSchema)])
			.optional(),
	})
	.strict();

export default NestedEnumCASHBACK_SOURCEFilterSchema;
