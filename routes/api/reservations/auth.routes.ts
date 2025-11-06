import express from 'express';

import AuthController from '../../../controllers/AuthController';
import { validate } from '../../../middleware/zod.js';
import { RegisterReservationBusinessSchema } from '../../../schemas/dto/Auth/AuthRequest.dto.js';

const router = express.Router();

router.post('/register', validate(RegisterReservationBusinessSchema), AuthController.registerReservationBusiness);

export default router;
