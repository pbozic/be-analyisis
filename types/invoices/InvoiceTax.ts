import type { Invoice } from './Invoice.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type InvoiceTax = {
	invoice_tax_id: string;
	invoice_id: string;
	tax_rate: string;
	taxable_amount: string;
	tax_amount: string;
	other_taxes_amount?: string | null;
	exempt_taxable_amount?: string | null;
	reverse_vat_taxable_amount?: string | null;
	nontaxable_amount?: string | null;
	special_tax_rules_amount?: string | null;
	invoice: Invoice;
	created_at: string;
};
