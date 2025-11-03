// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { CASHBACK_SOURCE, CASHBACK_STATUS, CASHBACK_TYPE, delivery_orders, taxi_orders } from '@prisma/client';

import type { User } from '../users/User.js';

export type Cashback = {
	cashback_id: string;
	user_id: string;
	amount: number;
	type: CASHBACK_TYPE;
	source: CASHBACK_SOURCE;
	status: CASHBACK_STATUS;
	description?: string | null;
	earned_at: string;
	expires_at?: string | null;
	converted_at?: string | null;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	user: User;
	taxi_order?: taxi_orders | null;
	delivery_order?: delivery_orders | null;
};
