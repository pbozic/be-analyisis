import express from 'express';

import TaxiOrderController from '../../../controllers/TaxiOrderController.js';
import { validate } from '../../../middleware/zod.js';
import { TransferPriceRequestSchema } from '../../../schemas/dto/Taxi/index.js';

const router = express.Router();
router.post(
	'/calculate_transfer_price',
	validate(TransferPriceRequestSchema),
	TaxiOrderController.calculateTransferPrice
);
router.post('/transfer_price', validate(TransferPriceRequestSchema), TaxiOrderController.requestTransferOrderPrice);

export default router;
