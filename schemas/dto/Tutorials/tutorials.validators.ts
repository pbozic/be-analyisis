import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { TUTORIAL_STATUS } from '@prisma/client';

extendZodWithOpenApi(z);

// =======================
// Tutorials Request Schemas
// =======================
export const SetTutorialStatusBodySchema = z
	.object({
		status: z.nativeEnum(TUTORIAL_STATUS),
		versionSeen: z.number().int().optional(),
	})
	.openapi('SetTutorialStatusBody');

export type SetTutorialStatusBody = z.infer<typeof SetTutorialStatusBodySchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('SetTutorialStatusBody', SetTutorialStatusBodySchema);
}
