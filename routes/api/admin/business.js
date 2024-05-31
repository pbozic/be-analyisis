var express = require("express");

const router = express.Router();
const BusinessController = require("../../../controllers/BusinessController");
const joi = require("../../../middleware/joi");

router.get("/", BusinessController.listBusinesses);
router.get("/merchants", BusinessController.listMerchantBusinesses);
router.get("/transfers", BusinessController.listTransferBusinesses);
router.get("/business_group_name", BusinessController.getBusinessesByGroupName);
router.get("/children/:parent_business_id", BusinessController.getChildBusinesses);

module.exports = router;
