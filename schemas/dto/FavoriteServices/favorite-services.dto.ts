import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Favorite Services Controller Input Schemas
// =======================

export const UpdateFavoriteServicesBodySchema = z
	.object({ service_ids: z.array(UUID) })
	.openapi('UpdateFavoriteServicesBody');
export type UpdateFavoriteServicesBody = z.infer<typeof UpdateFavoriteServicesBodySchema>;

// =======================
// Favorite Services Response DTOs
// =======================

// Minimal service identity for embedding
export const ServiceRefSchema = z.object({ service_id: UUID }).openapi('ServiceRef');
export type ServiceRef = z.infer<typeof ServiceRefSchema>;

export const FavoriteServiceBaseSchema = z
	.object({
		user_favorite_service_links_id: UUID.optional(),
		user_id: UUID,
		service_id: UUID,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('FavoriteServiceBase');
export type FavoriteServiceBase = z.infer<typeof FavoriteServiceBaseSchema>;

export const FavoriteServiceDetailSchema = FavoriteServiceBaseSchema.extend({
	service: ServiceRefSchema.optional(),
}).openapi('FavoriteServiceDetail');
export type FavoriteServiceDetail = z.infer<typeof FavoriteServiceDetailSchema>;

// ===============
// Mappers
// ===============
type PrismaFavoriteService = {
	user_favorite_service_links_id?: string;
	user_id: string;
	service_id: string;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	services?: { service_id: string } | null;
};

export function toFavoriteServiceDetail(row: unknown): FavoriteServiceDetail {
	const r = row as PrismaFavoriteService;
	return FavoriteServiceDetailSchema.parse({
		user_favorite_service_links_id: r.user_favorite_service_links_id,
		user_id: r.user_id,
		service_id: r.service_id,
		created_at: r.created_at ? new Date(r.created_at).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : undefined,
		service: r.services ? { service_id: r.services.service_id } : undefined,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('UpdateFavoriteServicesBody', UpdateFavoriteServicesBodySchema);

	registry.register('ServiceRef', ServiceRefSchema);
	registry.register('FavoriteServiceBase', FavoriteServiceBaseSchema);
	registry.register('FavoriteServiceDetail', FavoriteServiceDetailSchema);
}
