import type { PrismaClient } from '@prisma/client';

/**
 * Create a FURS job entry in the database.
 *
 * @param {PrismaClient} prisma
 * @param {Object} data
 * @returns {Promise<Object>} - The created job entry.
 */
export const createJob = (
	prisma: PrismaClient,
	data: {
		type: 'BUSINESS_PREMISE' | 'INVOICE' | 'ECHO';
		status?: 'DRAFT' | 'SIGNED' | 'SENT' | 'ACK' | 'ERROR';
		business_id?: string | null;
		business_premise_id?: string | null;
		invoice_id?: string | null;
		driver_id?: string | null;
		request_url?: string | null;
		message_id: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		request_payload?: any;
		request_token?: string | null;
	}
) => prisma.furs_job.create({ data });
/**
 * Mark a job as SENT.
 *
 * @param {PrismaClient} prisma
 * @param {string} id
 * @param {number | null} http_status
 * @returns {Promise<Object>} - The updated job entry.
 */
export const markJobSent = (prisma: PrismaClient, id: string, http_status?: number | null) =>
	prisma.furs_job.update({ where: { furs_job_id: id }, data: { status: 'SENT', http_status } });
/**
 * Mark a job as ACK.
 *
 * @param {PrismaClient} prisma
 * @param {string} id
 * @param {string | null} response_token
 * @returns {Promise<Object>} - The updated job entry.
 */
export const markJobAck = (prisma: PrismaClient, id: string, response_token?: string | null) =>
	prisma.furs_job.update({ where: { furs_job_id: id }, data: { status: 'ACK', response_token } });
/**
 * Mark a job as ERROR.
 *
 * @param {PrismaClient} prisma
 * @param {string} id
 * @param {number | null} http_status
 * @param {string | null} error_code
 * @param {string | null} error_message
 * @param {string | null} response_token
 * @returns {Promise<Object>} - The updated job entry.
 */
export const markJobError = (
	prisma: PrismaClient,
	id: string,
	http_status?: number | null,
	error_code?: string | null,
	error_message?: string | null,
	response_token?: string | null
) =>
	prisma.furs_job.update({
		where: { furs_job_id: id },
		data: { status: 'ERROR', http_status, error_code, error_message, response_token },
	});
