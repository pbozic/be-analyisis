import express from 'express';

import { validate } from '../../middleware/zod.js';
import joi from '../../middleware/joi.js';
import { updateSchema, paymentIntentSchema } from '../../joi/businessSchemas.js';
import { reviewBusinessSchema } from '../../joi/reviewSchemas.js';
import BusinessController from '../../controllers/BusinessController.js';
import FinanceController from '../../controllers/FinancesController.js';
import * as DailyMealCategoryController from '../../controllers/DailyMealCategoryController';
import {
	CreateDailyMealCategoryWithPriceSchema,
	AddPriceToDailyMealCategorySchema,
} from '../../types/dailyMeals/DailyMealCategory';
import StripeController from '../../controllers/StripeController.js';

const router = express.Router();
router.post('/businesses/ids', BusinessController.getBusinessesByIds);
router.post('/businesses/sections/merchant', BusinessController.listPromoSectionsWithMerchants);
router.get('/businesses/merchant', BusinessController.listMerchantBusinesses);
router.get('/businesses/merchant/daily-meals', BusinessController.listMerchantBusinessesWithDailyMeals);
router.get('/businesses/merchant/main', BusinessController.listMerchantBusinessesMainInfo);
router.get('/businesses/taxi', BusinessController.listTransferBusinesses);
router.get('/businesses/taxi/main', BusinessController.listTransferBusinessesMainInfo);
router.get('/businesses/busyness', BusinessController.getBusynessFactorsBusinessIdList);
router.get('/favorites/:type', BusinessController.getFavoriteBusinesses);
router.post('/favorites', BusinessController.addBusinessToFavorites);
router.delete('/favorites', BusinessController.removeBusinessFromFavorites);
router.get('/purchase_order_limit/:business_id', BusinessController.getPurchaseOrderLimit);
router.get('/:business_id', BusinessController.getBusinessById);
router.get('/:business_id/reviews', BusinessController.getBusinessReviewsById);
router.get('/parent', BusinessController.getParentBusiness);
router.get('/stripe/:business_id', BusinessController.getBusinessStripeStatusByBusinessId);
router.get('/earnings/all', BusinessController.getAllBusinessesEarnings);
router.get('/earnings/total', BusinessController.getTotalEarnings);
router.get('/earnings/:business_id', BusinessController.getBusinessEarnings);
router.get('/earnings/:business_id/total', BusinessController.getBusinessTotalEarnings);
router.post('/register', BusinessController.createNewBusiness);
router.post('/review', joi(reviewBusinessSchema), BusinessController.reviewBusiness);
router.post('/activate', BusinessController.activateBusiness);
router.post('/deactivate', BusinessController.deactivateBusiness);
router.delete('/remove-payment-method/:pm_id', BusinessController.removeBusinessPaymentMethod);
router.post('/address/add', BusinessController.addBusinessAddress);
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
router.patch('/telephone', BusinessController.updateBusinessTelephone);
router.patch('/workingHours', BusinessController.updateBusinessWorkingHours);
router.patch('/restaurant-overwhelmed/:business_id', BusinessController.updateRestaurantOverwhelmed);
router.patch('/new/:business_id', BusinessController.updateBusinessIsNew);
router.patch('/popular/:business_id', BusinessController.updateBusinessIsPopular);
router.patch('/parent/update', BusinessController.updateParentBusinessId);
router.patch('/parent/remove', BusinessController.removeParentBusinessId);
router.patch('/address', BusinessController.updateBusinessAddress);
router.patch('/delivery-address', BusinessController.updateBusinessDeliveryAddress);
router.patch('/stripe/generate/:business_id', BusinessController.generateBusinessStripeByBusinessId);
router.post('/paymentIntent', joi(paymentIntentSchema), BusinessController.createPaymentIntent);
router.delete('/:business_id', BusinessController.deleteBusiness);
router.post('/scoring_points', BusinessController.createScoringPointsHandler);
router.post(
	'/:business_id/daily-meal-categories',
	validate(CreateDailyMealCategoryWithPriceSchema, 'body'),
	DailyMealCategoryController.createDailyMealCategoryWithPrice
);

router.get('/:business_id/daily-meal-categories', DailyMealCategoryController.getDailyMealCategoriesForBusiness);

router.post(
	'/daily-meal-categories/:dmc_id/price',
	validate(AddPriceToDailyMealCategorySchema, 'body'),
	DailyMealCategoryController.addPriceToDailyMealCategory
);
router.patch('/daily-meal-categories/:dmc_id/activate', DailyMealCategoryController.activateDailyMealCategory);
router.patch('/daily-meal-categories/:dmc_id/deactivate', DailyMealCategoryController.deactivateDailyMealCategory);

export default router;
