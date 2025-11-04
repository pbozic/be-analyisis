import { config } from 'dotenv';
import moment from 'moment';

import DeliveryDriverDao from '../dao/DeliveryDriver.js';
import UserDao from '../dao/User.js';
import socket from '../socket.js';
import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import { resendPendingOrdersToDeliveryDriver, sendActiveOrdersToDeliveryDriver } from '../lib/deliveryHelpers.js';
import { updateAddressByAddressId, addAddress, addUserAddress } from '../dao/Address.js';
import {
	updateDocumentByDocumentId,
	createDocument,
	linkDocumentToUser,
	linkDocumentToDeliveryDriver,
	linkDocumentToVehicle,
	findDocumentByTypeAndDeliveryDriverId,
	getDocumentById,
} from '../dao/Document.js';
import { updateFileInDocument, addFileToDocument } from '../dao/File.js';
import S3Helper from '../lib/s3.js';
import VehicleDao from '../dao/Vehicle.js';
import { DELIVERY_DRIVER_NEARBY_DISTANCE, DELIVERY_ORDER_STATUS, DOCUMENT_TYPE } from '../lib/constants.js';
import { createNewVehicle } from '../dao/Vehicle.js';
import { calculateTotalEarnings, calculateDeliveryDriversEarnings, calculateDistance } from '../lib/helpersLib.js';
import dailyMealHelpers from '../lib/dailyMealHelpers.js';
import { sendDeliveryOrderNotifications } from '../lib/notifications.js';
config();
const { UserSockets, io } = socket;
/**
 * GET /delivery_drivers/orders/user_id
 * @tag DeliveryDrivers
 * @summary Send already sent pending or accepted orders to a delivery driver
 * @description Retrieves a list of orders for a specific delivery driver by their user ID and sends them to the delivery driver via socket emission.
 * @operationId sendAcceptedOrdersToDeliveryDriver
 * @response 200 - Successful operation, orders sent to the delivery driver
 * @response 404 - Delivery Driver not found
 * @response 400 - Error retrieving orders
 * @prisma_model delivery_drivers
 * @prisma_model delivery_orders
 */
async function resendDelegatedOrdersToDeliveryDriver(req, res) {
	const userId = req.params.user_id;
	console.info('resendDelegatedOrdersToDeliveryDriver', userId);
	try {
		const driver = await DeliveryDriverDao.getDeliveryDriverByUserId(userId);
		if (!driver) {
			return res.status(404).json({ error: 'Driver not found' });
		}
		// Send already sent orders to this driver
		await resendPendingOrdersToDeliveryDriver(driver);
		// Send active orders to this driver
		await sendActiveOrdersToDeliveryDriver(driver);
		// Return a 200 status
		res.status(200).send();
	} catch (error) {
		console.error('Error retrieving orders for delivery driver:', error);
		res.status(400).json({ error: 'Error retrieving orders', detail: error.message });
	}
}
/**
 * PATCH /delivery_drivers/edit
 * @tag DeliveryDrivers
 * @summary Edit a delivery driver
 * @description Edits the data of specific delivery driver.
 * @operationId editDeliveryDriver
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to edit
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Delivery driver edited successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating delivery driver
 * @prisma_model delivery_drivers
 * @prisma_model users
 * @prisma_model addresses
 * @prisma_model vehicles
 * @prisma_model documents
 * @prisma_model files
 */
async function editDeliveryDriver(req, res) {
	const { user, driver, vehicle, documents, files, address } = req.body;
	const business_id = driver?.business_id;
	delete driver?.business_id;
	const delivery_driver_id = driver?.delivery_driver_id;
	delete driver?.delivery_driver_id;
	const user_id = user?.user_id;
	delete user?.user_id;
	let vehicle_id;
	let updatedAddress;
	try {
		const updatedDriver = await DeliveryDriverDao.updateDeliveryDriver(delivery_driver_id, driver);
		let updatedUser = await UserDao.updateScheduledUser(user_id, user);
		if (address?.address_id) {
			const address_id = address?.address_id;
			updatedAddress = await updateAddressByAddressId(address_id, address);
		} else if (Object.keys(address).length !== 0) {
			const response = await addAddress(address);
			await addUserAddress(user_id, response.address_id);
		}
		let updatedVehicle;
		if (vehicle?.vehicle_id) {
			vehicle_id = vehicle?.vehicle_id;
			delete vehicle?.vehicle_id;
			updatedVehicle = await VehicleDao.updateVehicle(vehicle_id, vehicle);
		} else if (Object.keys(vehicle).length !== 0) {
			const response = await VehicleDao.createNewVehicle({ ...vehicle, business_id: business_id });
			vehicle_id = response?.vehicle_id;
			await VehicleDao.assignVehicleToDeliveryDriver(response.vehicle_id, delivery_driver_id);
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
					let document = await getDocumentById(file.document_id);
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
					const existingDocument = await findDocumentByTypeAndDeliveryDriverId(
						file.document_type,
						delivery_driver_id
					);
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
							document_type === DOCUMENT_TYPE.VEHICLE_REGISTRATION ||
							document_type === DOCUMENT_TYPE.VEHICLE_INSURANCE ||
							document_type === DOCUMENT_TYPE.VEHICLE_TECHNICAL_INSPECTION
						) {
							if (vehicle_id) {
								await linkDocumentToVehicle(newDocument.document_id, vehicle_id);
							} else {
								const newVehicle = await createNewVehicle({
									make: '',
									model: '',
									color: '',
									class: 'SEDAN',
									category: 'STANDARD',
								});
								await VehicleDao.assignVehicleToDeliveryDriver(
									newVehicle.vehicle_id,
									delivery_driver_id
								);
								await linkDocumentToVehicle(newDocument.document_id, newVehicle.vehicle_id);
							}
						} else if (
							document_type === DOCUMENT_TYPE.DRIVING_LICENSE ||
							document_type === DOCUMENT_TYPE.TAXI_LICENCE ||
							document_type === DOCUMENT_TYPE.PASSENGER_TRANSFER_LICENSE ||
							document_type === DOCUMENT_TYPE.BACKGROUND_CHECK_REPORT ||
							document_type === DOCUMENT_TYPE.HEALTH_DECLARATION
						) {
							console.log(file?.document_type);
							await linkDocumentToDeliveryDriver(newDocument.document_id, delivery_driver_id);
						}
					}
				}
			}
		}
		res.status(200).json({ updatedDriver, updatedUser, updatedAddress, updatedVehicle, files });
	} catch (error) {
		console.error('Error editing driver:', error);
		res.status(400).json({ error: 'Error editing driver', detail: error.message });
	}
}
/**
 * GET /delivery
 * @tag DeliveryDrivers
 * @summary Get a list of delivery drivers
 * @description Returns a list of delivery drivers along with their user and vehicle information.
 * @operationId getDeliveryDrivers
 * @response 200 - Successful operation, returns a list of delivery drivers
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the delivery driver list
 * @prisma_model delivery_drivers
 */
async function listDeliveryDrivers(req, res) {
	try {
		const deliveryDrivers = await DeliveryDriverDao.getDeliveryDrivers({});
		res.status(200).json(deliveryDrivers);
	} catch (error) {
		console.error('Error listing delivery drivers:', error);
		res.status(400).json({ error: 'Error listing delivery drivers', detail: error.message });
	}
}
/**
 * GET /delivery/online
 * @tag DeliveryDrivers
 * @summary Get all online delivery drivers
 * @description Returns a list of all delivery drivers who are currently online.
 * @operationId getOnlineDeliveryDrivers
 * @response 200 - Successful operation, returns a list of online delivery drivers
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the online delivery driver list
 */
async function listOnlineDeliveryDrivers(req, res) {
	try {
		const onlineDeliveryDrivers = await DeliveryDriverDao.getOnlineDeliveryDrivers();
		res.status(200).json(onlineDeliveryDrivers);
	} catch (error) {
		console.error('Error listing online delivery drivers:', error);
		res.status(400).json({ error: 'Error listing online delivery drivers', detail: error.message });
	}
}
/**
 * GET /delivery/available
 * @tag DeliveryDrivers
 * @summary Get all available delivery drivers
 * @description Returns a list of all delivery drivers who are currently available.
 * @operationId getAvailableDeliveryDrivers
 * @response 200 - Successful operation, returns a list of available delivery drivers
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the available delivery driver list
 */
async function getAvailableDeliveryDrivers(req, res) {
	try {
		const deliveryDrivers = await DeliveryDriverDao.getAvailableDeliveryDrivers();
		res.status(200).json(deliveryDrivers);
	} catch (error) {
		console.error('Error getting available delivery drivers:', error);
		res.status(400).json({ error: 'Error getting available delivery drivers', detail: error.message });
	}
}
/**
 * GET /delivery/drivers/daily-meals
 * @tag DeliveryDrivers
 * @summary List all delivery drivers offering daily meals
 * @description Retrieves a list of all delivery drivers that offer daily meals.
 * @operationId listDeliveryDriversWithDailyMeals
 * @response 200 - Successful operation, returns a list of delivery drivers offering daily meals
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the delivery driver list
 */
async function listDeliveryDriversWithDailyMeals(req, res) {
	try {
		const deliveryDrivers = await DeliveryDriverDao.getDeliveryDrivers({
			where: { delivers_daily_meals: true },
		});
		res.status(200).json(deliveryDrivers);
	} catch (e) {
		console.error('Error listing delivery drivers with daily meals:', e);
		res.status(400).json({ error: 'Error listing delivery drivers with daily meals', e });
	}
}
/**
 * GET /delivery/:delivery_driver_id
 * @tag DeliveryDrivers
 * @summary Get a delivery driver by ID
 * @description Retrieves detailed information about a specific delivery driver by their ID.
 * @operationId getDeliveryDriverById
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to retrieve
 * @response 200 - Successful operation, returns detailed delivery driver information
 * @responseContent {object} 200.application/json
 * @response 404 - Delivery driver not found
 * @response 400 - Error retrieving delivery driver information
 */
async function getDeliveryDriverById(req, res) {
	console.log('GET DELIVERY DRIVER BY ID', req.params);
	try {
		let deliveryDriver;
		if (req.params?.delivery_driver_id) {
			const includeParams = {
				user: {
					include: {
						addresses: {
							include: {
								address: true,
							},
						},
						documents: {
							include: {
								files: true,
							},
						},
						business_users: {
							include: {
								business: {
									include: {
										documents: {
											include: {
												files: true,
											},
										},
									},
								},
							},
						},
					},
				},
				vehicles: {
					include: {
						// vehicle_specification: true,
						documents: {
							include: {
								files: true,
							},
						},
					},
				},
				documents: {
					include: {
						files: true,
					},
				},
			};
			deliveryDriver = await DeliveryDriverDao.getDeliveryDriverById(
				req.params.delivery_driver_id,
				includeParams
			);
		}
		if (deliveryDriver) {
			res.status(200).json(deliveryDriver);
		} else {
			res.status(404).json({ error: 'Delivery driver not found by id' });
		}
	} catch (error) {
		console.error('Error retrieving delivery driver:', error);
		res.status(400).json({
			error: 'Error retrieving delivery driver information (by delivery driver id)',
			detail: error.message,
		});
	}
}
/**
 * GET /delivery_drivers/user/:user_id
 * @tag DeliveryDrivers
 * @summary Get a delivery driver by user ID
 * @description Retrieves detailed information about a specific delivery driver by their user ID.
 * @operationId getDeliveryDriverByUserId
 * @pathParam {string} user_id - The ID of the delivery driver to retrieve
 * @response 200 - Successful operation, returns detailed delivery driver information
 * @responseContent {object} 200.application/json
 * @response 404 - Delivery driver not found
 * @response 400 - Error retrieving delivery driver information
 */
async function getDeliveryDriverByUserId(req, res) {
	try {
		const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverByUserId(req.params.user_id);
		if (deliveryDriver) {
			res.status(200).json(deliveryDriver);
		} else {
			res.status(404).json({ error: 'Delivery driver not found by user_id' }, deliveryDriver);
		}
	} catch (error) {
		res.status(500).json({
			error: 'Error retrieving delivery driver (by user_id) information',
			detail: error.message,
		});
	}
}
/**
 * GET /delivery_drivers/daily-meal-business/:business_id
 * @tag DeliveryDrivers
 * @summary Get delivery drivers by business ID
 * @description Retrieves detailed information about delivery drivers by business ID.
 * @operationId getDeliveryDriverByBusinessId
 * @pathParam {string} business_id - The ID of the daily meal business
 * @response 200 - Successful operation, returns detailed delivery drivers
 * @responseContent {object} 200.application/json
 * @response 404 - Delivery drivers not found
 * @response 400 - Error retrieving delivery drivers
 */
async function getDeliveryDriversByBusinessId(req, res) {
	try {
		const drivers = await DeliveryDriverDao.getDeliveryDriversByDailyMealBusinessId(req.params.business_id);
		if (drivers) {
			res.status(200).json(drivers);
		} else {
			res.status(404).json({ error: 'Delivery drivers not found for business_id' }, drivers);
		}
	} catch (error) {
		res.status(500).json({
			error: 'Error retrieving delivery drivers by business_id',
			detail: error.message,
		});
	}
}
/**
 * GET /delivery/:delivery_driver_id/location
 * @tag DeliveryDrivers
 * @summary Get delivery driver location
 * @description Retrieves the current location of a specific delivery driver.
 * @operationId getDeliveryDriverLocation
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver whose location is being retrieved
 * @response 200 - Successful operation, returns delivery driver's location
 * @responseContent {object} 200.application/json
 * @response 404 - Delivery driver not found
 * @response 400 - Error retrieving delivery driver's location
 */
async function getDeliveryDriverLocation(req, res) {
	try {
		const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverLocation(req.params.delivery_driver_id);
		if (deliveryDriver) {
			if (deliveryDriver.location) {
				res.status(200).json(deliveryDriver.location);
			} else {
				res.status(404).json({ error: 'Location for the specified delivery driver not found' });
			}
		} else {
			res.status(404).json({ error: 'Delivery driver not found' });
		}
	} catch (error) {
		console.error("Error retrieving delivery driver's location:", error);
		res.status(400).json({ error: "Error retrieving delivery driver's location", detail: error.message });
	}
}
/**
 * PATCH /delivery_drivers/assign/:delivery_driver_id
 * @tag DeliveryDrivers
 * @summary Update a delivery driver daily_meal_business
 * @description Updates information about a specific delivery driver.
 * @operationId updateDeliveryDriverDailyMealBusiness
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Delivery driver updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating delivery driver
 */
async function updateDeliveryDriverDailyMealBusiness(req, res) {
	const { delivery_driver_id } = req.params;
	const { businessId } = req.body;
	try {
		let updateData = {};
		if (businessId) {
			updateData = {
				delivers_daily_meals: true,
				daily_meal_business: {
					connect: {
						business_id: businessId,
					},
				},
			};
		} else {
			updateData = {
				delivers_daily_meals: false,
				daily_meal_business: {
					disconnect: true,
				},
			};
			await dailyMealHelpers.disconnectDriverFromAllSubscriptions(delivery_driver_id);
		}
		const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriver(delivery_driver_id, updateData);
		res.status(200).json(updatedDeliveryDriver);
	} catch (error) {
		console.error('Error updating delivery driver:', error);
		res.status(400).json({ error: 'Error updating delivery driver', detail: error.message });
	}
}
/**
 * PATCH /delivery_drivers/update/:delivery_driver_id
 * @tag DeliveryDrivers
 * @summary Update a delivery driver
 * @description Updates information about a specific delivery driver, excluding location.
 * @operationId updateDeliveryDriver
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Delivery driver updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating delivery driver
 */
async function updateDeliveryDriver(req, res) {
	const { delivery_driver_id } = req.params;
	try {
		const updateData = { ...req.body };
		const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriver(delivery_driver_id, updateData);
		res.status(200).json(updatedDeliveryDriver);
	} catch (error) {
		console.error('Error updating delivery driver:', error);
		res.status(400).json({ error: 'Error updating delivery driver', detail: error.message });
	}
}
/**
 * PATCH /delivery/location
 * @tag DeliveryDrivers
 * @summary Update delivery driver location
 * @description Updates the location of a specific delivery driver.
 * @operationId updateDeliveryDriverLocation
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to update location for
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Location updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating delivery driver location
 */
async function updateDeliveryDriverLocation(req, res) {
	try {
		const locationData = req.body.location;
		try {
			const userId = req.user.user_id;
			const deliveryDriver = await DeliveryDriverDao.getDeliveryDriverByUserId(userId);
			const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriverLocation(
				deliveryDriver.delivery_driver_id,
				locationData
			);
			// Emit the delivery driver's updated location to each order's specific channel
			const orders = await DeliveryOrderDao.getActiveOrdersByDeliveryDriverId(deliveryDriver.delivery_driver_id);
			let orderStatus = null;
			let orderId = null;
			if (deliveryDriver?.on_order) {
				// Find the most recently updated order
				const latestOrder = orders.reduce((latest, order) => {
					return !latest || order.updated_at > latest.updated_at ? order : latest;
				}, null);
				// If there's a most recently updated order, set its status
				if (latestOrder) {
					orderStatus = latestOrder.status;
					orderId = latestOrder.order_id;
				}
			}
			let acceptedOrders = [];
			for (let order of orders) {
				if (
					order.status === DELIVERY_ORDER_STATUS.DELIVERY_IN_DELIVERY &&
					!order.timeline?.some((t) => t.status === 'DRIVER_NEARBY')
				) {
					acceptedOrders.push(order);
				}
				try {
					io.to(`order_${order.order_id}`).emit('driver_location_delivery', {
						...deliveryDriver,
						delivery_driver_id: deliveryDriver.delivery_driver_id,
						location: req.body.location,
					});
				} catch (error) {
					console.error("Error emitting delivery driver's location to connected users:", error);
				}
			}
			for (const acceptedOrder of acceptedOrders) {
				const pickupLocation = acceptedOrder.delivery_location;
				const distance = calculateDistance(
					locationData?.coordinates?.latitude,
					locationData?.coordinates?.longitude,
					pickupLocation?.coordinates?.latitude,
					pickupLocation?.coordinates?.longitude
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
			if (orders.length === 0) {
				io.emit('driver_location_delivery', {
					...deliveryDriver,
					delivery_driver_id: deliveryDriver.delivery_driver_id,
					location: req.body.location,
				});
			}
			await DeliveryDriverDao.updateDeliveryDriverLocationHistory(
				deliveryDriver.delivery_driver_id,
				req.body.location,
				orderStatus,
				orderId
			);
			res.status(200).json(updatedDeliveryDriver);
		} catch (error) {
			console.error("Error updating delivery driver's location:", error);
		}
	} catch (error) {
		console.error("Error updating delivery driver's location:", error);
		res.status(400).json({ error: 'Error updating delivery driver location', detail: error.message });
	}
}
/**
 * PATCH /delivery/online
 * @tag DeliveryDrivers
 * @summary Set delivery driver online status
 * @description Sets the online status of a specific delivery driver and emits appropriate socket events.
 * @operationId setDeliveryDriverOnlineStatus
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver to update the online status for
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Online status updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating online status
 *
 * Emits:
 * - "driver_available" event with delivery driver object if online is true
 * - "driver_unavailable" event with delivery_driver_id if online is false
 */
async function updateDeliveryDriverOnlineStatus(req, res) {
	const { delivery_driver_id, online } = req.body;
	try {
		const updatedDeliveryDriver = await DeliveryDriverDao.updateDeliveryDriverOnlineStatus(
			delivery_driver_id,
			online
		);
		console.info('updatedDeliveryDriver', updatedDeliveryDriver.online);
		if (online) {
			io.emit('driver_available', updatedDeliveryDriver);
			// await resendPendingOrdersToDeliveryDriver(updatedDeliveryDriver);
		} else {
			io.emit('driver_unavailable', delivery_driver_id);
		}
		res.status(200).json(updatedDeliveryDriver);
	} catch (error) {
		console.error('Error setting online status for delivery driver:', error);
		res.status(400).json({ error: 'Error setting online status for delivery driver', detail: error.message });
	}
}
/**
 * POST /delivery/create
 * @tag DeliveryDrivers
 * @summary Create a new delivery driver
 * @description Adds a new delivery driver to the database.
 * @operationId createNewDeliveryDriver
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Delivery driver created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error creating delivery driver
 */
async function createDeliveryDriver(req, res) {
	try {
		const userData = req.body.user;
		const driverData = req.body.driver;
		const driverCreated = await DeliveryDriverDao.createDeliveryDriver(driverData, userData);
		if (!driverCreated) {
			return res.status(400).json({ error: 'Failed to create new delivery driver' });
		}
		res.status(201).json(driverCreated);
	} catch (error) {
		console.error('Error creating new delivery driver:', error);
		res.status(400).json({ error: 'Error creating new delivery driver', detail: error.message });
	}
}
/**
 * GET /drivers/earnings/:delivery_driver_id
 * @tag DeliveryDrivers
 * @summary Get earnings for a specific delivery driver
 * @description Retrieves the earnings of a specific delivery driver within a specified date range.
 * @operationId getDriverEarnings
 * @pathParam {string} delivery_driver_id - The ID of the driver whose earnings are being retrieved
 * @pathParam {string} start_date - The start date for the earnings period (format: YYYY-MM-DD)
 * @pathParam {string} end_date - The end date for the earnings period (format: YYYY-MM-DD)
 * @response 200 - Successful operation, returns delivery driver's earnings
 * @responseContent {object} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving delivery driver's earnings
 */
async function getDriverEarnings(req, res) {
	const { delivery_driver_id } = req.params;
	const { start_date, end_date } = req.query;
	if (!delivery_driver_id || !start_date || !end_date) {
		return res.status(400).json({ message: 'Missing required parameters' });
	}
	try {
		const driver = await DeliveryDriverDao.getDeliveryDriverById(delivery_driver_id);
		const driverOrders = await DeliveryOrderDao.getOrders({
			where: {
				delivery_driver_id: delivery_driver_id,
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				created_at: {
					gte: new Date(start_date).toISOString(),
					lte: new Date(end_date).toISOString(),
				},
			},
		});
		const earningsData = calculateDeliveryDriversEarnings(driverOrders, driver);
		if (earningsData) {
			res.status(200).json({ delivery_driver_id, ...earningsData });
		} else {
			res.status(404).json({ error: 'Delivery driver not found or no earnings data available' });
		}
	} catch (error) {
		console.error("Error retrieving delivery driver's earnings:", error);
		res.status(400).json({ error: "Error retrieving delivery driver's earnings", detail: error.message });
	}
}
/**
 * GET /drivers/earnings/all
 * @tag DeliveryDrivers
 * @summary Get earnings for all delivery drivers
 * @description Retrieves the earnings of all delivery drivers within a specified date range.
 * @operationId getAllDriversEarnings
 * @pathParam {string} start_date - The start date for the earnings period (format: YYYY-MM-DD)
 * @pathParam {string} end_date - The end date for the earnings period (format: YYYY-MM-DD)
 * @response 200 - Successful operation, returns all delivery drivers' earnings
 * @responseContent {object} 200.application/json
 * @response 400 - Error retrieving all delivery drivers' earnings
 */
async function getAllDriversEarnings(req, res) {
	const { start_date, end_date } = req.query;
	if (!start_date || !end_date) {
		return res.status(400).json({ message: 'Missing required parameters' });
	}
	try {
		const drivers = await DeliveryDriverDao.getDeliveryDrivers();
		const earningsPromises = drivers.map(async (driver) => {
			const driverOrders = await DeliveryOrderDao.getOrders({
				where: {
					delivery_driver_id: driver.delivery_driver_id,
					status: DELIVERY_ORDER_STATUS.SUCCESS,
					created_at: {
						gte: new Date(start_date).toISOString(),
						lte: new Date(end_date).toISOString(),
					},
				},
			});
			return calculateDeliveryDriversEarnings(driverOrders, driver);
		});
		const allEarnings = await Promise.all(earningsPromises);
		res.status(200).json(allEarnings);
	} catch (error) {
		console.error("Error retrieving all delivery delivery drivers' earnings:", error);
		res.status(400).json({
			error: "Error retrieving all delivery delivery drivers' earnings",
			detail: error.message,
		});
	}
}
/**
 * GET /drivers/earnings/total
 * @tag DeliveryDrivers
 * @summary Get total earnings for all delivery drivers
 * @description Retrieves the total earnings of all drivers based on completed orders.
 * @operationId getTotalEarnings
 * @response 200 - Successful operation, returns total earnings for all delivery drivers
 * @responseContent {object} 200.application/json
 * @response 400 - Error retrieving total earnings
 */
async function getTotalEarnings(req, res) {
	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				is_daily_meal: req.query?.dailyMeals === 'true' ? true : false,
			},
		});
		const totalEarnings = calculateTotalEarnings(orders);
		res.status(200).json(totalEarnings);
	} catch (error) {
		console.error("Error retrieving all delivery drivers' total earnings:", error);
		res.status(400).json({ error: "Error retrieving all delivery drivers' total earnings", detail: error.message });
	}
}
/**
 * GET /drivers/earnings/:delivery_driver_id/total
 * @tag DeliveryDrivers
 * @summary Get total earnings for a specific delivery driver
 * @description Retrieves the total earnings of a specific delivery driver based on completed orders.
 * @operationId getDriverTotalEarnings
 * @pathParam {string} delivery_driver_id - The ID of the delivery driver whose total earnings are being retrieved
 * @response 200 - Successful operation, returns total earnings for the specified driver
 * @responseContent {object} 200.application/json
 * @response 404 - Driver not found
 * @response 400 - Error retrieving delivery driver's total earnings
 */
async function getDriverTotalEarnings(req, res) {
	const { delivery_driver_id } = req.params;
	const detailed = req.query?.detailed === 'true';
	if (!delivery_driver_id) {
		return res.status(400).json({ message: 'Missing required parameter: delivery_driver_id' });
	}
	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.SUCCESS,
				delivery_driver_id: delivery_driver_id,
			},
		});
		const totalEarnings = calculateTotalEarnings(orders, detailed);
		res.status(200).json(totalEarnings);
	} catch (error) {
		console.error("Error retrieving delivery driver's total earnings:", error);
		res.status(400).json({ error: "Error retrieving delivery driver's total earnings", detail: error.message });
	}
}
async function assignBusinessForDailyMealsToDriver(req, res) {
	const { delivery_driver_id, business_id } = req.body;
	try {
		const driver = await DeliveryDriverDao.getDeliveryDriverById(delivery_driver_id);
		if (!driver) {
			return res.status(404).json({ error: 'Driver not found' });
		}
		await DeliveryDriverDao.updateDeliveryDriver(delivery_driver_id, {
			daily_meals_business: {
				connect: { business_id: business_id },
			},
		});
		res.status(200).json({ message: 'Business assigned for daily meals' });
	} catch (error) {
		console.error('Error assigning business for daily meals to driver:', error);
		res.status(400).json({ error: 'Error assigning business for daily meals to driver', detail: error.message });
	}
}
export { listDeliveryDrivers };
export { listOnlineDeliveryDrivers };
export { listDeliveryDriversWithDailyMeals };
export { getDeliveryDriverById };
export { getDeliveryDriverLocation };
export { updateDeliveryDriverDailyMealBusiness };
export { updateDeliveryDriver };
export { updateDeliveryDriverLocation };
export { updateDeliveryDriverOnlineStatus };
export { createDeliveryDriver };
export { getAvailableDeliveryDrivers };
export { getDeliveryDriverByUserId };
export { getDeliveryDriversByBusinessId };
export { resendDelegatedOrdersToDeliveryDriver };
export { editDeliveryDriver };
export { getDriverEarnings };
export { getAllDriversEarnings };
export { getTotalEarnings };
export { getDriverTotalEarnings };
export { assignBusinessForDailyMealsToDriver };
export default {
	listDeliveryDrivers,
	listOnlineDeliveryDrivers,
	listDeliveryDriversWithDailyMeals,
	getDeliveryDriverById,
	getDeliveryDriverLocation,
	updateDeliveryDriver,
	updateDeliveryDriverDailyMealBusiness,
	updateDeliveryDriverLocation,
	updateDeliveryDriverOnlineStatus,
	createDeliveryDriver,
	getAvailableDeliveryDrivers,
	getDeliveryDriverByUserId,
	getDeliveryDriversByBusinessId,
	resendDelegatedOrdersToDeliveryDriver,
	editDeliveryDriver,
	getDriverEarnings,
	getAllDriversEarnings,
	getTotalEarnings,
	getDriverTotalEarnings,
	assignBusinessForDailyMealsToDriver,
};
