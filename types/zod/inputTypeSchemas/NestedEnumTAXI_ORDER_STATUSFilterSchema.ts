import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';

export const NestedEnumTAXI_ORDER_STATUSFilterSchema: z.ZodType<Prisma.NestedEnumTAXI_ORDER_STATUSFilter> = z
	.object({
		equals: z.lazy(() => TAXI_ORDER_STATUSSchema).optional(),
		in: z
			.lazy(() => TAXI_ORDER_STATUSSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => TAXI_ORDER_STATUSSchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => TAXI_ORDER_STATUSSchema), z.lazy(() => NestedEnumTAXI_ORDER_STATUSFilterSchema)])
			.optional(),
	})
	.strict();

export default NestedEnumTAXI_ORDER_STATUSFilterSchema;
