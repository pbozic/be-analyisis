// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { VEHICLE_CATEGORY, VEHICLE_CLASS, vehicle_specifications } from '@prisma/client';

import type { Document } from '../documents/Document.js';
import type { Driver } from '../drivers/Driver.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { BusinessPremise } from '../invoices/BusinessPremise.js';
import type { Invoice } from '../invoices/Invoice.js';
import type { TransportModule } from '../transport/TransportModule.js';

export type Vehicle = {
	vehicle_id: string;
	transport_module_id?: string | null;
	active?: boolean | null;
	class?: VEHICLE_CLASS | null;
	category?: VEHICLE_CATEGORY | null;
	make?: string | null;
	model?: string | null;
	color?: string | null;
	license_plate?: string | null;
	created_at: string;
	updated_at: string;
	documents: Document[];
	drivers: Driver[];
	vehicle_specification_id?: string | null;
	vehicle_specification?: vehicle_specifications | null;
	taxi_orders: TaxiOrder[];
	delivery_orders: DeliveryOrder[];
	current_driver?: Driver | null;
	business_premise_id?: string | null;
	business_premise?: BusinessPremise | null;
	invoices: Invoice[];
	transport_module?: TransportModule | null;
};
