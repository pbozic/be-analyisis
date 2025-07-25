import express from 'express';

import PromoController from '../../../controllers/PromoController.js';
import { authMiddleware } from '../../../middleware/auth.js';

const router = express.Router();
router.get('/', PromoController.getAllPromoAds);
router.get('/type/:type', PromoController.getPromoAdsByServiceType);
router.post('/', [authMiddleware], PromoController.createPromoAd);
router.put('/:id', [authMiddleware], PromoController.updatePromoAd);
router.delete('/:id', [authMiddleware], PromoController.deletePromoAd);
router.get('/:id', PromoController.getPromoAdById);
export default router;
