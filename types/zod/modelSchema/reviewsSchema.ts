import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { reviewableWithRelationsSchema } from './reviewableSchema';
import type { reviewableWithRelations } from './reviewableSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';

/////////////////////////////////////////
// REVIEWS SCHEMA
/////////////////////////////////////////

export const reviewsSchema = z.object({
	review_id: z.string().uuid(),
	reviewable_id: z.string(),
	author_id: z.string(),
	rating: z.number().nullable(),
	comment: z.string().nullable(),
	feedback: JsonValueSchema.nullable(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type reviews = z.infer<typeof reviewsSchema>;

/////////////////////////////////////////
// REVIEWS RELATION SCHEMA
/////////////////////////////////////////

export type reviewsRelations = {
	reviewable: reviewableWithRelations;
	author: usersWithRelations;
};

export type reviewsWithRelations = Omit<z.infer<typeof reviewsSchema>, 'feedback'> & {
	feedback?: JsonValueType | null;
} & reviewsRelations;

export const reviewsWithRelationsSchema: z.ZodType<reviewsWithRelations> = reviewsSchema.merge(
	z.object({
		reviewable: z.lazy(() => reviewableWithRelationsSchema),
		author: z.lazy(() => usersWithRelationsSchema),
	})
);

export default reviewsSchema;
