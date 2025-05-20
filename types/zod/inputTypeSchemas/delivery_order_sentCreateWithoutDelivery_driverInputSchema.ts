import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { delivery_ordersCreateNestedOneWithoutHistoryInputSchema } from './delivery_ordersCreateNestedOneWithoutHistoryInputSchema';
import { driversCreateNestedOneWithoutReceived_delivery_ordersInputSchema } from './driversCreateNestedOneWithoutReceived_delivery_ordersInputSchema';

export const delivery_order_sentCreateWithoutDelivery_driverInputSchema: z.ZodType<Prisma.delivery_order_sentCreateWithoutDelivery_driverInput> =
	z
		.object({
			delivery_order_sent_id: z.string().uuid().optional(),
			accepted: z.boolean().optional(),
			location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
			timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			order: z.lazy(() => delivery_ordersCreateNestedOneWithoutHistoryInputSchema).optional(),
			driver: z.lazy(() => driversCreateNestedOneWithoutReceived_delivery_ordersInputSchema).optional(),
		})
		.strict();

export default delivery_order_sentCreateWithoutDelivery_driverInputSchema;
