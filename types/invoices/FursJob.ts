import { FURS_JOB_STATUS, FURS_JOB_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateFursJobSchema = z
	.object({
		furs_job_id: z.string().uuid(),
		type: z.nativeEnum(FURS_JOB_TYPE),
		status: z.nativeEnum(FURS_JOB_STATUS),
		business_id: z.string().uuid().nullable().optional(),
		business_premise_id: z.string().uuid().nullable().optional(),
		invoice_id: z.string().uuid().nullable().optional(),
		driver_id: z.string().uuid().nullable().optional(),
		request_url: z.string().nullable().optional(),
		message_id: z.string().uuid(),
		request_payload: z.unknown().nullable().optional(),
		request_token: z.string().nullable().optional(),
		response_token: z.string().nullable().optional(),
		http_status: z.number().nullable().optional(),
		error_code: z.string().nullable().optional(),
		error_message: z.string().nullable().optional(),
	})
	.openapi('CreateFursJob');

export type CreateFursJobInput = z.infer<typeof CreateFursJobSchema>;

export const UpdateFursJobSchema = CreateFursJobSchema.partial().openapi('UpdateFursJob');
export type UpdateFursJobInput = z.infer<typeof UpdateFursJobSchema>;

export const FursJobResponseSchema = z
	.object({
		furs_job_id: z.string(),
		type: z.nativeEnum(FURS_JOB_TYPE),
		status: z.nativeEnum(FURS_JOB_STATUS),
		business_id: z.string().nullable().optional(),
		business_premise_id: z.string().nullable().optional(),
		invoice_id: z.string().nullable().optional(),
		driver_id: z.string().nullable().optional(),
		request_url: z.string().nullable().optional(),
		message_id: z.string(),
		request_payload: z.unknown().nullable().optional(),
		request_token: z.string().nullable().optional(),
		response_token: z.string().nullable().optional(),
		http_status: z.number().nullable().optional(),
		error_code: z.string().nullable().optional(),
		error_message: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('FursJobResponse');

export type FursJobResponse = z.infer<typeof FursJobResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateFursJob', CreateFursJobSchema);
	registry.register('UpdateFursJob', UpdateFursJobSchema);
	registry.register('FursJobResponse', FursJobResponseSchema);
}

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
