var express = require("express");
const router = express.Router();

const joi = require("../middleware/joi");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");

const adminRoutes = require("./api/admin");
const userRoutes = require("./api/users");
const authRoutes = require("./api/auth");
const authUserRoutes = require("./api/auth");
const authTaxiRoutes = require("./api/taxi/auth");
const authDeliveryRoutes = require("./api/delivery/auth")
const authMerchantRoutes = require("./api/merchant/auth")
const taxiRoutes = require("./api/taxi");
const businessRoutes = require("./api/business");
const driverRoutes = require("./api/drivers");
const deliveryDriverRoutes = require("./api/deliveryDrivers");
const vehicleRoutes = require("./api/vehicles");
const financesRoutes = require("./api/finances");
const documentsRoutes = require("./api/documents");

router.use("/admin", [authMiddleware, adminMiddleware], adminRoutes);
router.use("/users", [authMiddleware], userRoutes);
router.use("/auth", authRoutes);
router.use("/user/auth", authRoutes);
router.use("/taxi/auth", authTaxiRoutes);
router.use("/delivery/auth", authDeliveryRoutes);
router.use("/merchant/auth", authMerchantRoutes);
router.use("/taxi", [authMiddleware], taxiRoutes);
router.use("/business", [authMiddleware], businessRoutes);
router.use("/drivers", [authMiddleware], driverRoutes);
router.use("/delivery-drivers", [authMiddleware], deliveryDriverRoutes);
router.use("/vehicles", [authMiddleware], vehicleRoutes);
router.use("/finances", [authMiddleware], financesRoutes);
router.use("/documents", [authMiddleware], documentsRoutes);


module.exports = router;
