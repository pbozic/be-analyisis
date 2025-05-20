import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'

/////////////////////////////////////////
// FINANCES SCHEMA
/////////////////////////////////////////

export const financesSchema = z.object({
  finance_id: z.string().uuid(),
  bank_name: z.string(),
  account_holder: z.string(),
  account_number: z.string(),
  payment_preferences: JsonValueSchema,
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type finances = z.infer<typeof financesSchema>

/////////////////////////////////////////
// FINANCES RELATION SCHEMA
/////////////////////////////////////////

export type financesRelations = {
  business: businessWithRelations[];
};

export type financesWithRelations = z.infer<typeof financesSchema> & financesRelations

export const financesWithRelationsSchema: z.ZodType<financesWithRelations> = financesSchema.merge(z.object({
  business: z.lazy(() => businessWithRelationsSchema).array(),
}))

export default financesSchema;
