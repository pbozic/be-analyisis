var express = require("express");
const router = express.Router();
const {
	createOrderSchema,
} = require("../../../joi/taxiOrderSchemas");

const joi = require("../../../middleware/joi");
const DeliveryOrderController = require("../../../controllers/DeliveryOrderController");

router.get("/", DeliveryOrderController.getDeliveryOrders);
router.get("/today", DeliveryOrderController.getDeliveryOrdersToday);
router.get("/active", DeliveryOrderController.getActiveDeliveryOrders);
router.get("/:business_id", DeliveryOrderController.getDeliveryOrdersByBusinessId);
router.get("/active/:user_id", DeliveryOrderController.getActiveDeliveryOrdersByUserId);
router.get("/active/business/:business_id", DeliveryOrderController.getActiveDeliveryOrdersByBusinessId);
router.get("/active/driver/:driver_id", DeliveryOrderController.getActiveDeliveryOrdersByDriverId);
router.get("/completed/:driver_id", DeliveryOrderController.getCompletedDeliveryOrdersByDriverId);
router.get("/completed/user/:user_id", DeliveryOrderController.getCompletedDeliveryOrdersByUserId);
router.get("/completed/business/:business_id", DeliveryOrderController.getCompletedDeliveryOrdersByBusinessId);
router.get("/order/:order_id", DeliveryOrderController.getOrder);
router.get("/order/user/:order_id", DeliveryOrderController.getUserByDeliveryOrderId);
router.post("/order", DeliveryOrderController.createOrder);
router.post("/daily_meals", DeliveryOrderController.createDailyMeals);
router.post("/order/status", DeliveryOrderController.updateOrderStatus);
router.post("/order/pickup_time", DeliveryOrderController.updateOrderPickupTime);
router.post("/order/delivery_time", DeliveryOrderController.updateOrderDeliveryTime);
router.post("/order/accept", DeliveryOrderController.acceptOrder);
router.post("/order/complete", DeliveryOrderController.completeOrder);
router.post("/timeline", DeliveryOrderController.updateDeliveryOrderTimeline);
router.post("/order/update", DeliveryOrderController.updateDeliveryOrder);

module.exports = router;
