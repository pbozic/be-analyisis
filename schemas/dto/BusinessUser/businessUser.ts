import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives.js';
import { AddressRefSchema } from '../Address/address.js';
import { UserResponseSchema, AllowanceResponseSchema, UserRefSchema } from '../User/index.js';
import { PaymentMethodSchema } from '../Payments/payment.dto.js';

extendZodWithOpenApi(z);

export const CreateBusinessUserSchema = z.object({
	first_name: z.string().optional(),
	last_name: z.string().optional(),
	email: z.string().email(),
	telephone: z.string().min(5),
	telephone_code: z.string(),
	company_role: z.string().default('ADMIN'),
	date_of_birth: Timestamp.optional(),
});
export type CreateBusinessUser = z.infer<typeof CreateBusinessUserSchema>;

// Extended schema for employee creation with password
export const CreateBusinessUserWithPasswordSchema = CreateBusinessUserSchema.extend({
	password: z.string().min(6, 'Password must be at least 6 characters long'),
});
export type CreateBusinessUserWithPassword = z.infer<typeof CreateBusinessUserWithPasswordSchema>;

// BusinessUser Base Schema - scalars only, no relations
export const BusinessUserBaseSchema = z.object({
	business_users_id: UUID,
	business_id: UUID,
	user_id: UUID,
	company_role: z.string().nullable(),
	online: z.boolean(),
	operating_address_id: UUID.nullable(),
	created_at: Timestamp,
	updated_at: Timestamp,
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

// Lightweight User Ref Schema for nested includes (minimal fields from Prisma select)
export const UserMinimalRefSchema = z.object({
	user_id: UUID,
	email: z.string().nullable(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
});

export type UserMinimalRef = z.infer<typeof UserMinimalRefSchema>;

// Lightweight BusinessUser Schema for includes with limited select fields
// Used when the Prisma include only selects specific business_user fields (e.g., in employeeBase)
export const BusinessUserLightSchema = z.object({
	business_users_id: UUID,
	business_id: UUID,
	user_id: UUID,
	users: UserMinimalRefSchema.optional(),
});

export type BusinessUserLight = z.infer<typeof BusinessUserLightSchema>;

// BusinessUser Detail Schema - for use in other entities (like Employee) with full user details
export const BusinessUserDetailSchema = BusinessUserBaseSchema.extend({
	users: z.lazy(() => UserResponseSchema).optional(),
});

export type BusinessUserDetail = z.infer<typeof BusinessUserDetailSchema>;

// First declare the base response schema
export const BusinessUserResponseSchemaBase = BusinessUserBaseSchema.extend({
	users: z.lazy(() => UserResponseSchema).optional(),
	allowance: z
		.lazy(() => AllowanceResponseSchema)
		.nullable()
		.optional(),
	operating_address: AddressRefSchema.nullable().optional(),
});

// BusinessUser Response Schema - complete with embedded refs
// Used by: getAllBusinessUsers, getBusinessUsersByBusinessId, getAllBusinessUsersForBusinessByCompanyRole
export const BusinessUserResponseSchema = BusinessUserResponseSchemaBase;

export type BusinessUserResponse = z.infer<typeof BusinessUserResponseSchema>;

// BusinessUser Complex Response Schema - for getBusinessUserByUserId with business context
// This is used when returning business_user with full business details and related users
export const BusinessUserWithBusinessResponseSchema = BusinessUserBaseSchema.extend({
	//users: UserResponseSchema.optional(),
	allowance: z
		.lazy(() => AllowanceResponseSchema)
		.nullable()
		.optional(),
	operating_address: AddressRefSchema.nullable().optional(),
	business: z
		.object({
			business_id: UUID,
			name: z.string(),
			email: z.string().email(),
			//business_users: z.array(BusinessUserRefSchema).optional(),
			business_clients: z.array(z.any()).optional(), // TODO: Add proper BusinessClient schema when available
			business_local_locations: z.array(z.any()).optional(), // TODO: Add proper LocalLocation schema when available
			stripe_customer_id: z.string().nullable(),
			payment_methods: PaymentMethodSchema.array().optional(),
		})
		.optional(),
});

export type BusinessUserWithBusinessResponse = z.infer<typeof BusinessUserWithBusinessResponseSchema>;

// BusinessUser List Response Schema for listing endpoints
export const BusinessUserListResponseSchema = z.array(BusinessUserResponseSchema);

export type BusinessUserListResponse = z.infer<typeof BusinessUserListResponseSchema>;

// BusinessUser Creation Response Schema - for createBusinessUser
export const BusinessUserCreationResponseSchema = z.object({
	user: z.lazy(() => UserRefSchema),
	businessUser: BusinessUserResponseSchema,
});

export type BusinessUserCreationResponse = z.infer<typeof BusinessUserCreationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register response schemas
	registry.register('BusinessUser', BusinessUserResponseSchema);
	registry.register('BusinessUserRef', BusinessUserRefSchema);
	registry.register('BusinessUserBase', BusinessUserBaseSchema);
	registry.register('BusinessUserDetail', BusinessUserDetailSchema);
	registry.register('BusinessUserLight', BusinessUserLightSchema);
	registry.register('UserMinimalRef', UserMinimalRefSchema);
	registry.register('BusinessUserWithBusiness', BusinessUserWithBusinessResponseSchema);
	registry.register('BusinessUserList', BusinessUserListResponseSchema);
	registry.register('BusinessUserCreation', BusinessUserCreationResponseSchema);

	// Responses
	registry.register('BusinessUserResponse', BusinessUserResponseSchema);
	registry.register('BusinessUserWithBusinessResponse', BusinessUserWithBusinessResponseSchema);
	registry.register('BusinessUserListResponse', BusinessUserListResponseSchema);
	registry.register('BusinessUserCreationResponse', BusinessUserCreationResponseSchema);
}
