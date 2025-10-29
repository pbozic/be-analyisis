import prisma from '../prisma/prisma.js';
/**
 * Create a finances record.
 *
 * @param {object} financeData - Finance payload (account_holder, account_number, etc.).
 * @returns {Promise<object>} Created finances.
 */
const addFinances = async (financeData) => {
	try {
		return await prisma.finances.create({
			data: financeData,
		});
	} catch (error) {
		console.error('Error adding finances:', error);
		throw new Error(error);
	}
};
/**
 * Find a finance record by account number.
 *
 * @param {string} account_number - Account number.
 * @returns {Promise<object|null>} Finances or null.
 */
const getFinancesByAccountNumber = async (account_number) => {
	try {
		return prisma.finances.findFirst({
			where: {
				account_number: account_number,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
/**
 * Get a finances record by id.
 *
 * @param {string} finance_id - Finance ID.
 * @returns {Promise<object|null>} Finances or null.
 */
const getFinancesById = async (finance_id) => {
	try {
		return await prisma.finances.findUnique({
			where: { finance_id },
		});
	} catch (error) {
		console.error('Error retrieving finances:', error);
		throw new Error(error);
	}
};
/**
 * Update a finances record by id.
 *
 * @param {string} finance_id - Finance ID.
 * @param {object} updateData - Fields to update.
 * @returns {Promise<object>} Updated finances.
 */
const updateFinances = async (finance_id, updateData) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: updateData,
		});
	} catch (error) {
		console.error('Error updating finances:', error);
		throw new Error(error);
	}
};
/**
 * Update the account holder name.
 *
 * @param {string} finance_id - Finance ID.
 * @param {string} accountHolder - New account holder name.
 * @returns {Promise<object>} Updated finances.
 */
const updateAccountHolder = async (finance_id, accountHolder) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: { account_holder: accountHolder },
		});
	} catch (error) {
		console.error('Error updating account holder:', error);
		throw new Error(error);
	}
};
/**
 * Update the account number.
 *
 * @param {string} finance_id - Finance ID.
 * @param {string} accountNumber - Account number.
 * @returns {Promise<object>} Updated finances.
 */
const updateAccountNumber = async (finance_id, accountNumber) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: { account_number: accountNumber },
		});
	} catch (error) {
		console.error('Error updating account number:', error);
		throw new Error(error);
	}
};
/**
 * Update the bank name.
 *
 * @param {string} finance_id - Finance ID.
 * @param {string} bankName - Bank name.
 * @returns {Promise<object>} Updated finances.
 */
const updateBankName = async (finance_id, bankName) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: { bank_name: bankName },
		});
	} catch (error) {
		console.error('Error updating bank name:', error);
		throw new Error(error);
	}
};
/**
 * Update the payment_preferences JSON field.
 *
 * @param {string} finance_id - Finance ID.
 * @param {object} paymentPreferences - Preferences JSON.
 * @returns {Promise<object>} Updated finances.
 */
const updatePaymentPreferences = async (finance_id, paymentPreferences) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: { payment_preferences: paymentPreferences },
		});
	} catch (error) {
		console.error('Error updating payment preferences:', error);
		throw new Error(error);
	}
};
/**
 * Delete a finances record by id.
 *
 * @param {string} finance_id - Finance ID.
 * @returns {Promise<object>} Deleted finances.
 */
const deleteFinances = async (finance_id) => {
	try {
		return await prisma.finances.delete({
			where: { finance_id },
		});
	} catch (error) {
		console.error('Error deleting finances:', error);
		throw new Error(error);
	}
};
/**
 * Link a finances record to a business.
 *
 * @param {string} businessId - Business ID.
 * @param {string} financeId - Finance ID.
 * @returns {Promise<object>} Updated business.
 */
const linkFinancesToBusiness = async (businessId, financeId) => {
	try {
		return await prisma.business.update({
			where: { business_id: businessId },
			data: {
				finances: {
					connect: {
						finance_id: financeId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking finances to business:', error);
		throw new Error(error);
	}
};
/**
 * Unlink finances from a business.
 *
 * @param {string} businessId - Business ID.
 * @returns {Promise<object>} Updated business.
 */
const unlinkFinancesFromBusiness = async (businessId) => {
	try {
		return await prisma.business.update({
			where: { business_id: businessId },
			data: {
				finances: {
					disconnect: true,
				},
			},
		});
	} catch (error) {
		console.error('Error unlinking finances from business:', error);
		throw new Error(error);
	}
};
/**
 * Get finances for a given business id.
 *
 * @param {string} business_id - Business ID.
 * @returns {Promise<object|null>} Finances or null.
 */
const getFinanceRecordByBusinessId = async (business_id) => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			include: { finances: true },
		});
		if (!business) {
			throw new Error(`Business with id ${business_id} not found`);
		}
		return business.finances;
	} catch (error) {
		console.error('Error retrieving finances information:', error);
		throw error;
	}
};
export { addFinances };
export { getFinancesByAccountNumber };
export { getFinancesById };
export { updateFinances };
export { updateAccountHolder };
export { updateAccountNumber };
export { updateBankName };
export { linkFinancesToBusiness };
export { unlinkFinancesFromBusiness };
export { updatePaymentPreferences };
export { deleteFinances };
export { getFinanceRecordByBusinessId };
export default {
	addFinances,
	getFinancesByAccountNumber,
	getFinancesById,
	updateFinances,
	updateAccountHolder,
	updateAccountNumber,
	updateBankName,
	linkFinancesToBusiness,
	unlinkFinancesFromBusiness,
	updatePaymentPreferences,
	deleteFinances,
	getFinanceRecordByBusinessId,
};
