var express = require("express");
const router = express.Router();
const BusinessController = require("../../controllers/BusinessController");

router.get("/:business_id", BusinessController.getBusinessForSearchById);
router.post("/sections/merchant", BusinessController.listPromoSectionsWithMerchants);
router.post("/", BusinessController.searchBusinesses);
router.get("/", BusinessController.getBusinessesByNameSearch);

module.exports = router;