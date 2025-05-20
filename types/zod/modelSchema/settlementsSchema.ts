import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { municipalitiesWithRelationsSchema } from './municipalitiesSchema'
import type { municipalitiesWithRelations } from './municipalitiesSchema'
import { weather_dataWithRelationsSchema } from './weather_dataSchema'
import type { weather_dataWithRelations } from './weather_dataSchema'

/////////////////////////////////////////
// SETTLEMENTS SCHEMA
/////////////////////////////////////////

export const settlementsSchema = z.object({
  settlement_id: z.string().uuid(),
  name: z.string(),
  municipalities_id: z.string(),
  eid_naselje: z.string().nullable(),
  feature_id: z.string().nullable(),
  geojson: JsonValueSchema,
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type settlements = z.infer<typeof settlementsSchema>

/////////////////////////////////////////
// SETTLEMENTS RELATION SCHEMA
/////////////////////////////////////////

export type settlementsRelations = {
  municipality: municipalitiesWithRelations;
  weather_data: weather_dataWithRelations[];
};

export type settlementsWithRelations = z.infer<typeof settlementsSchema> & settlementsRelations

export const settlementsWithRelationsSchema: z.ZodType<settlementsWithRelations> = settlementsSchema.merge(z.object({
  municipality: z.lazy(() => municipalitiesWithRelationsSchema),
  weather_data: z.lazy(() => weather_dataWithRelationsSchema).array(),
}))

export default settlementsSchema;
