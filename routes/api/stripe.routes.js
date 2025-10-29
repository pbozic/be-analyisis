import express from 'express';

import StripeController from '../../controllers/StripeController.js';
import BusinessController from '../../controllers/BusinessController.js';
const router = express.Router();

router.post('/webhook', StripeController.handleWebhook);
router.get('/generate/:business_id', BusinessController.generateBusinessStripeByBusinessId);
router.get('/return/:business_id', BusinessController.onboardingEnd);
export default router;
