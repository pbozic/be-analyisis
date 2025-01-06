const prisma = require("../prisma/prisma");

async function createWalletFunds(user_id, charge_id, amount){
	try {
		if(amount<=0){
			throw new Error("Amount must be greater than 0");
		}
		const newWalletFund = await prisma.wallet_funds.create({
			data: {
				user_id: user_id,
				charge_id: charge_id,
				amount: amount,
				user:{connect:{user_id:user_id}},
			},
		});
		console.log(`Wallet fund created with ID: ${newWalletFund.wallet_funds_id}`);
		return newWalletFund;
	} catch (error) {
		console.error('Error creating wallet fund:', error);
		throw error; // Rethrow the error for further handling if necessary
	}
}

async function getAvailableWalletFunds(userId) {
	try {
		const walletFunds = await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				reserved_order: null
			},
			orderBy: {
				created_at: 'asc',
			},
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

async function subtractFunds(walletFundsId, amount) {
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

		let updatedWalletFund = await prisma.wallet_funds.update({
			where: {
				wallet_funds_id: walletFundsId,
			},
			data: {
				amount: walletFund.amount - amount, // Updated to use amount
			},
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

async function reserveFunds(walletFundsId, reserveAmount, orderId) {
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

		// Check if a wallet fund with the same charge_id and reserved_order exists
		//TODO: maybe convert to findUnique?
		const existingReservedFund = await prisma.wallet_funds.findFirst({
			where: {
				charge_id: walletFund.charge_id,
				reserved_order: orderId,
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
					user_id: walletFund.user_id,
					charge_id: walletFund.charge_id,
					amount: reserveAmount,
					reserved_order: orderId,
				},
			});
			return newWalletFund;
		}
	} catch (error) {
		console.error("Error reserving funds:", error);
		throw error;
	}
}

async function getAvailableWalletBalance(userId) {
	try {
		const walletFunds = await prisma.wallet_funds.findMany({
			where: {
				user_id: userId,
				reserved_order: null
			}
		});
		const availableBalance = walletFunds.reduce((sum, fund) => sum + fund.amount, 0);

		return availableBalance;
	} catch (error) {
		console.error("Error retrieving available wallet balance:", error);
		throw error;
	}
}

module.exports = {
	createWalletFunds,
	getAvailableWalletFunds,
	getAvailableWalletBalance,
	getReservedWalletFunds,
	deleteWalletFunds,
	subtractFunds,
	reserveFunds,
}