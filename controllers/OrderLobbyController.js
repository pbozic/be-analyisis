import OrderLobbyDao from '../dao/OrderLobby.js';
import OrderLobbyUserDao from '../dao/OrderLobbyUser.js';
import OrderLobbyItemDao from '../dao/OrderLobbyItem.js';
import UserDao from '../dao/User.js';
import DocumentDao from '../dao/Document.js';
import socket from '../socket.js';
import OneSignal from '../lib/oneSignal.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import DeliveryOrderController from './DeliveryOrderController.js';
import { DOCUMENT_TYPE } from '../lib/constants.js';
const { UserSockets, io } = socket;
async function lobbySocketOrNotification(user_id, event, order_lobby) {
	const userSocket = UserSockets.get(user_id);
	if (userSocket) {
		userSocket.emit(event, order_lobby);
	} else {
		const user = await UserDao.getUserById(user_id, { select: { language: true } });
		if (user) {
			const l10nNotification = getLocalisedTexts('USER_NOTIFICATIONS', user);
			const l10nHeading = getLocalisedTexts('HEADING', user);
			let notification_title = '';
			let notification_content = '';
			switch (event) {
				case 'added_to_lobby':
					notification_title = l10nHeading?.lobby_added;
					notification_content = l10nNotification?.lobby_added;
					break;
				case 'removed_from_lobby':
					notification_title = l10nHeading?.lobby_removed;
					notification_content = l10nNotification?.lobby_removed;
					break;
				case 'lobby_completed':
					notification_title = l10nHeading?.lobby_completed;
					notification_content = l10nNotification?.lobby_completed;
					break;
				case 'lobby_canceled':
					notification_title = l10nHeading?.lobby_canceled;
					notification_content = l10nNotification?.lobby_canceled;
					break;
			}
			await OneSignal.sendNotificationToUser(notification_title, notification_content, user_id);
		}
	}
}
async function addUserToLobby(user_id, order_lobby, limit) {
	// create lobby user
	const ol_user = await OrderLobbyUserDao.createOrderLobbyUser(user_id, order_lobby.order_lobbies_id, limit);
	if (ol_user) {
		// emit to socket or send notification
		await lobbySocketOrNotification(ol_user.user_id, 'added_to_lobby', order_lobby);
	}
	return ol_user;
}
// async function generateOrderDataFromLobby( lobbyOrderData,creator_id ){
// 	//generate orderData - items, details...
// 	const orderData = {}
// 	orderData.items = lobbyOrderData.items.reduce((order_items,item)=>{
// 		// const {
// 		// 	menu_item_id,
// 		// 	quantity,
// 		// 	comment,
// 		// 	extras,
// 		// 	sides,
// 		//
// 		// 	names,
// 		// 	image_url,
// 		// 	discount,
// 		// 	price
// 		// } = item
// 		const found_index = order_items.findIndex((i)=> i.menu_item_id===item.menu_item_id)
// 		if(found_index === -1 || !OrderLobbyItemDao.areItemsEqual(item,order_items(found_index))){
// 			order_items.push(item)
// 		}else{
// 			order_items[found_index].quantity += item.quantity
// 		}
// 	}, [])
//
// 	return orderData
// }
/**
 * POST /order_lobby/create
 * Create a new order lobby
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body
 * @param {Object} req.body.user_limits_map - Map of user IDs to their order limits
 * @param {string} req.body.lobby_name - Name of the lobby
 * @param {string} req.body.lobby_description - Description of the lobby
 * @param {string} req.body.business_id - ID of the business
 * @param {string} req.body.restaurant_id - ID of the restaurant
 * @param {string} req.body.courier_note - Note for the courier
 * @param {Object} req.body.delivery_location - Delivery location
 * @param {Object} req.user - Authenticated user object
 * @param {string} req.user.user_id - ID of the authenticated user
 * @param {Object} res - Express response object
 * @returns {Promise<Object>} Returns created lobby and lobby users with 201 status, or error with 500 status
 */
async function createLobby(req, res) {
	try {
		const {
			user_limits_map,
			lobby_name,
			lobby_description,
			business_id,
			restaurant_id,
			courier_note,
			delivery_location,
		} = req.body;
		const new_lobby = await OrderLobbyDao.createOrderLobby({
			lobby_name,
			lobby_description,
			business: { connect: { business_id: business_id } },
			restaurant_id,
			creator_id: req.user.user_id,
			courier_note: courier_note,
			delivery_location: delivery_location,
		});
		const lobby_users = [];
		if (new_lobby) {
			for (const user_id of Object.keys(user_limits_map)) {
				const user = await addUserToLobby(user_id, new_lobby, user_limits_map[user_id]);
				lobby_users.push(user);
			}
		}
		return res.status(200).json({ new_lobby, lobby_users });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * POST /order_lobby/submit/:order_lobbies_id
 * Submit the order lobby and generate a delivery order
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.order_lobbies_id - ID of the order lobby
 * @param {Object} req.body - Request body
 * @param {Object} req.body.orderBody - Order details for delivery order creation
 * @param {Object} res - Express response object
 * @returns {Promise<Object>} Returns created order with 201 status, or error with 500 status
 */
async function submitLobby(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		const { orderBody } = req.body;
		// const { lobbyOrderData } = req.body
		// const orderData = await generateOrderDataFromLobby(lobbyOrderData)
		// Generate a delivery order
		//TODO: Decide how to improve to not send whole order from FE, but rather generate from DB data about lobby
		const order = await DeliveryOrderController.createOrder(
			{ orderBody, user: { user_id: order_lobby.creator_id } },
			res
		);
		// Update the lobby status
		await OrderLobbyDao.setOrderLobbyActive(order_lobbies_id, false);
		for (const ol_user of order_lobby.order_lobby_users) {
			await lobbySocketOrNotification(ol_user.user_id, 'lobby_completed', order_lobby);
		}
		return res.status(201).json(order);
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * PUT /order_lobby/users/:order_lobbies_id
 * Set the users and their limits for an order lobby
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.order_lobbies_id - ID of the order lobby
 * @param {Object} req.body - Request body
 * @param {Object} req.body.user_limits_map - Map of user IDs to their updated order limits
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns 200 status on success, data - updated order_lobby, or error with 500 status
 */
async function setLobbyUsersWithLimits(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const { user_limits_map } = req.body;

		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}

		// Check if user existed in lobby, if not notify them
		for (const user_id of Object.keys(user_limits_map)) {
			const lobby_user = order_lobby.order_lobby_users.find((ol_user) => ol_user.user_id === user_id);
			if (!lobby_user) {
				await lobbySocketOrNotification(user_id, 'lobby_completed', order_lobby);
			}
		}

		const result = await OrderLobbyDao.editUsersInOrderLobby(order_lobbies_id, user_limits_map);

		return res.status(200).json({ success: true, data: result });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * PATCH /order_lobby/items/:order_lobbies_id
 * Set user-specific order lobby items
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.order_lobbies_id - ID of the order lobby
 * @param {Object} req.user - Authenticated user object
 * @param {string} req.user.user_id - ID of the authenticated user
 * @param {Object} req.body - Request body
 * @param {Array<Object>} req.body.items - Array of order items
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns 200 status on success, or error with 500 status
 */
async function setUserOrderLobbyItems(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const { user_id } = req.user;
		const { items } = req.body;
		const order_lobby_items = await OrderLobbyItemDao.getOrderLobbyItemsByLobbyAndUserId(order_lobbies_id, user_id);
		//delete removed items
		for (const lobby_item of order_lobby_items) {
			const item = items.find((item) => OrderLobbyItemDao.areItemsEqual(item, lobby_item));
			if (!item) {
				await OrderLobbyItemDao.deleteOrderLobbyItem(lobby_item.order_lobby_items_id);
			}
		}
		// Compare with provided items, just update quantity if exists, otherwise create new item.
		for (const item of items) {
			const lobby_item = order_lobby_items.find((ol_item) => OrderLobbyItemDao.areItemsEqual(ol_item, item));
			if (lobby_item) {
				await OrderLobbyItemDao.updateOrderLobbyItemQuantity(lobby_item.order_lobby_items_id, item.quantity);
			} else {
				await OrderLobbyItemDao.createOrderLobbyItem({
					order_lobbies_id,
					user_id,
					menu_item_id: item.menu_item_id,
					sides: item.sides,
					extras: item.extras,
					quantity: item.quantity,
					customer_note: item.customer_note,
				});
			}
		}
		return res.status(200);
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * DELETE /order_lobby/cancel/:order_lobbies_id
 * Cancel an order lobby
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.order_lobbies_id - ID of the order lobby to cancel
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns 200 status on success, or error with 500 status
 */
async function cancelLobby(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}
		for (const ol_user of order_lobby.order_lobby_users) {
			const deleted_ol_user = await OrderLobbyUserDao.deleteOrderLobbyUserWithItems(
				ol_user.user_id,
				order_lobbies_id
			);
			if (!deleted_ol_user) {
				return res.status(404).json({
					success: false,
					error: `Failed to delete user ${ol_user.user_id} from lobby ${order_lobbies_id}`,
				});
			}
			await lobbySocketOrNotification(deleted_ol_user.user_id, 'removed_from_lobby', order_lobby);
		}
		await OrderLobbyDao.deleteOrderLobby(order_lobbies_id);
		return res.status(200).json({ success: true });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * DELETE /order_lobby/delete_user/:order_lobbies_id/:user_id
 * Delete a user from an order lobby
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.order_lobbies_id - ID of the order lobby to cancel
 * @param {string} req.params.user_id - Array of user IDs to remove from the lobby
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns 200 status on success, or error with 500 status
 */
async function deleteUserFromLobby(req, res) {
	try {
		const { order_lobbies_id, user_id } = req.params;
		// First get the order lobby to verify it exists and for notifications
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}
		const deleted_ol_user = await OrderLobbyUserDao.deleteOrderLobbyUserWithItems(user_id, order_lobbies_id);
		if (!deleted_ol_user) {
			return res.status(404).json({ success: false, error: 'User not found in this lobby' });
		}
		// Send notification to the user
		await lobbySocketOrNotification(deleted_ol_user.user_id, 'removed_from_lobby', order_lobby);
		return res.status(200).json({ success: true, deleted_user: deleted_ol_user });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * GET /order_lobby/:order_lobbies_id
 * Get the order lobby by ID
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.order_lobbies_id - The ID of the order lobby
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns 200 status with the order lobby data, or error with 500 status
 */
async function getOrderLobbyById(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		const updatedUsers = await Promise.all(
			order_lobby.order_lobby_users.map(async (user) => {
				let profile = await DocumentDao.getDocumentsForUserByType(user.user_id, DOCUMENT_TYPE.PROFILE_PICTURE);
				return {
					...user,
					profile_picture: profile[0]?.files[0]?.url,
				};
			})
		);
		order_lobby.order_lobby_users = updatedUsers;
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}
		return res.status(200).json(order_lobby);
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
export { createLobby };
export { submitLobby };
export { setLobbyUsersWithLimits };
export { setUserOrderLobbyItems };
export { cancelLobby };
export { deleteUserFromLobby };
export { getOrderLobbyById };
export default {
	createLobby,
	submitLobby,
	setLobbyUsersWithLimits,
	setUserOrderLobbyItems,
	cancelLobby,
	deleteUserFromLobby,
	getOrderLobbyById,
};
