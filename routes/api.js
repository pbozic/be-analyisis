var express = require("express");
const router = express.Router();

const joi = require("../middleware/joi");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");

const adminRoutes = require("./api/admin");
const userRoutes = require("./api/users");
const authRoutes = require("./api/auth");

router.use("/admin", [authMiddleware, adminMiddleware], adminRoutes);
router.use("/users", [authMiddleware], userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
