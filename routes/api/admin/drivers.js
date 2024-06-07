var express = require("express");
const router = express.Router();

const DriverController = require("../../../controllers/DriverController");
const joi = require("../../../middleware/joi");

router.get("/", DriverController.listDrivers);

module.exports = router;
