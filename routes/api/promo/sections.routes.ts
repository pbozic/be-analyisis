import express from 'express';

import PromoController from '../../../controllers/PromoController.js';
import { validate } from '../../../middleware/zod.ts';
import {
	CreatePromoSectionRequestSchema,
	UpdatePromoSectionRequestSchema,
	ReorderPromoSectionsRequestSchema,
	PurchasableQuerySchema,
} from '../../../schemas/dto/Promo/promo-section.dto.ts';

const router = express.Router();

router.get('/', validate(PurchasableQuerySchema, 'query'), PromoController.getAllPromoSections);
router.get('/type/:type', PromoController.getAllPromoSectionsByServiceType);
router.post('/', validate(CreatePromoSectionRequestSchema), PromoController.createPromoSection);
router.patch('/reorder', validate(ReorderPromoSectionsRequestSchema), PromoController.reorderPromoSections);
router.patch('/:id', validate(UpdatePromoSectionRequestSchema), PromoController.updatePromoSection);
router.delete('/:id', PromoController.deletePromoSection);
router.get('/:id', PromoController.getPromoSectionById);

export default router;
