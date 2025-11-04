import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import type { UserFavoriteServiceLink } from './UserFavoriteServiceLink.js';
import { UserFavoriteServiceLinkResponseSchema } from './UserFavoriteServiceLink';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateServiceLinkSchema = z
	.object({
		id: z.string().uuid(),
		name: z.string(),
	})
	.openapi('CreateServiceLink');

export type CreateServiceLinkInput = z.infer<typeof CreateServiceLinkSchema>;

export const UpdateServiceLinkSchema = CreateServiceLinkSchema.partial().openapi('UpdateServiceLink');
export type UpdateServiceLinkInput = z.infer<typeof UpdateServiceLinkSchema>;

export const ServiceLinkResponseSchema = z
	.object({
		id: z.string(),
		name: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		favorited_by: z.array(UserFavoriteServiceLinkResponseSchema),
	})
	.openapi('ServiceLinkResponse');

export type ServiceLinkResponse = z.infer<typeof ServiceLinkResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateServiceLink', CreateServiceLinkSchema);
	registry.register('UpdateServiceLink', UpdateServiceLinkSchema);
	registry.register('ServiceLinkResponse', ServiceLinkResponseSchema);
}

export type ServiceLink = {
	id: string;
	name: string;
	created_at: Date;
	updated_at: Date;
	favorited_by?: UserFavoriteServiceLink[];
};
