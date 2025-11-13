import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerUserAddressSchemas } from './userAddress.dto.js';
import { registerSchemas as registerUserAddressValidatorSchemas } from './userAddress.validators.js';

// === UserAddress DTOs (Response) ===
export {
	UserAddressBaseSchema,
	UserAddressRefSchema,
	UserAddressResponseSchema,
	type UserAddressBase,
	type UserAddressRef,
	type UserAddressResponse,
} from './userAddress.dto.js';

// === UserAddress Validators (Request Body, Query, Params) ===
export {
	CreateUserAddressSchema,
	UpdateUserAddressSchema,
	type CreateUserAddress,
	type UpdateUserAddress,
} from './userAddress.validators.js';

// === UserAddress Mappers ===
export * from './userAddress.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerUserAddressSchemas(registry);
	registerUserAddressValidatorSchemas(registry);
}
