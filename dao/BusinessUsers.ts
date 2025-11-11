import prisma from '../prisma/prisma.js';
import UserDao from './User.js';
import { SERVICE_TYPE } from '../lib/constants.js';
import { createCustomer } from '../lib/stripe.js';
import {
	toBusinessUserResponse,
	toBusinessUserWithBusinessResponse,
	toBusinessUsersList,
	toBusinessUserCreationResponse,
} from '../schemas/dto/BusinessUser/businessUser.mappers.js';
import type {
	BusinessUserBase,
	BusinessUserResponse,
	BusinessUserWithBusinessResponse,
	BusinessUserListResponse,
	BusinessUserCreationResponse,
} from '../schemas/dto/BusinessUser/index.js';
import type { BusinessUserWithBusinessPrisma, BusinessUserDefaultPrisma, BusinessUserWithAllowancePrisma, BusinessUserWithUsersPrisma } from '../prisma/includes/businessUsers.js';

// Define common query arg types
interface FindManyArgs {
	where?: any;
	include?: any;
	orderBy?: any;
	skip?: number;
	take?: number;
}

interface FindUniqueArgs {
	where?: any;
	include?: any;
}

type PrismaTransactionClient = any;

interface CreateBusinessUserData {
	data: {
		email: string;
		first_name: string;
		last_name: string;
		telephone: string;
		date_of_birth?: Date | string;
		company_role: string;
		[key: string]: any;
	};
}

/**
 * Get all business_user relations with included user and business.
 *
 * @returns {Promise<BusinessUserListResponse>} A promise resolving to an array of business_users records.
 */
const getAllBusinessUsers = async (): Promise<BusinessUserListResponse> => {
	try {
		const rows = await prisma.business_users.findMany({ include: { users: true, business: true, allowance: true, operating_address: true } });

		return toBusinessUsersList(rows as BusinessUserWithBusinessPrisma[]);
	} catch (error) {
		console.error('Error retrieving all business users:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get all business users');
	}
};

/**
 * Get the business_user relation for a given user, with related business context.
 *
 * @param {string} userId - The user ID to search by.
 * @returns {Promise<BusinessUserWithBusinessResponse | null>} A promise resolving to the business_user record or null.
 */
const getBusinessUserByUserId = async (userId: string): Promise<BusinessUserWithBusinessResponse | null> => {
	try {
		const row = await prisma.business_users.findFirst({
			where: { user_id: userId },
			include: {
				business: {
					include: {
						business_users: {
							where: { user_id: { not: userId } },
							include: { users: true, allowance: true },
						},
						business_clients: true,
						business_local_locations: {
							where: { time: { gte: new Date() } },
							include: { local_location: { include: { address: true } } },
							orderBy: { time: 'asc' },
						},
					},
				},
				allowance: true,
				operating_address: true,
			},
		});

		return row ? toBusinessUserWithBusinessResponse(row as BusinessUserWithBusinessPrisma) : null;
	} catch (error) {
		console.error(`Error retrieving business users for user ID ${userId}:`, error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business user by user ID');
	}
};

/**
 * List business users for a specific business.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<BusinessUserListResponse>} A promise resolving to matching business_users with users included.
 */
const getBusinessUsersByBusinessId = async (business_id: string): Promise<BusinessUserListResponse> => {
	try {
		const rows = await prisma.business_users.findMany({ where: { business_id }, include: { users: true } });

		return toBusinessUsersList(rows as BusinessUserWithUsersPrisma[]);
	} catch (error) {
		console.error('Error retrieving business users by business ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business users by business ID');
	}
};

/**
 * List businesses of a given type including their business users.
 *
 * @param {string} type - The business type.
 * @returns {Promise<any[]>} A promise resolving to businesses with nested business_users and users.
 */
const getBusinessUsersByBusinessType = async (type: string): Promise<any[]> => {
	try {
		return await prisma.business.findMany({ where: { type }, include: { business_users: { include: { users: true } } } });
	} catch (error) {
		console.error('Error retrieving business users by business type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business users by business type');
	}
};

/**
 * Get all business users for a business filtered by company role.
 *
 * @param {string} business_id - The business ID.
 * @param {string} company_role - The role to filter by.
 * @returns {Promise<BusinessUserListResponse>} A promise resolving to business_users records with users included.
 */
const getAllBusinessUsersForBusinessByCompanyRole = async (business_id: string, company_role: string): Promise<BusinessUserListResponse> => {
	try {
		const rows = await prisma.business_users.findMany({ where: { business_id, company_role }, include: { users: true } });

		return toBusinessUsersList(rows as BusinessUserWithUsersPrisma[]);
	} catch (error) {
		console.error('Error retrieving business users by company role:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business users by company role');
	}
};

/**
 * Create a business_user relation, optionally creating a new user and Stripe customer.
 *
 * @param {CreateBusinessUserData} userData - Payload containing user data and role.
 * @param {string} business_id - The business to attach the user to.
 * @param {boolean} createNewUser - Whether to create a new user or link an existing one.
 * @param {PrismaTransactionClient} tx - Optional Prisma transaction/client to use.
 * @returns {Promise<BusinessUserCreationResponse>} The created/linked user and business_user relation.
 */
const createBusinessUser = async (
	userData: CreateBusinessUserData, 
	business_id: string, 
	createNewUser: boolean = true, 
	tx: PrismaTransactionClient = prisma
): Promise<BusinessUserCreationResponse> => {
	try {
		const stripeCustomer = await createCustomer(
			userData.data.email,
			userData.data.first_name + ' ' + userData.data.last_name,
			userData.data.telephone
		) as any; // Stripe customer object
		
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
		
	const businessUser = await tx.business_users.create({ data: { business_id, user_id: user!.user_id, company_role: userData.data.company_role } });

		return toBusinessUserCreationResponse(user, businessUser as BusinessUserDefaultPrisma);
	} catch (error) {
		console.error('Error creating a business user:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create business user');
	}
};

/**
 * Remove a business_user relation by its ID.
 *
 * @param {string} business_users_id - The relation ID.
 * @returns {Promise<BusinessUserResponse>} The deleted business_user record.
 */
const removeBusinessUser = async (business_users_id: string): Promise<BusinessUserResponse> => {
	try {
		const row = await prisma.business_users.delete({ where: { business_users_id } });

		return toBusinessUserResponse(row as BusinessUserDefaultPrisma);
	} catch (error) {
		console.error('Error removing a business user:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to remove business user');
	}
};

/**
 * Update a business_user relation.
 *
 * @param {string} business_users_id - The relation ID.
 * @param {Partial<BusinessUserBase>} updates - Partial fields to update.
 * @returns {Promise<BusinessUserResponse>} The updated business_user record.
 */
const updateBusinessUser = async (business_users_id: string, updates: Partial<BusinessUserBase>): Promise<BusinessUserResponse> => {
	try {
		const row = await prisma.business_users.update({ where: { business_users_id }, data: updates });

		return toBusinessUserResponse(row as BusinessUserDefaultPrisma);
	} catch (error) {
		console.error('Error updating business user:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update business user');
	}
};

/**
 * Update the company role for a business_user relation.
 *
 * @param {string} business_users_id - The relation ID.
 * @param {string} company_role - The new company role.
 * @returns {Promise<BusinessUserResponse>} The updated business_user record.
 */
const updateCompanyRole = async (business_users_id: string, company_role: string): Promise<BusinessUserResponse> => {
	try {
		const row = await prisma.business_users.update({ where: { business_users_id }, data: { company_role } });

		return toBusinessUserResponse(row as BusinessUserDefaultPrisma);
	} catch (error) {
		console.error('Error updating company role:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update company role');
	}
};

/**
 * Set the operating address for a business_user relation.
 *
 * @param {string} business_users_id - The relation ID.
 * @param {string} address_id - The address ID to connect.
 * @returns {Promise<BusinessUserResponse>} The updated business_user record.
 */
const addOperatingAddress = async (business_users_id: string, address_id: string): Promise<BusinessUserResponse> => {
	try {
		const row = await prisma.business_users.update({ where: { business_users_id }, data: { operating_address_id: address_id } });

		return toBusinessUserResponse(row as BusinessUserDefaultPrisma);
	} catch (error) {
		console.error('Error updating business user:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to add operating address');
	}
};

/**
 * Update online status for a business_user (e.g., delivery driver online flag).
 *
 * @param {string} business_users_id - The relation ID.
 * @param {boolean} online - New online flag value.
 * @returns {Promise<BusinessUserResponse>} The updated business_user record with business included.
 */
const updateBusinessUserOnlineStatus = async (business_users_id: string, online: boolean): Promise<BusinessUserResponse> => {
	try {
		const row = await prisma.business_users.update({ where: { business_users_id }, data: { online: online }, include: { business: true } });

		return toBusinessUserWithBusinessResponse(row as BusinessUserWithBusinessPrisma);
	} catch (error) {
		console.error("Error setting delivery driver's online status:", error);
		throw new Error(error instanceof Error ? error.message : "Failed to update business user online status");
	}
};

/**
 * Upsert and update allowance amounts for a business_user based on service type.
 *
 * @param {string} business_users_id - The relation ID.
 * @param {number} wallet - Wallet amount limit.
 * @param {number} purchase_order - Purchase order amount limit.
 * @param {string} type - Service type (TAXI, TRANSFER, DELIVERY, ANY).
 * @returns {Promise<BusinessUserResponse>} The business_user with populated allowance.
 */
const updateAllowance = async (business_users_id: string, wallet: number, purchase_order: number, type: string): Promise<BusinessUserResponse> => {
	try {
		const updateData: any = {};
		
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
		
		const business_user = await prisma.business_users.findUnique({ where: { business_users_id }, include: { allowance: true } });

		if (!business_user) throw new Error('Business user not found after allowance update');

		return toBusinessUserResponse(business_user as BusinessUserWithAllowancePrisma);
	} catch (error) {
		console.error('Error updating allowance:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update allowance');
	}
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