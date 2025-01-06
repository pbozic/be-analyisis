const prisma = require("../prisma/prisma");
const bcrypt = require("bcrypt");
const { createDocument, linkDocumentToTransaction } = require("./Document");
const { addFileToDocument } = require("./File");
const S3Helper = require("../lib/s3");
const { USER_ROLE } = require("../lib/constants");
const WalletFundsDao = require("../dao/WalletFunds");

const getUsers = async (args) => {
	try {
		return prisma.users.findMany({
			...args,
			include: {
				child_users: true,
				parent_user: true,
				...args?.include
			}
		});
	} catch (error) {
		return new Error(error);
	}
};

const getUserById = async (user_id, args) => {
	try {
		return prisma.users.findUnique({
			where: {
				user_id: user_id,
			},
			...args
		});
	} catch (error) {
		throw new Error(error);
	}
};
const getScheduledUsers = async () => {
	try {
		const merchantBusiness = await prisma.business.findFirst({
			where: {
				type: 'MERCHANT',
				offers_daily_meals: true
			}
		});

		console.info('MERCHANT BUSINESSES', merchantBusiness)

		let sortingScheduledUsers;

		if (!merchantBusiness) {
			console.info('No merchant business found that offers daily meals');
		} else {
			sortingScheduledUsers = merchantBusiness.daily_users_sorted;
		}

		const scheduledUsers = await prisma.users.findMany({
			where: {
				subscribed_to_daily_meals: true
			},
			include: {
				addresses: {
					include: {
						address: true
					}
				}
			}
		});

		if (sortingScheduledUsers && sortingScheduledUsers.length !== 0) {

			// Map user_id to user object for easy lookup
			const userMap = new Map(scheduledUsers.map(user => [user.user_id, user]));
			console.info('ordered users', userMap)
			// Sort users based on the order in sortingScheduledUsers
			return sortingScheduledUsers
				.map(userId => userMap.get(userId))
				.filter(user => user !== undefined);
		}
		console.info('scheduled_users', scheduledUsers)
		return scheduledUsers

	} catch (error) {
		console.error("Error fetching and sorting scheduled users:", error);
		throw error;
	}
};



const getUserByEmailOrTelephone = async (query, args) => {
	try {
		return prisma.users.findFirst({
			where: {
				OR: [
				{
					email: query
				},
				{
					telephone: query
				},
				{
					telephone_number: query
				}
			]
				
			},
			...args
		});
	} catch (error) {
		return new Error(error);
	}
};
const getUserByEmail = async (query, args) => {
	try {
		return prisma.users.findFirst({
			where: {
				email: query
			},
			...args
		});
	} catch (error) {
		return new Error(error);
	}
};
const getUserByTelephone = async (query, args) => {
	try {
		return prisma.users.findFirst({
			where: {
				telephone: query
			},
			...args
		});
	} catch (error) {
		return new Error(error);
	}
};
const getUserByResetToken = async (resetToken, args) => {
	try {
		return prisma.tokens.findUnique({
			where: {
				token: resetToken,
			},
			include: {
				users: true
			},
			...args
		});
	} catch (error) {
		return new Error(error);
	}
}
const getUser = async (email, args) => {
	try {
		return prisma.users.findUnique({
			where: {
				email: email,
			},
			...args
		});
	} catch (error) {
		return new Error(error);
	}
};

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
			}
		});
	} catch (error) {
		console.log(error)
		return new Error(error);
	}
};

const updateScheduledUser =  async (user_id, user) => {
	try {
		return await prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				...user,
			},
			include: {
				addresses:{
					include: {
						address: true
					}
				}
			}
		});
	} catch (error) {
		console.log(error)
		return new Error(error);
	}
};

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
}
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

const updateUserDisabled = async (user_id, disabled) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				disabled: disabled,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};

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

const createNewUser = async (user, hashPassword = false) => {
	try {
		let newUser = user;
		if(newUser?.user_role && [USER_ROLE.DRIVER,USER_ROLE.DELIVERY_DRIVER].includes(newUser?.user_role)){
			newUser.active = false
		}

		// Check if password hashing is needed
		if (hashPassword && user.password) {
			let hash = await bcrypt.hash(user.password, Number(process.env.BCRYPT_SALT_ROUNDS));
			let email = "";
			if (user.email) {
				email = user.email.toLowerCase();
			}
			let exists = await prisma.users.findFirst({
				where: {
					email: email,
				},
			});
			if (exists) {
				throw new Error("User with that email already exists");
			}
			// Replace the plain text password with the hashed password
			newUser = {
				...user,
				email,
				password: hash,
			};
		}

		// Create the user with the potentially hashed password
		return await prisma.users.create({
			data: newUser,
			include: {
				child_users: true,
				parent_user: true,
			}
		});
	} catch (error) {
		throw new Error(error.message || 'Failed to create new user.');
	}
};
const createWalletBalance = async (userId) => {
	try {
	  return await prisma.walletBalance.create({
		data: {
		  user: { connect: { user_id: userId } },
		  balance: 0,
		},
	  });
	} catch (error) {
	  throw new Error(error.message || 'Failed to create wallet balance record.');
	}
}
async function addToWalletBalance (userId, amountToAdd) {
	try {
		await prisma.$transaction(async (transaction) => {
			// Update wallet balance
			await transaction.users.update({
			  where: { user_id: userId },
			  data: {
				wallet_balance: {
				  increment: amountToAdd,
				},
			  },
			});
	  
			// Record transaction
			await transaction.transactions.create({
			  data: {
				user: { connect: { user_id: userId } },
				amount: amountToAdd,
				type: 'CREDIT',
				description: 'Added funds to wallet',
			  },
			});
		  });
		  console.log('Funds added to wallet successfully');
	} catch (error) {
	  console.error('Error adding to wallet balance:', error);
	  throw error;
	}
  };

async function removeWalletBalance(userId, amountToSubtract, order_id, order_type = "delivery") {
	try {
		await prisma.$transaction(async (transaction) => {
			// Check current balance
			const user = await transaction.users.findUnique({ where: { user_id: userId } });
			if (user.walletBalance < amountToSubtract) {
			  throw new Error('Insufficient funds');
			}
	  
			// Update wallet balance
			await transaction.users.update({
			  where: { user_id: userId },
			  data: {
				wallet_balance: {
				  decrement: amountToSubtract,
				},
			  },
			});
			if (order_type == "delivery") {
				//Record transaction
				await transaction.transactions.create({
					data: {
							user: { connect: { user_id: userId } },
							delivery_order: {
								connect: { order_id: order_id },
							},
						amount: -amountToSubtract,
						type: 'DEBIT',
						description: 'Deducted funds from wallet',
					},
				});
			} else {
				await transaction.transactions.create({
					data: {
							user: { connect: { user_id: userId } },
							taxi_order: {
								connect: { order_id: order_id },
							},
						amount: -amountToSubtract,
						type: 'DEBIT',
						description: 'Deducted funds from wallet',
					},
				});
			}
			
		  });
		  console.log('Funds deducted from wallet successfully');
		} catch (error) {
		  console.error('Error subtracting from wallet balance:', error);
		  throw error;
		}
}

async function deleteUserByUserId(userId) {
	try {
		return await prisma.users.delete({
			where: {
				user_id: userId,
			},
		});
	} catch (error) {
		console.error("Error deleting user:", error);
		throw error;
	}
}

const updateWalletBalance = async (userId, amount, documents) => {
	try {
		const new_wallet_fund = await WalletFundsDao.createWalletFunds(userId,null,amount);

		const updatedUser = await prisma.users.update({
			where: { user_id: userId },
			data: {
				wallet_balance: {
					increment: amount,
				},
			},
		});

		const newTransaction = await prisma.transactions.create({
			data: {
				user: { connect: { user_id: userId } },
				amount: amount,
				type: 'CREDIT',
				description: 'Added funds to wallet',
			},
		});

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
				const newFile = await addFileToDocument(newDocument.document_id, file);

				const key = S3Helper.getFileKey(newFile.file_id, file.mime_type);
				await S3Helper.SaveObject(key, base64, file.mime_type, {
					users: [userId],
				}, file);
			}
		}
		console.log('Funds added to wallet successfully');
		return updatedUser
	} catch (error) {
		console.error("Error updating wallet balance:", error);
		throw new Error(error);
	}
};

const getTransactions = async (userId) => {
	try {
		return await prisma.transactions.findMany({
			where: {
				user_id: userId
			}
		});
	} catch (error) {
		console.error("Error fetching transactions:", error);
		throw new Error(error);
	}
}
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

const wipeUserPersonalData = async (user_id) => {
	try {
		const disabled_count = await prisma.users.count({
			where: {
				disabled: true,
			},
		})
		const fake_number = String(disabled_count).padStart(10, '0')
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				first_name: null,
				last_name: null,
				email: null,
				telephone_code: "",
				telephone_number: "",
				telephone: fake_number,
				phone_verified: false,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};

const updateUserActive = async (user_id, active) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				active: active,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};

module.exports = {
	getUsers,
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
	createNewUser,
	getUserByResetToken,
	addToWalletBalance,
	removeWalletBalance,
	createWalletBalance,
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
	wipeUserPersonalData
};
