import express from 'express';

import StoresController from '../../controllers/StoresController.ts';

const router = express.Router();

router.patch('/:stores_id/online', StoresController.setStoreOnline);
router.patch('/:stores_id/overwhelmed', StoresController.setStoreOverwhelmed);
router.post('/:stores_id/disable', StoresController.disableStore);
router.post('/:stores_id/enable', StoresController.enableStore);

export default router;
