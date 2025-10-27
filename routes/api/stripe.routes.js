import express from 'express';

import StripeController from '../../controllers/StripeController.js';
import BusinessCOntroller from '../../controllers/BusinessController.js';
const router = express.Router();
/**
 *    * @module aaaaaaaa
 *
 */
router.post('/webhook', StripeController.handleWebhook);
router.get('/generate/:business_id', BusinessCOntroller.generateBusinessStripeByBusinessId);
router.get('/return/:business_id', BusinessCOntroller.onboardingEnd);
export default router;
