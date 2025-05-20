import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PROMO_SERVICE_TYPESSchema } from './PROMO_SERVICE_TYPESSchema';

export const NestedEnumPROMO_SERVICE_TYPESFilterSchema: z.ZodType<Prisma.NestedEnumPROMO_SERVICE_TYPESFilter> = z
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
			.union([z.lazy(() => PROMO_SERVICE_TYPESSchema), z.lazy(() => NestedEnumPROMO_SERVICE_TYPESFilterSchema)])
			.optional(),
	})
	.strict();

export default NestedEnumPROMO_SERVICE_TYPESFilterSchema;
