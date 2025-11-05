import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// User Ref (minimal, for embedding)
// =======================
export const UserRefSchema = z
	.object({
		user_id: UUID,
		label: z.string().min(1),
	})
	.openapi('ReferralUserRef');
export type UserRef = z.infer<typeof UserRefSchema>;

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
		label: z.string().min(1),
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
export function toUserRef(user: unknown | null | undefined): UserRef | null {
	if (!user) return null;
	const u = user as { user_id: string; first_name?: string | null; last_name?: string | null };
	const label = [u.first_name, u.last_name].filter(Boolean).join(' ').trim() || u.user_id;
	return UserRefSchema.parse({ user_id: u.user_id, label });
}

export function toReferralRef(referral: unknown): ReferralRef {
	const r = referral as { referral_id: string; referral_code?: string };
	return ReferralRefSchema.parse({ referral_id: r.referral_id, label: r.referral_code || r.referral_id });
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
		referrer: toUserRef(r.referrer),
		referred: toUserRef(r.referred),
	});
}

// =======================
// Registry
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ReferralUserRef', UserRefSchema);
	registry.register('ReferralBase', ReferralBaseSchema);
	registry.register('ReferralRef', ReferralRefSchema);
	registry.register('ReferralDetail', ReferralDetailSchema);
}
