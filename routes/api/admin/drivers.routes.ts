import express from 'express';

import DriverController from '../../../controllers/DriverController.js';

const router = express.Router();

router.get('/', DriverController.listDrivers);

export default router;
