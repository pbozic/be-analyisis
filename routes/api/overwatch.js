import * as express from 'express';

import OverwatchController from '../../controllers/OverwatchController.js';
const router = express.Router();
router.post('/orders/pagination/', OverwatchController.getOrdersWithPagination);
router.patch('/drivers/activity/settings', OverwatchController.setDriversActivitySettings);
router.get('/drivers/activity/settings', OverwatchController.getDriversActivitySettings);
export default router;
