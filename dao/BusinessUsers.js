import prisma from '../prisma/prisma.js';
import UserDao from './User.js';
import { SERVICE_TYPE } from '../lib/constants.js';
import { createCustomer } from '../lib/stripe.js';
/**
 * Get all business_user relations with included user and business.
 *
 * @returns {Promise<object[]>} A promise resolving to an array of business_users records.
 */
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
/**
 * Get the business_user relation for a given user, with related business context.
 *
 * @param {string} userId - The user ID to search by.
 * @returns {Promise<object|null>} A promise resolving to the business_user record or null.
 */
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
/**
 * List business users for a specific business.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<object[]>} A promise resolving to matching business_users with users included.
 */
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
/**
 * List businesses of a given type including their business users.
 *
 * @param {string} type - The business type.
 * @returns {Promise<object[]>} A promise resolving to businesses with nested business_users and users.
 */
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
/**
 * Get all business users for a business filtered by company role.
 *
 * @param {string} business_id - The business ID.
 * @param {string} company_role - The role to filter by.
 * @returns {Promise<object[]>} A promise resolving to business_users records with users included.
 */
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
/**
 * Create a business_user relation, optionally creating a new user and Stripe customer.
 *
 * @param {object} userData - Payload containing user data and role.
 * @param {string} business_id - The business to attach the user to.
 * @param {boolean} [createNewUser=true] - Whether to create a new user or link an existing one.
 * @param {object} [tx=prisma] - Optional Prisma transaction/client to use.
 * @returns {Promise<{user: object, businessUser: object}>} The created/linked user and business_user relation.
 */
const createBusinessUser = async (userData, business_id, createNewUser = true, tx = prisma) => {
	try {
		let stripeCustomer = await createCustomer(
			userData.data.email,
			userData.data.first_name + ' ' + userData.data.last_name,
			userData.data.telephone
		);
		userData.data.date_of_birth = userData.data?.date_of_birth ? new Date(userData.data.date_of_birth) : undefined;
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
			user = await UserDao.getUserByTelephone(userData.data.telephone);
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
/**
 * Remove a business_user relation by its ID.
 *
 * @param {string} business_users_id - The relation ID.
 * @returns {Promise<object>} The deleted business_user record.
 */
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
/**
 * Update a business_user relation.
 *
 * @param {string} business_users_id - The relation ID.
 * @param {object} updates - Partial fields to update.
 * @returns {Promise<object>} The updated business_user record.
 */
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
/**
 * Update the company role for a business_user relation.
 *
 * @param {string} business_users_id - The relation ID.
 * @param {string} company_role - The new company role.
 * @returns {Promise<object>} The updated business_user record.
 */
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
/**
 * Set the operating address for a business_user relation.
 *
 * @param {string} business_users_id - The relation ID.
 * @param {string} address_id - The address ID to connect.
 * @returns {Promise<object>} The updated business_user record.
 */
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
/**
 * Update online status for a business_user (e.g., delivery driver online flag).
 *
 * @param {string} business_users_id - The relation ID.
 * @param {boolean} online - New online flag value.
 * @returns {Promise<object>} The updated business_user record with business included.
 */
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
/**
 * Upsert and update allowance amounts for a business_user based on service type.
 *
 * @param {string} business_users_id - The relation ID.
 * @param {number} wallet - Wallet amount limit.
 * @param {number} purchase_order - Purchase order amount limit.
 * @param {string} type - Service type (TAXI, TRANSFER, DELIVERY, ANY).
 * @returns {Promise<object>} The business_user with populated allowance.
 */
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
