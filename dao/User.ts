import bcrypt from 'bcrypt';
import { ACCOUNT_ACTIONS, ACCOUNT_ACTIONS_REASON, SERVICES, Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { createDocument, linkDocumentToTransaction } from './Document.js';
import { addFileToDocument } from './File.js';
import S3Helper from '../lib/s3.js';
import { USER_ROLE } from '../lib/constants.js';
import { USER_ROLES } from '../prisma/schemas/interfaces.js';
import WalletFundsDao from './WalletFunds.js';
import type {
	UserBase,
	UserListResponse,
	UserResponse,
	UserWithAddressesResponse,
	UserWithReferralsResponse,
} from '../schemas/dto/User/index.js';
import type { TransactionResponse } from '../schemas/dto/User/index.js';
import { UserPassword } from '../schemas/dto/User/user.js';
import { UserLoginResponse } from '../schemas/dto/Auth/AuthResponse.dto.js';
import {
	userAddressesInclude,
	userCreationInclude,
	userLoginInclude,
	tokenWithUserInclude,
	userAddressesAndConnectionsInclude,
	UserAddressesPrisma,
	UserAddressesAndConnectionsCreationPrisma,
	UserLoginPrisma,
} from '../prisma/includes/user.js';
import {
	toUserWithAddressesResponse,
	toUserLoginResponse,
	toUsersListResponse,
	toUserWithAddressesResponseList,
	toUserResponse,
} from '../schemas/dto/User/user.mappers.js';
import { WalletFundsBase } from '../schemas/dto/WalletFunds';

declare const process: {
	env: {
		BCRYPT_SALT_ROUNDS?: string;
		[key: string]: string | undefined;
	};
};

// interface FindUniqueArgs {
// 	where?: any;
// 	include?: any;
// 	select?: any;
// }

/**
 * Get personal users by user role, parent user, and disabled status.
 *
 * @param {USER_ROLES} user_role - User role.
 * @param {string | null} parent_user - Parent user ID.
 * @param {boolean} disabled - Disabled status.
 * @returns {Promise<UserResponse[]>} Personal users.
 */
const getPersonalUsers = async (
	user_role: USER_ROLES,
	parent_user: string | null,
	disabled: boolean
): Promise<UserResponse[]> => {
	try {
		const users = (await prisma.users.findMany({
			where: {
				user_role,
				parent_user,
				disabled,
			},
			include: userAddressesInclude,
		})) as UserAddressesPrisma[];
		return toUserWithAddressesResponseList(users);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get personal users');
	}
};

// /**
//  * Get a user by id including business user and address info.
//  *
//  * @param {string} user_id - User ID.
//  * @param {FindUniqueArgs} args - Additional Prisma args to merge.
//  * @returns {Promise<UserWithFavouritesResponse | null>} User or null.
//  */
// const getUserById = async (user_id: string, args?: FindUniqueArgs): Promise<UserWithFavouritesResponse | null> => {
// 	try {
// 		return (await prisma.users.findUnique({
// 			where: {
// 				user_id: user_id,
// 			},
// 			include: {
// 				business_users: {
// 					include: {
// 						business: {
// 							include: {
// 								address: true,
// 							},
// 						},
// 					},
// 				},
// 			},
// 			...args,
// 		})) as UserWithFavouritesResponse | null;
// 	} catch (error) {
// 		throw new Error(error instanceof Error ? error.message : 'Failed to get user by ID');
// 	}
// };

const getUserById = async (user_id: string): Promise<UserResponse | null> => {
	try {
		const user = await prisma.users.findUnique({
			where: {
				user_id,
			},
		});
		return toUserResponse(user);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get user by ID');
	}
};

/**
 * Retrieve a user by their unique user ID, including associated business user and address information.
 *
 * @param {string} user_id - The unique identifier of the user to retrieve.
 * @param {FindUniqueArgs} [args] - Optional Prisma arguments to customize the query (e.g., for including extra relations).
 * @returns {Promise<UserListResponse | null>} The user object with business_users and business address included, or null if not found.
 * @throws {Error} Throws if the query fails or if there is an issue retrieving the user data.
 */

const getAllUsersWithAddressesAndConnections = async (): Promise<UserListResponse> => {
	try {
		const users = (await prisma.users.findMany({
			include: userAddressesAndConnectionsInclude,
		})) as UserAddressesAndConnectionsCreationPrisma[];
		return toUsersListResponse(users);
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get users with addresses and connections');
	}
};

/**
 * Get a user by id for login/registration.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<UserWithFavouritesResponse | null>} User or null.
 */
const getUserByIdForLogin = async (user_id: string): Promise<UserLoginResponse | null> => {
	try {
		const user = (await prisma.users.findUnique({
			where: {
				user_id: user_id,
			},
			include: userLoginInclude,
		})) as UserLoginPrisma | null;
		return user ? toUserLoginResponse(user) : null;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get user by ID');
	}
};

/**
 * Get a user's password by user ID.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<string | null>} Password or null.
 */
const getPasswordByUserId = async (user_id: string): Promise<string | null> => {
	try {
		return (await prisma.users.findUnique({
			where: {
				user_id: user_id,
			},
			select: { password: true },
		})) as string | null;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get password by user ID');
	}
};

/**
 * Get a user by their referral code.
 *
 * @param {string} code - The referral code.
 * @param {FindUniqueArgs} args - Additional Prisma args.
 * @returns {Promise<UserResponse | null>} User or null.
 */
const getUserByReferralCode = async (code: string): Promise<UserWithReferralsResponse | null> => {
	try {
		return (await prisma.users.findUnique({
			where: {
				referral_code: code,
			},
		})) as UserWithReferralsResponse | null;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get user by referral code');
	}
};

/**
 * Get scheduled daily meal users, ordered by merchant daily_users_sorted if configured.
 *
 * @returns {Promise<UserWithAddressesResponse[]>} Scheduled users with addresses.
 */
const getScheduledUsers = async (): Promise<UserWithAddressesResponse[]> => {
	try {
		const merchantBusiness = await prisma.business.findFirst({
			where: {
				type: 'MERCHANT',
				offers_daily_meals: true,
			},
		});
		console.info('MERCHANT BUSINESSES', merchantBusiness);

		let sortingScheduledUsers: string[] | null = null;
		if (!merchantBusiness) {
			console.info('No merchant business found that offers daily meals');
		} else {
			sortingScheduledUsers = merchantBusiness.daily_users_sorted as string[] | null;
		}

		const scheduledUsersRaw = (await prisma.users.findMany({
			where: {
				subscribed_to_daily_meals: true,
			},
			include: userAddressesInclude,
		})) as UserAddressesPrisma[];

		const scheduledUsers = toUserWithAddressesResponseList(scheduledUsersRaw);

		if (sortingScheduledUsers && sortingScheduledUsers.length !== 0) {
			// Map user_id to user object for easy lookup
			const userMap = new Map(scheduledUsers.map((user) => [user.user_id, user]));
			console.info('ordered users', userMap);
			// Sort users based on the order in sortingScheduledUsers
			return sortingScheduledUsers
				.map((userId) => userMap.get(userId))
				.filter((user): user is UserWithAddressesResponse => user !== undefined);
		}
		console.info('scheduled_users', scheduledUsers);
		return scheduledUsers;
	} catch (error) {
		console.error('Error fetching and sorting scheduled users:', error);
		throw error;
	}
};
const getUserPassword = async (query: string): Promise<UserPassword> => {
	try {
		const user = (await prisma.users.findFirst({
			where: {
				OR: [
					{
						email: query,
					},
					{
						telephone: query,
					},
				],
			},
			select: { password: true, user_id: true },
		})) as UserPassword;
		return user;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get user password');
	}
};
/**
 * Find a user by matching email or telephone fields.
 *
 * @param {string} query - Email or telephone to match.
 * @param {FindFirstArgs} args - Additional Prisma args.
 * @returns {Promise<UserResponse | null>} User or null.
 */
const getUserByEmailOrTelephone = async (query: string): Promise<UserResponse | null> => {
	try {
		return (await prisma.users.findFirst({
			where: {
				OR: [
					{
						email: query,
					},
					{
						telephone: query,
					},
				],
			},
		})) as UserResponse | null;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get user by email or telephone');
	}
};

/**
 * Find a user by email.
 *
 * @param {string} query - Email.
 * @param {FindFirstArgs} args - Additional Prisma args.
 * @returns {Promise<UserResponse | null>} User or null.
 */
const getUserByEmail = async (query: string): Promise<UserResponse | null> => {
	try {
		return (await prisma.users.findFirst({
			where: {
				email: query,
			},
		})) as UserResponse | null;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get user by email');
	}
};

/**
 * Find a user by telephone.
 *
 * @param {string} query - Telephone string.
 * @param {FindFirstArgs} args - Additional Prisma args.
 * @returns {Promise<UserResponse | null>} User or null.
 */
const getUserByTelephone = async (query: string): Promise<UserResponse | null> => {
	try {
		console.log('getUserByTelephone called with query:', query);
		const user = (await prisma.users.findFirst({
			where: {
				telephone: query,
			},
		})) as UserResponse | null;
		console.log('User found by telephone:', user);
		return user;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get user by telephone');
	}
};

/**
 * Get reset token row with included user by token string.
 *
 * @param {string} resetToken - Reset token.
 * @param {FindUniqueArgs} args - Additional Prisma args.
 * @returns {Promise<any>} Token row or null.
 */
const getUserByResetToken = async (resetToken: string): Promise<any> => {
	try {
		return await prisma.tokens.findUnique({
			where: {
				token: resetToken,
			},
			include: tokenWithUserInclude,
		});
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to get user by reset token');
	}
};

/**
 * Update user general fields (excludes email, password, telephone, addresses, role).
 *
 * @param {string} user_id - User ID.
 * @param {Partial<UserBase>} user - Fields to update.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUser = async (user_id: string, user: Partial<UserBase>): Promise<UserResponse> => {
	try {
		// We do not allow the user to update their email, password, telephone, user_role, or addresses in a general update
		// we handle those separately
		const updateData = { ...user };
		delete (updateData as any).user_id;
		delete (updateData as any).telephone;
		delete (updateData as any).email;
		delete (updateData as any).password;
		delete (updateData as any).addresses;
		delete (updateData as any).user_role;

		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: updateData,
		})) as UserResponse;
	} catch (error) {
		console.log(error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update user');
	}
};

/**
 * Update user including adding address include for scheduled users.
 *
 * @param {string} user_id - User ID.
 * @param {Partial<UserBase>} user - Fields to update.
 * @returns {Promise<UserWithAddressesResponse>} Updated user with addresses included.
 */
const updateScheduledUser = async (user_id: string, user: Partial<UserBase>): Promise<UserWithAddressesResponse> => {
	try {
		const updatedUser = (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: user,
			include: userAddressesInclude,
		})) as UserAddressesPrisma;
		return toUserWithAddressesResponse(updatedUser);
	} catch (error) {
		console.log(error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update scheduled user');
	}
};

/**
 * Update user email.
 *
 * @param {string} user_id - User ID.
 * @param {string} email - New email.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateEmail = async (user_id: string, email: string): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				email,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update email');
	}
};

/**
 * Update user telephone fields.
 *
 * @param {string} user_id - User ID.
 * @param {object} telephone - Telephone fields (telephone, telephone_code).
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateTelephone = async (
	user_id: string,
	telephone: { telephone?: string; telephone_code?: string }
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: telephone,
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update telephone');
	}
};

/**
 * Update user password (hashed upstream).
 *
 * @param {string} user_id - User ID.
 * @param {string} password - Hashed password.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserPassword = async (user_id: string, password: string): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				password,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update password');
	}
};

/**
 * Update user role.
 *
 * @param {string} user_id - User ID.
 * @param {string} user_role - Role enum value.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserType = async (user_id: string, user_role: string): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				user_role,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update user type');
	}
};

/**
 * Update taxi preferences JSON for user.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} taxiPreferences - JSON preferences.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserTaxiPreferences = async (
	user_id: string,
	taxiPreferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { taxi_preferences: taxiPreferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update taxi preferences');
	}
};

/**
 * Update user's date of birth.
 *
 * @param {string} user_id - User ID.
 * @param {string | Date} dateOfBirth - Date of birth.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserDateOfBirth = async (user_id: string, dateOfBirth: string | Date): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { date_of_birth: dateOfBirth },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update date of birth');
	}
};

/**
 * Suspend/unsuspend user and log account action in a transaction.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} disabled - Disabled flag.
 * @param {string} action_creator_user_id - Admin user ID.
 * @param {string} reason - Reason text.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserDisabled = async (
	user_id: string,
	disabled: boolean,
	action_creator_user_id: string,
	reason: ACCOUNT_ACTIONS_REASON
): Promise<UserResponse> => {
	try {
		return (await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			const updatedUser = await tx.users.update({
				where: { user_id },
				data: { disabled },
			});
			await tx.account_actions.create({
				data: {
					user: { connect: { user_id } },
					action_creator: { connect: { user_id: action_creator_user_id } },
					reason,
					action: disabled ? ACCOUNT_ACTIONS.SUSPEND : ACCOUNT_ACTIONS.UNSUSPEND,
				},
			});
			return updatedUser;
		})) as UserResponse;
	} catch (error) {
		console.error('Error updating user disabled status:', error);
		throw new Error('Failed to update user status');
	}
};

/**
 * Update general notification preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} notificationPreferences - Preferences JSON.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserNotificationPreferences = async (
	user_id: string,
	notificationPreferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { notification_preferences: notificationPreferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update notification preferences');
	}
};

/**
 * Update taxi push notification preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} pushNotificationPreferences - Preferences JSON.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserTaxiPushNotifications = async (
	user_id: string,
	pushNotificationPreferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { taxi_push_notification_preferences: pushNotificationPreferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update taxi push notifications');
	}
};

/**
 * Update transfer push notification preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} pushNotificationPreferences - Preferences JSON.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserTransferPushNotifications = async (
	user_id: string,
	pushNotificationPreferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { transfer_push_notification_preferences: pushNotificationPreferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update transfer push notifications');
	}
};

/**
 * Update delivery push notification preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} pushNotificationPreferences - Preferences JSON.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserDeliveryPushNotifications = async (
	user_id: string,
	pushNotificationPreferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { delivery_push_notification_preferences: pushNotificationPreferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update delivery push notifications');
	}
};

/**
 * Update spicy preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} spicyPreferences - Preferences JSON.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserSpicyPreferences = async (
	user_id: string,
	spicyPreferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { spicy_preferences: spicyPreferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update spicy preferences');
	}
};

/**
 * Update transfer preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} transfer_preferences - Preferences JSON.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserTransferPreferences = async (
	user_id: string,
	transfer_preferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { transfer_preferences: transfer_preferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update transfer preferences');
	}
};

/**
 * Update radio preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} radioPreferences - Preferences JSON.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserRadioPreferences = async (
	user_id: string,
	radioPreferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { radio_preferences: radioPreferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update radio preferences');
	}
};

/**
 * Update allergies preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {Record<string, any>} allergiesPreferences - Preferences JSON.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserAllergiesPreferences = async (
	user_id: string,
	allergiesPreferences: Record<string, any>
): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { allergies_preferences: allergiesPreferences },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update allergies preferences');
	}
};

/**
 * Set phone verified flag.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} telephoneVerified - Verified flag.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserTelephoneVerified = async (user_id: string, telephoneVerified: boolean): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: { user_id },
			data: { phone_verified: telephoneVerified },
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update telephone verified');
	}
};

/**
 * Create a new user; optionally hash password and enforce unique email; drivers inactive by default.
 *
 * @param {Partial<UserBase>} user - User payload.
 * @param {boolean} [hashPassword=false] - Whether to hash user.password.
 * @param {Prisma.TransactionClient} [tx=prisma] - Prisma transaction/client.
 * @returns {Promise<UserResponse>} Created user with relations.
 */
const createNewUser = async (
	user: Partial<UserBase>,
	hashPassword: boolean = false,
	tx: any = prisma
): Promise<UserResponse> => {
	try {
		let newUser = { ...user };
		if (newUser?.user_role && [USER_ROLE.DRIVER, USER_ROLE.DELIVERY_DRIVER].includes(newUser?.user_role)) {
			newUser.active = false;
		}

		// Check if password hashing is needed
		if (hashPassword && user.password) {
			const hash = await bcrypt.hash(user.password, Number(process.env.BCRYPT_SALT_ROUNDS || '12'));
			let email = '';
			if (user.email) {
				email = user.email.toLowerCase();
			}
			const exists = await prisma.users.findFirst({
				where: {
					email: email,
				},
			});
			if (exists) {
				throw new Error('User with that email already exists');
			}
			// Replace the plain text password with the hashed password
			newUser = {
				...user,
				email,
				password: hash,
			};
			delete (newUser as any).confirm_password;
		}

		// Create the user with the potentially hashed password
		return (await tx.users.create({
			data: newUser,
			include: userCreationInclude,
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to create new user.');
	}
};

/**
 * Delete user by id.
 *
 * @param {string} userId - User ID.
 * @returns {Promise<UserResponse>} Deleted user.
 */
async function deleteUserByUserId(userId: string): Promise<UserResponse> {
	try {
		return (await prisma.users.delete({
			where: {
				user_id: userId,
			},
		})) as UserResponse;
	} catch (error) {
		console.error('Error deleting user:', error);
		throw error;
	}
}

/**
 * Create wallet funds record for a user and optionally attach documents and upload files to S3.
 *
 * @param {string} userId - User ID.
 * @param {number} amount - Amount in currency units (not cents).
 * @param {any[]} documents - Optional documents array with base64 files to persist.
 * @returns {Promise<WalletFundsBase>} Created wallet funds transaction.
 */
const updateWalletBalance = async (userId: string, amount: number, documents?: any[]): Promise<WalletFundsBase> => {
	try {
		const newTransaction = await WalletFundsDao.createWalletFunds(userId, Math.round(amount * 100));

		if (documents && Array.isArray(documents)) {
			for (const file of documents) {
				const documentData = {
					document_type: file.document_type,
				};
				const newDocument = await createDocument(documentData);
				if (!newTransaction.transaction_id) throw new Error('Transaction ID is missing');
				await linkDocumentToTransaction(newDocument.document_id, newTransaction.transaction_id);
				const base64 = file.base64;
				delete file.base64;
				delete file.document_type;
				delete file.name;
				const newFile = await addFileToDocument(newDocument.document_id, file, newDocument.public);
				const key = S3Helper.getFileKey(newFile.file_id, file.mime_type);
				await S3Helper.SaveObject(
					key,
					base64,
					file.mime_type,
					{
						users: [userId],
					},
					newFile,
					newDocument.public
				);
			}
		}
		console.log('Funds added to wallet successfully');
		return newTransaction;
	} catch (error) {
		console.error('Error updating wallet balance:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update wallet balance');
	}
};

/**
 * Get transactions for a user.
 *
 * @param {string} userId - User ID.
 * @returns {Promise<TransactionResponse[]>} Transactions.
 */
const getTransactions = async (userId: string): Promise<TransactionResponse[]> => {
	try {
		return (await prisma.transactions.findMany({
			where: {
				user_id: userId,
			},
		})) as TransactionResponse[];
	} catch (error) {
		console.error('Error fetching transactions:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get transactions');
	}
};

/**
 * Update user's language preference.
 *
 * @param {string} user_id - User ID.
 * @param {string} language - Language code.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserLanguage = async (user_id: string, language: string): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				language: language,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update user language');
	}
};

/**
 * Anonymize user's personal data and mark phone as unverified.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<UserResponse>} Updated user.
 */
const wipeUserPersonalData = async (user_id: string): Promise<UserResponse> => {
	try {
		const disabled_count = await prisma.users.count({
			where: {
				disabled: true,
			},
		});
		const fake_number = String(disabled_count).padStart(10, '0');
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				first_name: null,
				last_name: null,
				email: null,
				telephone_code: '',
				telephone: fake_number,
				phone_verified: false,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to wipe user personal data');
	}
};

/**
 * Activate/deactivate user and log account action in a transaction.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} active - Active flag.
 * @param {string} action_creator_user_id - Admin user ID.
 * @param {string} reason - Reason text.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserActive = async (
	user_id: string,
	active: boolean,
	action_creator_user_id: string,
	reason: ACCOUNT_ACTIONS_REASON
): Promise<UserResponse> => {
	try {
		return (await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			const updatedUser = await tx.users.update({
				where: { user_id },
				data: { active },
			});
			await tx.account_actions.create({
				data: {
					user: { connect: { user_id } },
					action_creator: { connect: { user_id: action_creator_user_id } },
					action: active ? ACCOUNT_ACTIONS.UNSUSPEND : ACCOUNT_ACTIONS.SUSPEND,
					reason,
				},
			});
			return updatedUser;
		})) as UserResponse;
	} catch (error) {
		console.error('Error updating user active status:', error);
		throw new Error('Failed to update user active status');
	}
};

/**
 * Set Stripe customer id for user.
 *
 * @param {string} user_id - User ID.
 * @param {string} customer_id - Stripe customer id.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateStripeCustomerId = async (user_id: string, customer_id: string): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				stripe_customer_id: customer_id,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update Stripe customer ID');
	}
};

/**
 * Update user credit fields.
 *
 * @param {string} user_id - User ID.
 * @param {Partial<UserBase>} updateData - Fields to update.
 * @returns {Promise<UserResponse>} Updated user.
 */
const addCredits = async (user_id: string, updateData: Partial<UserBase>): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: updateData,
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to add credits');
	}
};

/**
 * Toggle marketing push notification preference.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} data - New value.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserMarketingNotifications = async (user_id: string, data: boolean): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				allow_marketing_push_notifications: data,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update marketing notifications');
	}
};

/**
 * Toggle ads personalization preference.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} data - New value.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserAdsPersonalization = async (user_id: string, data: boolean): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				allow_ads_personalization: data,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update ads personalization');
	}
};

/**
 * Toggle newsletter subscription.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} data - New value.
 * @returns {Promise<UserResponse>} Updated user.
 */
const updateUserNewsletter = async (user_id: string, data: boolean): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				allow_newsletter: data,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update newsletter');
	}
};

/**
 * Link one or more role rows to a user (supports transaction client).
 *
 * @param {string} user_id - User ID.
 * @param {any[]} roles - Role payloads to create and link.
 * @param {Prisma.TransactionClient} [tx=prisma] - Prisma transaction/client.
 * @returns {Promise<any[]>} Created role rows.
 */
const linkRolesToUser = async (user_id: string, roles: any[], tx: any = prisma): Promise<any[]> => {
	try {
		if (Array.isArray(roles)) {
			const user_roles = [];
			for (const role of roles) {
				const user_role = tx.user_roles.create({
					data: {
						...role,
						user: {
							connect: {
								user_id: user_id,
							},
						},
					},
				});
				user_roles.push(user_role);
			}
			return await Promise.all(user_roles);
		}
		return [];
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to link roles to user');
	}
};

const updateFavoriteServices = async (user_id: string, services: SERVICES[]): Promise<UserResponse> => {
	try {
		return (await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				user_favorite_service_links: services,
			},
		})) as UserResponse;
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Failed to update favorite services');
	}
};

export { getPasswordByUserId };
export { getUserByReferralCode };
export { getUserById };
export { getUserByIdForLogin };
export { getUserPassword };
export { getUserByEmailOrTelephone };
export { updateUser };
export { updateEmail };
export { updateUserLanguage };
export { updateUserPassword };
export { updateTelephone };
export { updateUserType };
export { updateUserDisabled };
export { updateStripeCustomerId };
export { createNewUser };
export { getUserByResetToken };
export { updateUserDateOfBirth };
export { updateUserTelephoneVerified };
export { updateUserTaxiPreferences };
export { updateUserNotificationPreferences };
export { updateUserTaxiPushNotifications };
export { updateUserSpicyPreferences };
export { updateUserAllergiesPreferences };
export { updateUserTransferPreferences };
export { updateUserRadioPreferences };
export { getUserByTelephone };
export { getScheduledUsers };
export { updateScheduledUser };
export { deleteUserByUserId };
export { updateUserDeliveryPushNotifications };
export { updateUserTransferPushNotifications };
export { getUserByEmail };
export { getTransactions };
export { updateWalletBalance };
export { updateUserActive };
export { wipeUserPersonalData };
export { addCredits };
export { updateUserMarketingNotifications };
export { updateUserAdsPersonalization };
export { updateUserNewsletter };
export { linkRolesToUser };
export { updateFavoriteServices };
export { getPersonalUsers };
export { getAllUsersWithAddressesAndConnections };
export default {
	getPersonalUsers,
	getUserByReferralCode,
	getUserById,
	getUserByIdForLogin,
	getUserPassword,
	getUserByEmailOrTelephone,
	updateUser,
	updateEmail,
	updateUserLanguage,
	updateUserPassword,
	updateTelephone,
	updateUserType,
	updateUserDisabled,
	updateStripeCustomerId,
	createNewUser,
	getUserByResetToken,
	updateUserDateOfBirth,
	updateUserTelephoneVerified,
	updateUserTaxiPreferences,
	updateUserNotificationPreferences,
	updateUserTaxiPushNotifications,
	updateUserSpicyPreferences,
	updateUserAllergiesPreferences,
	updateUserTransferPreferences,
	updateUserRadioPreferences,
	getUserByTelephone,
	getScheduledUsers,
	updateScheduledUser,
	deleteUserByUserId,
	updateUserDeliveryPushNotifications,
	updateUserTransferPushNotifications,
	getUserByEmail,
	getTransactions,
	updateWalletBalance,
	updateUserActive,
	wipeUserPersonalData,
	addCredits,
	updateUserMarketingNotifications,
	updateUserAdsPersonalization,
	updateUserNewsletter,
	linkRolesToUser,
	updateFavoriteServices,
	getAllUsersWithAddressesAndConnections,
	getPasswordByUserId,
};
