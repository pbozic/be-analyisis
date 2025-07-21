import express from 'express';

import PromoController from '../../../controllers/PromoController.js';
const router = express.Router();
router.get('/', PromoController.getAllPromoSectionBuys);
router.post('/request', PromoController.createPaymentIntentForPromoBuy);
router.get('/section/:section', PromoController.getAllPromoSectionBuysBySection);
router.get('/business/:business_id', PromoController.getAllPromoSectionBuysByBusiness);
router.get('/tier/:tier', PromoController.getAllPromoSectionBuysByTier);
router.get('/stripeSub/:stripe_subscription_id', PromoController.getAllPromoSectionBuysByStripeSub);
router.post('/', PromoController.createPromoSectionBuy);
router.put('/:id', PromoController.updatePromoSectionBuy);
router.delete('/:id', PromoController.deletePromoSectionBuy);
router.get('/:id', PromoController.getPromoSectionBuyById);
router.post('/stripeSub/:id', PromoController.addStripeSubToPromoSectionBuy);
export default router;
