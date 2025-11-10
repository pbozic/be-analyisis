import express from 'express';

import DriverController from '../../controllers/DriverController.js';
import { validate } from '../../middleware/zod.js';
import {
	UpdateDriverSchema,
	EditDriverSchema,
	UpdateDriverLocationSchema,
	UpdateDriverRideRequirementsSchema,
	UpdateDriverOnlineStatusSchema,
	ToggleDriverOrdersSchema,
	SetCurrentVehicleSchema,
	UpdateDriverDailyMealBusinessesSchema,
	UnlinkDriverFromBusinessSchema,
	CreateDriverSchema,
	HandleSosAlertSchema,
	SendComeToWorkNotificationSchema,
	AssignBusinessForDailyMealsToDriverSchema,
	RegisterVehicleInvoicesSchema,
	CreateElectronicDeviceForPremiseSchema,
	DisableElectronicDeviceSchema,
	UpdateDeviceAssignmentSchema,
} from '../../schemas/dto/Driver/DriverRequest.dto.js';

const router = express.Router();
router.get('/', DriverController.listDrivers);
router.get('/full', DriverController.listDriversFull);
router.get('/online', DriverController.listOnlineDrivers);
router.get('/available', DriverController.getAvailableDrivers);
router.get('/unavailable', DriverController.getUnavailableDrivers);
router.get('/orders', DriverController.resendDelegatedOrdersToDriver);
router.get('/user/:user_id', DriverController.getDriverByUserId);
router.get('/daily-meals', DriverController.listDriversWithDailyMeals);
router.get('/:driver_id', DriverController.getDriverById);
router.get('/:driver_id/location', DriverController.getDriverLocation);
router.get('/:driver_id/history_location', DriverController.getDriverHistoryLocations);
router.get('/:driver_id/reviews', DriverController.getDriverReviews);
/**
 *    * @module finances
 *
 */
router.get('/earnings/all', DriverController.getAllDriversEarnings);
/**
 *    * @module finances
 *
 */
router.get('/earnings/total', DriverController.getTotalEarnings);
/**
 *    * @module finances
 *
 */
router.get('/earnings/:driver_id', DriverController.getDriverEarnings);
/**
 *    * @module finances
 *
 */
router.get('/earnings/:driver_id/total', DriverController.getDriverTotalEarnings);
router.get('/daily-meal-business/:business_id', DriverController.getDriversByDailyMealBusinessId);
router.get('/business/:business_id', DriverController.getDriversByBusinessId);
router.patch('/update/:driver_id', validate(UpdateDriverSchema), DriverController.updateDriver);
router.patch('/edit', validate(EditDriverSchema), DriverController.editDriver);
router.patch(
	'/ride_requirements',
	validate(UpdateDriverRideRequirementsSchema),
	DriverController.updateDriverRideRequirements
);
router.patch('/location', validate(UpdateDriverLocationSchema), DriverController.updateDriverLocation);
router.patch('/online', validate(UpdateDriverOnlineStatusSchema), DriverController.updateDriverOnlineStatus);
router.patch(
	'/assign/:driver_id',
	validate(UpdateDriverDailyMealBusinessesSchema),
	DriverController.updateDriverDailyMealBusinesses
);
router.patch('/:driver_id/toggle_orders', validate(ToggleDriverOrdersSchema), DriverController.toggleDriverOrders);
router.patch('/:driver_id/set_current_vehicle', validate(SetCurrentVehicleSchema), DriverController.setCurrentVehicle);
router.patch('/:driver_id/:action/:type', DriverController.setDriverHandle);
router.patch('/:driver_id/unlink', validate(UnlinkDriverFromBusinessSchema), DriverController.unlinkDriverFromBusiness);
router.post(
	'/:driver_id/vehicles/:vehicle_id/register-invoices',
	validate(RegisterVehicleInvoicesSchema),
	DriverController.registerVehicleInvoices
);
router.post(
	'/:driver_id/premises/:business_premise_id/devices',
	validate(CreateElectronicDeviceForPremiseSchema),
	DriverController.createElectronicDeviceForPremise
);
router.patch(
	'/:driver_id/premises/:business_premise_id/devices/:electronic_device_id/disable',
	validate(DisableElectronicDeviceSchema),
	DriverController.disableElectronicDevice
);
router.post(
	'/:driver_id/premises/:business_premise_id/devices/:electronic_device_id/assignment',
	validate(UpdateDeviceAssignmentSchema),
	DriverController.updateDeviceAssignment
);
router.post('/come_to_work', validate(SendComeToWorkNotificationSchema), DriverController.sendComeToWorkNotification);
router.post('/create', validate(CreateDriverSchema), DriverController.createDriver);
router.post(
	'/daily_meals/business',
	validate(AssignBusinessForDailyMealsToDriverSchema),
	DriverController.assignBusinessForDailyMealsToDriver
);
router.post('/sos', validate(HandleSosAlertSchema), DriverController.handleSosAlert);
export default router;
