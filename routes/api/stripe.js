var express = require('express');

const router = express.Router();
const StripeController = require('../../controllers/StripeController');
const BusinessCOntroller = require('../../controllers/BusinessController');
router.post('/webhook', StripeController.handleWebhook);
router.get('/generate/:business_id', BusinessCOntroller.generateBusinessStripeByBusinessId);
router.get('/return/:business_id', BusinessCOntroller.onboardingEnd);
module.exports = router;
