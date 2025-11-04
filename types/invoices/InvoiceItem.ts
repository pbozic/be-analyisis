import type { Invoice } from './Invoice.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type InvoiceItem = {
	invoice_item_id: string;
	invoice_id: string;
	description: string;
	qty: number;
	unit?: string | null;
	unit_price: number;
	tax_rate: number;
	line_total: number;
	invoice: Invoice;
	created_at: Date;
};
