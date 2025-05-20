import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { Delivery_driversNullableRelationFilterSchema } from './Delivery_driversNullableRelationFilterSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { DriversNullableRelationFilterSchema } from './DriversNullableRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const delivery_order_sentWhereInputSchema: z.ZodType<Prisma.delivery_order_sentWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => delivery_order_sentWhereInputSchema),
				z.lazy(() => delivery_order_sentWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => delivery_order_sentWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => delivery_order_sentWhereInputSchema),
				z.lazy(() => delivery_order_sentWhereInputSchema).array(),
			])
			.optional(),
		delivery_order_sent_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		order_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		accepted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		location: z.lazy(() => JsonFilterSchema).optional(),
		timeline: z.lazy(() => JsonFilterSchema).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		delivery_driver_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		driver_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		order: z
			.union([
				z.lazy(() => Delivery_ordersNullableRelationFilterSchema),
				z.lazy(() => delivery_ordersWhereInputSchema),
			])
			.optional()
			.nullable(),
		delivery_driver: z
			.union([
				z.lazy(() => Delivery_driversNullableRelationFilterSchema),
				z.lazy(() => delivery_driversWhereInputSchema),
			])
			.optional()
			.nullable(),
		driver: z
			.union([z.lazy(() => DriversNullableRelationFilterSchema), z.lazy(() => driversWhereInputSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export default delivery_order_sentWhereInputSchema;
