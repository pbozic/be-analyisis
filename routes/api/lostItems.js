import * as express from 'express';

import LostItemsController from '../../controllers/LostItemsController.js';
const router = express.Router();
router.get('/', LostItemsController.getAllLostItems);
router.post('/report', LostItemsController.reportFoundItem);
router.patch('/update/:lost_item_id', LostItemsController.updateLostItem);
router.delete('/delete/:lost_item_id', LostItemsController.deleteFoundItem);
export default router;
