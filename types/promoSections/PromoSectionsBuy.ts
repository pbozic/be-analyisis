// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { PromoSection } from './PromoSection.js';
import type { Busines } from '../business/Busines.js';
import type { User } from '../users/User.js';

export type PromoSectionsBuy = {
	promo_sections_buy_id: string;
	promo_sections_id: string;
	promo_section: PromoSection;
	payment_intent_id?: string | null;
	business_id: string;
	business: Busines;
	user_id?: string | null;
	bought_by?: User | null;
	paid: boolean;
	active_at?: string | null;
	expires_at?: string | null;
	tier: number;
	duration: number;
};
