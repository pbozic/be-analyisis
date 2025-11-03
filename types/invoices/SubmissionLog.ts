// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { Invoice } from '../invoices/Invoice.js';

export type SubmissionLog = {
	submission_log_id: string;
	invoice_id: string;
	message_id: string;
	sent_at: string;
	http_status?: number | null;
	transport?: string | null;
	tls_version?: string | null;
	mtls_cn?: string | null;
	eor?: string | null;
	error_code?: string | null;
	error_message?: string | null;
	request_payload?: unknown | null;
	response_payload?: unknown | null;
	invoice: Invoice;
	created_at: string;
};
