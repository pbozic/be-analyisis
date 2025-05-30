import express from 'express';

import PromoController from '../../../controllers/PromoController.js';
const router = express.Router();
router.get('/', PromoController.getAllPromoBanners);
router.get('/type/:type', PromoController.getAllPromoBannersByType);
router.get('/size/:size', PromoController.getAllPromoBannersBySize);
router.get('/ad/:ad', PromoController.getAllPromoBannersByAd);
// router.get('/section/:section', PromoController.getAllPromoBannersBySection);
router.get('/serviceType/:serviceType', PromoController.getPromoBannersByServiceType);
router.post('/', PromoController.createPromoBanner);
router.put('/:id', PromoController.updatePromoBanner);
router.delete('/:id', PromoController.deletePromoBanner);
router.get('/:id', PromoController.getPromoBannerById);
export default router;
