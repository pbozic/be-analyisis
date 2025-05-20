import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { driver_municipalitiesWithRelationsSchema } from './driver_municipalitiesSchema'
import type { driver_municipalitiesWithRelations } from './driver_municipalitiesSchema'
import { settlementsWithRelationsSchema } from './settlementsSchema'
import type { settlementsWithRelations } from './settlementsSchema'
import { weather_dataWithRelationsSchema } from './weather_dataSchema'
import type { weather_dataWithRelations } from './weather_dataSchema'

/////////////////////////////////////////
// MUNICIPALITIES SCHEMA
/////////////////////////////////////////

export const municipalitiesSchema = z.object({
  municipalities_id: z.string().uuid(),
  name: z.string(),
  geojson: JsonValueSchema,
  requires_license: z.boolean(),
  gis_sifra: z.string().nullable(),
  eid_obcina: z.string().nullable(),
  feature_id: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type municipalities = z.infer<typeof municipalitiesSchema>

/////////////////////////////////////////
// MUNICIPALITIES RELATION SCHEMA
/////////////////////////////////////////

export type municipalitiesRelations = {
  driver_municipalities: driver_municipalitiesWithRelations[];
  settlements: settlementsWithRelations[];
  weather_data: weather_dataWithRelations[];
};

export type municipalitiesWithRelations = z.infer<typeof municipalitiesSchema> & municipalitiesRelations

export const municipalitiesWithRelationsSchema: z.ZodType<municipalitiesWithRelations> = municipalitiesSchema.merge(z.object({
  driver_municipalities: z.lazy(() => driver_municipalitiesWithRelationsSchema).array(),
  settlements: z.lazy(() => settlementsWithRelationsSchema).array(),
  weather_data: z.lazy(() => weather_dataWithRelationsSchema).array(),
}))

export default municipalitiesSchema;
