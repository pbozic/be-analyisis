import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { driversCreateregionsInputSchema } from './driversCreateregionsInputSchema';

export const driversCreateManyInputSchema: z.ZodType<Prisma.driversCreateManyInput> = z
	.object({
		driver_id: z.string().uuid().optional(),
		business_id: z.string().optional().nullable(),
		online: z.boolean().optional().nullable(),
		on_order: z.boolean().optional().nullable(),
		working_hours: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		ride_requirements: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		user_id: z.string().optional().nullable(),
		current_vehicle_id: z.string().optional().nullable(),
		last_used_vehicle_id: z.string().optional().nullable(),
		location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		delivery_timeline: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		last_ping_at: z.coerce.date().optional(),
		is_inactive: z.boolean().optional().nullable(),
		transfer_requirements: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		regions: z.union([z.lazy(() => driversCreateregionsInputSchema), z.string().array()]).optional(),
		handles_taxi_orders: z.boolean().optional().nullable(),
		handles_transfer_orders: z.boolean().optional().nullable(),
		handles_delivery_orders: z.boolean().optional().nullable(),
		taxi_orders_toggled: z.boolean().optional().nullable(),
		transfer_orders_toggled: z.boolean().optional().nullable(),
		delivery_orders_toggled: z.boolean().optional().nullable(),
		partner_cash_balance: z.number().optional().nullable(),
		come_to_work_last_sent_at: z.coerce.date().optional().nullable(),
	})
	.strict();

export default driversCreateManyInputSchema;
