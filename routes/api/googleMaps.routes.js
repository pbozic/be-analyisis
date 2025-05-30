import express from 'express';

import { geocodeAddress, getPlacePredictions } from '../../controllers/GoogleMapsController.js';
const router = express.Router();
router.get('/autocomplete', getPlacePredictions);
router.post('/geocode_address', geocodeAddress);
export default router;
