import express from 'express';

import VehiclesController from '../../../controllers/VehiclesController.js';

const router = express.Router();

router.get('/', VehiclesController.listVehicles);

export default router;
