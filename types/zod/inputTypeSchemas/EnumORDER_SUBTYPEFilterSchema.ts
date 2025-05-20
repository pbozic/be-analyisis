import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ORDER_SUBTYPESchema } from './ORDER_SUBTYPESchema';
import { NestedEnumORDER_SUBTYPEFilterSchema } from './NestedEnumORDER_SUBTYPEFilterSchema';

export const EnumORDER_SUBTYPEFilterSchema: z.ZodType<Prisma.EnumORDER_SUBTYPEFilter> = z
	.object({
		equals: z.lazy(() => ORDER_SUBTYPESchema).optional(),
		in: z
			.lazy(() => ORDER_SUBTYPESchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => ORDER_SUBTYPESchema)
			.array()
			.optional(),
		not: z.union([z.lazy(() => ORDER_SUBTYPESchema), z.lazy(() => NestedEnumORDER_SUBTYPEFilterSchema)]).optional(),
	})
	.strict();

export default EnumORDER_SUBTYPEFilterSchema;
