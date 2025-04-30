var express = require("express");
const router = express.Router();
const OverwatchController = require("../../controllers/OverwatchController");

router.post("/orders/pagination/", OverwatchController.getOrdersWithPagination);

module.exports = router;