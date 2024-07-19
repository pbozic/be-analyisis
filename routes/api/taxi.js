var express = require("express");
const router = express.Router();
const TaxiOrderController = require("../../controllers/TaxiOrderController");
const {
    createOrderSchema,
} = require("../../joi/taxiOrderSchemas");

const joi = require("../../middleware/joi");

router.get("/order/:order_id", TaxiOrderController.getOrder);
router.get("/orders/completed/:driver_id", TaxiOrderController.getCompletedTaxiOrders);
router.get("/orders/completed/user/:user_id", TaxiOrderController.getCompletedTaxiOrdersByUserId);
router.get("/orders/active/:user_id", TaxiOrderController.getActiveTaxiOrders);
router.get("/orders/active/driver/:driver_id", TaxiOrderController.getActiveTaxiOrdersByDriverId);
router.post("/order", joi(createOrderSchema), TaxiOrderController.createOrder);
router.post("/dispatch-order", joi(createOrderSchema), TaxiOrderController.createDispatchOrder);
router.post("/order/status", TaxiOrderController.updateOrderStatus);
router.post("/order/route", TaxiOrderController.updateTaxiOrderRoute);
router.post("/order/pickup_location", TaxiOrderController.updateTaxiOrderPickupLocation);
router.post("/order/delivery_location", TaxiOrderController.updateTaxiOrderDeliveryLocation);
router.post("/order/complete_route", TaxiOrderController.updateCompleteTaxiRoute);
router.post("/order/accept", TaxiOrderController.acceptOrder);
router.post("/order/complete", TaxiOrderController.completeOrder);
router.post("/order/cancel", TaxiOrderController.cancelOrder);
router.post("/order/timeline", TaxiOrderController.updateTaxiOrderTimeline);
router.post("/order/payment", TaxiOrderController.updateTaxiOrderPayment);

module.exports = router;