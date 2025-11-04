import type { GroupUser } from './GroupUser.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Allowance = {
	allowance_id: string;
	group_user_id?: string | null;
	business_users_id?: string | null;
	amount_taxi_wallet: number;
	amount_transfer_wallet: number;
	amount_delivery_wallet: number;
	amount_any_wallet: number;
	amount_taxi_purchase_order?: number | null;
	amount_transfer_purchase_order?: number | null;
	amount_delivery_purchase_order?: number | null;
	amount_any_purchase_order?: number | null;
	created_at: string;
	updated_at: string;
	user?: GroupUser | null;
	business_user?: BusinessUser | null;
};
