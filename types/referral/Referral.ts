// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { wallet_funds } from '@prisma/client';

import type { User } from '../users/User.js';

export type Referral = {
	referral_id: string;
	referral_code: string;
	referrer_user_id: string;
	referred_user_id: string;
	conditions_met: boolean;
	reward_claimed: boolean;
	created_at: string;
	updated_at: string;
	referrer: User;
	referred: User;
	credits: wallet_funds[];
};
