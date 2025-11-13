import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { NUMBERING_STRUCTURE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';
import { TaxiOrderRefSchema } from '../TaxiOrders/index.js';
import { DeliveryOrderRefSchema } from '../DeliveryOrders/index.js';
import { ElectronicDeviceRefSchema } from '../ElectronicDevice/index.js';
import { BusinessPremiseRefSchema } from '../BusinessPremise/index.js';
import { VehicleRefSchema } from '../Vehicles/index.js';

extendZodWithOpenApi(z);

// =======================
// Base Schema - scalars only, no relations
// =======================
export const InvoiceBaseSchema = z
	.object({
		invoice_id: UUID,
		driver_id: UUID,
		business_id: UUID.nullable().optional(),
		vehicle_id: UUID.nullable().optional(),
		tax_number: z.string(),
		taxi_order_id: UUID.nullable().optional(),
		delivery_order_id: UUID.nullable().optional(),
		numbering_structure: z.nativeEnum(NUMBERING_STRUCTURE),
		business_premise_id: UUID,
		electronic_device_id: UUID,
		invoice_number: z.string(),
		issue_datetime: Timestamp,
		issue_datetime_local: z.string().nullable().optional(),
		invoice_amount: z.number(),
		returns_amount: z.number().nullable().optional(),
		payment_amount: z.number(),
		zoi: z.string(),
		eor: z.string().nullable().optional(),
		is_subsequent_submit: z.boolean(),
		operator_tax_number: z.string().nullable().optional(),
		foreign_operator: z.boolean().nullable().optional(),
		furs_request_json: z.record(z.any()).nullable().optional(),
		furs_response_json: z.record(z.any()).nullable().optional(),
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi('InvoiceBase');

export type InvoiceBase = z.infer<typeof InvoiceBaseSchema>;

// =======================
// Ref Schema - minimal identity for embedding elsewhere
// =======================
export const InvoiceRefSchema = z
	.object({
		invoice_id: UUID,
		invoice_number: z.string(),
		invoice_amount: z.number(),
		issue_datetime: Timestamp,
	})
	.openapi('InvoiceRef');

export type InvoiceRef = z.infer<typeof InvoiceRefSchema>;

// =======================
// Response Schema with Relations
// =======================
export const InvoiceResponseSchema = InvoiceBaseSchema.extend({
	taxi_order: TaxiOrderRefSchema.nullable().optional(),
	delivery_order: DeliveryOrderRefSchema.nullable().optional(),
	device: ElectronicDeviceRefSchema,
	premise: BusinessPremiseRefSchema,
	vehicle: VehicleRefSchema.nullable().optional(),
	// Note: items, taxes, submissions would be added here if InvoiceItem, InvoiceTax, SubmissionLog DTOs exist
	items: z.array(z.record(z.any())).optional(),
	taxes: z.array(z.record(z.any())).optional(),
	submissions: z.array(z.record(z.any())).optional(),
}).openapi('InvoiceResponse');

export type InvoiceResponse = z.infer<typeof InvoiceResponseSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('InvoiceBase', InvoiceBaseSchema);
	registry.register('InvoiceRef', InvoiceRefSchema);
	registry.register('InvoiceResponse', InvoiceResponseSchema);
}
