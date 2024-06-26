const prisma = require("../prisma/prisma");
const bcrypt = require("bcrypt");

const getUsers = async (args) => {
	try {
		return prisma.users.findMany({
			...args,
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
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};

const getUserByEmail = async (email, args) => {
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
const getUserByResetToken = async (resetToken, args) => {
	try {
		return prisma.tokens.findUnique({
			where: {
				token: resetToken,
			},
			include: { users: true },
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
			...args,
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
			},
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

const updateUserPushNotifications = async (user_id, pushNotificationPreferences) => {
	try {
		return await prisma.users.update({
			where: { user_id },
			data: { push_notification_preferences: pushNotificationPreferences },
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

		// Check if password hashing is needed
		if (hashPassword && user.password) {
			let hash = await bcrypt.hash(user.password, Number(process.env.BCRYPT_SALT_ROUNDS));

			// Replace the plain text password with the hashed password
			newUser = {
				...user,
				email: user.email.toLowerCase(),
				password: hash,
			};
		}

		// Create the user with the potentially hashed password
		return await prisma.users.create({
			data: newUser,
		});
	} catch (error) {
		throw new Error(error.message || 'Failed to create new user.');
	}
};
async function createWalletBalance(userId) { 
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

async function removeWalletBalance(userId, amountToSubtract, order_id) {
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
	  
			// Record transaction
			await transaction.transactions.create({
			  data: {
					user: { connect: { user_id: userId } },
					order: {
					  connect: { order_id: order_id },
					},
				amount: -amountToSubtract,
				type: 'DEBIT',
				description: 'Deducted funds from wallet',
			  },
			});
		  });
		  console.log('Funds deducted from wallet successfully');
		} catch (error) {
		  console.error('Error subtracting from wallet balance:', error);
		  throw error;
		}
}

module.exports = {
	getUsers,
	getUserById,
	getUserByEmail,
	getUser,
	updateUser,
	updateEmail,
	updateUserPassword,
	updateTelephone,
	updateUserType,
	createNewUser,
	getUserByResetToken,
	addToWalletBalance,
	removeWalletBalance,
	createWalletBalance
};
