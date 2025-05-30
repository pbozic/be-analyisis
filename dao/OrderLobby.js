import prisma from '../prisma/prisma.js';
const cropped_user_columns = {
	first_name: true,
	last_name: true,
	user_id: true,
};
/**
 * Creates a new order lobby
 * @param {Object} data - The order lobby data
 * @param {string} data.lobby_name - Name of the lobby
 * @param {string} data.lobby_description - Description of the lobby
 * @param {string} data.business_id - ID of the associated business
 * @param {string} data.restaurant_id - ID of the associated restaurant
 * @param {string} data.creator_id - ID of the user who created the lobby
 * @returns {Promise<Object>} Created order lobby
 */
const createOrderLobby = async (data) => {
	try {
		return await prisma.order_lobbies.create({
			data,
		});
	} catch (error) {
		console.error('Error creating order lobby:', error);
		throw error;
	}
};
/**
 * Retrieves an order lobby by its ID
 * @param {string} orderLobbiesId - The ID of the order lobby
 * @returns {Promise<Object>} Order lobby with its items and users
 */
const getOrderLobbyById = async (orderLobbiesId) => {
	try {
		return await prisma.order_lobbies.findUnique({
			where: { order_lobbies_id: orderLobbiesId },
			include: {
				order_lobby_items: true,
				order_lobby_users: {
					include: {
						users: {
							select: cropped_user_columns,
						},
					},
				},
			},
		});
	} catch (error) {
		console.error('Error getting order lobby by ID:', error);
		throw error;
	}
};
/**
 * Retrieves all order lobbies
 * @returns {Promise<Array>} Array of all order lobbies with their items, users, and delivery orders
 */
const getAllOrderLobbies = async () => {
	try {
		return await prisma.order_lobbies.findMany({
			include: {
				order_lobby_items: true,
				order_lobby_users: {
					include: {
						users: {
							select: cropped_user_columns,
						},
					},
				},
				delivery_orders: true,
			},
		});
	} catch (error) {
		console.error('Error getting all order lobbies:', error);
		throw error;
	}
};
/**
 * Retrieves all order lobbies for a specific business
 * @param {string} business_id - The ID of the business
 * @returns {Promise<Array>} Array of order lobbies associated with the business
 */
const getOrderLobbiesForBusiness = async (business_id) => {
	try {
		return await prisma.order_lobbies.findMany({
			where: {
				business_id: business_id,
			},
			include: {
				order_lobby_items: true,
				order_lobby_users: {
					include: {
						users: {
							select: cropped_user_columns,
						},
					},
				},
				delivery_orders: true,
			},
		});
	} catch (error) {
		console.error('Error getting all order lobbies:', error);
		throw error;
	}
};
/**
 * Retrieves active order lobbies for a specific user
 * @param {string} userId - The ID of the user
 * @returns {Promise<Array>} Array of active order lobbies the user is part of
 */
const getActiveOrderLobbiesByUserID = async (userId) => {
	try {
		return await prisma.order_lobbies.findMany({
			where: {
				active: true,
				order_lobby_users: {
					some: {
						user_id: userId,
					},
				},
			},
			include: {
				order_lobby_items: true,
				order_lobby_users: {
					include: {
						users: {
							select: cropped_user_columns,
						},
					},
				},
			},
		});
	} catch (error) {
		console.error('Error getting active order lobbies by user ID:', error);
		throw error;
	}
};
/**
 * Updates an order lobby
 * @param {string} orderLobbiesId - The ID of the order lobby to update
 * @param {Object} data - The update data
 * @returns {Promise<Object>} Updated order lobby
 */
const updateOrderLobby = async (orderLobbiesId, data) => {
	try {
		return await prisma.order_lobbies.update({
			where: { order_lobbies_id: orderLobbiesId },
			data,
		});
	} catch (error) {
		console.error('Error updating order lobby:', error);
		throw error;
	}
};
/**
 * Sets the active status of an order lobby
 * @param {string} orderLobbiesId - The ID of the order lobby
 * @param {boolean} active - The active status to set
 * @returns {Promise<Object>} Updated order lobby
 */
const setOrderLobbyActive = async (orderLobbiesId, active) => {
	try {
		return await prisma.order_lobbies.update({
			where: { order_lobbies_id: orderLobbiesId },
			data: { active },
		});
	} catch (error) {
		console.error('Error deactivating order lobby:', error);
		throw error;
	}
};
/**
 * Deletes an order lobby
 * @param {string} orderLobbiesId - The ID of the order lobby to delete
 * @returns {Promise<Object>} Deleted order lobby
 */
const deleteOrderLobby = async (orderLobbiesId) => {
	try {
		return await prisma.order_lobbies.delete({
			where: { order_lobbies_id: orderLobbiesId },
		});
	} catch (error) {
		console.error('Error deleting order lobby:', error);
		throw error;
	}
};

const editUsersInOrderLobby = async (orderLobbiesId, users) => {
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

		return await prisma.$transaction(async (tx) => {
			// Delete all existing users from the order lobby
			await tx.order_lobby_users.deleteMany({
				where: { order_lobbies_id: orderLobbiesId },
			});

			// Convert the users map to an array of objects for createMany
			const userData = Object.entries(users).map(([user_id, limit]) => ({
				order_lobbies_id: orderLobbiesId,
				user_id,
				limit: limit,
			}));

			// Add new users to the order lobby
			await tx.order_lobby_users.createMany({
				data: userData,
			});

			// Get the updated order lobby with users
			return await tx.order_lobbies.findUnique({
				where: { order_lobbies_id: orderLobbiesId },
				include: {
					order_lobby_users: {
						include: {
							users: {
								select: cropped_user_columns,
							},
						},
					},
				},
			});
		});
	} catch (error) {
		console.error('Error editing users in order lobby:', error);
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
};
