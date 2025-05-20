import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { USER_ROLESSchema } from './USER_ROLESSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumUSER_ROLESFilterSchema } from './NestedEnumUSER_ROLESFilterSchema';

export const NestedEnumUSER_ROLESWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUSER_ROLESWithAggregatesFilter> =
	z
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
			not: z
				.union([z.lazy(() => USER_ROLESSchema), z.lazy(() => NestedEnumUSER_ROLESWithAggregatesFilterSchema)])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumUSER_ROLESFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumUSER_ROLESFilterSchema).optional(),
		})
		.strict();

export default NestedEnumUSER_ROLESWithAggregatesFilterSchema;
