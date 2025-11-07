import { z } from 'zod';

import { UUID } from '../../primitives.js';
import { AddressRefSchema } from '../Address/address.js'; // Import Address schemas
import { CreateAddressSchema, UpdateAddressSchema } from '../../../types/addresses/Address';

// === Base Schema ===
// Scalars only, no relations
export const UserAddressBaseSchema = z.object({
	user_id: UUID,
	address_id: UUID,
	primary: z.boolean().default(false),
	details: z.object({}).passthrough().optional(), // JSON field
	type: z.enum(['HOME', 'WORK', 'OTHER']).default('HOME'),
});

export type UserAddressBase = z.infer<typeof UserAddressBaseSchema>;

// === Ref Schema ===
// Minimal identity for embedding elsewhere
export const UserAddressRefSchema = z.object({
	user_id: UUID,
	address_id: UUID,
});

export type UserAddressRef = z.infer<typeof UserAddressRefSchema>;

// === Response Schema ===
// Extends Base and embeds AddressRef
export const UserAddressResponseSchema = UserAddressBaseSchema.extend({
	address: AddressRefSchema, // Embed AddressRef for the linked address
});

export type UserAddressResponse = z.infer<typeof UserAddressResponseSchema>;

// === Create Schema ===
// For creating a new user_address
export const CreateUserAddressSchema = z.object({
	user_id: UUID,
	address: CreateAddressSchema, // Nested address creation
	details: z.object({}).passthrough().optional(), // JSON field for additional details
	type: z.enum(['HOME', 'WORK', 'OTHER']).default('HOME'),
});

export type CreateUserAddress = z.infer<typeof CreateUserAddressSchema>;

// === Update Schema ===
// For updating an existing user_address
export const UpdateUserAddressSchema = z.object({
	address: UpdateAddressSchema.optional(), // Optional nested address update
	details: z.object({}).passthrough().optional(), // JSON field for additional details
	type: z.enum(['HOME', 'WORK', 'OTHER']).optional(),
});

export type UpdateUserAddress = z.infer<typeof UpdateUserAddressSchema>;

// === Schema Registration ===
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base, ref, and response schemas
	registry.register('UserAddressBase', UserAddressBaseSchema);
	registry.register('UserAddressRef', UserAddressRefSchema);
	registry.register('UserAddressResponse', UserAddressResponseSchema);

	// Register create and update schemas
	registry.register('CreateUserAddress', CreateUserAddressSchema);
	registry.register('UpdateUserAddress', UpdateUserAddressSchema);
}
