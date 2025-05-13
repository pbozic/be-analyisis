var express = require("express");
const router = express.Router();
const OverwatchController = require("../../controllers/OverwatchController");

router.post("/orders/pagination/", OverwatchController.getOrdersWithPagination);
router.patch("/drivers/activity/settings", OverwatchController.setDriversActivitySettings);
router.get("/drivers/activity/settings", OverwatchController.getDriversActivitySettings);

module.exports = router;