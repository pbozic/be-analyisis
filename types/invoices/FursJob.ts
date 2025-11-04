import { FURS_JOB_STATUS, FURS_JOB_TYPE } from '@prisma/client';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type FursJob = {
	furs_job_id: string;
	type: FURS_JOB_TYPE;
	status: FURS_JOB_STATUS;
	business_id?: string | null;
	business_premise_id?: string | null;
	invoice_id?: string | null;
	driver_id?: string | null;
	request_url?: string | null;
	message_id: string;
	request_payload?: unknown | null;
	request_token?: string | null;
	response_token?: string | null;
	http_status?: number | null;
	error_code?: string | null;
	error_message?: string | null;
	created_at: Date;
	updated_at: Date;
};
