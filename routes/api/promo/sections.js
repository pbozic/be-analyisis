const express = require('express');
const router = express.Router();
const PromoController = require('../../../controllers/PromoController');

router.get('/', PromoController.getAllPromoSections);
router.get('/type/:type', PromoController.getAllPromoSectionsByServiceType);
router.post('/', PromoController.createPromoSection);
router.put('/:id', PromoController.updatePromoSection);
router.delete('/:id', PromoController.deletePromoSection);
router.get('/:id', PromoController.getPromoSectionById);

module.exports = router;