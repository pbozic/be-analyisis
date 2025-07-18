import { MODULE_TYPE } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { CreateActionSchema } from '../types/subscriptions/Subscription.js';
import type { Action } from '../types/subscriptions/Subscription.js';
/**
 * Create a new action
 *
 * @param {CreateActionSchema} data
 * @returns {Promise<Action>}
 */
export async function createAction(data: CreateActionSchema): Promise<Action> {
	try {
		return await prisma.action.create({
			data: {
				module: data.module,
				name: data.name,
			},
		});
	} catch (error) {
		console.error('Error creating action:', error);
		throw new Error('Failed to create action');
	}
}

/**
 * Update an existing action
 *
 * @param {string} actionId
 * @param {CreateActionSchema} data
 * @returns {Promise<Action>}
 */
export async function updateAction(actionId: string, data: CreateActionSchema): Promise<Action> {
	try {
		return await prisma.action.update({
			where: { action_id: actionId },
			data: {
				module: data.module,
				name: data.name,
			},
		});
	} catch (error) {
		console.error('Error updating action:', error);
		throw new Error('Failed to update action');
	}
}

/**
 * Delete an action
 *
 * @param {string} actionId
 * @returns {Promise<void>}
 */
export async function deleteAction(actionId: string): Promise<void> {
	try {
		await prisma.action.delete({
			where: { action_id: actionId },
		});
	} catch (error) {
		console.error('Error deleting action:', error);
		throw new Error('Failed to delete action');
	}
}
/**
 * Get all actions
 *
 * @returns {Promise<Action[]>}
 */
export async function getAllActions(): Promise<Action[]> {
	try {
		return await prisma.action.findMany({
			orderBy: { name: 'asc' },
		});
	} catch (error) {
		console.error('Error fetching actions:', error);
		throw new Error('Failed to fetch actions');
	}
}

/**
 * Get an action by ID
 *
 * @param {string} actionId
 * @returns {Promise<Action | null>}
 */
export async function getActionById(actionId: string): Promise<Action | null> {
	try {
		return await prisma.action.findUnique({
			where: { action_id: actionId },
		});
	} catch (error) {
		console.error('Error fetching action:', error);
		throw new Error('Failed to fetch action');
	}
}
/**
 * Get actions by module type
 *
 * @param {MODULE_TYPE} module
 * @returns {Promise<Action[]>}
 */
export async function getActionsByModule(module: MODULE_TYPE): Promise<Action[]> {
	try {
		return await prisma.action.findMany({
			where: { module },
			orderBy: { name: 'asc' },
		});
	} catch (error) {
		console.error('Error fetching actions by module:', error);
		throw new Error('Failed to fetch actions by module');
	}
}

/**
 * Get actions by name
 *
 * @param {string} name
 * @returns {Promise<Action[]>}
 */
export async function getActionsByName(name: string): Promise<Action[]> {
	try {
		return await prisma.action.findMany({
			where: {
				name: {
					contains: name,
					mode: 'insensitive',
				},
			},
			orderBy: { name: 'asc' },
		});
	} catch (error) {
		console.error('Error fetching actions by name:', error);
		throw new Error('Failed to fetch actions by name');
	}
}

/**
 * Count actions by module type
 *
 * @param {MODULE_TYPE} module
 * @returns {Promise<number>}
 */
export async function countActionsByModule(module: MODULE_TYPE): Promise<number> {
	try {
		return await prisma.action.count({
			where: { module },
		});
	} catch (error) {
		console.error('Error counting actions by module:', error);
		throw new Error('Failed to count actions by module');
	}
}

/**
 * Count all actions
 *
 * @returns {Promise<number>}
 */
export async function countAllActions(): Promise<number> {
	try {
		return await prisma.action.count();
	} catch (error) {
		console.error('Error counting actions:', error);
		throw new Error('Failed to count actions');
	}
}

/**
 * Connect an action to a subscription
 *
 * @param {string} actionId
 * @param {string} subscriptionId
 * @param {number} [limit]
 * @returns {Promise<void>}
 */
export async function connectActionToSubscription(
	actionId: string,
	subscriptionId: string,
	limit?: number
): Promise<void> {
	try {
		await prisma.subscription_action.create({
			data: {
				action_id: actionId,
				subscription_id: subscriptionId,
				limit: limit ?? null,
			},
		});
	} catch (error) {
		console.error('Error connecting action to subscription:', error);
		throw new Error('Failed to connect action to subscription');
	}
}

/**
 * Connect an action to an addon
 *
 * @param {string} actionId
 * @param {string} addonId
 * @param {number} [limit]
 * @returns {Promise<void>}
 */
export async function connectActionToAddon(actionId: string, addonId: string, limit?: number): Promise<void> {
	try {
		await prisma.addon_action.create({
			data: {
				action_id: actionId,
				addon_id: addonId,
				limit: limit ?? null,
			},
		});
	} catch (error) {
		console.error('Error connecting action to addon:', error);
		throw new Error('Failed to connect action to addon');
	}
}

/**
 * Disconnect an action from a subscription
 *
 * @param {string} actionId
 * @param {string} subscriptionId
 * @returns {Promise<void>}
 */
export async function disconnectActionFromSubscription(actionId: string, subscriptionId: string): Promise<void> {
	try {
		await prisma.subscription_action.delete({
			where: {
				action_id_subscription_id: {
					action_id: actionId,
					subscription_id: subscriptionId,
				},
			},
		});
	} catch (error) {
		console.error('Error disconnecting action from subscription:', error);
		throw new Error('Failed to disconnect action from subscription');
	}
}

/**
 * Disconnect an action from an addon
 *
 * @param {string} actionId
 * @param {string} addonId
 * @returns {Promise<void>}
 */
export async function disconnectActionFromAddon(actionId: string, addonId: string): Promise<void> {
	try {
		await prisma.addon_action.delete({
			where: {
				action_id_addon_id: {
					action_id: actionId,
					addon_id: addonId,
				},
			},
		});
	} catch (error) {
		console.error('Error disconnecting action from addon:', error);
		throw new Error('Failed to disconnect action from addon');
	}
}

/** * Log business usage for an action
 * @param {string} businessId
 * @param {string} actionId
 * @param {number} [quantity]
 * @returns {Promise<void>}
 */

export async function logBussinesUsage(businessId: string, actionId: string, quantity: number = 1): Promise<void> {
	try {
		await prisma.business_usage.create({
			data: {
				business_id: businessId,
				action_id: actionId,
				quantity,
			},
		});
	} catch (error) {
		console.error('Error logging business usage:', error);
		throw new Error('Failed to log business usage');
	}
}
