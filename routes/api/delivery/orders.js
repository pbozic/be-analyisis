var express = require("express");
const router = express.Router();
const {
	createOrderSchema,
} = require("../../../joi/taxiOrderSchemas");

const joi = require("../../../middleware/joi");
const DeliveryOrderController = require("../../../controllers/DeliveryOrderController");

router.get("/order/:order_id", DeliveryOrderController.getOrder);

router.post("/order", DeliveryOrderController.createOrder);

router.post("/order/status", DeliveryOrderController.updateOrderStatus);
router.post("/order/accept", DeliveryOrderController.acceptOrder);
router.post("/order/complete", DeliveryOrderController.completeOrder);
router.post("/completed", DeliveryOrderController.getCompletedDeliveryOrders);
router.post("/timeline", DeliveryOrderController.getCompletedDeliveryOrders);

module.exports = router;
