import { z } from 'zod';
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { allowancesWithRelationsSchema } from './allowancesSchema'
import type { allowancesWithRelations } from './allowancesSchema'

/////////////////////////////////////////
// GROUP USERS SCHEMA
/////////////////////////////////////////

export const group_usersSchema = z.object({
  group_user_id: z.string().uuid(),
  parent_user_id: z.string(),
  child_user_id: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  enabled: z.boolean(),
})

export type group_users = z.infer<typeof group_usersSchema>

/////////////////////////////////////////
// GROUP USERS RELATION SCHEMA
/////////////////////////////////////////

export type group_usersRelations = {
  parent_user: usersWithRelations;
  child_user: usersWithRelations;
  allowance?: allowancesWithRelations | null;
};

export type group_usersWithRelations = z.infer<typeof group_usersSchema> & group_usersRelations

export const group_usersWithRelationsSchema: z.ZodType<group_usersWithRelations> = group_usersSchema.merge(z.object({
  parent_user: z.lazy(() => usersWithRelationsSchema),
  child_user: z.lazy(() => usersWithRelationsSchema),
  allowance: z.lazy(() => allowancesWithRelationsSchema).nullable(),
}))

export default group_usersSchema;
