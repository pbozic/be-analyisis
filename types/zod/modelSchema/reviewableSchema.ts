import { z } from 'zod';
import { reviewsWithRelationsSchema } from './reviewsSchema'
import type { reviewsWithRelations } from './reviewsSchema'
import { usersWithRelationsSchema } from './usersSchema'
import type { usersWithRelations } from './usersSchema'
import { businessWithRelationsSchema } from './businessSchema'
import type { businessWithRelations } from './businessSchema'

/////////////////////////////////////////
// REVIEWABLE SCHEMA
/////////////////////////////////////////

export const reviewableSchema = z.object({
  reviewable_id: z.string().uuid(),
})

export type reviewable = z.infer<typeof reviewableSchema>

/////////////////////////////////////////
// REVIEWABLE RELATION SCHEMA
/////////////////////////////////////////

export type reviewableRelations = {
  reviews: reviewsWithRelations[];
  user: usersWithRelations[];
  business: businessWithRelations[];
};

export type reviewableWithRelations = z.infer<typeof reviewableSchema> & reviewableRelations

export const reviewableWithRelationsSchema: z.ZodType<reviewableWithRelations> = reviewableSchema.merge(z.object({
  reviews: z.lazy(() => reviewsWithRelationsSchema).array(),
  user: z.lazy(() => usersWithRelationsSchema).array(),
  business: z.lazy(() => businessWithRelationsSchema).array(),
}))

export default reviewableSchema;
