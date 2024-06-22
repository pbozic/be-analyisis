var express = require("express");
const router = express.Router();
const TaxiOrderController = require("../../controllers/TaxiOrderController");
const {
    createOrderSchema,
} = require("../../joi/taxiOrderSchemas");

const joi = require("../../middleware/joi");

router.get("/order/:order_id", TaxiOrderController.getOrder);
router.post("/order", joi(createOrderSchema), TaxiOrderController.createOrder);
router.post("/order/status", TaxiOrderController.updateOrderStatus);
router.post("/order/route", TaxiOrderController.updateTaxiOrderRoute);
router.post("/order/pickup_location", TaxiOrderController.updateTaxiOrderPickupLocation);
router.post("/order/delivery_location", TaxiOrderController.updateTaxiOrderDeliveryLocation);
router.post("/order/complete_route", TaxiOrderController.updateCompleteTaxiRoute);
router.post("/order/accept", TaxiOrderController.acceptOrder);
router.post("/order/complete", TaxiOrderController.completeOrder);

module.exports = router;
