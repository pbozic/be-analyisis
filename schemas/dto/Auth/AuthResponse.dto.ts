import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Reuse existing DTOs
import { UserResponseSchema } from '../User/user.ts';
import { BusinessResponseSchema } from '../Business/business.ts';
import { BusinessUserWithBusinessResponseSchema } from '../BusinessUser/businessUser.ts';
import { DriverDetailSchema } from '../Driver/index.ts';
import { PaymentMethodSchema } from '../Payments/payment.dto.ts';
import { Timestamp, UUID } from '../../primitives.ts';
import { UserAddressRefSchema } from '../Address/index.ts';
import { ReferralBaseSchema, ReferralDetailSchema } from '../Referral/referral.dto.ts';
import { UserRoleSchema } from '../BusinessUser/BusinessUserRequest.dto.ts';
import { FavoriteBusinessDetailSchema } from '../FavoriteBusinesses/favorite-businesses.dto.ts';
import { FileBaseSchema } from '../Files/index.ts';
import { GroupUserWithChildResponseSchema, GroupUserWithParentResponseSchema } from '../Group/groupUser.ts';

extendZodWithOpenApi(z);

// Common bits
export const AuthTokensSchema = z
	.object({
		access_token: z.string(),
		refresh_token: z.string(),
	})
	.openapi({ title: 'AuthTokens' });
export type AuthTokens = z.infer<typeof AuthTokensSchema>;

// Login / Register / Refresh - flattened onto the user object as returned by controller
export const UserLoginResponseSchema = UserResponseSchema.extend({
	addresses: z.array(UserAddressRefSchema).nullable(),
	driver: DriverDetailSchema.pick({
		driver_id: true,
		online: true,
		on_order: true,
		ride_requirements: true,
		taxi_orders_toggled: true,
		transfer_orders_toggled: true,
		delivery_orders_toggled: true,
		courier_orders_toggled: true,
		transport_module_id: true,
		last_used_vehicle_id: true,
		current_vehicle: true,
		vehicles: true,
	})
		.extend({
			activity_logs: z.array(z.unknown()).nullable(),
		})
		.nullable(),
	child_users: z.array(GroupUserWithChildResponseSchema).nullable(),
	parent_user: GroupUserWithParentResponseSchema.nullable(),
	referrals_made: z.array(ReferralBaseSchema).nullable(),
	referral: ReferralDetailSchema.nullable(),
	user_roles: z.array(
		z.object({
			user_roles_id: UUID,
			role: UserRoleSchema,
			primary: z.boolean(),
		})
	),
	business_users: z.array(BusinessUserWithBusinessResponseSchema.omit({ allowance: true })).nullable(),
	user_favorite_businesses: z.array(FavoriteBusinessDetailSchema).nullable(),
	user_favorite_drivers: z.array(FavoriteBusinessDetailSchema).nullable(),
	profile_picture: FileBaseSchema.nullable().optional(),
});
export type UserLoginResponse = z.infer<typeof UserLoginResponseSchema>;

export const AuthUserResponseSchema = UserLoginResponseSchema.extend({
	access_token: z.string(),
	refresh_token: z.string(),
	payment_methods: z.array(PaymentMethodSchema).default([]).optional(),
	profile_picture: z.string().nullable().optional(),
}).openapi({ title: 'AuthUserResponse' });
export type AuthUserResponse = z.infer<typeof AuthUserResponseSchema>;
export const RefreshUserResponseSchema = UserLoginResponseSchema.extend({
	access_token: z.string(),
	refresh_token: z.string(),
}).openapi({ title: 'RefreshUserResponse' });
export type RefreshUserResponse = z.infer<typeof RefreshUserResponseSchema>;

// Simple message envelope
export const SuccessMessageSchema = z.object({ message: z.string() }).openapi({ title: 'SuccessMessage' });
export type SuccessMessage = z.infer<typeof SuccessMessageSchema>;

// Availability checks
export const EmailAvailabilitySchema = z.object({ emailTaken: z.boolean() }).openapi({ title: 'EmailAvailability' });
export type EmailAvailability = z.infer<typeof EmailAvailabilitySchema>;

export const TelephoneAvailabilitySchema = z
	.object({ telephoneTaken: z.boolean() })
	.openapi({ title: 'TelephoneAvailability' });
export type TelephoneAvailability = z.infer<typeof TelephoneAvailabilitySchema>;

// Municipalities (minimal list item for license-required endpoint)
export const MunicipalitySchema = z
	.object({
		municipalities_id: UUID,
		name: z.string(),
		geojson: z.unknown(),
		requires_license: z.boolean().default(false),
		gis_sifra: z.string().optional(),
		eid_obcina: z.string().optional(),
		feature_id: z.string().optional(),
		created_at: Timestamp,
		updated_at: Timestamp,
		geom_generated: z.unknown().optional(),
	})
	.openapi({ title: 'Municipality' });
export type Municipality = z.infer<typeof MunicipalitySchema>;

// Business registration response
export const RegisterBusinessResponseSchema = SuccessMessageSchema.extend({
	business: BusinessResponseSchema,
}).openapi({ title: 'RegisterBusinessResponse' });
export type RegisterBusinessResponse = z.infer<typeof RegisterBusinessResponseSchema>;

// OpenAPI registration for these schemas
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('AuthTokens', AuthTokensSchema);
	registry.register('AuthUserResponse', AuthUserResponseSchema);
	registry.register('RefreshUserResponse', RefreshUserResponseSchema);
	registry.register('SuccessMessage', SuccessMessageSchema);
	registry.register('EmailAvailability', EmailAvailabilitySchema);
	registry.register('TelephoneAvailability', TelephoneAvailabilitySchema);
	registry.register('Municipality', MunicipalitySchema);
	registry.register('RegisterBusinessResponse', RegisterBusinessResponseSchema);
}
