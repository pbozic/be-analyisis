import { ReferralRefSchema, ReferralDetailSchema } from './referral.dto.js';
import type { ReferralRef, ReferralDetail } from './referral.dto.js';
import { BasicUserDataSchema } from '../User/user.js';
import { toUserRef } from '../User/user.mappers.js';
import { UserPrisma } from '../../../prisma/includes/user.js';

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
	referrer?: UserPrisma | null;
	referred?: UserPrisma | null;
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
		referrer: toUserRef(r.referrer as UserPrisma),
		referred: toUserRef(r.referred as UserPrisma),
	});
}
