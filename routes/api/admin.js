var express = require("express");
const router = express.Router();

const joi = require("../../middleware/joi");
const AdminUserRoutes = require("./admin/users");

router.use("/users", AdminUserRoutes);

module.exports = router;
