import express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import { validate } from '../../../middleware/zod.ts';
import { RegisterMerchantServiceSchema } from '../../../schemas/dto/Auth/AuthRequest.dto.ts';

const router = express.Router();

router.post('/register', validate(RegisterMerchantServiceSchema), AuthController.registerMerchantService);

export default router;
