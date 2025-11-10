import { Response } from 'express';
import { config } from 'dotenv';

import BusinessDao from '../dao/Business.js';
import { ACCOUNT_ACTIONS_REASON } from '../lib/constants.js';
import elasticsearch from '../elasticsearch/index.js';
import { ValidatedRequest, AuthenticatedRequest } from '../types/validatedRequest.js';
import type { ActivateBusinessInput, DeactivateBusinessInput } from '../schemas/dto/Business/Business.validation.js';

config();
const { businessIndex } = elasticsearch;

/**
 * POST /business/activate
 * @tag Business
 * @summary Activate a business
 * @description Activates a business.
 * @operationId activateBusiness
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model businesses
 */
export async function activateBusiness(req: ValidatedRequest<ActivateBusinessInput>, res: Response): Promise<void> {
	try {
		if (!req.user?.user_id) {
			throw new Error('Missing creator user_id.');
		}
		const { business_id, reason } = req.body;
		if (!business_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason)) {
			throw new Error('Missing business_id or invalid reason.');
		}
		const business: any = await BusinessDao.activateBusiness(business_id, req.user.user_id, reason);
		if (business) {
			if (business.stores_module_id || business.food_drinks_module_id) {
				businessIndex(business.business_id);
			}
			res.status(200).json(business);
		} else {
			res.status(400).json({
				error: 'Error activating business..',
				users: business,
			});
		}
	} catch (e) {
		res.status(400).json({ error: 'Error activating business..', e });
	}
}

/**
 * POST /business/deactivate
 * @tag Business
 * @summary Deactivate a business
 * @description Deactivates a business.
 * @operationId deactivateBusiness
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model businesses
 */
export async function deactivateBusiness(req: ValidatedRequest<DeactivateBusinessInput>, res: Response): Promise<void> {
	try {
		if (!req.user?.user_id) {
			throw new Error('Missing creator user_id.');
		}
		const { business_id, reason } = req.body;
		if (!business_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason)) {
			throw new Error('Missing business_id or invalid reason.');
		}
		const business: any = await BusinessDao.deactivateBusiness(business_id, req.user.user_id, reason);
		if (business) {
			if (business.stores_module_id || business.food_drinks_module_id) {
				businessIndex(business.business_id);
			}
			res.status(200).json(business);
		} else {
			res.status(400).json({
				error: 'Error deactivating business..',
				users: business,
			});
		}
	} catch (e) {
		res.status(400).json({ error: 'Error activating business..', e });
	}
}

/**
 * GET /businesses/
 * @tag Business
 * @summary List businesses
 * @description Retrieves a list of businesses.
 * @operationId listBusinesses
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model businesses
 */
export async function listBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const businesses: any[] = await BusinessDao.getBusinessesByType('BUSINESS');
		if (businesses) {
			res.status(200).json(businesses);
		} else {
			res.status(400).json({
				error: 'Error obtaining list of businesses..',
				users: businesses,
			});
		}
	} catch (e) {
		res.status(400).json({ error: 'Error obtaining list of businesses..', e });
	}
}

/**
 * GET /businesses/merchant
 * @tag Business
 * @summary List merchant businesses
 * @description Retrieves a list of merchant businesses.
 * @operationId listMerchantBusinesses
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model businesses
 */
export async function listMerchantBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const businesses: any[] = await BusinessDao.getAllMerchantBusinesses();
		if (businesses) {
			res.status(200).json(businesses);
		} else {
			res.status(400).json({
				error: 'Error occurred while obtaining the business list.',
				businesses,
			});
		}
	} catch (e) {
		res.status(400).json({
			error: 'Error occurred while obtaining the business list.',
			e,
		});
	}
}

/**
 * POST /business/register
 * @tag Business
 * @summary Create a new business
 * @description Creates a new business.
 * @operationId createNewBusiness
 * @response 201 - Business created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error creating new business
 * @prisma_model businesses
 * @prisma_model reviewables
 */
export async function createNewBusiness(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const newBusiness: any = await BusinessDao.createNewBusiness({
			...req.body,
			reviewable: {
				create: {},
			},
		});
		res.status(201).json(newBusiness);
	} catch (e) {
		console.error('Error creating new business:', e);
		res.status(400).json({ error: 'Error creating new business', e });
	}
}

/**
 * GET /businesses/:business_id
 * @tag Business
 * @summary Get a business by ID
 * @description Retrieves a business by its ID.
 * @operationId getBusinessById
 * @pathParam {string} business_id - The ID of the business to retrieve.
 * @response 200 - Business retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Business not found
 * @responseContent {object} 404.application/json
 * @response 500 - Error retrieving business
 * @responseContent {object} 500.application/json
 * @prisma_model businesses
 */
export async function getBusinessById(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const { business_id } = req.params;
		if (!business_id) {
			throw new Error('Missing business_id.');
		}
		const business: any = await BusinessDao.getBusinessById(business_id);
		if (business) {
			res.status(200).json(business);
		} else {
			res.status(404).json({
				error: 'Business not found.',
				business,
			});
		}
	} catch (e) {
		res.status(500).json({ error: 'Error retrieving business.', e });
	}
}

/**
 * PATCH /business/edit
 * @tag Business
 * @summary Edit a business
 * @description Updates a business with the provided data.
 * @operationId editBusiness
 * @response 200 - Business updated successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error updating business
 * @responseContent {object} 500.application/json
 * @prisma_model businesses
 */
export async function editBusiness(req: AuthenticatedRequest, res: Response): Promise<void> {
	const { business_group_name, email, telephone, address, delivery_address, working_hours, ...otherData } = req.body;
	const business_id = otherData.business_id;
	try {
		// Update the business details
		await BusinessDao.updateBusiness(business_id, otherData);
		if (address) {
			await BusinessDao.updateBusinessAddress(business_id, address);
		}
		if (delivery_address) {
			await BusinessDao.updateBusinessDeliveryAddress(business_id, delivery_address);
		}
		if (business_group_name) {
			await BusinessDao.updateBusinessGroupName(business_id, business_group_name);
		}
		if (email) {
			await BusinessDao.updateBusinessEmail(business_id, email);
		}
		if (telephone) {
			await BusinessDao.updateBusinessTelephone(business_id, telephone);
		}
		if (working_hours) {
			await BusinessDao.updateBusinessWorkingHours(business_id, working_hours);
		}
		const updatedBusiness: any = await BusinessDao.getBusinessById(business_id);
		if (updatedBusiness.stores_module_id || updatedBusiness.food_drinks_module_id) {
			businessIndex(business_id);
		}
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error updating business:', error);
		res.status(500).json({ error: 'Error updating business', details: error });
	}
}

/**
 * DELETE /business/:business_id
 * @tag Business
 * @summary Delete a business
 * @description Deletes a business by its ID.
 * @operationId deleteBusiness
 * @pathParam {string} business_id - The ID of the business to delete
 * @response 200 - Business deleted successfully
 * @response 400 - Error deleting business
 * @prisma_model businesses
 */
export async function deleteBusiness(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		await BusinessDao.deleteBusiness(req.params.business_id);
		res.status(200).json({ message: 'Business deleted successfully' });
	} catch (e) {
		console.error('Error deleting business:', e);
		res.status(400).json({ error: 'Error deleting business', e });
	}
}

export default {
	activateBusiness,
	deactivateBusiness,
	listBusinesses,
	listMerchantBusinesses,
	createNewBusiness,
	getBusinessById,
	editBusiness,
	deleteBusiness,
};
