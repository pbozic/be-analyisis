import express from 'express';

import DailyMealController from '../../../controllers/DailyMealController.ts';
import { validate } from '../../../middleware/zod.ts';
import {
	CreateDailyMealSubscriptionDaoInputSchema,
	ConnectSubscriptionWithDriverDaoInputSchema,
} from '../../../schemas/dto/DailyMeal/dailymeal.dao.dto.ts';

const router = express.Router();
router.post(
	'/subscription/payment',
	validate(CreateDailyMealSubscriptionDaoInputSchema),
	DailyMealController.dailyMealsSubscriptionPayment
);
router.post(
	'/user',
	validate(CreateDailyMealSubscriptionDaoInputSchema.partial()),
	DailyMealController.getUserDailyMealSubscriptions
);
router.post(
	'/business/:business_id',
	validate(CreateDailyMealSubscriptionDaoInputSchema.partial()),
	DailyMealController.getActiveDailyMealsSubscriptionsByBusinessId
);
router.get('/subscription/:subscription_id', DailyMealController.getSubscriptionById);
router.patch('/subscription/:subscription_id/activate', DailyMealController.activateSubscriptionById);
router.patch(
	'/subscription/:subscription_id/assign',
	validate(ConnectSubscriptionWithDriverDaoInputSchema.partial()),
	DailyMealController.assignDeliveryDriverToSubscription
);
router.patch('/subscription/:subscription_id/cancel', DailyMealController.cancelSubscriptionById);
router.patch('/instance/:instance_id/cancel', DailyMealController.cancelDailyMealInstanceById);

export default router;
