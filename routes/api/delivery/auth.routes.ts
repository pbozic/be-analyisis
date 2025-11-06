import express from 'express';

import { validate } from '../../../middleware/zod.ts';
import AuthController from '../../../controllers/AuthController.js';
import { RegisterDeliveryServiceSchema } from '../../../schemas/dto/Auth/AuthRequest.dto.ts';
const router = express.Router();
router.post('/register', validate(RegisterDeliveryServiceSchema), AuthController.registerDeliveryService);
export default router;
