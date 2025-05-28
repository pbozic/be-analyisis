import express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import { registerTaxiBusinessSchema } from '../../../joi/taxiSchemas.js';
import joi from '../../../middleware/joi.js';
const router = express.Router();
router.post('/register', joi(registerTaxiBusinessSchema), AuthController.registerTaxiService);
export default router;
