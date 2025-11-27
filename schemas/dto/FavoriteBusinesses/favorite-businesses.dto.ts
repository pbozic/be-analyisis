import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Favorite Businesses Response DTOs
// =======================

// Minimal business identity for embedding
export const BusinessRefSchema = z.object({ business_id: UUID }).openapi('BusinessRef');
export type BusinessRef = z.infer<typeof BusinessRefSchema>;

export const FavoriteBusinessBaseSchema = z
	.object({
		user_favorite_businesses_id: UUID.optional(),
		user_id: UUID,
		business_id: UUID,
		module: z.nativeEnum(MODULE),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('FavoriteBusinessBase');
export type FavoriteBusinessBase = z.infer<typeof FavoriteBusinessBaseSchema>;

export const FavoriteBusinessDetailSchema = FavoriteBusinessBaseSchema.extend({
	business: BusinessRefSchema.optional(),
}).openapi('FavoriteBusinessDetail');
export type FavoriteBusinessDetail = z.infer<typeof FavoriteBusinessDetailSchema>;

// ===============
// Mappers
// ===============

type PrismaFavoriteBusiness = {
	user_favorite_businesses_id?: string;
	user_id: string;
	business_id: string;
	business_type: string;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	businesses?: { business_id: string } | null;
};

export function toFavoriteBusinessDetail(row: unknown): FavoriteBusinessDetail {
	const r = row as PrismaFavoriteBusiness;
	return FavoriteBusinessDetailSchema.parse({
		user_favorite_businesses_id: r.user_favorite_businesses_id,
		user_id: r.user_id,
		business_id: r.business_id,
		business_type: r.business_type,
		created_at: r.created_at ? new Date(r.created_at).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : undefined,
		business: r.businesses ? { business_id: r.businesses.business_id } : undefined,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BusinessRef', BusinessRefSchema);
	registry.register('FavoriteBusinessBase', FavoriteBusinessBaseSchema);
	registry.register('FavoriteBusinessDetail', FavoriteBusinessDetailSchema);
}
