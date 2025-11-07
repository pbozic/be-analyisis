import express from 'express';

import LocationController from '../../../controllers/reservation/LocationController';
import { validate } from '../../../middleware/zod.js';
import {
	CreateLocationRequestSchema,
	UpdateLocationRequestSchema,
} from '../../../schemas/dto/reservations/location/location.dto.js';

const router = express.Router();
router.get('/', LocationController.getLocations);
router.post('/', validate(CreateLocationRequestSchema), LocationController.createLocation);
router.put('/:location_id', validate(UpdateLocationRequestSchema), LocationController.updateLocation);
router.delete('/:location_id', LocationController.deleteLocation);
router.get('/schedule-list', LocationController.getLocationsWithSchedules);
router.get('/:location_id', LocationController.getLocationById);

export default router;
