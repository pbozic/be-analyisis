/* eslint-disable @typescript-eslint/no-explicit-any */
import { Buffer } from 'node:buffer';

import type { PrismaClient } from '@prisma/client';

import type {
	CreateInvoiceInput,
	CreateInvoiceItemInput,
	CreateInvoiceTaxInput,
	FursTokenEnvelope,
	JwsHeader,
} from '../../types/fiscal';
import { buildCompactJws, Rs256SignFn } from './jws';
import { zoiConcat, computeZoiHex, buildQr60Payload } from './zoi';
import { getFursUrl, FursEnv } from './urls';
import { postJson } from './http';

/** Create invoice + nested items/taxes in DB
 * @param {PrismaClient} prisma
 * @param {CreateInvoiceInput} input
 * @returns {Promise<any>} Created invoice with items and taxes
 */
export const createInvoiceInDb = async (prisma: PrismaClient, input: CreateInvoiceInput) => {
	return prisma.invoice.create({
		data: {
			driver_id: input.driver_id,
			business_id: input.business_id ?? null,
			vehicle_id: input.vehicle_id ?? null,
			tax_number: input.tax_number,
			numbering_structure: input.numbering_structure as any,
			business_premise_id: input.business_premise_id,
			electronic_device_id: input.electronic_device_id,
			invoice_number: input.invoice_number,
			issue_datetime: new Date(input.issue_datetime),
			issue_datetime_local: input.issue_datetime_local ?? null,
			invoice_amount: input.invoice_amount as any,
			returns_amount: (input.returns_amount ?? null) as any,
			payment_amount: input.payment_amount as any,
			zoi: input.zoi,
			operator_tax_number: input.operator_tax_number ?? null,
			foreign_operator: input.foreign_operator ?? null,
			is_subsequent_submit: !!input.is_subsequent_submit,
			items: {
				createMany: {
					data: (input.items || []).map((it: CreateInvoiceItemInput) => ({
						description: it.description,
						qty: it.qty as any,
						unit: it.unit ?? null,
						unit_price: it.unit_price as any,
						tax_rate: it.tax_rate as any,
						line_total: it.line_total as any,
					})),
				},
			},
			taxes: {
				createMany: {
					data: (input.taxes || []).map((t: CreateInvoiceTaxInput) => ({
						tax_rate: t.tax_rate as any,
						taxable_amount: t.taxable_amount as any,
						tax_amount: t.tax_amount as any,
						other_taxes_amount: (t.other_taxes_amount ?? null) as any,
						exempt_taxable_amount: (t.exempt_taxable_amount ?? null) as any,
						reverse_vat_taxable_amount: (t.reverse_vat_taxable_amount ?? null) as any,
						nontaxable_amount: (t.nontaxable_amount ?? null) as any,
						special_tax_rules_amount: (t.special_tax_rules_amount ?? null) as any,
					})),
				},
			},
		},
		include: { items: true, taxes: true },
	});
};

/** Compute ZOI (mobile signer)
 *
 * @param {Object} p - The input parameters.
 * @param {string} p.TaxNumber - The tax number.
 * @param {string} p.IssueDateTimeLocal - The local issue date and time in "dd.MM.yyyy HH:mm:ss" format.
 * @param {string} p.InvoiceNumber - The invoice number.
 * @param {string} p.BusinessPremiseID - The business premise ID.
 * @param {string} p.ElectronicDeviceID - The electronic device ID.
 * @param {string} p.InvoiceAmount - The invoice amount as a string (e.g., "12.34").
 * @param {Rs256SignFn} signFn - The signing function to use for computing the ZOI.
 * @returns {Promise<{ concat: string; zoiHex: string }>} - An object containing the concatenated string and the computed ZOI in hexadecimal format.
 */
export const computeZoiFromInput = async (
	p: {
		TaxNumber: string;
		IssueDateTimeLocal: string; // "dd.MM.yyyy HH:mm:ss"
		InvoiceNumber: string;
		BusinessPremiseID: string;
		ElectronicDeviceID: string;
		InvoiceAmount: string; // "12.34"
	},
	signFn: Rs256SignFn
) => {
	const concat = zoiConcat(p);
	const zoiHex = await computeZoiHex(concat, signFn);
	return { concat, zoiHex };
};

/** Optional QR content (60 digits)
 * @param {string} zoiHex - ZOI in hexadecimal format.
 * @param {string} taxNumber - Tax number as string.
 * @param {Date} issueDateLocal - Local issue date as Date object.
 * @returns {string} QR code content string.
 */
export const buildQrString = (zoiHex: string, taxNumber: string, issueDateLocal: Date) =>
	buildQr60Payload({ zoiHex, taxNumber, issueDate: issueDateLocal });

/** Build a minimal InvoiceRequest payload (extend to your full FURS schema as needed)
 * @param {Object} p - The input parameters.
 * @param {string} p.messageId - Unique message ID (GUID).
 * @param {string} p.nowIso - Current date and time in ISO format.
 * @param {Object} p.invoice - The invoice details.
 * @param {number} p.invoice.TaxNumber - Tax number of the business (8 digits).
 * @param {number} [p.invoice.OperatorTaxNumber] - Optional tax number of the operator (8 digits).
 * @param {boolean} [p.invoice.ForeignOperator] - Optional flag indicating if the operator is foreign.
 * @param {string} p.invoice.BusinessPremiseID - Identifier for the business premise (max 20 characters).
 * @param {string} p.invoice.ElectronicDeviceID - Identifier for the electronic device (max 20 characters).
 * @param {'C' | 'B'} p.invoice.NumberingStructure - Numbering structure type ('C' or 'B').
 * @param {string} p.invoice.IssueDateTime - Issue date and time in ISO format.
 * @param {string} p.invoice.InvoiceNumber - Invoice number (max 20 characters).
 * @param {string} p.invoice.ProtectedID - Protected ID (ZOI) in hexadecimal format.
 * @param {string} p.invoice.InvoiceAmount - Total invoice amount as a string (e.g., "123.45").
 * @param {string} p.invoice.PaymentAmount - Total payment amount as a string (e.g., "123.45").
 * @param {Array<{ TaxRate: string; TaxableAmount: string; TaxAmount: string }>} p.invoice.Taxes - Array of tax details.
 * @returns {Object} The constructed InvoiceRequest payload.
 */
export const buildInvoicePayload = (p: {
	messageId: string;
	nowIso: string;
	invoice: {
		TaxNumber: number;
		OperatorTaxNumber?: number | null;
		ForeignOperator?: boolean | null;
		BusinessPremiseID: string;
		ElectronicDeviceID: string;
		NumberingStructure: 'C' | 'B';
		IssueDateTime: string; // ISO
		InvoiceNumber: string;
		ProtectedID: string; // ZOI hex (or as spec requires)
		// Totals and per-rate taxes — map from your DB
		InvoiceAmount: string; // "123.45"
		PaymentAmount: string; // "123.45"
		Taxes: Array<{ TaxRate: string; TaxableAmount: string; TaxAmount: string }>;
		// Add more fields as your spec requires (reference invoices, etc.)
	};
}) => ({
	InvoiceRequest: {
		Header: { MessageID: p.messageId, DateTime: p.nowIso },
		Invoice: p.invoice,
	},
});

/** Sign invoice JWS
 * @param {JwsHeader} header
 * @param {any} payload - InvoiceRequest payload
 * @param {Rs256SignFn} signFn
 * @returns {Promise<FursTokenEnvelope>} - The signed Invoice token envelope.
 */
export const signInvoiceToken = async (
	header: JwsHeader,
	payload: any,
	signFn: Rs256SignFn
): Promise<FursTokenEnvelope> => {
	const token = await buildCompactJws(header, payload, signFn);
	return { token };
};

/** Submit invoice token & log job
 * @param {PrismaClient} prisma
 * @param {FursEnv} env
 * @param {Object} params
 * @returns {Promise<Object>} - The result of the submission.
 */
export const submitInvoice = async (
	prisma: PrismaClient,
	env: FursEnv,
	params: {
		invoice_id: string;
		business_id?: string | null;
		driver_id: string;
		message_id: string;
		tokenEnvelope: FursTokenEnvelope;
		decodedPayload?: any;
	}
) => {
	const job = await prisma.furs_job.create({
		data: {
			type: 'INVOICE',
			status: 'SIGNED',
			invoice_id: params.invoice_id,
			business_id: params.business_id ?? null,
			driver_id: params.driver_id,
			message_id: params.message_id,
			request_url: getFursUrl(env, 'invoice'),
			request_payload: params.decodedPayload ?? undefined,
			request_token: params.tokenEnvelope.token,
		},
	});

	const { status, data } = await postJson(getFursUrl(env, 'invoice'), params.tokenEnvelope);

	let nextStatus: 'ACK' | 'ERROR' | 'SENT' = 'SENT';
	let error_code: string | null = null;
	let error_message: string | null = null;
	let response_token: string | null = null;
	let eor: string | null = null;

	if (data && typeof data === 'object' && 'token' in data) {
		response_token = (data as any).token;
		try {
			const payloadStr = Buffer.from(
				(data as any).token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'),
				'base64'
			).toString('utf8');
			const payload = JSON.parse(payloadStr);
			const err = payload?.InvoiceResponse?.Error;
			eor = payload?.InvoiceResponse?.UniqueInvoiceID ?? null;
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

			// Optional: update invoice with EOR
			if (eor) {
				await prisma.invoice.update({
					where: { invoice_id: params.invoice_id },
					data: { eor, furs_response_json: payload },
				});
			}
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

	return { job_id: job.furs_job_id, statusCode: status, response: data, eor };
};
