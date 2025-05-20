var express = require('express');

const { geocodeAddress, getPlacePredictions } = require('../../controllers/GoogleMapsController');
const router = express.Router();

router.get('/autocomplete', getPlacePredictions);
router.post('/geocode_address', geocodeAddress);

module.exports = router;
