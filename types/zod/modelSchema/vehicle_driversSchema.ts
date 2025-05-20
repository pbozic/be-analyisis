import { z } from 'zod';
import { vehiclesWithRelationsSchema } from './vehiclesSchema';
import type { vehiclesWithRelations } from './vehiclesSchema';
import { driversWithRelationsSchema } from './driversSchema';
import type { driversWithRelations } from './driversSchema';

/////////////////////////////////////////
// VEHICLE DRIVERS SCHEMA
/////////////////////////////////////////

export const vehicle_driversSchema = z.object({
	vehicle_drivers_id: z.string().uuid(),
	vehicle_id: z.string(),
	driver_id: z.string(),
	can_drive: z.boolean(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type vehicle_drivers = z.infer<typeof vehicle_driversSchema>;

/////////////////////////////////////////
// VEHICLE DRIVERS RELATION SCHEMA
/////////////////////////////////////////

export type vehicle_driversRelations = {
	vehicle: vehiclesWithRelations;
	driver: driversWithRelations;
};

export type vehicle_driversWithRelations = z.infer<typeof vehicle_driversSchema> & vehicle_driversRelations;

export const vehicle_driversWithRelationsSchema: z.ZodType<vehicle_driversWithRelations> = vehicle_driversSchema.merge(
	z.object({
		vehicle: z.lazy(() => vehiclesWithRelationsSchema),
		driver: z.lazy(() => driversWithRelationsSchema),
	})
);

export default vehicle_driversSchema;
