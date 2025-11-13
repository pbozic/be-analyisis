import express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import { validate } from '../../../middleware/zod.js';
import { RegisterTransportServiceSchema } from '../../../schemas/dto/Auth/AuthRequest.dto.js';

const router = express.Router();
router.post('/register', validate(RegisterTransportServiceSchema), AuthController.registerTransportService);
export default router;
