import express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import TaxiOrderController from '../../../controllers/TaxiOrderController.js';
import { registerTaxiBusinessSchema } from '../../../joi/taxiSchemas.js';
import joi from '../../../middleware/joi.js';
const router = express.Router();
router.post('/register', joi(registerTaxiBusinessSchema), AuthController.registerTaxiService);
router.post('/calculate_transfer_price', TaxiOrderController.calculateTransferPrice);
router.post('/transfer_price', TaxiOrderController.requestTransferOrderPrice);

export default router;
