import express from 'express';

import MenuController from '../../../controllers/MenuController';
import { MenuItemsIdsBodySchema } from '../../../schemas/dto/Menu/menuitem.dto';
import { validate } from '../../../middleware/zod';
import { DailyMenuByBusinessIdBodySchema } from '../../../schemas/dto/Menu';

const router = express.Router();

router.post(
	'/daily/business/:business_id',
	validate(DailyMenuByBusinessIdBodySchema),
	MenuController.getDailyMenuByBusinessId
);
router.post(
	'/menu-items/extras-sides/:business_id',
	validate(MenuItemsIdsBodySchema),
	MenuController.getMenuItemsByIds
);

export default router;
