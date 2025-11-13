import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import { UserAddressRefSchema } from '../Address/index.js';
import { BusinessUserRefSchema } from '../BusinessUser/index.js';
import { TransactionRefSchema } from './transaction.js';

extendZodWithOpenApi(z);

// User Base Schema - scalars only, no relations
export const UserBaseSchema = z.object({
	user_id: UUID,
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	password: z.string(),
	email: z.string().nullable(),
	telephone: z.string(),
	telephone_code: z.string(),
	date_of_birth: z.string().datetime().nullable(),
	user_role: z.string(), // USER_ROLES enum as string
	phone_verified: z.boolean(),
	notification_preferences: z.record(z.any()).nullable(),
	taxi_preferences: z.record(z.any()).nullable(),
	spicy_preferences: z.record(z.any()).nullable(),
	transfer_preferences: z.record(z.any()).nullable(),
	radio_preferences: z.record(z.any()).nullable(),
	allergies_preferences: z.record(z.any()).nullable(),
	delivery_push_notifications: z.record(z.any()).nullable(),
	transfer_push_notifications: z.record(z.any()).nullable(),
	taxi_push_notifications: z.record(z.any()).nullable(),
	profile_picture_id: UUID.nullable(),
	reviewable_id: UUID.nullable(),
	review_complete: z.boolean(),
	one_signal_id: UUID.nullable(),
	stripe_customer_id: UUID.nullable(),
	wallet_balance: z.number(),
	subscribed_to_daily_meals: z.boolean(),
	language: z.string().nullable(),
	details: z.record(z.any()).nullable(),
	referral_code: z.string().nullable(),
	allow_marketing_push_notifications: z.boolean().nullable(),
	allow_ads_personalization: z.boolean().nullable(),
	allow_newsletter: z.boolean().nullable(),
	active: z.boolean(),
	disabled: z.boolean(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});

export type UserBase = z.infer<typeof UserBaseSchema>;

// User Ref Schema - minimal identity for embedding elsewhere
export const UserRefSchema = z.object({
	user_id: UUID,
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	email: z.string().nullable(),
	telephone: z.string(),
	user_role: z.string(),
});

export type UserRef = z.infer<typeof UserRefSchema>;

// User Response Schema - Base with embedded refs (no password)
export const UserResponseSchema = UserBaseSchema.omit({ password: true });
export const UserPasswordSchema = UserBaseSchema.pick({ password: true, user_id: true });

// User with Business Users - for getUserById with business_users include
export const UserWithBusinessUsersResponseSchema = UserResponseSchema.extend({
	business_users: z.array(BusinessUserRefSchema).nullable(),
});

// User with Addresses - for functions that include addresses
export const UserWithAddressesResponseSchema = UserResponseSchema.extend({
	addresses: z.array(UserAddressRefSchema).nullable(),
});

// User with both Business Users and Addresses - for complex includes
export const UserDetailResponseSchema = UserResponseSchema.extend({
	business_users: z.array(BusinessUserRefSchema).nullable(),
	addresses: z.array(UserAddressRefSchema).nullable(),
});

// User with Transactions - for getTransactions function
export const UserWithTransactionsResponseSchema = UserResponseSchema.extend({
	transactions: z.array(TransactionRefSchema).nullable(),
});

export const UserWithFavouritesResponseSchema = UserResponseSchema.extend({
	user_favorite_businesses: z
		.array(
			z.object({
				business_id: UUID,
				name: z.string(),
				logo_url: z.string().nullable(),
			})
		)
		.nullable(),
});
export type UserWithFavouritesResponse = z.infer<typeof UserWithFavouritesResponseSchema>;
// User List Response - for paginated/bulk endpoints
export const UserListResponseSchema = z.object({
	data: z.array(UserResponseSchema),
	total: z.number().optional(),
	page: z.number().optional(),
	limit: z.number().optional(),
});

export type UserResponse = z.infer<typeof UserResponseSchema>;
export type UserPassword = z.infer<typeof UserPasswordSchema>;
export type UserWithBusinessUsersResponse = z.infer<typeof UserWithBusinessUsersResponseSchema>;
export type UserWithAddressesResponse = z.infer<typeof UserWithAddressesResponseSchema>;
export type UserDetailResponse = z.infer<typeof UserDetailResponseSchema>;
export type UserWithTransactionsResponse = z.infer<typeof UserWithTransactionsResponseSchema>;
export type UserListResponse = z.infer<typeof UserListResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('UserBase', UserBaseSchema);
	registry.register('UserRef', UserRefSchema);

	// Register response schemas
	registry.register('User', UserResponseSchema);
	registry.register('UserWithBusinessUsers', UserWithBusinessUsersResponseSchema);
	registry.register('UserWithAddresses', UserWithAddressesResponseSchema);
	registry.register('UserDetail', UserDetailResponseSchema);
	registry.register('UserWithTransactions', UserWithTransactionsResponseSchema);
	registry.register('UserList', UserListResponseSchema);

	// Responses
	registry.register('UserResponse', UserResponseSchema);
	registry.register('UserPassword', UserPasswordSchema);
}
