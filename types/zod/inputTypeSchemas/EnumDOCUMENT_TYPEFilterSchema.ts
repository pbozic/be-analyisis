import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';
import { NestedEnumDOCUMENT_TYPEFilterSchema } from './NestedEnumDOCUMENT_TYPEFilterSchema';

export const EnumDOCUMENT_TYPEFilterSchema: z.ZodType<Prisma.EnumDOCUMENT_TYPEFilter> = z
	.object({
		equals: z.lazy(() => DOCUMENT_TYPESchema).optional(),
		in: z
			.lazy(() => DOCUMENT_TYPESchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => DOCUMENT_TYPESchema)
			.array()
			.optional(),
		not: z.union([z.lazy(() => DOCUMENT_TYPESchema), z.lazy(() => NestedEnumDOCUMENT_TYPEFilterSchema)]).optional(),
	})
	.strict();

export default EnumDOCUMENT_TYPEFilterSchema;
