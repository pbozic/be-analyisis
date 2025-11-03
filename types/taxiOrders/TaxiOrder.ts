// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type {
	ORDER_SUBTYPE,
	ORDER_TYPE,
	TAXI_ORDER_STATUS,
	business_clients,
	driver_history_locations,
	drivers,
	taxi_orders,
	vehicles,
} from '@prisma/client';

import type { User } from '../users/User.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import type { Document } from '../documents/Document.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Transaction } from '../payments/Transaction.js';
import type { Cashback } from '../cashback/Cashback.js';
import type { ScoringPoint } from '../general/ScoringPoint.js';
import type { LateEvent } from '../general/LateEvent.js';
import type { Invoice } from '../invoices/Invoice.js';
import type { Review } from '../reviews/Review.js';
import type { TransportModule } from '../transport/TransportModule.js';

export type TaxiOrder = {
	order_id: string;
	user_id: string;
	business_users_id?: string | null;
	business_clients_id?: string | null;
	driver_id?: string | null;
	vehicle_id?: string | null;
	route: unknown;
	pickup_location: unknown;
	delivery_location?: unknown | null;
	payment?: unknown | null;
	estimates?: unknown | null;
	timeline: unknown;
	preferences?: unknown | null;
	status: TAXI_ORDER_STATUS;
	last_sent_at?: string | null;
	created_at: string;
	updated_at: string;
	driver?: drivers | null;
	vehicle?: vehicles | null;
	customer?: User | null;
	business_users?: BusinessUser | null;
	business_clients?: business_clients | null;
	history: drivers[];
	telephone?: string | null;
	first_name?: string | null;
	last_name?: string | null;
	cancellation_reason?: string | null;
	find_drivers_attempts?: number | null;
	is_scheduled: boolean;
	parent_order_id?: string | null;
	parent_order?: taxi_orders | null;
	grouped_orders: taxi_orders[];
	type: ORDER_TYPE;
	subtype: ORDER_SUBTYPE;
	cargo_documents: Document[];
	cargo_preferences?: unknown | null;
	driver_history_locations: driver_history_locations[];
	wallet_transfer: DeliveryOrder[];
	transactions: Transaction[];
	customer_note?: string | null;
	parent_user_type?: string | null;
	creating_user_id?: string | null;
	cashback: Cashback[];
	allow_credits_usage: boolean;
	order_number: number;
	scoring_points: ScoringPoint[];
	late_events: LateEvent[];
	invoice?: Invoice | null;
	review_id?: string | null;
	review?: Review | null;
	transport_module_id?: string | null;
	transport_module?: TransportModule | null;
};
