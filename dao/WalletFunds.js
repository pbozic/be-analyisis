const prisma = require("../prisma/prisma");
const { CREDIT_STATUS, CASHBACK_STATUS, FUNDS_TYPE, SERVICE_TYPE} = require('../lib/constants');

/*
async function createWalletFunds(user_id, charge_id, amount){
	try {
		if(amount<=0){
			throw new Error("Amount must be greater than 0");
		}

		// const newWalletFund = await prisma.wallet_funds.create({
		// 	data: {
		// 		// user_id: user_id,
		// 		charge_id: charge_id,
		// 		amount: amount,
		// 		user:{connect:{user_id:user_id}},
		// 		transaction: {
		// 			create: {
		// 				user: { connect: { user_id: user_id } },
		// 				amount: amount/100,
		// 				type: 'CREDIT',
		// 				description: 'Added funds to wallet',
		// 			},
		// 		},
		// 	},
		// 	include: {
		// 		transactions: true,
		// 	},
		// });


		const newTransaction = await prisma.transactions.create({
			data: {
				user: { connect: { user_id: user_id } },
				amount: amount/100,
				type: 'CREDIT',
				description: 'Added funds to wallet',
				wallet_funds: {
					create: {
						charge_id: charge_id,
						amount: amount,
						user:{connect:{user_id:user_id}},
					},
				},
			},
			include: {
				wallet_funds: true,
			},
		});
		console.info("created wallet funds: ",newTransaction)

		// const newTransaction = await prisma.transactions.create({
		// 	data: {
		// 		user: { connect: { user_id: user_id } },
		// 		amount: amount,
		// 		type: 'CREDIT',
		// 		description: 'Added funds to wallet',
		// 	},
		// });
		// const newWalletFund = await prisma.wallet_funds.create({
		// 	data: {
		// 		// user_id: user_id,
		// 		charge_id: charge_id,
		// 		amount: amount,
		// 		user:{connect:{user_id:user_id}},
		// 		transaction_id: newTransaction.transaction_id
		// 	},
		// });
		// console.log(`Wallet fund created with ID: ${newWalletFund.wallet_funds_id}`);


		return newTransaction;
	} catch (error) {
		console.error('Error creating wallet fund:', error);
		throw error; // Rethrow the error for further handling if necessary
	}
}
 */

async function createWalletFunds(user_id, amount_cents, charge_id=null, transaction_type="CREDIT") {
	console.log("createWalletFunds ",user_id, amount_cents)
	return await prisma.transactions.create({
		data: {
			user: { connect: { user_id: user_id } },
			amount: amount_cents / 100,
			type: transaction_type,
			description: 'Added funds to wallet',
			wallet_funds: {
				create: {
					charge_id: charge_id,
					amount: amount_cents,
					user: { connect: { user_id: user_id } },
					type: FUNDS_TYPE.FUNDS
				},
			},
		}
	});
}

async function getAvailableWalletFunds(userId,order_type) {
	try {
		const walletFunds = await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
				type:order_type,
			},
			orderBy: [
				{ expires_at: { sort: 'asc', nulls: 'last' } },
				{ created_at: 'asc' }
			],
		});
		return walletFunds;
	} catch (error) {
		console.error("Error retrieving available wallet funds:", error);
		throw error;
	}
}

async function getReservedWalletFunds(userId,order_id) {
	try {
		const walletFunds = await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				reserved_order: order_id,
			},
			orderBy: {
				created_at: 'asc',
			},
		});
		return walletFunds;
	} catch (error) {
		console.error("Error retrieving reserved wallet funds:", error);
		throw error;
	}
}

async function getAllReservedWalletFunds() {
	try {
		const walletFunds = await prisma.wallet_funds.findMany({
			where: {
				reserved_order:{
					not: null
				},
				reserved_daily_meals_subscription: {
					not: null
				},
			},
			orderBy: {
				created_at: 'asc',
			},
		});
		return walletFunds;
	} catch (error) {
		console.error("Error retrieving all reserved wallet funds:", error);
		throw error;
	}
}

async function deleteWalletFunds(wallet_funds_id) {
	try {
		await prisma.wallet_funds.delete({
			where: {
				wallet_funds_id: wallet_funds_id,
			},
		});
		console.log(`Wallet fund with ID ${wallet_funds_id} has been deleted.`);
	} catch (error) {
		console.error(`Error deleting wallet fund with ID ${wallet_funds_id}:`, error);
		throw error;
	}
}

async function subtractFunds(walletFundsId, amount, order_id=null,service_type=null) {
	try {
		if(amount<=0){
			throw new Error("Subtract amount must be greater than 0");
		}

		const walletFund = await prisma.wallet_funds.findUnique({
			where: {
				wallet_funds_id: walletFundsId,
			},
		});

		if (!walletFund) {
			throw new Error("Wallet fund entry not found");
		}

		if (walletFund.amount < amount) { // Updated to use amount
			throw new Error("Insufficient funds");
		}

		let updatedWalletFund = await prisma.$transaction(async (tx) => {
			const updated_WF = await tx.wallet_funds.update({
				where: {
					wallet_funds_id: walletFundsId,
				},
				data: {
					amount: walletFund.amount - amount,
				},
			});

			console.info(`subtracted ${amount} from WF:\n${JSON.stringify(walletFund,null,2)}. ` )
			let order_connect_obj = {}
			switch (service_type) {
				case SERVICE_TYPE.TAXI:
					order_connect_obj = {taxi_order: { connect: { order_id: order_id } }}
					break
				case SERVICE_TYPE.DELIVERY:
					order_connect_obj = {delivery_order: { connect: { order_id: order_id } }}
					break
			}

			if(walletFund.reserved_order !== null){
				await tx.transactions.create({
					data: {
						user: { connect: { user_id: updated_WF.user_id } },
						amount: -amount/100,
						type: 'DEBIT',
						...order_connect_obj,
						description: 'Subtracted funds from wallet',
						wallet_funds: { connect: { wallet_funds_id: updated_WF.wallet_funds_id } },
					}
				});
			}

			return updated_WF;
		});
		if(updatedWalletFund.amount===0){
			updatedWalletFund = await deleteWalletFunds(updatedWalletFund.wallet_funds_id);
		}

		return updatedWalletFund;
	} catch (error) {
		console.error("Error subtracting funds:", error);
		throw error;
	}
}

async function reserveFunds(walletFundsId, reserveAmount, orderId, orderType = "order") {
	try {
		if(reserveAmount<=0){
			throw new Error("Reserve amount must be greater than 0");
		}
		const walletFund = await prisma.wallet_funds.findUnique({
			where: {
				wallet_funds_id: walletFundsId,
			},
		});

		if (!walletFund) {
			throw new Error("Wallet fund entry not found");
		}

		if (walletFund.reserved_order !== null) {
			throw new Error("Source wallet fund entry already reserved");
		}

		if (walletFund.amount < reserveAmount) {
			throw new Error("Insufficient funds");
		}

		// Update the existing wallet fund entry
		await subtractFunds(walletFund.wallet_funds_id, reserveAmount);

		// Check if a wallet fund with the same charge_id and reserved_order and type exists
		//TODO: maybe convert to findUnique?
		const existingReservedFund = await prisma.wallet_funds.findFirst({
			where: {
				user_id:walletFund.user_id,
				charge_id: walletFund.charge_id,
				...(orderType === "order" ? { reserved_order: orderId } : {}),
				...(orderType === "daily_meals_subscription" ? { reserved_daily_meals_subscription: orderId } : {}),
				reserved_business: orderId,
				expires_at: walletFund.expires_at,
				referral_id: walletFund.referral_id,
				type:walletFund.type,
			},
		});

		if (existingReservedFund) {
			// If it exists, update the existing entry
			const updatedFund = await prisma.wallet_funds.update({
				where: {
					wallet_funds_id: existingReservedFund.wallet_funds_id,
				},
				data: {
					amount: existingReservedFund.amount + reserveAmount, // Add the amount to the existing fund
				},
			});
			return updatedFund;
		} else {
			// If it does not exist, create a new wallet fund entry
			const newWalletFund = await prisma.wallet_funds.create({
				data: {
					user_id:walletFund.user_id,
					charge_id: walletFund.charge_id,
					...(orderType === "order" ? { reserved_order: orderId } : {}),
					...(orderType === "daily_meals_subscription" ? { reserved_daily_meals_subscription: orderId } : {}),
					expires_at: walletFund.expires_at,
					referral_id: walletFund.referral_id,
					type:walletFund.type,
					amount: reserveAmount,
				},
			});
			return newWalletFund;
		}
	} catch (error) {
		console.error("Error reserving funds:", error);
		throw error;
	}
}

async function releaseFunds(walletFundsId, releaseAmount) {
	try {
		if(releaseAmount<=0){
			throw new Error("Release amount must be greater than 0");
		}
		const walletFund = await prisma.wallet_funds.findUnique({
			where: {
				wallet_funds_id: walletFundsId,
			},
		});

		if (!walletFund) {
			throw new Error("Wallet fund entry not found");
		}

		if (walletFund.reserved_order===null &&  walletFund.reserved_business===null) {
			throw new Error("Source wallet fund entry is not reserved");
		}

		if (walletFund.amount < releaseAmount) {
			throw new Error("Insufficient funds");
		}

		const released_WF = await prisma.$transaction(async (tx) => {
			// await tx.users.update({
			// 	where: { user_id: walletFund.user_id },
			// 	data: {
			// 		wallet_balance: {
			// 			increment: releaseAmount/100,
			// 		},
			// 	},
			// });
			const amount_after_release = walletFund.amount - releaseAmount;
			console.log(walletFund.amount, releaseAmount,walletFund.amount - releaseAmount)
			if(amount_after_release===0){
				await tx.wallet_funds.delete({
					where: {
						wallet_funds_id: walletFundsId,
					}
				});
			}else{
				console.info("update response:",await tx.wallet_funds.update({
					where: {
						wallet_funds_id: walletFundsId,
					},
					data: {
						amount: amount_after_release,
					},
				}));
			}

			console.info(`released ${releaseAmount} from WF:\n${JSON.stringify(walletFund,null,2)}. ` )

			// Check if same wallet fund exists
			const existingFund = await tx.wallet_funds.findFirst({
				where: {
					user_id:walletFund.user_id,
					charge_id: walletFund.charge_id,
					reserved_order: walletFund.order_id,
					reserved_business: walletFund.reserved_business,
					expires_at: walletFund.expires_at,
					referral_id: walletFund.referral_id,
					type:walletFund.type,
				},
			});

			if (existingFund) {
				// If it exists, update the existing entry
				const updatedFund = await tx.wallet_funds.update({
					where: {
						wallet_funds_id: existingFund.wallet_funds_id,
					},
					data: {
						amount: existingFund.amount + releaseAmount,
					},
				});
				return updatedFund;
			} else {
				// If it does not exist, create a new wallet fund entry
				const newWalletFund = await tx.wallet_funds.create({
					data: {
						user_id:walletFund.user_id,
						charge_id: walletFund.charge_id,
						reserved_order: null,
						reserved_daily_meals_subscription: null,
						expires_at: walletFund.expires_at,
						referral_id: walletFund.referral_id,
						type:walletFund.type,
						amount: releaseAmount,
					},
				});
				return newWalletFund;
			}
		});

	} catch (error) {
		console.error("Error releasing funds:", error);
		throw error;
	}
}

async function getAvailableWalletBalance(userId) {
	try {
		const result = await prisma.wallet_funds.aggregate({
			where: {
				user_id: userId,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
				type: FUNDS_TYPE.FUNDS,
			},
			_sum: {
				amount: true
			}
		});

		return result._sum.amount || 0;
	} catch (error) {
		console.error("Error retrieving available wallet balance:", error);
		throw error;
	}
}

async function getAvailableWalletBalanceGroupedByType(userId) {
	try {
		const result = await prisma.wallet_funds.groupBy({
			by: ["type"], // Grouping by 'type'
			where: {
				user_id: userId,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
			},
			_sum: {
				amount: true
			}
		});

		// Convert result into a key-value pair object
		const balances = result.reduce((acc, row) => {
			acc[row.type] = row._sum.amount || 0; // Store balance by type
			return acc;
		}, {});

		return balances;
	} catch (error) {
		console.error("Error retrieving grouped wallet balance:", error);
		throw error;
	}
}

const createCredit = async (data) => {
	try {
		const expiryDate = new Date();
		expiryDate.setDate(expiryDate.getDate() + 30);
		expiryDate.setHours(23, 59, 59, 999);
		return await prisma.wallet_funds.create({
			data: {
				...data,
				expires_at: expiryDate,
			}
		});
	} catch (error) {
		throw error;
	}
}

const convertCashbacksToCredit = async (data, pendingCashbacks, expiryDate) => {
	try {
		return await prisma.$transaction(async (tx) => {
			const credit = await tx.wallet_funds.create({
				data: {
					...data,
					expires_at: expiryDate,
				}
			});
			await tx.cashback.updateMany({
				where: {
					cashback_id: {
						in: pendingCashbacks.map(cb => cb.cashback_id)
					}
				},
				data: {
					status: CASHBACK_STATUS.CONVERTED,
					converted_at: new Date(),
				}
			});
			return credit;
		});
	} catch (error) {
		throw error;
	}
}

const expireOutdatedCredits = async () => {
	const now = new Date();
	now.setHours(0, 0, 0, 0);

	try {
		return await prisma.wallet_funds.updateMany({
			where: {
				status: CREDIT_STATUS.ACTIVE,
				expires_at: {
					lt: now
				}
			},
			data: {
				status: CREDIT_STATUS.EXPIRED
			}
		});
	} catch (error) {
		console.error('Error expiring credits:', error);
		throw error;
	}
};

const findCreditsExpiringInDays = async (days) => {
	try {
		const endDateStart = new Date();
		const endDateEnd = new Date();
		endDateStart.setDate(endDateStart.getDate() + days);
		endDateStart.setHours(0, 0, 0, 0);
		endDateEnd.setDate(endDateEnd.getDate() + days);
		endDateEnd.setHours(23, 59, 59, 999);

		return prisma.wallet_funds.findMany({
			where: {
				status: CREDIT_STATUS.ACTIVE,
				expires_at: {
					gte: endDateStart,
					lte: endDateEnd
				}
			},
			include: {
				user: true
			}
		});
	} catch (error) {
		throw error;
	}
}

const getAvailableCreditsByType = async (userId, type) => {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				type: type,
				status: CREDIT_STATUS.ACTIVE,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
			}
		});
	} catch (error) {
		throw error;
	}
}

const getAvailableCreditsForOrder = async (userId, type) => {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				type: {
					in: [type, FUNDS_TYPE.CREDITS_ANY]
				},
				status: CREDIT_STATUS.ACTIVE,
				reserved_order: null,
				reserved_daily_meals_subscription: null,
			}
		});
	} catch (error) {
		throw error;
	}
}

const getReservedCredits = async (userId, orderId, orderType = "order") => {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				NOT: {
					type:FUNDS_TYPE.FUNDS
				},
				// status: CREDIT_STATUS.ACTIVE,
				...(orderType === "order" ? { reserved_order: orderId } : {}),
				...(orderType === "daily_meals_subscription" ? { reserved_daily_meals_subscription: orderId } : {}),
				reserved_order: orderId,
			}
		});
	} catch (error) {
		throw error;
	}
}

const getExpiredCredits = async (userId, type) => {
	try {
		return await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				type: type,
				status: CREDIT_STATUS.EXPIRED
			}
		});
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createWalletFunds,
	getAvailableWalletFunds,
	getAvailableWalletBalance,
	getAvailableWalletBalanceGroupedByType,
	getReservedWalletFunds,
	getAllReservedWalletFunds,
	deleteWalletFunds,
	subtractFunds,
	reserveFunds,
	releaseFunds,

	createCredit,
	getAvailableCreditsByType,
	getAvailableCreditsForOrder,
	getReservedCredits,
	getExpiredCredits,
	convertCashbacksToCredit,
	expireOutdatedCredits,
	findCreditsExpiringInDays,
}