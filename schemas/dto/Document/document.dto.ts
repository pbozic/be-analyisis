import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { FileRefSchema } from '../Files/file.dto.js';

extendZodWithOpenApi(z);

// Base: scalars only
export const DocumentBaseSchema = z
	.object({
		document_id: UUID,
		business_id: UUID.nullable().optional(),
		user_id: UUID.nullable().optional(),
		driver_id: UUID.nullable().optional(),
		vehicle_id: UUID.nullable().optional(),
		delivery_driver_id: UUID.nullable().optional(),
		document_type: z.string().optional(),
		additional_info: z.any().nullable().optional(),
		issue_date: Timestamp.nullable().optional(),
		expiration_date: Timestamp.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DocumentBase');

export type DocumentBase = z.infer<typeof DocumentBaseSchema>;

// Ref: minimal identity
export const DocumentRefSchema = z
	.object({
		document_id: UUID,
	})
	.openapi('DocumentRef');

export type DocumentRef = z.infer<typeof DocumentRefSchema>;

// Response: extends base with files relation (FileRef)
export const DocumentResponseSchema = DocumentBaseSchema.extend({
	files: z.array(FileRefSchema).optional(),
}).openapi('DocumentResponse');

export type DocumentResponse = z.infer<typeof DocumentResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DocumentBase', DocumentBaseSchema);
	registry.register('DocumentRef', DocumentRefSchema);
	registry.register('DocumentResponse', DocumentResponseSchema);
}

export default { DocumentBaseSchema, DocumentRefSchema, DocumentResponseSchema };
