import { z } from 'zod';
import { VEHICLE_CLASSSchema } from '../inputTypeSchemas/VEHICLE_CLASSSchema';
import { VEHICLE_CATEGORYSchema } from '../inputTypeSchemas/VEHICLE_CATEGORYSchema';
import { vehiclesWithRelationsSchema } from './vehiclesSchema';
import type { vehiclesWithRelations } from './vehiclesSchema';

/////////////////////////////////////////
// VEHICLE SPECIFICATIONS SCHEMA
/////////////////////////////////////////

export const vehicle_specificationsSchema = z.object({
	class: VEHICLE_CLASSSchema,
	category: VEHICLE_CATEGORYSchema,
	vehicle_specification_id: z.string().uuid(),
	people: z.string(),
	start_cost: z.string(),
	per_kilometre: z.string(),
	per_minute: z.string(),
	vehicle_id: z.string().nullable(),
});

export type vehicle_specifications = z.infer<typeof vehicle_specificationsSchema>;

/////////////////////////////////////////
// VEHICLE SPECIFICATIONS RELATION SCHEMA
/////////////////////////////////////////

export type vehicle_specificationsRelations = {
	vehicle?: vehiclesWithRelations | null;
};

export type vehicle_specificationsWithRelations = z.infer<typeof vehicle_specificationsSchema> &
	vehicle_specificationsRelations;

export const vehicle_specificationsWithRelationsSchema: z.ZodType<vehicle_specificationsWithRelations> =
	vehicle_specificationsSchema.merge(
		z.object({
			vehicle: z.lazy(() => vehiclesWithRelationsSchema).nullable(),
		})
	);

export default vehicle_specificationsSchema;
