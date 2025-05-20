import { z } from 'zod';

export const ReviewsScalarFieldEnumSchema = z.enum([
	'review_id',
	'reviewable_id',
	'author_id',
	'rating',
	'comment',
	'feedback',
	'created_at',
	'updated_at',
]);

export default ReviewsScalarFieldEnumSchema;
