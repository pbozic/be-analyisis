import { type payments, type PAYMENT_METHOD, Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import paymentsDefaultInclude, { PaymentWithIncludesPrisma } from '../prisma/includes/payments.js';
import { toPaymentResponse, toPaymentList } from '../schemas/dto/Payments/payments.mappers.js';
import type { PaymentResponse } from '../schemas/dto/Payments/payments.dto.js';

/**
 * Creates a new payment record.
 *
 * @export
 * @async
 * @param {string} user_id
 * @param {number} amount
 * @param {PAYMENT_METHOD} payment_method
 * @param {number} [credits_amount=0]
 * @param {(string | null)} [payment_intent_id=null]
 * @param {(string | null)} [daily_meal_subscription_id=null]
 * @returns {Promise<payments>}
 */
export async function createPayment(
	user_id: string,
	amount: number,
	payment_method: PAYMENT_METHOD,
	credits_amount: number = 0,
	payment_intent_id: string | null = null,
	daily_meal_subscription_id: string | null = null
): Promise<PaymentResponse> {
	try {
		const created = await prisma.payments.create({
			data: {
				user_id,
				amount,
				payment_method,
				credits_amount,
				payment_intent_id,
				daily_meal_subscription_id: daily_meal_subscription_id ? daily_meal_subscription_id : undefined,
			},
		});

		const row = await prisma.payments.findUnique({
			where: { payment_id: created.payment_id },
			include: paymentsDefaultInclude,
		});
		return toPaymentResponse(row as PaymentWithIncludesPrisma);
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
 * Gets a payment by its ID.
 *
 * @param {string} payment_id
 * @returns {Promise<payments | null>}
 */
export async function getPaymentById(payment_id: string): Promise<PaymentResponse | null> {
	try {
		const row = await prisma.payments.findUnique({ where: { payment_id }, include: paymentsDefaultInclude });
		return row ? toPaymentResponse(row as PaymentWithIncludesPrisma) : null;
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
 * Get a payment by its grouped daily meal subscription ID.
 *
 * @param {string} daily_meal_subscription_id
 * @returns {Promise<payments | null>}
 */
export async function getPaymentByGroupedId(daily_meal_subscription_id: string): Promise<PaymentResponse | null> {
	try {
		const row = await prisma.payments.findUnique({
			where: { daily_meal_subscription_id },
			include: paymentsDefaultInclude,
		});
		return row ? toPaymentResponse(row as PaymentWithIncludesPrisma) : null;
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
 * Deletes a payment by its ID.
 *
 * @param {string} payment_id
 * @returns {Promise<payments>}
 */
export async function updatePayment(
	payment_id: string,
	updates: Partial<Pick<payments, 'amount' | 'credits_amount' | 'payment_method' | 'payment_intent_id' | 'status'>>
): Promise<PaymentResponse> {
	try {
		const updated = await prisma.payments.update({ where: { payment_id }, data: updates });
		const row = await prisma.payments.findUnique({
			where: { payment_id: updated.payment_id },
			include: paymentsDefaultInclude,
		});
		return toPaymentResponse(row as PaymentWithIncludesPrisma);
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
 * Deletes a payment by its ID.
 *
 * @param {string} payment_id
 * @returns {Promise<payments>}
 */
export async function deletePayment(payment_id: string): Promise<PaymentResponse> {
	try {
		const deleted = await prisma.payments.delete({ where: { payment_id }, include: paymentsDefaultInclude });
		return toPaymentResponse(deleted as PaymentWithIncludesPrisma);
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
 * List payments, optionally filtered by daily meal subscription ID.
 *
 * @param {(string | null)} [daily_meal_subscription_id=null]
 * @returns {Promise<payments[]>}
 */
export async function listPayments(daily_meal_subscription_id: string | null = null): Promise<PaymentResponse[]> {
	try {
		const rows = await prisma.payments.findMany({
			where: daily_meal_subscription_id ? { daily_meal_subscription_id } : undefined,
			orderBy: { created_at: 'desc' },
			include: paymentsDefaultInclude,
		});
		return toPaymentList(rows as PaymentWithIncludesPrisma[]);
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
		throw new Error(`Error listing payments for daily_meal_subscription_id: ${message}`);
	}
}

export default { getPaymentByGroupedId, createPayment, getPaymentById, updatePayment, deletePayment, listPayments };
