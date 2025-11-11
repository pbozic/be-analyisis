import express from 'express';

import { validate } from '../../middleware/zod.js';
import { GeocodeRequestSchema } from '../../schemas/dto/GoogleMaps/googlemaps.dto.js';
import { geocodeAddress, getPlacePredictions } from '../../controllers/GoogleMapsController.js';

const router = express.Router();
router.get('/autocomplete', getPlacePredictions);
router.post('/geocode_address', validate(GeocodeRequestSchema), geocodeAddress);
export default router;
