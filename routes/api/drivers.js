var express = require("express");
const router = express.Router();

const DriverController = require("../../controllers/DriverController");
const joi = require("../../middleware/joi");
const { updateSchema } = require("../../joi/driverSchemas");

router.get("/", DriverController.listDrivers);
router.get("/online", DriverController.listOnlineDrivers);
router.get("/:driver_id", DriverController.getDriverById);
router.get("/:driver_id/location", DriverController.getDriverLocation);

router.patch("/:driver_id/location", DriverController.updateDriverLocation);
router.patch("/:driver_id", DriverController.updateDriver);
router.patch("/:driver_id/online", DriverController.updateDriverOnlineStatus);

router.post("/", DriverController.createDriver);

module.exports = router;