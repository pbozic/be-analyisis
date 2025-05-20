import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BUSINESS_TYPESchema } from './BUSINESS_TYPESchema';

export const NestedEnumBUSINESS_TYPEFilterSchema: z.ZodType<Prisma.NestedEnumBUSINESS_TYPEFilter> = z
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
		not: z.union([z.lazy(() => BUSINESS_TYPESchema), z.lazy(() => NestedEnumBUSINESS_TYPEFilterSchema)]).optional(),
	})
	.strict();

export default NestedEnumBUSINESS_TYPEFilterSchema;
