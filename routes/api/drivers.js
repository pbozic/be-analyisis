var express = require("express");
const router = express.Router();

const DriverController = require("../../controllers/DriverController");
const joi = require("../../middleware/joi");
const { updateSchema } = require("../../joi/driverSchemas");

router.get("/", DriverController.listDrivers);
router.get("/full", DriverController.listDriversFull);
router.get("/online", DriverController.listOnlineDrivers);
router.get("/available", DriverController.getAvailableDrivers);
router.get("/orders", DriverController.resendDelegatedOrdersToDriver);
router.get("/:driver_id", DriverController.getDriverById);
router.get("/:driver_id/location", DriverController.getDriverLocation);

router.patch("/", DriverController.updateDriver);
router.patch("/ride_requirements", DriverController.updateDriverRideRequirements);
router.patch("/location", DriverController.updateDriverLocation);
router.patch("/online", DriverController.updateDriverOnlineStatus);

router.post("/create", DriverController.createDriver);

module.exports = router;