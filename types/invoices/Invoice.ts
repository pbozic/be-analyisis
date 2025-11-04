import { NUMBERING_STRUCTURE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { ElectronicDevice } from './ElectronicDevice.js';
import type { BusinessPremise } from './BusinessPremise.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { InvoiceItem } from './InvoiceItem.js';
import type { InvoiceTax } from './InvoiceTax.js';
import type { SubmissionLog } from './SubmissionLog.js';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { ElectronicDeviceResponseSchema } from './ElectronicDevice';
import { BusinessPremiseResponseSchema } from './BusinessPremise';
import { VehicleResponseSchema } from '../vehicles/Vehicle';
import { InvoiceItemResponseSchema } from './InvoiceItem';
import { InvoiceTaxResponseSchema } from './InvoiceTax';
import { SubmissionLogResponseSchema } from './SubmissionLog';

extendZodWithOpenApi(z);

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
	issue_datetime: Date;
	issue_datetime_local?: string | null;
	invoice_amount: number;
	returns_amount?: number | null;
	payment_amount: number;
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
	created_at: Date;
	updated_at: Date;
};

export const CreateInvoiceSchema = z
	.object({
		invoice_id: z.string().uuid(),
		driver_id: z.string().uuid(),
		business_id: z.string().uuid().nullable().optional(),
		vehicle_id: z.string().uuid().nullable().optional(),
		tax_number: z.string(),
		taxi_order_id: z.string().uuid().nullable().optional(),
		delivery_order_id: z.string().uuid().nullable().optional(),
		numbering_structure: z.nativeEnum(NUMBERING_STRUCTURE),
		business_premise_id: z.string().uuid(),
		electronic_device_id: z.string().uuid(),
		invoice_number: z.string(),
		issue_datetime: z.unknown(),
		issue_datetime_local: z.string().nullable().optional(),
		invoice_amount: z.number(),
		returns_amount: z.number().nullable().optional(),
		payment_amount: z.number(),
		zoi: z.string(),
		eor: z.string().nullable().optional(),
		is_subsequent_submit: z.boolean(),
		operator_tax_number: z.string().nullable().optional(),
		foreign_operator: z.boolean().nullable().optional(),
		furs_request_json: z.unknown().nullable().optional(),
		furs_response_json: z.unknown().nullable().optional(),
	})
	.openapi('CreateInvoice');

export type CreateInvoiceInput = z.infer<typeof CreateInvoiceSchema>;

export const UpdateInvoiceSchema = CreateInvoiceSchema.partial().openapi('UpdateInvoice');
export type UpdateInvoiceInput = z.infer<typeof UpdateInvoiceSchema>;

export const InvoiceResponseSchema = z
	.object({
		invoice_id: z.string(),
		driver_id: z.string(),
		business_id: z.string().nullable().optional(),
		vehicle_id: z.string().nullable().optional(),
		tax_number: z.string(),
		taxi_order_id: z.string().nullable().optional(),
		delivery_order_id: z.string().nullable().optional(),
		taxi_order: TaxiOrderResponseSchema.nullable().optional(),
		delivery_order: DeliveryOrderResponseSchema.nullable().optional(),
		numbering_structure: z.nativeEnum(NUMBERING_STRUCTURE),
		business_premise_id: z.string(),
		electronic_device_id: z.string(),
		invoice_number: z.string(),
		issue_datetime: z.string().datetime(),
		issue_datetime_local: z.string().nullable().optional(),
		invoice_amount: z.number(),
		returns_amount: z.number().nullable().optional(),
		payment_amount: z.number(),
		zoi: z.string(),
		eor: z.string().nullable().optional(),
		is_subsequent_submit: z.boolean(),
		operator_tax_number: z.string().nullable().optional(),
		foreign_operator: z.boolean().nullable().optional(),
		furs_request_json: z.unknown().nullable().optional(),
		furs_response_json: z.unknown().nullable().optional(),
		device: ElectronicDeviceResponseSchema,
		premise: BusinessPremiseResponseSchema,
		vehicle: VehicleResponseSchema.nullable().optional(),
		items: z.array(InvoiceItemResponseSchema),
		taxes: z.array(InvoiceTaxResponseSchema),
		submissions: z.array(SubmissionLogResponseSchema),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('InvoiceResponse');

export type InvoiceResponse = z.infer<typeof InvoiceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateInvoice', CreateInvoiceSchema);
	registry.register('UpdateInvoice', UpdateInvoiceSchema);
	registry.register('InvoiceResponse', InvoiceResponseSchema);
}
