import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FILE_TYPESchema } from './FILE_TYPESchema';

export const NestedEnumFILE_TYPEFilterSchema: z.ZodType<Prisma.NestedEnumFILE_TYPEFilter> = z
	.object({
		equals: z.lazy(() => FILE_TYPESchema).optional(),
		in: z
			.lazy(() => FILE_TYPESchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => FILE_TYPESchema)
			.array()
			.optional(),
		not: z.union([z.lazy(() => FILE_TYPESchema), z.lazy(() => NestedEnumFILE_TYPEFilterSchema)]).optional(),
	})
	.strict();

export default NestedEnumFILE_TYPEFilterSchema;
