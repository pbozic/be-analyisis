import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { driversCreateNestedOneWithoutDriver_history_locationsInputSchema } from './driversCreateNestedOneWithoutDriver_history_locationsInputSchema';
import { taxi_ordersCreateNestedOneWithoutDriver_history_locationsInputSchema } from './taxi_ordersCreateNestedOneWithoutDriver_history_locationsInputSchema';

export const driver_history_locationsCreateWithoutDelivery_orderInputSchema: z.ZodType<Prisma.driver_history_locationsCreateWithoutDelivery_orderInput> =
	z
		.object({
			driver_history_location_id: z.string().uuid().optional(),
			status: z.string().optional().nullable(),
			location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			driver: z.lazy(() => driversCreateNestedOneWithoutDriver_history_locationsInputSchema).optional(),
			order: z.lazy(() => taxi_ordersCreateNestedOneWithoutDriver_history_locationsInputSchema).optional(),
		})
		.strict();

export default driver_history_locationsCreateWithoutDelivery_orderInputSchema;
