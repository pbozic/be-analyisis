var express = require("express");
const router = express.Router();
const {
	createOrderSchema,
} = require("../../../joi/taxiOrderSchemas");

const joi = require("../../../middleware/joi");
const DeliveryOrderController = require("../../../controllers/DeliveryOrderController");

router.get("/order/:order_id", DeliveryOrderController.getOrder);
router.get("/:business_id", DeliveryOrderController.getDeliveryOrdersByBusinessId);
router.get("/completed/:driver_id", DeliveryOrderController.getCompletedDeliveryOrders);
router.get("/completed/user/:user_id", DeliveryOrderController.getCompletedDeliveryOrdersByUserId);
router.get("/active/:user_id", DeliveryOrderController.getActiveDeliveryOrders);
router.get("/order/user/:order_id", DeliveryOrderController.getUserByDeliveryOrderId);
router.post("/order", DeliveryOrderController.createOrder);
router.post("/order/status", DeliveryOrderController.updateOrderStatus);
router.post("/order/pickup_time", DeliveryOrderController.updateOrderPickupTime);
router.post("/order/delivery_time", DeliveryOrderController.updateOrderDeliveryTime);
router.post("/order/accept", DeliveryOrderController.acceptOrder);
router.post("/order/complete", DeliveryOrderController.completeOrder);
router.post("/timeline", DeliveryOrderController.updateDeliveryOrderTimeline);

module.exports = router;
