import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { wallet_transfer_historyWhereInputSchema } from './wallet_transfer_historyWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { Taxi_ordersNullableRelationFilterSchema } from './Taxi_ordersNullableRelationFilterSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';

export const wallet_transfer_historyWhereUniqueInputSchema: z.ZodType<Prisma.wallet_transfer_historyWhereUniqueInput> =
	z
		.object({
			wallet_transfer_history_id: z.string().uuid(),
		})
		.and(
			z
				.object({
					wallet_transfer_history_id: z.string().uuid().optional(),
					AND: z
						.union([
							z.lazy(() => wallet_transfer_historyWhereInputSchema),
							z.lazy(() => wallet_transfer_historyWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => wallet_transfer_historyWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => wallet_transfer_historyWhereInputSchema),
							z.lazy(() => wallet_transfer_historyWhereInputSchema).array(),
						])
						.optional(),
					order_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
					amount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
					created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
					updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
					success: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
					delivery_order: z
						.union([
							z.lazy(() => Delivery_ordersNullableRelationFilterSchema),
							z.lazy(() => delivery_ordersWhereInputSchema),
						])
						.optional()
						.nullable(),
					taxi_order: z
						.union([
							z.lazy(() => Taxi_ordersNullableRelationFilterSchema),
							z.lazy(() => taxi_ordersWhereInputSchema),
						])
						.optional()
						.nullable(),
				})
				.strict()
		);

export default wallet_transfer_historyWhereUniqueInputSchema;
