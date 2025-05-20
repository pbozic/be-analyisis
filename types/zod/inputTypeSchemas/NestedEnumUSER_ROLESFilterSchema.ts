import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { USER_ROLESSchema } from './USER_ROLESSchema';

export const NestedEnumUSER_ROLESFilterSchema: z.ZodType<Prisma.NestedEnumUSER_ROLESFilter> = z
	.object({
		equals: z.lazy(() => USER_ROLESSchema).optional(),
		in: z
			.lazy(() => USER_ROLESSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => USER_ROLESSchema)
			.array()
			.optional(),
		not: z.union([z.lazy(() => USER_ROLESSchema), z.lazy(() => NestedEnumUSER_ROLESFilterSchema)]).optional(),
	})
	.strict();

export default NestedEnumUSER_ROLESFilterSchema;
