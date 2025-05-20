import { z } from 'zod';

/////////////////////////////////////////
// ALLERGENS SCHEMA
/////////////////////////////////////////

export const allergensSchema = z.object({
  allergen_id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  code: z.number().int(),
})

export type allergens = z.infer<typeof allergensSchema>

export default allergensSchema;
