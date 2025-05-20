import { z } from 'zod';
import { municipalitiesWithRelationsSchema } from './municipalitiesSchema';
import type { municipalitiesWithRelations } from './municipalitiesSchema';
import { settlementsWithRelationsSchema } from './settlementsSchema';
import type { settlementsWithRelations } from './settlementsSchema';

/////////////////////////////////////////
// WEATHER DATA SCHEMA
/////////////////////////////////////////

export const weather_dataSchema = z.object({
	weather_data_id: z.string().uuid(),
	time_epoch: z.bigint(),
	time: z.coerce.date(),
	temp_c: z.number(),
	is_day: z.boolean(),
	condition_text: z.string(),
	condition_icon: z.string(),
	condition_code: z.number().int(),
	wind_kph: z.number(),
	wind_degree: z.number().int(),
	wind_dir: z.string(),
	pressure_mb: z.number(),
	precip_mm: z.number(),
	snow_cm: z.number(),
	humidity: z.number().int(),
	cloud: z.number().int(),
	feelslike_c: z.number(),
	windchill_c: z.number(),
	heatindex_c: z.number(),
	dewpoint_c: z.number(),
	will_it_rain: z.boolean(),
	chance_of_rain: z.number().int(),
	will_it_snow: z.boolean(),
	chance_of_snow: z.number().int(),
	vis_km: z.number(),
	gust_kph: z.number(),
	uv: z.number(),
	icon: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	municipalities_id: z.string().nullable(),
	settlement_id: z.string().nullable(),
});

export type weather_data = z.infer<typeof weather_dataSchema>;

/////////////////////////////////////////
// WEATHER DATA RELATION SCHEMA
/////////////////////////////////////////

export type weather_dataRelations = {
	municipality?: municipalitiesWithRelations | null;
	settlement?: settlementsWithRelations | null;
};

export type weather_dataWithRelations = z.infer<typeof weather_dataSchema> & weather_dataRelations;

export const weather_dataWithRelationsSchema: z.ZodType<weather_dataWithRelations> = weather_dataSchema.merge(
	z.object({
		municipality: z.lazy(() => municipalitiesWithRelationsSchema).nullable(),
		settlement: z.lazy(() => settlementsWithRelationsSchema).nullable(),
	})
);

export default weather_dataSchema;
