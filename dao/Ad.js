const prisma = require('../prisma/prisma');

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
async function createAd(ad) {
	try {
		return prisma.ads.create({
			data: ad,
		});
	} catch (error) {
		return new Error(error);
	}
}

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
