import express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import TaxiOrderController from '../../../controllers/TaxiOrderController.js';
import { validate } from '../../../middleware/zod.js';
import { RegisterTaxiServiceSchema } from '../../../schemas/dto/Auth/AuthRequest.dto.js';
import { TransferPriceRequestSchema } from '../../../schemas/dto/Taxi/taxiorder.dto.js';

const router = express.Router();
router.post('/register', validate(RegisterTaxiServiceSchema), AuthController.registerTaxiService);
router.post(
	'/calculate_transfer_price',
	validate(TransferPriceRequestSchema),
	TaxiOrderController.calculateTransferPrice
);
router.post('/transfer_price', validate(TransferPriceRequestSchema), TaxiOrderController.requestTransferOrderPrice);

export default router;
