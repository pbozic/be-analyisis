import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const driversScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.driversScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => driversScalarWhereWithAggregatesInputSchema),
				z.lazy(() => driversScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => driversScalarWhereWithAggregatesInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => driversScalarWhereWithAggregatesInputSchema),
				z.lazy(() => driversScalarWhereWithAggregatesInputSchema).array(),
			])
			.optional(),
		driver_id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
		business_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		online: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		on_order: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		working_hours: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		ride_requirements: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		user_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		current_vehicle_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		last_used_vehicle_id: z
			.union([z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string()])
			.optional()
			.nullable(),
		location: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		delivery_timeline: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		last_ping_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
		is_inactive: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		transfer_requirements: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
		regions: z.lazy(() => StringNullableListFilterSchema).optional(),
		handles_taxi_orders: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		handles_transfer_orders: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		handles_delivery_orders: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		taxi_orders_toggled: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		transfer_orders_toggled: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		delivery_orders_toggled: z
			.union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		partner_cash_balance: z
			.union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
			.optional()
			.nullable(),
		come_to_work_last_sent_at: z
			.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
	})
	.strict();

export default driversScalarWhereWithAggregatesInputSchema;
