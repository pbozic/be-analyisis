// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { Invoice } from '../invoices/Invoice.js';

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
