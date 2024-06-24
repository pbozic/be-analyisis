var express = require("express");
const router = express.Router();
const DeliveryOrderDao = require("../../dao/DeliveryOrder");
const UsersDao = require("../../dao/User");
const { io } = require("../../socket");
const StripeController = require("../../controllers/StripeController");

router.post("/webhook", StripeController.handleWebhook);

module.exports = router;