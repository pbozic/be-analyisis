import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type WalletTransferHistory = {
	wallet_transfer_history_id: string;
	order_id: string;
	amount: number;
	created_at: Date;
	updated_at: Date;
	success: boolean;
	delivery_order?: DeliveryOrder | null;
	taxi_order?: TaxiOrder | null;
};
