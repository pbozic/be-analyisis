import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === FavoriteDrivers DTOs (Response) ===
export {
	DriverRefSchema,
	FavoriteDriverBaseSchema,
	FavoriteDriverDetailSchema,
	toFavoriteDriverDetail,
	type DriverRef,
	type FavoriteDriverBase,
	type FavoriteDriverDetail,
	registerSchemas as registerFavoriteDriverSchemas,
} from './favorite-drivers.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerFavoriteDriverSchemas(registry);
}
