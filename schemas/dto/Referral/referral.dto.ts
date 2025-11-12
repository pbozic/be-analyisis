import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { BasicUserDataSchema } from '../common/User.dto.ts';
import { UserRefSchema } from '../User/index.ts';

extendZodWithOpenApi(z);

// User relation now reuses common BasicUserDataSchema

// =======================
// Referral DTOs
// =======================
export const ReferralBaseSchema = z
	.object({
		referral_id: UUID,
		referral_code: z.string().min(1),
		referrer_user_id: UUID,
		referred_user_id: UUID,
		conditions_met: z.boolean().default(false),
		reward_claimed: z.boolean().default(false),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('ReferralBase');
export type ReferralBase = z.infer<typeof ReferralBaseSchema>;

export const ReferralRefSchema = z
	.object({
		referral_id: UUID,
	})
	.openapi('ReferralRef');
export type ReferralRef = z.infer<typeof ReferralRefSchema>;

export const ReferralDetailSchema = ReferralBaseSchema.extend({
	referrer: UserRefSchema.nullable().optional(),
	referred: UserRefSchema.nullable().optional(),
}).openapi('ReferralDetail');
export type ReferralDetail = z.infer<typeof ReferralDetailSchema>;

// =======================
// Mappers
// =======================
function toBasicUser(user: unknown | null | undefined) {
	if (!user) return null;
	const u = user as {
		first_name?: string | null;
		last_name?: string | null;
		email?: string | null;
		telephone?: string | null;
		telephone_code?: string | null;
		date_of_birth?: string | null;
	};
	return BasicUserDataSchema.parse({
		first_name: u.first_name ?? '',
		last_name: u.last_name ?? '',
		email: u.email ?? undefined,
		telephone: u.telephone ?? undefined,
		telephone_code: u.telephone_code ?? undefined,
		date_of_birth: u.date_of_birth ?? undefined,
	});
}

export function toReferralRef(referral: unknown): ReferralRef {
	const r = referral as { referral_id: string };
	return ReferralRefSchema.parse({ referral_id: r.referral_id });
}

type PrismaReferral = {
	referral_id: string;
	referral_code: string;
	referrer_user_id: string;
	referred_user_id: string;
	conditions_met?: boolean | null;
	reward_claimed?: boolean | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	referrer?: { user_id: string; first_name?: string | null; last_name?: string | null } | null;
	referred?: { user_id: string; first_name?: string | null; last_name?: string | null } | null;
};

export function toReferralDetail(referral: unknown): ReferralDetail {
	const r = referral as PrismaReferral;
	return ReferralDetailSchema.parse({
		referral_id: r.referral_id,
		referral_code: r.referral_code,
		referrer_user_id: r.referrer_user_id,
		referred_user_id: r.referred_user_id,
		conditions_met: !!r.conditions_met,
		reward_claimed: !!r.reward_claimed,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		referrer: toBasicUser(r.referrer),
		referred: toBasicUser(r.referred),
	});
}

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// BasicUserDataSchema is registered in common registry
	registry.register('ReferralBase', ReferralBaseSchema);
	registry.register('ReferralRef', ReferralRefSchema);
	registry.register('ReferralDetail', ReferralDetailSchema);
}
