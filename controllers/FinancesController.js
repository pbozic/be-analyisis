import { config } from 'dotenv';

import FinanceDao from '../dao/Finances.js';
import BusinessDao from '../dao/Business.js';
config();
/**
 * POST /finances/create
 * @tag Finance
 * @summary Add new finance record
 * @description Adds a new finance record to the database.
 * @operationId addFinances
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Finance record added successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error adding finance record
 */
async function createNewFinanceRecord(req, res) {
	try {
		const financeRecord = await FinanceDao.addFinances(req.body);
		res.status(201).json(financeRecord);
	} catch (e) {
		console.error('Error creating new finance record:', e);
		res.status(400).json({ error: 'Error creating new finance record', detail: e.message });
	}
}
/**
 * GET finances/:finance_id
 * @tag Finance
 * @summary Get finance record by ID
 * @description Retrieves a finance record by its ID.
 * @operationId getFinancesById
 * @pathParam {string} finance_id - The ID of the finance record to retrieve
 * @response 200 - Successful operation, returns finance record
 * @responseContent {object} 200.application/json
 * @response 404 - Finance record not found
 * @response 400 - Error retrieving finance record
 */
async function getFinanceRecordById(req, res) {
	try {
		const financeRecord = await FinanceDao.getFinancesById(req.params.finance_id);
		if (financeRecord) {
			res.status(200).json(financeRecord);
		} else {
			res.status(404).json({ error: 'Finance record not found' });
		}
	} catch (error) {
		console.error('Error retrieving finance record:', error);
		res.status(400).json({ error: 'Error retrieving finance record', detail: error.message });
	}
}
/**
 * GET finances/business/:business_id
 * @tag Finance
 * @summary Get finance record for a company
 * @description Retrieves the finance record associated with a specific company by the company's business ID.
 * @operationId getFinanceRecordByBusinessId
 * @pathParam {string} business_id - The ID of the business to retrieve the finance record for
 * @response 200 - Successful operation, returns finance record
 * @responseContent {object} 200.application/json
 * @response 404 - Finance record not found for the specified business
 * @response 400 - Error retrieving finance record for the business
 */
async function getFinanceRecordByBusinessId(req, res) {
	try {
		// Assuming there's a method in FinanceDao to get finance by business_id
		const financeRecord = await BusinessDao.getFinanceRecordByBusinessId(req.params.business_id);
		if (financeRecord) {
			res.status(200).json(financeRecord);
		} else {
			res.status(404).json({ error: 'Finance record not found for the specified business' });
		}
	} catch (e) {
		console.error('Error retrieving finance record for the business:', e);
		res.status(400).json({ error: 'Error retrieving finance record for the business', detail: e.message });
	}
}
/**
 * PATCH /finances/:finance_id
 * @tag Finance
 * @summary Update finance record
 * @description Updates an existing finance record by its ID.
 * @operationId updateFinances
 * @pathParam {string} finance_id - The ID of the finance record to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Finance record updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating finance record
 */
async function updateFinanceRecord(req, res) {
	try {
		const updatedFinanceRecord = await FinanceDao.updateFinances(req.params.finance_id, req.body);
		res.status(200).json(updatedFinanceRecord);
	} catch (error) {
		console.error('Error updating finance record:', error);
		res.status(400).json({ error: 'Error updating finance record', detail: error.message });
	}
}
/**
 * PATCH /finances/account_number
 * @tag Finance
 * @summary Update account number
 * @description Updates the account number for a specific finance record.
 * @operationId updateAccountNumber
 * @pathParam {string} finance_id - The ID of the finance record to update
 * @bodyContent {object} application/json - The new account number
 * @bodyRequired
 * @response 200 - Account number updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating account number
 */
async function updateAccountNumber(req, res) {
	const { finance_id } = req.params;
	const { account_number } = req.body;
	try {
		const updatedFinanceRecord = await FinanceDao.updateAccountNumber(finance_id, account_number);
		res.status(200).json(updatedFinanceRecord);
	} catch (error) {
		console.error('Error updating account number:', error);
		res.status(400).json({ error: 'Error updating account number', detail: error.message });
	}
}
/**
 * PATCH /finances/:finance_id/bank_name
 * @tag Finance
 * @summary Update bank name
 * @description Updates the bank name for a specific finance record.
 * @operationId updateBankName
 * @pathParam {string} finance_id - The ID of the finance record to update
 * @bodyContent {object} application/json - The new bank name
 * @bodyRequired
 * @response 200 - Bank name updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating bank name
 */
async function updateBankName(req, res) {
	const { finance_id } = req.params;
	const { bank_name } = req.body;
	try {
		const updatedFinanceRecord = await FinanceDao.updateBankName(finance_id, bank_name);
		res.status(200).json(updatedFinanceRecord);
	} catch (error) {
		console.error('Error updating bank name:', error);
		res.status(400).json({ error: 'Error updating bank name', detail: error.message });
	}
}
/**
 * PATCH /finances/:finance_id/payment_preferences
 * @tag Finance
 * @summary Update payment preferences
 * @description Updates the payment preferences for a specific finance record.
 * @operationId updatePaymentPreferences
 * @pathParam {string} finance_id - The ID of the finance record to update
 * @bodyContent {object} application/json - The new payment preferences
 * @bodyRequired
 * @response 200 - Payment preferences updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating payment preferences
 */
async function updatePaymentPreferences(req, res) {
	const { finance_id } = req.params;
	const { payment_preferences } = req.body;
	try {
		const updatedFinanceRecord = await FinanceDao.updatePaymentPreferences(finance_id, payment_preferences);
		res.status(200).json(updatedFinanceRecord);
	} catch (error) {
		console.error('Error updating payment preferences:', error);
		res.status(400).json({ error: 'Error updating payment preferences', detail: error.message });
	}
}
/**
 * DELETE /finances/:finance_id
 * @tag Finance
 * @summary Delete finance record
 * @description Deletes a finance record by its ID.
 * @operationId deleteFinances
 * @pathParam {string} finance_id - The ID of the finance record to delete
 * @response 200 - Finance record deleted successfully
 * @response 400 - Error deleting finance record
 */
async function deleteFinanceRecord(req, res) {
	try {
		await FinanceDao.deleteFinances(req.params.finance_id);
		res.status(200).json({ message: 'Finance record deleted successfully' });
	} catch (error) {
		console.error('Error deleting finance record:', error);
		res.status(400).json({ error: 'Error deleting finance record', detail: error.message });
	}
}
export { getFinanceRecordById };
export { getFinanceRecordByBusinessId };
export { createNewFinanceRecord };
export { updateFinanceRecord };
export { updateAccountNumber };
export { updateBankName };
export { updatePaymentPreferences };
export { deleteFinanceRecord };
export default {
	getFinanceRecordById,
	getFinanceRecordByBusinessId,
	createNewFinanceRecord,
	updateFinanceRecord,
	updateAccountNumber,
	updateBankName,
	updatePaymentPreferences,
	deleteFinanceRecord,
};
