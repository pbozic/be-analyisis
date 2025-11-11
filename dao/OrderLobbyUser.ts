import { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma';
import { OrderLobbyUserResponse } from '../schemas/dto/OrderLobby/orderLobbyUser.dto';
import { toOrderLobbyUserResponse, toOrderLobbyUserList } from '../schemas/dto/OrderLobby/orderLobbyUser.mappers.js';

const cropped_user_columns = {
	first_name: true,
	last_name: true,
	user_id: true,
} as const;

/**
 * Creates a new order lobby user
 * @param user_id - The ID of the user
 * @param order_lobbies_id - The ID of the order lobby
 * @param limit - The spending limit for the user in the lobby
 * @returns Created order lobby user with user details
 */
async function createOrderLobbyUser(
	user_id: string,
	order_lobbies_id: string,
	limit: number
): Promise<OrderLobbyUserResponse> {
	const created = await prisma.order_lobby_users.create({
		data: {
			limit,
			users: { connect: { user_id } },
			order_lobbies: { connect: { order_lobbies_id } },
		},
		include: { users: { select: cropped_user_columns } },
	});
	return toOrderLobbyUserResponse(created as unknown);
}

/**
 * Retrieves all users in a given order lobby
 * @param order_lobbies_id - The ID of the order lobby
 * @returns List of users in the order lobby
 */
async function getOrderLobbyUsersInOrderLobby(order_lobbies_id: string): Promise<OrderLobbyUserResponse[]> {
	const rows = await prisma.order_lobby_users.findMany({
		where: { order_lobbies_id },
		include: { users: { select: cropped_user_columns } },
	});
	return toOrderLobbyUserList(rows as unknown[]);
}

/**
 * Updates the spending limit for an order lobby user
 * @param order_lobby_users_id - The ID of the order lobby user entry
 * @param newLimit - The new spending limit
 * @returns Updated order lobby user with user details
 */
async function updateOrderLobbyUserLimit(
	order_lobby_users_id: string,
	newLimit: number
): Promise<OrderLobbyUserResponse> {
	const updated = await prisma.order_lobby_users.update({
		where: { order_lobby_users_id },
		data: { limit: newLimit },
		include: { users: { select: cropped_user_columns } },
	});
	return toOrderLobbyUserResponse(updated as unknown);
}

/**
 * Deletes an order lobby user and all their associated items in a transaction
 * @param user_id - The ID of the user
 * @param order_lobbies_id - The ID of the order lobby users entry
 * @returns Result of the transaction containing deleted user
 * @throws Error If either deletion fails, the entire transaction is rolled back
 */
async function deleteOrderLobbyUserWithItems(
	user_id: string,
	order_lobbies_id: string
): Promise<OrderLobbyUserResponse> {
	return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		// First check if both user and lobby exist
		const lobbyUser = await tx.order_lobby_users.findFirst({
			where: {
				AND: [{ user_id: user_id }, { order_lobbies_id: order_lobbies_id }],
			},
		});
		if (!lobbyUser) {
			throw new Error('Order lobby user relationship not found');
		}
		// Get the order_lobby_users_id for later use
		const order_lobby_users_id = lobbyUser.order_lobby_users_id;
		// Delete all items belonging to this user in the lobby
		await tx.order_lobby_items.deleteMany({
			where: {
				AND: [{ user_id: user_id }, { order_lobbies_id: order_lobbies_id }],
			},
		});
		// Delete the order lobby user
		const deletedUser = await tx.order_lobby_users.delete({ where: { order_lobby_users_id } });
		return toOrderLobbyUserResponse(deletedUser as unknown);
	});
}

export { createOrderLobbyUser };
export { getOrderLobbyUsersInOrderLobby };
export { updateOrderLobbyUserLimit };
export { deleteOrderLobbyUserWithItems };
export default {
	createOrderLobbyUser,
	getOrderLobbyUsersInOrderLobby,
	updateOrderLobbyUserLimit,
	deleteOrderLobbyUserWithItems,
};
