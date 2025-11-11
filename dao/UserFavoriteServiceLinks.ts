import prisma from '../prisma/prisma.js';
import { toUserFavoriteServiceLinkList } from '../schemas/dto/UserFavoriteServiceLink/userFavoriteServiceLink.mappers.js';
import type { UserFavoriteServiceLinkResponse } from '../types/users/UserFavoriteServiceLink.js';
/**
 * Update user's favorite services
 *
 * @param {string} user_id - The ID of the user.
 * @param {string[]} service_ids - The IDs of the services to update.
 * @returns {Promise<object[]>} The updated favorite services.
 */
export async function updateFavoriteServices(
	user_id: string,
	service_ids: string[]
): Promise<UserFavoriteServiceLinkResponse[]> {
	try {
		// First, delete existing favorites not in the new list
		await prisma.user_favorite_service_links.deleteMany({
			where: {
				user_id,
				service_id: { notIn: service_ids },
			},
		});

		// Then, upsert new favorite services
		const upsertPromises = service_ids.map((service_id) =>
			prisma.user_favorite_service_links.upsert({
				where: { user_typed_favorite: { user_id, service_id } },
				create: { user_id, service_id },
				update: {},
			})
		);

		const rows = await Promise.all(upsertPromises);
		return toUserFavoriteServiceLinkList(rows as unknown[]);
	} catch (error: unknown) {
		console.error('Error updating favorite services:', error);
		throw new Error(String(error));
	}
}
/**
 * List user's favorite services.
 *
 * @param {string} user_id - The ID of the user.
 * @returns {Promise<object[]>} The user's favorite services.
 */
export async function listFavoriteServices(user_id: string): Promise<UserFavoriteServiceLinkResponse[]> {
	try {
		const rows = await prisma.user_favorite_service_links.findMany({
			where: { user_id },
			include: { services: true },
			orderBy: { created_at: 'desc' },
		});

		return toUserFavoriteServiceLinkList(rows as unknown[]);
	} catch (error: unknown) {
		console.error('Error listing favorite services:', error);
		throw new Error(String(error));
	}
}

export default {
	updateFavoriteServices,
	listFavoriteServices,
};
