import type { Word } from './Word.js';
import type { Business } from '../business/Business.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type WordBuy = {
	word_buy_id: string;
	word_id: string;
	word: Word;
	stripe_subscription_id?: string | null;
	stripe_price_id?: string | null;
	pending_stripe_price_id?: string | null;
	price: number;
	pending_price?: number | null;
	active_at?: string | null;
	expires_at?: string | null;
	paid: boolean;
	business_id: string;
	business: Business;
	created_at: string;
	updated_at: string;
	deleted_at?: string | null;
};
