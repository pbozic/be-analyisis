import prisma from '../prisma/prisma.js';
import UserDao from './User.js';
import { SERVICE_TYPE } from '../lib/constants.js';
import { createCustomer } from '../lib/stripe.js';
const getAllBusinessUsers = async () => {
	try {
		return await prisma.business_users.findMany({
			include: {
				users: true,
				business: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving all business users:', error);
		throw new Error(error);
	}
};
const getBusinessUserByUserId = async (userId) => {
	try {
		return await prisma.business_users.findFirst({
			where: {
				user_id: userId,
			},
			include: {
				business: {
					include: {
						business_users: {
							where: {
								user_id: {
									not: userId,
								},
							},
							include: {
								users: true,
								allowance: true,
							},
						},
						business_clients: true,
						business_local_locations: {
							where: {
								time: {
									gte: new Date(),
								},
							},
							include: {
								local_location: {
									include: {
										address: true,
									},
								},
							},
							orderBy: {
								time: 'asc',
							},
						},
					},
				},
				allowance: true,
				operating_address: true,
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
				users: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving business users by business ID:', error);
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
						users: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error retrieving business users by business type:', error);
		throw new Error(error);
	}
};
const getAllBusinessUsersForBusinessByCompanyRole = async (business_id, company_role) => {
	try {
		return await prisma.business_users.findMany({
			where: {
				business_id,
				company_role,
			},
			include: {
				users: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving business users by company role:', error);
		throw new Error(error);
	}
};
const createBusinessUser = async (userData, business_id, createNewUser = true, tx = prisma) => {
	try {
		let stripeCustomer = await createCustomer(
			userData.data.email,
			userData.data.first_name + ' ' + userData.data.last_name,
			userData.data.telephone
		);
		userData.data.date_of_birth = new Date(userData.data.date_of_birth);
		const userObj = {
			...userData.data,
			stripe_customer_id: stripeCustomer.id,
		};
		let user;
		if (createNewUser) {
			user = await UserDao.createNewUser(userObj, true, tx);
			if (!user) {
				throw new Error('Failed to create user for new driver');
			}
		} else {
			console.log('Creating business user without creating a new user');
			user = await UserDao.getUserByTelephone(userData.data.telephone);
			console.log('User found by telephone:', user);
		}
		const businessUser = await tx.business_users.create({
			data: {
				business_id,
				user_id: user.user_id,
				company_role: userData.data.company_role,
			},
		});
		return { user, businessUser };
	} catch (error) {
		console.error('Error creating a business user:', error);
		throw new Error(error);
	}
};
const removeBusinessUser = async (business_users_id) => {
	try {
		return await prisma.business_users.delete({
			where: { business_users_id },
		});
	} catch (error) {
		console.error('Error removing a business user:', error);
		throw new Error(error);
	}
};
const updateBusinessUser = async (business_users_id, updates) => {
	try {
		return await prisma.business_users.update({
			where: { business_users_id },
			data: updates,
		});
	} catch (error) {
		console.error('Error updating business user:', error);
		throw new Error(error);
	}
};
const updateCompanyRole = async (business_users_id, company_role) => {
	try {
		return await prisma.business_users.update({
			where: { business_users_id },
			data: { company_role },
		});
	} catch (error) {
		console.error('Error updating company role:', error);
		throw new Error(error);
	}
};
async function addOperatingAddress(business_users_id, address_id) {
	try {
		return await prisma.business_users.update({
			where: { business_users_id },
			data: { operating_address_id: address_id },
		});
	} catch (error) {
		console.error('Error updating business user:', error);
		throw new Error(error);
	}
}
const updateBusinessUserOnlineStatus = async (business_users_id, online) => {
	try {
		return await prisma.business_users.update({
			where: { business_users_id },
			data: { online: online },
			include: {
				business: true,
			},
		});
	} catch (error) {
		console.error("Error setting delivery driver's online status:", error);
		throw new Error(error);
	}
};
const updateAllowance = async (business_users_id, wallet, purchase_order, type) => {
	const updateData = {};
	switch (type) {
		case SERVICE_TYPE.TAXI:
			updateData.amount_taxi_wallet = wallet;
			updateData.amount_taxi_purchase_order = purchase_order;
			break;
		case SERVICE_TYPE.TRANSFER:
			updateData.amount_transfer_wallet = wallet;
			updateData.amount_transfer_purchase_order = purchase_order;
			break;
		case SERVICE_TYPE.DELIVERY:
			updateData.amount_delivery_wallet = wallet;
			updateData.amount_delivery_purchase_order = purchase_order;
			break;
		case SERVICE_TYPE.ANY:
			updateData.amount_any_wallet = wallet;
			updateData.amount_any_purchase_order = purchase_order;
			break;
		default:
			throw new Error('Invalid allowance type given');
	}
	await prisma.allowances.upsert({
		where: { business_users_id },
		update: updateData,
		create: { business_users_id, ...updateData },
	});
	const business_user = await prisma.business_users.findUnique({
		where: { business_users_id },
		include: { allowance: true },
	});
	return business_user;
};
export { getAllBusinessUsers };
export { getBusinessUserByUserId };
export { getBusinessUsersByBusinessId };
export { getBusinessUsersByBusinessType };
export { getAllBusinessUsersForBusinessByCompanyRole };
export { createBusinessUser };
export { removeBusinessUser };
export { updateBusinessUser };
export { updateCompanyRole };
export { addOperatingAddress };
export { updateBusinessUserOnlineStatus };
export { updateAllowance };
export default {
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
	updateBusinessUserOnlineStatus,
	updateAllowance,
};
