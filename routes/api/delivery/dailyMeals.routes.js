import express from 'express';

import DailyMealController from '../../../controllers/DailyMealController.ts';
import { validate } from '../../../middleware/zod.ts';
import { DailyMealsSubscriptionRequestSchema } from '../../../types/dailymeal/DailyMealSubscription.ts';

const router = express.Router();
router.post(
	'/subscription/payment',
	validate(DailyMealsSubscriptionRequestSchema),
	DailyMealController.dailyMealsSubscriptionPayment
);
router.post('/user', DailyMealController.getUserDailyMealSubscriptions);
router.post('/business/:business_id', DailyMealController.getActiveDailyMealsSubscriptionsByBusinessId);

router.patch('/subscription/:subscription_id/activate', DailyMealController.activateSubscriptionById);
router.patch('/subscription/:subscription_id/cancel', DailyMealController.cancelSubscriptionById);
router.patch('/instance/:instance_id/cancel', DailyMealController.cancelDailyMealInstanceById);

export default router;
