import { z } from 'zod';
import { wordsWithRelationsSchema } from './wordsSchema';
import type { wordsWithRelations } from './wordsSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';

/////////////////////////////////////////
// WORD BUY SCHEMA
/////////////////////////////////////////

export const word_buySchema = z.object({
	word_buy_id: z.string().uuid(),
	word_id: z.string(),
	stripe_subscription_id: z.string(),
	price: z.number(),
	active_at: z.coerce.date(),
	expires_at: z.coerce.date(),
	business_id: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	deleted_at: z.coerce.date().nullable(),
});

export type word_buy = z.infer<typeof word_buySchema>;

/////////////////////////////////////////
// WORD BUY RELATION SCHEMA
/////////////////////////////////////////

export type word_buyRelations = {
	word: wordsWithRelations;
	business: businessWithRelations;
};

export type word_buyWithRelations = z.infer<typeof word_buySchema> & word_buyRelations;

export const word_buyWithRelationsSchema: z.ZodType<word_buyWithRelations> = word_buySchema.merge(
	z.object({
		word: z.lazy(() => wordsWithRelationsSchema),
		business: z.lazy(() => businessWithRelationsSchema),
	})
);

export default word_buySchema;
