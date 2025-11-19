// Re-export request schemas from types/users/UserFavoriteDriver.ts
export {
	CreateUserFavoriteDriverSchema,
	UpdateUserFavoriteDriverSchema,
	type CreateUserFavoriteDriverInput,
	type UpdateUserFavoriteDriverInput,
} from './userFavoriteDriver.dto.ts';

// Note: registerSchemas is in types/users/UserFavoriteDriver.ts
// We'll call it from index.ts
