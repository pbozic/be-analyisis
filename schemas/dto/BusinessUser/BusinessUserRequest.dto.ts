import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { COMPANY_ROLE, USER_ROLES } from '@prisma/client';

import { UUID, Email, PhoneNumber, Address } from '../../primitives.js';
import { FullAddressSchema } from '../Address/address.js';
import { WalletUpdateSchema } from '../Payments/payment.dto.js';
import { OnlineStatusUpdateSchema } from '../Driver/driver.validators.js';

extendZodWithOpenApi(z);

// === Company Role Enum ===
export const CompanyRoleSchema = z.nativeEnum(COMPANY_ROLE).openapi({
	title: 'CompanyRole',
	description: 'Role of a business user within the company',
	example: 'DIRECTOR',
});

// === User Role Enum ===
export const UserRoleSchema = z.nativeEnum(USER_ROLES).openapi({
	title: 'UserRole',
	description: 'General role of a user in the system',
	example: 'PERSONAL',
});

// === Business User Management ===

// Used by: createBusinessUser (POST /business-users)
export const CreateBusinessUserSchema = z
	.object({
		business_id: UUID,
		userData: z.object({
			first_name: z.string().min(1),
			last_name: z.string().min(1),
			email: Email,
			telephone: PhoneNumber.optional(),
			telephone_code: z.string().optional(),
			date_of_birth: z.string().date().optional(),
			user_role: UserRoleSchema.optional(),
			user_roles: z
				.array(
					z.object({
						role: UserRoleSchema,
						primary: z.boolean(),
					})
				)
				.optional(),
			company_role: CompanyRoleSchema.optional(),
			address: Address.optional(),
			operating_address: Address.optional(),
		}),
	})
	.openapi({
		title: 'CreateBusinessUserRequest',
		description: 'Schema for creating a new business user with comprehensive user data',
	});

// Used by: addOperatingAddress (POST /business-users/{business_users_id}/address/operating)
export const AddOperatingAddressSchema = z
	.lazy(() => FullAddressSchema)
	.openapi({
		title: 'AddOperatingAddressRequest',
		description: 'Schema for adding an operating address to a business user',
	});

// Used by: updateCompanyRole (PATCH /business-users/company-role)
export const UpdateCompanyRoleSchema = z
	.object({
		company_role: CompanyRoleSchema,
	})
	.openapi({
		title: 'UpdateCompanyRoleRequest',
		description: 'Schema for updating business user company role',
	});

// Used by: updateBusinessUserOnlineStatus (PATCH /business-users/online)
export const UpdateBusinessUserOnlineStatusSchema = OnlineStatusUpdateSchema.extend({
	business_users_id: UUID,
}).openapi({
	title: 'UpdateBusinessUserOnlineStatusRequest',
	description: 'Schema for updating business user online status',
});

// Used by: setAllowance (PATCH /business_users/allowance)
export const SetAllowanceSchema = z
	.object({
		business_users_id: UUID,
		wallet: z.lazy(() => WalletUpdateSchema).optional(),
		purchase_order: z
			.object({
				amount_taxi_purchase_order: z.number().min(0).optional(),
				amount_transfer_purchase_order: z.number().min(0).optional(),
				amount_delivery_purchase_order: z.number().min(0).optional(),
				amount_any_purchase_order: z.number().min(0).optional(),
			})
			.optional(),
		type: z.enum(['WALLET', 'PURCHASE_ORDER', 'BOTH']).optional(),
	})
	.openapi({
		title: 'SetAllowanceRequest',
		description: 'Schema for setting business user allowances for various services',
	});

// === Invitation Management ===

// Used by: inviteBusinessUser (POST /business_users/invite)
export const InviteBusinessUserSchema = z
	.object({
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
		business_id: UUID.optional(),
		company_role: CompanyRoleSchema.optional(),
		message: z.string().optional(),
	})
	.refine((data) => data.email || data.telephone, {
		message: 'Either email or telephone must be provided',
		path: ['email'],
	})
	.openapi({
		title: 'InviteBusinessUserRequest',
		description: 'Schema for inviting a business user via email or telephone',
	});

// Used by: acceptBusinessInvitation (POST /business_users/accept-invitation)
export const AcceptBusinessInvitationSchema = z
	.object({
		invitationCode: z.string().min(1),
		user_data: z
			.object({
				first_name: z.string().min(1).optional(),
				last_name: z.string().min(1).optional(),
				email: Email.optional(),
				telephone: PhoneNumber.optional(),
			})
			.optional(),
	})
	.openapi({
		title: 'AcceptBusinessInvitationRequest',
		description: 'Schema for accepting a business invitation using invitation code',
	});

// === Type exports ===
export type CompanyRole = z.infer<typeof CompanyRoleSchema>;
export type UserRole = z.infer<typeof UserRoleSchema>;
export type CreateBusinessUserRequest = z.infer<typeof CreateBusinessUserSchema>;
export type AddOperatingAddressRequest = z.infer<typeof AddOperatingAddressSchema>;
export type UpdateCompanyRoleRequest = z.infer<typeof UpdateCompanyRoleSchema>;
export type UpdateBusinessUserOnlineStatusRequest = z.infer<typeof UpdateBusinessUserOnlineStatusSchema>;
export type SetAllowanceRequest = z.infer<typeof SetAllowanceSchema>;
export type InviteBusinessUserRequest = z.infer<typeof InviteBusinessUserSchema>;
export type AcceptBusinessInvitationRequest = z.infer<typeof AcceptBusinessInvitationSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register enum schemas
	registry.register('CompanyRole', CompanyRoleSchema);
	registry.register('UserRole', UserRoleSchema);

	// Register request schemas
	registry.register('CreateBusinessUser', CreateBusinessUserSchema);
	registry.register('AddOperatingAddress', AddOperatingAddressSchema);
	registry.register('UpdateCompanyRole', UpdateCompanyRoleSchema);
	registry.register('UpdateBusinessUserOnlineStatus', UpdateBusinessUserOnlineStatusSchema);
	registry.register('SetAllowance', SetAllowanceSchema);
	registry.register('InviteBusinessUser', InviteBusinessUserSchema);
	registry.register('AcceptBusinessInvitation', AcceptBusinessInvitationSchema);
}
