import express from 'express';

import MenuController from '../../../controllers/MenuController';

const router = express.Router();

router.post('/daily/business/:business_id', MenuController.getDailyMenuByBusinessId);

export default router;
