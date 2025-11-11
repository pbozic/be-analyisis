import { MODULE, Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { FavoriteBusinessBase } from '../schemas/dto/FavoriteBusinesses/favorite-businesses.dto.js';

/**
 * Add a favorite business for a user.
 *
 * @param {string} user_id
 * @param {string} business_id
 * @param {MODULE} module
 * @returns {Promise<FavoriteBusinessBase>}
 */
export const addFavoriteBusiness = async (
	user_id: string,
	business_id: string,
	module: MODULE
): Promise<FavoriteBusinessBase> => {
	try {
		return await prisma.user_favorite_businesses.create({
			data: {
				users: { connect: { user_id: user_id } },
				businesses: { connect: { business_id: business_id } },
				module,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
};

/**
 * Remove a favorite business for a user.
 *
 * @param {string} user_favorite_businesses_id
 * @returns {Promise<void>}
 */
export const removeFavoriteBusiness = async (user_favorite_businesses_id: string): Promise<void> => {
	try {
		await prisma.user_favorite_businesses.delete({
			where: { user_favorite_businesses_id },
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
};

/**
 * Get favorite businesses for a user, optionally filtered by business type.
 *
 * @param {string} user_id
 * @param {MODULE|null} module
 * @returns {Promise<FavoriteBusinessBase[]>}
 */
export const getFavoriteBusinesses = async (
	user_id: string,
	module: MODULE | null = null
): Promise<FavoriteBusinessBase[]> => {
	try {
		const whereClause: any = { user_id };
		if (module) {
			whereClause.module = module;
		}
		return await prisma.user_favorite_businesses.findMany({
			where: whereClause,
			include: { businesses: true },
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
};

export default { addFavoriteBusiness, removeFavoriteBusiness, getFavoriteBusinesses };
