import express from 'express';

import VehiclesController from '../../controllers/VehiclesController.js';
import { validate } from '../../middleware/zod.ts';
import {
	CreateVehicleRequestSchema,
	UpdateVehicleRequestSchema,
	VehicleDriverAssignmentSchema,
} from '../../schemas/dto/Vehicles/vehicle.dto';

const router = express.Router();

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

router.post('/create', validate(CreateVehicleRequestSchema), VehiclesController.createVehicle);
router.patch('/:vehicle_id', validate(UpdateVehicleRequestSchema), VehiclesController.updateVehicle);
router.post('/driver/assign/', validate(VehicleDriverAssignmentSchema), VehiclesController.assignVehiclesToDriver);
router.patch('/driver/unassign', validate(VehicleDriverAssignmentSchema), VehiclesController.removeVehiclesFromDriver);

router.delete('/:vehicle_id', VehiclesController.deleteVehicle);

export default router;
