import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Address DTOs ===
export {
	AddressBaseSchema,
	AddressRefSchema,
	AddressResponseSchema,
	type AddressBase,
	type AddressRef,
	type AddressResponse,
} from './address.js';

// === UserAddress DTOs ===
export {
	UserAddressBaseSchema,
	UserAddressRefSchema,
	UserAddressResponseSchema,
	type UserAddressBase,
	type UserAddressRef,
	type UserAddressResponse,
} from './userAddress.js';

// === Schema Registration ===
import { registerSchemas as registerAddressSchemas } from './address.js';
import { registerSchemas as registerUserAddressSchemas } from './userAddress.js';

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register address schemas
	registerAddressSchemas(registry);

	// Register user address schemas
	registerUserAddressSchemas(registry);
}
