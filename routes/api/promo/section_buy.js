const express = require('express');
const router = express.Router();
const PromoController = require('../../../controllers/PromoController');

router.get('/', PromoController.getAllPromoSectionBuys);
router.get('/section/:section', PromoController.getAllPromoSectionBuysBySection);
router.get('/business/:business_id', PromoController.getAllPromoSectionBuysByBusiness);
router.get('/tier/:tier', PromoController.getAllPromoSectionBuysByTier);
router.get('/stripeSub/:stripe_subscription_id', PromoController.getAllPromoSectionBuysByStripeSub);
router.post('/', PromoController.createPromoSectionBuy);
router.put('/:id', PromoController.updatePromoSectionBuy);
router.delete('/:id', PromoController.deletePromoSectionBuy);
router.get('/:id', PromoController.getPromoSectionBuyById);
router.post('/stripeSub/:id', PromoController.addStripeSubToPromoSectionBuy);

module.exports = router;
