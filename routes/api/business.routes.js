import express from 'express';

import { validate } from '../../middleware/zod.js';
import joi from '../../middleware/joi.js';
import { paymentIntentSchema } from '../../joi/businessSchemas.js';
import { reviewBusinessSchema } from '../../joi/reviewSchemas.js';
import BusinessController from '../../controllers/BusinessController.js';
import * as DailyMealCategoryController from '../../controllers/DailyMealCategoryController';
import {
	CreateDailyMealCategoryWithPriceSchema,
	AddPriceToDailyMealCategorySchema,
} from '../../types/dailyMeals/DailyMealCategory';
import DailyMealController from '../../controllers/DailyMealController.js';

const router = express.Router();
router.post('/businesses/ids', BusinessController.getBusinessesByIds);
/**
 *    * @module merchant
 *
 */
router.post('/businesses/sections/merchant', BusinessController.listPromoSectionsWithMerchants);
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
router.post('/favorites', BusinessController.addBusinessToFavorites);
/**
 *    * @module general
 *
 */
router.delete('/favorites', BusinessController.removeBusinessFromFavorites);
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
router.post('/register', BusinessController.createNewBusiness);
router.post('/review', joi(reviewBusinessSchema), BusinessController.reviewBusiness);
router.post('/activate', BusinessController.activateBusiness);
router.post('/deactivate', BusinessController.deactivateBusiness);
/**
 *    * @module finances
 *
 */
router.delete('/remove-payment-method/:pm_id', BusinessController.removeBusinessPaymentMethod);
/**
 *    * @module general
 *
 */
router.post('/address/add', BusinessController.addBusinessAddress);
/**
 *    * @module general
 *
 */
router.post('/delivery-address/add', BusinessController.addDeliveryAddress);
router.get('/daily-meal-users/:business_id', BusinessController.getScheduledUsersByBusinessId);
router.post('/scheduled_users/sorting', BusinessController.manualSortScheduledUsers);
router.post('/scheduled_users/sorting/type', BusinessController.addScheduledUserSortingType);
router.patch('/', BusinessController.update);
router.patch('/edit', BusinessController.editBusiness);
router.patch('/type', BusinessController.updateBusinessType);
router.patch('/business-unit', BusinessController.updateIsBusinessUnit);
router.patch('/business-group-name', BusinessController.updateBusinessGroupName);
router.patch('/email', BusinessController.updateBusinessEmail);
/**
 *    * @module general
 *
 */
router.patch('/telephone', BusinessController.updateBusinessTelephone);
/**
 *    * @module general
 *
 */
router.patch('/workingHours', BusinessController.updateBusinessWorkingHours);
/**
 *    * @module merchant
 *
 */
router.patch('/restaurant-overwhelmed/:business_id', BusinessController.updateRestaurantOverwhelmed);
router.patch('/new/:business_id', BusinessController.updateBusinessIsNew);
router.patch('/popular/:business_id', BusinessController.updateBusinessIsPopular);
router.patch('/parent/update', BusinessController.updateParentBusinessId);
router.patch('/parent/remove', BusinessController.removeParentBusinessId);
/**
 *    * @module general
 *
 */
router.patch('/address', BusinessController.updateBusinessAddress);
/**
 *    * @module general
 *
 */
router.patch('/delivery-address', BusinessController.updateBusinessDeliveryAddress);
/**
 *    * @module finances
 *
 */
router.patch('/stripe/generate/:business_id', BusinessController.generateBusinessStripeByBusinessId);
/**
 *    * @module finances
 *
 */
router.post('/paymentIntent', joi(paymentIntentSchema), BusinessController.createPaymentIntent);
router.delete('/:business_id', BusinessController.deleteBusiness);
router.post('/scoring_points', BusinessController.createScoringPointsHandler);
router.post(
	'/:business_id/daily-meal-categories',
	validate(CreateDailyMealCategoryWithPriceSchema, 'body'),
	DailyMealCategoryController.createDailyMealCategoryWithPrice
);

router.get('/:business_id/daily-meal-categories', DailyMealCategoryController.getDailyMealCategoriesForBusiness);
router.get('/daily_meal_subscriptions/:business_id', DailyMealController.getDailyMealsSubscriptionsByBusinessId);
router.post(
	'/daily-meal-categories/:dmc_id/price',
	validate(AddPriceToDailyMealCategorySchema, 'body'),
	DailyMealCategoryController.addPriceToDailyMealCategory
);
router.patch('/daily-meal-categories/:dmc_id/activate', DailyMealCategoryController.activateDailyMealCategory);
router.patch('/daily-meal-categories/:dmc_id/deactivate', DailyMealCategoryController.deactivateDailyMealCategory);

router.get('/local/locations', BusinessController.getLocalLocations);
router.post('/local/locations/:business_id', BusinessController.createBusinessLocalLocation);
router.patch('/local/locations/:location_id', BusinessController.updateBusinessLocalLocation);

export default router;
