import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { DELIVERY_ORDER_STATUSSchema } from './DELIVERY_ORDER_STATUSSchema';

export const delivery_ordersCreateManyDriverInputSchema: z.ZodType<Prisma.delivery_ordersCreateManyDriverInput> = z
	.object({
		order_id: z.string().uuid().optional(),
		user_id: z.string().optional().nullable(),
		route: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
		pickup_location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
		delivery_location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
		payment: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		estimates: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		items: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
		details: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		courier_instructions: z
			.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
			.optional(),
		restaurant_message: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		scheduled: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		status: z.lazy(() => DELIVERY_ORDER_STATUSSchema),
		last_sent_at: z.coerce.date().optional().nullable(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		vehicle_id: z.string().optional().nullable(),
		delivery_driver_id: z.string().optional().nullable(),
		business_id: z.string().optional().nullable(),
		payment_intent_id: z.string().optional().nullable(),
		find_drivers_attempts: z.number().int().optional().nullable(),
		is_daily_meal: z.boolean().optional(),
		flags: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		allow_credits_usage: z.boolean().optional(),
		order_number: z.number().int().optional(),
	})
	.strict();

export default delivery_ordersCreateManyDriverInputSchema;
