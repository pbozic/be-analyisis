import express from 'express';

import { validate } from '../../../middleware/zod';
import { CreateBusinessTypeSchema } from '../../../types/business/BusinessType.ts';
import BusinessController from '../../../controllers/BusinessController.js';
import { SetBusinessTypesSchema } from '../../../schemas/dto/Business/businessType.ts';

const router = express.Router();
router.get('/', BusinessController.listBusinesses);
router.get('/merchants', BusinessController.listMerchantBusinesses);
router.get('/transfers', BusinessController.listTransferBusinesses);
router.get('/business_group_name', BusinessController.getBusinessesByGroupName);
router.get('/children/:parent_business_id', BusinessController.getChildBusinesses);
router.get('/:business_id', BusinessController.getBusinessAdminDataById);
router.patch('/premises/:business_premise_id/confirm', BusinessController.confirmBusinessPremise);
router.post('/business-types', validate(CreateBusinessTypeSchema, 'body'), BusinessController.createBusinessType);
router.put(
	'/:business_id/types',
	validate(SetBusinessTypesSchema, 'body'),
	BusinessController.setBusinessTypesForBusiness
);

export default router;
