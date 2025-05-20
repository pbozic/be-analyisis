import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { late_eventsWhereInputSchema } from './late_eventsWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { BusinessRelationFilterSchema } from './BusinessRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { Taxi_ordersNullableRelationFilterSchema } from './Taxi_ordersNullableRelationFilterSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { Scoring_pointsNullableRelationFilterSchema } from './Scoring_pointsNullableRelationFilterSchema';
import { scoring_pointsWhereInputSchema } from './scoring_pointsWhereInputSchema';

export const late_eventsWhereUniqueInputSchema: z.ZodType<Prisma.late_eventsWhereUniqueInput> = z
	.object({
		late_events_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				late_events_id: z.string().uuid().optional(),
				AND: z
					.union([
						z.lazy(() => late_eventsWhereInputSchema),
						z.lazy(() => late_eventsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => late_eventsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => late_eventsWhereInputSchema),
						z.lazy(() => late_eventsWhereInputSchema).array(),
					])
					.optional(),
				business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				delivery_order_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				taxi_order_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				scoring_points_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				seconds: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				users: z
					.union([z.lazy(() => UsersNullableRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional()
					.nullable(),
				businesses: z
					.union([z.lazy(() => BusinessRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional(),
				delivery_orders: z
					.union([
						z.lazy(() => Delivery_ordersNullableRelationFilterSchema),
						z.lazy(() => delivery_ordersWhereInputSchema),
					])
					.optional()
					.nullable(),
				taxi_orders: z
					.union([
						z.lazy(() => Taxi_ordersNullableRelationFilterSchema),
						z.lazy(() => taxi_ordersWhereInputSchema),
					])
					.optional()
					.nullable(),
				scoring_points: z
					.union([
						z.lazy(() => Scoring_pointsNullableRelationFilterSchema),
						z.lazy(() => scoring_pointsWhereInputSchema),
					])
					.optional()
					.nullable(),
			})
			.strict()
	);

export default late_eventsWhereUniqueInputSchema;
