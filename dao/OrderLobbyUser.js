const prisma = require("../prisma/prisma");

const cropped_user_columns = {
	first_name: true,
	last_name: true,
	user_id: true,
};

/**
 * Creates a new order lobby user
 * @param {string} user_id - The ID of the user
 * @param {string} order_lobbies_id - The ID of the order lobby
 * @param {number} limit - The spending limit for the user in the lobby
 * @returns {Promise<Object>} Created order lobby user with user details
 */
async function createOrderLobbyUser(user_id, order_lobbies_id, limit) {
	return await prisma.order_lobby_users.create({
		data: {
			limit,
			users: {
				connect: { user_id }
			},
			order_lobbies: {
				connect: { order_lobbies_id }
			}
		},
		include: {
			users: {
				select: cropped_user_columns
			}
		}
	});
}

/**
 * Retrieves all users in a given order lobby
 * @param {string} order_lobbies_id - The ID of the order lobby
 * @returns {Promise<Array>} List of users in the order lobby
 */
async function getOrderLobbyUsersInOrderLobby(order_lobbies_id) {
	return await prisma.order_lobby_users.findMany({
		where: { order_lobbies_id },
		include: {
			users: {
				select: cropped_user_columns
			}
		}
	});
}

/**
 * Updates the spending limit for an order lobby user
 * @param {string} order_lobby_users_id - The ID of the order lobby user entry
 * @param {number} newLimit - The new spending limit
 * @returns {Promise<Object>} Updated order lobby user with user details
 */
async function updateOrderLobbyUserLimit(order_lobby_users_id, newLimit) {
	return await prisma.order_lobby_users.update({
		where: { order_lobby_users_id },
		data: { limit: newLimit },
		include: {
			users: {
				select: cropped_user_columns
			}
		}
	});
}

/**
 * Deletes an order lobby user and all their associated items in a transaction
 * @param {string} order_lobby_users_id - The ID of the order lobby user entry to delete
 * @returns {Promise<Object>} Result of the transaction containing deleted user and items
 * @throws {Error} If either deletion fails, the entire transaction is rolled back
 */
async function deleteOrderLobbyUserWithItems(order_lobby_users_id) {
	return await prisma.$transaction(async (tx) => {
		// First get the user and lobby information
		const lobbyUser = await tx.order_lobby_users.findUnique({
			where: { order_lobby_users_id },
			select: {
				user_id: true,
				order_lobbies_id: true
			}
		});

		if (!lobbyUser) {
			throw new Error('Order lobby user not found');
		}

		// Delete all items belonging to this user in the lobby
		await tx.order_lobby_items.deleteMany({
			where: {
				AND: [
					{ user_id: lobbyUser.user_id },
					{ order_lobbies_id: lobbyUser.order_lobbies_id }
				]
			}
		});

		// Delete the order lobby user
		const deletedUser = await tx.order_lobby_users.delete({
			where: { order_lobby_users_id }
		});

		return deletedUser;
	});
}

module.exports = {
	createOrderLobbyUser,
	getOrderLobbyUsersInOrderLobby,
	updateOrderLobbyUserLimit,
	deleteOrderLobbyUserWithItems
};