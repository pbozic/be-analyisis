// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type {
	account_actions,
	addresses,
	business,
	business_money_flows,
	business_type,
	business_users,
	crm_module,
	documents,
	food_drinks_module,
	promo_analytics,
	promo_sections_buy,
	scoring_points,
	stores_module,
	transport_module,
	words,
} from '@prisma/client';

import type { User } from '../users/User.js';
import type { Role } from '../userRoles/Role.js';
import type { ReservationModule } from '../reservation/ReservationModule.js';

export type Busines = {
	business_id: string;
	address_id?: string | null;
	is_business_unit: boolean;
	business_group_name?: string | null;
	name: string;
	description?: string | null;
	tax_id: string;
	registration_id: string;
	email: string;
	telephone: string;
	telephone_code: string;
	website_url?: string | null;
	working_hours?: unknown | null;
	popular: boolean;
	new: boolean;
	created_at: string;
	updated_at: string;
	address?: addresses | null;
	documents: documents[];
	parent_business_id?: string | null;
	parent_business?: business | null;
	child_businesses: business[];
	stripe_account_id?: string | null;
	stripe_customer_id?: string | null;
	word_buy_stripe_subscription_id?: string | null;
	word_buys: words[];
	promo_sections: promo_sections_buy[];
	analytics: promo_analytics[];
	first_activated_at?: string | null;
	active: boolean;
	sales_representative_id?: string | null;
	user_favorite_businesses: User[];
	scoring_points: scoring_points[];
	account_actions: account_actions[];
	business_money_flows: business_money_flows[];
	roles: Role[];
	business_users: business_users[];
	types: business_type[];
	reservation_module?: ReservationModule | null;
	transport_module?: transport_module | null;
	stores_module?: stores_module | null;
	food_drinks_module?: food_drinks_module | null;
	crm_module?: crm_module | null;
};
