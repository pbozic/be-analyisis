import { NUMBERING_STRUCTURE } from '@prisma/client';

import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { ElectronicDevice } from './ElectronicDevice.js';
import type { BusinessPremise } from './BusinessPremise.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { InvoiceItem } from './InvoiceItem.js';
import type { InvoiceTax } from './InvoiceTax.js';
import type { SubmissionLog } from './SubmissionLog.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Invoice = {
	invoice_id: string;
	driver_id: string;
	business_id?: string | null;
	vehicle_id?: string | null;
	tax_number: string;
	taxi_order_id?: string | null;
	delivery_order_id?: string | null;
	taxi_order?: TaxiOrder | null;
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
	vehicle?: Vehicle | null;
	items: InvoiceItem[];
	taxes: InvoiceTax[];
	submissions: SubmissionLog[];
	created_at: string;
	updated_at: string;
};
