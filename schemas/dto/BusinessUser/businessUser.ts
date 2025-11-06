import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import { AddressRefSchema } from '../Address/address.js';
import { UserResponseSchema, AllowanceResponseSchema } from '../User/index.js';

extendZodWithOpenApi(z);

// BusinessUser Base Schema - scalars only, no relations
export const BusinessUserBaseSchema = z.object({
	business_users_id: UUID,
	business_id: UUID,
	user_id: UUID,
	company_role: z.string().nullable(),
	online: z.boolean(),
	operating_address_id: UUID.nullable(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});

export type BusinessUserBase = z.infer<typeof BusinessUserBaseSchema>;

// BusinessUser Ref Schema - minimal identity for embedding elsewhere
export const BusinessUserRefSchema = z.object({
	business_users_id: UUID,
	business_id: UUID,
	user_id: UUID,
	company_role: z.string().nullable(),
	online: z.boolean(),
});

export type BusinessUserRef = z.infer<typeof BusinessUserRefSchema>;

// BusinessUser Detail Schema - for use in other entities (like Employee) with full user details
export const BusinessUserDetailSchema = BusinessUserBaseSchema.extend({
	users: UserResponseSchema.optional(),
});

export type BusinessUserDetail = z.infer<typeof BusinessUserDetailSchema>;

// First declare the base response schema
export const BusinessUserResponseSchemaBase = BusinessUserBaseSchema.extend({
	users: UserResponseSchema.optional(),
	allowance: AllowanceResponseSchema.nullable().optional(),
	operating_address: AddressRefSchema.nullable().optional(),
});

// BusinessUser Response Schema - complete with embedded refs
// Used by: getAllBusinessUsers, getBusinessUsersByBusinessId, getAllBusinessUsersForBusinessByCompanyRole
export const BusinessUserResponseSchema = BusinessUserResponseSchemaBase;

export type BusinessUserResponse = z.infer<typeof BusinessUserResponseSchema>;

// BusinessUser Complex Response Schema - for getBusinessUserByUserId with business context
// This is used when returning business_user with full business details and related users
export const BusinessUserWithBusinessResponseSchema = BusinessUserBaseSchema.extend({
	users: UserResponseSchema.optional(),
	allowance: AllowanceResponseSchema.nullable().optional(),
	operating_address: AddressRefSchema.nullable().optional(),
	business: z
		.object({
			business_id: UUID,
			name: z.string(),
			email: z.string().email(),
			business_users: z.array(BusinessUserRefSchema).optional(),
			business_clients: z.array(z.any()).optional(), // TODO: Add proper BusinessClient schema when available
			business_local_locations: z.array(z.any()).optional(), // TODO: Add proper LocalLocation schema when available
		})
		.optional(),
});

export type BusinessUserWithBusinessResponse = z.infer<typeof BusinessUserWithBusinessResponseSchema>;

// BusinessUser List Response Schema for listing endpoints
export const BusinessUserListResponseSchema = z.array(BusinessUserResponseSchema);

export type BusinessUserListResponse = z.infer<typeof BusinessUserListResponseSchema>;

// BusinessUser Creation Response Schema - for createBusinessUser
export const BusinessUserCreationResponseSchema = z.object({
	user: UserResponseSchema,
	businessUser: BusinessUserResponseSchema,
});

export type BusinessUserCreationResponse = z.infer<typeof BusinessUserCreationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register response schemas
	registry.register('BusinessUser', BusinessUserResponseSchema);
	registry.register('BusinessUserRef', BusinessUserRefSchema);
	registry.register('BusinessUserBase', BusinessUserBaseSchema);
	registry.register('BusinessUserDetail', BusinessUserDetailSchema);
	registry.register('BusinessUserWithBusiness', BusinessUserWithBusinessResponseSchema);
	registry.register('BusinessUserList', BusinessUserListResponseSchema);
	registry.register('BusinessUserCreation', BusinessUserCreationResponseSchema);

	// Responses
	registry.register('BusinessUserResponse', BusinessUserResponseSchema);
	registry.register('BusinessUserWithBusinessResponse', BusinessUserWithBusinessResponseSchema);
	registry.register('BusinessUserListResponse', BusinessUserListResponseSchema);
	registry.register('BusinessUserCreationResponse', BusinessUserCreationResponseSchema);
}
