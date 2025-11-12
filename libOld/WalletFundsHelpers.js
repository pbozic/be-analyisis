import WalletFundsDao from '../dao/WalletFunds.js';
import stripe from '../lib/stripe.js';
import { sendCreditExpirationNotifications } from './notifications.js';
import { FUNDS_TYPE } from './constants.js';
/**
 * Reserve available wallet funds up to a target amount for an order.
 * @param {string} userId - User ID.
 * @param {number} amount - Amount to reserve (cents).
 * @param {string} orderId - Order ID.
 * @param {string} [reserveType='order'] - Reserve type key.
 * @returns {Promise<object[]>} Reserved wallet_funds records.
 */
async function reserveAvailableWalletFundsForOrder(userId, amount, orderId, reserveType = 'order') {
	try {
		if (amount <= 0) {
			throw new Error('Amount must be greater than 0.');
		}
		const availableWalletFunds = await WalletFundsDao.getAvailableWalletFunds(userId, FUNDS_TYPE.FUNDS);
		//console.log('Available Wallet Funds:', availableWalletFunds);
		//check if available funds can cover required amount and store which funds you took into account.
		let sum = 0;
		let included_wallet_funds = [];
		for (let i = 0; i < availableWalletFunds.length; i++) {
			sum += availableWalletFunds[i].amount;
			included_wallet_funds.push(availableWalletFunds[i]);
			if (sum >= amount) {
				break;
			}
		}
		if (sum < amount) {
			throw new Error('Insufficient funds to reserve.');
		}
		//reserve the funds which cover the required amount.
		let reservedWalletFunds = [];
		let fundsToReserve = amount;
		for (let i = 0; i < included_wallet_funds.length; i++) {
			const split_amount = Math.min(fundsToReserve, included_wallet_funds[i].amount);
			fundsToReserve -= split_amount;
			const reservedWF = await WalletFundsDao.reserveFunds(
				included_wallet_funds[i].wallet_funds_id,
				split_amount,
				orderId,
				reserveType
			);
			reservedWalletFunds.push(reservedWF);
			//stop if necessary funds were reserved
			if (fundsToReserve <= 0) {
				break;
			}
		}
		//sanity check
		if (fundsToReserve > 0) {
			throw new Error('Unexpected error, insufficient funds reserved.');
		}
		return reservedWalletFunds;
	} catch (error) {
		console.error('Error reserving available wallet funds:', error);
		throw error;
	}
}
/**
 * Release previously reserved wallet funds for an order (all or partial amount).
 * @param {string} userId - User ID.
 * @param {string} orderId - Order ID.
 * @param {number} [amount=-1] - Amount to release; -1 releases all reserved.
 * @param {string} [reserveType='order'] - Reserve type key.
 * @returns {Promise<void>}
 */
async function releaseReservedWalletFundsForOrder(userId, orderId, amount = -1, reserveType = 'order') {
	try {
		const reservedCredits = await WalletFundsDao.getReservedWalletFunds(userId, orderId, reserveType);
		//console.log('Reserved Wallet Funds:', reservedCredits);
		const reserved_amount = reservedCredits.reduce((sum, wf) => sum + wf.amount, 0);
		if (amount > reserved_amount) {
			throw new Error('Release amount must be smaller than reserved amount!');
		}
		let remaining_release_amount = amount >= 0 ? amount : reserved_amount;
		let i = 0;
		while (remaining_release_amount > 0) {
			await WalletFundsDao.releaseFunds(
				reservedCredits[i].wallet_funds_id,
				Math.min(remaining_release_amount, reservedCredits[i].amount)
			);
			remaining_release_amount -= reservedCredits[i].amount;
			i++;
		}
	} catch (error) {
		console.error(`Error releasing reserved wallet funds for order ${orderId}:`, error);
		throw error;
	}
}

/**
 * Transfer reserved wallet funds to a destination account or platform and subtract from reserves.
 * @param {string} userId - User ID.
 * @param {string} destination_acc - 'platform' or connected account ID.
 * @param {number} amount - Amount in cents to transfer.
 * @param {string} orderId - Order ID.
 * @param {string} service_type - Service type for audit.
 * @param {string} [reserveType='order'] - Reserve type key.
 * @returns {Promise<object[]>} Stripe transfer objects (if not platform).
 */
async function transferReservedWalletFundsForOrder(
	userId,
	destination_acc,
	amount,
	orderId,
	service_type,
	reserveType = 'order'
) {
	try {
		if (amount <= 0) {
			throw new Error('Amount must be greater than 0.');
		}
		const reservedWalletFunds = await WalletFundsDao.getReservedWalletFunds(userId, orderId, reserveType);
		//console.log('Reserved Wallet Funds:', reservedWalletFunds);
		//check if available funds can cover required amount and store which funds you took into account.
		let sum = 0;
		let included_wallet_funds = [];
		for (let i = 0; i < reservedWalletFunds.length; i++) {
			sum += reservedWalletFunds[i].amount;
			included_wallet_funds.push(reservedWalletFunds[i]);
			if (sum >= amount) {
				break;
			}
		}
		if (sum < amount) {
			throw new Error('Insufficient funds reserved.');
		}
		//subtract the funds which cover the required amount.
		let transfers = [];
		let fundsToSubtract = amount;
		for (let i = 0; i < included_wallet_funds.length; i++) {
			const split_amount = Math.min(fundsToSubtract, included_wallet_funds[i].amount);
			fundsToSubtract -= split_amount;
			if (destination_acc !== 'platform') {
				const transfer = await stripe.splitCutFromCharge(
					included_wallet_funds[i].charge_id,
					destination_acc,
					split_amount,
					orderId
				);
				transfers.push(transfer);
			}
			await WalletFundsDao.subtractFunds(
				included_wallet_funds[i].wallet_funds_id,
				split_amount,
				orderId,
				service_type
			);
			//stop if necessary funds were transfered
			if (fundsToSubtract <= 0) {
				break;
			}
		}
		//sanity check
		if (fundsToSubtract > 0) {
			throw new Error('Unexpected error, insufficient funds transfered.');
		}
		return transfers;
	} catch (error) {
		console.error('Error transferring available wallet funds:', error);
		throw error;
	}
}
/**
 * Expire outdated credits and log the result.
 * @returns {Promise<void>}
 */
async function handleCreditExpiration() {
	try {
		const expiredCount = await WalletFundsDao.expireOutdatedCredits();
		if (expiredCount.length > 0) {
			console.log(`Successfully expired ${expiredCount.length} credits`);
		}
	} catch (error) {
		console.error('Error in handleCreditExpiration:', error);
	}
}
/**
 * Send notifications to users whose credits will expire soon (e.g., 7 days).
 * @returns {Promise<void>}
 */
async function notifyUpcomingCreditExpirations() {
	try {
		// Check for credits expiring in 7 days
		const sevenDayWarnings = await WalletFundsDao.findCreditsExpiringInDays(7);
		for (const credit of sevenDayWarnings) {
			if (credit.user) {
				await sendCreditExpirationNotifications(credit.user);
			} else {
				console.log(`Credit expiration notification not sent for user ${credit.user_id}`);
			}
		}
		if (sevenDayWarnings.length > 0) {
			console.log(`Sent ${sevenDayWarnings.length} credit expiration notifications`);
		}
	} catch (error) {
		console.error('Error in notifyUpcomingCreditExpirations:', error);
	}
}
/**
 * Reserve credits of a given type up to a target amount for an order.
 * @param {string} userId - User ID.
 * @param {number} amount - Amount to reserve (cents).
 * @param {string} orderId - Order ID.
 * @param {string} credit_type - Credit type key (FUNDS_TYPE.*).
 * @param {string} [reserveType='order'] - Reserve type key.
 * @returns {Promise<object[]>} Reserved credit records.
 */
async function reserveCreditsForOrder(userId, amount, orderId, credit_type, reserveType = 'order') {
	try {
		if (amount <= 0 || credit_type === null) {
			return [];
		}
		const availableCredits = await WalletFundsDao.getAvailableCreditsForOrder(userId, credit_type);
		//console.log('Available Credits:', availableCredits);
		//reserve the funds up to the required amount.
		let reservedCredits = [];
		let amountToReserve = amount;
		for (let i = 0; i < availableCredits.length; i++) {
			const split_amount = Math.min(amountToReserve, availableCredits[i].amount);
			amountToReserve -= split_amount;
			const reservedCredit = await WalletFundsDao.reserveFunds(
				availableCredits[i].wallet_funds_id,
				split_amount,
				orderId,
				reserveType
			);
			reservedCredits.push(reservedCredit);
			//stop if necessary funds were reserved
			if (amountToReserve <= 0) {
				break;
			}
		}
		return reservedCredits;
	} catch (error) {
		console.error('Error reserving available credits:', error);
		throw error;
	}
}
/**
 * Transfer reserved credits to a destination account or platform and subtract from reserves.
 * @param {string} userId - User ID.
 * @param {string} destination_acc - 'platform' or connected account ID.
 * @param {number} amount - Amount in cents to transfer.
 * @param {string} orderId - Order ID.
 * @param {string} service_type - Service type key.
 * @param {string} [reserveType='order'] - Reserve type key.
 * @returns {Promise<object[]>} Stripe transfer objects (if not platform).
 */
async function transferReservedCreditsForOrder(
	userId,
	destination_acc,
	amount,
	orderId,
	service_type,
	reserveType = 'order'
) {
	try {
		if (amount <= 0) {
			throw new Error('Amount must be greater than 0.');
		}
		// console.log("getting reserved credits with args:", { userId, orderId, reserveType });
		const reservedCredits = await WalletFundsDao.getReservedCredits(userId, orderId, reserveType);
		//console.log('Reserved Credits:', reservedCredits);
		if (amount > reservedCredits.reduce((acc, credit) => acc + credit.amount, 0)) {
			throw new Error('Transfer amount is greater than reserved total!');
		}
		//subtract the funds which cover the required amount.
		let transfers = [];
		let fundsToSubtract = amount;
		for (let i = 0; i < reservedCredits.length; i++) {
			const split_amount = Math.min(fundsToSubtract, reservedCredits[i].amount);
			fundsToSubtract -= split_amount;
			if (destination_acc !== 'platform') {
				const transfer = await stripe.splitCutFromCharge(
					reservedCredits[i].charge_id,
					destination_acc,
					split_amount,
					orderId
				);
				transfers.push(transfer);
			}

			await WalletFundsDao.subtractFunds(reservedCredits[i].wallet_funds_id, split_amount, orderId, service_type);
			if (fundsToSubtract <= 0) {
				break;
			}
		}
		return transfers;
	} catch (error) {
		console.error('Error transferring available wallet funds:', error);
		throw error;
	}
}
export { reserveAvailableWalletFundsForOrder };
export { releaseReservedWalletFundsForOrder };
export { transferReservedWalletFundsForOrder };
export { reserveCreditsForOrder };
export { transferReservedCreditsForOrder };
export { handleCreditExpiration };
export { notifyUpcomingCreditExpirations };
export default {
	reserveAvailableWalletFundsForOrder,
	releaseReservedWalletFundsForOrder,
	transferReservedWalletFundsForOrder,
	reserveCreditsForOrder,
	transferReservedCreditsForOrder,
	handleCreditExpiration,
	notifyUpcomingCreditExpirations,
};
