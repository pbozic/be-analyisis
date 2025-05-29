import { config } from 'dotenv';
import bcrypt from 'bcrypt';

import BusinessDao from '../dao/Business.js';
import ReviewDao from '../dao/Review.js';
import Constants from '../lib/constants.js';
import stripe from '../lib/stripe.js';
import UserDao from '../dao/User.js';
import DriverDao from '../dao/Driver.js';
import DeliveryDriverDao from '../dao/DeliveryDriver.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import {
	BUSINESS_TYPE,
	DELIVERY_ORDER_STATUS,
	SCORING_POINTS_REASON,
	ACCOUNT_ACTIONS_REASON,
} from '../lib/constants.js';
import { calculateBusinessEarnings, calculateTotalEarnings } from '../lib/helpersLib.js';
import prisma from '../prisma/prisma.js';
import BusinessUsersDao from '../dao/BusinessUsers.js';
import EmailHelper from '../lib/emailSender.js';
import socket from '../socket.js';
import elasticsearch from '../elasticsearch/index.js';
import UserFavoriteBusinessDao from '../dao/UserFavoriteBusiness.js';
import ScoringPointsDao from '../dao/ScoringPoints.js';
config();
const { UserSockets, io } = socket;
const { businessIndex, categorySearch, fullSearch } = elasticsearch;
/**
 * POST /business/activate
 * @tag Business
 * @summary Activate a business
 * @description Activates a business.
 * @operationId activateBusiness
 * @response 200 - successful operation
 * @responseContent {User[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
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
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @responseContent {User[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
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
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @operationId getBusinesses
 * @response 200 - successful operation
 * @responseContent {User[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
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
 * @responseContent {User[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
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
 * @summary Get a list of businesses by query, location and categories
 * @description Returns a list of businesses.
 * @operationId getBusinessesSearch
 * @response 200 - successful operation
 * @responseContent {User[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
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
			req.body.pageSize || 10
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
			res.status(200).json(results);
		} else {
			res.status(400).json({
				error: 'Error obtaining list of businesses..',
				users: results,
			});
		}
	} catch (e) {
		res.status(400).json({ error: 'Error obtaining list of businesses..', e: e.message });
	}
}
/**
 * GET /businesses/merchant
 * @tag Business
 * @summary List all merchant businesses
 * @description Retrieves a list of all businesses classified as merchants.
 * @operationId listMerchantBusinesses
 * @response 200 - Successful operation, returns a list of merchant businesses
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 */
async function listMerchantBusinesses(req, res) {
	//TODO: elastic search
	try {
		const merchantBusinesses = await BusinessDao.getBusinessesByType(Constants.BUSINESS_TYPE.MERCHANT);
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
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
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
		if (!userId) {
			res.status(400).json({ error: 'No user_id error' });
		}
		const user = await UserDao.getUserById(userId, {
			include: {
				user_favorite_businesses: true,
			},
		});
		const favoriteBusinessIds = user.user_favorite_businesses?.map((b) => b.business_id);
		const finalPromoSections = [
			{
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
				},
			},
			...promoSections,
		];
		for (let promoSection of finalPromoSections) {
			let favorite = promoSection.tag === 'favorite';
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
				favorite ? null : promoSection.promo_sections_id,
				1,
				10,
				favorite ? favoriteBusinessIds : null
			);
			promoSection.translations = translations;
			if (!esResults || !esResults.results || esResults.results.length === 0) {
				esResults.results = [];
			}
			let providerIds = esResults.results.map((r) => r.business_id);
			let providers = await BusinessDao.getBusinessesForSearchById(providerIds);
			let result = [];
			for (let provider of providers) {
				let esResult = esResults.results.find((r) => r.business_id === provider.business_id);
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
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 */
async function listMerchantBusinessesWithDailyMeals(req, res) {
	try {
		const merchantBusinesses = await BusinessDao.getBusinessesByType(Constants.BUSINESS_TYPE.MERCHANT, {
			offers_daily_meals: true,
		});
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
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 */
async function listMerchantBusinessesMainInfo(req, res) {
	try {
		const merchantBusinesses = await BusinessDao.getBusinessesByTypeMainInformation(
			Constants.BUSINESS_TYPE.MERCHANT
		);
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
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while obtaining the transfer businesses list
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
 * GET /businesses/taxis
 * @tag Business
 * @summary List all taxi businesses
 * @description Retrieves a list of all businesses classified as taxis (TRANSFER).
 * @operationId listTaxiBusinesses
 * @response 200 - Successful operation, returns a list of taxi businesses
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while obtaining the taxi business list
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
 * @responseContent {Business} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business information
 */
async function getBusinessById(req, res) {
	try {
		console.log('getBusinessById', req.params.business_id);
		const business = await BusinessDao.getBusinessById(req.params.business_id);
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
 * @responseContent {Business} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business information
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
 * @response 200 - Successful operation, returns detailed business information
 * @responseContent {Business} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business information
 */
async function getBusinessForSearchById(req, res) {
	try {
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
 * @responseContent {Business} 200.application/json
 * @response 404 - Parent business not found
 * @response 400 - Error retrieving parent business information
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
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error retrieving child businesses information
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
 * @bodyContent {BusinessCreateRequest} application/json
 * @bodyRequired
 * @response 201 - Business created successfully
 * @responseContent {Business} 201.application/json
 * @response 400 - Error creating new business
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
 * @bodyContent {UpdateBusinessRequest} application/json
 * @bodyRequired
 * @response 200 - Business updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function update(req, res) {
	console.info('update business', req.body);
	const business_id = req.business?.business_id || req.body.business_id;
	try {
		let business = await BusinessDao.updateBusiness(business_id, req.body);
		if (business) {
			if (req.socket) req.socket.emit('updateBusiness', business);
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateBusinessTypeRequest} application/json
 * @bodyRequired
 * @response 200 - Type updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessType(req, res) {
	try {
		let business = await BusinessDao.updateBusinessType(req.params.business_id, req.body.type);
		if (business) {
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateIsBusinessUnitRequest} application/json
 * @bodyRequired
 * @response 200 - Business unit status updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateIsBusinessUnit(req, res) {
	try {
		let business = await BusinessDao.updateIsBusinessUnit(req.params.business_id, req.body.is_business_unit);
		if (business) {
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateBusinessGroupNameRequest} application/json
 * @bodyRequired
 * @response 200 - Group name updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessGroupName(req, res) {
	try {
		let business = await BusinessDao.updateBusinessGroupName(req.params.business_id, req.body.business_group_name);
		if (business) {
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateBusinessEmailRequest} application/json
 * @bodyRequired
 * @response 200 - Email updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessEmail(req, res) {
	try {
		let business = await BusinessDao.updateBusinessEmail(req.params.business_id, req.body.email);
		if (business) {
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateBusinessTelephoneRequest} application/json
 * @bodyRequired
 * @response 200 - Telephone updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessTelephone(req, res) {
	try {
		let business = await BusinessDao.updateBusinessTelephone(
			req.params.business_id,
			req.body.telephone,
			req.body.telephone_code,
			req.body.telephone_number
		);
		if (business) {
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateBusinessWorkingHoursRequest} application/json
 * @bodyRequired
 * @response 200 - Working hours updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessWorkingHours(req, res) {
	try {
		let business = await BusinessDao.updateBusinessWorkingHours(req.params.business_id, req.body.working_hours);
		if (business) {
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateRestaurantOverwhelmedRequest} application/json
 * @response 200 - Overwhelmed status updated successfully. Returns the updated restaurant details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating restaurant information.
 */
async function updateRestaurantOverwhelmed(req, res) {
	try {
		let business = await BusinessDao.updateRestaurantOverwhelmed(
			req.params.business_id,
			req.body.restaurant_overwhelmed
		);
		if (business) {
			const userSocket = UserSockets.get(business.business_id);
			console.log('overwhelmed in business, the usersocket', userSocket);
			if (userSocket) {
				console.log('overwhelmed in usersocket, businees', business);
				io.emit('refetch_providers', business);
			}
			console.log('overwhelmed in function, 200');
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
 * @bodyContent {UpdateBusinessIsNewRequest} application/json
 * @bodyRequired
 * @response 200 - New status updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessIsNew(req, res) {
	try {
		let business = await BusinessDao.updateBusinessIsNew(req.params.business_id, req.body.new);
		if (business) {
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateBusinessIsPopularRequest} application/json
 * @bodyRequired
 * @response 200 - Popularity status updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessIsPopular(req, res) {
	try {
		let business = await BusinessDao.updateBusinessIsPopular(req.params.business_id, req.body.popular);
		if (business) {
			if (business.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while searching for businesses by group name
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
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while searching for businesses by name
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
 * @bodyContent {Address} application/json
 * @bodyRequired
 * @response 200 - Address added successfully
 * @response 400 - Error adding address
 */
async function addBusinessAddress(req, res) {
	try {
		const { business_id } = req.params;
		const addressData = req.body;
		const updatedBusiness = await BusinessDao.addBusinessAddress(business_id, addressData);
		if (updatedBusiness.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {Address} application/json
 * @bodyRequired
 * @response 200 - Delivery address added successfully
 * @response 400 - Error adding delivery address
 */
async function addDeliveryAddress(req, res) {
	try {
		const { business_id } = req.params;
		const addressData = req.body;
		const updatedBusiness = await BusinessDao.addDeliveryAddress(business_id, addressData);
		if (updatedBusiness.type === Constants.BUSINESS_TYPE.MERCHANT) {
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
 * @bodyContent {UpdateParentBusinessRequest} application/json
 * @bodyRequired
 * @response 200 - Parent business updated successfully
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating parent business
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
 * @bodyContent {UpdateBusinessAddressRequest} application/json
 * @bodyRequired
 * @response 200 - Address updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business address.
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
 * @bodyContent {UpdateBusinessDeliveryAddressRequest} application/json
 * @bodyRequired
 * @response 200 - Delivery address updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business delivery address.
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
 * @responseContent {Business} 200.application/json
 * @response 400 - Error removing parent business from business
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
 * POST /business/review
 * @tag Business
 * @summary Review a business
 * @description This endpoint is used add a review of business.
 * @operationId reviewBusiness
 * @bodyDescription Content of the review
 * @bodyContent {ReviewRequest} application/json
 * @bodyRequired
 * @response 200 - Primary address set successfully.
 * @response 400 - Error setting primary address.
 */
async function reviewBusiness(req, res) {
	try {
		let business_id = req.body.business_id;
		// Check if driver_id is present in the request body
		if (req.body.driver_id) {
			const business = await DriverDao.getBusinessByDriverId(req.body.driver_id);
			if (!business) {
				return res.status(400).json({ error: 'Error retrieving business for the driver' });
			}
			business_id = business.business_id;
		}
		if (req.body.delivery_driver_id) {
			const business = await DeliveryDriverDao.getBusinessByDeliveryDriverId(req.body.delivery_driver_id);
			if (!business) {
				return res.status(400).json({ error: 'Error retrieving business for the delivery driver' });
			}
			business_id = business.business_id;
		}
		// Proceed with the business_id obtained or provided
		let business = await BusinessDao.getBusinessById(business_id);
		if (business.reviewable_id === null) {
			let reviewable = await ReviewDao.createReviewableBusiness(business.business_id);
			if (!reviewable) {
				return res.status(400).json({ error: 'Error creating reviewable business' });
			}
			business.reviewable_id = reviewable.reviewable_id;
		}
		let review = await ReviewDao.createReview({
			comment: req.body.comment,
			rating: req.body.rating,
			feedback: req.body.feedback,
			author: {
				connect: {
					user_id: req.user.user_id,
				},
			},
			reviewable: {
				connect: {
					reviewable_id: business.reviewable_id,
				},
			},
		});
		if (review) {
			return res.status(200).json(review);
		}
		res.status(400).json({ error: 'Error adding review' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error adding review', e });
	}
}
async function confirmBusinessReview(req, res) {
	try {
		res.status(200).json({ message: 'Review confirmed successfully' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error confirming review', e });
	}
}
/**
 * POST /business/paymentIntent
 * @tag Business
 * @summary Create a payment intent
 * @description This endpoint is used to create a payment intent.
 * @operationId createPaymentIntent
 * @bodyDescription The amount, currency, and user_id of the payment.
 * @bodyContent {CreatePaymentIntentRequest} application/json
 * @bodyRequired
 * @response 200 - Payment Intent created successfully.
 * @response 400 - Error creating payment intent.
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
 * @bodyContent {ManualSortScheduledUsersRequest} application/json
 * @bodyRequired
 * @response 200 - Users sorted successfully.
 * @response 400 - Error sorting users.
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
 * @bodyContent {AddScheduledUserSortingTypeRequest} application/json
 * @bodyRequired
 * @response 200 - Sorting type added successfully.
 * @response 400 - Error adding sorting type.
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
 * @responseContent {object[]} 200.application/json
 * @response 400 - Missing required parameters
 * @responseContent {object} 400.application/json The error object
 */
async function getAllBusinessesEarnings(req, res) {
	const { start_date, end_date } = req.query;
	if (!start_date || !end_date) {
		return res.status(400).json({ message: 'Missing required parameters' });
	}
	try {
		const businesses = await BusinessDao.getBusinessesByType(Constants.BUSINESS_TYPE.MERCHANT);
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
 */
async function getTotalEarnings(req, res) {
	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
			},
		});
		const totalEarnings = calculateTotalEarnings(orders, DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED);
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
 * @responseContent {TotalEarnings} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business' total earnings
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
		const totalEarnings = calculateTotalEarnings(orders, DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED);
		res.status(200).json(totalEarnings);
	} catch (error) {
		console.error("Error retrieving business' total earnings:", error);
		res.status(400).json({ error: "Error retrieving business' total earnings", detail: error.message });
	}
}
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
 * @bodyContent {EditBusinessRequest} application/json
 * @bodyRequired
 * @response 200 - Business updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
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
		if (updatedBusiness.type === Constants.BUSINESS_TYPE.MERCHANT) {
			businessIndex(updatedBusiness.business_id);
		}
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error('Error updating business:', error);
		res.status(400).json({ error: 'Error updating business information', detail: error.message });
	}
}
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
async function addBusinessToFavorites(req, res) {
	try {
		const { business_id, type } = req.body;
		const { user_id } = req.user;
		const business = await BusinessDao.getBusinessById(business_id);
		if (!business) {
			return res.status(400).json({ message: 'Business not found.' });
		}
		if (![business.type].includes(type)) {
			// made as array for future upgrade to array business.types
			return res.status(400).json({ message: 'Business does not have the given type.' });
		}
		const new_entry = await UserFavoriteBusinessDao.addFavoriteBusiness(user_id, business_id, type);
		res.status(200).json(new_entry);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error while adding Business to Favorites' });
	}
}
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
export { reviewBusiness };
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
export default {
	getScheduledUsersByBusinessId,
	listBusinesses,
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
	reviewBusiness,
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
};
