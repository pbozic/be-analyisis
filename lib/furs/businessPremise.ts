import type { PrismaClient } from '@prisma/client';

import { buildCompactJws, JwsHeader, Rs256SignFn } from './jws';
import { getFursUrl, FursEnv } from './urls';
import { postJson } from './http';
import type { BusinessPremiseRequest, FursTokenEnvelope } from '../../types/fiscal';

export const buildBusinessPremisePayload = (p: {
	messageId: string; // GUID
	nowIso: string; // new Date().toISOString()
	taxNumber: number; // 8 digits
	businessPremiseId: string; // <=20
	premiseType: 'A' | 'B' | 'C'; // taxis: "A"
	validityDate: string; // "YYYY-MM-DD"
	softwareSupplier?: Array<{ TaxNumber?: number; NameForeign?: string }>;
	specialNotes?: string;
}): BusinessPremiseRequest => ({
	BusinessPremiseRequest: {
		Header: { MessageID: p.messageId, DateTime: p.nowIso },
		BusinessPremise: {
			TaxNumber: p.taxNumber,
			BusinessPremiseID: p.businessPremiseId,
			BPIdentifier: { PremiseType: p.premiseType },
			ValidityDate: p.validityDate,
			...(p.softwareSupplier ? { SoftwareSupplier: p.softwareSupplier } : {}),
			...(p.specialNotes ? { SpecialNotes: p.specialNotes } : {}),
		},
	},
});

export const signBusinessPremiseToken = async (
	header: JwsHeader,
	payload: BusinessPremiseRequest,
	signFn: Rs256SignFn
): Promise<FursTokenEnvelope> => {
	const token = await buildCompactJws(header, payload, signFn);
	return { token };
};

export const submitBusinessPremise = async (
	prisma: PrismaClient,
	env: FursEnv,
	params: {
		business_id: string;
		business_premise_id: string;
		message_id: string;
		driver_id: string;
		tokenEnvelope: FursTokenEnvelope;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		decodedPayload?: any;
	}
) => {
	// Track job (SIGNED)
	const job = await prisma.furs_job.create({
		data: {
			type: 'BUSINESS_PREMISE',
			status: 'SIGNED',
			business_id: params.business_id,
			business_premise_id: params.business_premise_id,
			driver_id: params.driver_id,
			message_id: params.message_id,
			request_url: getFursUrl(env, 'businessPremise'),
			request_payload: params.decodedPayload ?? undefined,
			request_token: params.tokenEnvelope.token,
		},
	});

	// Send
	const { status, data } = await postJson(getFursUrl(env, 'businessPremise'), params.tokenEnvelope);

	// Update job
	let nextStatus: 'ACK' | 'ERROR' | 'SENT' = 'SENT';
	let error_code: string | null = null;
	let error_message: string | null = null;

	let response_token: string | null = null;
	if (data && typeof data === 'object' && 'token' in data) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		response_token = (data as any).token;
		// You can decode token and inspect .Error to set ACK/ERROR
		try {
			const payloadStr = Buffer.from(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(data as any).token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'),
				'base64'
			).toString('utf8');
			const payload = JSON.parse(payloadStr);
			const err = payload?.BusinessPremiseResponse?.Error;
			nextStatus = err ? 'ERROR' : 'ACK';
			if (err) {
				error_code = err.ErrorCode ?? null;
				error_message = err.ErrorMessage ?? null;
			}
			await prisma.furs_job.update({
				where: { furs_job_id: job.furs_job_id },
				data: {
					status: nextStatus,
					http_status: status,
					response_token,
					error_code,
					error_message,
				},
			});
		} catch {
			await prisma.furs_job.update({
				where: { furs_job_id: job.furs_job_id },
				data: {
					status: 'ERROR',
					http_status: status,
					response_token,
					error_message: 'Invalid FURS response token',
				},
			});
		}
	} else {
		await prisma.furs_job.update({
			where: { furs_job_id: job.furs_job_id },
			data: { status: 'ERROR', http_status: status, error_message: 'Non-token response from FURS' },
		});
	}

	return { job_id: job.furs_job_id, statusCode: status, response: data };
};
