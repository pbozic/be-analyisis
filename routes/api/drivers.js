var express = require("express");
const router = express.Router();

const DriverController = require("../../controllers/DriverController");
const joi = require("../../middleware/joi");
const { updateSchema } = require("../../joi/driverSchemas");

router.get("/", DriverController.listDrivers);
router.get("/full", DriverController.listDriversFull);
router.get("/online", DriverController.listOnlineDrivers);
router.get("/available", DriverController.getAvailableDrivers);
router.get("/unavailable", DriverController.getUnavailableDrivers);
router.get("/orders", DriverController.resendDelegatedOrdersToDriver);
router.get("/:driver_id", DriverController.getDriverById);
router.get("/:driver_id/location", DriverController.getDriverLocation);
router.get("/:driver_id/history_location", DriverController.getDriverHistoryLocations);
router.get("/earnings/all", DriverController.getAllDriversEarnings);
router.get("/earnings/total", DriverController.getTotalEarnings);
router.get("/earnings/:driver_id", DriverController.getDriverEarnings);
router.get("/earnings/:driver_id/total", DriverController.getDriverTotalEarnings);
router.get("/business/:business_id", DriverController.getDriversByBusinessId);

router.patch("/update/:driver_id", DriverController.updateDriver);
router.patch("/edit", DriverController.editDriver);
router.patch("/ride_requirements", DriverController.updateDriverRideRequirements);
router.patch("/location", DriverController.updateDriverLocation);
router.patch("/online", DriverController.updateDriverOnlineStatus);
router.patch("/:driver_id/toggle_orders", DriverController.toggleDriverOrders);
router.patch("/:driver_id/:action/:type", DriverController.setDriverHandle);

router.post("/create", DriverController.createDriver);
router.post("/sos", DriverController.handleSosAlert);

module.exports = router;