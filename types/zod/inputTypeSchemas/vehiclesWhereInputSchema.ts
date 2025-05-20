import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { EnumVEHICLE_CLASSNullableFilterSchema } from './EnumVEHICLE_CLASSNullableFilterSchema';
import { VEHICLE_CLASSSchema } from './VEHICLE_CLASSSchema';
import { EnumVEHICLE_CATEGORYNullableFilterSchema } from './EnumVEHICLE_CATEGORYNullableFilterSchema';
import { VEHICLE_CATEGORYSchema } from './VEHICLE_CATEGORYSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DocumentsListRelationFilterSchema } from './DocumentsListRelationFilterSchema';
import { Vehicle_driversListRelationFilterSchema } from './Vehicle_driversListRelationFilterSchema';
import { Delivery_driversNullableRelationFilterSchema } from './Delivery_driversNullableRelationFilterSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { Vehicle_specificationsNullableRelationFilterSchema } from './Vehicle_specificationsNullableRelationFilterSchema';
import { vehicle_specificationsWhereInputSchema } from './vehicle_specificationsWhereInputSchema';
import { Taxi_ordersListRelationFilterSchema } from './Taxi_ordersListRelationFilterSchema';
import { Delivery_ordersListRelationFilterSchema } from './Delivery_ordersListRelationFilterSchema';
import { DriversNullableRelationFilterSchema } from './DriversNullableRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const vehiclesWhereInputSchema: z.ZodType<Prisma.vehiclesWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => vehiclesWhereInputSchema), z.lazy(() => vehiclesWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => vehiclesWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => vehiclesWhereInputSchema), z.lazy(() => vehiclesWhereInputSchema).array()])
			.optional(),
		vehicle_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		business_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		active: z
			.union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
			.optional()
			.nullable(),
		class: z
			.union([z.lazy(() => EnumVEHICLE_CLASSNullableFilterSchema), z.lazy(() => VEHICLE_CLASSSchema)])
			.optional()
			.nullable(),
		category: z
			.union([z.lazy(() => EnumVEHICLE_CATEGORYNullableFilterSchema), z.lazy(() => VEHICLE_CATEGORYSchema)])
			.optional()
			.nullable(),
		make: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		model: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		color: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		license_plate: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		delivery_driver_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		vehicle_specification_id: z
			.union([z.lazy(() => UuidNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		documents: z.lazy(() => DocumentsListRelationFilterSchema).optional(),
		drivers: z.lazy(() => Vehicle_driversListRelationFilterSchema).optional(),
		delivery_driver: z
			.union([
				z.lazy(() => Delivery_driversNullableRelationFilterSchema),
				z.lazy(() => delivery_driversWhereInputSchema),
			])
			.optional()
			.nullable(),
		vehicle_specification: z
			.union([
				z.lazy(() => Vehicle_specificationsNullableRelationFilterSchema),
				z.lazy(() => vehicle_specificationsWhereInputSchema),
			])
			.optional()
			.nullable(),
		taxi_orders: z.lazy(() => Taxi_ordersListRelationFilterSchema).optional(),
		delivery_orders: z.lazy(() => Delivery_ordersListRelationFilterSchema).optional(),
		current_driver: z
			.union([z.lazy(() => DriversNullableRelationFilterSchema), z.lazy(() => driversWhereInputSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export default vehiclesWhereInputSchema;
