var express = require("express");
const router = express.Router();
const TaxiOrderController = require("../../controllers/TaxiOrderController");
const {
    createOrderSchema,
} = require("../../joi/taxiOrderSchemas");

const joi = require("../../middleware/joi");

router.get("/", TaxiOrderController.getTaxiOrders);
router.get("/order/:order_id", TaxiOrderController.getOrder);
router.get("/order/:order_id/available-drivers", TaxiOrderController.getDriversForOrder);
router.get("/orders/completed/:driver_id", TaxiOrderController.getCompletedTaxiOrders);
router.get("/orders/completed/user/:user_id", TaxiOrderController.getCompletedTaxiOrdersByUserId);
router.get("/orders/canceled/:driver_id", TaxiOrderController.getCanceledAndRejectedTaxiOrders);
router.get("/orders/canceled/user/:user_id", TaxiOrderController.getCanceledTaxiOrdersByUserId);
router.get("/orders/active/driver/:driver_id", TaxiOrderController.getActiveTaxiOrdersByDriverId);
router.get("/orders/active/:user_id/:type", TaxiOrderController.getActiveTaxiOrders);
router.post("/order", joi(createOrderSchema), TaxiOrderController.createOrder);
router.get("/orders/scheduled_orders", TaxiOrderController.getScheduledOrders);
router.post("/dispatch-order", joi(createOrderSchema), TaxiOrderController.createDispatchOrder);
router.post("/order/status", TaxiOrderController.updateOrderStatus);
router.post("/order/route", TaxiOrderController.updateTaxiOrderRoute);
router.post("/order/preferences", TaxiOrderController.updateTaxiOrderPreferences);
router.post("/order/pickup_location", TaxiOrderController.updateTaxiOrderPickupLocation);
router.post("/order/delivery_location", TaxiOrderController.updateTaxiOrderDeliveryLocation);
router.post("/order/complete_route", TaxiOrderController.updateCompleteTaxiRoute);
router.post("/order/accept", TaxiOrderController.acceptOrder);
router.post("/order/complete", TaxiOrderController.completeOrder);
router.post("/order/cancel", TaxiOrderController.cancelOrder);
router.post("/order/reject", TaxiOrderController.rejectOrder);
router.post("/order/timeline", TaxiOrderController.updateTaxiOrderTimeline);
router.post("/order/payment", TaxiOrderController.updateTaxiOrderPayment);
router.post("/order/append_driver", TaxiOrderController.appendTaxiDriver);

module.exports = router;