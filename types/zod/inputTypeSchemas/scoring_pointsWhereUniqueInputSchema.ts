import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { scoring_pointsWhereInputSchema } from './scoring_pointsWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumSCORING_POINTS_REASONFilterSchema } from './EnumSCORING_POINTS_REASONFilterSchema';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { Delivery_ordersNullableRelationFilterSchema } from './Delivery_ordersNullableRelationFilterSchema';
import { delivery_ordersWhereInputSchema } from './delivery_ordersWhereInputSchema';
import { Taxi_ordersNullableRelationFilterSchema } from './Taxi_ordersNullableRelationFilterSchema';
import { taxi_ordersWhereInputSchema } from './taxi_ordersWhereInputSchema';
import { Late_eventsListRelationFilterSchema } from './Late_eventsListRelationFilterSchema';

export const scoring_pointsWhereUniqueInputSchema: z.ZodType<Prisma.scoring_pointsWhereUniqueInput> = z
	.object({
		scoring_points_id: z.string().uuid(),
	})
	.and(
		z
			.object({
				scoring_points_id: z.string().uuid().optional(),
				AND: z
					.union([
						z.lazy(() => scoring_pointsWhereInputSchema),
						z.lazy(() => scoring_pointsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => scoring_pointsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => scoring_pointsWhereInputSchema),
						z.lazy(() => scoring_pointsWhereInputSchema).array(),
					])
					.optional(),
				business_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
				user_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				delivery_order_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				taxi_order_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				points: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				isPenalty: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
				reason: z
					.union([
						z.lazy(() => EnumSCORING_POINTS_REASONFilterSchema),
						z.lazy(() => SCORING_POINTS_REASONSchema),
					])
					.optional(),
				expiration_date: z
					.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
					.optional()
					.nullable(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				users: z
					.union([z.lazy(() => UsersNullableRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional()
					.nullable(),
				businesses: z
					.union([z.lazy(() => BusinessNullableRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional()
					.nullable(),
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
				late_events: z.lazy(() => Late_eventsListRelationFilterSchema).optional(),
			})
			.strict()
	);

export default scoring_pointsWhereUniqueInputSchema;
