var express = require('express');

const router = express.Router();
const joi = require('../../../middleware/joi');
const VehiclesController = require('../../../controllers/VehiclesController');

router.get('/', VehiclesController.listVehicles);

module.exports = router;
