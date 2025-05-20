import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CASHBACK_SOURCESchema } from './CASHBACK_SOURCESchema';
import { NestedEnumCASHBACK_SOURCEFilterSchema } from './NestedEnumCASHBACK_SOURCEFilterSchema';

export const EnumCASHBACK_SOURCEFilterSchema: z.ZodType<Prisma.EnumCASHBACK_SOURCEFilter> = z
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

export default EnumCASHBACK_SOURCEFilterSchema;
