import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { FILE_TYPE } from '@prisma/client';

import { Timestamp, UUID } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// File Base and Ref Schemas
// =======================
export const FileBaseSchema = z
	.object({
		file_id: UUID,
		file_type: z.nativeEnum(FILE_TYPE),
		mime_type: z.string(),
		url: z.string().url().nullable(),
		public: z.boolean(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('FileBase');

export const FileRefSchema = FileBaseSchema.pick({
	file_id: true,
	url: true,
	file_type: true,
	mime_type: true,
}).openapi('FileRef');

export type FileBase = z.infer<typeof FileBaseSchema>;
export type FileRef = z.infer<typeof FileRefSchema>;

// =======================
// File Response Schema
// =======================
export const FileResponseSchema = FileBaseSchema.openapi('FileResponse');

export type FileResponse = z.infer<typeof FileResponseSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('FileBase', FileBaseSchema);
	registry.register('FileRef', FileRefSchema);
	registry.register('FileResponse', FileResponseSchema);
}
