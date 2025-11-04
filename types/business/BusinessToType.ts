// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Business } from './Business.js';
import type { BusinessType } from './BusinessType.js';
import { BusinessResponseSchema } from './Business';
import { BusinessTypeResponseSchema } from './BusinessType';

extendZodWithOpenApi(z);

export const CreateBusinessToTypeSchema = z
	.object({
		business_id: z.string().uuid(),
		type_id: z.string().uuid(),
	})
	.openapi('CreateBusinessToType');

export type CreateBusinessToTypeInput = z.infer<typeof CreateBusinessToTypeSchema>;

export const UpdateBusinessToTypeSchema = CreateBusinessToTypeSchema.partial().openapi('UpdateBusinessToType');
export type UpdateBusinessToTypeInput = z.infer<typeof UpdateBusinessToTypeSchema>;

export const BusinessToTypeResponseSchema = z
	.object({
		business_id: z.string(),
		type_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		business: BusinessResponseSchema,
		business_type: BusinessTypeResponseSchema,
	})
	.openapi('BusinessToTypeResponse');

export type BusinessToTypeResponse = z.infer<typeof BusinessToTypeResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessToType', CreateBusinessToTypeSchema);
	registry.register('UpdateBusinessToType', UpdateBusinessToTypeSchema);
	registry.register('BusinessToTypeResponse', BusinessToTypeResponseSchema);
}

export type BusinessToType = {
	business_id: string;
	type_id: string;
	created_at: Date;
	updated_at: Date;
	business?: Business;
	business_type?: BusinessType;
};
