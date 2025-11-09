import type { payment_splits, Prisma as TPrisma, SPLIT_DESTINATION_TYPE } from '@prisma/client';
import { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
export type PaymentSplitData = {
	destination_type: SPLIT_DESTINATION_TYPE;
	destination_id?: string;
	amount_regular: number;
	amount_credits: number;
	metadata?: Record<string, string | number | boolean | object | null>;
};

/**
 * Creates a new payment split record in the database.
 *
 * @export
 * @async
 * @param {string} payment_id
 * @param {SPLIT_DESTINATION_TYPE} destination_type
 * @param {string} destination_id
 * @param {number} amount_regular
 * @param {number} amount_credits
 * @param {Record<string, any>} [metadata={}]
 * @returns {Promise<payment_splits>}
 */
export async function createPaymentSplit(
	payment_id: string,
	destination_type: SPLIT_DESTINATION_TYPE,
	destination_id: string,
	amount_regular: number,
	amount_credits: number,
	metadata?: Record<string, string | number | boolean | object | null>
): Promise<payment_splits> {
	try {
		return await prisma.payment_splits.create({
			data: {
				payment_id,
				destination_type,
				destination_id,
				amount_regular,
				amount_credits,
				metadata,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching payment by id: ${message}`);
	}
}

/**
 * Creates multiple payment split records for a single payment using a transaction.
 * Each split will be connected to the given payment.
 * @param {string} payment_id - The ID of the payment these splits belong to.
 * @param {Array<PaymentSplitData>} splits - Array of split objects to create.
 * @returns {Promise<Object>} Object with the count of created splits.
 */
export async function createManyPaymentSplits(
	payment_id: string,
	splits: Array<PaymentSplitData>
): Promise<{ count: number }> {
	try {
		const result = await prisma.$transaction(async (tx: TPrisma.TransactionClient) => {
			const created = await Promise.all(
				splits.map((split) =>
					tx.payment_splits.create({
						data: {
							payment: { connect: { payment_id } },
							destination_type: split.destination_type,
							destination_id: split.destination_id,
							amount_regular: split.amount_regular,
							amount_credits: split.amount_credits,
							metadata: split.metadata,
						},
					})
				)
			);
			return { count: created.length };
		});
		return result;
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching payment by id: ${message}`);
	}
}

/**
 * Fetches a payment split by its payment_split_id.
 *
 * @param {string} payment_split_id - UUID of the split to fetch.
 * @returns {Promise<payment_splits | null>} The payment split.
 */
export async function getPaymentSplitById(payment_split_id: string) {
	return await prisma.payment_splits.findFirst({
		where: { payment_split_id },
		include: {
			payment: true,
		},
	});
}

/**
 * Updates a payment split by its payment_split_id.
 * Fields `amount_regular`, 'amount_credits', `destination_type`, and `_id` are immutable.
 * Allows updating `destination_id` only if it is currently null.
 *
 * @param {string} payment_split_id - UUID of the split to update.
 * @param {object} data - Allowed fields to update.
 * @returns {Promise<payment_splits>} The updated payment split.
 */
export async function updatePaymentSplitById(
	payment_split_id: string,
	data: Omit<
		Partial<TPrisma.payment_splitsUpdateInput>,
		'amount_regular' | 'amount_credits' | 'destination_type' | 'payment_split_id' | 'payment_id'
	>,
	tx?: TPrisma.TransactionClient
): Promise<payment_splits> {
	const prismaClient = tx ?? prisma;

	// If destination_id is included in the update, check whether it's allowed
	if ('destination_id' in data) {
		const existing_split = await prismaClient.payment_splits.findUnique({
			where: { payment_split_id },
			select: { destination_id: true },
		});

		if (!existing_split) {
			throw new Error(`Payment split not found for id ${payment_split_id}`);
		}

		if (existing_split.destination_id !== null) {
			throw new Error('destination_id is already set and cannot be changed');
		}
	}

	return await prismaClient.payment_splits.update({
		where: { payment_split_id },
		data,
	});
}

export default {
	createPaymentSplit,
	createManyPaymentSplits,
	getPaymentSplitById,
	updatePaymentSplitById,
};
