import { z } from 'zod';
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'

/////////////////////////////////////////
// BUSINESS TEAMS SCHEMA
/////////////////////////////////////////

export const business_teamsSchema = z.object({
  business_teams_id: z.string().uuid(),
  team_name: z.string(),
  business_id: z.string(),
  limit_per_person: z.number(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type business_teams = z.infer<typeof business_teamsSchema>

/////////////////////////////////////////
// BUSINESS TEAMS RELATION SCHEMA
/////////////////////////////////////////

export type business_teamsRelations = {
  users: usersWithRelations[];
  business: businessWithRelations;
};

export type business_teamsWithRelations = z.infer<typeof business_teamsSchema> & business_teamsRelations

export const business_teamsWithRelationsSchema: z.ZodType<business_teamsWithRelations> = business_teamsSchema.merge(z.object({
  users: z.lazy(() => usersWithRelationsSchema).array(),
  business: z.lazy(() => businessWithRelationsSchema),
}))

export default business_teamsSchema;
