import express from 'express';

import StoresController from '../../controllers/StoresController.ts';
import { validate } from '../../middleware/zod.ts';
import { StoreOnlineBodySchema, StoreOverwhelmedBodySchema } from '../../types/stores/StoreRequests.ts';

const router = express.Router();

router.patch('/:stores_id/online', validate(StoreOnlineBodySchema, 'body'), StoresController.setStoreOnline);
router.patch(
	'/:stores_id/overwhelmed',
	validate(StoreOverwhelmedBodySchema, 'body'),
	StoresController.setStoreOverwhelmed
);
router.post('/:stores_id/disable', StoresController.disableStore);
router.post('/:stores_id/enable', StoresController.enableStore);

export default router;
