import fs from 'fs';

import { config } from 'dotenv';
import * as express from 'express';

import AuthController from '../controllers/AuthController.js';
import joi from '../middleware/joi.js';
import { resetPasswordSchema } from '../joi/authSchemas.js';
import { sendSMSVerification } from '../lib/SMS.js';
config();
const router = express.Router();
router.get('/ping', (req, res) => {
	res.json({ message: 'pong' });
});
router.get('/emails/:template', (req, res) => {
	res.render('emails/' + req.params.template, {
		name: 'John Doe',
		title: '123456',
		resetLink: process.env.LINK_BASE_URL + '/reset-password/123456',
	});
});
router.get('/reset-password/:token', AuthController.passwordResetForm);
router.post('/reset-password/:token', joi(resetPasswordSchema), AuthController.passwordReset);
router.get('/test/sms', async (req, res) => {
	try {
		//await sendSMSVerification("040975210", "123456")
		res.send('SMS sent');
	} catch (error) {
		res.status(500).send('Error sending SMS');
	}
});
export default router;
