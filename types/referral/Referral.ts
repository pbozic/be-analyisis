import type { User } from '../users/User.js';
import type { WalletFund } from '../wallet/WalletFund.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Referral = {
	referral_id: string;
	referral_code: string;
	referrer_user_id: string;
	referred_user_id: string;
	conditions_met: boolean;
	reward_claimed: boolean;
	created_at: Date;
	updated_at: Date;
	referrer: User;
	referred: User;
	credits: WalletFund[];
};
