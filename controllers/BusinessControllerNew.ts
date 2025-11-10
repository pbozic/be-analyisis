import { Response } from 'express';
import { config } from 'dotenv';

import BusinessDao from '../dao/Business.js';
import { ACCOUNT_ACTIONS_REASON } from '../lib/constants.js';
import elasticsearch from '../elasticsearch/index.js';

// Import types
import { ValidatedRequest, AuthenticatedRequest } from '../types/validatedRequest.js';

// Import validation schemas - these will be implemented as the DTOs are created
interface ActivateBusinessInput {
	business_id: string;
	reason: string;
}

interface DeactivateBusinessInput {
	business_id: string;
	reason: string;
}

config();
const { businessIndex, fullSearch } = elasticsearch;

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
 * GET /businesses
 * @tag Business
 * @summary Get a list of businesses
 * @description Returns a list of businesses.
 * @operationId getBusinessesByType
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
 * GET /business/:business_id
 * @tag Business
 * @summary Get a business by ID
 * @description Retrieves detailed information about a specific business by its ID.
 * @operationId getBusinessById
 * @pathParam {string} business_id - The ID of the business to retrieve
 * @response 200 - Successful operation, returns detailed business information
 * @responseContent {object} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business information
 * @prisma_model businesses
 * @prisma_model documents
 * @prisma_model files
 */
export async function getBusinessById(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const businessId = req.params.business_id;
		if (!businessId) {
			res.status(400).json({ error: 'Business ID is required' });
			return;
		}
		const business: any = await BusinessDao.getBusinessById(businessId);
		if (business) {
			res.status(200).json(business);
		} else {
			res.status(404).json({ error: 'Business not found' });
		}
	} catch (e) {
		console.error('Error retrieving business:', e);
		res.status(400).json({ error: 'Error retrieving business information', e });
	}
}

/**
 * POST /business
 * @tag Business
 * @summary Create a new business
 * @description Creates a new business with the provided details.
 * @operationId createNewBusiness
 * @bodyDescription The business details to create
 * @bodyContent {object} application/json
 * @bodyRequired
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

// TODO: Implement remaining functions from the original JavaScript file
// This is a simplified starting version that compiles successfully

export async function listMerchantBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const merchantBusinesses: any[] = await BusinessDao.getBusinessesByType('DELIVERY');
		res.status(200).json(merchantBusinesses);
	} catch (e: any) {
		console.error('Error listing merchant businesses:', e);
		res.status(400).json({ error: 'Error listing merchant businesses', m: e.message });
	}
}

export async function searchBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const esResults: any = await fullSearch(
			req.body.query || '',
			req.body.location.lat,
			req.body.location.long,
			req.body.categoryIds || [],
			req.body.radius,
			req.body.filterOperator,
			req.body.isDailyMealSearch,
			undefined,
			req.body.page,
			req.body.pageSize || 10,
			[],
			req.body.type || undefined
		);
		res.status(200).json(esResults);
	} catch (e: any) {
		res.status(500).json({ error: 'Error searching businesses', e: e.message });
	}
}

export async function listTransferBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const taxiBusinesses: any[] = await BusinessDao.getBusinessesByType('TRANSPORT');
		res.status(200).json(taxiBusinesses);
	} catch (e) {
		console.error('Error listing taxi businesses:', e);
		res.status(400).json({ error: 'Error listing taxi businesses', e });
	}
}

export async function deleteBusiness(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		if (!req.params.business_id) {
			res.status(400).json({ error: 'Business ID is required' });
			return;
		}
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
	listTransferBusinesses,
	createNewBusiness,
	getBusinessById,
	searchBusinesses,
	deleteBusiness,
};
