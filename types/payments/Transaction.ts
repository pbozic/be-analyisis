// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { TRANSACTION_TYPE, delivery_orders, taxi_orders, wallet_funds } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Document } from '../documents/Document.js';

export type Transaction = {
	transaction_id: string;
	user_id: string;
	amount: number;
	type: TRANSACTION_TYPE;
	description?: string | null;
	createdAt: string;
	updatedAt: string;
	delivery_order_id?: string | null;
	taxi_order_id?: string | null;
	wallet_fund_id?: string | null;
	taxi_order?: taxi_orders | null;
	delivery_order?: delivery_orders | null;
	user: User;
	documents: Document[];
	wallet_funds?: wallet_funds | null;
};
