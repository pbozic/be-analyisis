import express from 'express';

import BusinessController from '../../../controllers/BusinessController.js';
const router = express.Router();
router.get('/', BusinessController.listBusinesses);
router.get('/merchants', BusinessController.listMerchantBusinesses);
router.get('/transfers', BusinessController.listTransferBusinesses);
router.get('/business_group_name', BusinessController.getBusinessesByGroupName);
router.get('/children/:parent_business_id', BusinessController.getChildBusinesses);
router.get('/:business_id', BusinessController.getBusinessAdminDataById);
router.patch('/premises/:business_premise_id/confirm', BusinessController.confirmBusinessPremise);

export default router;
