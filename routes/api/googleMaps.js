var express = require("express");
const { geocodeAddress } = require("../../lib/gApis");
const router = express.Router();

router.post('/geocode_address', geocodeAddress);

module.exports = router;