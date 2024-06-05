var express = require("express");
const router = express.Router();

const joi = require("../middleware/joi");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");

const adminRoutes = require("./api/admin");
const userRoutes = require("./api/users");
const authRoutes = require("./api/auth");
const taxiRoutes = require("./api/taxi");
const businessRoutes = require("./api/business");
const driverRoutes = require("./api/drivers");
const vehicleRoutes = require("./api/vehicles");
const financesRoutes = require("./api/finances");
const documentsRoutes = require("./api/documents");

router.use("/admin", [authMiddleware, adminMiddleware], adminRoutes);
router.use("/users", [authMiddleware], userRoutes);
router.use("/auth", authRoutes);
router.use("/taxi", [authMiddleware], taxiRoutes);
router.use("/business", [authMiddleware], businessRoutes);
router.use("/drivers", [authMiddleware], driverRoutes);
router.use("/vehicles", [authMiddleware], vehicleRoutes);
router.use("/finances", [authMiddleware], financesRoutes);
router.use("/documents", [authMiddleware], documentsRoutes);


module.exports = router;
