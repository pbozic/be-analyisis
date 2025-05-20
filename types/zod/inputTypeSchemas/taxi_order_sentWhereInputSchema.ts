import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { Taxi_ordersNullableRelationFilterSchema } from './Taxi_ordersNullableRelationFilterSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { DriversNullableRelationFilterSchema } from './DriversNullableRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const taxi_order_sentWhereInputSchema: z.ZodType<Prisma.taxi_order_sentWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => taxi_order_sentWhereInputSchema),
				z.lazy(() => taxi_order_sentWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => taxi_order_sentWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => taxi_order_sentWhereInputSchema),
				z.lazy(() => taxi_order_sentWhereInputSchema).array(),
			])
			.optional(),
		taxi_order_sent_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		order_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		driver_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		accepted: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		location: z.lazy(() => JsonNullableFilterSchema).optional(),
		timeline: z.lazy(() => JsonFilterSchema).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		rejected: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		order: z
			.union([z.lazy(() => Taxi_ordersNullableRelationFilterSchema), z.lazy(() => taxi_ordersWhereInputSchema)])
			.optional()
			.nullable(),
		driver: z
			.union([z.lazy(() => DriversNullableRelationFilterSchema), z.lazy(() => driversWhereInputSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export default taxi_order_sentWhereInputSchema;
