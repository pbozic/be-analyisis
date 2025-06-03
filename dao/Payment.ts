import { type payments, type payment_splits, type PAYMENT_METHOD, type PAYMENT_STATUS, Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {string} user_id
 * @param {number} amount
 * @param {PAYMENT_METHOD} payment_method
 * @param {number} [credits_amount=0]
 * @param {(string | null)} [payment_intent_id=null]
 * @param {(string | null)} [subscription_grouped_id=null]
 * @returns {Promise<payments>}
 */
export async function createPayment(
	user_id: string,
	amount: number,
	payment_method: PAYMENT_METHOD,
	credits_amount: number = 0,
	payment_intent_id: string | null = null,
	subscription_grouped_id: string | null = null
): Promise<payments> {
	try {
		return await prisma.payments.create({
			data: { user_id, amount, payment_method, credits_amount, payment_intent_id, subscription_grouped_id },
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
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {string} payment_id
 * @returns {Promise<payments | null>}
 */
export async function getPaymentById(
	payment_id: string
): Promise<(payments & { payment_splits: payment_splits[] }) | null> {
	try {
		return await prisma.payments.findUnique({
			where: { payment_id },
			include: { payment_splits: true },
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
 * Description placeholder
 *
 * @export
 * @async
 * @param {string} subscription_grouped_id
 * @returns {Promise<payments | null>}
 */
export async function getPaymentByGroupedId(subscription_grouped_id: string): Promise<payments | null> {
	try {
		return await prisma.payments.findUnique({
			where: { subscription_grouped_id },
			include: { subscriptions: true, payment_splits: true },
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
		throw new Error(`Error fetching payment by grouped_id: ${message}`);
	}
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {string} payment_id
 * @param {Partial<Pick<payments, 'amount' | 'credits_amount' | 'payment_method' | 'payment_intent_id' | 'status'>>} updates
 * @returns {Promise<payments>}
 */
export async function updatePayment(
	payment_id: string,
	updates: Partial<Pick<payments, 'amount' | 'credits_amount' | 'payment_method' | 'payment_intent_id' | 'status'>>
): Promise<payments> {
	try {
		return await prisma.payments.update({ where: { payment_id }, data: updates });
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
		throw new Error(`Error updating payment: ${message}`);
	}
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {string} payment_id
 * @returns {Promise<payments>}
 */
export async function deletePayment(payment_id: string): Promise<payments> {
	try {
		return await prisma.payments.delete({ where: { payment_id } });
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
		throw new Error(`Error deleting payment: ${message}`);
	}
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @param {(string | null)} [subscription_grouped_id=null]
 * @returns {Promise<payments[]>}
 */
export async function listPayments(subscription_grouped_id: string | null = null): Promise<payments[]> {
	try {
		return await prisma.payments.findMany({
			where: subscription_grouped_id ? { subscription_grouped_id } : undefined,
			orderBy: { created_at: 'desc' },
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
		throw new Error(`Error listing payments for subscription_grouped_id: ${message}`);
	}
}

export default { getPaymentByGroupedId, createPayment, getPaymentById, updatePayment, deletePayment, listPayments };
