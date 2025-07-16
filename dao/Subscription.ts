import type { business } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { CreateSubscriptionSchema, UpdateSubscriptionSchema } from '../types/subscriptions/Subscription.js';

/**
 * Create a new subscription
 *
 * @param {CreateSubscriptionSchema} data
 * @returns {Promise<business>}
 */
export async function createSubscription(data: CreateSubscriptionSchema): Promise<business> {
	try {
		return await prisma.subscription.create({
			data: {
				module: data.module,
				name: data.name,
				price_cents: data.price_cents,
				stripe_price_id: data.stripe_price_id,
			},
		});
	} catch (error) {
		console.error('Error creating subscription:', error);
		throw new Error('Failed to create subscription');
	}
}

/**
 * Update an existing subscription
 *
 * @param {string} subscriptionId
 * @param {UpdateSubscriptionSchema} data
 * @returns {Promise<business>}
 */
export async function updateSubscription(subscriptionId: string, data: UpdateSubscriptionSchema): Promise<business> {
	try {
		return await prisma.subscription.update({
			where: { subscription_id: subscriptionId },
			data: {
				module: data.module,
				name: data.name,
				price_cents: data.price_cents,
				stripe_price_id: data.stripe_price_id,
			},
		});
	} catch (error) {
		console.error('Error updating subscription:', error);
		throw new Error('Failed to update subscription');
	}
}

/**
 * Delete a subscription
 *
 * @param {string} subscriptionId
 * @returns {Promise<void>}
 */
export async function deleteSubscription(subscriptionId: string): Promise<void> {
	try {
		await prisma.subscription.delete({
			where: { subscription_id: subscriptionId },
		});
	} catch (error) {
		console.error('Error deleting subscription:', error);
		throw new Error('Failed to delete subscription');
	}
}

/**
 * Get a subscription by ID
 *
 * @param {string} subscriptionId
 * @returns {Promise<business | null>}
 */
export async function getSubscriptionById(subscriptionId: string): Promise<business | null> {
	try {
		return await prisma.subscription.findUnique({
			where: { subscription_id: subscriptionId },
		});
	} catch (error) {
		console.error('Error fetching subscription:', error);
		throw new Error('Failed to fetch subscription');
	}
}

/**
 * List all subscriptions
 *
 * @returns {Promise<business[]>}
 */
export async function listSubscriptions(): Promise<business[]> {
	try {
		return await prisma.subscription.findMany();
	} catch (error) {
		console.error('Error listing subscriptions:', error);
		throw new Error('Failed to list subscriptions');
	}
}

/**
 * List all subscriptions by Module
 *
 * @returns {Promise<business[]>}
 */
export async function listSubscriptionsByModule(module: string): Promise<business[]> {
	try {
		return await prisma.subscription.findMany({
			where: { module },
		});
	} catch (error) {
		console.error('Error listing subscriptions:', error);
		throw new Error('Failed to list subscriptions');
	}
}
