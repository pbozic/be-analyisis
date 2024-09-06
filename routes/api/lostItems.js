const express = require("express");
const router = express.Router();
const LostItemsController = require("../../controllers/LostItemsController");

router.get("/", LostItemsController.getAllLostItems);
router.post("/report", LostItemsController.reportFoundItem);
router.delete("/delete/:lost_item_id", LostItemsController.deleteFoundItem);

module.exports = router;