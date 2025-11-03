// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { delivery_orders, drivers, food_drinks_module, stores_module, taxi_orders } from '@prisma/client';

import type { ScoringPoint } from '../general/ScoringPoint.js';

export type LateEvent = {
	late_events_id: string;
	stores_id?: string | null;
	food_drinks_id?: string | null;
	driver_id: string;
	user_id: string;
	delivery_order_id?: string | null;
	taxi_order_id?: string | null;
	scoring_points_id?: string | null;
	seconds: number;
	created_at: string;
	updated_at: string;
	stores_module?: stores_module | null;
	food_drinks_module?: food_drinks_module | null;
	driver?: drivers | null;
	delivery_orders?: delivery_orders | null;
	taxi_orders?: taxi_orders | null;
	scoring_points?: ScoringPoint | null;
};
