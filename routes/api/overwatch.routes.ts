import express from 'express';

import OverwatchController from '../../controllers/OverwatchController.js';
import { validate } from '../../middleware/zod.ts';
import {
	GetOrdersWithPaginationSchema,
	UpdateDriverActivitySettingsSchema,
} from '../../schemas/dto/Overwatch/overwatch.dto.ts';

const router = express.Router();

router.post(
	'/orders/pagination/',
	validate(GetOrdersWithPaginationSchema),
	OverwatchController.getOrdersWithPagination
);
router.patch(
	'/drivers/activity/settings',
	validate(UpdateDriverActivitySettingsSchema),
	OverwatchController.setDriversActivitySettings
);
router.get('/drivers/activity/settings', OverwatchController.getDriversActivitySettings);

export default router;
