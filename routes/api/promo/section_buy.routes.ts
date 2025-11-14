import express from 'express';

import PromoController from '../../../controllers/PromoController.js';
import { validate } from '../../../middleware/zod.ts';
import {
	CreatePaymentIntentForPromoBuyRequestSchema,
	CreatePromoSectionBuyRequestSchema,
	UpdatePromoSectionBuyRequestSchema,
} from '../../../schemas/dto/Promo/promo-section.dto.ts';

const router = express.Router();

router.get('/', PromoController.getAllPromoSectionBuys);
router.post(
	'/request',
	validate(CreatePaymentIntentForPromoBuyRequestSchema),
	PromoController.createPaymentIntentForPromoBuy
);
router.get('/section/:section', PromoController.getAllPromoSectionBuysBySection);
router.get('/business/:business_id', PromoController.getAllPromoSectionBuysByBusiness);
router.get('/tier/:tier', PromoController.getAllPromoSectionBuysByTier);
// router.get('/stripeSub/:stripe_subscription_id', PromoController.getAllPromoSectionBuysByStripeSub);
router.post('/', validate(CreatePromoSectionBuyRequestSchema), PromoController.createPromoSectionBuy);
router.put('/:id', validate(UpdatePromoSectionBuyRequestSchema), PromoController.updatePromoSectionBuy);
// router.delete('/:id', PromoController.deletePromoSectionBuy);
router.get('/:id', PromoController.getPromoSectionBuyById);
// router.post(
// 	'/stripeSub/:id',
// 	validate(AddStripeSubToPromoSectionBuyRequestSchema),
// 	PromoController.addStripeSubToPromoSectionBuy
// );

export default router;
