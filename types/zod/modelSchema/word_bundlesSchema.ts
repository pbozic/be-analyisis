import { z } from 'zod';
import { wordsWithRelationsSchema } from './wordsSchema'
import type { wordsWithRelations } from './wordsSchema'

/////////////////////////////////////////
// WORD BUNDLES SCHEMA
/////////////////////////////////////////

export const word_bundlesSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  created_at: z.coerce.date(),
})

export type word_bundles = z.infer<typeof word_bundlesSchema>

/////////////////////////////////////////
// WORD BUNDLES RELATION SCHEMA
/////////////////////////////////////////

export type word_bundlesRelations = {
  words: wordsWithRelations[];
};

export type word_bundlesWithRelations = z.infer<typeof word_bundlesSchema> & word_bundlesRelations

export const word_bundlesWithRelationsSchema: z.ZodType<word_bundlesWithRelations> = word_bundlesSchema.merge(z.object({
  words: z.lazy(() => wordsWithRelationsSchema).array(),
}))

export default word_bundlesSchema;
