import type { PromoSection } from './PromoSection.js';
import type { Business } from '../business/Business.js';
import type { User } from '../users/User.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoSectionsBuy = {
	promo_sections_buy_id: string;
	promo_sections_id: string;
	promo_section: PromoSection;
	payment_intent_id?: string | null;
	business_id: string;
	business: Business;
	user_id?: string | null;
	bought_by?: User | null;
	paid: boolean;
	active_at?: Date | null;
	expires_at?: Date | null;
	tier: number;
	duration: number;
};
