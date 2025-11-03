// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { SCORING_POINTS_REASON, delivery_orders, late_events, taxi_orders } from '@prisma/client';

import type { User } from '../users/User.js';
import type { Busines } from '../business/Busines.js';

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
	businesses?: Busines | null;
	delivery_orders?: delivery_orders | null;
	taxi_orders?: taxi_orders | null;
	late_events: late_events[];
};
