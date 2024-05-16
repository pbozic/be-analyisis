var express = require("express");
const router = express.Router();
const TaxiOrderController = require("../../controllers/TaxiOrderController");
const {
    createOrderSchema,
} = require("../../joi/taxiOrderSchemas");

const joi = require("../../middleware/joi");

router.get("/order/:order_id", TaxiOrderController.getOrder);
router.post("/order", joi(createOrderSchema), TaxiOrderController.createOrder);

module.exports = router;
