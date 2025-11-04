import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Invoice } from './Invoice.js';
import { InvoiceResponseSchema } from './Invoice';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type SubmissionLog = {
	submission_log_id: string;
	invoice_id: string;
	message_id: string;
	sent_at: Date;
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
	created_at: Date;
};

export const CreateSubmissionLogSchema = z
	.object({
		submission_log_id: z.string().uuid(),
		invoice_id: z.string().uuid(),
		message_id: z.string().uuid(),
		sent_at: z.unknown(),
		http_status: z.number().nullable().optional(),
		transport: z.string().nullable().optional(),
		tls_version: z.string().nullable().optional(),
		mtls_cn: z.string().nullable().optional(),
		eor: z.string().nullable().optional(),
		error_code: z.string().nullable().optional(),
		error_message: z.string().nullable().optional(),
		request_payload: z.unknown().nullable().optional(),
		response_payload: z.unknown().nullable().optional(),
	})
	.openapi('CreateSubmissionLog');

export type CreateSubmissionLogInput = z.infer<typeof CreateSubmissionLogSchema>;

export const UpdateSubmissionLogSchema = CreateSubmissionLogSchema.partial().openapi('UpdateSubmissionLog');
export type UpdateSubmissionLogInput = z.infer<typeof UpdateSubmissionLogSchema>;

export const SubmissionLogResponseSchema = z
	.object({
		submission_log_id: z.string(),
		invoice_id: z.string(),
		message_id: z.string(),
		sent_at: z.string().datetime(),
		http_status: z.number().nullable().optional(),
		transport: z.string().nullable().optional(),
		tls_version: z.string().nullable().optional(),
		mtls_cn: z.string().nullable().optional(),
		eor: z.string().nullable().optional(),
		error_code: z.string().nullable().optional(),
		error_message: z.string().nullable().optional(),
		request_payload: z.unknown().nullable().optional(),
		response_payload: z.unknown().nullable().optional(),
		invoice: InvoiceResponseSchema,
		created_at: z.string().datetime(),
	})
	.openapi('SubmissionLogResponse');

export type SubmissionLogResponse = z.infer<typeof SubmissionLogResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateSubmissionLog', CreateSubmissionLogSchema);
	registry.register('UpdateSubmissionLog', UpdateSubmissionLogSchema);
	registry.register('SubmissionLogResponse', SubmissionLogResponseSchema);
}
