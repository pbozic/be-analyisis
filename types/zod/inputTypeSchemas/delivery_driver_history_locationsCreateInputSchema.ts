import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { delivery_driversCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema } from './delivery_driversCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema';
import { delivery_ordersCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema } from './delivery_ordersCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema';

export const delivery_driver_history_locationsCreateInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsCreateInput> =
	z
		.object({
			delivery_driver_history_location_id: z.string().uuid().optional(),
			status: z
				.lazy(() => DELIVERY_ORDER_STATUSSchema)
				.optional()
				.nullable(),
			location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			delivery_driver: z
				.lazy(() => delivery_driversCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema)
				.optional(),
			order: z
				.lazy(() => delivery_ordersCreateNestedOneWithoutDelivery_driver_history_locationsInputSchema)
				.optional(),
		})
		.strict();

export default delivery_driver_history_locationsCreateInputSchema;
