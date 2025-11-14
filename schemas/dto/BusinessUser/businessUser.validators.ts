import z from 'zod';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Email, PhoneNumber } from '../../primitives';

// =======================
// Create Business User - POST /business-users
// =======================
export const CreateBusinessUserSchema = z.object({
	business_id: UUID,
	userData: z.object({
		first_name: z.string().min(1),
		last_name: z.string().min(1),
		email: Email,
		telephone: PhoneNumber,
		date_of_birth: z.string().datetime().optional(),
		user_roles: z
			.array(
				z.object({
					role: z.string(),
					primary: z.boolean(),
				})
			)
			.optional(),
		user_role: z.string().optional(),
		address: z
			.object({
				street: z.string(),
				city: z.string(),
				postal_code: z.string(),
				country: z.string(),
			})
			.optional(),
		operating_address: z
			.object({
				street: z.string(),
				city: z.string(),
				postal_code: z.string(),
				country: z.string(),
			})
			.optional(),
	}),
});
export type CreateBusinessUserInput = z.infer<typeof CreateBusinessUserSchema>;

// =======================
// Update Allowance - PATCH /business-users/allowance
// =======================
export const UpdateAllowanceSchema = z.object({
	business_users_id: UUID,
	wallet: z.number().min(0),
	purchase_order: z.number().min(0),
	type: z.enum(['TAXI', 'TRANSFER', 'DELIVERY', 'ANY']),
});
export type UpdateAllowanceInput = z.infer<typeof UpdateAllowanceSchema>;

// =======================
// Update Company Role - PATCH /business-users/company-role
// =======================
export const UpdateCompanyRoleSchema = z.object({
	company_role: z.string(),
});
export type UpdateCompanyRoleInput = z.infer<typeof UpdateCompanyRoleSchema>;

// =======================
// Update Online Status - PATCH /business-users/online
// =======================
export const UpdateOnlineStatusSchema = z.object({
	business_users_id: UUID,
	online: z.boolean(),
});
export type UpdateOnlineStatusInput = z.infer<typeof UpdateOnlineStatusSchema>;

// =======================
// Invite Business User - POST /business-users/invite
// =======================
export const InviteBusinessUserSchema = z
	.object({
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
	})
	.refine((data) => data.email || data.telephone, {
		message: "At least one of 'email' or 'telephone' must be provided.",
		path: ['email'], // could also use ["telephone"] or leave empty
	});
export type InviteBusinessUserInput = z.infer<typeof InviteBusinessUserSchema>;

// =======================
// Accept Business Invitation - POST /business-users/accept-invitation
// =======================
export const AcceptBusinessInvitationSchema = z.object({
	invitationCode: z.string().min(1),
});
export type AcceptBusinessInvitationInput = z.infer<typeof AcceptBusinessInvitationSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessUser', CreateBusinessUserSchema);
	registry.register('UpdateAllowance', UpdateAllowanceSchema);
	registry.register('UpdateCompanyRole', UpdateCompanyRoleSchema);
	registry.register('UpdateOnlineStatus', UpdateOnlineStatusSchema);
	registry.register('InviteBusinessUser', InviteBusinessUserSchema);
	registry.register('AcceptBusinessInvitation', AcceptBusinessInvitationSchema);
}
