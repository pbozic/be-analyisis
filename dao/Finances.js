const prisma = require("../prisma/prisma");

const addFinances = async (financeData) => {
	try {
		return await prisma.finances.create({
			data: financeData,
		});
	} catch (error) {
		console.error("Error adding finances:", error);
		throw new Error(error);
	}
};

const getFinancesById = async (finance_id) => {
	try {
		return await prisma.finances.findUnique({
			where: { finance_id },
		});
	} catch (error) {
		console.error("Error retrieving finances:", error);
		throw new Error(error);
	}
};

const updateFinances = async (finance_id, updateData) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: updateData,
		});
	} catch (error) {
		console.error("Error updating finances:", error);
		throw new Error(error);
	}
};


const updateAccountHolder = async (finance_id, accountHolder) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: { account_holder: accountHolder },
		});
	} catch (error) {
		console.error("Error updating account holder:", error);
		throw new Error(error);
	}
};

const updateAccountNumber = async (finance_id, accountNumber) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: { account_number: accountNumber },
		});
	} catch (error) {
		console.error("Error updating account number:", error);
		throw new Error(error);
	}
};

const updateBankName = async (finance_id, bankName) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: { bank_name: bankName },
		});
	} catch (error) {
		console.error("Error updating bank name:", error);
		throw new Error(error);
	}
};

const updatePaymentPreferences = async (finance_id, paymentPreferences) => {
	try {
		return await prisma.finances.update({
			where: { finance_id },
			data: { payment_preferences: paymentPreferences },
		});
	} catch (error) {
		console.error("Error updating payment preferences:", error);
		throw new Error(error);
	}
};

const deleteFinances = async (finance_id) => {
	try {
		return await prisma.finances.delete({
			where: { finance_id },
		});
	} catch (error) {
		console.error("Error deleting finances:", error);
		throw new Error(error);
	}
};

const linkFinancesToBusiness = async (business_id, finance_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { finance_id },
		});
	} catch (error) {
		console.error("Error linking finances to business:", error);
		throw new Error(error);
	}
};

const unlinkFinancesFromBusiness = async (business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { finance_id: null },
		});
	} catch (error) {
		console.error("Error unlinking finances from business:", error);
		throw new Error(error);
	}
};



module.exports = {
	addFinances,
	getFinancesById,
	updateFinances,
	updateAccountHolder,
	updateAccountNumber,
	updateBankName,
	linkFinancesToBusiness,
	unlinkFinancesFromBusiness,
	updatePaymentPreferences,
	deleteFinances,

};