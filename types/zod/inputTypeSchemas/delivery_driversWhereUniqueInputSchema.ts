import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { UsersNullableRelationFilterSchema } from './UsersNullableRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { VehiclesListRelationFilterSchema } from './VehiclesListRelationFilterSchema';
import { Delivery_ordersListRelationFilterSchema } from './Delivery_ordersListRelationFilterSchema';
import { Delivery_order_sentListRelationFilterSchema } from './Delivery_order_sentListRelationFilterSchema';
import { DocumentsListRelationFilterSchema } from './DocumentsListRelationFilterSchema';
import { Delivery_driver_history_locationsListRelationFilterSchema } from './Delivery_driver_history_locationsListRelationFilterSchema';
import { BusinessNullableRelationFilterSchema } from './BusinessNullableRelationFilterSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const delivery_driversWhereUniqueInputSchema: z.ZodType<Prisma.delivery_driversWhereUniqueInput> = z
	.union([
		z.object({
			delivery_driver_id: z.string().uuid(),
			user_id: z.string(),
		}),
		z.object({
			delivery_driver_id: z.string().uuid(),
		}),
		z.object({
			user_id: z.string(),
		}),
	])
	.and(
		z
			.object({
				delivery_driver_id: z.string().uuid().optional(),
				user_id: z.string().optional(),
				AND: z
					.union([
						z.lazy(() => delivery_driversWhereInputSchema),
						z.lazy(() => delivery_driversWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => delivery_driversWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => delivery_driversWhereInputSchema),
						z.lazy(() => delivery_driversWhereInputSchema).array(),
					])
					.optional(),
				online: z
					.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
					.optional()
					.nullable(),
				on_order: z
					.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
					.optional()
					.nullable(),
				delivers_daily_meals: z
					.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
					.optional()
					.nullable(),
				working_hours: z.lazy(() => JsonNullableFilterSchema).optional(),
				business_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				location: z.lazy(() => JsonNullableFilterSchema).optional(),
				delivery_timeline: z.lazy(() => JsonNullableFilterSchema).optional(),
				last_ping_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				on_daily_meals: z
					.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
					.optional()
					.nullable(),
				is_inactive: z
					.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
					.optional()
					.nullable(),
				scheduled_meals_route: z.lazy(() => JsonNullableFilterSchema).optional(),
				regions: z.lazy(() => StringNullableListFilterSchema).optional(),
				partner_cash_balance: z
					.union([z.lazy(() => FloatNullableFilterSchema), z.number()])
					.optional()
					.nullable(),
				daily_meal_business_id: z
					.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				user: z
					.union([z.lazy(() => UsersNullableRelationFilterSchema), z.lazy(() => usersWhereInputSchema)])
					.optional()
					.nullable(),
				vehicles: z.lazy(() => VehiclesListRelationFilterSchema).optional(),
				orders: z.lazy(() => Delivery_ordersListRelationFilterSchema).optional(),
				received_orders: z.lazy(() => Delivery_order_sentListRelationFilterSchema).optional(),
				documents: z.lazy(() => DocumentsListRelationFilterSchema).optional(),
				delivery_driver_history_locations: z
					.lazy(() => Delivery_driver_history_locationsListRelationFilterSchema)
					.optional(),
				daily_meal_business: z
					.union([z.lazy(() => BusinessNullableRelationFilterSchema), z.lazy(() => businessWhereInputSchema)])
					.optional()
					.nullable(),
			})
			.strict()
	);

export default delivery_driversWhereUniqueInputSchema;
