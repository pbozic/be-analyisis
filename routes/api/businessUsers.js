var express = require("express");
const router = express.Router();

const BusinessUsersController = require("../../controllers/BusinessUsersController")

router.get("/", BusinessUsersController.getAllBusinessUsers);
router.get("/:user_id", BusinessUsersController.getBusinessUserByUserId);
router.get("/business/:business_id", BusinessUsersController.getBusinessUsersByBusinessId);
router.get("/type/:type", BusinessUsersController.getBusinessUsersByBusinessType);
router.get("/business/group-users/:business_id", BusinessUsersController.getBusinessGroupsByBusinessId);
router.get("/business/:business_id/company-role/:company_role", BusinessUsersController.getAllBusinessUsersForBusinessByCompanyRole);

router.post("/", BusinessUsersController.createBusinessUser);
router.post("/address/operating", BusinessUsersController.addOperatingAddress);

router.patch("/company-role", BusinessUsersController.updateCompanyRole);
router.patch("/online", BusinessUsersController.updateBusinessUserOnlineStatus);

router.delete("/:business_users_id", BusinessUsersController.removeBusinessUser);

module.exports = router;