import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TAXI_ORDER_STATUSSchema } from './TAXI_ORDER_STATUSSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTAXI_ORDER_STATUSFilterSchema } from './NestedEnumTAXI_ORDER_STATUSFilterSchema';

export const NestedEnumTAXI_ORDER_STATUSWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTAXI_ORDER_STATUSWithAggregatesFilter> =
	z
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
				.union([
					z.lazy(() => TAXI_ORDER_STATUSSchema),
					z.lazy(() => NestedEnumTAXI_ORDER_STATUSWithAggregatesFilterSchema),
				])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumTAXI_ORDER_STATUSFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumTAXI_ORDER_STATUSFilterSchema).optional(),
		})
		.strict();

export default NestedEnumTAXI_ORDER_STATUSWithAggregatesFilterSchema;
