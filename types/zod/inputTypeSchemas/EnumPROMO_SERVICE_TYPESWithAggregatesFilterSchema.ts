import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';
import { NestedEnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema } from './NestedEnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPROMO_SERVICE_TYPESFilterSchema } from './NestedEnumPROMO_SERVICE_TYPESFilterSchema';

export const EnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPROMO_SERVICE_TYPESWithAggregatesFilter> =
	z
		.object({
			equals: z.lazy(() => PROMO_SERVICE_TYPESSchema).optional(),
			in: z
				.lazy(() => PROMO_SERVICE_TYPESSchema)
				.array()
				.optional(),
			notIn: z
				.lazy(() => PROMO_SERVICE_TYPESSchema)
				.array()
				.optional(),
			not: z
				.union([
					z.lazy(() => PROMO_SERVICE_TYPESSchema),
					z.lazy(() => NestedEnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumPROMO_SERVICE_TYPESFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumPROMO_SERVICE_TYPESFilterSchema).optional(),
		})
		.strict();

export default EnumPROMO_SERVICE_TYPESWithAggregatesFilterSchema;
