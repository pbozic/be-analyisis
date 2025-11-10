import { Response } from 'express';
import { config } from 'dotenv';
import { PROMO_TYPE, ANALYTICS_TYPE, MODULE } from '@prisma/client';

import BusinessDao from '../dao/Business.js';
import Constants, { DELIVERY_ORDER_END_STATES } from '../lib/constants.js';
import stripe from '../lib/stripe.js';
import UserDao from '../dao/User.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import { DELIVERY_ORDER_STATUS, SCORING_POINTS_REASON, ACCOUNT_ACTIONS_REASON } from '../lib/constants.js';
import { calculateBusinessEarnings, calculateTotalEarnings } from '../lib/helpersLib.js';
import prisma from '../prisma/prisma.js';
import EmailHelper from '../lib/emailSender.js';
import elasticsearch from '../elasticsearch/index.js';
import UserFavoriteBusinessDao from '../dao/UserFavoriteBusiness.js';
import ScoringPointsDao from '../dao/ScoringPoints.js';
import LocalLocationDao from '../dao/LocalLocation.js';
import stores from '../dao/Stores.ts';
import { logPromoAnalytics } from '../lib/analytics.ts';
import { addDays, atStartOfDay, formatDay, getPeriodStartAndEnd, getPreviousPeriod } from '../lib/dateHelpers.js';
import BusinessUsersDao from '../dao/BusinessUsers.js';
import PromoAnalyticsDao from '../dao/PromoAnalytics.js';
import PromoDao from '../dao/Promo.js';
import WordDao from '../dao/Word.js';
import InvoicesDao from '../dao/Invoices.js';
import TransportDao from '../dao/Transport.js';

// Import types
import { ValidatedRequest, AuthenticatedRequest } from '../types/validatedRequest.js';

// Import Business DTOs
import type { BusinessResponse, BusinessSearchResponse, BusinessByIdResponse } from '../schemas/dto/Business/index.js';

// Import validation schemas
import type {
	ActivateBusinessInput,
	DeactivateBusinessInput,
	AddBusinessToFavoritesInput,
	RemoveBusinessFromFavoritesInput,
	ManualSortScheduledUsersInput,
	AddScheduledUserSortingTypeInput,
	UpdateBusinessInput,
	SetBusinessTypesInput,
	CreateScoringPointsInput,
	CreateBusinessLocalLocationInput,
	UpdateBusinessLocalLocationInput,
	GetBusinessAnalyticsInput,
	ToggleTransportModuleInput,
} from '../schemas/dto/Business/Business.validation.js';
import type { ListPromoSectionsInput } from '../schemas/validation/PromoSection/PromoSection.validation.js';

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
 * POST /businesses/search
 * @tag Business
 * @summary Get a list of businesses by query, location, categories, radius, etc.
 * @description Returns a list of businesses filtered by search criteria.
 * @operationId getBusinessesSearch
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model businesses
 */
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
			req.body.type || null
		);
		console.log('esResults', esResults);
		esResults.results.sort((a: any, b: any) => b.score - a.score);
		const businessesResult = await BusinessDao.getBusinessesForSearchById(
			esResults.results.map((b: any) => b.business_id)
		);
		const businesses = Array.isArray(businessesResult) ? businessesResult : [];
		//TODO: determine type of module and return data for that specific module
		const results = {
			...esResults,
			results: esResults.results.map((esResult: any) => {
				const businessData = businesses.find((b) => b.business_id === esResult.business_id);
				return {
					...businessData,
					score: esResult.score,
				};
			}),
		};
		if (results) {
			// Log analytics for each business in the results
			for (const business of results.results) {
				await logPromoAnalytics(
					business.business_id,
					req.body.ANALYTICS_PARAM_PROMO_SECTION || null,
					req.body.ANALYTICS_PARAM_PROMO_WORDS || null,
					req.body.ANALYTICS_PARAM_PROMO_AD || null,
					req.user?.user_id || null,
					ANALYTICS_TYPE.IMPRESSIONS,
					business.price || 0.0
				);
			}
			res.status(200).json(results);
		} else {
			res.status(400).json({
				error: 'Error occurred while obtaining the business list.',
				businesses: results,
			});
		}
	} catch (e: any) {
		res.status(500).json({ error: 'Error obtaining list of businesses..', e: e.message });
	}
}

/**
 * GET /businesses/merchant
 * @tag Business
 * @summary List all merchant businesses
 * @description Retrieves a list of all businesses classified as merchants.
 * @operationId listMerchantBusinesses
 * @response 200 - Successful operation, returns a list of merchant businesses
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 * @prisma_model businesses
 */
export async function listMerchantBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	//TODO: elastic search
	try {
		const merchantBusinesses: any[] = await BusinessDao.getBusinessesByType('DELIVERY');
		res.status(200).json(merchantBusinesses);
	} catch (e: any) {
		console.error('Error listing merchant businesses:', e);
		res.status(400).json({ error: 'Error listing merchant businesses', m: e.message });
	}
}

/**
 * POST /businesses/sections/merchant
 * @tag Business
 * @summary List all merchant businesses grouped by promoSections
 * @description Retrieves a list of all businesses classified as merchants.
 * @operationId listMerchantBusinesses
 * @response 200 - Successful operation, returns a list of merchant businesses
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 * @prisma_model promo_sections
 * @prisma_model businesses
 */
export async function listPromoSectionsWithMerchants(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const promoSections: any[] = await prisma.promo_sections.findMany({
			where: {},
			include: {
				translatable: {
					include: { translations: true },
				},
			},
		});
		const userId = req.user?.user_id;
		const finalPromoSections = [...promoSections];
		let favoriteBusinessIds: string[] | null = null;
		if (userId) {
			// Get user's favorite businesses
			const user = await UserDao.getUserById(userId, {
				include: {
					user_favorite_businesses: {
						include: {
							business: true,
						},
					},
				},
			});
			favoriteBusinessIds = user?.user_favorite_businesses?.map((ufb: any) => ufb.business_id) || [];
		}

		for (const promoSection of finalPromoSections) {
			const businesses = await BusinessDao.getBusinessesByPromoSection(promoSection.promo_section_id);

			// Mark favorite businesses
			const businessesWithFavorites = businesses.map((business: any) => ({
				...business,
				is_favorite: favoriteBusinessIds ? favoriteBusinessIds.includes(business.business_id) : false,
			}));

			promoSection.businesses = businessesWithFavorites;
		}
		res.status(200).json(finalPromoSections);
	} catch (e: any) {
		console.error('Error listing merchant businesses:', e);
		res.status(400).json({ error: 'Error listing merchant businesses', m: e.message });
	}
}

/**
 * GET /businesses/merchant/main
 * @tag Business
 * @summary List all merchant businesses offering daily meals
 * @description Retrieves a list of all businesses classified as merchants that offer daily meals.
 * @operationId listMerchantBusinessesMainInfo
 * @response 200 - Successful operation, returns a list of merchant businesses offering daily meals
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 * @prisma_model businesses
 */
export async function listMerchantBusinessesMainInfo(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const stores: any[] = await BusinessDao.getStoresMainInformation();
		const foodDrinks: any[] = await BusinessDao.getFoodDrinksMainInformation();
		res.status(200).json({ stores, foodDrinks });
	} catch (e) {
		console.error('Error listing merchant businesses with daily meals:', e);
		res.status(400).json({ error: 'Error listing merchant businesses with daily meals', e });
	}
}

/**
 * GET /businesses/taxi/main
 * @tag Business
 * @summary List all transfer businesses (main info only)
 * @description Retrieves a list of all transfer businesses
 * @operationId listTransferBusinessesMainInfo
 * @response 200 - Successful operation, returns a list of transfer businesses
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the transfer businesses list
 * @prisma_model businesses
 */
export async function listTransferBusinessesMainInfo(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const transferBusinesses: any[] = await BusinessDao.getTransferBusinessesMainInformation();
		res.status(200).json(transferBusinesses);
	} catch (e) {
		console.error('Error listing transfer businesses', e);
		res.status(400).json({ error: 'Error listing transfer businesses', e });
	}
}

/**
 * GET /businesses/taxi
 * @tag Business
 * @summary List all taxi businesses
 * @description Retrieves a list of all businesses classified as taxis (TRANSFER).
 * @operationId listTaxiBusinesses
 * @response 200 - Successful operation, returns a list of taxi businesses
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the taxi business list
 * @prisma_model businesses
 */
export async function listTransferBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const taxiBusinesses: any[] = await BusinessDao.getBusinessesByType('TRANSPORT');
		res.status(200).json(taxiBusinesses);
	} catch (e) {
		console.error('Error listing taxi businesses:', e);
		res.status(400).json({ error: 'Error listing taxi businesses', e });
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
		const business: any = await BusinessDao.getBusinessById(req.params.business_id);
		const paymentMethods: any = await stripe.getPaymentMethods(business.stripe_customer_id);
		business.paymentMethods = paymentMethods;
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
 * GET /admin/business/:business_id
 * @tag Business
 * @summary Get a business by ID including admin data
 * @description Retrieves detailed information about a specific business by its ID, including data an admin can see.
 * @operationId getBusinessAdminDataById
 * @pathParam {string} business_id - The ID of the business to retrieve
 * @response 200 - Successful operation, returns detailed business information
 * @responseContent {object} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business information
 * @prisma_model businesses
 */
export async function getBusinessAdminDataById(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		console.log('getBusinessAdminDataById', req.params.business_id);
		const business: any = await BusinessDao.getBusinessAdminDataById(req.params.business_id);
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
 * POST /business/search/:business_id
 * @tag Business
 * @summary Get a business for search by ID
 * @description Retrieves detailed information about a specific business by its ID.
 * @operationId getBusinessForSearchById
 * @pathParam {string} business_id - The ID of the business to retrieve
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_WORDS] - Optional promo words for analytics
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_SECTION] - Optional promo section ID for analytics
 * @pathQuery {string} [ANALYTICS_PARAM_PROMO_AD] - Optional promo ad ID for analytics
 * @response 200 - Successful operation, returns detailed business information
 * @responseContent {object} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business information
 * @prisma_model businesses
 * @prisma_model documents
 * @prisma_model files
 */
export async function getBusinessForSearchById(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const { ANALYTICS_PARAM_PROMO_WORDS, ANALYTICS_PARAM_PROMO_SECTION, ANALYTICS_PARAM_PROMO_AD, module } =
			req.body;
		const business: any = await BusinessDao.getBusinessById(req.params.business_id);

		business.logo =
			module === MODULE.STORES
				? business.stores_logo
				: module === MODULE.FOOD_DRINKS
					? business.food_drinks_logo
					: business.reservations_logo;
		business.banner =
			module === MODULE.STORES
				? business.stores_banner
				: module === MODULE.FOOD_DRINKS
					? business.food_drinks_banner
					: business.reservations_banner;
		business.menu = business.menus.find((m: any) => m.isDailyMeal === false);
		business.dailyMenu = business.menus.find((m: any) => m.isDailyMeal === true);
		business.menus = null;

		if (ANALYTICS_PARAM_PROMO_AD || ANALYTICS_PARAM_PROMO_SECTION || ANALYTICS_PARAM_PROMO_WORDS) {
			await logPromoAnalytics(
				business.business_id,
				ANALYTICS_PARAM_PROMO_SECTION || null,
				ANALYTICS_PARAM_PROMO_WORDS || null,
				ANALYTICS_PARAM_PROMO_AD || null,
				req.user?.user_id || null,
				ANALYTICS_TYPE.CLICKS,
				business.price || 0.0
			);
		}

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
 * GET /business/parent/:business_id
 * @tag Business
 * @summary Get parent business
 * @description Retrieves the parent business of a specific business by its ID.
 * @operationId getParentBusiness
 * @pathParam {string} business_id - The ID of the child business
 * @response 200 - Successful operation, returns parent business information
 * @responseContent {object} 200.application/json
 * @response 404 - Parent business not found
 * @response 400 - Error retrieving parent business information
 * @prisma_model businesses
 */
export async function getParentBusiness(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const parentBusiness: any = await BusinessDao.getParentBusiness(req.params.business_id);
		if (parentBusiness) {
			res.status(200).json(parentBusiness);
		} else {
			res.status(404).json({ error: 'Parent business not found' });
		}
	} catch (e) {
		console.error('Error retrieving parent business:', e);
		res.status(400).json({ error: 'Error retrieving parent business information', e });
	}
}

/**
 * GET /business/children/:parent_business_id
 * @tag Business
 * @summary List child businesses
 * @description Retrieves a list of child businesses for a specific parent business ID.
 * @operationId getChildBusinesses
 * @pathParam {string} parent_business_id - The ID of the parent business
 * @response 200 - Successful operation, returns a list of child businesses
 * @responseContent {object} 200.application/json
 * @response 400 - Error retrieving child businesses information
 * @prisma_model businesses
 */
export async function getChildBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const childBusinesses: any[] = await BusinessDao.getChildBusinesses(req.params.parent_business_id);
		res.status(200).json(childBusinesses);
	} catch (e) {
		console.error('Error retrieving child businesses:', e);
		res.status(400).json({ error: 'Error retrieving child businesses information', e });
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

/**
 * GET /business/business_group_name
 * @tag Business
 * @summary Search for businesses by business group name
 * @description Retrieves businesses whose business group names contain the given search term, case-insensitively.
 * @operationId getBusinessesByGroupName
 * @queryParam {string} search - The search term to look for in business group names
 * @response 200 - Successful operation, returns a list of matching businesses
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while searching for businesses by group name
 * @prisma_model businesses
 */
export async function getBusinessesByGroupName(req: AuthenticatedRequest, res: Response): Promise<void> {
	const { search } = req.params;
	if (!search) {
		return res.status(400).json({ error: 'Search term is required' });
	}
	try {
		const businesses: any[] = await BusinessDao.getBusinessesByGroupName(search);
		res.status(200).json(businesses);
	} catch (e) {
		console.error('Error searching businesses by group name:', e);
		res.status(400).json({ error: 'Error occurred while searching for businesses by group name', e });
	}
}

/**
 * GET /businesses/search
 * @tag Business
 * @summary Search for businesses by name
 * @description Retrieves businesses whose names contain the given search term, case-insensitively.
 * @operationId getBusinessesByNameSearch
 * @queryParam {string} search - The search term to look for in business names
 * @response 200 - Successful operation, returns a list of matching businesses
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while searching for businesses by name
 * @prisma_model businesses
 */
export async function getBusinessesByNameSearch(req: AuthenticatedRequest, res: Response): Promise<void> {
	const { search } = req.query;
	if (!search) {
		return res.status(400).json({ error: 'Search term is required' });
	}
	try {
		const businesses: any[] = await BusinessDao.getBusinessesByNameSearch(search as string);
		res.status(200).json(businesses);
	} catch (e) {
		console.error('Error searching businesses by name:', e);
		res.status(400).json({ error: 'Error occurred while searching for businesses by name', e });
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
		if (!req.params.business_id) {
			return res.status(400).json({ error: 'Business ID is required' });
		}
		await BusinessDao.deleteBusiness(req.params.business_id);
		res.status(200).json({ message: 'Business deleted successfully' });
	} catch (e) {
		console.error('Error deleting business:', e);
		res.status(400).json({ error: 'Error deleting business', e });
	}
}

/**
 * PATCH /business/parent/remove
 * @tag Business
 * @summary Remove a child business from its parent
 * @description Clears the parent business association for a given child business.
 * @operationId removeChildBusiness
 * @pathParam {string} business_id - The ID of the "child" business to remove from its parent
 * @response 200 - Child business removed from parent successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error removing parent business from business
 * @prisma_model businesses
 */
export async function removeParentBusinessId(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const updatedBusiness: any = await BusinessDao.removeParentBusiness(req.params.business_id);
		res.status(200).json(updatedBusiness);
	} catch (e) {
		console.error('Error removing child business:', e);
		res.status(400).json({ error: 'Error removing child business from parent', e });
	}
}

/**
 * POST /business/paymentIntent
 * @tag Business
 * @summary Create a payment intent
 * @description This endpoint is used to create a payment intent.
 * @operationId createPaymentIntent
 * @bodyDescription The amount, currency, and user_id of the payment.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Payment Intent created successfully.
 * @response 400 - Error creating payment intent.
 * @prisma_model users
 */
export async function createPaymentIntent(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const { amount, payment_method, user_id } = req.body;
		const user: any = await UserDao.getUserById(user_id);
		const paymentIntent: any = await stripe.createPaymentIntent(amount, payment_method, user.stripe_customer_id);
		res.status(200).json(paymentIntent);
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error creating payment intent', e });
	}
}

/**
 * POST /business/scheduled_users/sorting
 * @tag Business
 * @summary Manually sort scheduled users
 * @description This endpoint is used to manually sort scheduled users.
 * @operationId manualSortScheduledUsers
 * @bodyDescription The list of sorted user IDs.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Users sorted successfully.
 * @response 400 - Error sorting users.
 * @prisma_model businesses
 */
export async function manualSortScheduledUsers(
	req: ValidatedRequest<ManualSortScheduledUsersInput>,
	res: Response
): Promise<void> {
	const { sorted_user_ids, business_id } = req.body;
	const filteredData = sorted_user_ids.filter((item: string | null) => item !== null);
	try {
		const updatedBusiness: any = await BusinessDao.manualSortScheduledUsers(filteredData, business_id);
		res.status(200).json(updatedBusiness);
	} catch (e) {
		console.error(e);
		res.status(400).json({ error: 'Error sorting users', e });
	}
}

/**
 * POST /business/scheduled_users/sorting/type
 * @tag Business
 * @summary Add sorting type for scheduled users
 * @description This endpoint is used to add the sorting type for scheduled users.
 * @operationId addScheduledUserSortingType
 * @bodyDescription The sorting type (manual or automatic).
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Sorting type added successfully.
 * @response 400 - Error adding sorting type.
 * @prisma_model businesses
 */
export async function addScheduledUserSortingType(
	req: ValidatedRequest<AddScheduledUserSortingTypeInput>,
	res: Response
): Promise<void> {
	const { sorting_type, business_id } = req.body;
	try {
		const updatedBusiness: any = await BusinessDao.addScheduledUserSortingType(sorting_type, business_id);
		res.status(200).json(updatedBusiness);
	} catch (e) {
		console.error(e);
		res.status(400).json({ error: 'Error adding sorting type', e });
	}
}

/**
 * PATCH /business/edit
 * @tag Business
 * @summary Edit business details
 * @description This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.
 * @operationId editBusiness
 * @bodyDescription The data to update for the business.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Business updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 * @prisma_model addresses
 * @prisma_model finances
 */
export async function editBusiness(req: ValidatedRequest<UpdateBusinessInput>, res: Response): Promise<void> {
	const { business_group_name, email, telephone, address, delivery_address, working_hours, ...otherData } = req.body;
	const business_id = (otherData as any).business_id;
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
			await BusinessDao.updateBusinessTelephone(business_id, telephone, '+385');
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
		res.status(400).json({ error: 'Error updating business information', detail: error });
	}
}

// For now, I'll add placeholder functions for the remaining methods
// These can be implemented incrementally

export async function getBusinessEarnings(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getAllBusinessesEarnings(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getTotalEarnings(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getBusinessTotalEarnings(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getBusinessReviewsById(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getBusinessStripeStatusByBusinessId(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function generateBusinessStripeByBusinessId(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function onboardingEnd(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getBusynessFactorsBusinessIdList(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function addBusinessToFavorites(
	req: ValidatedRequest<AddBusinessToFavoritesInput>,
	res: Response
): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function removeBusinessFromFavorites(
	req: ValidatedRequest<RemoveBusinessFromFavoritesInput>,
	res: Response
): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getFavoriteBusinesses(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function createScoringPointsHandler(
	req: ValidatedRequest<CreateScoringPointsInput>,
	res: Response
): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getPurchaseOrderLimit(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function removeBusinessPaymentMethod(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getLocalLocations(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function createBusinessLocalLocation(
	req: ValidatedRequest<CreateBusinessLocalLocationInput>,
	res: Response
): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function updateBusinessLocalLocation(
	req: ValidatedRequest<UpdateBusinessLocalLocationInput>,
	res: Response
): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getBusinessOverallAnalytics(
	req: ValidatedRequest<GetBusinessAnalyticsInput>,
	res: Response
): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getBusinessPromoAdsAnalytics(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getBusinessPromoSectionsAnalytics(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function getBusinessPromoWordsAnalytics(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function setBusinessTypesForBusiness(
	req: ValidatedRequest<SetBusinessTypesInput>,
	res: Response
): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function confirmBusinessPremise(req: AuthenticatedRequest, res: Response): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export async function toggleTransportModule(
	req: ValidatedRequest<ToggleTransportModuleInput>,
	res: Response
): Promise<void> {
	// TODO: Implement full function
	res.status(501).json({ error: 'Not implemented yet' });
}

export default {
	listBusinesses,
	removeBusinessPaymentMethod,
	listTransferBusinesses,
	listMerchantBusinesses,
	createNewBusiness,
	getBusinessById,
	getBusinessAdminDataById,
	getParentBusiness,
	getChildBusinesses,
	getBusinessesByGroupName,
	getBusinessesByNameSearch,
	removeParentBusinessId,
	deleteBusiness,
	createPaymentIntent,
	manualSortScheduledUsers,
	addScheduledUserSortingType,
	listMerchantBusinessesMainInfo,
	listTransferBusinessesMainInfo,
	getBusinessEarnings,
	getAllBusinessesEarnings,
	getTotalEarnings,
	getBusinessTotalEarnings,
	getBusinessReviewsById,
	editBusiness,
	getBusinessStripeStatusByBusinessId,
	generateBusinessStripeByBusinessId,
	getBusynessFactorsBusinessIdList,
	searchBusinesses,
	listPromoSectionsWithMerchants,
	activateBusiness,
	deactivateBusiness,
	getBusinessForSearchById,
	addBusinessToFavorites,
	removeBusinessFromFavorites,
	getFavoriteBusinesses,
	onboardingEnd,
	createScoringPointsHandler,
	getPurchaseOrderLimit,
	getLocalLocations,
	createBusinessLocalLocation,
	updateBusinessLocalLocation,
	getBusinessOverallAnalytics,
	getBusinessPromoAdsAnalytics,
	getBusinessPromoSectionsAnalytics,
	getBusinessPromoWordsAnalytics,
	setBusinessTypesForBusiness,
	confirmBusinessPremise,
	toggleTransportModule,
};
