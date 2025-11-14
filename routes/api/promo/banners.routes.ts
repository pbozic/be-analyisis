import express from 'express';

import PromoController from '../../../controllers/PromoController.js';
import { validate } from '../../../middleware/zod.ts';
import {
	CreatePromoBannerRequestSchema,
	UpdatePromoBannerRequestSchema,
} from '../../../schemas/dto/Promo/promo-banner.dto.ts';

const router = express.Router();

router.get('/', PromoController.getAllPromoBanners);
router.get('/type/:type', PromoController.getAllPromoBannersByType);
router.get('/size/:size', PromoController.getAllPromoBannersBySize);
router.get('/ad/:ad', PromoController.getAllPromoBannersByAd);
// router.get('/section/:section', PromoController.getAllPromoBannersBySection);
// router.get('/serviceType/:serviceType', PromoController.getPromoBannersByServiceType);
router.post('/', validate(CreatePromoBannerRequestSchema), PromoController.createPromoBanner);
router.put('/:id', validate(UpdatePromoBannerRequestSchema), PromoController.updatePromoBanner);
router.delete('/:id', PromoController.deletePromoBanner);
router.get('/:id', PromoController.getPromoBannerById);

export default router;
