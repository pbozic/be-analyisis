const WalletFundsDao = require("../dao/WalletFunds");
const stripe = require("../lib/stripe");

async function reserveAvailableWalletFundsForOrder(userId,amount,orderId) {
	try {
		if(amount<=0){
			throw new Error("Amount must be greater than 0.");
		}

		const availableWalletFunds = await WalletFundsDao.getAvailableWalletFunds(userId);
		console.log("Available Wallet Funds:", availableWalletFunds);

		//check if available funds can cover required amount and store which funds you took into account.
		let sum = 0
		let included_wallet_funds = [];
		for(let i=0;i<availableWalletFunds.length;i++){
			sum += availableWalletFunds[i].amount;
			included_wallet_funds.push(availableWalletFunds[i]);
			if(sum>=amount){
				break
			}
		}
		if(sum<amount){
			throw new Error("Insufficient funds to reserve.");
		}

		//reserve the funds which cover the required amount.
		let reservedWalletFunds = []
		let fundsToReserve = amount;
		for(let i=0;i<included_wallet_funds.length;i++){
			const split_amount = Math.min(fundsToReserve, included_wallet_funds[i].amount);
			fundsToReserve -= split_amount;
			const reservedWF = await WalletFundsDao.reserveFunds(included_wallet_funds[i].wallet_funds_id,split_amount,orderId)
			reservedWalletFunds.push(reservedWF);
			//stop if necessary funds were reserved
			if(fundsToReserve<=0){
				break
			}
		}
		//sanity check
		if(fundsToReserve>0){
			throw new Error("Unexpected error, insufficient funds reserved.");
		}

		return reservedWalletFunds;
	} catch (error) {
		console.error("Error reserving available wallet funds:", error);
		throw error;
	}
}

async function subtractReservedWalletFundsForOrder(userId,amount,orderId) {
	try {
		if(amount<=0){
			throw new Error("Amount must be greater than 0.");
		}

		const reservedWalletFunds = await WalletFundsDao.getReservedWalletFunds(userId,orderId);
		console.log("Reserved Wallet Funds:", reservedWalletFunds);

		//check if available funds can cover required amount and store which funds you took into account.
		let sum = 0
		let included_wallet_funds = [];
		for(let i=0;i<reservedWalletFunds.length;i++){
			sum += reservedWalletFunds[i].amount;
			included_wallet_funds.push(reservedWalletFunds[i]);
			if(sum>=amount){
				break
			}
		}
		if(sum<amount){
			throw new Error("Insufficient funds reserved.");
		}

		//subtract the funds which cover the required amount.
		let subtractedWalletFunds = []
		let fundsToSubtract = amount;
		for(let i=0;i<included_wallet_funds.length;i++){
			const split_amount = Math.min(fundsToSubtract, included_wallet_funds[i].amount);
			fundsToSubtract -= split_amount;
			const subtractedWF = await WalletFundsDao.subtractFunds(included_wallet_funds[i].wallet_funds_id,split_amount)
			subtractedWalletFunds.push(subtractedWF);
			//stop if necessary funds were reserved
			if(fundsToSubtract<=0){
				break
			}
		}
		//sanity check
		if(fundsToSubtract>0){
			throw new Error("Unexpected error, insufficient funds subtracted.");
		}

		return subtractedWalletFunds;
	} catch (error) {
		console.error("Error subtracting available wallet funds:", error);
		throw error;
	}
}

async function transferReservedWalletFundsForOrder(userId,destination_acc,amount,orderId) {
	try {
		if(amount<=0){
			throw new Error("Amount must be greater than 0.");
		}

		const reservedWalletFunds = await WalletFundsDao.getReservedWalletFunds(userId,orderId);
		console.log("Reserved Wallet Funds:", reservedWalletFunds);

		//check if available funds can cover required amount and store which funds you took into account.
		let sum = 0
		let included_wallet_funds = [];
		for(let i=0;i<reservedWalletFunds.length;i++){
			sum += reservedWalletFunds[i].amount;
			included_wallet_funds.push(reservedWalletFunds[i]);
			if(sum>=amount){
				break
			}
		}
		if(sum<amount){
			throw new Error("Insufficient funds reserved.");
		}

		//subtract the funds which cover the required amount.
		let transfers = []
		let fundsToSubtract = amount;
		for(let i=0;i<included_wallet_funds.length;i++){
			const split_amount = Math.min(fundsToSubtract, included_wallet_funds[i].amount);
			fundsToSubtract -= split_amount;
			if(destination_acc !== "platform"){
				const transfer = await stripe.splitCutFromCharge(included_wallet_funds[i].charge_id, destination_acc, split_amount, orderId);
				transfers.push(transfer);
			}
			const subtractedWF = await WalletFundsDao.subtractFunds(included_wallet_funds[i].wallet_funds_id,split_amount)
			//stop if necessary funds were transfered
			if(fundsToSubtract<=0){
				break
			}
		}
		//sanity check
		if(fundsToSubtract>0){
			throw new Error("Unexpected error, insufficient funds transfered.");
		}

		return transfers;
	} catch (error) {
		console.error("Error transferring available wallet funds:", error);
		throw error;
	}
}

module.exports = {
	reserveAvailableWalletFundsForOrder,
	subtractReservedWalletFundsForOrder,
	transferReservedWalletFundsForOrder,
}