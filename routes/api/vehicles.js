import express from 'express';

import joi from '../../middleware/joi.js';
import vehicleSchemas from '../../joi/vehicleSchemas.js';
import VehiclesController from '../../controllers/VehiclesController.js';
const router = express.Router();
const { vehicleUpdateSchema } = vehicleSchemas;
router.get('/', VehiclesController.listVehicles);
router.get('/business/:businessId', VehiclesController.listVehiclesByBusiness);
router.get('/:vehicle_id', VehiclesController.getVehicleById);
router.get('/class/:vehicleClass', VehiclesController.getVehiclesByClass);
router.get('/category/:vehicleCategory', VehiclesController.getVehiclesByCategory);
router.get('/class/:vehicleClass/category/:vehicleCategory', VehiclesController.getVehiclesByClassAndCategory);
router.get('/driver/:driver_id', VehiclesController.getVehiclesByDriverId);
router.get('/driver/:driver_id/class/:vehicleClass', VehiclesController.getVehiclesOfDriverByClass);
router.get('/driver/:driver_id/category/:vehicleCategory', VehiclesController.getVehiclesOfDriverByCategory);
router.get(
	'/driver/:driver_id/class/:vehicleClass/category/:vehicleCategory',
	VehiclesController.getVehiclesOfDriverByClassAndCategory
);
router.post('/create', VehiclesController.createVehicle);
router.patch('/', VehiclesController.updateVehicle);
router.post('/driver/assign/', VehiclesController.assignVehiclesToDriver);
router.patch('/driver/unassign', VehiclesController.removeVehiclesFromDriver);
router.delete('/:vehicle_id', VehiclesController.deleteVehicle);
export default router;
