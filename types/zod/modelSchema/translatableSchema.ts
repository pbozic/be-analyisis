import { z } from 'zod';
import { translationsWithRelationsSchema } from './translationsSchema'
import type { translationsWithRelations } from './translationsSchema'
import { wordsWithRelationsSchema } from './wordsSchema'
import type { wordsWithRelations } from './wordsSchema'
import { categoriesWithRelationsSchema } from './categoriesSchema'
import type { categoriesWithRelations } from './categoriesSchema'
import { promo_sectionsWithRelationsSchema } from './promo_sectionsSchema'
import type { promo_sectionsWithRelations } from './promo_sectionsSchema'

/////////////////////////////////////////
// TRANSLATABLE SCHEMA
/////////////////////////////////////////

export const translatableSchema = z.object({
  translatable_id: z.string().uuid(),
})

export type translatable = z.infer<typeof translatableSchema>

/////////////////////////////////////////
// TRANSLATABLE RELATION SCHEMA
/////////////////////////////////////////

export type translatableRelations = {
  translations: translationsWithRelations[];
  words: wordsWithRelations[];
  categories: categoriesWithRelations[];
  promo_sections: promo_sectionsWithRelations[];
};

export type translatableWithRelations = z.infer<typeof translatableSchema> & translatableRelations

export const translatableWithRelationsSchema: z.ZodType<translatableWithRelations> = translatableSchema.merge(z.object({
  translations: z.lazy(() => translationsWithRelationsSchema).array(),
  words: z.lazy(() => wordsWithRelationsSchema).array(),
  categories: z.lazy(() => categoriesWithRelationsSchema).array(),
  promo_sections: z.lazy(() => promo_sectionsWithRelationsSchema).array(),
}))

export default translatableSchema;
