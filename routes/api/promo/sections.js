import * as express from 'express';

import PromoController from '../../../controllers/PromoController.js';
const router = express.Router();
router.get('/', PromoController.getAllPromoSections);
router.get('/type/:type', PromoController.getAllPromoSectionsByServiceType);
router.post('/', PromoController.createPromoSection);
router.patch('/reorder', PromoController.reorderPromoSections);
router.patch('/:id', PromoController.updatePromoSection);
router.delete('/:id', PromoController.deletePromoSection);
router.get('/:id', PromoController.getPromoSectionById);
export default router;
