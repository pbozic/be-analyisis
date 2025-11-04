import type { Business } from '../business/Business.js';
import type { Reviewable } from '../reviews/Reviewable.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Driver } from '../drivers/Driver.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { BusinessPremise } from '../invoices/BusinessPremise.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type TransportModule = {
	transport_module_id: string;
	business_id: string;
	created_at: Date;
	updated_at: Date;
	business: Business;
	active: boolean;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	taxi_orders: TaxiOrder[];
	delivery_orders: DeliveryOrder[];
	drivers: Driver[];
	vehicles: Vehicle[];
	business_premises: BusinessPremise[];
};
