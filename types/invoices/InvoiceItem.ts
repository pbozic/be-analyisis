import type { Invoice } from './Invoice.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type InvoiceItem = {
	invoice_item_id: string;
	invoice_id: string;
	description: string;
	qty: string;
	unit?: string | null;
	unit_price: string;
	tax_rate: string;
	line_total: string;
	invoice: Invoice;
	created_at: string;
};
