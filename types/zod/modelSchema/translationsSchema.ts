import { z } from 'zod';
import { translatableWithRelationsSchema } from './translatableSchema';
import type { translatableWithRelations } from './translatableSchema';

/////////////////////////////////////////
// TRANSLATIONS SCHEMA
/////////////////////////////////////////

export const translationsSchema = z.object({
	translations_id: z.string().uuid(),
	translatable_id: z.string(),
	field: z.string().nullable(),
	language: z.string(),
	translation: z.string(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type translations = z.infer<typeof translationsSchema>;

/////////////////////////////////////////
// TRANSLATIONS RELATION SCHEMA
/////////////////////////////////////////

export type translationsRelations = {
	translatable: translatableWithRelations;
};

export type translationsWithRelations = z.infer<typeof translationsSchema> & translationsRelations;

export const translationsWithRelationsSchema: z.ZodType<translationsWithRelations> = translationsSchema.merge(
	z.object({
		translatable: z.lazy(() => translatableWithRelationsSchema),
	})
);

export default translationsSchema;
