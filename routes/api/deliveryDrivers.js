var express = require("express");
const router = express.Router();

const DeliveryDriverController = require("../../controllers/DeliveryDriverController");
const joi = require("../../middleware/joi");
const { updateSchema } = require("../../joi/deliveryDriverSchemas");

router.get("/", DeliveryDriverController.listDeliveryDrivers);
router.get("/orders", DeliveryDriverController.resendDelegatedOrdersToDeliveryDriver);
router.get("/online", DeliveryDriverController.listOnlineDeliveryDrivers);
router.get("/available", DeliveryDriverController.getAvailableDeliveryDrivers);
router.get("/daily-meals", DeliveryDriverController.listDeliveryDriversWithDailyMeals);
router.get("/user/:user_id", DeliveryDriverController.getDeliveryDriverByUserId);
router.get("/:delivery_driver_id", DeliveryDriverController.getDeliveryDriverById);
router.get("/:delivery_driver_id/location", DeliveryDriverController.getDeliveryDriverLocation);
router.patch("/update/:delivery_driver_id", DeliveryDriverController.updateDeliveryDriver);
router.patch("/location", DeliveryDriverController.updateDeliveryDriverLocation);
router.patch("/online", DeliveryDriverController.updateDeliveryDriverOnlineStatus);

router.post("/create", DeliveryDriverController.createDeliveryDriver);

module.exports = router;