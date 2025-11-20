import { Response } from 'express';

import OrderLobbyDao from '../dao/OrderLobby.js';
import {
	SetLobbyUsersWithLimitsRequest,
	CreateOrderLobby,
	SubmitLobbyRequest,
	SetUserOrderLobbyItemsRequest,
	OrderLobbyResponse,
	OrderLobbyItemRef,
} from '../schemas/dto/OrderLobby';
import OrderLobbyUserDao from '../dao/OrderLobbyUser.js';
import OrderLobbyItemDao from '../dao/OrderLobbyItem.js';
import UserDao from '../dao/User.js';
import BusinessDao from '../dao/Business.js';
import socket from '../socket.js';
import OneSignal from '../lib/oneSignal.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { CalculateOrderLobbyOrderDetails } from '../lib/deliveryHelpers.js';
import DeliveryOrderController from './DeliveryOrderController.js';
import MenuItemDao from '../dao/MenuItem.js';
import type { ValidatedRequest } from '../types/validatedRequest.ts';
import { PaymentRef } from '../schemas/dto/Payments/payment.dto.ts';

const { UserSockets } = socket;

async function lobbySocketOrNotification(user_id: string, event: string, order_lobby: any): Promise<void> {
	const userSocket = UserSockets.get(user_id);
	if (userSocket) {
		userSocket.emit(event, order_lobby);
	} else {
		const user = await UserDao.getUserById(user_id);
		if (user) {
			const l10nNotification = getLocalisedTexts('USER_NOTIFICATIONS', user.language);
			const l10nHeading = getLocalisedTexts('HEADING', user.language);
			let notification_title: string | undefined;
			let notification_content: string | undefined;
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

async function addUserToLobby(user_id: string, order_lobby: any, limit: number) {
	// create lobby user
	const ol_user = await OrderLobbyUserDao.createOrderLobbyUser(user_id, order_lobby.order_lobbies_id, limit);
	if (ol_user) {
		// emit to socket or send notification
		await lobbySocketOrNotification(ol_user.user_id, 'added_to_lobby', order_lobby);
	}
	return ol_user;
}

/**
 * Transforms order lobby items into order items with resolved sides and extras.
 * @param lobbyItems - Array of order lobby items to transform
 * @returns Promise resolving to array of enriched order items
 */
async function enrichOrderLobbyItems(lobbyItems: OrderLobbyItemRef[]): Promise<any[]> {
	return Promise.all(
		lobbyItems.map(async (item: OrderLobbyItemRef) => {
			const [sides, extras] = await Promise.all([
				MenuItemDao.getMenuItemsByIds(item.sides || []),
				MenuItemDao.getMenuItemsByIds(item.extras || []),
			]);

			return {
				...item,
				sides,
				extras,
				quantity: item.quantity,
				comment: item.customer_note || '',
			};
		})
	);
}
async function generateOrderDataFromLobby(orderLobby: OrderLobbyResponse, payment: PaymentRef, useCredits: boolean) {
	if (!orderLobby || !orderLobby.order_lobby_items) {
		throw new Error('Invalid order lobby data');
	}
	const items = await enrichOrderLobbyItems(orderLobby.order_lobby_items);
	if (!orderLobby.delivery_location) {
		throw new Error('Order lobby delivery location is missing');
	}
	//TODO: DAO FIX MARCEL use module id
	//TODO: use delivery_address unless order from LOCAL
	const business = await BusinessDao.getBusinessById(orderLobby.creator_id);

	if (!business) {
		throw new Error('Restaurant not found for order lobby');
	}

	const restaurantAddress = {
		address: business.address?.address,
		coordinates: {
			latitude: business.address?.latitude,
			longitude: business.address?.longitude,
		},
	};

	const orderRoute = [restaurantAddress, orderLobby.delivery_location];

	const order = {
		...orderLobby,
		details: {
			type: 'delivery',
			delivery_address: orderLobby.delivery_location,
		},
		delivery_location: orderLobby.delivery_location,
		pickup_location: restaurantAddress,
		allow_credits_usage: useCredits,
	};

	// TODO: This function needs to be fixed to accept order lobby data properly
	// See function for more details
	const orderDetails = CalculateOrderLobbyOrderDetails(
		business,
		items,
		orderLobby.delivery_location,
		payment.payment_method,
		order
	);

	// TODO: Define type for returned object when function is fixed
	return {
		items: items,
		payment: payment,
		details: orderDetails,
		courier_instructions: order.courier_note,
		restaurant_message: order.restaurant_message,
		scheduled: false,
		pickup_location: restaurantAddress,
		delivery_location: order.delivery_location,
		route: orderRoute,
		allow_credits_usage: useCredits,
	};
}

/**
 * POST /order_lobby/create
 * @tag OrderLobby
 * @summary Create a new order lobby
 * @description Creates a new order lobby and assigns users with per-user limits.
 * @operationId createLobby
 * @bodyContent {CreateOrderLobby} application/json
 * @bodyRequired
 * @response 200 - Lobby created successfully
 * @responseContent {OrderLobbyResponse} 200.application/json
 * @response 500 - Error creating lobby
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 */
async function createLobby(req: ValidatedRequest<CreateOrderLobby>, res: Response): Promise<Response> {
	try {
		const {
			user_limits_map,
			lobby_name,
			lobby_description,
			business_id,
			restaurant_id,
			restaurant_message,
			courier_note,
			delivery_location,
		} = req.body;

		if (!req.user) {
			return res.status(401).json({ success: false, error: 'Unauthorized' });
		}
		const new_lobby = await OrderLobbyDao.createOrderLobby({
			lobby_name,
			lobby_description,
			creating_business_id: business_id,
			creator_id: req.user.user_id,
			restaurant_message,
			courier_note: courier_note,
			delivery_location: delivery_location,
			restaurant_id,
		});

		const lobby_users = [];
		if (new_lobby) {
			for (const user_id of Object.keys(user_limits_map)) {
				const user = await addUserToLobby(user_id, new_lobby, user_limits_map[user_id] ?? 0); // TODO: Any other fix?
				lobby_users.push(user);
			}
		}

		const lobby = {
			...new_lobby,
			order_lobby_users: lobby_users,
			order_lobby_items: [],
		};

		return res.status(200).json({ lobby });
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * POST /order_lobby/submit/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Submit the order lobby and generate a delivery order
 * @description Submits an existing order lobby and creates a delivery order.
 * @operationId submitLobby
 * @pathParam {string} order_lobbies_id.path.required - The order lobby ID
 * @bodyContent {SubmitLobbyRequest} application/json
 * @bodyRequired
 * @response 200 - Order created successfully
 * @responseContent {object} 200.application/json //TODO : Define response schema
 * @response 404 - Order lobby not found
 * @responseContent {object} 404.application/json
 * @response 500 - Error submitting lobby
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model delivery_orders
 */
async function submitLobby(
	req: ValidatedRequest<SubmitLobbyRequest, { order_lobbies_id: string }>,
	res: Response
): Promise<Response> {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}

		const paymentMethod = req.body.paymentMethod;
		const useCredits = req.body.useCredits || false;

		const orderData = await generateOrderDataFromLobby(order_lobby, paymentMethod, useCredits);

		// Generate a delivery order
		const { order, payment_intent } = await DeliveryOrderController.generateOrder(
			orderData,
			order_lobby.creator_id
		);

		await OrderLobbyDao.setOrderLobbyActive(order_lobbies_id, false);
		for (const ol_user of order_lobby.order_lobby_users) {
			if (!ol_user.user || !ol_user.user.user_id) {
				throw new Error('Invalid user in order lobby!');
			}
			await lobbySocketOrNotification(ol_user.user.user_id, 'lobby_completed', order_lobby);
		}

		return res.status(200).json({
			...order,
			payment_intent,
		});
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * PUT /order_lobby/users/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Set the users and their limits for an order lobby
 * @description Adds/removes users and sets updated limits for the lobby.
 * @operationId setLobbyUsersWithLimits
 * @pathParam {string} order_lobbies_id.path.required - The order lobby ID
 * @bodyContent {SetLobbyUsersWithLimitsRequest} application/json
 * @bodyRequired
 * @response 200 - Lobby users updated successfully
 * @responseContent {OrderLobbyResponse} 200.application/json
 * @response 404 - Order lobby not found
 * @responseContent {object} 404.application/json
 * @response 500 - Error updating lobby users
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 */
async function setLobbyUsersWithLimits(
	req: ValidatedRequest<SetLobbyUsersWithLimitsRequest, { order_lobbies_id: string }>,
	res: Response
): Promise<Response> {
	try {
		const { order_lobbies_id } = req.params;
		const { user_limits_map } = req.body;

		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}

		// Check if user existed in lobby, if not notify them
		for (const user_id of Object.keys(user_limits_map)) {
			const lobby_user = order_lobby.order_lobby_users.find((ol_user: any) => ol_user.user_id === user_id);
			if (!lobby_user) {
				await lobbySocketOrNotification(user_id, 'lobby_completed', order_lobby);
			}
		}

		const result = await OrderLobbyDao.editUsersInOrderLobby(order_lobbies_id, user_limits_map);

		return res.status(200).json({ success: true, data: result });
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * PATCH /order_lobby/items/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Set user-specific order lobby items
 * @description Creates, updates, or deletes items for the authenticated user in the lobby.
 * @operationId setUserOrderLobbyItems
 * @pathParam {string} order_lobbies_id.path.required - The order lobby ID
 * @bodyContent {SetUserOrderLobbyItemsRequest} application/json
 * @bodyRequired
 * @response 200 - Lobby items updated successfully
 * @responseContent {OrderLobbyResponse} 200.application/json
 * @response 401 - Unauthorized
 * @responseContent {object} 401.application/json
 * @response 404 - Order lobby not found
 * @responseContent {object} 404.application/json
 * @response 500 - Error updating lobby items
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobby_items
 */
async function setUserOrderLobbyItems(
	req: ValidatedRequest<SetUserOrderLobbyItemsRequest, { order_lobbies_id: string }>,
	res: Response
): Promise<Response> {
	try {
		if (!req.user) {
			return res.status(401).json({ success: false, error: 'Unauthorized' });
		}
		const { order_lobbies_id } = req.params;
		const user_id = req.user.user_id;
		const { items } = req.body;

		const order_lobby_items = await OrderLobbyItemDao.getOrderLobbyItemsByLobbyAndUserId(order_lobbies_id, user_id);

		//delete removed items
		for (const lobby_item of order_lobby_items) {
			const item = items.find((item: any) => OrderLobbyItemDao.areItemsEqual(item, lobby_item));
			if (!item) {
				await OrderLobbyItemDao.deleteOrderLobbyItem(lobby_item.order_lobby_items_id);
			}
		}

		// Compare with provided items, just update quantity if exists, otherwise create new item.
		for (const item of items) {
			const lobby_item = order_lobby_items.find((ol_item: any) => OrderLobbyItemDao.areItemsEqual(ol_item, item));
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
					customer_note: item.customer_note || '',
				});
			}
		}

		let orderLobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!orderLobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}
		await lobbySocketOrNotification(orderLobby.creator_id, 'lobby_updated', orderLobby);

		return res.status(200).json({ success: true, message: 'Order lobby items updated successfully' });
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * DELETE /order_lobby/cancel/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Cancel an order lobby
 * @description Cancels an order lobby and removes all users with their items.
 * @operationId cancelLobby
 * @pathParam {string} order_lobbies_id.path.required - The order lobby ID
 * @response 200 - Lobby canceled successfully
 * @responseContent {boolean} 200.application/json
 * @response 404 - Order lobby not found
 * @responseContent {object} 404.application/json
 * @response 500 - Error canceling lobby
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model order_lobby_items
 */
async function cancelLobby(
	req: ValidatedRequest<never, { order_lobbies_id: string }>,
	res: Response
): Promise<Response> {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}

		for (const ol_user of order_lobby.order_lobby_users) {
			if (!ol_user.user || !ol_user.user.user_id) {
				throw new Error('Invalid user in order lobby!');
			}
			const deleted_ol_user = await OrderLobbyUserDao.deleteOrderLobbyUserWithItems(
				ol_user.user.user_id,
				order_lobbies_id
			);
			if (!deleted_ol_user) {
				return res.status(404).json({
					success: false,
					error: `Failed to delete user ${ol_user.user.user_id} from lobby ${order_lobbies_id}`,
				});
			}
			await lobbySocketOrNotification(deleted_ol_user.user_id, 'removed_from_lobby', order_lobby);
		}

		await OrderLobbyDao.deleteOrderLobby(order_lobbies_id);
		return res.status(200).json({ success: true });
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * DELETE /order_lobby/delete_user/{order_lobbies_id}/{user_id}
 * @tag OrderLobby
 * @summary Delete a user from an order lobby
 * @description Removes a specific user from the lobby and notifies them.
 * @operationId deleteUserFromLobby
 * @pathParam {string} order_lobbies_id.path.required - The order lobby ID
 * @pathParam {string} user_id.path.required - The user ID
 * @response 200 - User removed from lobby successfully
 * @responseContent {OrderLobbyResponse} 200.application/json
 * @response 404 - Lobby or user not found
 * @responseContent {object} 404.application/json
 * @response 500 - Error removing user from lobby
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model order_lobby_items
 */
async function deleteUserFromLobby(
	req: ValidatedRequest<never, { order_lobbies_id: string; user_id: string }>,
	res: Response
): Promise<Response> {
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

		const lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		return res.status(200).json({ success: true, lobby: lobby });
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * GET /order_lobby/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Get an order lobby by ID
 * @description Retrieves the lobby with users and their profile pictures.
 * @operationId getOrderLobbyById
 * @pathParam {string} order_lobbies_id.path.required - The order lobby ID
 * @response 200 - Lobby retrieved successfully
 * @responseContent {OrderLobbyResponse} 200.application/json
 * @response 404 - Order lobby not found
 * @responseContent {object} 404.application/json
 * @response 500 - Error retrieving lobby
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model documents
 * @prisma_model files
 */
async function getOrderLobbyById(
	req: ValidatedRequest<never, { order_lobbies_id: string }>,
	res: Response
): Promise<Response> {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);

		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}

		const updatedUsers = await Promise.all(
			order_lobby.order_lobby_users.map(async (user: any) => {
				return {
					...user,
					profile_picture: user.profile_picture.url,
				};
			})
		);
		order_lobby.order_lobby_users = updatedUsers;

		return res.status(200).json(order_lobby);
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * GET /order_lobby/actives/{business_id}
 * @tag OrderLobby
 * @summary Get active order lobbies by business ID
 * @description Retrieves a list of active order lobbies for a business.
 * @operationId getActiveOrderLobbiesByBusinessId
 * @pathParam {string} business_id.path.required - The business ID
 * @response 200 - Active lobbies retrieved successfully
 * @responseContent {OrderLobbyResponse[]} 200.application/json
 * @response 204 - No active lobbies for business
 * @response 500 - Error retrieving active lobbies
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model documents
 * @prisma_model files
 */
async function getActiveOrderLobbiesByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<Response> {
	try {
		const { business_id } = req.params;
		const orderLobbies = await OrderLobbyDao.getAllActiveOrderLobbiesByBusinessId(business_id);

		if (!orderLobbies || orderLobbies.length === 0) {
			return res.status(204).json([]);
		}

		const updatedLobbies = await Promise.all(
			orderLobbies.map(async (lobby: any) => {
				const updatedUsers = await Promise.all(
					lobby.order_lobby_users.map(async (user: any) => {
						return {
							...user,
							profile_picture: user.profile_picture.url,
						};
					})
				);
				return { ...lobby, order_lobby_users: updatedUsers };
			})
		);

		return res.status(200).json(updatedLobbies);
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * GET /order_lobby/user/{user_id}
 * @tag OrderLobby
 * @summary Get order lobbies for a user
 * @description Retrieves order lobbies where the user participates.
 * @operationId getOrderLobbiesByUserId
 * @pathParam {string} user_id.path.required - The user ID
 * @response 200 - Lobbies retrieved successfully
 * @responseContent {OrderLobbyResponse[]} 200.application/json
 * @response 204 - No lobbies for user
 * @response 500 - Error retrieving lobbies for user
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 */
async function getOrderLobbiesByUserId(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<Response> {
	const userId = req.params.user_id;
	try {
		const orderLobbies = await OrderLobbyDao.getOrderLobbiesByUserId(userId);

		if (orderLobbies && orderLobbies.length === 0) {
			return res.status(204).json([]);
		}

		return res.status(200).json(orderLobbies);
	} catch (e: any) {
		console.error(`Error fetching lobbies for user ${userId}: `, e);
		return res.status(500).json({ success: false, error: e.message });
	}
}

export {
	createLobby,
	submitLobby,
	setLobbyUsersWithLimits,
	setUserOrderLobbyItems,
	cancelLobby,
	deleteUserFromLobby,
	getOrderLobbyById,
	getActiveOrderLobbiesByBusinessId,
	getOrderLobbiesByUserId,
};

export default {
	createLobby,
	submitLobby,
	setLobbyUsersWithLimits,
	setUserOrderLobbyItems,
	cancelLobby,
	deleteUserFromLobby,
	getOrderLobbyById,
	getActiveOrderLobbiesByBusinessId,
	getOrderLobbiesByUserId,
};
