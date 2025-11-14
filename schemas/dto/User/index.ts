import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerUserSchemas } from './user.js';
import { registerSchemas as registerUserValidatorSchemas } from './user.validators.js';
import { registerSchemas as registerTransactionSchemas } from './transaction.js';
import { registerSchemas as registerAllowanceSchemas } from './allowance.js';

// === User DTOs (Response) ===
export {
	UserBaseSchema,
	UserRefSchema,
	UserResponseSchema,
	UserWithBusinessUsersResponseSchema,
	UserWithAddressesResponseSchema,
	UserDetailResponseSchema,
	UserWithTransactionsResponseSchema,
	UserListResponseSchema,
	type UserBase,
	type UserRef,
	type UserResponse,
	type UserWithBusinessUsersResponse,
	type UserWithAddressesResponse,
	type UserDetailResponse,
	type UserWithTransactionsResponse,
	type UserListResponse,
	type UserWithFavouritesResponse,
} from './user.js';

// === User Validators (Request Body, Query, Params) ===
export * from './user.validators.js';

// === Transaction DTOs ===
export {
	TransactionBaseSchema,
	TransactionRefSchema,
	TransactionResponseSchema,
	TransactionListResponseSchema,
	type TransactionBase,
	type TransactionRef,
	type TransactionResponse,
	type TransactionListResponse,
} from './transaction.js';

// === Allowance DTOs ===
export {
	AllowanceBaseSchema,
	AllowanceRefSchema,
	AllowanceResponseSchema,
	type AllowanceBase,
	type AllowanceRef,
	type AllowanceResponse,
} from './allowance.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerUserSchemas(registry);
	registerUserValidatorSchemas(registry);
	registerTransactionSchemas(registry);
	registerAllowanceSchemas(registry);
}
