import type { Invoice } from './Invoice.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

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
	invoice: Invoice;
	created_at: Date;
};
