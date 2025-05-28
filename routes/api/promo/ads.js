import express from 'express';

import PromoController from '../../../controllers/PromoController.js';
const router = express.Router();
router.get('/', PromoController.getAllPromoAds);
router.get('/type/:type', PromoController.getPromoAdsByServiceType);
router.post('/', PromoController.createPromoAd);
router.put('/:id', PromoController.updatePromoAd);
router.delete('/:id', PromoController.deletePromoAd);
router.get('/:id', PromoController.getPromoAdById);
export default router;
