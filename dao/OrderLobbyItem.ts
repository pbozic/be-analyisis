import prisma from '../prisma/prisma.js';
import type {
	OrderLobbyItemBase,
	OrderLobbyItemResponse,
	CreateOrderLobbyItem,
} from '../schemas/dto/OrderLobby/index.js';

/**
 * Compare two order lobby items for equality of menu_item_id, customer_note, extras and sides (order-insensitive arrays).
 *
 * @param {OrderLobbyItemBase | Record<string, any>} item1 - First item.
 * @param {OrderLobbyItemBase | Record<string, any>} item2 - Second item.
 * @returns {boolean} True if items are equal.
 */
const areItemsEqual = (
	item1: OrderLobbyItemBase | Record<string, any>,
	item2: OrderLobbyItemBase | Record<string, any>
): boolean => {
	const arraysEqual = (arr1: any[] = [], arr2: any[] = []) => {
		if (arr1.length !== arr2.length) return false;
		return arr1.slice().sort().toString() === arr2.slice().sort().toString();
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
 * @param {Partial<OrderLobbyItemBase>} order_lobby_item_data - Item payload.
 * @returns {Promise<OrderLobbyItemResponse>} Created item.
 */
const createOrderLobbyItem = async (
	order_lobby_item_data: Partial<CreateOrderLobbyItem>
): Promise<OrderLobbyItemResponse> => {
	try {
		return await prisma.order_lobby_items.create({ data: order_lobby_item_data });
	} catch (error: any) {
		console.error('Error creating order lobby item:', error);
		throw error;
	}
};

/**

 * Update the quantity of an order lobby item.
 *
 * @param {string} order_lobby_items_id - Order lobby item ID.
 * @param {number} quantity - New quantity.
 * @returns {Promise<OrderLobbyItemResponse>} Updated item.
 */
const updateOrderLobbyItemQuantity = async (
	order_lobby_items_id: string,
	quantity: number
): Promise<OrderLobbyItemResponse> => {
	try {
		return await prisma.order_lobby_items.update({
			where: { order_lobby_items_id },
			data: { quantity },
		});
	} catch (error: any) {
		console.error('Error updating order lobby item quantity:', error);
		throw error;
	}
};

/**
 * Get order lobby items by lobby id and user id.
 *
 * @param {string} order_lobbies_id - Order lobby ID.
 * @param {string} user_id - User ID.
 * @returns {Promise<OrderLobbyItemResponse[]>} Items.
 */
const getOrderLobbyItemsByLobbyAndUserId = async (
	order_lobbies_id: string,
	user_id: string
): Promise<OrderLobbyItemResponse[]> => {
	try {
		return await prisma.order_lobby_items.findMany({
			where: {
				order_lobbies_id,
				user_id,
			},
			include: {
				menu_items: {
					include: {
						documents: { include: { files: true } },
						tax_rate: true,
					},
				},
			},
		});
	} catch (error: any) {
		console.error('Error retrieving order lobby items by lobby and user ID:', error);
		throw error;
	}
};

/**
 * Delete an order lobby item by id.
 *
 * @param {string} order_lobby_items_id - Order lobby item ID.
 * @returns {Promise<OrderLobbyItemResponse>} Deleted item.
 */
const deleteOrderLobbyItem = async (order_lobby_items_id: string): Promise<OrderLobbyItemResponse> => {
	try {
		return await prisma.order_lobby_items.delete({
			where: { order_lobby_items_id },
		});
	} catch (error: any) {
		console.error('Error deleting order lobby item:', error);
		throw error;
	}
};

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
