import express from 'express';

import LocationController from '../../../controllers/reservation/LocationController';
import { validate } from '../../../middleware/zod';
import { CreateLocationSchema, UpdateLocationSchema } from '../../../types/reservation/Location';

const router = express.Router();
router.get('/', LocationController.getLocations);
router.post('/', validate(CreateLocationSchema), LocationController.createLocation);
router.put('/:location_id', validate(UpdateLocationSchema), LocationController.updateLocation);
router.delete('/:location_id', LocationController.deleteLocation);
router.get('/:location_id', LocationController.getLocationById);

export default router;
