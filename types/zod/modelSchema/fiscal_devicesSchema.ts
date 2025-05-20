import { z } from 'zod';
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'

/////////////////////////////////////////
// FISCAL DEVICES SCHEMA
/////////////////////////////////////////

export const fiscal_devicesSchema = z.object({
  fiscal_devices_id: z.string().uuid(),
  name: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type fiscal_devices = z.infer<typeof fiscal_devicesSchema>

/////////////////////////////////////////
// FISCAL DEVICES RELATION SCHEMA
/////////////////////////////////////////

export type fiscal_devicesRelations = {
  businesses: businessWithRelations[];
};

export type fiscal_devicesWithRelations = z.infer<typeof fiscal_devicesSchema> & fiscal_devicesRelations

export const fiscal_devicesWithRelationsSchema: z.ZodType<fiscal_devicesWithRelations> = fiscal_devicesSchema.merge(z.object({
  businesses: z.lazy(() => businessWithRelationsSchema).array(),
}))

export default fiscal_devicesSchema;
