// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type {
	DELIVERY_ORDER_STATUS,
	business_local_locations,
	driver_history_locations,
	drivers,
	invoice,
	line_items,
	menu_items,
	order_lobbies,
	taxi_orders,
	transport_module,
	vehicles,
} from '@prisma/client';

import type { User } from '../users/User.js';
import type { Transaction } from '../payments/Transaction.js';
import type { Cashback } from '../cashback/Cashback.js';
import type { ScoringPoint } from '../general/ScoringPoint.js';
import type { LateEvent } from '../general/LateEvent.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import type { Review } from '../reviews/Review.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { File } from '../files/File.js';

export type DeliveryOrder = {
	order_id: string;
	user_id?: string | null;
	route: unknown;
	pickup_location: unknown;
	delivery_location: unknown;
	payment?: unknown | null;
	estimates?: unknown | null;
	items: line_items[];
	details?: unknown | null;
	courier_instructions?: string | null;
	restaurant_message?: string | null;
	rejection_reason?: string | null;
	scheduled_at?: string | null;
	timeline: unknown;
	status: DELIVERY_ORDER_STATUS;
	last_sent_at?: string | null;
	created_at: string;
	updated_at: string;
	customer?: User | null;
	history: drivers[];
	vehicle_id?: string | null;
	vehicle?: vehicles | null;
	driver_id?: string | null;
	driver?: drivers | null;
	transport_module_id?: string | null;
	transport_module?: transport_module | null;
	payment_intent_id?: string | null;
	transactions: Transaction[];
	find_drivers_attempts?: number | null;
	is_daily_meal: boolean;
	wallet_transfer: taxi_orders[];
	driver_history_locations: driver_history_locations[];
	cashback: Cashback[];
	order_lobbies?: order_lobbies | null;
	allow_credits_usage: boolean;
	order_number: number;
	scoring_points: ScoringPoint[];
	late_events: LateEvent[];
	stock_movements: menu_items[];
	business_local_location_id?: string | null;
	business_local_location?: business_local_locations | null;
	promo_analytics: PromoAnalytic[];
	invoice?: invoice | null;
	review_id?: string | null;
	review?: Review | null;
	stores_id?: string | null;
	stores_module?: StoresModule | null;
	food_drinks_id?: string | null;
	food_drinks_module?: FoodDrinksModule | null;
	file_id?: string | null;
	picture_of_delivery?: File | null;
};
