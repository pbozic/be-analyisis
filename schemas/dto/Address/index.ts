import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerAddressSchemas } from './address.js';
import { registerSchemas as registerUserAddressSchemas } from './userAddress.js';
import { registerSchemas as registerAddressValidatorSchemas } from './address.validators.js';

// === Address DTOs (Response) ===
export {
	AddressBaseSchema,
	AddressRefSchema,
	AddressResponseSchema,
	BusinessAddress,
	type AddressBase,
	type AddressRef,
	type AddressResponse,
} from './address.js';

// === UserAddress DTOs (Response) ===
export {
	UserAddressBaseSchema,
	UserAddressRefSchema,
	UserAddressResponseSchema,
	type UserAddressBase,
	type UserAddressRef,
	type UserAddressResponse,
} from './userAddress.js';

// === Address Validators (DAO Input Schemas) ===
export {
	AddAddressDaoSchema,
	DeleteUserAddressDaoSchema,
	AddUserAddressDaoSchema,
	EditUserAddressDaoSchema,
	SetPrimaryUserAddressDaoSchema,
	UpdateAddressByAddressIdDaoSchema,
	FindAddressDaoSchema,
	type AddAddressDaoInput,
	type DeleteUserAddressDaoInput,
	type AddUserAddressDaoInput,
	type EditUserAddressDaoInput,
	type SetPrimaryUserAddressDaoInput,
	type UpdateAddressByAddressIdDaoInput,
	type FindAddressDaoInput,
} from './address.validators.js';

// === Address Mappers ===
export * from './address.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerAddressSchemas(registry);
	registerUserAddressSchemas(registry);
	registerAddressValidatorSchemas(registry);
}
