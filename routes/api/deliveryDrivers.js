var express = require("express");
const router = express.Router();

const DeliveryDriverController = require("../../controllers/DeliveryDriverController");
const joi = require("../../middleware/joi");
const { updateSchema } = require("../../joi/deliveryDriverSchemas");

router.get("/", DeliveryDriverController.listDeliveryDrivers);
router.get("/online", DeliveryDriverController.listOnlineDeliveryDrivers);
router.get("/:delivery_driver_id", DeliveryDriverController.getDeliveryDriverById);
router.get("/:delivery_driver_id/location", DeliveryDriverController.getDeliveryDriverLocation);

router.patch("/:delivery_driver_id/location", joi(updateSchema), DeliveryDriverController.updateDeliveryDriverLocation);
router.patch("/:delivery_driver_id", joi(updateSchema), DeliveryDriverController.updateDeliveryDriver);
router.patch("/:delivery_driver_id/online", joi(updateSchema), DeliveryDriverController.updateDeliveryDriverOnlineStatus);

router.post("/", joi(updateSchema), DeliveryDriverController.createDeliveryDriver);

module.exports = router;