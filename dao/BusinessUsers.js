const prisma = require("../prisma/prisma");

const getAllBusinessUsers = async () => {
	try {
		return await prisma.business_users.findMany({
			include: {
				users: true, // Assuming you want to include details of the user
				business: true, // Assuming you want to include details of the business
			},
		});
	} catch (error) {
		console.error("Error retrieving all business users:", error);
		throw new Error(error);
	}
};

const getBusinessUsersByBusinessId = async (business_id) => {
	try {
		return await prisma.business_users.findMany({
			where: { business_id },
			include: {
				users: true
			}
		});
	} catch (error) {
		console.error("Error retrieving business users by business ID:", error);
		throw new Error(error);
	}
};

const getBusinessUsersByBusinessType = async (type) => {
	try {
		return await prisma.business.findMany({
			where: { type },
			include: {
				business_users: {
					include: {
						users: true
					}
				}
			}
		});
	} catch (error) {
		console.error("Error retrieving business users by business type:", error);
		throw new Error(error);
	}
};

const addBusinessUser = async (business_id, user_id) => {
	try {
		return await prisma.business_users.create({
			data: {
				business_id,
				user_id
			}
		});
	} catch (error) {
		console.error("Error adding a business user:", error);
		throw new Error(error);
	}
};

const removeBusinessUser = async (business_users_id) => {
	try {
		return await prisma.business_users.delete({
			where: { business_users_id }
		});
	} catch (error) {
		console.error("Error removing a business user:", error);
		throw new Error(error);
	}
};

const updateBusinessUser = async (business_users_id, updates) => {
	try {
		return await prisma.business_users.update({
			where: { business_users_id },
			data: updates
		});
	} catch (error) {
		console.error("Error updating business user:", error);
		throw new Error(error);
	}
};


module.exports = {
	getAllBusinessUsers,
	getBusinessUsersByBusinessId,
	getBusinessUsersByBusinessType,
	addBusinessUser,
	removeBusinessUser,
	updateBusinessUser
};