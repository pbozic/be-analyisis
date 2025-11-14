// Re-export request schemas from types/users/UserFavoriteDriver.ts
export {
	CreateUserFavoriteDriverSchema,
	UpdateUserFavoriteDriverSchema,
	type CreateUserFavoriteDriverInput,
	type UpdateUserFavoriteDriverInput,
} from '../../../types/users/UserFavoriteDriver.js';

// Note: registerSchemas is in types/users/UserFavoriteDriver.ts
// We'll call it from index.ts
