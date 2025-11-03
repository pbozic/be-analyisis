// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type {
	NUMBERING_STRUCTURE,
	invoice_item,
	invoice_tax,
	submission_log,
	taxi_orders,
	vehicles,
} from '@prisma/client';

import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { ElectronicDevice } from '../invoices/ElectronicDevice.js';
import type { BusinessPremise } from '../invoices/BusinessPremise.js';

export type Invoice = {
	invoice_id: string;
	driver_id: string;
	business_id?: string | null;
	vehicle_id?: string | null;
	tax_number: string;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	taxi_order?: taxi_orders | null;
	delivery_order?: DeliveryOrder | null;
	numbering_structure: NUMBERING_STRUCTURE;
	business_premise_id: string;
	electronic_device_id: string;
	invoice_number: string;
	issue_datetime: string;
	issue_datetime_local?: string | null;
	invoice_amount: string;
	returns_amount?: string | null;
	payment_amount: string;
	zoi: string;
	eor?: string | null;
	is_subsequent_submit: boolean;
	operator_tax_number?: string | null;
	foreign_operator?: boolean | null;
	furs_request_json?: unknown | null;
	furs_response_json?: unknown | null;
	device: ElectronicDevice;
	premise: BusinessPremise;
	vehicle?: vehicles | null;
	items: invoice_item[];
	taxes: invoice_tax[];
	submissions: submission_log[];
	created_at: string;
	updated_at: string;
};
