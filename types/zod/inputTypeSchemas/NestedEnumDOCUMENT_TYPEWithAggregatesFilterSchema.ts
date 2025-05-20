import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DOCUMENT_TYPESchema } from './DOCUMENT_TYPESchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumDOCUMENT_TYPEFilterSchema } from './NestedEnumDOCUMENT_TYPEFilterSchema';

export const NestedEnumDOCUMENT_TYPEWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDOCUMENT_TYPEWithAggregatesFilter> =
	z
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
			not: z
				.union([
					z.lazy(() => DOCUMENT_TYPESchema),
					z.lazy(() => NestedEnumDOCUMENT_TYPEWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumDOCUMENT_TYPEFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumDOCUMENT_TYPEFilterSchema).optional(),
		})
		.strict();

export default NestedEnumDOCUMENT_TYPEWithAggregatesFilterSchema;
