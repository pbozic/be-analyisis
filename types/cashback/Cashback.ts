import { CASHBACK_SOURCE, CASHBACK_STATUS, CASHBACK_TYPE } from '@prisma/client';

import type { User } from '../users/User.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Cashback = {
	cashback_id: string;
	user_id: string;
	amount: number;
	type: CASHBACK_TYPE;
	source: CASHBACK_SOURCE;
	status: CASHBACK_STATUS;
	description?: string | null;
	earned_at: Date;
	expires_at?: Date | null;
	converted_at?: Date | null;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	user: User;
	taxi_order?: TaxiOrder | null;
	delivery_order?: DeliveryOrder | null;
};
