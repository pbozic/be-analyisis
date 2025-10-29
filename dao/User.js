import bcrypt from 'bcrypt';

import prisma from '../prisma/prisma.js';
import { createDocument, linkDocumentToTransaction } from './Document.js';
import { addFileToDocument } from './File.js';
import S3Helper from '../lib/s3.js';
import { USER_ROLE, ACCOUNT_ACTIONS } from '../lib/constants.js';
import WalletFundsDao from './WalletFunds.js';
/**
 * Get users with optional prisma args and child/parent includes.
 *
 * @param {object} args - Prisma findMany args.
 * @returns {Promise<object[]>} Users.
 */
const getUsers = async (args) => {
	try {
		return prisma.users.findMany({
			...args,
			include: {
				child_users: true,
				parent_user: true,
				...args?.include,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Get a user by id including business user and address info.
 *
 * @param {string} user_id - User ID.
 * @param {object} args - Additional Prisma args to merge.
 * @returns {Promise<object|null>} User or null.
 */
const getUserById = async (user_id, args) => {
	try {
		return prisma.users.findUnique({
			where: {
				user_id: user_id,
			},
			include: {
				business_users: {
					include: {
						business: {
							include: {
								address: true,
							},
						},
					},
				},
			},
			...args,
		});
	} catch (error) {
		throw new Error(error);
	}
};
/**
 * Get a user by referral code.
 *
 * @param {string} code - Referral code.
 * @param {object} args - Additional Prisma args.
 * @returns {Promise<object|null>} User or null.
 */
const getUserByReferralCode = async (code, args) => {
	try {
		return prisma.users.findUnique({
			where: {
				referral_code: code,
			},
			...args,
		});
	} catch (error) {
		throw new Error(error);
	}
};
/**
 * Get scheduled daily meal users, ordered by merchant daily_users_sorted if configured.
 *
 * @returns {Promise<object[]>} Scheduled users with addresses.
 */
const getScheduledUsers = async () => {
	try {
		const merchantBusiness = await prisma.business.findFirst({
			where: {
				type: 'MERCHANT',
				offers_daily_meals: true,
			},
		});
		console.info('MERCHANT BUSINESSES', merchantBusiness);
		let sortingScheduledUsers;
		if (!merchantBusiness) {
			console.info('No merchant business found that offers daily meals');
		} else {
			sortingScheduledUsers = merchantBusiness.daily_users_sorted;
		}
		const scheduledUsers = await prisma.users.findMany({
			where: {
				subscribed_to_daily_meals: true,
			},
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
			},
		});
		if (sortingScheduledUsers && sortingScheduledUsers.length !== 0) {
			// Map user_id to user object for easy lookup
			const userMap = new Map(scheduledUsers.map((user) => [user.user_id, user]));
			console.info('ordered users', userMap);
			// Sort users based on the order in sortingScheduledUsers
			return sortingScheduledUsers.map((userId) => userMap.get(userId)).filter((user) => user !== undefined);
		}
		console.info('scheduled_users', scheduledUsers);
		return scheduledUsers;
	} catch (error) {
		console.error('Error fetching and sorting scheduled users:', error);
		throw error;
	}
};
/**
 * Find a user by matching email or telephone fields.
 *
 * @param {string} query - Email or telephone to match.
 * @param {object} args - Additional Prisma args.
 * @returns {Promise<object|null>} User or null.
 */
const getUserByEmailOrTelephone = async (query, args) => {
	try {
		return prisma.users.findFirst({
			where: {
				OR: [
					{
						email: query,
					},
					{
						telephone: query,
					},
					{
						telephone_number: query,
					},
				],
			},
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Find a user by email.
 *
 * @param {string} query - Email.
 * @param {object} args - Additional Prisma args.
 * @returns {Promise<object|null>} User or null.
 */
const getUserByEmail = async (query, args) => {
	try {
		return prisma.users.findFirst({
			where: {
				email: query,
			},
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Find a user by telephone.
 *
 * @param {string} query - Telephone string.
 * @param {object} args - Additional Prisma args.
 * @returns {Promise<object|null>} User or null.
 */
const getUserByTelephone = async (query, args) => {
	try {
		console.log('getUserByTelephone called with query:', query);
		let user = await prisma.users.findFirst({
			where: {
				telephone: query,
			},
			...args,
		});
		console.log('User found by telephone:', user);
		return user;
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Get reset token row with included user by token string.
 *
 * @param {string} resetToken - Reset token.
 * @param {object} args - Additional Prisma args.
 * @returns {Promise<object|null>} Token row or null.
 */
const getUserByResetToken = async (resetToken, args) => {
	try {
		return prisma.tokens.findUnique({
			where: {
				token: resetToken,
			},
			include: {
				users: true,
			},
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Get a user by unique email.
 *
 * @param {string} email - Email.
 * @param {object} args - Additional Prisma args.
 * @returns {Promise<object|null>} User or null.
 */
const getUser = async (email, args) => {
	try {
		return prisma.users.findUnique({
			where: {
				email: email,
			},
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update user general fields (excludes email, password, telephone, addresses, role).
 *
 * @param {string} user_id - User ID.
 * @param {object} user - Fields to update.
 * @returns {Promise<object>} Updated user.
 */
const updateUser = async (user_id, user) => {
	try {
		// We do not allow the user to update their email, password, telephone, user_role, or addresses in a general update
		// we handle those separately
		delete user.user_id;
		delete user.telephone;
		delete user.email;
		delete user.password;
		delete user.addresses;
		delete user.user_role;
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				...user,
			},
		});
	} catch (error) {
		console.log(error);
		return new Error(error);
	}
};
/**
 * Update user including adding address include for scheduled users.
 *
 * @param {string} user_id - User ID.
 * @param {object} user - Fields to update.
 * @returns {Promise<object>} Updated user with addresses included.
 */
const updateScheduledUser = async (user_id, user) => {
	try {
		return await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				...user,
			},
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
			},
		});
	} catch (error) {
		console.log(error);
		return new Error(error);
	}
};
/**
 * Update user email.
 *
 * @param {string} user_id - User ID.
 * @param {string} email - New email.
 * @returns {Promise<object>} Updated user.
 */
const updateEmail = async (user_id, email) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				email,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update user telephone fields.
 *
 * @param {string} user_id - User ID.
 * @param {object} telephone - Telephone fields (telephone, telephone_code, telephone_number).
 * @returns {Promise<object>} Updated user.
 */
const updateTelephone = async (user_id, telephone) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				...telephone,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update user password (hashed upstream).
 *
 * @param {string} user_id - User ID.
 * @param {string} password - Hashed password.
 * @returns {Promise<object>} Updated user.
 */
const updateUserPassword = async (user_id, password) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				password,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update user role.
 *
 * @param {string} user_id - User ID.
 * @param {string} user_role - Role enum value.
 * @returns {Promise<object>} Updated user.
 */
const updateUserType = async (user_id, user_role) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				user_role,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update taxi preferences JSON for user.
 *
 * @param {string} user_id - User ID.
 * @param {object} taxiPreferences - JSON preferences.
 * @returns {Promise<object>} Updated user.
 */
const updateUserTaxiPreferences = async (user_id, taxiPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { taxi_preferences: taxiPreferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update user's date of birth.
 *
 * @param {string} user_id - User ID.
 * @param {string|Date} dateOfBirth - Date of birth.
 * @returns {Promise<object>} Updated user.
 */
const updateUserDateOfBirth = async (user_id, dateOfBirth) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { date_of_birth: dateOfBirth },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Suspend/unsuspend user and log account action in a transaction.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} disabled - Disabled flag.
 * @param {string} action_creator_user_id - Admin user ID.
 * @param {string} reason - Reason text.
 * @returns {Promise<object>} Updated user.
 */
const updateUserDisabled = async (user_id, disabled, action_creator_user_id, reason) => {
	try {
		return await prisma.$transaction(async (tx) => {
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
		});
	} catch (error) {
		console.error('Error updating user disabled status:', error);
		throw new Error('Failed to update user status');
	}
};
/**
 * Update general notification preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {object} notificationPreferences - Preferences JSON.
 * @returns {Promise<object>} Updated user.
 */
const updateUserNotificationPreferences = async (user_id, notificationPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { notification_preferences: notificationPreferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update taxi push notification preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {object} pushNotificationPreferences - Preferences JSON.
 * @returns {Promise<object>} Updated user.
 */
const updateUserTaxiPushNotifications = async (user_id, pushNotificationPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { taxi_push_notification_preferences: pushNotificationPreferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update transfer push notification preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {object} pushNotificationPreferences - Preferences JSON.
 * @returns {Promise<object>} Updated user.
 */
const updateUserTransferPushNotifications = async (user_id, pushNotificationPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { transfer_push_notification_preferences: pushNotificationPreferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update delivery push notification preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {object} pushNotificationPreferences - Preferences JSON.
 * @returns {Promise<object>} Updated user.
 */
const updateUserDeliveryPushNotifications = async (user_id, pushNotificationPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { delivery_push_notification_preferences: pushNotificationPreferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update spicy preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {object} spicyPreferences - Preferences JSON.
 * @returns {Promise<object>} Updated user.
 */
const updateUserSpicyPreferences = async (user_id, spicyPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { spicy_preferences: spicyPreferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update transfer preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {object} transfer_preferences - Preferences JSON.
 * @returns {Promise<object>} Updated user.
 */
const updateUserTransferPreferences = async (user_id, transfer_preferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { transfer_preferences: transfer_preferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update radio preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {object} radioPreferences - Preferences JSON.
 * @returns {Promise<object>} Updated user.
 */
const updateUserRadioPreferences = async (user_id, radioPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { radio_preferences: radioPreferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update allergies preferences JSON.
 *
 * @param {string} user_id - User ID.
 * @param {object} allergiesPreferences - Preferences JSON.
 * @returns {Promise<object>} Updated user.
 */
const updateUserAllergiesPreferences = async (user_id, allergiesPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { allergies_preferences: allergiesPreferences },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Set phone verified flag.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} telephoneVerified - Verified flag.
 * @returns {Promise<object>} Updated user.
 */
const updateUserTelephoneVerified = async (user_id, telephoneVerified) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { phone_verified: telephoneVerified },
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Create a new user; optionally hash password and enforce unique email; drivers inactive by default.
 *
 * @param {object} user - User payload.
 * @param {boolean} [hashPassword=false] - Whether to hash user.password.
 * @param {object} [tx=prisma] - Prisma transaction/client.
 * @returns {Promise<object>} Created user with relations.
 */
const createNewUser = async (user, hashPassword = false, tx = prisma) => {
	try {
		let newUser = user;
		if (newUser?.user_role && [USER_ROLE.DRIVER, USER_ROLE.DELIVERY_DRIVER].includes(newUser?.user_role)) {
			newUser.active = false;
		}
		// Check if password hashing is needed
		if (hashPassword && user.password) {
			let hash = await bcrypt.hash(user.password, Number(process.env.BCRYPT_SALT_ROUNDS));
			let email = '';
			if (user.email) {
				email = user.email.toLowerCase();
			}
			let exists = await prisma.users.findFirst({
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
			delete newUser.confirm_password;
		}
		// Create the user with the potentially hashed password
		return await tx.users.create({
			data: newUser,
			include: {
				child_users: true,
				parent_user: true,
				user_roles: true,
			},
		});
	} catch (error) {
		throw new Error(error.message || 'Failed to create new user.');
	}
};
// const createWalletBalance = async (userId) => {
// 	try {
// 	  return await prisma.walletBalance.create({
// 		data: {
// 		  user: { connect: { user_id: userId } },
// 		  balance: 0,
// 		},
// 	  });
// 	} catch (error) {
// 	  throw new Error(error.message || 'Failed to create wallet balance record.');
// 	}
// }
// /**
//  * Adds a specified amount(in cents) to the user's wallet balance and records the transaction while creating wallet funds and ocnnecting the two.
//  *
//  * This function performs the following operations within a single transaction:
//  * 1. Updates the user's wallet balance by incrementing it with the specified amount.
//  * 2. Creates a new transaction record that logs the addition of funds to the wallet and created the wallet_funds.
//  *
//  * @param {string} user_id - The unique identifier of the user whose wallet balance is to be updated.
//  * @param {number} amount_cents - The amount to be added to the wallet balance, specified in cents.
//  * @param {string} charge_id - The identifier for the charge associated with this transaction.
//  *
//  * @returns {Promise<Object>} - A promise that resolves to the newly created transaction object.
//  *
//  * @throws {Error} - Throws an error if the prisma transaction fails, which can occur due to issues
//  *                   such as invalid user ID, database connection problems, or other
//  *                   unforeseen errors during the transaction process.
//  */
// async function addToWalletBalance (user_id, amount_cents, charge_id) {
// 	try {
// 		return await prisma.$transaction(async (transaction) => {
// 			// Update wallet balance
// 			// await transaction.users.update({
// 			//   where: { user_id: user_id },
// 			//   data: {
// 			// 	wallet_balance: {
// 			// 	  increment: amount_cents/100,
// 			// 	},
// 			//   },
// 			// });
//
// 			// Record transaction
// 			const newTransaction = await transaction.transactions.create({
// 				data: {
// 					user: { connect: { user_id: user_id } },
// 					amount: amount_cents/100,
// 					type: 'CREDIT',
// 					description: 'Added funds to wallet',
// 					wallet_funds: {
// 						create: {
// 							charge_id: charge_id,
// 							amount: amount_cents,
// 							user:{connect:{user_id:user_id}},
// 						},
// 					},
// 				}
// 			});
//
// 		  	console.info('Funds added to wallet successfully');
// 			return newTransaction
// 		  });
// 	} catch (error) {
// 	  console.error('Error adding to wallet balance:', error);
// 	  throw error;
// 	}
//   };
// async function removeWalletBalance(userId, amountToSubtract, order_id, order_type = "delivery") {
// 	try {
// 		await prisma.$transaction(async (transaction) => {
// 			// Check current balance
// 			const user = await transaction.users.findUnique({ where: { user_id: userId } });
// 			if (user.walletBalance < amountToSubtract) {
// 			  throw new Error('Insufficient funds');
// 			}
//
// 			// Update wallet balance
// 			await transaction.users.update({
// 			  where: { user_id: userId },
// 			  data: {
// 				wallet_balance: {
// 				  decrement: amountToSubtract,
// 				},
// 			  },
// 			});
// 			if (order_type == "delivery") {
// 				//Record transaction
// 				await transaction.transactions.create({
// 					data: {
// 							user: { connect: { user_id: userId } },
// 							delivery_order: {
// 								connect: { order_id: order_id },
// 							},
// 						amount: -amountToSubtract,
// 						type: 'DEBIT',
// 						description: 'Deducted funds from wallet balance',
// 					},
// 				});
// 			} else {
// 				await transaction.transactions.create({
// 					data: {
// 							user: { connect: { user_id: userId } },
// 							taxi_order: {
// 								connect: { order_id: order_id },
// 							},
// 						amount: -amountToSubtract,
// 						type: 'DEBIT',
// 						description: 'Deducted funds from wallet balance',
// 					},
// 				});
// 			}
//
// 		  });
// 		  console.log('Funds deducted from wallet successfully');
// 		} catch (error) {
// 		  console.error('Error subtracting from wallet balance:', error);
// 		  throw error;
// 		}
// }
/**
 * Delete user by id.
 *
 * @param {string} userId - User ID.
 * @returns {Promise<object>} Deleted user.
 */
async function deleteUserByUserId(userId) {
	try {
		return await prisma.users.delete({
			where: {
				user_id: userId,
			},
		});
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
 * @param {object[]} documents - Optional documents array with base64 files to persist.
 * @returns {Promise<object>} Created wallet funds transaction.
 */
const updateWalletBalance = async (userId, amount, documents) => {
	try {
		const newTransaction = await WalletFundsDao.createWalletFunds(userId, Math.round(amount * 100));
		// const newTransaction = await addToWalletBalance(userId,Math.round(amount*100),null)//await WalletFundsDao.createWalletFunds(userId,null,Math.round(amount*100));
		// const updatedUser = await prisma.users.update({
		// 	where: { user_id: userId },
		// 	data: {
		// 		wallet_balance: {
		// 			increment: amount,
		// 		},
		// 	},
		// });
		// const newTransaction = await prisma.transactions.create({
		// 	data: {
		// 		user: { connect: { user_id: userId } },
		// 		amount: amount,
		// 		type: 'CREDIT',
		// 		description: 'Added funds to wallet',
		// 	},
		// });
		if (documents && Array.isArray(documents)) {
			for (const file of documents) {
				const documentData = {
					document_type: file.document_type,
				};
				const newDocument = await createDocument(documentData);
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
		throw new Error(error);
	}
};
/**
 * Get transactions for a user.
 *
 * @param {string} userId - User ID.
 * @returns {Promise<object[]>} Transactions.
 */
const getTransactions = async (userId) => {
	try {
		return await prisma.transactions.findMany({
			where: {
				user_id: userId,
			},
		});
	} catch (error) {
		console.error('Error fetching transactions:', error);
		throw new Error(error);
	}
};
/**
 * Update user's language preference.
 *
 * @param {string} user_id - User ID.
 * @param {string} language - Language code.
 * @returns {Promise<object>} Updated user.
 */
const updateUserLanguage = async (user_id, language) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				language: language,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Anonymize user's personal data and mark phone as unverified.
 *
 * @param {string} user_id - User ID.
 * @returns {Promise<object>} Updated user.
 */
const wipeUserPersonalData = async (user_id) => {
	try {
		const disabled_count = await prisma.users.count({
			where: {
				disabled: true,
			},
		});
		const fake_number = String(disabled_count).padStart(10, '0');
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				first_name: null,
				last_name: null,
				email: null,
				telephone_code: '',
				telephone_number: '',
				telephone: fake_number,
				phone_verified: false,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Activate/deactivate user and log account action in a transaction.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} active - Active flag.
 * @param {string} action_creator_user_id - Admin user ID.
 * @param {string} reason - Reason text.
 * @returns {Promise<object>} Updated user.
 */
const updateUserActive = async (user_id, active, action_creator_user_id, reason) => {
	try {
		return await prisma.$transaction(async (tx) => {
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
		});
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
 * @returns {Promise<object>} Updated user.
 */
const updateStripeCustomerId = async (user_id, customer_id) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				stripe_customer_id: customer_id,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Update user credit fields.
 *
 * @param {string} user_id - User ID.
 * @param {object} updateData - Fields to update.
 * @returns {Promise<object>} Updated user.
 */
const addCredits = async (user_id, updateData) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: updateData,
		});
	} catch (err) {
		return new Error(err);
	}
};
/**
 * Toggle marketing push notification preference.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} data - New value.
 * @returns {Promise<object>} Updated user.
 */
const updateUserMarketingNotifications = async (user_id, data) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				allow_marketing_push_notifications: data,
			},
		});
	} catch (err) {
		return new Error(err);
	}
};
/**
 * Toggle ads personalization preference.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} data - New value.
 * @returns {Promise<object>} Updated user.
 */
const updateUserAdsPersonalization = async (user_id, data) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				allow_ads_personalization: data,
			},
		});
	} catch (err) {
		return new Error(err);
	}
};
/**
 * Toggle newsletter subscription.
 *
 * @param {string} user_id - User ID.
 * @param {boolean} data - New value.
 * @returns {Promise<object>} Updated user.
 */
const updateUserNewsletter = async (user_id, data) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				allow_newsletter: data,
			},
		});
	} catch (err) {
		return new Error(err);
	}
};
/**
 * Link one or more role rows to a user (supports transaction client).
 *
 * @param {string} user_id - User ID.
 * @param {object[]} roles - Role payloads to create and link.
 * @param {object} [tx=prisma] - Prisma transaction/client.
 * @returns {Promise<object[]>} Created role rows.
 */
const linkRolesToUser = async (user_id, roles, tx = prisma) => {
	try {
		if (Array.isArray(roles)) {
			let user_roles = [];
			for (let role of roles) {
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
	} catch (err) {
		return new Error(err);
	}
};
export { getUsers };
export { getUserByReferralCode };
export { getUserById };
export { getUserByEmailOrTelephone };
export { getUser };
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
export default {
	getUsers,
	getUserByReferralCode,
	getUserById,
	getUserByEmailOrTelephone,
	getUser,
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
};
