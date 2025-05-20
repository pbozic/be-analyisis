import { z } from 'zod';
import { categoriesWithRelationsSchema } from './categoriesSchema';
import type { categoriesWithRelations } from './categoriesSchema';
import { translatableWithRelationsSchema } from './translatableSchema';
import type { translatableWithRelations } from './translatableSchema';
import { word_buyWithRelationsSchema } from './word_buySchema';
import type { word_buyWithRelations } from './word_buySchema';
import { word_bundlesWithRelationsSchema } from './word_bundlesSchema';
import type { word_bundlesWithRelations } from './word_bundlesSchema';

/////////////////////////////////////////
// WORDS SCHEMA
/////////////////////////////////////////

export const wordsSchema = z.object({
	word_id: z.string().uuid(),
	word: z.string(),
	popularity: z.number().int(),
	categories_id: z.string().nullable(),
	translatable_id: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type words = z.infer<typeof wordsSchema>;

/////////////////////////////////////////
// WORDS RELATION SCHEMA
/////////////////////////////////////////

export type wordsRelations = {
	category?: categoriesWithRelations | null;
	translatable: translatableWithRelations;
	subscriptions: word_buyWithRelations[];
	bundles: word_bundlesWithRelations[];
};

export type wordsWithRelations = z.infer<typeof wordsSchema> & wordsRelations;

export const wordsWithRelationsSchema: z.ZodType<wordsWithRelations> = wordsSchema.merge(
	z.object({
		category: z.lazy(() => categoriesWithRelationsSchema).nullable(),
		translatable: z.lazy(() => translatableWithRelationsSchema),
		subscriptions: z.lazy(() => word_buyWithRelationsSchema).array(),
		bundles: z.lazy(() => word_bundlesWithRelationsSchema).array(),
	})
);

export default wordsSchema;
