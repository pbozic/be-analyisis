import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { delivery_ordersCreateNestedOneWithoutHistoryInputSchema } from './delivery_ordersCreateNestedOneWithoutHistoryInputSchema';
import { delivery_driversCreateNestedOneWithoutReceived_ordersInputSchema } from './delivery_driversCreateNestedOneWithoutReceived_ordersInputSchema';
import { driversCreateNestedOneWithoutReceived_delivery_ordersInputSchema } from './driversCreateNestedOneWithoutReceived_delivery_ordersInputSchema';

export const delivery_order_sentCreateInputSchema: z.ZodType<Prisma.delivery_order_sentCreateInput> = z
	.object({
		delivery_order_sent_id: z.string().uuid().optional(),
		accepted: z.boolean().optional(),
		location: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
		timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
		created_at: z.coerce.date().optional(),
		updated_at: z.coerce.date().optional(),
		order: z.lazy(() => delivery_ordersCreateNestedOneWithoutHistoryInputSchema).optional(),
		delivery_driver: z.lazy(() => delivery_driversCreateNestedOneWithoutReceived_ordersInputSchema).optional(),
		driver: z.lazy(() => driversCreateNestedOneWithoutReceived_delivery_ordersInputSchema).optional(),
	})
	.strict();

export default delivery_order_sentCreateInputSchema;
