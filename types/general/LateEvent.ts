import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { Driver } from '../drivers/Driver.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { ScoringPoint } from './ScoringPoint.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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
	stores_module?: StoresModule | null;
	food_drinks_module?: FoodDrinksModule | null;
	driver?: Driver | null;
	delivery_orders?: DeliveryOrder | null;
	taxi_orders?: TaxiOrder | null;
	scoring_points?: ScoringPoint | null;
};
