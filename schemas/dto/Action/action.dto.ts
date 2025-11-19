import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE_TYPE } from '@prisma/client';

import { UUID } from '../../primitives.ts';

extendZodWithOpenApi(z);

// Base Schema - scalar fields only
export const ActionBaseSchema = z
	.object({
		action_id: UUID,
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
	})
	.openapi('ActionBase');

export type ActionBase = z.infer<typeof ActionBaseSchema>;

// Ref Schema - minimal identity for embedding elsewhere
export const ActionRefSchema = z
	.object({
		action_id: UUID,
		name: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
	})
	.openapi('ActionRef');

export type ActionRef = z.infer<typeof ActionRefSchema>;

// Response Schema - extends Base, relations would be added here if needed
export const ActionResponseSchema = ActionBaseSchema.extend({
	// Relations would be embedded here as Ref variants if needed
}).openapi('ActionResponse');

export type ActionResponse = z.infer<typeof ActionResponseSchema>;

// Response schemas for collections
export const ActionsListResponseSchema = z.array(ActionResponseSchema).openapi('ActionsListResponse');

export type ActionsListResponse = z.infer<typeof ActionsListResponseSchema>;

// Count response schema
export const ActionCountResponseSchema = z
	.object({
		count: z.number().int().min(0),
	})
	.openapi('ActionCountResponse');

export type ActionCountResponse = z.infer<typeof ActionCountResponseSchema>;

// Registry function to register all schemas
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('ActionBase', ActionBaseSchema);
	registry.register('ActionRef', ActionRefSchema);
	registry.register('ActionResponse', ActionResponseSchema);

	// Register response schemas
	registry.register('ActionsListResponse', ActionsListResponseSchema);
	registry.register('ActionCountResponse', ActionCountResponseSchema);
}
