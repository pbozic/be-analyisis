import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Invoice } from './Invoice.js';
import { InvoiceResponseSchema } from './Invoice';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateInvoiceTaxSchema = z
	.object({
		invoice_tax_id: z.string().uuid(),
		invoice_id: z.string().uuid(),
		tax_rate: z.number(),
		taxable_amount: z.number(),
		tax_amount: z.number(),
		other_taxes_amount: z.number().nullable().optional(),
		exempt_taxable_amount: z.number().nullable().optional(),
		reverse_vat_taxable_amount: z.number().nullable().optional(),
		nontaxable_amount: z.number().nullable().optional(),
		special_tax_rules_amount: z.number().nullable().optional(),
	})
	.openapi('CreateInvoiceTax');

export type CreateInvoiceTaxInput = z.infer<typeof CreateInvoiceTaxSchema>;

export const UpdateInvoiceTaxSchema = CreateInvoiceTaxSchema.partial().openapi('UpdateInvoiceTax');
export type UpdateInvoiceTaxInput = z.infer<typeof UpdateInvoiceTaxSchema>;

export const InvoiceTaxResponseSchema = z
	.object({
		invoice_tax_id: z.string(),
		invoice_id: z.string(),
		tax_rate: z.number(),
		taxable_amount: z.number(),
		tax_amount: z.number(),
		other_taxes_amount: z.number().nullable().optional(),
		exempt_taxable_amount: z.number().nullable().optional(),
		reverse_vat_taxable_amount: z.number().nullable().optional(),
		nontaxable_amount: z.number().nullable().optional(),
		special_tax_rules_amount: z.number().nullable().optional(),
		invoice: InvoiceResponseSchema,
		created_at: z.string().datetime(),
	})
	.openapi('InvoiceTaxResponse');

export type InvoiceTaxResponse = z.infer<typeof InvoiceTaxResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateInvoiceTax', CreateInvoiceTaxSchema);
	registry.register('UpdateInvoiceTax', UpdateInvoiceTaxSchema);
	registry.register('InvoiceTaxResponse', InvoiceTaxResponseSchema);
}

export type InvoiceTax = {
	invoice_tax_id: string;
	invoice_id: string;
	tax_rate: number;
	taxable_amount: number;
	tax_amount: number;
	other_taxes_amount?: number | null;
	exempt_taxable_amount?: number | null;
	reverse_vat_taxable_amount?: number | null;
	nontaxable_amount?: number | null;
	special_tax_rules_amount?: number | null;
	invoice?: Invoice;
	created_at: Date;
};
