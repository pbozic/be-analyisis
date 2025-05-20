const prisma = require('../prisma/prisma');

// Add a new favorite business for a user
const addFavoriteBusiness = async (user_id, business_id, business_type) => {
	try {
		return await prisma.user_favorite_businesses.create({
			data: {
				users: { connect: { user_id: user_id } },
				businesses: { connect: { business_id: business_id } },
				business_type,
			},
		});
	} catch (error) {
		console.error('Error adding favorite business:', error);
		throw new Error(error);
	}
};

// Remove a favorite business for a user
const removeFavoriteBusiness = async (user_favorite_businesses_id) => {
	try {
		return await prisma.user_favorite_businesses.delete({
			where: {
				user_favorite_businesses_id,
			},
		});
	} catch (error) {
		console.error('Error removing favorite business:', error);
		throw new Error(error);
	}
};

// Get many favorite businesses by type for a user
const getFavoriteBusinesses = async (user_id, business_type = null) => {
	try {
		const whereClause = {
			user_id,
		};

		if (business_type) {
			whereClause.business_type = business_type;
		}

		return await prisma.user_favorite_businesses.findMany({
			where: whereClause,
			include: {
				businesses: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving favorite businesses:', error);
		throw new Error(error);
	}
};

module.exports = {
	addFavoriteBusiness,
	removeFavoriteBusiness,
	getFavoriteBusinesses,
};
