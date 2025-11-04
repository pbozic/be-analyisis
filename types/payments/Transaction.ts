import { TRANSACTION_TYPE } from '@prisma/client';

import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Document } from '../documents/Document.js';
import type { WalletFund } from '../wallet/WalletFund.js';
import type { User } from '../users/User.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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
	taxi_order?: TaxiOrder | null;
	delivery_order?: DeliveryOrder | null;
	user: User;
	documents: Document[];
	wallet_funds?: WalletFund | null;
};
