var express = require("express");
const router = express.Router();
const StripeController = require("../../controllers/StripeController");

router.post("/webhook", StripeController.handleWebhook);

module.exports = router;