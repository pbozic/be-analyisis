import express from 'express';

import StripeController from '../../controllers/StripeController.js';
import BusinessController from '../../controllers/BusinessController.js';
import { validate } from '../../middleware/zod.js';
import { StripeEventResponseSchema } from '../../schemas/dto/Stripe/event.dto.ts';
const router = express.Router();

router.post('/webhook', validate(StripeEventResponseSchema), StripeController.handleWebhook);
router.get('/generate/:business_id', BusinessController.generateBusinessStripeByBusinessId);
router.get('/return/:business_id', BusinessController.onboardingEnd);
export default router;
