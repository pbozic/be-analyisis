import { config } from 'dotenv';
import { Response } from 'express';
import { PROMO_TYPE, ANALYTICS_TYPE, MODULE } from '@prisma/client';

import BusinessDao from '../dao/Business.js';
import stripe from '../lib/stripe.js';
import UserDao from '../dao/User.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import { DELIVERY_ORDER_STATUS, SCORING_POINTS_REASON, ACCOUNT_ACTIONS_REASON } from '../lib/constants.js';
import { calculateBusinessEarnings, calculateTotalEarnings } from '../lib/helpersLib.js';
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
import BusinessTypesDao from '../daoOld/BusinessTypes.js';
import InvoicesDao from '../dao/Invoices.js';
import TransportDao from '../dao/Transport.js';
import { ValidatedRequest, AuthenticatedRequest } from '../types/validatedRequest.ts';
import {
	ActivateBusinessInput,
	DeactivateBusinessInput,
	GetBusinessForSearchInput,
	CreateBusinessInput,
	SearchBusinessesByNameInput,
	ManualSortScheduledUsersInput,
	AddScheduledUserSortingTypeInput,
	GetBusinessEarningsQueryInput,
	GetAllBusinessesEarningsQueryInput,
	UpdateBusinessInput,
	AddBusinessToFavoritesInput,
	RemoveBusinessFromFavoritesInput,
	CreateScoringPointsInput,
	CreateBusinessLocalLocationInput,
	UpdateBusinessLocalLocationInput,
	GetBusinessAnalyticsInput,
	ToggleTransportModuleInput,
	SetBusinessTypesInput,
} from '../schemas/dto/Business/business.validators.js';
import { ListPromoSectionsInput } from '../schemas/validation/PromoSection/PromoSection.validation.ts';
import { PromoSectionDetail } from '../schemas/dto/Promo/promo-section.dto.ts';
import Review from '../dao/Review.ts';
import Driver from '../dao/Driver.ts';
import { DeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/deliveryOrder.dto.ts';

// Types for elasticsearch results
interface ElasticsearchResult {
	business_id: string;
	score: number;
	matched?: {
		word_buys?: Array<{ word_id: string }>;
	};
	[key: string]: unknown;
}

interface ElasticsearchResponse {
	results: ElasticsearchResult[];
	total?: number;
	[key: string]: unknown;
}

config();
const { businessIndex, fullSearch } = elasticsearch;

function getPeriodsFromBody(body: any) {
	const { type = 0, start_date = new Date(), end_date = null } = body || {};
	const start = new Date(start_date);
	if (isNaN(start.getTime())) {
		throw new Error('Invalid start_date');
	}
	const { periodStart, periodEnd } = getPeriodStartAndEnd(start, type, end_date);
	const { prevStart, prevEnd } = getPreviousPeriod(periodStart, periodEnd, type);
	return { type, periodStart, periodEnd, prevStart, prevEnd };
}
/**
 * POST /business/activate
 * @tag Business
 * @summary Activate a business
 * @description Activates a business.
 * @operationId activateBusiness
 * @bodyContent {object} application/json
 * @bodyRequired
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
		const business = await BusinessDao.activateBusiness(business_id, req.user.user_id, reason);
		if (business) {
			if (business.stores_id || business.food_drinks_id) {
				businessIndex(business.business_id);
			}
			res.status(200).json(business);
		} else {
			res.status(400).json({
				error: 'Error activating business..',
				users: business,
			});
		}
	} catch (error) {
		res.status(400).json({
			error: 'Error activating business..',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
		const business = await BusinessDao.deactivateBusiness(business_id, req.user.user_id, reason);
		if (business) {
			if (business.stores_id || business.food_drinks_id) {
				businessIndex(business.business_id);
			}
			res.status(200).json(business);
		} else {
			res.status(400).json({
				error: 'Error deactivating business..',
				users: business,
			});
		}
	} catch (error) {
		res.status(400).json({
			error: 'Error deactivating business..',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
		let businesses = await BusinessDao.getBusinessesByType('BUSINESS');
		if (businesses) {
			res.status(200).json(businesses);
		} else {
			res.status(400).json({
				error: 'Error obtaining list of businesses..',
				users: businesses,
			});
		}
	} catch (error) {
		res.status(400).json({
			error: 'Error obtaining list of businesses..',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
		const esResults = (await fullSearch(
			(req.body as { query?: string }).query || '',
			(req.body as { location?: { lat: number; long: number } }).location?.lat,
			(req.body as { location?: { lat: number; long: number } }).location?.long,
			(req.body as { categoryIds?: string[] }).categoryIds || [],
			(req.body as { radius?: number }).radius,
			(req.body as { filterOperator?: string }).filterOperator,
			(req.body as { isDailyMealSearch?: boolean }).isDailyMealSearch,
			undefined,
			(req.body as { page?: number }).page,
			(req.body as { pageSize?: number }).pageSize || 10,
			[],
			(req.body as { type?: string | null }).type || ''
		)) as ElasticsearchResponse;
		console.log('esResults', esResults);
		if (esResults.results) {
			esResults.results.sort((a, b) => (b.score || 0) - (a.score || 0));
		}
		const businessIds = esResults.results?.map((b) => b.business_id) || [];
		const businesses = await BusinessDao.getBusinessesForSearchById(businessIds);
		//TODO: determine type of module and return data for that specific module
		const results = {
			...esResults,
			results:
				esResults.results?.map((esResult) => {
					const business = businesses?.find((b) => b.business_id === esResult.business_id);
					return {
						...business,
						...esResult,
					};
				}) || [],
		};
		if (results) {
			for (const resItem of results.results) {
				const matchedWords = (resItem as ElasticsearchResult)?.matched?.word_buys || [];
				const wordIds = [...new Set(matchedWords.map((w) => w.word_id).filter(Boolean))] as string[];
				logPromoAnalytics({
					wordIds,
					business_id: resItem.business_id,
					user_id: req.user?.user_id,
					promo_type: wordIds.length ? PROMO_TYPE.WORD : PROMO_TYPE.SEARCH,
					analytics_type: ANALYTICS_TYPE.VIEW,
				})
					.then((res) =>
						console.log(`Promo analytics ${wordIds.length ? 'WORD' : 'SEARCH'} VIEW success`, res)
					)
					.catch((err) =>
						console.warn(`Promo analytics ${wordIds.length ? 'WORD' : 'SEARCH'} VIEW failed`, err)
					);
			}
			res.status(200).json(results);
		} else {
			res.status(400).json({
				error: 'Error obtaining list of businesses..',
				users: results,
			});
		}
	} catch (error) {
		res.status(500).json({
			error: 'Error obtaining list of businesses..',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
		const merchantBusinesses = await BusinessDao.getBusinessesByType('DELIVERY');
		res.status(200).json(merchantBusinesses);
	} catch (error) {
		console.error('Error listing merchant businesses:', error);
		res.status(400).json({
			error: 'Error listing merchant businesses',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
export async function listPromoSectionsWithMerchants(
	req: AuthenticatedRequest<ListPromoSectionsInput>,
	res: Response
): Promise<void> {
	try {
		const promoSections = await PromoDao.getAllPromoSections({});
		if (!promoSections || promoSections.length === 0) {
			res.status(200).json([]);
			return;
		}
		const userId = req.user?.user_id;
		const finalPromoSections = [...promoSections];
		let favoriteBusinessIds = [] as string[];
		if (userId) {
			const businesses = await UserDao.getFavoriteBusinessesByUserIdAndModule(userId, req.body.module);
			if (businesses) {
				favoriteBusinessIds = businesses?.map((b) => b.business_id) || [];
				if (favoriteBusinessIds?.length > 0) {
					const favPromoSection: PromoSectionDetail = {
						name: 'Favorites',
						tag: 'favorite',
						translations: {
							en: 'Favorites',
							es: 'Favoritos',
							de: 'Favoriten',
							fr: 'Favoris',
							it: 'Preferiti',
							ru: 'Избранное',
							hr: 'Omiljeni',
							bs: 'Omiljeni',
							sr: 'Omiljeni',
							sl: 'Priljubljeni',
							ua: 'Улюблені',
						},
					};
					finalPromoSections.unshift(favPromoSection);
				}
			}
		}

		for (let promoSection of finalPromoSections) {
			let favorite = promoSection.tag === 'favorite';
			let local = promoSection.tag === 'local';
			let merchants = promoSection.tag === 'merchants';
			// let translations = promoSection.translations;
			// if (!favorite) {
			// 	for (let translation of promoSection.translations) {
			// 		translations[translation] = translation.translation;
			// 	}
			// } else {
			// 	translations = promoSection.translations;
			// }
			// promoSection.translations = translations;
			let esResults = (await fullSearch(
				'',
				req.body.location.lat,
				req.body.location.long,
				[],
				req.body.radius || undefined,
				req.body.filterOperator || 'OR',
				req.body.isDailyMealSearch || false,
				undefined, //favorite ? null : promoSection.promo_sections_id,
				1,
				10,
				favorite ? favoriteBusinessIds : [],
				local ? 'LOCAL' : merchants ? 'MERCHANT' : ''
			)) as any; // TODO: Fix any when elastic search is converted to TS
			console.log('esResults for promoSection', promoSection.tag, esResults);

			if (!esResults || !esResults.results || esResults.results.length === 0) {
				esResults.results = [];
			}
			let providerIds = esResults.results.map((r: any) => r.business_id); // TODO: Fix any when elastic search is converted to TS
			let providers = await BusinessDao.getBusinessesForSearchById(providerIds);
			//TODO: determine type of module and return data for that specific module
			let result = [];
			for (let provider of providers) {
				let esResult = esResults.results.find((r: any) => r.business_id === provider.business_id);
				if (promoSection.promo_sections_id) {
					logPromoAnalytics({
						business_id: provider.business_id,
						user_id: req.user?.user_id,
						promo_type: PROMO_TYPE.SECTION,
						analytics_type: ANALYTICS_TYPE.VIEW,
						promo_sections_id: promoSection.promo_sections_id,
					})
						.then((res) => console.log('Promo analytics SECTION VIEW success', res))
						.catch((err) => console.warn('Promo analytics SECTION VIEW failed', err));
				}
				result.push({
					...provider,
					...esResult,
				});
			}
			result.sort((a, b) => b.score - a.score);
			promoSection.businesses = result;
			// delete promoSection.translatable;
		}
		res.status(200).json(finalPromoSections);
	} catch (error) {
		console.error('Error listing merchant businesses:', error);
		res.status(400).json({
			error: 'Error listing merchant businesses',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
		const stores = await BusinessDao.getStoresMainInformation();
		const foodDrinks = await BusinessDao.getFoodDrinksMainInformation();
		res.status(200).json({ stores, foodDrinks });
	} catch (error) {
		console.error('Error listing merchant businesses with daily meals:', error);
		res.status(400).json({
			error: 'Error listing merchant businesses with daily meals',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
		const transferBusinesses = await BusinessDao.getTransferBusinessesMainInformation();
		res.status(200).json(transferBusinesses);
	} catch (error) {
		console.error('Error listing transfer businesses', error);
		res.status(400).json({
			error: 'Error listing transfer businesses',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
		const taxiBusinesses = await BusinessDao.getBusinessesByType('TRANSPORT');
		res.status(200).json(taxiBusinesses);
	} catch (error) {
		console.error('Error listing taxi businesses:', error);
		res.status(400).json({
			error: 'Error listing taxi businesses',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
export async function getBusinessById(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const business = await BusinessDao.getBusinessById(req.params.business_id);
		if (!business) {
			res.status(404).json({ error: 'Business not found' });
			return;
		}

		const paymentMethods = await stripe.getPaymentMethods(business.stripe_customer_id || '');
		const businessWithPaymentMethods = {
			...business,
			paymentMethods,
		};

		res.status(200).json(businessWithPaymentMethods);
	} catch (error) {
		console.error('Error retrieving business:', error);
		res.status(400).json({
			error: 'Error retrieving business information',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
export async function getBusinessAdminDataById(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		console.log('getBusinessAdminDataById', req.params.business_id);
		const business = await BusinessDao.getBusinessAdminDataById(req.params.business_id);
		if (business) {
			res.status(200).json(business);
		} else {
			res.status(404).json({ error: 'Business not found' });
		}
	} catch (error) {
		console.error('Error retrieving business:', error);
		res.status(400).json({
			error: 'Error retrieving business information',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
export async function getBusinessForSearchById(
	req: ValidatedRequest<GetBusinessForSearchInput, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { ANALYTICS_PARAM_PROMO_WORDS, ANALYTICS_PARAM_PROMO_SECTION, ANALYTICS_PARAM_PROMO_AD, module } =
			req.body;
		const business = await BusinessDao.getBusinessById(req.params.business_id);

		if (!business) {
			res.status(404).json({ error: 'Business not found' });
			return;
		}
		console.log(business.stores_module);
		let selectedModule: { logo?: string; banner?: string; menus?: Array<{ isDailyMeal?: boolean }> } | null = null;
		if (module === MODULE.STORES) {
			selectedModule = business.stores_module as typeof selectedModule;
		} else if (module === MODULE.FOOD_DRINKS) {
			selectedModule = business.food_drinks_module as typeof selectedModule;
		} else if (module === MODULE.RESERVATIONS) {
			selectedModule = business.reservation_module as typeof selectedModule;
		}
		if (!selectedModule || !business) {
			res.status(400).json({ error: 'Business does not have the specified module.' });
			return;
		}

		if (ANALYTICS_PARAM_PROMO_AD || ANALYTICS_PARAM_PROMO_SECTION || ANALYTICS_PARAM_PROMO_WORDS) {
			logPromoAnalytics({
				business_id: business.business_id,
				user_id: req.user?.user_id,
				promo_type: ANALYTICS_PARAM_PROMO_AD
					? PROMO_TYPE.AD
					: ANALYTICS_PARAM_PROMO_SECTION
						? PROMO_TYPE.SECTION
						: PROMO_TYPE.WORD,
				analytics_type: ANALYTICS_TYPE.CLICK,
				promo_ads_id: ANALYTICS_PARAM_PROMO_AD,
				promo_sections_id: ANALYTICS_PARAM_PROMO_SECTION,
				wordIds: ANALYTICS_PARAM_PROMO_WORDS,
			})
				.then((res) => console.log('Promo analytics CLICK success', res))
				.catch((err) => console.warn('Promo analytics CLICK failed', err));
		}

		res.status(200).json(business);
	} catch (error) {
		console.error('Error retrieving business:', error);
		res.status(400).json({
			error: 'Error retrieving business information',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
export async function getParentBusiness(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const parentBusiness = await BusinessDao.getParentBusiness(req.params.business_id);
		if (parentBusiness) {
			res.status(200).json(parentBusiness);
		} else {
			res.status(404).json({ error: 'Parent business not found' });
		}
	} catch (error) {
		console.error('Error retrieving parent business:', error);
		res.status(400).json({
			error: 'Error retrieving parent business information',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
export async function getChildBusinesses(
	req: ValidatedRequest<never, { parent_business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const childBusinesses = await BusinessDao.getChildBusinesses(req.params.parent_business_id);
		res.status(200).json(childBusinesses);
	} catch (error) {
		console.error('Error retrieving child businesses:', error);
		res.status(400).json({
			error: 'Error retrieving child businesses information',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
export async function createNewBusiness(req: ValidatedRequest<CreateBusinessInput>, res: Response): Promise<void> {
	try {
		const newBusiness = await BusinessDao.createNewBusiness({
			...req.body,
		});
		res.status(201).json(newBusiness);
	} catch (error) {
		console.error('Error creating new business:', error);
		res.status(400).json({
			error: 'Error creating new business',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
async function getBusinessesByGroupName(
	req: ValidatedRequest<never, { search: string }>,
	res: Response
): Promise<void> {
	const { search } = req.params;
	if (!search) {
		res.status(400).json({ error: 'Search term is required' });
		return;
	}
	try {
		const businesses = await BusinessDao.getBusinessesByGroupName(search);
		res.status(200).json(businesses);
	} catch (error) {
		console.error('Error searching businesses by group name:', error);
		res.status(400).json({
			error: 'Error occurred while searching for businesses by group name',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
async function getBusinessesByNameSearch(
	req: ValidatedRequest<never, never, SearchBusinessesByNameInput>,
	res: Response
): Promise<void> {
	const { search } = req.query;
	if (!search) {
		res.status(400).json({ error: 'Search term is required' });
		return;
	}
	try {
		const businesses = await BusinessDao.getBusinessesByNameSearch(search);
		res.status(200).json(businesses);
	} catch (error) {
		console.error('Error searching businesses by name:', error);
		res.status(400).json({
			error: 'Error occurred while searching for businesses by name',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
async function deleteBusiness(req: ValidatedRequest<never, { business_id: string }>, res: Response): Promise<void> {
	try {
		await BusinessDao.deleteBusiness(req.params.business_id);
		res.status(200).json({ message: 'Business deleted successfully' });
	} catch (error) {
		console.error('Error deleting business:', error);
		res.status(400).json({
			error: 'Error deleting business',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
async function removeParentBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const updatedBusiness = await BusinessDao.removeParentBusiness(req.params.business_id);
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error removing child business:', error);
		res.status(400).json({
			error: 'Error removing child business from parent',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
async function manualSortScheduledUsers(
	req: ValidatedRequest<ManualSortScheduledUsersInput>,
	res: Response
): Promise<void> {
	const { sorted_user_ids, business_id } = req.body;
	const filteredData = sorted_user_ids.filter((item) => item !== null);
	try {
		const updatedBusiness = await BusinessDao.manualSortScheduledUsers(filteredData, business_id);
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error sorting users:', error);
		res.status(400).json({
			error: 'Error sorting users',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
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
async function addScheduledUserSortingType(
	req: ValidatedRequest<AddScheduledUserSortingTypeInput>,
	res: Response
): Promise<void> {
	const { sorting_type, business_id } = req.body;
	try {
		const updatedBusiness = await BusinessDao.addScheduledUserSortingType(sorting_type, business_id);
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error adding sorting type:', error);
		res.status(400).json({
			error: 'Error adding sorting type',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * GET /business/earnings/:business_id
 * @tag Business
 * @summary Get earnings for a specific business
 * @description Retrieves earnings data for a specific business based on the provided business ID and date range.
 * @operationId getBusinessEarnings
 * @pathParam {string} business_id - The ID of the business to retrieve earnings for
 * @queryParam {string} start_date - The start date for the earnings calculation
 * @queryParam {string} end_date - The end date for the earnings calculation
 * @response 200 - Successful operation, returns the earnings data for the specified business
 * @responseContent {object} 200.application/json
 * @response 400 - Missing required parameters
 * @responseContent {object} 400.application/json The error object
 * @response 404 - Business not found or no earnings data available
 * @responseContent {object} 404.application/json The error object
 * @prisma_model businesses
 * @prisma_model delivery_orders
 */
async function getBusinessEarnings(
	req: ValidatedRequest<never, { business_id: string }, GetBusinessEarningsQueryInput>,
	res: Response
): Promise<void> {
	const { business_id } = req.params;
	const { start_date, end_date } = req.query;
	if (!business_id || !start_date || !end_date) {
		res.status(400).json({ message: 'Missing required parameters' });
		return;
	}
	try {
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business) {
			res.status(404).json({ error: 'Business not found or no earnings data available' });
			return;
		}

		const businessDeliveryOrders = await DeliveryOrderDao.getSuccessfullOrdersForBusinessId(
			business.business_id,
			start_date,
			end_date
		);
		const earningsData = calculateBusinessEarnings(businessDeliveryOrders, business);
		if (earningsData) {
			res.status(200).json({ business_id, ...earningsData });
		} else {
			res.status(404).json({ error: 'Business not found or no earnings data available' });
		}
	} catch (error) {
		console.error("Error retrieving business' earnings:", error);
		res.status(400).json({
			error: "Error retrieving business' earnings",
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * GET /business/earnings
 * @tag Business
 * @summary Get earnings for all businesses
 * @description Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.
 * @operationId getAllBusinessesEarnings
 * @queryParam {string} start_date - The start date for the earnings calculation
 * @queryParam {string} end_date - The end date for the earnings calculation
 * @response 200 - Successful operation, returns the earnings data for all businesses
 * @responseContent {object} 200.application/json
 * @response 400 - Missing required parameters
 * @responseContent {object} 400.application/json The error object
 * @prisma_model businesses
 * @prisma_model delivery_orders
 */
async function getAllBusinessesEarnings(
	req: ValidatedRequest<never, never, GetAllBusinessesEarningsQueryInput>,
	res: Response
): Promise<void> {
	const { start_date, end_date } = req.query;
	if (!start_date || !end_date) {
		res.status(400).json({ message: 'Missing required parameters' });
		return;
	}
	try {
		const businesses = await BusinessDao.getBusinessesByType('DELIVERY');
		const earningsPromises = businesses.map(async (business) => {
			const businessDeliveryOrders = await DeliveryOrderDao.getOrders({
				where: {
					business_id: business.business_id,
					status: DELIVERY_ORDER_STATUS.SUCCESS,
					created_at: {
						gte: new Date(start_date).toISOString(),
						lte: new Date(end_date).toISOString(),
					},
				},
			});
			return calculateBusinessEarnings(businessDeliveryOrders, business);
		});
		const allEarnings = await Promise.all(earningsPromises);
		res.status(200).json(allEarnings);
	} catch (error) {
		console.error("Error retrieving all businesses' earnings:", error);
		res.status(400).json({
			error: "Error retrieving all businesses' earnings",
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * GET /business/total-earnings
 * @tag Business
 * @summary Get total earnings for completed delivery orders
 * @description Retrieves the total earnings from all completed delivery orders.
 * @operationId getTotalEarnings
 * @response 200 - Successful operation, returns the total earnings
 * @responseContent {object} 200.application/json
 * @response 400 - Error retrieving total earnings
 * @responseContent {object} 400.application/json The error object
 * @prisma_model delivery_orders
 */
async function getTotalEarnings(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
			},
		});
		const totalEarnings = calculateTotalEarnings(orders, false, true);
		res.status(200).json(totalEarnings);
	} catch (error) {
		console.error("Error retrieving all businesses' total earnings:", error);
		res.status(400).json({
			error: "Error retrieving all businesses' total earnings",
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * GET /business/earnings/:business_id/total
 * @tag Business
 * @summary Get total earnings for a specific business
 * @description Retrieves the total earnings of a specific business based on completed orders.
 * @operationId getBusinessTotalEarnings
 * @pathParam {string} business_id - The ID of the business whose total earnings are being retrieved
 * @response 200 - Successful operation, returns total earnings for the specified business
 * @responseContent {object} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business' total earnings
 * @prisma_model delivery_orders
 */
async function getBusinessTotalEarnings(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	const { business_id } = req.params;
	if (!business_id) {
		res.status(400).json({ message: 'Missing required parameter: business_id' });
		return;
	}
	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
				business_id: business_id,
			},
		});
		const totalEarnings = calculateTotalEarnings(orders, false, true);
		res.status(200).json(totalEarnings);
	} catch (error) {
		console.error("Error retrieving business' total earnings:", error);
		res.status(400).json({
			error: "Error retrieving business' total earnings",
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * GET /business/:business_id/reviews
 * @tag Business
 * @summary Get business reviews
 * @description Retrieves reviews for a business, including author and target details.
 * @operationId getBusinessReviewsById
 * @pathParam {string} business_id - The business ID
 * @response 200 - Reviews retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Internal server error
 * @prisma_model reviews
 * @prisma_model users
 * @prisma_model businesses
 * @prisma_model documents
 * @prisma_model files
 */
async function getBusinessReviewsById(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	const { business_id } = req.params;
	if (!business_id) {
		res.status(400).json({ message: 'Missing required parameter: business_id' });
		return;
	}

	const results = await Review.getReviewsForSubject(business_id, 'BUSINESS');
	if (!results) {
		res.status(500).json({
			error: 'Internal server error',
		});
		return;
	}
	res.status(200).json(results);
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
async function editBusiness(
	req: ValidatedRequest<
		UpdateBusinessInput & {
			business_id: string;
			address?: UpdateAddressInput;
			delivery_address?: UpdateAddressInput;
		}
	>,
	res: Response
): Promise<void> {
	const { business_group_name, email, telephone, address, delivery_address, working_hours, ...otherData } = req.body;
	const business_id = otherData.business_id;
	try {
		// Update the business details
		await BusinessDao.updateBusiness(business_id, otherData);
		// TODO: Implement updateBusinessAddress and updateBusinessDeliveryAddress in BusinessDao
		// if (address) {
		// 	await BusinessDao.updateBusinessAddress(business_id, address);
		// }
		// if (delivery_address) {
		// 	await BusinessDao.updateBusinessDeliveryAddress(business_id, delivery_address);
		// }
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
		const updatedBusiness = await BusinessDao.getBusinessById(business_id);
		if (updatedBusiness.stores_module_id || updatedBusiness.food_drinks_module_id) {
			businessIndex(business_id);
		}
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error updating business:', error);
		res.status(400).json({
			error: 'Error updating business information',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * GET /business/stripe/:business_id
 * @tag Business
 * @summary Get Stripe account active status
 * @description Returns whether the business's Stripe account is active.
 * @operationId getBusinessStripeStatusByBusinessId
 * @pathParam {string} business_id - The business ID
 * @response 200 - Stripe status retrieved
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching Stripe status
 * @prisma_model businesses
 */
async function getBusinessStripeStatusByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const business_id = req.params.business_id;
		const stripe_account_id = await BusinessDao.getBusinessStripeByBusinessId(business_id);
		if (stripe_account_id) {
			const is_active = await stripe.checkAccountActive(stripe_account_id);
			res.status(200).json(is_active);
			return;
		}
		res.status(200).json(false);
	} catch (error) {
		console.error('Error fetching stripe account for business:', error);
		res.status(500).json({
			error: 'Error fetching stripe account for business',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * PATCH /business/stripe/generate/:business_id
 * @tag Business
 * @summary Generate Stripe onboarding link
 * @description Creates or retrieves a Stripe account and returns an onboarding link.
 * @operationId generateBusinessStripeByBusinessId
 * @pathParam {string} business_id - The business ID
 * @response 200 - Onboarding link returned (HTML view)
 * @response 400 - Business already onboarded or invalid
 * @response 500 - Error generating Stripe account
 * @prisma_model businesses
 */
async function generateBusinessStripeByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const business_id = req.params.business_id;
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business) {
			res.status(404).json({ error: 'Business not found' });
			return;
		}
		let stripe_account;
		if (business?.stripe_account_id) {
			stripe_account = await stripe.client.accounts.retrieve(business.stripe_account_id);
			console.info('stripe_account', stripe_account);
			const current_reqs = stripe_account?.requirements?.currently_due;
			const eventual_reqs = stripe_account?.requirements?.eventually_due;
			if (
				stripe_account.details_submitted &&
				!(current_reqs && current_reqs.length > 0) &&
				!(eventual_reqs && eventual_reqs.length > 0)
			) {
				res.status(400).json({ error: 'Business has already satisfied all onboarding requirements.' });
				return;
			}
		} else {
			stripe_account = await stripe.createAccount(business);
			await BusinessDao.updateBusiness(business.business_id, { stripe_account_id: stripe_account.id });
		}
		const accountLink = await stripe.getAccountLinks(stripe_account.id, business.business_id);
		// send email to business user with account link
		EmailHelper.sendEmailTemplate('Stripe Onboarding', 'stripeOnboarding', business.email, {
			name: business.name,
			title: 'Stripe Onboarding',
			onboardLink: accountLink.url,
		});
		res.status(200).render('stripeOnboardingEmailSent', {
			businessEmail: business.email,
		});
	} catch (error) {
		console.error('Error generating stripe account for business:', error);
		res.status(500).json({
			error: 'Error generating stripe account for business',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
async function onboardingEnd(req: ValidatedRequest<never, { business_id: string }>, res: Response): Promise<void> {
	try {
		const business_id = req.params.business_id;
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business || !business.stripe_account_id) {
			res.status(404).render('stripeOnboardingIncomplete', {
				message: "We couldn't find a valid Stripe account for this business.",
			});
			return;
		}
		const stripe_account = await stripe.client.accounts.retrieve(business.stripe_account_id);
		const current_reqs = stripe_account?.requirements?.currently_due || [];
		const eventual_reqs = stripe_account?.requirements?.eventually_due || [];
		const isComplete = stripe_account.details_submitted && current_reqs.length === 0 && eventual_reqs.length === 0;
		if (isComplete) {
			res.render('stripeOnboardingSuccess');
			return;
		} else {
			res.render('stripeOnboardingIncomplete', {
				message: 'There are still steps remaining in your onboarding process.',
				retryLink: `https://api.klikni-web.eu/api/stripe/generate/${business_id}`,
			});
			return;
		}
	} catch (error) {
		console.error('Stripe onboarding return URL error:', error);
		res.status(500).render('stripeOnboardingIncomplete', {
			message: 'An unexpected error occurred. Please try again later.',
		});
	}
}
/**
 * GET /business/busyness
 * @tag Business
 * @summary Get busyness factors for businesses
 * @description Returns a busyness factor per business ID based on in-progress orders.
 * @operationId getBusynessFactorsBusinessIdList
 * @queryParam {string[]} business_ids - Array of business IDs
 * @response 200 - Busyness factors returned
 * @responseContent {object} 200.application/json
 * @response 400 - Validation error
 * @response 500 - Internal Server Error
 * @prisma_model delivery_orders
 */
async function getBusynessFactorsBusinessIdList(
	req: AuthenticatedRequest<never, never, { business_ids: string[] }>,
	res: Response
): Promise<void> {
	const { business_ids } = req.query;
	if (!business_ids) {
		res.status(400).json({ error: 'business_ids parameter is required' });
		return;
	}
	try {
		// Assuming we have a function to get orders by business IDs
		const busynessFactors: Record<string, number> = {};
		for (const businessId of business_ids) {
			const orderCount = await DeliveryOrderDao.getInProgressDeliveryOrdersCountForBusinessId(
				businessId as string
			);
			console.info('orderCount: ', businessId, orderCount);
			if (!orderCount) {
				busynessFactors[businessId as string] = 1;
				continue; // Use continue instead of return to proceed with the next iteration
			}
			// Calculate busyness factor
			let busynessFactor = 1;
			busynessFactor += Math.floor(orderCount / 5) * 0.2;
			busynessFactors[businessId as string] = busynessFactor;
		}
		res.status(200).json(busynessFactors);
	} catch (error) {
		console.error('Error getting busyness factors:', error);
		res.status(500).json({
			error: 'Internal Server Error while getting busyness factors',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * POST /favorites
 * @tag Business
 * @summary Add a business to the authenticated user's favorites
 * @description Adds the given business to the user's favorites list.
 * @operationId addBusinessToFavorites
 * @bodyDescription The business to favorite
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Favorite created successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Validation error
 * @response 500 - Internal Server Error
 * @prisma_model user_favorite_businesses
 * @prisma_model business
 */
async function addBusinessToFavorites(
	req: ValidatedRequest<AddBusinessToFavoritesInput>,
	res: Response
): Promise<void> {
	try {
		const { business_id, module } = req.body;
		if (!req.user?.user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { user_id } = req.user;
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business) {
			res.status(400).json({ message: 'Business not found.' });
			return;
		}
		// if (![business.type].includes(type)) {
		// 	// made as array for future upgrade to array business.types
		// 	return res.status(400).json({ message: 'Business does not have the given type.' });
		// }
		const new_entry = await UserFavoriteBusinessDao.addFavoriteBusiness(user_id, business_id, module);
		res.status(200).json(new_entry);
	} catch (error) {
		console.error('Error adding business to favorites:', error);
		res.status(500).json({
			error: 'Internal Server Error while adding Business to Favorites',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * DELETE /favorites
 * @tag Business
 * @summary Remove a business from the authenticated user's favorites
 * @description Removes the specified favorite entry from the user's favorites list.
 * @operationId removeBusinessFromFavorites
 * @bodyDescription The favorite entry identifier to remove
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Favorite removed successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Validation error
 * @response 500 - Internal Server Error
 * @prisma_model user_favorite_businesses
 */
async function removeBusinessFromFavorites(
	req: ValidatedRequest<RemoveBusinessFromFavoritesInput>,
	res: Response
): Promise<void> {
	try {
		const { business_id, module } = req.body;
		if (!req.user?.user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { user_id } = req.user;
		const user_favorites = await UserFavoriteBusinessDao.getFavoriteBusinesses(user_id, module);
		const favorited_entry = user_favorites.find((fav) => fav.user_favorite_businesses_id === business_id);
		if (!favorited_entry) {
			res.status(400).json({ message: 'Business not favorited for given type.' });
			return;
		}
		const removed_entry = await UserFavoriteBusinessDao.removeFavoriteBusiness(business_id);
		res.status(200).json(removed_entry);
	} catch (error) {
		console.error('Error removing business from favorites:', error);
		res.status(500).json({
			error: 'Internal Server Error while removing Business from Favorites',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * GET /favorites/{type}
 * @tag Business
 * @summary List authenticated user's favorite businesses
 * @description Returns favorite businesses for the current user, optionally filtered by business type.
 * @operationId getFavoriteBusinesses
 * @pathParam {string} [type] - Optional business type to filter by
 * @response 200 - Favorites retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Internal Server Error
 * @prisma_model user_favorite_businesses
 * @prisma_model business
 */
async function getFavoriteBusinesses(
	req: AuthenticatedRequest<never, { business_type: MODULE }>,
	res: Response
): Promise<void> {
	try {
		if (!req.user?.user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { user_id } = req.user;
		const business_type = req.params.business_type;
		const favorited_businesses = await UserFavoriteBusinessDao.getFavoriteBusinesses(user_id, business_type);
		res.status(200).json(favorited_businesses);
	} catch (error) {
		console.error('Error getting favorite businesses:', error);
		res.status(500).json({
			error: 'Internal Server Error while getting favorite businesses',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * POST /scoring_points
 * @tag Business
 * @summary Create scoring points
 * @description Creates scoring points for the authenticated business user for a delivery or taxi order.
 * @operationId createScoringPoints
 * @bodyDescription Scoring points details
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Scoring points created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid request
 * @response 500 - Internal server error
 * @prisma_model scoring_points
 * @prisma_model businesses
 * @prisma_model users
 * @prisma_model delivery_orders
 * @prisma_model taxi_orders
 */
async function createScoringPointsHandler(
	req: ValidatedRequest<CreateScoringPointsInput>,
	res: Response
): Promise<void> {
	try {
		const { reason, points, taxi_order_id, delivery_order_id } = req.body;
		if (!Object.keys(SCORING_POINTS_REASON).includes(reason) || typeof points !== 'number' || points <= 0) {
			res.status(400).json({ error: 'Invalid reason or points' });
			return;
		}
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'User not authenticated' });
			return;
		}
		const user_driver = await Driver.getDriverByUserId(user_id);
		const business_id = user_driver?.business_id;
		if (!business_id) {
			res.status(400).json({ error: 'Business ID is required' });
			return;
		}
		const scoringPoint = await ScoringPointsDao.createScoringPoints({
			isPenalty: true,
			user_id,
			delivery_order_id,
			taxi_order_id,
			points,
			reason,
		});
		res.status(201).json(scoringPoint);
		return;
	} catch (error) {
		console.error('Error in createScoringPointsHandler:', error);
		res.status(500).json({ error: 'Internal server error' });
		return;
	}
}
/**
 * GET /purchase_order_limit/{business_id}
 * @tag Business
 * @summary Get remaining purchase order limit amount for current month
 * @description Returns the remaining purchase order limit for the specified business based on taxi orders this month.
 * @operationId getPurchaseOrderLimit
 * @pathParam {string} business_id - The business ID
 * @response 200 - Remaining limit returned
 * @responseContent {object} 200.application/json
 * @response 400 - Not found or invalid request
 * @response 500 - Internal server error
 * @prisma_model business
 * @prisma_model business_users
 * @prisma_model business_clients
 * @prisma_model taxi_orders
 */
async function getPurchaseOrderLimit(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	const { business_id } = req.params;
	if (!business_id) {
		res.status(400).json({ error: 'Business ID is required' });
		return;
	}
	try {
		const purchaseOrderLimit = await BusinessDao.getPurchaseOrderLimit(business_id);
		if (purchaseOrderLimit >= 0) {
			res.status(200).json(purchaseOrderLimit);
		} else {
			res.status(400).json({ error: 'Purchase order limit not found' });
		}
	} catch (error) {
		console.error('Error in getPurchaseOrderLimit:', error);
		res.status(500).json({
			error: 'Internal server error',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * DELETE /remove-payment-method/{pm_id}
 * @tag Business
 * @summary Remove a payment method from the business
 * @description Detaches the specified payment method from the Stripe customer of the business of the current user.
 * @operationId removeBusinessPaymentMethod
 * @pathParam {string} pm_id - The Stripe payment method ID
 * @response 200 - Payment method removed successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error removing payment method
 * @prisma_model business
 */
async function removeBusinessPaymentMethod(
	req: ValidatedRequest<never, { pm_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { pm_id } = req.params;
		if (!pm_id) {
			res.status(400).json({ error: 'Missing payment method ID' });
			return;
		}
		if (!req.user?.user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.getUserById(req.user.user_id);
		if (!user || !user.business_users || user.business_users.length === 0) {
			res.status(400).json({ error: 'User is not associated with any business' });
			return;
		}

		const businessId = user?.business_users[0]?.business_id;
		if (!businessId) {
			res.status(400).json({ error: 'User does not belong to any business' });
			return;
		}
		// Check if the business has a Stripe customer ID
		if (!user.business_users[0]?.business_id) {
			res.status(400).json({ error: 'User does not belong to any business' });
			return;
		}
		const business = await BusinessDao.getBusinessById(user.business_users[0]?.business_id);
		if (!business?.stripe_customer_id) {
			res.status(400).json({ error: 'Business does not have a Stripe customer ID' });
			return;
		}
		// List all payment methods for the customer
		const paymentMethods = await stripe.getPaymentMethods(business.stripe_customer_id);
		const hasPaymentMethod = paymentMethods.some((pm) => pm.id === pm_id);
		if (!hasPaymentMethod) {
			res.status(400).json({ error: 'Payment method not found for this business' });
			return;
		}
		await stripe.client.paymentMethods.detach(pm_id);
		// Return updated payment methods
		const updatedPaymentMethods = await stripe.getPaymentMethods(business.stripe_customer_id);
		res.status(200).json({
			message: 'Payment method removed successfully',
			paymentMethods: updatedPaymentMethods,
		});
	} catch (error) {
		console.error('Error removing payment method:', error);
		res.status(400).json({
			error: 'Error removing payment method',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * GET /business/local/locations
 * @tag Business
 * @summary Get local locations with address_id
 * @description Retrieves all local locations that have an associated address_id.
 * @operationId getLocalLocations
 * @response 200 - Successful operation, returns the list of local locations with address_id
 * @responseContent {object} 200.application/json
 * @response 400 - Error retrieving local locations
 * @responseContent {object} 400.application/json The error object
 * @prisma_model local_locations
 */
async function getLocalLocations(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const locations = await LocalLocationDao.getAllLocalLocations();
		if (locations) {
			res.status(200).json(locations);
		} else {
			res.status(400).json({ error: 'No locations found for the given business ID' });
		}
	} catch (error) {
		console.error('Error getting local locations by business ID:', error);
		res.status(400).json({
			error: 'Error getting local locations by business ID',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * POST /business/local/locations/:business_id
 * @tag Business
 * @summary Create a new local location for a business
 * @description Creates a new local location for a business with the specified local_location_id and time.
 * @operationId createBusinessLocalLocation
 * @pathParam {string} business_id - The ID of the business to create the local location for
 * @bodyDescription The local location data to create.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Local location created successfully.
 * @responseContent {object} 201.application/json
 * @response 400 - Missing required fields in the request body
 * @responseContent {object} 400.application/json The error object
 * @response 500 - Error creating local location
 * @responseContent {object} 500.application/json The error object
 * @prisma_model business_local_locations
 */
async function createBusinessLocalLocation(
	req: ValidatedRequest<CreateBusinessLocalLocationInput, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id } = req.params;
		const { location } = req.body;
		if (!location?.local_location_id || !location?.time) {
			res.status(400).json({ error: 'Missing location' });
			return;
		}
		const stores_id = await stores.getStoresIdByBusinessId(business_id);
		if (!stores_id) {
			res.status(400).json({ error: 'Business does not have an associated store' });
			return;
		}
		const newLocation = await LocalLocationDao.createBusinessLocalLocation(
			stores_id,
			location.local_location_id,
			location.time
		);

		if (newLocation.stores_id) {
			businessIndex(business_id);
		}
		res.status(201).json(newLocation);
	} catch (error) {
		console.error('Error creating local location:', error);
		res.status(500).json({
			error: 'Error creating local location',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * PATCH /business/local/locations/:location_id
 * @tag Business
 * @summary Update a local location for a business
 * @description Updates the time of a local location for a business with the specified location_id.
 * @operationId updateBusinessLocalLocation
 * @pathParam {string} location_id - The ID of the local location to update
 * @bodyDescription The new time for the local location.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Local location updated successfully.
 * @responseContent {object} 200.application/json
 * @response 400 - Missing required fields in the request body
 * @responseContent {object} 400.application/json The error object
 * @response 500 - Error updating local location
 * @responseContent {object} 500.application/json The error object
 * @prisma_model business_local_locations
 */
async function updateBusinessLocalLocation(
	req: ValidatedRequest<UpdateBusinessLocalLocationInput, { location_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { location_id } = req.params;
		const { time } = req.body;
		if (!location_id || !time) {
			res.status(400).json({ error: 'Missing location' });
			return;
		}
		const updatedLocation = await LocalLocationDao.updateBusinessLocalLocation(location_id, new Date(time));
		if (updatedLocation?.business_id) {
			businessIndex(updatedLocation.business_id);
		}
		res.status(200).json(updatedLocation);
	} catch (error) {
		console.error('Error updating local location:', error);
		res.status(500).json({
			error: 'Error updating local location',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * POST /business/analytics/overall
 * @tag Business
 * @summary Get overall business analytics
 * @description Retrieves overall analytics for the authenticated business user, including revenue, orders, customer types, and promo analytics.
 * @operationId getBusinessOverallAnalytics
 * @bodyDescription The period parameters for analytics.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Analytics retrieved successfully.
 * @responseContent {object} 200.application/json
 * @response 401 - Unauthorized access.
 * @responseContent {object} 401.application/json The error object
 * @prisma_model delivery_orders
 * @prisma_model promo_analytics
 */
async function getBusinessOverallAnalytics(
	req: ValidatedRequest<GetBusinessAnalyticsInput>,
	res: Response
): Promise<void> {
	try {
		if (!req.user?.user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user_id = req.user.user_id;
		const bUser = await BusinessUsersDao.getBusinessUserByUserId(user_id);
		const business_id = bUser?.business_id;
		if (!bUser || !business_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const { type, periodStart, periodEnd, prevStart, prevEnd } = getPeriodsFromBody(req.body);

		// Fetch orders for current & previous periods
		const allOrdersCurrent = await DeliveryOrderDao.getAllCurrentOrdersByBusinessId(
			business_id,
			periodStart,
			periodEnd
		);
		let allOrdersPrevious: DeliveryOrderDetail[] = JSON.parse(JSON.stringify(allOrdersCurrent)); // creates deep copy
		const ordersCurrent = allOrdersCurrent.filter((o) => o.status === DELIVERY_ORDER_STATUS.SUCCESS);
		const ordersPrevious = allOrdersPrevious.filter((o) => o.status === DELIVERY_ORDER_STATUS.SUCCESS);
		// Prior orders for new customer calculation
		let priorCustomerOrders = await DeliveryOrderDao.getAllPriorOrdersByBusinessId(business_id, periodStart);

		let usersWithPriorOrders = new Set(priorCustomerOrders.map((o) => o.user_id).filter(Boolean));
		const currentUserOrdersMap = new Set<string>();
		for (const o of ordersCurrent) {
			if (!o.user_id) continue;
			const existing = currentUserOrdersMap.has(o.user_id);
			if (!existing) currentUserOrdersMap.add(o.user_id);
		}
		let newCustomers = 0;
		let returningCustomers = 0;
		for (const userId of currentUserOrdersMap.keys()) {
			if (!usersWithPriorOrders.has(userId)) {
				newCustomers++;
			} else {
				returningCustomers++;
			}
		}
		let prevNewCustomers = 0;
		let prevReturningCustomers = 0;
		if (type !== 4) {
			priorCustomerOrders = await DeliveryOrderDao.getAllPriorOrdersByBusinessId(business_id, periodStart);
			usersWithPriorOrders = new Set(priorCustomerOrders.map((o) => o.user_id).filter(Boolean));
			const previousUserOrdersMap = new Set<string>();
			for (const o of ordersPrevious) {
				if (!o.user_id) continue;
				const existing = previousUserOrdersMap.has(o.user_id);
				if (!existing) previousUserOrdersMap.add(o.user_id);
			}
			for (const userId of previousUserOrdersMap.keys()) {
				if (!usersWithPriorOrders.has(userId)) {
					prevNewCustomers++;
				} else {
					prevReturningCustomers++;
				}
			}
		}
		// Revenue (sum of details.total_price) & counts
		const sumRevenue = (orders) => orders.reduce((sum, o) => sum + (Number(o.details?.total_price) || 0), 0);
		const revenue = sumRevenue(ordersCurrent);
		const revenue_previous = sumRevenue(ordersPrevious);
		const orders = ordersCurrent.length;
		const orders_previous = ordersPrevious.length;
		// Delivery vs pickup
		const deliveries = ordersCurrent.filter((o) => o.details?.type !== 'pickup').length;
		const pickups = ordersCurrent.length - deliveries;
		const deliveries_previous = ordersPrevious.filter((o) => o.details?.type !== 'pickup').length;
		const pickups_previous = ordersPrevious.length - deliveries_previous;

		const promoAnalytics = await PromoAnalyticsDao.getAllPromoAnalyticsForPeriod(
			business_id,
			periodStart,
			periodEnd
		);
		// Build day buckets between periodStart and periodEnd
		const dayBuckets = {};
		for (let d = atStartOfDay(periodStart); d <= periodEnd; d = addDays(d, 1)) {
			dayBuckets[formatDay(d)] = {
				impressionsUsers: new Set(),
				clicksUsers: new Set(),
				orderStartsUsers: new Set(),
				impressions: 0,
				clicks: 0,
				orderStarts: 0,
				ordersCreated: 0,
				ordersFinished: 0,
			};
		}
		for (const pa of promoAnalytics) {
			const day = formatDay(pa.created_at);
			if (!dayBuckets[day]) continue;
			if (pa.type === ANALYTICS_TYPE.VIEW) {
				dayBuckets[day].impressions++;
				if (pa.user_id) dayBuckets[day].impressionsUsers.add(pa.user_id);
			} else if (pa.type === ANALYTICS_TYPE.CLICK) {
				dayBuckets[day].clicks++;
				if (pa.user_id) dayBuckets[day].clicksUsers.add(pa.user_id);
			} else if (pa.type === ANALYTICS_TYPE.ORDER_START) {
				dayBuckets[day].orderStarts++;
				if (pa.user_id) dayBuckets[day].orderStartsUsers.add(pa.user_id);
			}
		}
		// Orders per day
		for (const o of allOrdersCurrent) {
			if (o.status === DELIVERY_ORDER_STATUS.SUCCESS) {
				const day = formatDay(o.updated_at);
				if (!dayBuckets[day]) continue;
				dayBuckets[day].ordersFinished++;
			} else {
				const day = formatDay(o.created_at);
				if (!dayBuckets[day]) continue;
				dayBuckets[day].ordersCreated++;
			}
		}
		const timeline = Object.entries(dayBuckets)
			.sort((a, b) => (a[0] < b[0] ? -1 : 1))
			.map(([date, v]) => ({
				date,
				impressions: v.impressions || 0,
				impressionsUsers: v.impressionsUsers.size || 0,
				clicks: v.clicks || 0,
				clicksUsers: v.clicksUsers.size || 0,
				orderStarts: v.orderStarts || 0,
				orderStartsUsers: v.orderStartsUsers.size || 0,
				ordersFinished: v.ordersFinished || 0,
				ordersCreated: v.ordersCreated || 0,
			}));

		return res.status(200).json({
			revenue,
			revenue_previous: type === 4 ? null : revenue_previous,
			orders,
			orders_previous: type === 4 ? null : orders_previous,
			new_customers: newCustomers,
			new_customers_previous: type === 4 ? null : prevNewCustomers,
			returning_customers: returningCustomers,
			returning_customers_previous: type === 4 ? null : prevReturningCustomers,
			deliveries,
			deliveries_previous: type === 4 ? null : deliveries_previous,
			pickups,
			pickups_previous: type === 4 ? null : pickups_previous,
			timeline,
		});
	} catch (error) {
		console.error('Error getting business overall analytics:', error);
		res.status(500).json({
			error: 'Error getting business overall analytics',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
// Helper: build promo buckets by id for a list of analytics rows
function buildPromoBuckets(
	analyticsRows,
	idKey,
	{ includeUserBreakdown = false, priorUsers = new Set(), dayBuckets = {} } = {}
) {
	const bucket = {
		impressions: 0,
		impressionsUsers: new Set(),
		clicks: 0,
		clicksUsers: new Set(),
		orderStarts: 0,
		orderStartsUsers: new Set(),
		ordersCreated: new Set(),
		ordersFinished: new Set(),
		newUsers: new Set(),
		returningUsers: new Set(),
		revenue: 0,
	};
	for (const pa of analyticsRows || []) {
		const day = formatDay(pa.created_at);
		const d = dayBuckets[day];
		const id = pa[idKey] || 'unknown';
		if (pa.type === ANALYTICS_TYPE.VIEW) {
			bucket.impressions++;
			if (d) d.impressions++;
			if (pa.user_id) {
				bucket.impressionsUsers.add(pa.user_id);
				if (d) d.impressionsUsers.add(pa.user_id);
			}
		} else if (pa.type === ANALYTICS_TYPE.CLICK) {
			bucket.clicks++;
			if (d) d.clicks++;
			if (pa.user_id) {
				bucket.clicksUsers.add(pa.user_id);
				if (d) d.clicksUsers.add(pa.user_id);
			}
		} else if (pa.type === ANALYTICS_TYPE.ORDER_START) {
			bucket.orderStarts++;
			if (d) d.orderStarts++;
			if (pa.user_id) {
				bucket.orderStartsUsers.add(pa.user_id);
				if (d) d.orderStartsUsers.add(pa.user_id);
			}
		} else if (pa.type === ANALYTICS_TYPE.ORDER_CREATE) {
			bucket.ordersCreated.add(pa.order_id);
			if (d) d.ordersCreated.add(pa.order_id);
		} else if (pa.type === ANALYTICS_TYPE.ORDER_FINISH) {
			const price = Number(pa.order?.details?.total_price) || 0;
			if (!bucket.ordersFinished.has(pa.order_id)) bucket.revenue += price;
			bucket.ordersFinished.add(pa.order_id);
			if (d) {
				if (!d.ordersFinished.has(pa.order_id)) d.revenue += price;
				d.ordersFinished.add(pa.order_id);
				if (!d.revenueBreakdown[id]) d.revenueBreakdown[id] = 0;
				d.revenueBreakdown[id] += price;
			}
		}
		if (includeUserBreakdown && pa.user_id) {
			if (!priorUsers.has(pa.user_id)) bucket.newUsers.add(pa.user_id);
			else bucket.returningUsers.add(pa.user_id);
		}
	}
	return {
		...bucket,
		impressionsUsers: bucket.impressionsUsers.size,
		clicksUsers: bucket.clicksUsers.size,
		orderStartsUsers: bucket.orderStartsUsers.size,
		newUsers: bucket.newUsers.size,
		returningUsers: bucket.returningUsers.size,
		ordersCreated: bucket.ordersCreated.size,
		ordersFinished: bucket.ordersFinished.size,
	};
}

/**
 * POST /business/analytics/promo/sections
 * @tag Business
 * @summary Promo analytics for sections
 * @description Returns promo analytics for sections for a business and time period, including purchased promo sections.
 * @operationId getBusinessPromoSectionsAnalytics
 * @bodyDescription Time period definition
 * @bodyContent {} application/json
 * @bodyRequired
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid request
 * @response 401 - Unauthorized
 * @prisma_model promo_sections_buy
 * @prisma_model promo_sections
 * @prisma_model promo_analytics
 */
async function getBusinessPromoSectionsAnalytics(
	req: ValidatedRequest<GetBusinessAnalyticsInput & { ids?: string[] }>,
	res: Response
): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		const bUser = await BusinessUsersDao.getBusinessUserByUserId(user_id);
		const business_id = bUser?.business_id;
		if (!bUser || !business_id) {
			return res.status(401).json({ error: 'Unauthorized' });
		}

		const { periodStart, periodEnd, prevStart, prevEnd } = getPeriodsFromBody(req.body);

		const sectionIds = req.body?.ids;
		let promoSections = await PromoDao.getAllPromoSectionBuysByBusiness(business_id, {
			active_at: { lte: periodEnd },
			expires_at: { gte: periodStart },
		});

		const current = await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
			business_id,
			periodStart,
			periodEnd,
			PROMO_TYPE.SECTION,
			undefined,
			sectionIds
		);
		const previous =
			prevStart && prevEnd
				? await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
						business_id,
						prevStart,
						prevEnd,
						PROMO_TYPE.SECTION,
						undefined,
						sectionIds
					)
				: [];
		const prior = await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
			business_id,
			new Date(0),
			prevEnd || new Date(periodStart.getTime() - 1),
			PROMO_TYPE.SECTION,
			undefined,
			sectionIds
		);
		const priorUsers = new Set(prior.map((r) => r.user_id).filter(Boolean));
		const dayBuckets = {};
		for (let d = atStartOfDay(periodStart); d <= periodEnd; d = addDays(d, 1)) {
			dayBuckets[formatDay(d)] = {
				impressionsUsers: new Set(),
				clicksUsers: new Set(),
				impressions: 0,
				clicks: 0,
				orderStarts: 0,
				orderStartsUsers: new Set(),
				ordersCreated: new Set(),
				ordersFinished: new Set(),
				revenue: 0,
				revenueBreakdown: {},
			};
		}
		// Build buckets keyed by promo_sections_id
		const bucketsCurrent = buildPromoBuckets(current, 'promo_sections_id', {
			includeUserBreakdown: true,
			priorUsers,
			dayBuckets,
		});
		const bucketsPrevious = buildPromoBuckets(previous, 'promo_sections_id');
		const results = {
			current: bucketsCurrent,
			previous: bucketsPrevious,
			timeline: Object.entries(dayBuckets)
				.sort((a, b) => (a[0] < b[0] ? -1 : 1))
				.map(([date, v]) => ({
					date,
					impressions: v.impressions || 0,
					impressionsUsers: v.impressionsUsers.size || 0,
					clicks: v.clicks || 0,
					clicksUsers: v.clicksUsers.size || 0,
					orderStarts: v.orderStarts || 0,
					orderStartsUsers: v.orderStartsUsers.size || 0,
					ordersFinished: v.ordersFinished.size || 0,
					ordersCreated: v.ordersCreated.size || 0,
					revenue: v.revenue || 0,
					revenueBreakdown: v.revenueBreakdown || {},
				})),
		};

		res.status(200).json({
			items: results,
			sections: promoSections,
		});
	} catch (error) {
		const status = error && typeof error === 'object' && 'status' in error ? (error.status as number) : 500;
		console.error('Error getting promo sections analytics:', error);
		res.status(status).json({
			error: 'Error getting promo sections analytics',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * POST /business/analytics/promo/words
 * @tag Business
 * @summary Promo analytics for words
 * @description Returns promo analytics for words for a business and time period, including purchased words.
 * @operationId getBusinessPromoWordsAnalytics
 * @bodyDescription Time period definition
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid request
 * @response 401 - Unauthorized
 * @prisma_model word_buy
 * @prisma_model words
 * @prisma_model promo_analytics
 */
async function getBusinessPromoWordsAnalytics(
	req: ValidatedRequest<GetBusinessAnalyticsInput & { ids?: string[] }>,
	res: Response
): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		const bUser = await BusinessUsersDao.getBusinessUserByUserId(user_id);
		const business_id = bUser?.business_id;
		if (!bUser || !business_id) {
			return res.status(401).json({ error: 'Unauthorized' });
		}

		const { periodStart, periodEnd, prevStart, prevEnd } = getPeriodsFromBody(req.body);

		const wordIds = req.body?.ids;
		const promoWords = await WordDao.getAllWordBuysByBusiness(business_id, {
			deleted_at: null,
			active_at: { lte: periodEnd },
			expires_at: { gte: periodStart },
		});

		const current = await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
			business_id,
			periodStart,
			periodEnd,
			PROMO_TYPE.WORD,
			wordIds
		);
		const previous =
			prevStart && prevEnd
				? await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
						business_id,
						prevStart,
						prevEnd,
						PROMO_TYPE.WORD,
						wordIds
					)
				: [];
		const prior = await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
			business_id,
			new Date(0),
			prevEnd || new Date(periodStart.getTime() - 1),
			PROMO_TYPE.WORD,
			wordIds
		);
		const priorUsers = new Set(prior.map((r) => r.user_id).filter(Boolean));
		const dayBuckets = {};
		for (let d = atStartOfDay(periodStart); d <= periodEnd; d = addDays(d, 1)) {
			dayBuckets[formatDay(d)] = {
				impressionsUsers: new Set(),
				clicksUsers: new Set(),
				impressions: 0,
				clicks: 0,
				orderStarts: 0,
				orderStartsUsers: new Set(),
				ordersCreated: new Set(),
				ordersFinished: new Set(),
				revenue: 0,
				revenueBreakdown: {},
			};
		}
		const bucketCurrent = buildPromoBuckets(current, 'word_id', {
			includeUserBreakdown: true,
			priorUsers,
			dayBuckets,
		});
		const bucketPrevious = buildPromoBuckets(previous, 'word_id');
		const results = {
			current: bucketCurrent,
			previous: bucketPrevious,
			timeline: Object.entries(dayBuckets)
				.sort((a, b) => (a[0] < b[0] ? -1 : 1))
				.map(([date, v]) => ({
					date,
					impressions: v.impressions || 0,
					impressionsUsers: v.impressionsUsers.size || 0,
					clicks: v.clicks || 0,
					clicksUsers: v.clicksUsers.size || 0,
					orderStarts: v.orderStarts || 0,
					orderStartsUsers: v.orderStartsUsers.size || 0,
					ordersFinished: v.ordersFinished.size || 0,
					ordersCreated: v.ordersCreated.size || 0,
					revenue: v.revenue || 0,
					revenueBreakdown: v.revenueBreakdown || {},
				})),
		};

		return res.status(200).json({
			items: results,
			words: promoWords,
		});
	} catch (error) {
		const status = error && typeof error === 'object' && 'status' in error ? (error.status as number) : 500;
		console.error('Error getting promo words analytics:', error);
		res.status(status).json({
			error: 'Error getting promo words analytics',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * POST /business/analytics/promo/ads
 * @tag Business
 * @summary Promo analytics for ads
 * @description Returns promo analytics for ads for a business and time period, including purchased ads if applicable.
 * @operationId getBusinessPromoAdsAnalytics
 * @bodyDescription Time period definition
 * @bodyContent {
 *   "type": 0,
 *   "start_date": "2025-01-01T00:00:00.000Z",
 *   "end_date": null,
 *   "ids": ["optional array of promo_ads_id to filter"]
 * } application/json
 * @bodyRequired
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid request
 * @response 401 - Unauthorized
 * @prisma_model promo_ads
 * @prisma_model promo_analytics
 */
async function getBusinessPromoAdsAnalytics(
	req: ValidatedRequest<GetBusinessAnalyticsInput & { ids?: string[] }>,
	res: Response
): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		const bUser = await BusinessUsersDao.getBusinessUserByUserId(user_id);
		const business_id = bUser?.business_id;
		if (!bUser || !business_id) {
			return res.status(401).json({ error: 'Unauthorized' });
		}

		const { periodStart, periodEnd, prevStart, prevEnd } = getPeriodsFromBody(req.body);

		const adIds = req.body?.ids;
		const promoAds = []; // TODO: await PromoDao.getAllPromoAdsBuysByBusiness(business_id);

		const current = await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
			business_id,
			periodStart,
			periodEnd,
			PROMO_TYPE.AD,
			undefined,
			undefined,
			adIds
		);
		const previous =
			prevStart && prevEnd
				? await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
						business_id,
						prevStart,
						prevEnd,
						PROMO_TYPE.AD,
						undefined,
						undefined,
						adIds
					)
				: [];
		const prior = await PromoAnalyticsDao.getPromoAnalyticsForPeriodByPromoType(
			business_id,
			new Date(0),
			prevEnd || new Date(periodStart.getTime() - 1),
			PROMO_TYPE.AD,
			undefined,
			undefined,
			adIds
		);
		const priorUsers = new Set(prior.map((r) => r.user_id).filter(Boolean));
		const dayBuckets = {};
		for (let d = atStartOfDay(periodStart); d <= periodEnd; d = addDays(d, 1)) {
			dayBuckets[formatDay(d)] = {
				impressionsUsers: new Set(),
				clicksUsers: new Set(),
				impressions: 0,
				clicks: 0,
				orderStarts: 0,
				orderStartsUsers: new Set(),
				ordersCreated: new Set(),
				ordersFinished: new Set(),
				revenue: 0,
				revenueBreakdown: {},
			};
		}
		// Build buckets keyed by promo_ads_id
		const bucketsCurrent = buildPromoBuckets(current, 'promo_ads_id', {
			includeUserBreakdown: true,
			priorUsers,
			dayBuckets,
		});
		const bucketsPrevious = buildPromoBuckets(previous, 'promo_ads_id');
		const results = {
			current: bucketsCurrent,
			previous: bucketsPrevious,
			timeline: Object.entries(dayBuckets)
				.sort((a, b) => (a[0] < b[0] ? -1 : 1))
				.map(([date, v]) => ({
					date,
					impressions: v.impressions || 0,
					impressionsUsers: v.impressionsUsers.size || 0,
					clicks: v.clicks || 0,
					clicksUsers: v.clicksUsers.size || 0,
					orderStarts: v.orderStarts || 0,
					orderStartsUsers: v.orderStartsUsers.size || 0,
					ordersFinished: v.ordersFinished.size || 0,
					ordersCreated: v.ordersCreated.size || 0,
					revenue: v.revenue || 0,
					revenueBreakdown: v.revenueBreakdown || {},
				})),
		};

		res.status(200).json({
			items: results,
			ads: promoAds,
		});
	} catch (error) {
		const status = error && typeof error === 'object' && 'status' in error ? (error.status as number) : 500;
		console.error('Error getting promo ads analytics:', error);
		res.status(status).json({
			error: 'Error getting promo ads analytics',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * PUT /business/admin/:business_id/types
 * @tag BusinessTypes
 * @summary Replace all business types for a business
 * @description Sets the list of type_ids for a given business using junction table business_to_types.
 * @operationId setBusinessTypes
 * @bodyDescription Array of business_type IDs to assign
 * @bodyContent {
 *   "type_ids": ["uuid1", "uuid2"]
 * } application/json
 * @bodyRequired
 * @response 200 - Types updated successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
 *   "business_id": "uuid",
 *   "type_ids": ["uuid1", "uuid2"]
 * }
 * @response 500 - Error updating business types
 * @prisma_model business_to_types
 */
export async function setBusinessTypesForBusiness(
	req: ValidatedRequest<SetBusinessTypesInput, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id } = req.params;
		const { type_ids } = req.body;
		const result = await BusinessTypesDao.setBusinessTypes(business_id, type_ids || []);
		res.json(result);
	} catch (error) {
		res.status(500).json({
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * PATCH /business/admin/premises/:business_premise_id/confirm
 * @tag Business
 * @summary Confirm business premise registration (admin)
 * @description Sets is_registered=true and registered_at=now for the given business premise.
 * @operationId confirmBusinessPremise
 * @pathParam {string} business_premise_id - Business premise id
 * @response 200 - Premise confirmed
 * @prisma_model business_premise
 */
async function confirmBusinessPremise(
	req: ValidatedRequest<never, { business_premise_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_premise_id } = req.params;
		const premise = await InvoicesDao.confirmBusinessPremise(business_premise_id);
		res.status(200).json(premise);
	} catch (error) {
		console.error('DriverController.confirmBusinessPremise', error);
		res.status(500).json({
			error: 'Error confirming business premise',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * PATCH /business/:business_id/transport-module
 * @tag Business
 * @summary Enable or disable transport module for a business
 * @description Toggles the transport module for the specified business.
 * @operationId toggleTransportModule
 * @pathParam {string} business_id - The ID of the business
 * @bodyDescription Object containing the enabled status
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Transport module toggled successfully.
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid request body
 * @responseContent {object} 400.application/json The error object
 * @response 500 - Error toggling transport module
 * @responseContent {object} 500.application/json The error object
 * @prisma_model transport_module
 */
async function toggleTransportModule(
	req: ValidatedRequest<ToggleTransportModuleInput, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id } = req.params;
		const { enabled } = req.body;
		if (typeof enabled !== 'boolean') {
			res.status(400).json({ error: 'enabled must be a boolean' });
			return;
		}
		const updatedBusiness = enabled
			? await TransportDao.enableTransportModule(business_id)
			: await TransportDao.disableTransportModule(business_id);
		if (updatedBusiness?.business_id) {
			businessIndex(updatedBusiness.business_id);
		}
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error toggling transport module:', error);
		res.status(500).json({
			error: 'Error toggling transport module',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
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
