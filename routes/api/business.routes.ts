import express from 'express';

import { validate } from '../../middleware/zod.js';
import BusinessController from '../../controllers/BusinessController.js';
import * as DailyMealCategoryController from '../../controllers/DailyMealCategoryController.ts';
import {
	CreateDailyMealCategoryWithPriceSchema,
	AddPriceToDailyMealCategorySchema,
} from '../../types/dailyMeals/DailyMealCategory.ts';
import DailyMealController from '../../controllers/DailyMealController.js';
import {
	ActivateBusinessSchema,
	AddAddressSchema,
	AddBusinessToFavoritesSchema,
	AddScheduledUserSortingTypeSchema,
	CreateBusinessLocalLocationSchema,
	CreateScoringPointsSchema,
	DeactivateBusinessSchema,
	GetBusinessAnalyticsSchema,
	GetBusinessesSchema,
	ManualSortScheduledUsersSchema,
	RemoveBusinessFromFavoritesSchema,
	ToggleTransportModuleSchema,
	UpdateBusinessEmailSchema,
	UpdateBusinessGroupNameSchema,
	UpdateBusinessIsNewSchema,
	UpdateBusinessIsPopularSchema,
	UpdateBusinessLocalLocationSchema,
	UpdateBusinessSchema,
	UpdateBusinessTelephoneSchema,
	UpdateBusinessTypeSchema,
	UpdateBusinessWorkingHoursSchema,
	UpdateIsBusinessUnitSchema,
	UpdateParentBusinessIdSchema,
} from '../../schemas/validation/Business/Business.validation.ts';
import { ListPromoSectionsSchema } from '../../schemas/validation/PromoSection/PromoSection.validation.ts';

const router = express.Router();
router.post('/businesses/ids', validate(GetBusinessesSchema), BusinessController.getBusinessesByIds);
/**
 *    * @module merchant
 *
 */
router.post(
	'/businesses/sections/merchant',
	validate(ListPromoSectionsSchema),
	BusinessController.listPromoSectionsWithMerchants
);
/**
 *    * @module merchant
 *
 */
router.get('/businesses/merchant', BusinessController.listMerchantBusinesses);
/**
 *    * @module merchant
 *
 */
router.get('/businesses/merchant/daily-meals', BusinessController.listMerchantBusinessesWithDailyMeals);
/**
 *    * @module merchant
 *
 */
router.get('/businesses/merchant/main', BusinessController.listMerchantBusinessesMainInfo);
/**
 *    * @module transport
 *
 */
router.get('/businesses/taxi', BusinessController.listTransferBusinesses);
/**
 *    * @module transport
 *
 */
router.get('/businesses/taxi/main', BusinessController.listTransferBusinessesMainInfo);
router.get('/businesses/busyness', BusinessController.getBusynessFactorsBusinessIdList);
router.get('/favorites/:type', BusinessController.getFavoriteBusinesses);
router.post('/favorites', validate(AddBusinessToFavoritesSchema), BusinessController.addBusinessToFavorites);
/**
 *    * @module general
 *
 */
router.delete(
	'/favorites',
	validate(RemoveBusinessFromFavoritesSchema),
	BusinessController.removeBusinessFromFavorites
);
router.get('/purchase_order_limit/:business_id', BusinessController.getPurchaseOrderLimit);
router.get('/parent', BusinessController.getParentBusiness);
router.get('/:business_id', BusinessController.getBusinessById);
router.get('/:business_id/reviews', BusinessController.getBusinessReviewsById);
/**
 *    * @module finances
 *
 */
router.get('/stripe/:business_id', BusinessController.getBusinessStripeStatusByBusinessId);
/**
 *    * @module finances
 *
 */
router.get('/earnings/all', BusinessController.getAllBusinessesEarnings);
/**
 *    * @module finances
 *
 */
router.get('/earnings/total', BusinessController.getTotalEarnings);
/**
 *    * @module finances
 *
 */
router.get('/earnings/:business_id', BusinessController.getBusinessEarnings);
/**
 *    * @module finances
 *
 */
router.get('/earnings/:business_id/total', BusinessController.getBusinessTotalEarnings);
/**
 *    * @module finances
 *
 */
// router.post('/register', BusinessController.createNewBusiness);
// router.post('/review', validate(ReviewBusinessSchema), BusinessController.reviewBusiness);
router.post('/activate', validate(ActivateBusinessSchema), BusinessController.activateBusiness);
router.post('/deactivate', validate(DeactivateBusinessSchema), BusinessController.deactivateBusiness);
/**
 *    * @module finances
 *
 */
router.delete('/remove-payment-method/:pm_id', BusinessController.removeBusinessPaymentMethod);
/**
 *    * @module general
 *
 */
router.post('/address/add', validate(AddAddressSchema), BusinessController.addBusinessAddress);
/**
 *    * @module general
 *
 */
router.post('/delivery-address/add', validate(AddAddressSchema), BusinessController.addDeliveryAddress);
router.get('/daily-meal-users/:business_id', BusinessController.getScheduledUsersByBusinessId);
router.post(
	'/scheduled_users/sorting',
	validate(ManualSortScheduledUsersSchema),
	BusinessController.manualSortScheduledUsers
);
router.post(
	'/scheduled_users/sorting/type',
	validate(AddScheduledUserSortingTypeSchema),
	BusinessController.addScheduledUserSortingType
);
router.patch('/', validate(UpdateBusinessSchema), BusinessController.update);
router.patch('/edit', validate(UpdateBusinessSchema), BusinessController.editBusiness);
router.patch('/type', validate(UpdateBusinessTypeSchema), BusinessController.updateBusinessType);
router.patch('/business-unit', validate(UpdateIsBusinessUnitSchema), BusinessController.updateIsBusinessUnit);
router.patch(
	'/business-group-name',
	validate(UpdateBusinessGroupNameSchema),
	BusinessController.updateBusinessGroupName
);
router.patch('/email', validate(UpdateBusinessEmailSchema), BusinessController.updateBusinessEmail);
/**
 *    * @module general
 *
 */
router.patch('/telephone', validate(UpdateBusinessTelephoneSchema), BusinessController.updateBusinessTelephone);
/**
 *    * @module general
 *
 */
router.patch(
	'/workingHours',
	validate(UpdateBusinessWorkingHoursSchema),
	BusinessController.updateBusinessWorkingHours
);
// router.patch(
// 	'/restaurant-overwhelmed/:business_id',
// 	validate(UpdateRestaurantOverwhelmedSchema),
// 	BusinessController.updateRestaurantOverwhelmed
// );
router.patch('/new/:business_id', validate(UpdateBusinessIsNewSchema), BusinessController.updateBusinessIsNew);
router.patch(
	'/popular/:business_id',
	validate(UpdateBusinessIsPopularSchema),
	BusinessController.updateBusinessIsPopular
);
router.patch('/parent/update', validate(UpdateParentBusinessIdSchema), BusinessController.updateParentBusinessId);
router.patch('/parent/remove', BusinessController.removeParentBusinessId);
/**
 *    * @module general
 *
 */
router.patch('/address', validate(AddAddressSchema), BusinessController.updateBusinessAddress);
/**
 *    * @module general
 *
 */
router.patch('/delivery-address', validate(AddAddressSchema), BusinessController.updateBusinessDeliveryAddress);
/**
 *    * @module finances
 *
 */
router.patch('/stripe/generate/:business_id', BusinessController.generateBusinessStripeByBusinessId);
/**
 *    * @module finances
 *
 */
router.delete('/:business_id', BusinessController.deleteBusiness);
router.post('/scoring_points', validate(CreateScoringPointsSchema), BusinessController.createScoringPointsHandler);
router.post(
	'/:business_id/daily-meal-categories',
	validate(CreateDailyMealCategoryWithPriceSchema, 'body'),
	DailyMealCategoryController.createDailyMealCategoryWithPrice
);

router.get('/daily_meal_subscriptions/:business_id', DailyMealController.getDailyMealsSubscriptionsByBusinessId);
router.post(
	'/daily-meal-categories/:dmc_id/price',
	validate(AddPriceToDailyMealCategorySchema, 'body'),
	DailyMealCategoryController.addPriceToDailyMealCategory
);
router.patch('/daily-meal-categories/:dmc_id/activate', DailyMealCategoryController.activateDailyMealCategory);
router.patch('/daily-meal-categories/:dmc_id/deactivate', DailyMealCategoryController.deactivateDailyMealCategory);

router.get('/local/locations', BusinessController.getLocalLocations);
router.post(
	'/local/locations/:business_id',
	validate(CreateBusinessLocalLocationSchema),
	BusinessController.createBusinessLocalLocation
);
router.patch(
	'/local/locations/:location_id',
	validate(UpdateBusinessLocalLocationSchema),
	BusinessController.updateBusinessLocalLocation
);

router.post('/analytics/overall', validate(GetBusinessAnalyticsSchema), BusinessController.getBusinessOverallAnalytics);
router.post(
	'/analytics/promo/ads',
	validate(GetBusinessAnalyticsSchema),
	BusinessController.getBusinessPromoAdsAnalytics
);
router.post(
	'/analytics/promo/sections',
	validate(GetBusinessAnalyticsSchema),
	BusinessController.getBusinessPromoSectionsAnalytics
);
router.post(
	'/analytics/promo/words',
	validate(GetBusinessAnalyticsSchema),
	BusinessController.getBusinessPromoWordsAnalytics
);

router.patch(
	'/:business_id/transport-module',
	validate(ToggleTransportModuleSchema),
	BusinessController.toggleTransportModule
);

export default router;
