import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === FavoriteBusinesses DTOs (Response) ===
export {
	BusinessRefSchema,
	FavoriteBusinessBaseSchema,
	FavoriteBusinessDetailSchema,
	toFavoriteBusinessDetail,
	type BusinessRef,
	type FavoriteBusinessBase,
	type FavoriteBusinessDetail,
	registerSchemas as registerFavoriteBusinessSchemas,
} from './favorite-businesses.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerFavoriteBusinessSchemas(registry);
}
