import * as express from 'express';

import FlagController from '../../controllers/FlagsController.js';
const router = express.Router();
router.get('/', FlagController.getFlags);
router.get('/:flag_id', FlagController.getFlagById);
router.post('/', FlagController.createFlag);
router.patch('/:flag_id', FlagController.updateFlag);
router.delete('/:flag_id', FlagController.deleteFlag);
export default router;
