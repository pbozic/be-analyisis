import type { payment_splits, Prisma as TPrisma, SPLIT_DESTINATION_TYPE } from '@prisma/client';
import { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
export type PaymentSplitData = {
	destination_type: SPLIT_DESTINATION_TYPE;
	destination_id?: string;
	amount: number;
	is_credits: boolean;
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
 * @param {number} amount
 * @param {Record<string, any>} [metadata={}]
 * @param {boolean} [is_credits=false]
 * @returns {Promise<payment_splits>}
 */
export async function createPaymentSplit(
	payment_id: string,
	destination_type: SPLIT_DESTINATION_TYPE,
	destination_id: string,
	amount: number,
	metadata?: Record<string, string | number | boolean | object | null>,
	is_credits: boolean = false
): Promise<payment_splits> {
	try {
		return await prisma.payment_splits.create({
			data: {
				payment_id,
				destination_type,
				destination_id,
				amount,
				metadata,
				is_credits,
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
 * @param payment_id - The ID of the payment these splits belong to.
 * @param splits - Array of split objects to create.
 * @returns Object with the count of created splits.
 * @prisma_model payment_splits
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
							amount: split.amount,
							metadata: split.metadata,
							is_credits: split.is_credits,
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
 * Fetches a payment split by its split_id.
 *
 * @param split_id - UUID of the split to fetch.
 * @returns The payment split.
 */
export async function getPaymentSplitById(split_id: string) {
	return await prisma.payment_splits.findFirst({
		where: { split_id },
		include: {
			payment: true,
		},
	});
}

/**
 * Updates a payment split by its split_id, excluding immutable fields.
 *
 * @param split_id - UUID of the split to update.
 * @param data - Allowed fields to update (excluding amount & destination).
 * @returns The updated payment split.
 */
export async function updatePaymentSplitById(
	split_id: string,
	data: Omit<
		Partial<TPrisma.payment_splitsUpdateInput>,
		'amount' | 'destination_id' | 'destination_type' | 'is_credits'
	>
) {
	return await prisma.payment_splits.update({
		where: { split_id },
		data,
	});
}

export default {
	createPaymentSplit,
	createManyPaymentSplits,
	getPaymentSplitById,
	updatePaymentSplitById,
};
