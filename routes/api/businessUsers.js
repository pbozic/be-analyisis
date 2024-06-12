var express = require("express");
const router = express.Router();

const BusinessUsersController = require("../../controllers/BusinessUsersController");

router.get("/", BusinessUsersController.getAllBusinessUsers);
router.get("/business/:business_id", BusinessUsersController.getBusinessUsersByBusinessId);
router.get("/type/:type", BusinessUsersController.getBusinessUsersByBusinessType);

router.post("/", BusinessUsersController.createBusinessUser);
router.post("/address/operating", BusinessUsersController.addOperatingAddress);

router.delete("/:business_users_id", BusinessUsersController.removeBusinessUser);

module.exports = router;