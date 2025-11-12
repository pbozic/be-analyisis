import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Favorite Drivers Response DTOs
// =======================

// Minimal driver identity for embedding
export const DriverRefSchema = z.object({ driver_id: UUID }).openapi('DriverRef');
export type DriverRef = z.infer<typeof DriverRefSchema>;

export const FavoriteDriverBaseSchema = z
	.object({
		user_favorite_drivers_id: UUID.optional(),
		user_id: UUID,
		driver_id: UUID,
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('FavoriteDriverBase');
export type FavoriteDriverBase = z.infer<typeof FavoriteDriverBaseSchema>;

export const FavoriteDriverDetailSchema = FavoriteDriverBaseSchema.extend({
	driver: DriverRefSchema.optional(),
}).openapi('FavoriteDriverDetail');
export type FavoriteDriverDetail = z.infer<typeof FavoriteDriverDetailSchema>;

// ===============
// Mappers
// ===============
type PrismaFavoriteDriver = {
	user_favorite_drivers_id?: string;
	user_id: string;
	driver_id: string;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	driver?: { driver_id: string } | null;
};

export function toFavoriteDriverDetail(row: unknown): FavoriteDriverDetail {
	const r = row as PrismaFavoriteDriver;
	return FavoriteDriverDetailSchema.parse({
		user_favorite_drivers_id: r.user_favorite_drivers_id,
		user_id: r.user_id,
		driver_id: r.driver_id,
		created_at: r.created_at ? new Date(r.created_at).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : undefined,
		driver: r.driver ? { driver_id: r.driver.driver_id } : undefined,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DriverRef', DriverRefSchema);
	registry.register('FavoriteDriverBase', FavoriteDriverBaseSchema);
	registry.register('FavoriteDriverDetail', FavoriteDriverDetailSchema);
}
