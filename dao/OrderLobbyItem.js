const prisma = require('../prisma/prisma');

const areItemsEqual = (item1, item2) => {
	const arraysEqual = (arr1, arr2) => {
		if (arr1.length !== arr2.length) return false;
		return arr1.sort().toString() === arr2.sort().toString();
	};

	return (
		item1.menu_item_id === item2.menu_item_id &&
		item1.customer_note === item2.customer_note &&
		arraysEqual(item1.extras, item2.extras) &&
		arraysEqual(item1.sides, item2.sides)
	);
};

const createOrderLobbyItem = async (order_lobby_item_data) => {
	try {
		return await prisma.order_lobby_items.create({ data: order_lobby_item_data });
	} catch (error) {
		console.error('Error creating order lobby item:', error);
		throw error;
	}
};

const updateOrderLobbyItem = async (order_lobby_items_id, order_lobby_items) => {
	try {
		return await prisma.order_lobby_items.update({
			where: { order_lobby_items_id },
			data: order_lobby_items,
		});
	} catch (error) {
		console.error('Error updating order lobby item:', error);
		throw error;
	}
};

const updateOrderLobbyItemQuantity = async (order_lobby_items_id, quantity) => {
	try {
		return await prisma.order_lobby_items.update({
			where: { order_lobby_items_id },
			data: { quantity },
		});
	} catch (error) {
		console.error('Error updating order lobby item quantity:', error);
		throw error;
	}
};

const getOrderLobbyItemsByLobbyId = async (order_lobbies_id) => {
	try {
		return await prisma.order_lobby_items.findMany({
			where: { order_lobbies_id },
		});
	} catch (error) {
		console.error('Error retrieving order lobby items by lobby ID:', error);
		throw error;
	}
};

const getOrderLobbyItemsByLobbyAndUserId = async (order_lobbies_id, user_id) => {
	try {
		return await prisma.order_lobby_items.findMany({
			where: {
				order_lobbies_id,
				user_id,
			},
		});
	} catch (error) {
		console.error('Error retrieving order lobby items by lobby and user ID:', error);
		throw error;
	}
};

const deleteOrderLobbyItem = async (order_lobby_items_id) => {
	try {
		return await prisma.order_lobby_items.delete({
			where: { order_lobby_items_id },
		});
	} catch (error) {
		console.error('Error deleting order lobby item:', error);
		throw error;
	}
};

/**
 * Deletes all order lobby items for a specific user in a specific lobby
 * @param {string} user_id - The ID of the user
 * @param {string} order_lobbies_id - The ID of the order lobby
 * @returns {Promise<Object>} Result of the delete operation
 */
const deleteOrderLobbyItemsForUserInLobby = async (user_id, order_lobbies_id) => {
	try {
		return await prisma.order_lobby_items.deleteMany({
			where: {
				AND: [{ user_id }, { order_lobbies_id }],
			},
		});
	} catch (error) {
		console.error('Error deleting order lobby items:', error);
		throw error;
	}
};

module.exports = {
	createOrderLobbyItem,
	updateOrderLobbyItem,
	updateOrderLobbyItemQuantity,
	getOrderLobbyItemsByLobbyId,
	getOrderLobbyItemsByLobbyAndUserId,
	deleteOrderLobbyItem,
	areItemsEqual,
};
