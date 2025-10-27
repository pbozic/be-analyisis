import express from 'express';

import DriverController from '../../controllers/DriverController.js';
import driverSchemas from '../../joi/driverSchemas.js';
const router = express.Router();
const { updateSchema } = driverSchemas;
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
router.post('/come_to_work', DriverController.sendComeToWorkNotification);
router.post('/create', DriverController.createDriver);
router.post('/daily_meals/business', DriverController.assignBusinessForDailyMealsToDriver);
router.post('/sos', DriverController.handleSosAlert);
export default router;
