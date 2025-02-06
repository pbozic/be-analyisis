const express = require('express');
const router = express.Router();
const PromoController = require('../../../controllers/PromoController');

router.get('/', PromoController.getAllPromoAds)
router.get('/type/:type', PromoController.getPromoAdsByServiceType);
router.post('/', PromoController.createPromoAd);
router.put('/:id', PromoController.updatePromoAd);
router.delete('/:id', PromoController.deletePromoAd);
router.get('/:id', PromoController.getPromoAdById);


module.exports = router;



    