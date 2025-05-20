import { z } from 'zod';

export const WordsScalarFieldEnumSchema = z.enum([
	'word_id',
	'word',
	'popularity',
	'categories_id',
	'translatable_id',
	'created_at',
	'updated_at',
]);

export default WordsScalarFieldEnumSchema;
