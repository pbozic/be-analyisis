const prisma = require('../prisma/prisma');

/**
 * List all ads including analytics.
 *
 * @returns {Promise<object[]>} A promise resolving to an array of ads.
 */
async function listAds() {
	try {
		return prisma.ads.findMany({
			include: {
				ad_analytics: true,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}
/**
 * Create a new ad.
 *
 * @param {object} ad - Ad payload to create.
 * @returns {Promise<object>} The created ad.
 */
async function createAd(ad) {
	try {
		return prisma.ads.create({
			data: ad,
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * Find a single ad by ID, including analytics and image file data.
 *
 * @param {string} id - Ad ID.
 * @returns {Promise<object|null>} The ad record or null if not found.
 */
async function findAdByIdFull(id) {
	try {
		return prisma.ads.findUnique({
			where: {
				id,
			},
			include: {
				ad_analytics: true,
				image: {
					file: true,
				},
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * Find a single ad by ID.
 *
 * @param {string} id - Ad ID.
 * @returns {Promise<object|null>} The ad record or null if not found.
 */
async function findAdById(id) {
	try {
		return prisma.ads.findUnique({
			where: {
				id,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * Update an existing ad by ID.
 *
 * @param {string} id - Ad ID.
 * @param {object} ad - Partial ad fields to update.
 * @returns {Promise<object>} The updated ad.
 */
async function editAd(id, ad) {
	try {
		return prisma.ads.update({
			where: {
				id,
			},
			data: ad,
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * List ads created by a user.
 *
 * @param {string} userId - User ID.
 * @returns {Promise<object[]>} Matching ads.
 */
async function findAdsByUserId(userId) {
	try {
		return prisma.ads.findMany({
			where: {
				user_id: userId,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * List ads for a business.
 *
 * @param {string} businessId - Business ID.
 * @returns {Promise<object[]>} Matching ads.
 */
async function findAdsByBusinessId(businessId) {
	try {
		return prisma.ads.findMany({
			where: {
				business_id: businessId,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * List active ads by category (single or multiple).
 *
 * @param {string|string[]} categories - Category or categories to filter by.
 * @returns {Promise<object[]>} Matching active ads.
 */
async function findAdsByCategory(categories) {
	const category = Array.isArray(categories) ? categories : [categories];
	try {
		return prisma.ads.findMany({
			where: {
				category: {
					array_contains: category,
				},
				active: true,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * Mark an ad as inactive.
 *
 * @param {string} id - Ad ID.
 * @returns {Promise<object>} The updated ad.
 */
async function markAdInactive(id) {
	try {
		return prisma.ads.update({
			where: {
				id,
			},
			data: {
				active: false,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * Mark an ad as active.
 *
 * @param {string} id - Ad ID.
 * @returns {Promise<object>} The updated ad.
 */
async function markAdActive(id) {
	try {
		return prisma.ads.update({
			where: {
				id,
			},
			data: {
				active: true,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * Soft delete an ad by setting deleted_at.
 *
 * @param {string} id - Ad ID.
 * @returns {Promise<object>} The updated ad.
 */
async function deleteAd(id) {
	try {
		return prisma.ads.update({
			where: {
				id,
			},
			data: {
				deleted_at: new Date(),
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

/**
 * List all active ads.
 *
 * @returns {Promise<object[]>} Matching active ads.
 */
async function listActiveAds() {
	try {
		return prisma.ads.findMany({
			where: {
				active: true,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}

module.exports = {
	createAd,
	editAd,
	findAdById,
	findAdsByUserId,
	findAdsByBusinessId,
	findAdsByCategory,
	markAdInactive,
	markAdActive,
	deleteAd,
	listAds,
	listActiveAds,
	findAdByIdFull,
};
