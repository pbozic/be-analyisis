import prisma from '../prisma/prisma.js';
/**
 * Compare two order lobby items for equality of menu_item_id, customer_note, extras and sides (order-insensitive arrays).
 *
 * @param {object} item1 - First item.
 * @param {object} item2 - Second item.
 * @returns {boolean} True if items are equal.
 */
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
/**
 * Create a new order lobby item.
 *
 * @param {object} order_lobby_item_data - Item payload.
 * @returns {Promise<object>} Created item.
 */
const createOrderLobbyItem = async (order_lobby_item_data) => {
	try {
		return await prisma.order_lobby_items.create({ data: order_lobby_item_data });
	} catch (error) {
		console.error('Error creating order lobby item:', error);
		throw error;
	}
};
/**
 * Update the quantity of an order lobby item.
 *
 * @param {string} order_lobby_items_id - Order lobby item ID.
 * @param {number} quantity - New quantity.
 * @returns {Promise<object>} Updated item.
 */
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
/**
 * Get order lobby items by lobby id and user id.
 *
 * @param {string} order_lobbies_id - Order lobby ID.
 * @param {string} user_id - User ID.
 * @returns {Promise<object[]>} Items.
 */
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
/**
 * Delete an order lobby item by id.
 *
 * @param {string} order_lobby_items_id - Order lobby item ID.
 * @returns {Promise<object>} Deleted item.
 */
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
export { createOrderLobbyItem };
export { updateOrderLobbyItemQuantity };
export { getOrderLobbyItemsByLobbyAndUserId };
export { deleteOrderLobbyItem };
export { areItemsEqual };
export default {
	createOrderLobbyItem,
	updateOrderLobbyItemQuantity,
	getOrderLobbyItemsByLobbyAndUserId,
	deleteOrderLobbyItem,
	areItemsEqual,
};
