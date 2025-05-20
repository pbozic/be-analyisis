import { z } from 'zod';

export const FilesScalarFieldEnumSchema = z.enum([
	'file_id',
	'url',
	'file_type',
	'public',
	'mime_type',
	'created_at',
	'updated_at',
	'document_id',
]);

export default FilesScalarFieldEnumSchema;
