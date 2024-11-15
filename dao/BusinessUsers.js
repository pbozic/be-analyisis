const prisma = require("../prisma/prisma");
const UserDao = require("./User");

const getAllBusinessUsers = async () => {
	try {
		return await prisma.business_users.findMany({
			include: {
				users: {
					include:{
						child_users: true,
						parent_user: true,
					}
				}, // Assuming you want to include details of the user
				business: true, // Assuming you want to include details of the business
			},
		});
	} catch (error) {
		console.error("Error retrieving all business users:", error);
		throw new Error(error);
	}
};

const getBusinessUserByUserId = async (userId) => {
	try {
		return await prisma.business_users.findMany({
			where: {
				user_id: userId,
			},
			include: {
				// users: {
				// 	include:{
				// 		child_users: true,
				// 		parent_user: true,
				// 	}
				// },
				business: {
					include:{
						business_users:{
							include:{
								users: {
									include:{
										child_users: {
											include:{
												child_user: true,
											}
										},
										parent_user: true,
									}
								}
							}
						}
					}
				},
			},
		});
	} catch (error) {
		console.error(`Error retrieving business users for user ID ${userId}:`, error);
		throw new Error(error);
	}
};

const getBusinessUsersByBusinessId = async (business_id) => {
	try {
		return await prisma.business_users.findMany({
			where: { business_id },
			include: {
				users: {
					include:{
						child_users: true,
						parent_user: true,
					}
				}
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
						users: {
							include:{
								child_users: true,
								parent_user: true,
							}
						}
					}
				}
			}
		});
	} catch (error) {
		console.error("Error retrieving business users by business type:", error);
		throw new Error(error);
	}
};

const getAllBusinessUsersForBusinessByCompanyRole = async (business_id, company_role) => {
	try {
		return await prisma.business_users.findMany({
			where: {
				business_id,
				company_role
			},
			include: {
				users: {
					include:{
						child_users: true,
						parent_user: true,
					}
				}
			}
		});
	} catch (error) {
		console.error("Error retrieving business users by company role:", error);
		throw new Error(error);
	}
};


const createBusinessUser = async (userData, business_id) => {
	try {
		const newUser = await UserDao.createNewUser(userData.data, true);
		if (!newUser) {
			throw new Error("Failed to create user for new driver");
		}

		const businessUser = await prisma.business_users.create({
			data: {
				business_id,
				user_id: newUser.user_id,
				company_role: userData.company_role,
			}
		});

		return { newUser, businessUser };
	} catch (error) {
		console.error("Error creating a business user:", error);
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
const updateCompanyRole = async (business_users_id, company_role) => {
	try {
		return await prisma.business_users.update({
			where: { business_users_id },
			data: { company_role }
		});
	} catch (error) {
		console.error("Error updating company role:", error);
		throw new Error(error);
	}
};

async function addOperatingAddress(business_users_id, address_id) {
	try {
		return await prisma.business_users.update({
			where: { business_users_id },
			data: { operating_address_id: address_id }
		});
	} catch (error) {
		console.error("Error updating business user:", error);
		throw new Error(error);
	}
}

const updateBusinessUserOnlineStatus = async (business_users_id, online) => {
	try {
		return await prisma.business_users.update({
			where: { business_users_id },
			data: { online: online },
		});
	} catch (error) {
		console.error("Error setting delivery driver's online status:", error);
		throw new Error(error);
	}
};




module.exports = {
	getAllBusinessUsers,
	getBusinessUserByUserId,
	getBusinessUsersByBusinessId,
	getBusinessUsersByBusinessType,
	getAllBusinessUsersForBusinessByCompanyRole,
	createBusinessUser,
	removeBusinessUser,
	updateBusinessUser,
	updateCompanyRole,
	addOperatingAddress,
	updateBusinessUserOnlineStatus
};