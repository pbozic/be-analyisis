import { z } from 'zod';
import { USER_ROLESSchema } from '../inputTypeSchemas/USER_ROLESSchema'
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'

/////////////////////////////////////////
// USER ROLES SCHEMA
/////////////////////////////////////////

export const user_rolesSchema = z.object({
  role: USER_ROLESSchema,
  user_roles_id: z.string().uuid(),
  user_id: z.string(),
  primary: z.boolean().nullable(),
})

export type user_roles = z.infer<typeof user_rolesSchema>

/////////////////////////////////////////
// USER ROLES RELATION SCHEMA
/////////////////////////////////////////

export type user_rolesRelations = {
  user: usersWithRelations;
};

export type user_rolesWithRelations = z.infer<typeof user_rolesSchema> & user_rolesRelations

export const user_rolesWithRelationsSchema: z.ZodType<user_rolesWithRelations> = user_rolesSchema.merge(z.object({
  user: z.lazy(() => usersWithRelationsSchema),
}))

export default user_rolesSchema;
