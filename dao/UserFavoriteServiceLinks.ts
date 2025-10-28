import prisma from '../prisma/prisma.js';

export async function updateFavoriteServices(user_id: string, service_ids: string[]) {
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

		return await Promise.all(upsertPromises);
	} catch (error: unknown) {
		console.error('Error updating favorite services:', error);
		throw new Error(String(error));
	}
}

// List user's favorite services
export async function listFavoriteServices(user_id: string) {
	try {
		return await prisma.user_favorite_service_links.findMany({
			where: { user_id },
			include: { services: true },
			orderBy: { created_at: 'desc' },
		});
	} catch (error: unknown) {
		console.error('Error listing favorite services:', error);
		throw new Error(String(error));
	}
}

export default {
	updateFavoriteServices,
	listFavoriteServices,
};
