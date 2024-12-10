var express = require("express");
const router = express.Router();

// Middleware and validation schemas (if applicable)
const joi = require("../../middleware/joi");
const { updateSchema, paymentIntentSchema } = require("../../joi/businessSchemas");
const { reviewBusinessSchema } = require("../../joi/reviewSchemas");
const BusinessController = require("../../controllers/BusinessController");
const FinanceController = require("../../controllers/FinancesController");

router.get("/businesses", BusinessController.listBusinesses);
router.get("/businesses/merchant", BusinessController.listMerchantBusinesses);
router.get("/businesses/merchant/daily-meals", BusinessController.listMerchantBusinessesWithDailyMeals);
router.get("/businesses/merchant/main", BusinessController.listMerchantBusinessesMainInfo);
router.get("/businesses/taxi", BusinessController.listTransferBusinesses);
router.get("/businesses/taxi/main", BusinessController.listTransferBusinessesMainInfo);

router.get("/:business_id", BusinessController.getBusinessById);
router.get("/:business_id/reviews", BusinessController.getBusinessReviewsById);
router.get("/search", BusinessController.getBusinessesByNameSearch);
router.get("/parent", BusinessController.getParentBusiness);

router.get("/earnings/all", BusinessController.getAllBusinessesEarnings);
router.get("/earnings/total", BusinessController.getTotalEarnings);
router.get("/earnings/:business_id", BusinessController.getBusinessEarnings);
router.get("/earnings/:business_id/total", BusinessController.getBusinessTotalEarnings);

router.post("/register", BusinessController.createNewBusiness);
router.post("/review", joi(reviewBusinessSchema), BusinessController.reviewBusiness);
router.post("/address/add", BusinessController.addBusinessAddress);
router.post("/delivery-address/add", BusinessController.addDeliveryAddress);

router.post("/scheduled_users/sorting", BusinessController.manualSortScheduledUsers);
router.post("/scheduled_users/sorting/type", BusinessController.addScheduledUserSortingType);

router.patch("/", BusinessController.update);
router.patch("/edit", BusinessController.editBusiness);
router.patch("/type", BusinessController.updateBusinessType);
router.patch("/business-unit", BusinessController.updateIsBusinessUnit);
router.patch("/business-group-name", BusinessController.updateBusinessGroupName);
router.patch("/email", BusinessController.updateBusinessEmail);
router.patch("/telephone", BusinessController.updateBusinessTelephone);
router.patch("/workingHours", BusinessController.updateBusinessWorkingHours);
router.patch("/new/:business_id", BusinessController.updateBusinessIsNew);
router.patch("/popular/:business_id", BusinessController.updateBusinessIsPopular);
router.patch("/parent/update", BusinessController.updateParentBusinessId);
router.patch("/parent/remove", BusinessController.removeParentBusinessId);
router.patch("/address", BusinessController.updateBusinessAddress);
router.patch("/delivery-address", BusinessController.updateBusinessDeliveryAddress);
router.post("/paymentIntent", joi(paymentIntentSchema), BusinessController.createPaymentIntent);
router.delete("/:business_id", BusinessController.deleteBusiness);

module.exports = router;