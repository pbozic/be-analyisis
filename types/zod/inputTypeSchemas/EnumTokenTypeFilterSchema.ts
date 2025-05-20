import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenTypeSchema } from './TokenTypeSchema';
import { NestedEnumTokenTypeFilterSchema } from './NestedEnumTokenTypeFilterSchema';

export const EnumTokenTypeFilterSchema: z.ZodType<Prisma.EnumTokenTypeFilter> = z
	.object({
		equals: z.lazy(() => TokenTypeSchema).optional(),
		in: z
			.lazy(() => TokenTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => TokenTypeSchema)
			.array()
			.optional(),
		not: z.union([z.lazy(() => TokenTypeSchema), z.lazy(() => NestedEnumTokenTypeFilterSchema)]).optional(),
	})
	.strict();

export default EnumTokenTypeFilterSchema;
