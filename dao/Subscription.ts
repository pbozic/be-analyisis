import prisma from '../prisma/prisma.js';
import type { CreateSubscriptionSchema, UpdateSubscriptionSchema } from '../types/subscriptions/Subscription.js';
import subscriptionInclude, { SubscriptionWithIncludesPrisma } from '../prisma/includes/subscriptions.js';
import { toSubscriptionResponse, toSubscriptionsList } from '../schemas/dto/Subscription/subscription.mappers.js';
import type { SubscriptionResponse } from '../schemas/dto/Subscription/subscription.dto.js';

/**
 * Create a new subscription
 *
 * @param {CreateSubscriptionSchema} data
 * @returns {Promise<SubscriptionResponse>}
 */
export async function createSubscription(data: CreateSubscriptionSchema): Promise<SubscriptionResponse> {
	try {
		const created = await prisma.action_bundle.create({
			data: {
				module: data.module,
				name: data.name,
				price_cents: data.price_cents,
				stripe_price_id: data.stripe_price_id,
				stripe_product_id: data.stripe_product_id ?? undefined,
			},
			include: subscriptionInclude,
		});

		return toSubscriptionResponse(created as SubscriptionWithIncludesPrisma);
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
 * @returns {Promise<SubscriptionResponse>}
 */
export async function updateSubscription(
	subscriptionId: string,
	data: UpdateSubscriptionSchema
): Promise<SubscriptionResponse> {
	try {
		const updated = await prisma.action_bundle.update({
			where: { subscription_id: subscriptionId },
			data: {
				module: data.module,
				name: data.name,
				price_cents: data.price_cents,
				stripe_price_id: data.stripe_price_id,
				stripe_product_id: data.stripe_product_id ?? undefined,
			},
			include: subscriptionInclude,
		});

		return toSubscriptionResponse(updated as SubscriptionWithIncludesPrisma);
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
		await prisma.action_bundle.delete({ where: { subscription_id: subscriptionId } });
	} catch (error) {
		console.error('Error deleting subscription:', error);
		throw new Error('Failed to delete subscription');
	}
}

/**
 * Get a subscription by ID
 *
 * @param {string} subscriptionId
 * @returns {Promise<SubscriptionResponse | null>}
 */
export async function getSubscriptionById(subscriptionId: string): Promise<SubscriptionResponse | null> {
	try {
		const row = await prisma.action_bundle.findUnique({
			where: { subscription_id: subscriptionId },
			include: subscriptionInclude,
		});
		return row ? toSubscriptionResponse(row as SubscriptionWithIncludesPrisma) : null;
	} catch (error) {
		console.error('Error fetching subscription:', error);
		throw new Error('Failed to fetch subscription');
	}
}

/**
 * Get a subscription by Name
 *
 * @param {string} name
 * @returns {Promise<SubscriptionResponse | null>}
 */
export async function getSubscriptionByName(name: string): Promise<SubscriptionResponse | null> {
	try {
		const row = await prisma.action_bundle.findUnique({ where: { name }, include: subscriptionInclude });
		return row ? toSubscriptionResponse(row as SubscriptionWithIncludesPrisma) : null;
	} catch (error) {
		console.error('Error fetching subscription:', error);
		throw new Error('Failed to fetch subscription');
	}
}

/**
 * List all subscriptions
 *
 * @returns {Promise<SubscriptionResponse[]>}
 */
export async function listSubscriptions(): Promise<SubscriptionResponse[]> {
	try {
		const rows = await prisma.action_bundle.findMany({ include: subscriptionInclude });
		return toSubscriptionsList(rows as SubscriptionWithIncludesPrisma[]);
	} catch (error) {
		console.error('Error listing subscriptions:', error);
		throw new Error('Failed to list subscriptions');
	}
}

/**
 * List all subscriptions by Module
 *
 * @returns {Promise<SubscriptionResponse[]>}
 */
export async function listSubscriptionsByModule(module: string): Promise<SubscriptionResponse[]> {
	try {
		const rows = await prisma.action_bundle.findMany({ where: { module }, include: subscriptionInclude });
		return toSubscriptionsList(rows as SubscriptionWithIncludesPrisma[]);
	} catch (error) {
		console.error('Error listing subscriptions:', error);
		throw new Error('Failed to list subscriptions');
	}
}

export default {
	createSubscription,
	updateSubscription,
	deleteSubscription,
	getSubscriptionById,
	getSubscriptionByName,
	listSubscriptions,
	listSubscriptionsByModule,
};
