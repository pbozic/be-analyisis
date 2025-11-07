import express from 'express';

import AuthController from '../../../controllers/AuthController.js';
import { validate } from '../../../middleware/zod.js';
import {
	LoginSchema,
	RegisterUserSchema,
	RefreshTokenSchema,
	RequestPasswordResetSchema,
} from '../../../schemas/dto/Auth/AuthRequest.dto.js';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', { title: 'Express' });
});

router.post('/login', validate(LoginSchema), AuthController.login);
router.post('/register', validate(RegisterUserSchema), AuthController.register);
router.post('/refresh', validate(RefreshTokenSchema), AuthController.refreshToken);
router.post('/reset-password', validate(RequestPasswordResetSchema), AuthController.requestPasswordReset);

export default router;
