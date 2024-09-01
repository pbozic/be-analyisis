var express = require("express");
const router = express.Router();
const FlagController = require("../../controllers/FlagsController");

router.get("/", FlagController.getFlags);
router.get("/:flag_id", FlagController.getFlagById);
router.post("/", FlagController.createFlag);
router.patch("/:flag_id", FlagController.updateFlag);
router.delete("/:flag_id", FlagController.deleteFlag);

module.exports = router;