var express = require("express");
const router = express.Router();

const joi = require("../middleware/joi");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");
const {SaveObject, GetObject, isAllowedToSeeObject} = require("../lib/s3");
const adminRoutes = require("./api/admin");
const userRoutes = require("./api/users");
const authRoutes = require("./api/auth");
const authUserRoutes = require("./api/auth");
const authTaxiRoutes = require("./api/taxi/auth");
const authDeliveryRoutes = require("./api/delivery/auth")
const authMerchantRoutes = require("./api/merchant/auth")
const taxiRoutes = require("./api/taxi");
const deliveryRoutes = require("./api/delivery/orders");
const businessRoutes = require("./api/business");
const driverRoutes = require("./api/drivers");
const deliveryDriverRoutes = require("./api/deliveryDrivers");
const vehicleRoutes = require("./api/vehicles");
const financesRoutes = require("./api/finances");
const documentsRoutes = require("./api/documents");
const menusRoutes = require("./api/menu");
const businessUserRoutes = require("./api/businessUsers");

router.use("/admin", [authMiddleware, adminMiddleware], adminRoutes);
router.use("/users", [authMiddleware], userRoutes);
router.use("/auth", authRoutes);
router.use("/user/auth", authRoutes);
router.use("/taxi/auth", authTaxiRoutes);
router.use("/delivery/auth", authDeliveryRoutes);
router.use("/merchant/auth", authMerchantRoutes);
router.use("/delivery/orders", [authMiddleware], deliveryRoutes);
router.use("/taxi", [authMiddleware], taxiRoutes);
router.use("/business", [authMiddleware], businessRoutes);
router.use("/drivers", [authMiddleware], driverRoutes);
router.use("/delivery-drivers", [authMiddleware], deliveryDriverRoutes);
router.use("/vehicles", [authMiddleware], vehicleRoutes);
router.use("/finances", [authMiddleware], financesRoutes);
router.use("/documents", [authMiddleware], documentsRoutes);
router.use("/menus", [authMiddleware], menusRoutes);
router.use("/business-users", [authMiddleware], businessUserRoutes);


router.get("/test/s3", [authMiddleware], async (req, res) => {
    let key = "test.png";
    try {
        let isAllowed = await isAllowedToSeeObject(key, "user2", "business2");
        if (!isAllowed) {
            res.status(403).json({error: "Not allowed to see this object"});
        }
        let object = await GetObject(key);
        res.json(object);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

router.post("/test/s3", [authMiddleware], async (req, res) => { 
    let key = req.user.user_id + "/test.png";
    let data = req.body.data;
    let mimeType = req.body.mimeType;
    let owners = {
        users: ["user2"],
        businesses: ["business2"]
    };
   
    try {
        let object = await SaveObject(key, data, mimeType, owners);
        return res.json(object);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

module.exports = router;
