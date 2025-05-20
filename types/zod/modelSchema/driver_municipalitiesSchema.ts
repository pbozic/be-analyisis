import { z } from 'zod';
import { driversWithRelationsSchema } from './driversSchema';
import type { driversWithRelations } from './driversSchema';
import { municipalitiesWithRelationsSchema } from './municipalitiesSchema';
import type { municipalitiesWithRelations } from './municipalitiesSchema';

/////////////////////////////////////////
// DRIVER MUNICIPALITIES SCHEMA
/////////////////////////////////////////

export const driver_municipalitiesSchema = z.object({
	driver_municipalities_id: z.string().uuid(),
	driver_id: z.string(),
	municipalities_id: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type driver_municipalities = z.infer<typeof driver_municipalitiesSchema>;

/////////////////////////////////////////
// DRIVER MUNICIPALITIES RELATION SCHEMA
/////////////////////////////////////////

export type driver_municipalitiesRelations = {
	drivers: driversWithRelations;
	municipalities: municipalitiesWithRelations;
};

export type driver_municipalitiesWithRelations = z.infer<typeof driver_municipalitiesSchema> &
	driver_municipalitiesRelations;

export const driver_municipalitiesWithRelationsSchema: z.ZodType<driver_municipalitiesWithRelations> =
	driver_municipalitiesSchema.merge(
		z.object({
			drivers: z.lazy(() => driversWithRelationsSchema),
			municipalities: z.lazy(() => municipalitiesWithRelationsSchema),
		})
	);

export default driver_municipalitiesSchema;
