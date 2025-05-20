import { z } from 'zod';
import { BUSINESS_TYPESchema } from '../inputTypeSchemas/BUSINESS_TYPESchema'
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'

/////////////////////////////////////////
// USER FAVORITE BUSINESSES SCHEMA
/////////////////////////////////////////

export const user_favorite_businessesSchema = z.object({
  business_type: BUSINESS_TYPESchema,
  user_favorite_businesses_id: z.string().uuid(),
  user_id: z.string(),
  business_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type user_favorite_businesses = z.infer<typeof user_favorite_businessesSchema>

/////////////////////////////////////////
// USER FAVORITE BUSINESSES RELATION SCHEMA
/////////////////////////////////////////

export type user_favorite_businessesRelations = {
  users: usersWithRelations;
  businesses: businessWithRelations;
};

export type user_favorite_businessesWithRelations = z.infer<typeof user_favorite_businessesSchema> & user_favorite_businessesRelations

export const user_favorite_businessesWithRelationsSchema: z.ZodType<user_favorite_businessesWithRelations> = user_favorite_businessesSchema.merge(z.object({
  users: z.lazy(() => usersWithRelationsSchema),
  businesses: z.lazy(() => businessWithRelationsSchema),
}))

export default user_favorite_businessesSchema;
