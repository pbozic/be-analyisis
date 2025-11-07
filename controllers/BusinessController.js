import { config } from 'dotenv';
import { PROMO_TYPE, ANALYTICS_TYPE } from '@prisma/client';

import BusinessDao from '../dao/Business.js';
import Constants, { DELIVERY_ORDER_END_STATES } from '../lib/constants.js';
import stripe from '../lib/stripe.js';
import UserDao from '../dao/User.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import { DELIVERY_ORDER_STATUS, SCORING_POINTS_REASON, ACCOUNT_ACTIONS_REASON } from '../lib/constants.js';
import { calculateBusinessEarnings, calculateTotalEarnings } from '../lib/helpersLib.js';
import prisma from '../prisma/prisma.js';
import EmailHelper from '../lib/emailSender.js';
import socket from '../socket.js';
import elasticsearch from '../elasticsearch/index.js';
import UserFavoriteBusinessDao from '../dao/UserFavoriteBusiness.js';
import ScoringPointsDao from '../dao/ScoringPoints.js';
import LocalLocationDao from '../dao/LocalLocation.js';
import stores from '../dao/stores.ts';
import { logPromoAnalytics } from '../lib/analytics.ts';
import { addDays, atStartOfDay, formatDay, getPeriodStartAndEnd, getPreviousPeriod } from '../lib/dateHelpers.js';
import BusinessUsersDao from '../dao/BusinessUsers.js';
import PromoAnalyticsDao from '../dao/PromoAnalytics.js';
import PromoDao from '../dao/Promo.js';
import WordDao from '../dao/Word.js';
import BusinessTypesDao from '../dao/BusinessTypes.js';
import InvoicesDao from '../dao/Invoices.js';
import TransportDao from '../dao/Transport.js';
config();
const { UserSockets, io } = socket;
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
async function activateBusiness(req, res) {
	try {
		if (!req.user.user_id) {
			throw new Error('Missing creator user_id.');
		}
		const { business_id, reason } = req.body;
		if (!business_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason)) {
			throw new Error('Missing business_id or invalid reason.');
		}
		const business = await BusinessDao.activateBusiness(business_id, req.user.user_id, reason);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
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
async function deactivateBusiness(req, res) {
	try {
		if (!req.user.user_id) {
			throw new Error('Missing creator user_id.');
		}
		const { business_id, reason } = req.body;
		if (!business_id || !Object.values(ACCOUNT_ACTIONS_REASON).includes(reason)) {
			throw new Error('Missing business_id or invalid reason.');
		}
		const business = await BusinessDao.deactivateBusiness(business_id, req.user.user_id, reason);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
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
async function listBusinesses(req, res) {
	try {
		let businesses = await BusinessDao.getBusinessesByType(Constants.BUSINESS_TYPE.BUSINESS);
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
 * POST /businesses/ids
 * @tag Business
 * @summary Get a list of businesses business_ids
 * @description Returns a list of businesses.
 * @operationId getBusinessesByIds
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model businesses
 * @prisma_model documents
 * @prisma_model files
 */
async function getBusinessesByIds(req, res) {
	try {
		const { business_ids } = req.body;
		console.log('business_ids:,', business_ids);
		let businesses = await BusinessDao.getBusinessesForSearchById(business_ids);
		if (businesses) {
			businesses.forEach((business) => {
				let logo, banner;
				for (let d of business.documents) {
					if (d.document_type === 'LOGO') {
						logo = d.files[0].url;
					} else if (d.document_type === 'BANNER') {
						banner = d.files[0].url;
					}
				}
				business.logo = logo;
				business.banner = banner;
			});
			res.status(200).json(businesses);
		} else {
			res.status(400).json({
				error: 'Error obtaining list of businesses..',
			});
		}
	} catch (e) {
		res.status(400).json({ error: 'Error obtaining list of businesses..', e: e.message });
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
async function searchBusinesses(req, res) {
	try {
		let esResults = await fullSearch(
			req.body.query || '',
			req.body.location.lat,
			req.body.location.long,
			req.body.categoryIds || [],
			req.body.radius,
			req.body.filterOperator,
			req.body.isDailyMealSearch,
			null,
			req.body.page,
			req.body.pageSize || 10,
			[],
			req.body.type || null
		);
		console.log('esResults', esResults);
		esResults.results.sort((a, b) => b.score - a.score);
		let businesses = await BusinessDao.getBusinessesForSearchById(esResults.results.map((b) => b.business_id));
		let results = {
			...esResults,
			results: esResults.results.map((esResult) => {
				let business = businesses.find((b) => b.business_id === esResult.business_id);
				return {
					...business,
					...esResult,
				};
			}),
		};
		if (results) {
			for (const resItem of results.results) {
				const matchedWords = resItem?.matched?.word_buys || [];
				const wordIds = [...new Set(matchedWords.map((w) => w.word_id).filter(Boolean))];
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
	} catch (e) {
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
async function listMerchantBusinesses(req, res) {
	//TODO: elastic search
	try {
		const merchantBusinesses = await BusinessDao.getBusinessesByType([
			Constants.BUSINESS_TYPE.MERCHANT,
			Constants.BUSINESS_TYPE.RESTAURANT,
			Constants.BUSINESS_TYPE.LOCAL,
		]);
		res.status(200).json(merchantBusinesses);
	} catch (e) {
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
async function listPromoSectionsWithMerchants(req, res) {
	try {
		const promoSections = await prisma.promo_sections.findMany({
			where: {},
			include: {
				translatable: {
					include: { translations: true },
				},
			},
		});
		const userId = req.user?.user_id;
		const finalPromoSections = [...promoSections];
		let favoriteBusinessIds = null;
		if (userId) {
			const user = await UserDao.getUserById(userId, {
				include: {
					user_favorite_businesses: true,
				},
			});
			favoriteBusinessIds = user.user_favorite_businesses?.map((b) => b.business_id);
			if (favoriteBusinessIds?.length > 0) {
				finalPromoSections.unshift({
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
				});
			}
		}

		for (let promoSection of finalPromoSections) {
			let favorite = promoSection.tag === 'favorite';
			let local = promoSection.tag === 'local';
			let merchants = promoSection.tag === 'merchants';
			let translations = {};
			if (!favorite) {
				for (let translation of promoSection.translatable.translations) {
					translations[translation.language] = translation.translation;
				}
			} else {
				translations = promoSection.translations;
			}
			let esResults = await fullSearch(
				'',
				req.body.location.lat,
				req.body.location.long,
				[],
				req.body.radius,
				req.body.filterOperator || 'OR',
				req.body.isDailyMealSearch || false,
				null, //favorite ? null : promoSection.promo_sections_id,
				1,
				10,
				favorite ? favoriteBusinessIds : null,
				local ? Constants.BUSINESS_TYPE.LOCAL : merchants ? Constants.BUSINESS_TYPE.MERCHANT : null
			);
			console.log('esResults for promoSection', promoSection.tag, esResults);
			promoSection.translations = translations;
			if (!esResults || !esResults.results || esResults.results.length === 0) {
				esResults.results = [];
			}
			let providerIds = esResults.results.map((r) => r.business_id);
			let providers = await BusinessDao.getBusinessesForSearchById(providerIds);
			let result = [];
			for (let provider of providers) {
				let esResult = esResults.results.find((r) => r.business_id === provider.business_id);
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
			promoSection.providers = result;
			delete promoSection.translatable;
		}
		res.status(200).json(finalPromoSections);
	} catch (e) {
		console.error('Error listing merchant businesses:', e);
		res.status(400).json({ error: 'Error listing merchant businesses', m: e.message });
	}
}
/**
 * GET /businesses/merchant/daily-meals
 * @tag Business
 * @summary List all merchant businesses offering daily meals
 * @description Retrieves a list of all businesses classified as merchants that offer daily meals.
 * @operationId listMerchantBusinessesWithDailyMeals
 * @response 200 - Successful operation, returns a list of merchant businesses offering daily meals
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 * @prisma_model businesses
 */
async function listMerchantBusinessesWithDailyMeals(req, res) {
	try {
		const merchantBusinesses = await BusinessDao.getBusinessesByType(
			[Constants.BUSINESS_TYPE.MERCHANT, Constants.BUSINESS_TYPE.RESTAURANT, Constants.BUSINESS_TYPE.LOCAL],
			{
				offers_daily_meals: true,
			}
		);
		res.status(200).json(merchantBusinesses);
	} catch (e) {
		console.error('Error listing merchant businesses with daily meals:', e);
		res.status(400).json({ error: 'Error listing merchant businesses with daily meals', e });
	}
}
/**
 * GET /businesses/merchant/main
 * @tag Business
 * @summary List all merchant businesses offering daily meals
 * @description Retrieves a list of all businesses classified as merchants that offer daily meals.
 * @operationId listMerchantBusinessesWithDailyMeals
 * @response 200 - Successful operation, returns a list of merchant businesses offering daily meals
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 * @prisma_model businesses
 */
async function listMerchantBusinessesMainInfo(req, res) {
	try {
		const merchantBusinesses = await BusinessDao.getBusinessesByTypeMainInformation([
			Constants.BUSINESS_TYPE.MERCHANT,
			Constants.BUSINESS_TYPE.RESTAURANT,
			Constants.BUSINESS_TYPE.LOCAL,
		]);
		res.status(200).json(merchantBusinesses);
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
async function listTransferBusinessesMainInfo(req, res) {
	try {
		const transferBusinesses = await BusinessDao.getBusinessesByTypeMainInformation(
			Constants.BUSINESS_TYPE.TRANSFER
		);
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
async function listTransferBusinesses(req, res) {
	try {
		const taxiBusinesses = await BusinessDao.getBusinessesByType(Constants.BUSINESS_TYPE.TRANSFER);
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
async function getBusinessById(req, res) {
	try {
		const business = await BusinessDao.getBusinessById(req.params.business_id);
		const paymentMethods = await stripe.getPaymentMethods(business.stripe_customer_id);
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
async function getBusinessAdminDataById(req, res) {
	try {
		console.log('getBusinessAdminDataById', req.params.business_id);
		const business = await BusinessDao.getBusinessAdminDataById(req.params.business_id);
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
 * GET /business/search/:business_id
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
async function getBusinessForSearchById(req, res) {
	try {
		const { ANALYTICS_PARAM_PROMO_WORDS, ANALYTICS_PARAM_PROMO_SECTION, ANALYTICS_PARAM_PROMO_AD } = req.query;
		const business = await BusinessDao.getBusinessForSearchById(req.params.business_id);
		let logo, banner;
		for (let d of business.documents) {
			if (d.document_type === 'LOGO') {
				logo = d.files[0].url;
			} else if (d.document_type === 'BANNER') {
				banner = d.files[0].url;
			}
		}
		business.logo = logo;
		business.banner = banner;
		business.menu = business.menus.find((m) => m.isDailyMeal === false);
		business.dailyMenu = business.menus.find((m) => m.isDailyMeal === true);
		business.menus = null;
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
async function getParentBusiness(req, res) {
	try {
		const parentBusiness = await BusinessDao.getParentBusiness(req.params.business_id);
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
async function getChildBusinesses(req, res) {
	try {
		const childBusinesses = await BusinessDao.getChildBusinesses(req.params.parent_business_id);
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
async function createNewBusiness(req, res) {
	try {
		const newBusiness = await BusinessDao.createNewBusiness({
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
 * PATCH /business/
 * @tag Business
 * @summary Updates the business details
 * @description This endpoint is used to update the business details.
 * @operationId updateBusiness
 * @pathParam {string} businessId - The ID of the business to update
 * @bodyDescription The data to update for the business.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Business updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function update(req, res) {
	console.info('update business', req.body);
	const business_id = req.business?.business_id || req.body.business_id;
	try {
		let business = await BusinessDao.updateBusiness(business_id, req.body);
		if (business) {
			if (req.userSocket) req.userSocket.emit('updateBusiness', business);
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business information' });
	} catch (e) {
		console.error('Error updating business information:', e);
		res.status(400).json({ error: 'Error updating business information', e });
	}
}
/**
 * PATCH /business/type
 * @tag Business
 * @summary Updates a business's type
 * @description This endpoint is used to update a business's type.
 * @operationId updateBusinessType
 * @bodyDescription The new type for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Type updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function updateBusinessType(req, res) {
	try {
		let business = await BusinessDao.updateBusinessType(req.params.business_id, req.body.type);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business type' });
	} catch (e) {
		console.error('Error updating business type:', e);
		res.status(400).json({ error: 'Error updating business type', e });
	}
}
/**
 * PATCH /business/business-unit
 * @tag Businesses
 * @summary Updates the business unit status
 * @description This endpoint is used to update whether a business is considered a business unit.
 * @operationId updateIsBusinessUnit
 * @bodyDescription The new business unit status
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Business unit status updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function updateIsBusinessUnit(req, res) {
	try {
		let business = await BusinessDao.updateIsBusinessUnit(req.params.business_id, req.body.is_business_unit);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business unit status' });
	} catch (e) {
		console.error('Error updating business unit status:', e);
		res.status(400).json({ error: 'Error updating business unit status', e });
	}
}
/**
 * PATCH /business/business-group-name
 * @tag Businesses
 * @summary Updates a business's group name
 * @description This endpoint is used to update a business's group name.
 * @operationId updateBusinessGroupName
 * @bodyDescription The new group name for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Group name updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function updateBusinessGroupName(req, res) {
	try {
		let business = await BusinessDao.updateBusinessGroupName(req.params.business_id, req.body.business_group_name);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business group name' });
	} catch (e) {
		console.error('Error updating business group name:', e);
		res.status(400).json({ error: 'Error updating business group name', e });
	}
}
/**
 * PATCH /business/email/
 * @tag Business
 * @summary Updates a business's email
 * @description This endpoint is used to update a business's email address.
 * @operationId updateBusinessEmail
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new email for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Email updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function updateBusinessEmail(req, res) {
	try {
		let business = await BusinessDao.updateBusinessEmail(req.params.business_id, req.body.email);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business email' });
	} catch (e) {
		console.error('Error updating business email:', e);
		res.status(400).json({ error: 'Error updating business email', e });
	}
}
/**
 * PATCH /business/telephone/
 * @tag Business
 * @summary Updates a business's telephone
 * @description This endpoint is used to update a business's telephone number.
 * @operationId updateBusinessTelephone
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new telephone details for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Telephone updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function updateBusinessTelephone(req, res) {
	try {
		let business = await BusinessDao.updateBusinessTelephone(
			req.params.business_id,
			req.body.telephone,
			req.body.telephone_code
			// req.body.telephone_number
		);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business telephone' });
	} catch (e) {
		console.error('Error updating business telephone:', e);
		res.status(400).json({ error: 'Error updating business telephone', e });
	}
}
/**
 * PATCH /business/workingHours
 * @tag Business
 * @summary Updates a business's working hours
 * @description This endpoint is used to update a business's working hours.
 * @operationId updateBusinessWorkingHours
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new working hours for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Working hours updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function updateBusinessWorkingHours(req, res) {
	try {
		let business = await BusinessDao.updateBusinessWorkingHours(req.params.business_id, req.body.working_hours);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business working hours' });
	} catch (e) {
		console.error('Error updating business working hours:', e);
		res.status(400).json({ error: 'Error updating business working hours', e });
	}
}
/**
 * PATCH /business/overwhelmed/{business_id}
 * @tag Business
 * @summary Updates the overwhelmed status of a restaurant
 * @description This endpoint is used to update whether a restaurant is considered overwhelmed.
 * @operationId updateRestaurantOverwhelmed
 * @pathParam {string} business_id - The ID of the restaurant to update
 * @bodyDescription The overwhelmed status for the restaurant
 * @bodyContent {object} application/json
 * @response 200 - Overwhelmed status updated successfully. Returns the updated restaurant details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating restaurant information.
 * @prisma_model businesses
 */
async function updateRestaurantOverwhelmed(req, res) {
	try {
		let business = await BusinessDao.updateRestaurantOverwhelmed(
			req.params.business_id,
			req.body.restaurant_overwhelmed
		);
		if (business) {
			businessIndex(business.business_id);
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating restaurant overwhelmed' });
	} catch (e) {
		console.error('Error updating business restaurant overwhelmed:', e);
		res.status(400).json({ error: 'Error updating business restaurant overwhelmed', e });
	}
}
/**
 * PATCH /business/new
 * @tag Business
 * @summary Updates the new status of a business
 * @description This endpoint is used to update whether a business is considered new.
 * @operationId updateBusinessIsNew
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new status for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - New status updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function updateBusinessIsNew(req, res) {
	try {
		let business = await BusinessDao.updateBusinessIsNew(req.params.business_id, req.body.new);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business new status' });
	} catch (e) {
		console.error('Error updating business new status:', e);
		res.status(400).json({ error: 'Error updating business new status', e });
	}
}
/**
 * PATCH /business/popular
 * @tag Business
 * @summary Updates the popularity status of a business
 * @description This endpoint is used to update whether a business is considered popular.
 * @operationId updateBusinessIsPopular
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The popularity status for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Popularity status updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business information.
 * @prisma_model businesses
 */
async function updateBusinessIsPopular(req, res) {
	try {
		let business = await BusinessDao.updateBusinessIsPopular(req.params.business_id, req.body.popular);
		if (business) {
			if (
				business.type === Constants.BUSINESS_TYPE.MERCHANT ||
				business.type === Constants.BUSINESS_TYPE.RESTAURANT ||
				business.type === Constants.BUSINESS_TYPE.LOCAL
			) {
				businessIndex(business.business_id);
			}
			return res.status(200).json(business);
		}
		res.status(400).json({ error: 'Error updating business popularity' });
	} catch (e) {
		console.error('Error updating business popularity:', e);
		res.status(400).json({ error: 'Error updating business popularity', e });
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
async function getBusinessesByGroupName(req, res) {
	const { search } = req.params;
	if (!search) {
		return res.status(400).json({ error: 'Search term is required' });
	}
	try {
		const businesses = await BusinessDao.getBusinessesByGroupName(search);
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
async function getBusinessesByNameSearch(req, res) {
	const { search } = req.query;
	if (!search) {
		return res.status(400).json({ error: 'Search term is required' });
	}
	try {
		const businesses = await BusinessDao.getBusinessesByNameSearch(search);
		res.status(200).json(businesses);
	} catch (e) {
		console.error('Error searching businesses by name:', e);
		res.status(400).json({ error: 'Error occurred while searching for businesses by name', e });
	}
}
/**
 * POST /business/address/add
 * @tag Business
 * @summary Add an address to a business
 * @description Adds an address to a specific business.
 * @operationId addBusinessAddress
 * @pathParam {string} business_id - The ID of the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Address added successfully
 * @response 400 - Error adding address
 * @prisma_model businesses
 * @prisma_model addresses
 */
async function addBusinessAddress(req, res) {
	try {
		const { business_id } = req.params;
		const addressData = req.body;
		const updatedBusiness = await BusinessDao.addBusinessAddress(business_id, addressData);
		if (
			updatedBusiness.type === Constants.BUSINESS_TYPE.MERCHANT ||
			updatedBusiness.type === Constants.BUSINESS_TYPE.RESTAURANT ||
			updatedBusiness.type === Constants.BUSINESS_TYPE.LOCAL
		) {
			businessIndex(updatedBusiness.business_id);
		}
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error adding business address:', error);
		res.status(400).json({ error: 'Error adding business address', detail: error.message });
	}
}
/**
 * POST /business/delivery-address/add
 * @tag Business
 * @summary Add a delivery address to a business
 * @description Adds a delivery address to a specific business.
 * @operationId addDeliveryAddress
 * @pathParam {string} business_id - The ID of the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Delivery address added successfully
 * @response 400 - Error adding delivery address
 * @prisma_model businesses
 * @prisma_model addresses
 */
async function addDeliveryAddress(req, res) {
	try {
		const { business_id } = req.params;
		const addressData = req.body;
		const updatedBusiness = await BusinessDao.addDeliveryAddress(business_id, addressData);
		if (
			updatedBusiness.type === Constants.BUSINESS_TYPE.MERCHANT ||
			updatedBusiness.type === Constants.BUSINESS_TYPE.RESTAURANT ||
			updatedBusiness.type === Constants.BUSINESS_TYPE.LOCAL
		) {
			businessIndex(updatedBusiness.business_id);
		}
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error adding delivery address:', error);
		res.status(400).json({ error: 'Error adding delivery address', detail: error.message });
	}
}
/**
 * PATCH /business/parent/update
 * @tag Business
 * @summary Update parent business
 * @description Updates the parent business of a specific business by its ID.
 * @operationId updateParentBusiness
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The ID of the new parent business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Parent business updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating parent business
 * @prisma_model businesses
 */
async function updateParentBusinessId(req, res) {
	try {
		const updatedBusiness = await BusinessDao.updateParentBusiness(
			req.params.business_id,
			req.body.parent_business_id
		);
		res.status(200).json(updatedBusiness);
	} catch (e) {
		console.error('Error updating parent business:', e);
		res.status(400).json({ error: 'Error updating parent business', e });
	}
}
/**
 * PATCH /business/address/:business_id
 * @tag Business
 * @summary Updates a business's address
 * @description This endpoint is used to update a business's primary address.
 * @operationId updateBusinessAddress
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new address details for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Address updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business address.
 * @prisma_model businesses
 * @prisma_model addresses
 */
async function updateBusinessAddress(req, res) {
	try {
		const business = await BusinessDao.updateBusinessAddress(req.params.business_id, req.body);
		res.status(200).json(business);
	} catch (e) {
		console.error('Error updating business address:', e);
		res.status(400).json({ error: 'Error updating business address', e });
	}
}
/**
 * PATCH /business/delivery-address/:business_id
 * @tag Business
 * @summary Updates a business's delivery address
 * @description This endpoint is used to update a business's delivery address.
 * @operationId updateBusinessDeliveryAddress
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new delivery address details for the business
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Delivery address updated successfully. Returns the updated business details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating business delivery address.
 * @prisma_model businesses
 * @prisma_model addresses
 */
async function updateBusinessDeliveryAddress(req, res) {
	try {
		const business = await BusinessDao.updateBusinessDeliveryAddress(req.params.business_id, req.body);
		res.status(200).json(business);
	} catch (e) {
		console.error('Error updating business delivery address:', e);
		res.status(400).json({ error: 'Error updating business delivery address', e });
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
async function deleteBusiness(req, res) {
	try {
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
async function removeParentBusinessId(req, res) {
	try {
		const updatedBusiness = await BusinessDao.removeParentBusiness(req.param.business_id);
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
async function createPaymentIntent(req, res) {
	try {
		const { amount, payment_method, user_id } = req.body;
		const user = await UserDao.getUserById(user_id);
		let paymentIntent = await stripe.createPaymentIntent(amount, payment_method, user.stripe_customer_id);
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
async function manualSortScheduledUsers(req, res) {
	const { sorted_user_ids, business_id } = req.body;
	const filteredData = sorted_user_ids.filter((item) => item !== null);
	console.info('sorted_user_ids', sorted_user_ids, filteredData);
	try {
		const updatedBusiness = await BusinessDao.manualSortScheduledUsers(filteredData, business_id);
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
async function addScheduledUserSortingType(req, res) {
	const { sorting_type, business_id } = req.body;
	try {
		const updatedBusiness = await BusinessDao.addScheduledUserSortingType(sorting_type, business_id);
		res.status(200).json(updatedBusiness);
	} catch (e) {
		console.error(e);
		res.status(400).json({ error: 'Error adding sorting type', e });
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
async function getBusinessEarnings(req, res) {
	const { business_id } = req.params;
	const { start_date, end_date } = req.query;
	if (!business_id || !start_date || !end_date) {
		return res.status(400).json({ message: 'Missing required parameters' });
	}
	try {
		const business = await BusinessDao.getBusinessById(business_id);
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
		const earningsData = calculateBusinessEarnings(businessDeliveryOrders, business);
		if (earningsData) {
			res.status(200).json({ business_id, ...earningsData });
		} else {
			res.status(404).json({ error: 'Business not found or no earnings data available' });
		}
	} catch (error) {
		console.error("Error retrieving business' earnings:", error);
		res.status(400).json({ error: "Error retrieving business' earnings", detail: error.message });
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
async function getAllBusinessesEarnings(req, res) {
	const { start_date, end_date } = req.query;
	if (!start_date || !end_date) {
		return res.status(400).json({ message: 'Missing required parameters' });
	}
	try {
		const businesses = await BusinessDao.getBusinessesByType([
			Constants.BUSINESS_TYPE.MERCHANT,
			Constants.BUSINESS_TYPE.LOCAL,
			Constants.BUSINESS_TYPE.RESTAURANT,
		]);
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
		res.status(400).json({ error: "Error retrieving all businesses' earnings", detail: error.message });
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
async function getTotalEarnings(req, res) {
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
		res.status(400).json({ error: "Error retrieving all businesses' total earnings", detail: error.message });
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
async function getBusinessTotalEarnings(req, res) {
	const { business_id: business_id } = req.params;
	if (!business_id) {
		return res.status(400).json({ message: 'Missing required parameter: business_id' });
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
		res.status(400).json({ error: "Error retrieving business' total earnings", detail: error.message });
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
async function getBusinessReviewsById(req, res) {
	const { business_id: business_id } = req.params;
	if (!business_id) {
		return res.status(400).json({ message: 'Missing required parameter: business_id' });
	}
	try {
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business?.reviewable_id) {
			return res.status(200).json([]);
		} else {
			// Fetch reviews for the business
			let reviews = await prisma.reviews.findMany({
				where: {
					reviewable_id: business.reviewable_id,
				},
				include: {
					author: {
						select: {
							first_name: true,
							last_name: true,
							user_id: true,
							user_role: true,
							documents: {
								where: {
									document_type: 'PROFILE_PICTURE',
								},
								select: {
									files: true,
									document_type: true,
								},
							},
						},
					},
					reviewable: {
						include: {
							business: {
								select: {
									name: true,
									business_id: true,
									documents: {
										where: {
											document_type: 'PROFILE_PICTURE',
										},
										select: {
											files: true,
											document_type: true,
										},
									},
								},
							},
							user: {
								select: {
									first_name: true,
									last_name: true,
									user_id: true,
									user_role: true,
									documents: {
										where: {
											document_type: 'PROFILE_PICTURE',
										},
										select: {
											files: true,
											document_type: true,
										},
									},
								},
							},
						},
					},
				},
				orderBy: {
					created_at: 'desc',
				},
			});
			for (let review of reviews) {
				if (review.reviewable.user.length > 0) {
					review.target = review.reviewable.user[0];
				}
				if (review.reviewable.business.length > 0) {
					review.target = review.reviewable.business[0];
				}
				review.reviewable = undefined;
			}
			res.status(200).json(reviews);
		}
	} catch (e) {
		console.error('BusinessController', e);
		res.status(500).json({ error: 'Internal server error' });
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
async function editBusiness(req, res) {
	const {
		business_group_name,
		email,
		telephone,
		address,
		delivery_address,
		working_hours,
		finances,
		new_business,
		popular,
		...otherData
	} = req.body;
	const business_id = otherData.business_id;
	try {
		// Update the business details
		let updatedBusiness = await BusinessDao.updateBusiness(business_id, otherData);
		if (finances) {
			updatedBusiness = await BusinessDao.updateBusinessFinances(business_id, finances);
		}
		if (address) {
			updatedBusiness = await BusinessDao.updateBusinessAddress(business_id, address);
		}
		if (delivery_address) {
			updatedBusiness = await BusinessDao.updateBusinessDeliveryAddress(business_id, delivery_address);
		}
		if (business_group_name) {
			updatedBusiness = await BusinessDao.updateBusinessGroupName(business_id, business_group_name);
		}
		if (email) {
			updatedBusiness = await BusinessDao.updateBusinessEmail(business_id, email);
		}
		if (telephone) {
			updatedBusiness = await BusinessDao.updateBusinessTelephone(business_id, telephone);
		}
		if (working_hours) {
			updatedBusiness = await BusinessDao.updateBusinessWorkingHours(business_id, working_hours);
		}
		if (new_business) {
			updatedBusiness = await BusinessDao.updateBusinessIsNew(business_id, new_business);
		}
		if (popular) {
			updatedBusiness = await BusinessDao.updateBusinessIsPopular(business_id, popular);
		}
		// Return the updated business details
		if (
			updatedBusiness.type === Constants.BUSINESS_TYPE.MERCHANT ||
			updatedBusiness.type === Constants.BUSINESS_TYPE.RESTAURANT ||
			updatedBusiness.type === Constants.BUSINESS_TYPE.LOCAL
		) {
			businessIndex(updatedBusiness.business_id);
		}
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error updating business:', error);
		res.status(400).json({ error: 'Error updating business information', detail: error.message });
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
async function getBusinessStripeStatusByBusinessId(req, res) {
	try {
		const business_id = req.params.business_id;
		const stripe_account_id = await BusinessDao.getBusinessStripeByBusinessId(business_id);
		if (stripe_account_id) {
			const is_active = await stripe.checkAccountActive(stripe_account_id);
			return res.status(200).json(is_active);
		}
		res.status(200).json(false);
	} catch (error) {
		console.error('Error fetching stripe account for business:', error);
		throw new Error(error);
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
async function generateBusinessStripeByBusinessId(req, res) {
	try {
		const business_id = req.params.business_id;
		const business = await BusinessDao.getBusinessById(business_id);
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
				return res.status(400).json({ error: 'Business has already satisfied all onboarding requirements.' });
			}
		} else {
			stripe_account = await stripe.createAccount(business);
			await BusinessDao.updateBusiness(business.business_id, { stripe_account_id: stripe_account.id });
		}
		let accountLink = await stripe.getAccountLinks(stripe_account.id, business.business_id);
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
		throw new Error(error);
	}
}
async function onboardingEnd(req, res) {
	try {
		const business_id = req.params.business_id;
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business || !business.stripe_account_id) {
			return res.status(404).render('stripeOnboardingIncomplete', {
				message: 'We couldn’t find a valid Stripe account for this business.',
			});
		}
		const stripe_account = await stripe.client.accounts.retrieve(business.stripe_account_id);
		const current_reqs = stripe_account?.requirements?.currently_due || [];
		const eventual_reqs = stripe_account?.requirements?.eventually_due || [];
		const isComplete = stripe_account.details_submitted && current_reqs.length === 0 && eventual_reqs.length === 0;
		if (isComplete) {
			return res.render('stripeOnboardingSuccess', {
				businessName: business.name,
			});
		} else {
			return res.render('stripeOnboardingIncomplete', {
				message: 'There are still steps remaining in your onboarding process.',
				retryLink: `https://api.klikni-web.eu/api/stripe/generate/${business_id}`,
			});
		}
	} catch (error) {
		console.error('Stripe onboarding return URL error:', error);
		return res.status(500).render('stripeOnboardingIncomplete', {
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
async function getBusynessFactorsBusinessIdList(req, res) {
	const { business_ids } = req.query;
	if (!business_ids) {
		return res.status(400).json({ error: 'business_ids parameter is required' });
	}
	try {
		// Assuming we have a function to get orders by business IDs
		const busynessFactors = {};
		for (const businessId of business_ids) {
			const orderCount = await DeliveryOrderDao.getInProgressDeliveryOrdersCountForBusinessId(businessId);
			console.info('orderCount: ', businessId, orderCount);
			if (!orderCount) {
				busynessFactors[businessId] = 1;
				continue; // Use continue instead of return to proceed with the next iteration
			}
			// Calculate busyness factor
			let busynessFactor = 1;
			busynessFactor += Math.floor(orderCount / 5) * 0.2;
			busynessFactors[businessId] = busynessFactor;
		}
		res.status(200).json(busynessFactors);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error while getting busyness factors' });
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
async function addBusinessToFavorites(req, res) {
	try {
		const { business_id } = req.body;
		const { user_id } = req.user;
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business) {
			return res.status(400).json({ message: 'Business not found.' });
		}
		// if (![business.type].includes(type)) {
		// 	// made as array for future upgrade to array business.types
		// 	return res.status(400).json({ message: 'Business does not have the given type.' });
		// }
		const new_entry = await UserFavoriteBusinessDao.addFavoriteBusiness(user_id, business_id, business.type);
		res.status(200).json(new_entry);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error while adding Business to Favorites' });
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
async function removeBusinessFromFavorites(req, res) {
	try {
		const { user_favorite_businesses_id } = req.body;
		const { user_id } = req.user;
		const user_favorites = await UserFavoriteBusinessDao.getFavoriteBusinesses(user_id);
		const favorited_entry = user_favorites.find(
			(fav) => fav.user_favorite_businesses_id === user_favorite_businesses_id
		);
		if (!favorited_entry) {
			return res.status(400).json({ message: 'Business not favorited for given type.' });
		}
		const removed_entry = await UserFavoriteBusinessDao.removeFavoriteBusiness(user_favorite_businesses_id);
		res.status(200).json(removed_entry);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error while adding Business to Favorites' });
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
async function getFavoriteBusinesses(req, res) {
	try {
		const { user_id } = req.user;
		const business_type = req.params?.type || null;
		const favorited_businesses = await UserFavoriteBusinessDao.getFavoriteBusinesses(user_id, business_type);
		res.status(200).json(favorited_businesses);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error while adding Business to Favorites' });
	}
}
/**
 * GET /daily-meal-users/{business_id}
 * @tag Business
 * @summary List scheduled users for a business
 * @description Retrieves users scheduled for daily meals for the given business.
 * @operationId getScheduledUsersByBusinessId
 * @pathParam {string} business_id - The business ID
 * @response 200 - Users retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error retrieving users
 * @prisma_model business
 * @prisma_model users
 * @prisma_model addresses
 */
async function getScheduledUsersByBusinessId(req, res) {
	try {
		const users = await BusinessDao.getScheduledUsersByBusinessId(req.params.business_id);
		if (users) {
			return res.status(200).json(users);
		} else {
			return res.status(400).json({ error: 'No users found for the given business ID' });
		}
	} catch (e) {
		console.error('Error getting daily meal users by business ID:', e);
		res.status(400).json({ error: 'Error getting daily meal users by business ID', e });
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
async function createScoringPointsHandler(req, res) {
	try {
		const { reason, points, taxi_order_id, delivery_order_id } = req.body;
		if (!Object.keys(SCORING_POINTS_REASON).includes(reason) || typeof points !== 'number' || points <= 0) {
			return res.status(400).json({ error: 'Invalid reason or points' });
		}
		const user_id = req.user?.user_id;
		if (!user_id) {
			return res.status(401).json({ error: 'User not authenticated' });
		}
		const user_with_drivers = await UserDao.getUserById(user_id, {
			include: { driver: true, delivery_driver: true },
		});
		const business_id =
			user_with_drivers?.driver?.business_id || user_with_drivers?.delivery_driver?.business_id || null;
		if (!business_id) {
			return res.status(400).json({ error: 'Business ID is required' });
		}
		const scoringPoint = await ScoringPointsDao.createScoringPoints(
			business_id,
			user_id,
			delivery_order_id,
			taxi_order_id,
			points,
			true,
			reason
		);
		return res.status(201).json(scoringPoint);
	} catch (error) {
		console.error('Error in createScoringPointsHandler:', error);
		return res.status(500).json({ error: 'Internal server error' });
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
async function getPurchaseOrderLimit(req, res) {
	const { business_id } = req.params;
	if (!business_id) {
		return res.status(400).json({ error: 'Business ID is required' });
	}
	try {
		const purchaseOrderLimit = await BusinessDao.getPurchaseOrderLimit(business_id);
		if (purchaseOrderLimit >= 0) {
			return res.status(200).json(purchaseOrderLimit);
		} else {
			return res.status(400).json({ error: 'Purchase order limit not found' });
		}
	} catch (error) {
		console.error('Error in getPurchaseOrderLimit:', error);
		return res.status(500).json({ error: 'Internal server error' });
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
async function removeBusinessPaymentMethod(req, res) {
	try {
		const { pm_id } = req.params;
		if (!pm_id) {
			return res.status(400).json({ error: 'Missing payment method ID' });
		}
		const user = await UserDao.getUserById(req.user.user_id);
		console.log(user, 'usrTest');
		const businessId = user?.business_users[0]?.business_id;
		if (!businessId) {
			return res.status(400).json({ error: 'User does not belong to any business' });
		}
		// Check if the business has a Stripe customer ID
		const business = await BusinessDao.getBusinessById(user?.business_users[0]?.business_id);
		if (!business?.stripe_customer_id) {
			return res.status(400).json({ error: 'Business does not have a Stripe customer ID' });
		}
		// List all payment methods for the customer
		const paymentMethods = await stripe.getPaymentMethods(business.stripe_customer_id);
		const hasPaymentMethod = paymentMethods.some((pm) => pm.id === pm_id);
		if (!hasPaymentMethod) {
			return res.status(400).json({ error: 'Payment method not found for this business' });
		}
		await stripe.client.paymentMethods.detach(pm_id);
		// Return updated payment methods
		const updatedPaymentMethods = await stripe.getPaymentMethods(business.stripe_customer_id);
		return res.status(200).json({
			message: 'Payment method removed successfully',
			paymentMethods: updatedPaymentMethods,
		});
	} catch (error) {
		console.error('Error removing payment method:', error);
		return res.status(400).json({ error: 'Error removing payment method' });
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
async function getLocalLocations(req, res) {
	try {
		const locations = await LocalLocationDao.getAllLocalLocations();
		if (locations) {
			return res.status(200).json(locations);
		} else {
			return res.status(400).json({ error: 'No locations found for the given business ID' });
		}
	} catch (e) {
		console.error('Error getting local locations by business ID:', e);
		res.status(400).json({ error: 'Error getting local locations by business ID', e });
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
async function createBusinessLocalLocation(req, res) {
	try {
		const { business_id } = req.params;
		const { location } = req.body;
		if (!location?.local_location_id || !location?.time) {
			return res.status(400).json({ error: 'Missing location' });
		}
		const store_id = await stores.getStoresIdByBusinessId(business_id);
		const newLocation = await LocalLocationDao.createBusinessLocalLocation(
			store_id,
			location.local_location_id,
			location.time
		);
		if (newLocation?.store_id) {
			businessIndex(newLocation.store_id);
		}
		return res.status(201).json(newLocation);
	} catch (e) {
		console.error('Error creating local location:', e);
		res.status(500).json({ error: 'Error creating local location', e });
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
async function updateBusinessLocalLocation(req, res) {
	try {
		const { location_id } = req.params;
		const { time } = req.body;
		if (!location_id || !time) {
			return res.status(400).json({ error: 'Missing location' });
		}
		const updatedLocation = await LocalLocationDao.updateBusinessLocalLocation(location_id, new Date(time));
		if (updatedLocation?.business_id) {
			businessIndex(updatedLocation.business_id);
		}
		return res.status(200).json(updatedLocation);
	} catch (e) {
		console.error('Error updating local location:', e);
		res.status(500).json({ error: 'Error updating local location', e });
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
async function getBusinessOverallAnalytics(req, res) {
	try {
		const user_id = req.user?.user_id;
		const bUser = await BusinessUsersDao.getBusinessUserByUserId(user_id);
		const business_id = bUser?.business_id;
		if (!bUser || !business_id) {
			return res.status(401).json({ error: 'Unauthorized' });
		}
		const { type, periodStart, periodEnd, prevStart, prevEnd } = getPeriodsFromBody(req.body);

		// Fetch orders for current & previous periods
		const allOrdersCurrent = await prisma.delivery_orders.findMany({
			where: {
				business_id,
				status: { in: DELIVERY_ORDER_END_STATES },
				created_at: { gte: periodStart, lte: periodEnd },
			},
		});
		const ordersCurrent = allOrdersCurrent.filter((o) => o.status === DELIVERY_ORDER_STATUS.SUCCESS);
		let allOrdersPrevious = [];
		if (prevStart && prevEnd) {
			allOrdersPrevious = await prisma.delivery_orders.findMany({
				where: {
					business_id,
					status: { in: DELIVERY_ORDER_END_STATES },
					created_at: { gte: prevStart, lte: prevEnd },
				},
			});
		}
		const ordersPrevious = allOrdersPrevious.filter((o) => o.status === DELIVERY_ORDER_STATUS.SUCCESS);
		// Prior orders for new customer calculation
		let priorCustomerOrders = await prisma.delivery_orders.findMany({
			where: {
				business_id,
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				created_at: { lt: periodStart },
			},
		});
		let usersWithPriorOrders = new Set(priorCustomerOrders.map((o) => o.user_id).filter(Boolean));
		const currentUserOrdersMap = new Set();
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
			priorCustomerOrders = await prisma.delivery_orders.findMany({
				where: {
					business_id,
					status: DELIVERY_ORDER_STATUS.SUCCESS,
					created_at: { lt: prevStart },
				},
			});
			usersWithPriorOrders = new Set(priorCustomerOrders.map((o) => o.user_id).filter(Boolean));
			const previousUserOrdersMap = new Set();
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
	} catch (e) {
		console.error('Error getting business overall analytics:', e);
		res.status(500).json({ error: 'Error getting business overall analytics', e: e.message });
	}
}

// Helper: compute period bounds
function getPeriodsFromBody(body) {
	const { type = 0, start_date = new Date(), end_date = null } = body || {};
	const start = new Date(start_date);
	if (isNaN(start.getTime())) {
		const err = new Error('Invalid start_date');
		err.status = 400;
		throw err;
	}
	const { periodStart, periodEnd } = getPeriodStartAndEnd(start, type, end_date);
	const { prevStart, prevEnd } = getPreviousPeriod(periodStart, periodEnd, type);
	return { type, periodStart, periodEnd, prevStart, prevEnd };
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
async function getBusinessPromoSectionsAnalytics(req, res) {
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

		return res.status(200).json({
			items: results,
			sections: promoSections,
		});
	} catch (e) {
		const status = e?.status || 500;
		console.error('Error getting promo sections analytics:', e);
		return res.status(status).json({ error: 'Error getting promo sections analytics', m: e.message });
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
async function getBusinessPromoWordsAnalytics(req, res) {
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
	} catch (e) {
		const status = e?.status || 500;
		console.error('Error getting promo words analytics:', e);
		return res.status(status).json({ error: 'Error getting promo words analytics', m: e.message });
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
async function getBusinessPromoAdsAnalytics(req, res) {
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

		return res.status(200).json({
			items: results,
			ads: promoAds,
		});
	} catch (e) {
		const status = e?.status || 500;
		console.error('Error getting promo sections analytics:', e);
		return res.status(status).json({ error: 'Error getting promo sections analytics', m: e.message });
	}
}

/**
 * POST /business/admin/business-types
 * @tag BusinessTypes
 * @summary Create a new business type
 * @description Creates a new business_type row.
 * @operationId createBusinessType
 * @bodyDescription The business type to create
 * @bodyContent {
 *   "type": "RESTAURANT"
 * } application/json
 * @bodyRequired
 * @prisma_model business_type
 * @response 200 - Business type created successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
 *   "type_id": "uuid",
 *   "type": "RESTAURANT"
 * }
 * @response 500 - Error creating business type
 */
export async function createBusinessType(req, res) {
	try {
		const { type } = req.body;
		if (!type) {
			res.status(400).json({ error: 'type is required' });
			return;
		}
		const created = await BusinessTypesDao.createBusinessType(type);
		res.json(created);
	} catch (e) {
		res.status(500).json({ error: e.message });
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
export async function setBusinessTypesForBusiness(req, res) {
	try {
		const { business_id } = req.params;
		const { type_ids } = req.body;
		const result = await BusinessTypesDao.setBusinessTypes(business_id, type_ids || []);
		res.json(result);
	} catch (e) {
		res.status(500).json({ error: e.message });
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
async function confirmBusinessPremise(req, res) {
	try {
		const { business_premise_id } = req.params;
		const premise = await InvoicesDao.confirmBusinessPremise(business_premise_id);
		return res.status(200).json(premise);
	} catch (e) {
		console.error('DriverController.confirmBusinessPremise', e);
		return res.status(500).json({ error: 'Error confirming business premise' });
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
async function toggleTransportModule(req, res) {
	try {
		const { business_id } = req.params;
		const { enabled } = req.body;
		if (typeof enabled !== 'boolean') {
			return res.status(400).json({ error: 'enabled must be a boolean' });
		}
		const updatedBusiness = enabled
			? await TransportDao.enableTransportModule(business_id)
			: await TransportDao.disableTransportModule(business_id);
		if (updatedBusiness?.business_id) {
			businessIndex(updatedBusiness.business_id);
		}
		return res.status(200).json(updatedBusiness);
	} catch (e) {
		console.error('Error toggling transport module:', e);
		return res.status(500).json({ error: 'Error toggling transport module' });
	}
}
export { getScheduledUsersByBusinessId };
export { listBusinesses };
export { listTransferBusinesses };
export { listMerchantBusinesses };
export { listMerchantBusinessesWithDailyMeals };
export { addBusinessAddress };
export { addDeliveryAddress };
export { update };
export { createNewBusiness };
export { getBusinessById };
export { getBusinessAdminDataById };
export { getParentBusiness };
export { getChildBusinesses };
export { getBusinessesByGroupName };
export { getBusinessesByNameSearch };
export { updateBusinessAddress };
export { updateBusinessDeliveryAddress };
export { updateBusinessType };
export { updateIsBusinessUnit };
export { updateBusinessGroupName };
export { updateBusinessEmail };
export { updateBusinessTelephone };
export { updateBusinessWorkingHours };
export { updateRestaurantOverwhelmed };
export { updateBusinessIsNew };
export { updateBusinessIsPopular };
export { updateParentBusinessId };
export { removeParentBusinessId };
export { deleteBusiness };
export { createPaymentIntent };
export { manualSortScheduledUsers };
export { addScheduledUserSortingType };
export { listMerchantBusinessesMainInfo };
export { listTransferBusinessesMainInfo };
export { getBusinessEarnings };
export { getAllBusinessesEarnings };
export { getTotalEarnings };
export { getBusinessTotalEarnings };
export { getBusinessReviewsById };
export { editBusiness };
export { removeBusinessPaymentMethod };
export { getBusinessStripeStatusByBusinessId };
export { generateBusinessStripeByBusinessId };
export { getBusynessFactorsBusinessIdList };
export { getBusinessesByIds };
export { searchBusinesses };
export { listPromoSectionsWithMerchants };
export { activateBusiness };
export { deactivateBusiness };
export { getBusinessForSearchById };
export { addBusinessToFavorites };
export { removeBusinessFromFavorites };
export { getFavoriteBusinesses };
export { onboardingEnd };
export { createScoringPointsHandler };
export { getPurchaseOrderLimit };
export { getLocalLocations };
export { createBusinessLocalLocation };
export { updateBusinessLocalLocation };
export { getBusinessOverallAnalytics };
export { getBusinessPromoAdsAnalytics };
export { getBusinessPromoSectionsAnalytics };
export { getBusinessPromoWordsAnalytics };
export { confirmBusinessPremise };
export { toggleTransportModule };
export default {
	getScheduledUsersByBusinessId,
	listBusinesses,
	removeBusinessPaymentMethod,
	listTransferBusinesses,
	listMerchantBusinesses,
	listMerchantBusinessesWithDailyMeals,
	addBusinessAddress,
	addDeliveryAddress,
	update,
	createNewBusiness,
	getBusinessById,
	getBusinessAdminDataById,
	getParentBusiness,
	getChildBusinesses,
	getBusinessesByGroupName,
	getBusinessesByNameSearch,
	updateBusinessAddress,
	updateBusinessDeliveryAddress,
	updateBusinessType,
	updateIsBusinessUnit,
	updateBusinessGroupName,
	updateBusinessEmail,
	updateBusinessTelephone,
	updateBusinessWorkingHours,
	updateRestaurantOverwhelmed,
	updateBusinessIsNew,
	updateBusinessIsPopular,
	updateParentBusinessId,
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
	getBusinessesByIds,
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
	createBusinessType,
	confirmBusinessPremise,
	toggleTransportModule,
};
