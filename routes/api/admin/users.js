import * as express from 'express';

import UserController from '../../../controllers/UserController.js';
import joi from '../../../middleware/joi.js';
const router = express.Router();
router.get('/', UserController.listUsers);
export default router;
