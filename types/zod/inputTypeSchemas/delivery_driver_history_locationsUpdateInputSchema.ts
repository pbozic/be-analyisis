import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';
import { NullableEnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema } from './NullableEnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { delivery_driversUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema } from './delivery_driversUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema';
import { delivery_ordersUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema } from './delivery_ordersUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema';

export const delivery_driver_history_locationsUpdateInputSchema: z.ZodType<Prisma.delivery_driver_history_locationsUpdateInput> =
	z
		.object({
			delivery_driver_history_location_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			status: z
				.union([
					z.lazy(() => DELIVERY_ORDER_STATUSSchema),
					z.lazy(() => NullableEnumDELIVERY_ORDER_STATUSFieldUpdateOperationsInputSchema),
				])
				.optional()
				.nullable(),
			location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			delivery_driver: z
				.lazy(() => delivery_driversUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema)
				.optional(),
			order: z
				.lazy(() => delivery_ordersUpdateOneWithoutDelivery_driver_history_locationsNestedInputSchema)
				.optional(),
		})
		.strict();

export default delivery_driver_history_locationsUpdateInputSchema;
