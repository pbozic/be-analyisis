import express from 'express';

import DriverController from '../../controllers/DriverController.js';
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
router.patch('/update/:driver_id', DriverController.updateDriver);
router.patch('/edit', DriverController.editDriver);
router.patch('/ride_requirements', DriverController.updateDriverRideRequirements);
router.patch('/location', DriverController.updateDriverLocation);
router.patch('/online', DriverController.updateDriverOnlineStatus);
router.patch('/assign/:driver_id', DriverController.updateDriverDailyMealBusiness);
router.patch('/:driver_id/toggle_orders', DriverController.toggleDriverOrders);
router.patch('/:driver_id/set_current_vehicle', DriverController.setCurrentVehicle);
router.patch('/:driver_id/:action/:type', DriverController.setDriverHandle);
router.patch('/:driver_id/unlink', DriverController.unlinkDriverFromBusiness);
router.post('/:driver_id/vehicles/:vehicle_id/register-invoices', DriverController.registerVehicleInvoices);
router.post('/:driver_id/premises/:business_premise_id/devices', DriverController.createElectronicDeviceForPremise);
router.patch(
	'/:driver_id/premises/:business_premise_id/devices/:electronic_device_id/disable',
	DriverController.disableElectronicDevice
);
router.post(
	'/:driver_id/premises/:business_premise_id/devices/:electronic_device_id/assignment',
	DriverController.updateDeviceAssignment
);
router.post('/come_to_work', DriverController.sendComeToWorkNotification);
router.post('/create', DriverController.createDriver);
router.post('/daily_meals/business', DriverController.assignBusinessForDailyMealsToDriver);
router.post('/sos', DriverController.handleSosAlert);
export default router;
