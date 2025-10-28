import { config } from 'dotenv';
import moment from 'moment';

import prisma from '../prisma/prisma.js';
import DriverDao from '../dao/Driver.js';
import VehicleDao from '../dao/Vehicle.js';
import UserDao from '../dao/User.js';
import socket from '../socket.js';
import TaxiOrderDao from '../dao/TaxiOrder.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import ReviewsDao from '../dao/Review.js';
import InvoicesDao from '../dao/Invoices.ts';
import taxiHelpers from '../lib/taxiHelpers.js';
import { updateAddressByAddressId, addAddress, addUserAddress } from '../dao/Address.js';
import {
	updateDocumentByDocumentId,
	findDocumentByTypeAndDriverId,
	createDocument,
	linkDocumentToDriver,
	linkDocumentToUser,
} from '../dao/Document.js';
import { updateFileInDocument, addFileToDocument } from '../dao/File.js';
import FileDao from '../dao/File.js';
import S3Helper from '../lib/s3.js';
import DocumentDao from '../dao/Document.js';
import {
	TAXI_ORDER_STATUS,
	DELIVERY_ORDER_STATUS,
	DOCUMENT_TYPE,
	ACTIVITY_TYPE,
	TAXI_ORDER_AUTO_UPDATE_STATUS_DISTANCE,
	DELIVERY_DRIVER_NEARBY_DISTANCE,
} from '../lib/constants.js';
import { calculateTotalEarnings, calculateDriversEarnings, calculateDistance } from '../lib/helpersLib.js';
import deliveryHelpers from '../lib/deliveryHelpers.js';
import stripe from '../lib/stripe.js';
import SMSHelper from '../lib/SMS.js';
import { sendNotificationToUser } from '../lib/oneSignal.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { handleDriverStatusChange } from '../lib/driverHelpers.js';
import { sendDeliveryOrderNotifications, sendOrderNotifications } from '../lib/notifications.js';
import dailyMealHelpers from '../lib/dailyMealHelpers.js';
config();
const { io } = socket;
/**
 * GET /drivers
 * @tag Drivers
 * @summary Get a list of drivers
 * @description Returns a list of drivers along with their user and vehicle information.
 * @operationId getDrivers
 * @response 200 - Successful operation, returns a list of drivers
 * @responseContent {Driver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the driver list
 */
async function listDrivers(req, res) {
	try {
		const drivers = await DriverDao.getDrivers({});
		res.status(200).json(drivers);
	} catch (error) {
		console.error('Error listing drivers:', error);
		res.status(400).json({ error: 'Error listing drivers', detail: error.message });
	}
}
/**
 * GET /drivers/:driver_id/reviews
 * @tag Drivers
 * @summary List reviews for a driver
 * @description Returns all reviews written about the specified driver.
 * @operationId getDriverReviews
 * @pathParam {string} driver_id - Driver id
 * @response 200 - Reviews list
 * @responseContent {object[]} 200.application/json
 * @response 404 - Driver not found
 * @prisma_model reviews
 */
async function getDriverReviews(req, res) {
	try {
		const { driver_id } = req.params;
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) return res.status(404).json({ error: 'Driver not found' });
		const reviews = await ReviewsDao.getReviewsForDriver(driver_id);
		return res.status(200).json(reviews);
	} catch (e) {
		console.error('DriverController.getDriverReviews', e);
		return res.status(500).json({ error: 'Error fetching driver reviews' });
	}
}

/**
 * PATCH /drivers/:driver_id/unlink
 * @tag Drivers
 * @summary Remove driver by unlinking from business
 * @description Deletes the driver entity while keeping the user account active.
 * @operationId unlinkDriverFromBusiness
 * @pathParam {string} driver_id - Driver id to unlink
 * @response 200 - Unlinked successfully
 * @response 404 - Driver not found
 * @prisma_model drivers
 */
async function unlinkDriverFromBusiness(req, res) {
	try {
		const { driver_id } = req.params;
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) return res.status(404).json({ error: 'Driver not found' });
		// Remove driver record; user remains
		await DriverDao.removeDriver(driver_id);
		return res.status(200).json({ message: 'Driver unlinked from business successfully' });
	} catch (e) {
		console.error('DriverController.unlinkDriverFromBusiness', e);
		return res.status(500).json({ error: 'Error unlinking driver from business' });
	}
}

/**
 * POST /drivers/:driver_id/vehicles/:vehicle_id/register-invoices
 * @tag Drivers
 * @summary Register a vehicle for invoicing
 * @description Creates an invoices.business_premise for the driver’s transport module, an electronic_device and assigns it; links the vehicle to the premise.
 * @operationId registerVehicleInvoices
 * @pathParam {string} driver_id - Driver id
 * @pathParam {string} vehicle_id - Vehicle id
 * @response 200 - Registration objects
 * @response 400 - Bad request or missing transport module
 * @prisma_model business_premise
 * @prisma_model electronic_device
 * @prisma_model device_assignment
 * @prisma_model vehicles
 */
async function registerVehicleInvoices(req, res) {
	try {
		const { driver_id, vehicle_id } = req.params;
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) return res.status(404).json({ error: 'Driver not found' });
		if (!driver.transport_module_id) {
			return res.status(400).json({ error: 'Driver is not linked to a transport module' });
		}
		const name = driver?.current_vehicle?.license_plate || 'Movable premise';
		const premise = await InvoicesDao.createBusinessPremise(driver.transport_module_id, { name });
		/* 
		const device = await InvoicesDao.createElectronicDevice(premise.business_premise_id, { name: 'Device #1' });
		const assignment = await InvoicesDao.assignDeviceToDriver(
			driver.driver_id,
			premise.business_premise_id,
			device.electronic_device_id
		);
		 */
		await InvoicesDao.linkPremiseToVehicle(vehicle_id, premise.business_premise_id);
		return res.status(200).json(premise);
	} catch (e) {
		console.error('DriverController.registerVehicleInvoices', e);
		return res.status(500).json({ error: 'Error registering vehicle for invoices' });
	}
}

/**
 * POST /drivers/:driver_id/premises/:business_premise_id/devices
 * @tag Drivers
 * @summary Create an electronic device for a business premise
 * @description Creates a new invoices.electronic_device under the given business premise. Optionally assigns it to the driver.
 * @operationId createElectronicDeviceForPremise
 * @pathParam {string} driver_id - Driver id
 * @pathParam {string} business_premise_id - Business premise id
 * @bodyDescription Device details and optional assignment
 * @bodyContent {
 *   "name": "Device #1",
 *   "active": true,
 *   "electronic_device_id": "uuid",
 *   "assign_to_driver": true,
 *   "valid_from": "2025-01-01T00:00:00.000Z"
 * } application/json
 * @bodyRequired
 * @response 200 - Device created (and assignment if requested)
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
 *   "device": {"business_premise_id": "uuid", "electronic_device_id": "uuid", "name": "Device #1", "active": true},
 *   "assignment": {"device_assignment_id": "uuid", "driver_id": "uuid", "valid_from": "2025-01-01T00:00:00.000Z"}
 * }
 * @prisma_model electronic_device
 * @prisma_model device_assignment
 */
async function createElectronicDeviceForPremise(req, res) {
	try {
		const { driver_id, business_premise_id } = req.params;
		const { name, active, electronic_device_id, assign_to_driver, valid_from } = req.body || {};
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) return res.status(404).json({ error: 'Driver not found' });
		const device = await InvoicesDao.createElectronicDevice(business_premise_id, {
			name: name ?? null,
			active: typeof active === 'boolean' ? active : true,
			electronic_device_id,
		});
		let assignment = null;
		if (assign_to_driver) {
			assignment = await InvoicesDao.assignDeviceToDriver(
				driver.driver_id,
				business_premise_id,
				device.electronic_device_id,
				valid_from ? new Date(valid_from) : new Date()
			);
		}
		return res.status(200).json({ device, assignment });
	} catch (e) {
		console.error('DriverController.createElectronicDeviceForPremise', e);
		return res.status(500).json({ error: 'Error creating electronic device' });
	}
}

/**
 * PATCH /drivers/:driver_id/premises/:business_premise_id/devices/:electronic_device_id/disable
 * @tag Drivers
 * @summary Disable an electronic device
 * @description Sets invoices.electronic_device.active to false for the given device.
 * @operationId disableElectronicDevice
 * @pathParam {string} driver_id - Driver id (for scoping)
 * @pathParam {string} business_premise_id - Business premise id
 * @pathParam {string} electronic_device_id - Electronic device id
 * @response 200 - Device disabled
 * @prisma_model electronic_device
 */
async function disableElectronicDevice(req, res) {
	try {
		const { business_premise_id, electronic_device_id } = req.params;
		const device = await InvoicesDao.disableElectronicDevice(business_premise_id, electronic_device_id);
		return res.status(200).json(device);
	} catch (e) {
		console.error('DriverController.disableElectronicDevice', e);
		return res.status(500).json({ error: 'Error disabling electronic device' });
	}
}

/**
 * POST /drivers/:driver_id/premises/:business_premise_id/devices/:electronic_device_id/assignment
 * @tag Drivers
 * @summary Assign or unassign an electronic device to/from a driver
 * @description One route to assign (create new assignment) or unassign (end current assignment) the device.
 * @operationId updateDeviceAssignment
 * @pathParam {string} driver_id - Driver id
 * @pathParam {string} business_premise_id - Business premise id
 * @pathParam {string} electronic_device_id - Electronic device id
 * @bodyDescription Action and optional valid_from
 * @bodyContent {
 *   "action": "assign|unassign",
 *   "valid_from": "2025-01-01T00:00:00.000Z"
 * } application/json
 * @bodyRequired
 * @response 200 - Assignment changed
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json { "assignment": { "device_assignment_id": "uuid" }, "action": "assign" }
 * @prisma_model device_assignment
 */
async function updateDeviceAssignment(req, res) {
	try {
		const { driver_id, business_premise_id, electronic_device_id } = req.params;
		const { action, valid_from } = req.body || {};
		if (!['assign', 'unassign'].includes(action)) {
			return res.status(400).json({ error: 'Invalid action. Use assign or unassign.' });
		}
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) return res.status(404).json({ error: 'Driver not found' });
		if (action === 'assign') {
			const assignment = await InvoicesDao.assignDeviceToDriver(
				driver.driver_id,
				business_premise_id,
				electronic_device_id,
				valid_from ? new Date(valid_from) : new Date()
			);
			return res.status(200).json({ action, assignment });
		} else {
			const assignment = await InvoicesDao.endDeviceAssignment(
				driver.driver_id,
				business_premise_id,
				electronic_device_id
			);
			return res.status(200).json({ action, assignment });
		}
	} catch (e) {
		console.error('DriverController.updateDeviceAssignment', e);
		return res.status(500).json({ error: 'Error updating device assignment' });
	}
}

/**
 * GET /drivers/business/:business_id
 * @tag Drivers
 * @summary Get a list of drivers for business
 * @description Returns a list of drivers along with their user and vehicle information.
 * @operationId getDrivers
 * @response 200 - Successful operation, returns a list of drivers
 * @responseContent {Driver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the driver list
 */
async function getDriversByBusinessId(req, res) {
	const businessId = req.params.business_id;
	try {
		const drivers = await DriverDao.getDrivers({ where: { business_id: businessId } });
		res.status(200).json(drivers);
	} catch (error) {
		console.error('Error obtaining drivers:', error);
		res.status(400).json({ error: 'Error obtaining drivers', detail: error.message });
	}
}
/**
 * GET /drivers/full
 * @tag Drivers
 * @summary Get a list of drivers
 * @description Returns a list of drivers along with their user and vehicle information.
 * @operationId getDrivers
 * @response 200 - Successful operation, returns a list of drivers
 * @responseContent {Driver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the driver list
 */
async function listDriversFull(req, res) {
	try {
		const drivers = await DriverDao.getDriversFull();
		console.log('drivers', drivers);
		res.status(200).json(drivers);
	} catch (error) {
		console.error('Error listing drivers:', error);
		res.status(400).json({ error: 'Error listing drivers', detail: error.message });
	}
}
/**
 * GET /drivers/online
 * @tag Drivers
 * @summary Get all online drivers
 * @description Returns a list of all drivers who are currently online.
 * @operationId getOnlineDrivers
 * @response 200 - Successful operation, returns a list of online drivers
 * @responseContent {Driver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the online driver list
 */
async function listOnlineDrivers(req, res) {
	try {
		const onlineDrivers = await DriverDao.getOnlineDrivers();
		res.status(200).json(onlineDrivers);
	} catch (error) {
		console.error('Error listing online drivers:', error);
		res.status(400).json({ error: 'Error listing online drivers', detail: error.message });
	}
}
/**
 * GET /drivers/available
 * @tag Drivers
 * @summary Get available drivers
 * @description Returns a list of available drivers based on the specified type.
 * @operationId getAvailableDrivers
 * @response 200 - Successful operation, returns a list of available drivers
 * @responseContent {Driver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the available drivers list
 */
async function getAvailableDrivers(req, res) {
	const { type } = req.query;
	try {
		const drivers = await DriverDao.getAvailableDrivers(type);
		res.status(200).json(drivers);
	} catch (error) {
		console.error('Error getting available drivers:', error);
		res.status(400).json({ error: 'Error getting available drivers', detail: error.message });
	}
}
async function getUnavailableDrivers(req, res) {
	try {
		const drivers = await DriverDao.getUnavailableDrivers();
		res.status(200).json(drivers);
	} catch (error) {
		console.error('Error getting unavailable drivers:', error);
		res.status(400).json({ error: 'Error getting unavailable drivers', detail: error.message });
	}
}
/**
 * GET /drivers/:driver_id
 * @tag Drivers
 * @summary Get a driver by ID
 * @description Retrieves detailed information about a specific driver by their ID.
 * @operationId getDriverById
 * @pathParam {string} driver_id - The ID of the driver to retrieve
 * @response 200 - Successful operation, returns detailed driver information
 * @responseContent {Driver} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving driver information
 */
async function getDriverById(req, res) {
	try {
		const driver = await DriverDao.getDriverById(req.params.driver_id);
		if (driver) {
			res.status(200).json(driver);
		} else {
			res.status(404).json({ error: 'Driver not found' });
		}
	} catch (error) {
		console.error('Error retrieving driver:', error);
		res.status(400).json({ error: 'Error retrieving driver information', detail: error.message });
	}
}
/**
 * GET /drivers/:driver_id/location
 * @tag Drivers
 * @summary Get driver location
 * @description Retrieves the current location of a specific driver.
 * @operationId getDriverLocation
 * @pathParam {string} driver_id - The ID of the driver whose location is being retrieved
 * @response 200 - Successful operation, returns driver's location
 * @responseContent {Location} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving driver's location
 */
async function getDriverLocation(req, res) {
	try {
		const driver = await DriverDao.getDriverLocation(req.params.driver_id);
		if (driver) {
			if (driver.location) {
				res.status(200).json(driver.location);
			} else {
				res.status(404).json({ error: 'Location for the specified driver not found' });
			}
		} else {
			res.status(404).json({ error: 'Driver not found' });
		}
	} catch (error) {
		console.error("Error retrieving driver's location:", error);
		res.status(400).json({ error: "Error retrieving driver's location", detail: error.message });
	}
}
/**
 * GET /drivers/orders
 * @tag Drivers
 * @summary Send already sent pending or accepted orders to a driver
 * @description Retrieves a list of orders for a specific driver by their user ID and sends them to the driver via socket emission.
 * @operationId sendAcceptedOrdersToDriver
 * @response 200 - Successful operation, orders sent to the driver
 * @response 404 - Driver not found
 * @response 400 - Error retrieving orders
 */
async function resendDelegatedOrdersToDriver(req, res) {
	const userId = req.params?.user_id || req.user.user_id;
	try {
		const driver = await DriverDao.getDriverByUserId(userId);
		if (!driver) {
			return res.status(404).json({ error: 'Driver not found' });
		}
		// Send already sent orders to this driver
		await taxiHelpers.resendPendingOrdersToDriver(driver);
		// Send active orders to this driver
		await taxiHelpers.sendActiveOrdersToDriver(driver);
		// Send already sent orders to this driver
		await deliveryHelpers.resendPendingOrdersToDeliveryDriver(driver);
		// Send active orders to this driver
		await deliveryHelpers.sendActiveOrdersToDeliveryDriver(driver);
		// Return a 200 status
		res.status(200).send();
	} catch (error) {
		console.error('Error retrieving orders for driver:', error);
		res.status(400).json({ error: 'Error retrieving orders', detail: error.message });
	}
}
/**
 * GET /drivers/user/:user_id
 * @tag Drivers
 * @summary Get a driver by user ID
 * @description Retrieves detailed information about a specific driver by their user ID.
 * @operationId getDriverByUserId
 * @pathParam {string} user_id - The ID of the user
 * @response 200 - Successful operation, returns detailed driver information
 * @responseContent {Driver} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving driver information
 */
async function getDriverByUserId(req, res) {
	try {
		const driver = await DriverDao.getDriverByUserId(req.params.user_id);
		if (driver) {
			res.status(200).json(driver);
		} else {
			res.status(404).json({ error: 'Driver not found by user_id' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Error retrieving driver (by user_id) information', detail: error.message });
	}
}

/**
 * GET /drivers/daily-meals
 * @tag Drivers
 * @summary List all drivers offering daily meals
 * @description Retrieves a list of all drivers that offer daily meals.
 * @operationId listDriversWithDailyMeals
 * @response 200 - Successful operation, returns a list of drivers offering daily meals
 * @responseContent {Driver[]} 200.application/json
 * @response 400 - Error occurred while obtaining the driver list
 */
async function listDriversWithDailyMeals(req, res) {
	try {
		const drivers = await DriverDao.getDrivers({ where: { delivers_daily_meals: true } });
		res.status(200).json(drivers);
	} catch (e) {
		console.error('Error listing drivers with daily meals:', e);
		res.status(400).json({ error: 'Error listing drivers with daily meals', e });
	}
}

/**
 * GET /drivers/daily-meal-business/:business_id
 * @tag Drivers
 * @summary Get drivers by daily meal business ID
 * @description Retrieves drivers linked to a specific daily meal business.
 * @operationId getDriversByDailyMealBusinessId
 * @pathParam {string} business_id - The ID of the daily meal business
 * @response 200 - Successful operation, returns drivers for the business
 * @responseContent {Driver[]} 200.application/json
 * @response 404 - Drivers not found
 * @response 400 - Error retrieving drivers
 */
async function getDriversByDailyMealBusinessId(req, res) {
	try {
		const drivers = await DriverDao.getDriversByDailyMealBusinessId(req.params.business_id);
		if (drivers) {
			res.status(200).json(drivers);
		} else {
			res.status(404).json({ error: 'Drivers not found for business_id' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Error retrieving drivers by business_id', detail: error.message });
	}
}

/**
 * PATCH /drivers/assign/:driver_id
 * @tag Drivers
 * @summary Update a driver's daily meal business
 * @description Connects or disconnects a driver's daily meal business and toggles delivers_daily_meals.
 * @operationId updateDriverDailyMealBusiness
 * @pathParam {string} driver_id - The ID of the driver to update
 * @bodyContent {Object} application/json
 * @bodyRequired
 * @response 200 - Driver updated successfully
 * @responseContent {Driver} 200.application/json
 * @response 400 - Error updating driver
 */
async function updateDriverDailyMealBusiness(req, res) {
	const { driver_id } = req.params;
	const { businessId } = req.body;
	try {
		let updateData = {};
		if (businessId) {
			updateData = {
				delivers_daily_meals: true,
				daily_meal_business: {
					connect: { business_id: businessId },
				},
			};
		} else {
			updateData = {
				delivers_daily_meals: false,
				daily_meal_business: { disconnect: true },
			};
			await dailyMealHelpers.disconnectDriverFromAllSubscriptions(driver_id);
		}
		const updatedDriver = await DriverDao.updateDriver(driver_id, updateData);
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error('Error updating driver:', error);
		res.status(400).json({ error: 'Error updating driver', detail: error.message });
	}
}

/**
 * POST /drivers/daily_meals/business
 * @tag Drivers
 * @summary Assign a business for daily meals to a driver
 * @description Assigns a business for daily meals to the specified driver.
 * @operationId assignBusinessForDailyMealsToDriver
 * @bodyContent {Object} application/json
 * @bodyRequired
 * @response 200 - Business assigned for daily meals
 * @responseContent {Object} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error assigning business for daily meals
 */
async function assignBusinessForDailyMealsToDriver(req, res) {
	const { driver_id, business_id } = req.body;
	try {
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) {
			return res.status(404).json({ error: 'Driver not found' });
		}
		await DriverDao.updateDriver(driver_id, {
			daily_meal_business: {
				connect: { business_id: business_id },
			},
		});
		res.status(200).json({ message: 'Business assigned for daily meals' });
	} catch (error) {
		console.error('Error assigning business for daily meals to driver:', error);
		res.status(400).json({ error: 'Error assigning business for daily meals to driver', detail: error.message });
	}
}
/**
 * PATCH /drivers/update/:driver_id
 * @tag Drivers
 * @summary Update a driver
 * @description Updates information about a specific driver, excluding location.
 * @operationId updateDriver
 * @pathParam {string} driver_id - The ID of the driver to update
 * @bodyContent {DriverUpdate} application/json
 * @bodyRequired
 * @response 200 - Driver updated successfully
 * @responseContent {Driver} 200.application/json
 * @response 400 - Error updating driver
 */
async function updateDriver(req, res) {
	const { driver_id } = req.params;
	const updateData = req.body;
	try {
		const updatedDriver = await DriverDao.updateDriver(driver_id, updateData);
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error('Error updating driver:', error);
		res.status(400).json({ error: 'Error updating driver', detail: error.message });
	}
}
/**
 * PATCH /drivers/edit
 * @tag Drivers
 * @summary Edit a driver
 * @description Edits the data of specific driver.
 * @operationId editDriver
 * @pathParam {string} driver_id - The ID of the driver to edit
 * @bodyContent {DriverEdit} application/json
 * @bodyRequired
 * @response 200 - Driver edited successfully
 * @responseContent {Driver} 200.application/json
 * @response 400 - Error updating driver
 */
async function editDriver(req, res) {
	const { user, driver, documents, files, address } = req.body;
	console.log('editDriver', req.body);
	const business_id = driver?.business_id;
	delete driver?.business_id;
	const driver_id = driver?.driver_id;
	delete driver?.driver_id;
	const user_id = user?.user_id;
	delete user?.user_id;
	let updatedAddress;
	try {
		const updatedDriver = await DriverDao.updateDriver(driver_id, driver);
		const regions = driver.regions || [];
		await DriverDao.addDriverMunicipalities(driver_id, regions);
		let updatedUser = await UserDao.updateScheduledUser(user_id, user);
		if (address?.address_id) {
			const address_id = address?.address_id;
			updatedAddress = await updateAddressByAddressId(address_id, address);
		} else if (Object.keys(address).length !== 0) {
			const response = await addAddress(address);
			await addUserAddress(user_id, response.address_id);
		}
		if (documents && documents.length > 0) {
			for (const doc of documents) {
				const documentId = doc.document_id;
				delete doc.document_id;
				await updateDocumentByDocumentId(documentId, doc);
			}
		}
		if (files && files.length > 0) {
			for (const file of files) {
				if (file?.base64 && file?.file_id) {
					let document = await DocumentDao.findDocumentByFileId(file.file_id);
					const fileId = file.file_id;
					delete file.document_id;
					delete file.file_id;
					delete file?.name;
					let base64 = file.base64;
					delete file.base64;
					delete file?.document_type;
					await updateFileInDocument(fileId, file, document.public);
					let key = S3Helper.getFileKey(fileId, file.mime_type);
					await S3Helper.SaveObject(
						key,
						base64,
						file.mime_type,
						{
							users: [user_id],
							businesses: [business_id],
						},
						file,
						document.public
					);
				} else if (!file?.file_id) {
					const existingDocument = await findDocumentByTypeAndDriverId(file.document_type, driver_id);
					if (existingDocument) {
						const base64 = file.base64;
						delete file.base64;
						delete file.document_type;
						delete file.name;
						const newFile = await addFileToDocument(
							existingDocument.document_id,
							file,
							existingDocument.public
						);
						const key = S3Helper.getFileKey(newFile.file_id, file.mime_type);
						await S3Helper.SaveObject(
							key,
							base64,
							file.mime_type,
							{
								users: [user_id],
								businesses: [business_id],
							},
							newFile,
							existingDocument.public
						);
					} else {
						const documentData = {
							document_type: file.document_type,
						};
						const newDocument = await createDocument(documentData);
						const base64 = file.base64;
						delete file.base64;
						const document_type = file?.document_type;
						delete file.document_type;
						delete file.name;
						const newFile = await addFileToDocument(newDocument.document_id, file, newDocument.public);
						const key = S3Helper.getFileKey(newFile.file_id, file.mime_type);
						await S3Helper.SaveObject(
							key,
							base64,
							file.mime_type,
							{
								users: [user_id],
								businesses: [business_id],
							},
							newFile,
							newDocument.public
						);
						if (
							document_type === DOCUMENT_TYPE.PROFILE_PICTURE ||
							document_type === DOCUMENT_TYPE.NATIONAL_ID ||
							document_type === DOCUMENT_TYPE.PASSPORT
						) {
							await linkDocumentToUser(newDocument.document_id, user_id);
						} else if (
							document_type === DOCUMENT_TYPE.DRIVING_LICENSE ||
							document_type === DOCUMENT_TYPE.TAXI_LICENCE ||
							document_type === DOCUMENT_TYPE.PASSENGER_TRANSFER_LICENSE ||
							document_type === DOCUMENT_TYPE.BACKGROUND_CHECK_REPORT ||
							document_type === DOCUMENT_TYPE.HEALTH_DECLARATION
						) {
							console.log(file?.document_type);
							await linkDocumentToDriver(newDocument.document_id, driver_id);
						}
					}
				}
			}
		}
		res.status(200).json({ updatedDriver, updatedUser, updatedAddress, files });
	} catch (error) {
		console.error('Error editing driver:', error);
		res.status(400).json({ error: 'Error editing driver', detail: error.message });
	}
}
/**
 * PATCH /drivers/location
 * @tag Drivers
 * @summary Update driver location
 * @description Updates the location of a specific driver.
 * @operationId updateDriverLocation
 * @pathParam {string} driver_id - The ID of the driver to update location for
 * @bodyContent {Location} application/json
 * @bodyRequired
 * @response 200 - Location updated successfully
 * @responseContent {Driver} 200.application/json
 * @response 400 - Error updating driver location
 */
async function updateDriverLocation(req, res) {
	try {
		const userId = req.user.user_id;
		const locationData = req.body.location;
		const driver = await DriverDao.getDriverByUserId(userId);
		let driverUpdatedLocation = await DriverDao.updateDriverLocation(driver.driver_id, locationData);
		// Emit the driver's updated location to each order's specific channel
		const orders = await TaxiOrderDao.getActiveOrdersByDriverId(driver.driver_id);
		const deliveryOrders = await DeliveryOrderDao.getActiveOrdersByDeliveryDriverId(driver.driver_id);
		let allOrders = [...orders, ...deliveryOrders];
		let orderStatus = null;
		let orderId = null;
		let orderType;
		if (driver?.on_order) {
			// Find the most recently updated order
			const latestOrder = allOrders.reduce((latest, order) => {
				return !latest || order.updated_at > latest.updated_at ? order : latest;
			}, null);
			// If there's a most recently updated order, set its status
			if (latestOrder) {
				orderStatus = latestOrder.status;
				orderId = latestOrder.order_id;
				orderType = latestOrder?.type;
			}
		}
		let acceptedOrder;
		let acceptedDeliveryOrders = [];
		let onOrder = false;
		for (let order of allOrders) {
			if (order.status === TAXI_ORDER_STATUS.TAXI_ACCEPTED) {
				acceptedOrder = order;
			} else if (
				[
					TAXI_ORDER_STATUS.TAXI_WAITING,
					TAXI_ORDER_STATUS.TAXI_DRIVING,
					TAXI_ORDER_STATUS.TAXI_ARRIVED,
				].includes(order.status)
			) {
				onOrder = true;
			} else if (
				order.status === DELIVERY_ORDER_STATUS.DELIVERY_IN_DELIVERY &&
				!order.timeline?.some((t) => t.status === 'DRIVER_NEARBY')
			) {
				acceptedDeliveryOrders.push(order);
			}
			try {
				io.to(`order_${order.order_id}`).emit('driver_location', {
					...driver,
					driver_id: driver.driver_id,
					location: locationData,
				});
			} catch (error) {
				console.error("Error emiting driver's location to connected users:", error);
			}
		}

		if (acceptedOrder?.order_id && !onOrder) {
			const pickupLocation = acceptedOrder.pickup_location;
			const distance = calculateDistance(
				locationData?.coordinates?.latitude,
				locationData?.coordinates?.longitude,
				pickupLocation?.coordinates?.latitude,
				pickupLocation?.coordinates?.longitude
			);
			if (distance < TAXI_ORDER_AUTO_UPDATE_STATUS_DISTANCE) {
				console.log('Driver is within 300 meters of pickup location, setting order status to waiting');
				await TaxiOrderDao.updateOrderStatus(acceptedOrder.order_id, TAXI_ORDER_STATUS.TAXI_WAITING);
				const updatedOrder = await TaxiOrderDao.updateTaxiOrderTimeline(acceptedOrder.order_id, [
					{
						status: TAXI_ORDER_STATUS.TAXI_WAITING,
						order_id: acceptedOrder.order_id,
						location: {
							timestamp: moment().format('YYYY-MM-DDTHH:mm:ss.SSS'),
							address: acceptedOrder.route[0]?.address,
							coordinates: locationData?.coordinates,
						},
					},
				]);
				sendOrderNotifications(
					acceptedOrder?.user,
					acceptedOrder?.driver,
					acceptedOrder?.user_id,
					acceptedOrder?.driver_id,
					TAXI_ORDER_STATUS.TAXI_WAITING
				);
				io.to(`order_${acceptedOrder.order_id}`).emit('order_status_change__taxi', updatedOrder);
			} else {
				console.log(`Driver is ${distance} km from pickup location, keeping order status as accepted`);
			}
		}
		for (const acceptedOrder of acceptedDeliveryOrders) {
			const deliveryLocation = acceptedOrder.delivery_location;
			const distance = calculateDistance(
				locationData?.coordinates?.latitude,
				locationData?.coordinates?.longitude,
				deliveryLocation?.coordinates?.latitude,
				deliveryLocation?.coordinates?.longitude
			);
			if (distance < DELIVERY_DRIVER_NEARBY_DISTANCE) {
				console.log('Driver is within 300 meters of delivery location!');
				sendDeliveryOrderNotifications(
					acceptedOrder?.user,
					acceptedOrder?.driver,
					acceptedOrder?.user_id,
					acceptedOrder?.driver_id,
					'DRIVER_NEARBY'
				);
				DeliveryOrderDao.updateDeliveryOrderTimeline(acceptedOrder.order_id, [
					{
						status: 'DRIVER_NEARBY',
						order_id: acceptedOrder.order_id,
						location: {
							timestamp: moment().format('YYYY-MM-DDTHH:mm:ss.SSS'),
							address: acceptedOrder.delivery_location?.address,
							coordinates: locationData?.coordinates,
						},
					},
				]);
			} else {
				console.log(`Driver is ${distance} km from delivery location`);
			}
		}
		if (!driver?.on_order) {
			console.info('EMIT DRIVER_LOCATION');
			io.emit('driver_location', {
				...driver,
				driver_id: driver.driver_id,
				location: locationData,
			});
		}
		await DriverDao.updateDriverLocationHistory(driver.driver_id, locationData, orderStatus, orderId, orderType);
		res.status(200).json(driverUpdatedLocation);
	} catch (error) {
		console.error("Error updating driver's location:", error);
		res.status(400).json({ error: 'Error updating driver location', detail: error.message });
	}
}
/**
 * PATCH /drivers/ride_requirements
 * @tag Drivers
 * @summary Updates the driver's ride requirements
 * @description This endpoint is used to update the current user's ride requirements.
 * @operationId updateDriverRideRequirements
 * @bodyDescription The new ride requirements of the driver.
 * @bodyContent {updateDriverRideRequirementsRequest} application/json
 * @bodyRequired
 * @response 200 - Ride requirements updated successfully. Returns the updated driver's details.
 * @responseContent {User} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateDriverRideRequirements(req, res) {
	try {
		let driver = await DriverDao.updateDriverRideRequirements(req.body.driver_id, req.body.ride_requirements);
		if (driver) return res.status(200).json(driver);
		res.status(400).json({ error: 'Error updating user information' });
	} catch (e) {
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
/**
 * PATCH /drivers/online
 * @tag Drivers
 * @summary Set driver online status
 * @description Sets the online status of a specific driver and emits appropriate socket events.
 * @operationId setDriverOnlineStatus
 * @pathParam {string} driver_id - The ID of the driver to update the online status for
 * @bodyContent {DriverOnlineStatus} application/json
 * @bodyRequired
 * @response 200 - Online status updated successfully
 * @responseContent {Driver} 200.application/json
 * @response 400 - Error updating online status
 *
 * Emits:
 * - "driver_available" event with driver object if online is true
 * - "driver_unavailable" event with driver_id if online is false
 */
async function updateDriverOnlineStatus(req, res) {
	const { driver_id, online } = req.body;
	try {
		const driver = await DriverDao.getDriverById(driver_id);
		if (driver.online === online) {
			return res.status(200).json(driver);
		}
		if (online && !driver.current_vehicle) {
			throw new Error('Driver current vehicle not set');
		}
		const latestLog = await prisma.driver_activity_logs.findFirst({
			where: {
				driver_id,
				ended_at: null,
			},
			orderBy: {
				started_at: 'desc',
			},
		});
		const settings = await prisma.driver_activity_settings.findFirst({
			where: { active: true },
			orderBy: { created_at: 'desc' },
		});
		if (settings) {
			if (latestLog?.activity_type === ACTIVITY_TYPE.LOCKED_OUT && latestLog?.lockout_until > new Date()) {
				return res.status(400).json({ driver, errorMsg: 'LOCKED_OUT' });
			}
			await handleDriverStatusChange(driver_id, online, latestLog, settings);
		}
		const updatedDriver = await DriverDao.updateDriverOnlineStatus(driver_id, online);
		if (online) {
			console.log('Driver is now online:', driver_id);
			io.emit('driver_available', updatedDriver);
			// Re-send pending orders to this driver
			await taxiHelpers.resendPendingOrdersToDriver(updatedDriver);
			// Send active orders to this driver
			await taxiHelpers.sendActiveOrdersToDriver(updatedDriver);
		} else {
			io.emit('driver_unavailable', driver_id);
		}
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error('Error setting online status for driver:', error);
		res.status(400).json({ error: 'Error setting online status for driver', detail: error.message });
	}
}
/**
 * POST /drivers/create
 * @tag Drivers
 * @summary Create a new driver
 * @description Adds a new driver to the database.
 * @operationId createNewDriver
 * @bodyContent {Driver} application/json
 * @bodyRequired
 * @response 201 - Driver created successfully
 * @responseContent {Driver} 201.application/json
 * @response 400 - Error creating driver
 */
async function createDriver(req, res) {
	try {
		let stripeCustomer = await stripe.createCustomer(
			req.body.user.data.email,
			req.body.user.data.first_name + ' ' + req.body.user.data.last_name,
			req.body.user.data.telephone
		);
		const phoneNumber = req.body.user.data.telephone_number;
		const normalizedPhoneNumber = await SMSHelper.getParsedPhoneNumber(
			req.body.user.data.telephone,
			req.body.user.data.telephone_code
		);
		let userObj = {
			...req.body.user.data,
			telephone_number: normalizedPhoneNumber?.number || phoneNumber,
			stripe_customer_id: stripeCustomer.id,
		};
		delete userObj.user_roles;
		const newUser = await UserDao.createNewUser(userObj, true);
		const userRoles = req.body.user.data.user_roles || [{ role: newUser.user_role || 'DRIVER', primary: true }];
		await UserDao.linkRolesToUser(newUser?.user_id, userRoles);
		// Handle user documents
		if (req.body.user.documents) {
			for (const doc of req.body.user.documents) {
				const document = await DocumentDao.createDocument(doc.documentData);
				for (const file of doc.files) {
					let base64 = file.base64;
					delete file.base64;
					delete file.name;
					delete file.document_type;
					let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					S3Helper.SaveObject(
						key,
						base64,
						file.mime_type,
						{
							users: [newUser.user_id],
							businesses: [req.body.driver.data.business_id],
						},
						fileData,
						document.public
					);
				}
				await DocumentDao.linkDocumentToUser(document.document_id, newUser.user_id);
			}
		}
		const driverData = { ...req.body.driver.data };
		const driver = await DriverDao.createNewDriver(driverData, newUser);
		// Handle taxi documents
		if (req.body.driver.documents) {
			for (const doc of req.body.driver.documents) {
				const document = await DocumentDao.createDocument(doc.documentData);
				for (const file of doc.files) {
					let base64 = file.base64;
					delete file.base64;
					delete file.name;
					delete file.document_type;
					let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					S3Helper.SaveObject(
						key,
						base64,
						file.mime_type,
						{
							users: [newUser.user_id],
							businesses: [req.body.driver.data.business_id],
						},
						fileData,
						document.public
					);
				}
				await DocumentDao.linkDocumentToDriver(document.document_id, driver.driver_id);
			}
		}
		if (!driver) {
			return res.status(400).json({ error: 'Failed to create new driver' });
		}
		res.status(201).json(driver);
	} catch (error) {
		console.error('Error creating new driver:', error);
		res.status(400).json({ error: 'Error creating new driver', detail: error.message });
	}
}
async function handleSosAlert(req, res) {
	const data = req.body;
	try {
		io.emit('sos_alert', data);
		res.status(200).json(data);
	} catch (error) {
		console.error('Error sending SOS alert:', error);
		res.status(400).json({ error: 'Error sending SOS alert', detail: error.message });
	}
}
/**
 * GET /drivers/:driver_id/history_location/:start_time/:end_time
 * @tag Drivers
 * @summary Get history of locations for a driver.
 * @description Get history of locations for a driver with a given driver id and between specified time interval
 * @operationId getDriverLocationsController
 * @response 201 - Driver history locations fetched successfully
 * @responseContent {Driver} 201.application/json
 * @response 400 - Error fetching history locations for a particular driver
 */
async function getDriverHistoryLocations(req, res) {
	const { driver_id } = req.params;
	const { start_time, end_time } = req.query;
	console.info(req.params, 'getDriverHistoryLocations');
	if (!driver_id || !start_time || !end_time) {
		return res.status(400).json({ message: 'Missing required parameters' });
	}
	try {
		const locations = await DriverDao.getDriverLocationsWithPerformance(driver_id, start_time, end_time);
		res.status(200).json(locations);
	} catch (error) {
		console.error('Error fetching driver locations:', error);
		res.status(500).json({ message: 'Something went wrong...' });
	}
}
/**
 * GET /drivers/earnings/:driver_id
 * @tag Drivers
 * @summary Get earnings for a specific driver
 * @description Retrieves the earnings of a specific driver within a specified date range.
 * @operationId getDriverEarnings
 * @pathParam {string} driver_id - The ID of the driver whose earnings are being retrieved
 * @pathParam {string} start_date - The start date for the earnings period (format: YYYY-MM-DD)
 * @pathParam {string} end_date - The end date for the earnings period (format: YYYY-MM-DD)
 * @response 200 - Successful operation, returns driver's earnings
 * @responseContent {Earnings} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving driver's earnings
 */
async function getDriverEarnings(req, res) {
	const { driver_id } = req.params;
	const { start_date, end_date } = req.query;
	if (!driver_id || !start_date || !end_date) {
		return res.status(400).json({ message: 'Missing required parameters' });
	}
	try {
		const driver = await DriverDao.getDriverById(driver_id);
		let driverOrders = await prisma.taxi_orders.findMany({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
				driver_id: driver.driver_id,
				updated_at: {
					gte: new Date(start_date).toISOString(),
					lte: new Date(end_date).toISOString(),
				},
			},
		});
		const deliveryOrders = await prisma.delivery_orders.findMany({
			where: {
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				driver_id: driver.driver_id,
				updated_at: {
					gte: new Date(start_date).toISOString(),
					lte: new Date(end_date).toISOString(),
				},
			},
		});
		const earningsData = calculateDriversEarnings([...driverOrders, ...deliveryOrders], driver);
		if (earningsData) {
			res.status(200).json({ driver_id, ...earningsData });
		} else {
			res.status(404).json({ error: 'Driver not found or no earnings data available' });
		}
	} catch (error) {
		console.error("Error retrieving driver's earnings:", error);
		res.status(400).json({ error: "Error retrieving driver's earnings", detail: error.message });
	}
}
/**
 * GET /drivers/earnings/all
 * @tag Drivers
 * @summary Get earnings for all drivers
 * @description Retrieves the earnings of all drivers within a specified date range.
 * @operationId getAllDriversEarnings
 * @pathParam {string} start_date - The start date for the earnings period (format: YYYY-MM-DD)
 * @pathParam {string} end_date - The end date for the earnings period (format: YYYY-MM-DD)
 * @response 200 - Successful operation, returns all drivers' earnings
 * @responseContent {Earnings[]} 200.application/json
 * @response 400 - Error retrieving all drivers' earnings
 */
async function getAllDriversEarnings(req, res) {
	const { start_date, end_date } = req.query;
	if (!start_date || !end_date) {
		return res.status(400).json({ message: 'Missing required parameters' });
	}
	try {
		const drivers = await DriverDao.getDrivers();
		const earningsPromises = drivers.map(async (driver) => {
			let driverOrders = await prisma.taxi_orders.findMany({
				where: {
					status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
					driver_id: driver.driver_id,
					updated_at: {
						gte: new Date(start_date).toISOString(),
						lte: new Date(end_date).toISOString(),
					},
				},
			});
			const deliveryOrders = await prisma.delivery_orders.findMany({
				where: {
					status: DELIVERY_ORDER_STATUS.SUCCESS,
					driver_id: driver.driver_id,
					updated_at: {
						gte: new Date(start_date).toISOString(),
						lte: new Date(end_date).toISOString(),
					},
				},
			});
			return calculateDriversEarnings([...driverOrders, ...deliveryOrders], driver);
		});
		const allEarnings = await Promise.all(earningsPromises);
		res.status(200).json(allEarnings);
	} catch (error) {
		console.error("Error retrieving all drivers' earnings:", error);
		res.status(400).json({ error: "Error retrieving all drivers' earnings", detail: error.message });
	}
}
/**
 * GET /drivers/earnings/total
 * @tag Drivers
 * @summary Get total earnings for all drivers
 * @description Retrieves the total earnings of all drivers based on completed orders.
 * @operationId getTotalEarnings
 * @response 200 - Successful operation, returns total earnings for all drivers
 * @responseContent {TotalEarnings} 200.application/json
 * @response 400 - Error retrieving total earnings
 */
async function getTotalEarnings(req, res) {
	try {
		let orders = await prisma.taxi_orders.findMany({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
			},
		});
		const delivery_orders = await prisma.delivery_orders.findMany({
			where: {
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				driver_id: { not: null },
			},
		});
		const totalEarnings = calculateTotalEarnings([...orders, ...delivery_orders]);
		res.status(200).json(totalEarnings);
	} catch (error) {
		console.error("Error retrieving all drivers' total earnings:", error);
		res.status(400).json({ error: "Error retrieving all drivers' total earnings", detail: error.message });
	}
}
/**
 * GET /drivers/earnings/:driver_id/total
 * @tag Drivers
 * @summary Get total earnings for a specific driver
 * @description Retrieves the total earnings of a specific driver based on completed orders.
 * @operationId getDriverTotalEarnings
 * @pathParam {string} driver_id - The ID of the driver whose total earnings are being retrieved
 * @response 200 - Successful operation, returns total earnings for the specified driver
 * @responseContent {TotalEarnings} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving driver's total earnings
 */
async function getDriverTotalEarnings(req, res) {
	const { driver_id } = req.params;
	const detailed = req.query?.detailed === 'true';
	if (!driver_id) {
		return res.status(400).json({ message: 'Missing required parameter: driver_id' });
	}
	try {
		let orders = await prisma.taxi_orders.findMany({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
				driver_id: driver_id,
			},
		});
		const delivery_orders = await prisma.delivery_orders.findMany({
			where: {
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				driver_id: driver_id,
			},
		});
		const totalEarnings = calculateTotalEarnings([...orders, ...delivery_orders], detailed);
		res.status(200).json(totalEarnings);
	} catch (error) {
		console.error("Error retrieving driver's total earnings:", error);
		res.status(400).json({ error: "Error retrieving driver's total earnings", detail: error.message });
	}
}
/**
 * PATCH /drivers/:driver_id/:action/:type
 * @tag Drivers
 * @summary Enable or disable a driver
 * @description Enables or disables a specific driver based on the provided action and type.
 * @operationId setDriverHandle
 * @pathParam {string} driver_id - The ID of the driver to toggle
 * @pathParam {string} action - The action to perform (enable or disable)
 * @pathParam {string} type - The type of action (taxi, transfer, delivery)
 * @response 200 - Driver toggled successfully
 * @response 404 - Driver not found
 * @response 400 - Error toggling driver
 */
async function setDriverHandle(req, res) {
	const { driver_id, action, type } = req.params;
	try {
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) {
			return res.status(404).json({ error: 'Driver not found' });
		}
		await DriverDao.setDriverHandle(driver_id, action, type);
		res.status(200).json({ message: `Driver ${type} orders ${action}d successfully` });
	} catch (error) {
		console.error('Error toggling driver handle field:', error);
		res.status(400).json({ error: 'Error toggling driver handle field', detail: error.message });
	}
}
/**
 * PATCH /drivers/:driver_id/toggle_orders
 * @tag Drivers
 * @summary Toggle driver's orders he should receive
 * @description This endpoint allows toggling the types of orders a specific driver can receive. The request body should contain an object specifying which order types (taxi, transfer, delivery) to toggle on or off.
 * @operationId toggleDriverOrders
 * @pathParam {string} driver_id - The ID of the driver to toggle
 * @bodyContent {Object} application/json
 * @bodyRequired
 * @response 200 - Driver orders toggled successfully
 * @responseContent {Object} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error toggling driver orders
 */
async function toggleDriverOrders(req, res) {
	const { driver_id } = req.params;
	const { types } = req.body;
	if (!types) {
		return res.status(400).json({ error: 'Missing required parameter: types' });
	}
	try {
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) {
			return res.status(404).json({ error: 'Driver not found' });
		}
		await DriverDao.toggleDriverOrders(driver_id, types);
		res.status(200).json({ message: `Driver orders toggled successfully` });
	} catch (error) {
		console.error('Error toggling driver orders:', error);
		res.status(400).json({ error: 'Error toggling driver orders', detail: error.message });
	}
}
/**
 * POST /drivers/come_to_work
 * @tag Drivers
 * @summary Send notifications for drivers to come to work
 * @description This endpoint allows sending a "come to work" notifications to all drivers who are currently offline.
 * @operationId comeToWorkDrivers
 * @bodyContent {Object} application/json
 * @bodyRequired
 * @response 200 - Notification sent out successfully
 * @responseContent {Object} 200.application/json
 * @response 404 - Problem sending notification
 * @response 400 - Problem sending notification
 */
let isSendingComeToWorkNotification = false;
async function sendComeToWorkNotification(req, res) {
	const { region } = req.body;
	if (!region) {
		return res.status(400).json({ error: 'Missing required parameter: region' });
	}
	try {
		if (isSendingComeToWorkNotification) {
			return res.status(400).json({ error: 'Already sending notifications' });
		}
		isSendingComeToWorkNotification = true;
		let drivers = await DriverDao.getDrivers({
			where: {
				online: false,
			},
		});
		for (let driver of drivers) {
			if (
				!driver.come_to_work_last_sent_at ||
				moment(driver.come_to_work_last_sent_at).isBefore(moment().subtract(3, 'hours'))
			) {
				//TODO: early hours what to do?
				const l10nTextDriver = getLocalisedTexts('DRIVER_NOTIFICATIONS', driver.user);
				const l10nTextHeadingDriver = getLocalisedTexts('HEADING', driver.user);
				sendNotificationToUser(l10nTextHeadingDriver.driver, l10nTextDriver.comeToWork, driver.user_id);
				DriverDao.updateDriver(driver.driver_id, { come_to_work_last_sent_at: new Date() });
			}
		}
		res.status(200).json({ message: 'Notifications sent out successfully' });
	} catch (error) {
		console.error('Error sending notifications:', error);
		res.status(400).json({ error: 'Error sending notifications', detail: error.message });
	} finally {
		isSendingComeToWorkNotification = false;
	}
}
/**
 * PATCH /drivers/:driver_id/set_current_vehicle
 * @tag Drivers
 * @summary Set driver's current vehicle
 * @description This endpoint sets the current vehicle for a specific driver. It first checks that the vehicle belongs to the driver. If a vehicle was previously assigned, it will be disconnected. The request body should contain the new vehicle ID to assign.
 * @operationId setDriverCurrentVehicle
 * @pathParam {string} driver_id - The ID of the driver
 * @bodyContent {Object} application/json
 * @bodyRequired
 * @response 200 - Driver vehicle updated successfully
 * @responseContent {Object} 200.application/json
 * @response 404 - Driver or vehicle not found
 * @response 400 - Invalid vehicle ID or error setting vehicle
 */
async function setCurrentVehicle(req, res) {
	const { driver_id } = req.params;
	const { vehicle_id } = req.body;
	if (!vehicle_id) {
		return res.status(400).json({ error: 'vehicle_id is required in the request body.' });
	}
	try {
		const driver = await DriverDao.getDriverById(driver_id);
		if (!driver) {
			return res.status(404).json({ error: 'Driver not found.' });
		}
		if (driver.current_vehicle_id === vehicle_id) {
			return res.status(200).json(driver);
		}
		const driver_vehicle = driver.vehicles.find((v) => v.vehicle_id === vehicle_id);
		const vehicle = driver_vehicle?.vehicle_id ? await VehicleDao.getVehicleById(vehicle_id) : null;
		// console.log(JSON.stringify(driver,null,2))
		// console.log(JSON.stringify(driver_vehicle,null,2))
		// console.log(JSON.stringify(vehicle,null,2))
		if (!driver_vehicle?.can_drive || vehicle?.current_driver !== null) {
			return res.status(400).json({
				driver: driver,
				error: 'Driver can not drive the specified vehicle.',
				error_code: 'ERR_VEHICLE_UNAVAILABLE',
			});
		}
		const updatedDriver = await DriverDao.setDriverCurrentVehicle(driver_id, vehicle_id);
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error('Failed to set driver current vehicle:', error);
		res.status(400).json({ error: 'Error setting driver current vehicle.' });
	}
}
export { getDriversByBusinessId };
export { setDriverHandle };
export { toggleDriverOrders };
export { listDrivers };
export { listOnlineDrivers };
export { getDriverById };
export { getDriverLocation };
export { updateDriver };
export { updateDriverLocation };
export { updateDriverOnlineStatus };
export { createDriver };
export { getAvailableDrivers };
export { updateDriverRideRequirements };
export { resendDelegatedOrdersToDriver };
export { listDriversFull };
export { getUnavailableDrivers };
export { handleSosAlert };
export { getDriverHistoryLocations };
export { editDriver };
export { getDriverEarnings };
export { getAllDriversEarnings };
export { getTotalEarnings };
export { getDriverTotalEarnings };
export { sendComeToWorkNotification };
export { setCurrentVehicle };
export { getDriverByUserId };
export { listDriversWithDailyMeals };
export { getDriversByDailyMealBusinessId };
export { updateDriverDailyMealBusiness };
export { assignBusinessForDailyMealsToDriver };
export default {
	getDriversByBusinessId,
	setDriverHandle,
	toggleDriverOrders,
	listDrivers,
	listOnlineDrivers,
	getDriverById,
	getDriverLocation,
	updateDriver,
	updateDriverLocation,
	updateDriverOnlineStatus,
	createDriver,
	getAvailableDrivers,
	updateDriverRideRequirements,
	resendDelegatedOrdersToDriver,
	listDriversFull,
	getUnavailableDrivers,
	handleSosAlert,
	getDriverHistoryLocations,
	editDriver,
	getDriverEarnings,
	getAllDriversEarnings,
	getTotalEarnings,
	getDriverTotalEarnings,
	sendComeToWorkNotification,
	setCurrentVehicle,
	getDriverByUserId,
	listDriversWithDailyMeals,
	getDriversByDailyMealBusinessId,
	updateDriverDailyMealBusiness,
	assignBusinessForDailyMealsToDriver,
	getDriverReviews,
	unlinkDriverFromBusiness,
	registerVehicleInvoices,
	createElectronicDeviceForPremise,
	disableElectronicDevice,
	updateDeviceAssignment,
	confirmBusinessPremise,
};
