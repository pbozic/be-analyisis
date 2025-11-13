import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import { CreateAddressSchema, UpdateAddressSchema } from '../../../types/addresses/Address.js';

extendZodWithOpenApi(z);

// =======================
// UserAddress Request Schemas
// =======================
// Create Schema - For creating a new user_address
export const CreateUserAddressSchema = z
	.object({
		user_id: UUID,
		address: CreateAddressSchema, // Nested address creation
		details: z.object({}).passthrough().optional(), // JSON field for additional details
		type: z.enum(['HOME', 'WORK', 'OTHER']).default('HOME'),
	})
	.openapi('CreateUserAddress');

export type CreateUserAddress = z.infer<typeof CreateUserAddressSchema>;

// Update Schema - For updating an existing user_address
export const UpdateUserAddressSchema = z
	.object({
		address: UpdateAddressSchema.optional(), // Optional nested address update
		details: z.object({}).passthrough().optional(), // JSON field for additional details
		type: z.enum(['HOME', 'WORK', 'OTHER']).optional(),
	})
	.openapi('UpdateUserAddress');

export type UpdateUserAddress = z.infer<typeof UpdateUserAddressSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserAddress', CreateUserAddressSchema);
	registry.register('UpdateUserAddress', UpdateUserAddressSchema);
}
