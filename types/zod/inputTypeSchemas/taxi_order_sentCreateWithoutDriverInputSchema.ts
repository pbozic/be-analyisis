import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { taxi_ordersCreateNestedOneWithoutHistoryInputSchema } from './taxi_ordersCreateNestedOneWithoutHistoryInputSchema';

export const taxi_order_sentCreateWithoutDriverInputSchema: z.ZodType<Prisma.taxi_order_sentCreateWithoutDriverInput> =
	z
		.object({
			taxi_order_sent_id: z.string().uuid().optional(),
			accepted: z.boolean().optional(),
			location: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			timeline: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
			created_at: z.coerce.date().optional(),
			updated_at: z.coerce.date().optional(),
			rejected: z.boolean().optional(),
			order: z.lazy(() => taxi_ordersCreateNestedOneWithoutHistoryInputSchema).optional(),
		})
		.strict();

export default taxi_order_sentCreateWithoutDriverInputSchema;
