import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Invoice } from './Invoice.js';
import { InvoiceResponseSchema } from './Invoice';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateInvoiceItemSchema = z
	.object({
		invoice_item_id: z.string().uuid(),
		invoice_id: z.string().uuid(),
		description: z.string(),
		qty: z.number(),
		unit: z.string().nullable().optional(),
		unit_price: z.number(),
		tax_rate: z.number(),
		line_total: z.number(),
	})
	.openapi('CreateInvoiceItem');

export type CreateInvoiceItemInput = z.infer<typeof CreateInvoiceItemSchema>;

export const UpdateInvoiceItemSchema = CreateInvoiceItemSchema.partial().openapi('UpdateInvoiceItem');
export type UpdateInvoiceItemInput = z.infer<typeof UpdateInvoiceItemSchema>;

export const InvoiceItemResponseSchema = z
	.object({
		invoice_item_id: z.string(),
		invoice_id: z.string(),
		description: z.string(),
		qty: z.number(),
		unit: z.string().nullable().optional(),
		unit_price: z.number(),
		tax_rate: z.number(),
		line_total: z.number(),
		invoice: InvoiceResponseSchema,
		created_at: z.string().datetime(),
	})
	.openapi('InvoiceItemResponse');

export type InvoiceItemResponse = z.infer<typeof InvoiceItemResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateInvoiceItem', CreateInvoiceItemSchema);
	registry.register('UpdateInvoiceItem', UpdateInvoiceItemSchema);
	registry.register('InvoiceItemResponse', InvoiceItemResponseSchema);
}

export type InvoiceItem = {
	invoice_item_id: string;
	invoice_id: string;
	description: string;
	qty: number;
	unit?: string | null;
	unit_price: number;
	tax_rate: number;
	line_total: number;
	invoice?: Invoice;
	created_at: Date;
};
