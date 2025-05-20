import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const delivery_driver_history_locationsCreateManyInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsCreateManyInput> =
	z
		.object({
			delivery_driver_history_location_id: z.string().uuid().optional(),
			delivery_driver_id: z.string(),
			order_id: z.string().optional().nullable(),
			status: z
				.lazy(() => DELIVERY_ORDER_STATUSSchema)
				.optional()
				.nullable(),
			location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
		})
		.strict();

export default delivery_driver_history_locationsCreateManyInputSchema;
