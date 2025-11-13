import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { NUMBERING_STRUCTURE } from '@prisma/client';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Request Schemas (used in routes with validate())
// =======================
export const CreateInvoiceSchema = z
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
		issue_datetime: z.unknown(), // Can be Date or string
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
	})
	.openapi('CreateInvoice');

export type CreateInvoiceInput = z.infer<typeof CreateInvoiceSchema>;

export const UpdateInvoiceSchema = CreateInvoiceSchema.partial().openapi('UpdateInvoice');
export type UpdateInvoiceInput = z.infer<typeof UpdateInvoiceSchema>;

// RegisterVehicleInvoicesSchema is in Driver/driver.validators.ts (used by driver routes)

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateInvoice', CreateInvoiceSchema);
	registry.register('UpdateInvoice', UpdateInvoiceSchema);
}
