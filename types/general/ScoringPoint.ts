import { SCORING_POINTS_REASON } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Business } from '../business/Business.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { LateEvent } from './LateEvent.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type ScoringPoint = {
	scoring_points_id: string;
	business_id: string;
	user_id?: string | null;
	delivery_order_id?: string | null;
	taxi_order_id?: string | null;
	points: number;
	isPenalty: boolean;
	reason: SCORING_POINTS_REASON;
	expiration_date?: string | null;
	created_at: string;
	updated_at: string;
	users?: User | null;
	businesses?: Business | null;
	delivery_orders?: DeliveryOrder | null;
	taxi_orders?: TaxiOrder | null;
	late_events: LateEvent[];
};
