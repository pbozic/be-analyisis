import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { registerSchemas as registerUserFavoriteDriverTypesSchemas } from '../../../types/users/UserFavoriteDriver.js';

// === UserFavoriteDriver DTOs (Response) ===
export { UserFavoriteDriverResponseSchema, type UserFavoriteDriverResponse } from './userFavoriteDriver.dto.js';

// === UserFavoriteDriver Validators (Request Body, Query, Params) ===
export {
	CreateUserFavoriteDriverSchema,
	UpdateUserFavoriteDriverSchema,
	type CreateUserFavoriteDriverInput,
	type UpdateUserFavoriteDriverInput,
} from './userFavoriteDriver.validators.js';

// === UserFavoriteDriver Mappers ===
export { toUserFavoriteDriverResponse, toUserFavoriteDriversList } from './userFavoriteDriver.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerUserFavoriteDriverTypesSchemas(registry);
}
