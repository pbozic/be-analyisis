import express from 'express';

import PromoController from '../../../controllers/PromoController.js';
import authMiddleware from '../../../middleware/auth.js';
import { validate } from '../../../middleware/zod.ts';
import { CreatePromoAdRequestSchema, UpdatePromoAdRequestSchema } from '../../../schemas/dto/Promo/promo-ad.dto.ts';

const router = express.Router();

router.get('/', PromoController.getAllPromoAds);
router.get('/type/:type', PromoController.getPromoAdsByServiceType);
router.post('/', [authMiddleware], validate(CreatePromoAdRequestSchema), PromoController.createPromoAd);
router.put('/:id', [authMiddleware], validate(UpdatePromoAdRequestSchema), PromoController.updatePromoAd);
router.delete('/:id', [authMiddleware], PromoController.deletePromoAd);
router.get('/:id', PromoController.getPromoAdById);

export default router;
