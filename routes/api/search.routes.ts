import express from 'express';

import BusinessController from '../../controllers/BusinessController.js';
import { validate } from '../../middleware/zod.ts';
import {
	ListPromoSectionsMerchantBodySchema,
	SearchBusinessesBodySchema,
	SearchBusinessQuerySchema,
	SearchByNameQuerySchema,
} from '../../schemas/dto/Search/index.ts';

const router = express.Router();

router.get('/:business_id', validate(SearchBusinessQuerySchema, 'body'), BusinessController.getBusinessForSearchById);
router.post(
	'/sections/merchant',
	validate(ListPromoSectionsMerchantBodySchema, 'body'),
	BusinessController.listPromoSectionsWithMerchants
);
router.post('/', validate(SearchBusinessesBodySchema, 'body'), BusinessController.searchBusinesses);
router.get('/', validate(SearchByNameQuerySchema, 'query'), BusinessController.getBusinessesByNameSearch);

export default router;
