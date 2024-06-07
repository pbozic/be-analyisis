var express = require("express");
const router = express.Router();

const joi = require("../../middleware/joi");
const { vehicleUpdateSchema } = require("../../joi/vehicleSchemas");

const VehiclesController = require("../../controllers/VehiclesController");

router.get("/", VehiclesController.listVehicles);
router.get("/business/:businessId", VehiclesController.listVehiclesByBusiness);
router.get("/:vehicle_id", VehiclesController.getVehicleById);
router.get("/class/:vehicleClass", VehiclesController.getVehiclesByClass);
router.get("/category/:vehicleCategory", VehiclesController.getVehiclesByCategory);
router.get("/class/:vehicleClass/category/:vehicleCategory", VehiclesController.getVehiclesByClassAndCategory);

router.get("/driver/:driver_id", VehiclesController.getVehiclesByDriverId);
router.get("/driver/:driver_id/class/:vehicleClass", VehiclesController.getVehiclesOfDriverByClass);
router.get("/driver/:driver_id/category/:vehicleCategory", VehiclesController.getVehiclesOfDriverByCategory);
router.get("/driver/:driver_id/class/:vehicleClass/category/:vehicleCategory", VehiclesController.getVehiclesOfDriverByClassAndCategory);

router.post("/create", VehiclesController.createVehicle);

router.patch("/", VehiclesController.updateVehicle);
router.patch("/driver/assign/", VehiclesController.assignVehicleToDriver);
router.patch("/driver/unassign", VehiclesController.removeVehicleFromDriver);

router.delete("/:vehicle_id", VehiclesController.deleteVehicle);

module.exports = router;