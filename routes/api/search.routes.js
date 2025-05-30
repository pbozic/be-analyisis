import express from 'express';

import BusinessController from '../../controllers/BusinessController.js';
import MenuController from '../../controllers/MenuController.js';
const router = express.Router();
router.get('/:business_id', BusinessController.getBusinessForSearchById);
router.post('/sections/merchant', BusinessController.listPromoSectionsWithMerchants);
router.post('/menu-items/extras-sides/:business_id', MenuController.getMenuItemsByIds);
router.post('/', BusinessController.searchBusinesses);
router.get('/', BusinessController.getBusinessesByNameSearch);
export default router;
