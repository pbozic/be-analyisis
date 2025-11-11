import type { PrismaClient } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { CreateOrderLobby, OrderLobbyResponse } from '../schemas/dto/OrderLobby/index.js';
import orderLobbiesDefaultInclude, { OrderLobbyWithIncludesPrisma } from '../prisma/includes/orderLobbies.js';
import { toOrderLobbyResponse, toOrderLobbyList } from '../schemas/dto/OrderLobby/orderLobby.mappers.js';

const cropped_user_columns = {
	first_name: true,
	last_name: true,
	user_id: true,
};

/**
 * Creates a new order lobby
 * @param {Partial<CreateOrderLobby>} data - The order lobby data
 * @returns {Promise<OrderLobbyResponse>} Created order lobby
 */
const createOrderLobby = async (data: Partial<CreateOrderLobby>): Promise<OrderLobbyResponse> => {
	try {
		const created = await prisma.order_lobbies.create({ data });
		const row = await prisma.order_lobbies.findUnique({ where: { order_lobbies_id: created.order_lobbies_id }, include: orderLobbiesDefaultInclude as any });
		return toOrderLobbyResponse(row as OrderLobbyWithIncludesPrisma);
	} catch (error: any) {
		console.error('Error creating order lobby:', error);
		throw error;
	}
};

/**
 * Retrieves an order lobby by its ID
 * @param {string} orderLobbiesId - The ID of the order lobby
 * @returns {Promise<OrderLobbyResponse|null>} Order lobby with its items and users
 */
const getOrderLobbyById = async (orderLobbiesId: string): Promise<OrderLobbyResponse | null> => {
	try {
		const row = await prisma.order_lobbies.findUnique({ where: { order_lobbies_id: orderLobbiesId }, include: orderLobbiesDefaultInclude as any });
		return row ? toOrderLobbyResponse(row as OrderLobbyWithIncludesPrisma) : null;
	} catch (error: any) {
		console.error('Error getting order lobby by ID:', error);
		throw error;
	}
};

/**
 * Retrieves all order lobbies
 * @returns {Promise<OrderLobbyResponse[]>} Array of all order lobbies with their items, users, and delivery orders
 */
const getAllOrderLobbies = async (): Promise<OrderLobbyResponse[]> => {
	try {
		const rows = await prisma.order_lobbies.findMany({ include: orderLobbiesDefaultInclude });
		return toOrderLobbyList(rows as OrderLobbyWithIncludesPrisma[]);
	} catch (error: any) {
		console.error('Error getting all order lobbies:', error);
		throw error;
	}
};

/**
 * Retrieves all order lobbies for a specific business
 * @param {string} creating_business_id - The ID of the business that created creating lobby
 * @returns {Promise<OrderLobbyResponse[]>} Array of order lobbies associated with the business
 */
const getOrderLobbiesForBusiness = async (creating_business_id: string): Promise<OrderLobbyResponse[]> => {
	try {
		const rows = await prisma.order_lobbies.findMany({ where: { creating_business_id: creating_business_id }, include: orderLobbiesDefaultInclude });
		return toOrderLobbyList(rows as OrderLobbyWithIncludesPrisma[]);
	} catch (error: any) {
		console.error('Error getting order lobbies for business:', error);
		throw error;
	}
};

/**
 * Retrieves active order lobbies for a specific user
 * @param {string} userId - The ID of the user
 * @returns {Promise<OrderLobbyResponse[]>} Array of active order lobbies the user is part of
 */
const getActiveOrderLobbiesByUserID = async (userId: string): Promise<OrderLobbyResponse[]> => {
	try {
		const rows = await prisma.order_lobbies.findMany({ where: { active: true, order_lobby_users: { some: { user_id: userId } } }, include: orderLobbiesDefaultInclude });
		return toOrderLobbyList(rows as OrderLobbyWithIncludesPrisma[]);
	} catch (error: any) {
		console.error('Error getting active order lobbies by user ID:', error);
		throw error;
	}
};

/**
 * Updates an order lobby
 * @param {string} orderLobbiesId - The ID of the order lobby to update
 * @param {Partial<CreateOrderLobby>} data - The update data
 * @returns {Promise<OrderLobbyResponse>} Updated order lobby
 */
const updateOrderLobby = async (
	orderLobbiesId: string,
	data: Partial<CreateOrderLobby>
): Promise<OrderLobbyResponse> => {
	try {
		const updated = await prisma.order_lobbies.update({ where: { order_lobbies_id: orderLobbiesId }, data });
		const row = await prisma.order_lobbies.findUnique({ where: { order_lobbies_id: updated.order_lobbies_id }, include: orderLobbiesDefaultInclude as any });
		return toOrderLobbyResponse(row as OrderLobbyWithIncludesPrisma);
	} catch (error: any) {
		console.error('Error updating order lobby:', error);
		throw error;
	}
};

/**
 * Sets the active status of an order lobby
 * @param {string} orderLobbiesId - The ID of the order lobby
 * @param {boolean} active - The active status to set
 * @returns {Promise<OrderLobbyResponse>} Updated order lobby
 */
const setOrderLobbyActive = async (orderLobbiesId: string, active: boolean): Promise<OrderLobbyResponse> => {
	try {
		const updated = await prisma.order_lobbies.update({ where: { order_lobbies_id: orderLobbiesId }, data: { active } });
		const row = await prisma.order_lobbies.findUnique({ where: { order_lobbies_id: updated.order_lobbies_id }, include: orderLobbiesDefaultInclude as any });
		return toOrderLobbyResponse(row as OrderLobbyWithIncludesPrisma);
	} catch (error: any) {
		console.error('Error setting order lobby active status:', error);
		throw error;
	}
};

/**
 * Deletes an order lobby
 * @param {string} orderLobbiesId - The ID of the order lobby to delete
 * @returns {Promise<OrderLobbyResponse>} Deleted order lobby
 */
const deleteOrderLobby = async (orderLobbiesId: string): Promise<OrderLobbyResponse> => {
	try {
		const deleted = await prisma.order_lobbies.delete({ where: { order_lobbies_id: orderLobbiesId }, include: orderLobbiesDefaultInclude as any });
		return toOrderLobbyResponse(deleted as OrderLobbyWithIncludesPrisma);
	} catch (error: any) {
		console.error('Error deleting order lobby:', error);
		throw error;
	}
};

/**
 * Replace users in an order lobby with a new set and limits in a transaction.
 *
 * @param {string} orderLobbiesId - Order lobby ID.
 * @param {Record<string, number | null>} users - Map of user_id to limit.
 * @returns {Promise<OrderLobbyResponse | null>} Updated order lobby with users and basic user fields.
 */
const editUsersInOrderLobby = async (
	orderLobbiesId: string,
	users: Record<string, number | null>
): Promise<OrderLobbyResponse | null> => {
	try {
		const orderLobby = await prisma.order_lobbies.findUnique({
			where: { order_lobbies_id: orderLobbiesId },
			include: {
				order_lobby_users: true,
			},
		});

		if (!orderLobby) {
			throw new Error('Order lobby not found');
		}

	return await prisma.$transaction(async (tx: PrismaClient) => {
			// Delete all existing users from the order lobby
			await tx.order_lobby_users.deleteMany({
				where: { order_lobbies_id: orderLobbiesId },
			});

			// Convert the users map to an array of objects for createMany
			const userData = Object.entries(users).map(([user_id, limit]) => ({
				order_lobbies_id: orderLobbiesId,
				user_id,
				limit: limit || 0,
			}));

			// Add new users to the order lobby
			await tx.order_lobby_users.createMany({
				data: userData,
			});

			// Get the updated order lobby with users
			const row = await tx.order_lobbies.findUnique({ where: { order_lobbies_id: orderLobbiesId }, include: { order_lobby_users: { include: { users: { select: cropped_user_columns } } } } });
			return row;
		});
	} catch (error: any) {
		console.error('Error editing users in order lobby:', error);
		throw error;
	}
};

/**
 * Get all active order lobbies for a business including items and users.
 *
 * @param {string} creating_business_id - Business ID.
 * @returns {Promise<OrderLobbyResponse[]>} Active order lobbies.
 */
const getAllActiveOrderLobbiesByBusinessId = async (creating_business_id: string): Promise<OrderLobbyResponse[]> => {
	try {
		const rows = await prisma.order_lobbies.findMany({ where: { active: true, creating_business_id: creating_business_id }, include: orderLobbiesDefaultInclude });
		return toOrderLobbyList(rows as OrderLobbyWithIncludesPrisma[]);
	} catch (error: any) {
		console.error('Error getting all active order lobbies by business ID:', error);
		throw error;
	}
};

/**
 * Get active order lobbies that a user participates in including items and users.
 *
 * @param {string} userId - User ID.
 * @returns {Promise<OrderLobbyResponse[]>} Order lobbies.
 */
const getOrderLobbiesByUserId = async (userId: string): Promise<OrderLobbyResponse[]> => {
	try {
		const rows = await prisma.order_lobbies.findMany({ where: { order_lobby_users: { some: { user_id: userId } }, active: true }, include: orderLobbiesDefaultInclude });
		return toOrderLobbyList(rows as OrderLobbyWithIncludesPrisma[]);
	} catch (error: any) {
		console.error('Error getting order lobbies by user ID:', error);
		throw error;
	}
};

export { createOrderLobby };
export { getOrderLobbyById };
export { getOrderLobbiesForBusiness };
export { getAllOrderLobbies };
export { getActiveOrderLobbiesByUserID };
export { updateOrderLobby };
export { setOrderLobbyActive };
export { deleteOrderLobby };
export { editUsersInOrderLobby };
export { getAllActiveOrderLobbiesByBusinessId };
export { getOrderLobbiesByUserId };
export default {
	createOrderLobby,
	getOrderLobbyById,
	getOrderLobbiesForBusiness,
	getAllOrderLobbies,
	getActiveOrderLobbiesByUserID,
	updateOrderLobby,
	setOrderLobbyActive,
	deleteOrderLobby,
	editUsersInOrderLobby,
	getAllActiveOrderLobbiesByBusinessId,
	getOrderLobbiesByUserId,
};
