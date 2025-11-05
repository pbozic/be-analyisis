import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Email, PhoneNumber } from '../../primitives.js';

extendZodWithOpenApi(z);

// === Invitation ===
export const InvitationSchema = z
	.object({
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
		message: z.string().optional(),
	})
	.refine((data) => data.email || data.telephone, {
		message: 'Either email or telephone must be provided',
		path: ['email'],
	})
	.openapi({
		title: 'Invitation',
		description: 'Invitation via email or telephone',
	});

// === Invitation Acceptance ===
export const InvitationAcceptanceSchema = z
	.object({
		invitationCode: z.string().min(1),
	})
	.openapi({
		title: 'InvitationAcceptance',
		description: 'Accept invitation with code',
	});

// === Invitation with User Data ===
export const InvitationWithUserDataSchema = z
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
		title: 'InvitationWithUserData',
		description: 'Accept invitation with optional user data',
	});

// === Referral Code ===
export const ReferralCodeSchema = z
	.object({
		referral_code: z.string().length(6),
	})
	.openapi({
		title: 'ReferralCode',
		description: 'Referral code redemption',
	});

// === Family Invitation ===
export const FamilyInvitationSchema = z
	.object({
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
	})
	.refine((data) => data.email || data.telephone, {
		message: 'Either email or telephone is required',
	})
	.openapi({
		title: 'FamilyInvitation',
		description: 'Family member invitation via email or telephone',
	});

// === Type exports ===
export type Invitation = z.infer<typeof InvitationSchema>;
export type InvitationAcceptance = z.infer<typeof InvitationAcceptanceSchema>;
export type InvitationWithUserData = z.infer<typeof InvitationWithUserDataSchema>;
export type ReferralCode = z.infer<typeof ReferralCodeSchema>;
export type FamilyInvitation = z.infer<typeof FamilyInvitationSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('Invitation', InvitationSchema);
	registry.register('InvitationAcceptance', InvitationAcceptanceSchema);
	registry.register('InvitationWithUserData', InvitationWithUserDataSchema);
	registry.register('ReferralCode', ReferralCodeSchema);
	registry.register('FamilyInvitation', FamilyInvitationSchema);
}
