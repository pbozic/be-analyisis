import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Business } from './Business.js';
import type { BusinessToType } from './BusinessToType.js';
import { BusinessToTypeResponseSchema } from './BusinessToType';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessType = {
	type_id: string;
	type: string;
	created_at: Date;
	updated_at: Date;
	businesses: BusinessToType[];
};

export const CreateBusinessTypeSchema = z
	.object({
		type_id: z.string().uuid(),
		type: z.string(),
	})
	.openapi('CreateBusinessType');

export type CreateBusinessTypeInput = z.infer<typeof CreateBusinessTypeSchema>;

export const UpdateBusinessTypeSchema = CreateBusinessTypeSchema.partial().openapi('UpdateBusinessType');
export type UpdateBusinessTypeInput = z.infer<typeof UpdateBusinessTypeSchema>;

export const BusinessTypeResponseSchema = z
	.object({
		type_id: z.string(),
		type: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		businesses: z.array(BusinessToTypeResponseSchema),
	})
	.openapi('BusinessTypeResponse');

export type BusinessTypeResponse = z.infer<typeof BusinessTypeResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessType', CreateBusinessTypeSchema);
	registry.register('UpdateBusinessType', UpdateBusinessTypeSchema);
	registry.register('BusinessTypeResponse', BusinessTypeResponseSchema);
}
