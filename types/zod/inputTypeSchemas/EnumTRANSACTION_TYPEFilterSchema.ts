import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TRANSACTION_TYPESchema } from './TRANSACTION_TYPESchema';
import { NestedEnumTRANSACTION_TYPEFilterSchema } from './NestedEnumTRANSACTION_TYPEFilterSchema';

export const EnumTRANSACTION_TYPEFilterSchema: z.ZodType<Prisma.EnumTRANSACTION_TYPEFilter> = z
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
			.union([z.lazy(() => TRANSACTION_TYPESchema), z.lazy(() => NestedEnumTRANSACTION_TYPEFilterSchema)])
			.optional(),
	})
	.strict();

export default EnumTRANSACTION_TYPEFilterSchema;
