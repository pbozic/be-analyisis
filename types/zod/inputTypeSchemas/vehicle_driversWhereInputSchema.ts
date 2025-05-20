import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VehiclesRelationFilterSchema } from './VehiclesRelationFilterSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { DriversRelationFilterSchema } from './DriversRelationFilterSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';

export const vehicle_driversWhereInputSchema: z.ZodType<Prisma.vehicle_driversWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => vehicle_driversWhereInputSchema),
				z.lazy(() => vehicle_driversWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => vehicle_driversWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => vehicle_driversWhereInputSchema),
				z.lazy(() => vehicle_driversWhereInputSchema).array(),
			])
			.optional(),
		vehicle_drivers_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		vehicle_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		driver_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
		can_drive: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		created_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updated_at: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		vehicle: z
			.union([z.lazy(() => VehiclesRelationFilterSchema), z.lazy(() => vehiclesWhereInputSchema)])
			.optional(),
		driver: z.union([z.lazy(() => DriversRelationFilterSchema), z.lazy(() => driversWhereInputSchema)]).optional(),
	})
	.strict();

export default vehicle_driversWhereInputSchema;
