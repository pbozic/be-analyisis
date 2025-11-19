import express from 'express';

import { validate } from '../../middleware/zod.js';
import LostItemsController from '../../controllers/LostItemsController.js';
import { ReportFoundItemRequestSchema } from '../../schemas/dto/LostItems/lostitem.validators.js';

const router = express.Router();
router.get('/', LostItemsController.getAllLostItems);
router.post('/report', validate(ReportFoundItemRequestSchema), LostItemsController.reportFoundItem);
router.patch(
	'/update/:lost_item_id',
	validate(ReportFoundItemRequestSchema.partial()),
	LostItemsController.updateLostItem
);
router.delete('/delete/:lost_item_id', LostItemsController.deleteFoundItem);
export default router;
