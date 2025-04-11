var express = require("express");
const router = express.Router();
const StripeController = require("../../controllers/StripeController");
const BusinessCOntroller = require("../../controllers/BusinessController");
router.post("/webhook", StripeController.handleWebhook);
router.get("/generate/:business_id", BusinessCOntroller.generateBusinessStripeByBusinessId)
module.exports = router;