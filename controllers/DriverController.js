require("dotenv").config();

const DriverDao = require("../dao/Driver");
const VehicleDao = require("../dao/Vehicle");
const UserDao = require("../dao/User");
const { UserSockets, io } = require("../socket");
const TaxiOrderDao = require("../dao/TaxiOrder");
const taxiHelpers = require("../lib/taxiHelpers");
const { updateAddressByAddressId, addAddress, addUserAddress } = require("../dao/Address");
const { updateDocumentByDocumentId, findDocumentByTypeAndDriverId, createDocument, linkDocumentToDriver,
	linkDocumentToUser,
	linkDocumentToVehicle,
} = require("../dao/Document");
const { updateFileInDocument, addFileToDocument } = require("../dao/File");
const FileDao = require("../dao/File");
const S3Helper = require("../lib/s3");
const DocumentDao = require("../dao/Document");
const { TAXI_ORDER_STATUS, DOCUMENT_TYPE } = require("../lib/constants");
const { createNewVehicle } = require("../dao/Vehicle");
const { calculateTotalDriversEarnings, calculateDriversEarnings } = require('../lib/driverHelpers');

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
		console.error("Error listing drivers:", error);
		res.status(400).json({ error: "Error listing drivers", detail: error.message });
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
		console.log("drivers", drivers)	
		res.status(200).json(drivers);
	} catch (error) {
		console.error("Error listing drivers:", error);
		res.status(400).json({ error: "Error listing drivers", detail: error.message });
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
		console.error("Error listing online drivers:", error);
		res.status(400).json({ error: "Error listing online drivers", detail: error.message });
	}
}

async function getAvailableDrivers(req, res) {
	try {
		const drivers = await DriverDao.getAvailableDrivers();
		res.status(200).json(drivers);
	} catch (error) {
		console.error("Error getting available drivers:", error);
		res.status(400).json({ error: "Error getting available drivers", detail: error.message });
	}
}

async function getUnavailableDrivers(req, res) {
	try {
		const drivers = await DriverDao.getUnavailableDrivers();
		res.status(200).json(drivers);
	} catch (error) {
		console.error("Error getting unavailable drivers:", error);
		res.status(400).json({ error: "Error getting unavailable drivers", detail: error.message });
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
			res.status(404).json({ error: "Driver not found" });
		}
	} catch (error) {
		console.error("Error retrieving driver:", error);
		res.status(400).json({ error: "Error retrieving driver information", detail: error.message });
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
				res.status(404).json({ error: "Location for the specified driver not found" });
			}
		} else {
			res.status(404).json({ error: "Driver not found" });
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
	const userId = req.user.user_id;

	try {
		const driver = await DriverDao.getDriverByUserId(userId);
		if (!driver) {
			return res.status(404).json({ error: "Driver not found" });
		}

		// Send already sent orders to this driver
		await taxiHelpers.resendPendingOrdersToDriver(driver);
		// Send active orders to this driver
		await taxiHelpers.sendActiveOrdersToDriver(driver);

		// Return a 200 status
		res.status(200).send();
	} catch (error) {
		console.error("Error retrieving orders for driver:", error);
		res.status(400).json({ error: "Error retrieving orders", detail: error.message });
	}
}

/**
 * PATCH /drivers/
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
		console.error("Error updating driver:", error);
		res.status(400).json({ error: "Error updating driver", detail: error.message });
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
	const { user, driver, vehicle, documents, files, address } = req.body;

	const business_id = driver?.business_id;
	delete driver?.business_id;
	const driver_id = driver?.driver_id;
	delete driver?.driver_id;
	const user_id = user?.user_id;
	delete user?.user_id;

	let vehicle_id;
	let updatedAddress

	try {
		const updatedDriver = await DriverDao.updateDriver(driver_id, driver);
		let updatedUser = await UserDao.updateScheduledUser(user_id, user);

		if (address?.address_id) {
			const address_id = address?.address_id
			updatedAddress = await updateAddressByAddressId(address_id, address);
		} else if ( Object.keys(address).length !== 0) {
			const response = await addAddress(address)
			await addUserAddress(user_id, response.address_id);
		}

		if (documents && documents.length > 0) {
			for (const doc of documents) {
				const documentId = doc.document_id;
				delete doc.document_id;
				await updateDocumentByDocumentId(documentId, doc);
			}
		}
		let updatedVehicle;
		if (vehicle?.vehicle_id) {
			vehicle_id = vehicle?.vehicle_id
			delete vehicle?.vehicle_id
			updatedVehicle = await VehicleDao.updateVehicle(vehicle_id, vehicle)
		} else if ( Object.keys(vehicle).length !== 0) {
			const response = await VehicleDao.createNewVehicle({...vehicle, business_id: business_id});
			vehicle_id = response?.vehicle_id
			await VehicleDao.assignVehicleToDriver(vehicle_id, driver_id);
		}

		if (files && files.length > 0) {
			for (const file of files) {
				if (file?.base64 && file?.file_id) {
					const fileId = file.file_id;
					delete file.document_id
					delete file.file_id;
					delete file?.name

					let base64 = file.base64;
					delete file.base64;
					delete file?.document_type
					await updateFileInDocument(fileId, file)

					let key = S3Helper.getFileKey(fileId, file.mime_type);
					await S3Helper.SaveObject(key, base64, file.mime_type, {
						users: [user_id],
						businesses: [business_id]
					}, file);

				} else if (!file?.file_id) {
					const existingDocument = await findDocumentByTypeAndDriverId(file.document_type, driver_id);
					if (existingDocument) {
						const base64 = file.base64;
						delete file.base64;
						delete file.document_type;
						delete file.name;

						const newFile = await addFileToDocument(existingDocument.document_id, file);

						const key = S3Helper.getFileKey(newFile.file_id, file.mime_type);
						await S3Helper.SaveObject(key, base64, file.mime_type, {
							users: [user_id],
							businesses: [business_id],
						}, file);

					} else {
						const documentData = {
							document_type: file.document_type,
						};
						const newDocument = await createDocument(documentData);

						const base64 = file.base64;
						delete file.base64;
						const document_type = file?.document_type
						delete file.document_type;
						delete file.name;

						const newFile = await addFileToDocument(newDocument.document_id, file);

						const key = S3Helper.getFileKey(newFile.file_id, file.mime_type);
						await S3Helper.SaveObject(key, base64, file.mime_type, {
							users: [user_id],
							businesses: [business_id],
						}, file);

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
								await VehicleDao.assignVehicleToDriver(newVehicle.vehicle_id, driver_id);
								await linkDocumentToVehicle(newDocument.document_id, newVehicle.vehicle_id);
							}
						} else if (
							document_type === DOCUMENT_TYPE.DRIVING_LICENSE ||
							document_type === DOCUMENT_TYPE.TAXI_LICENCE ||
							document_type === DOCUMENT_TYPE.PASSENGER_TRANSFER_LICENSE ||
							document_type === DOCUMENT_TYPE.BACKGROUND_CHECK_REPORT ||
							document_type === DOCUMENT_TYPE.HEALTH_DECLARATION
						) {
							console.log(file?.document_type)
							await linkDocumentToDriver(newDocument.document_id, driver_id);
						}

					}
				}
			}
		}

		res.status(200).json({ updatedDriver, updatedUser, updatedAddress, updatedVehicle, files });
	} catch (error) {
		console.error("Error editing driver:", error);
		res.status(400).json({ error: "Error editing driver", detail: error.message });
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
		const orders = await TaxiOrderDao.getOrdersByDriverId(driver.driver_id);
		
		let orderStatus = null;
		let orderId = null
		if (driver?.on_order) {
			// Find the most recently updated order
			const latestOrder = orders.reduce((latest, order) => {
				return !latest || order.updated_at > latest.updated_at ? order : latest;
			}, null);

			// If there's a most recently updated order, set its status
			if (latestOrder) {
				orderStatus = latestOrder.status;
				orderId = latestOrder.order_id
			}
		}
		for (let order of orders) {
			try {
				io.to(`order_${order.order_id}`).emit("driver_location", {
					...driver,
					driver_id: driver.driver_id,
					location: locationData
				});
			} catch (error) {
				console.error("Error emiting driver's location to connected users:", error);
			}
		}

		console.info('ORDERS LENGTH driver_location', orders.length)
		if (!driver?.on_order) {
			console.info('EMIT DRIVER_LOCATION')
			io.emit("driver_location", {
				...driver,
				driver_id: driver.driver_id,
				location: locationData
			});
		}
		await DriverDao.updateDriverLocationHistory(driver.driver_id, locationData, orderStatus, orderId);
		res.status(200).json(driverUpdatedLocation);
	} catch (error) {
		console.error("Error updating driver's location:", error);
		res.status(400).json({ error: "Error updating driver location", detail: error.message });
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
		res.status(400).json({ error: "Error updating user information" });
	} catch (e) {
		res.status(400).json({ error: "Error updating user information", e });
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
		const updatedDriver = await DriverDao.updateDriverOnlineStatus(driver_id, online);

		if (online) {
			console.log("Driver is now online:", driver_id);
			io.emit("driver_available", updatedDriver);

			// Re-send pending orders to this driver
			await taxiHelpers.resendPendingOrdersToDriver(updatedDriver);

			// Send active orders to this driver
			await taxiHelpers.sendActiveOrdersToDriver(updatedDriver);
		} else {
			io.emit("driver_unavailable", driver_id);
		}
		res.status(200).json(updatedDriver);
	} catch (error) {
		console.error("Error setting online status for driver:", error);
		res.status(400).json({ error: "Error setting online status for driver", detail: error.message });
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
		const userData = req.body.user;
		const driverData = req.body.driver;

		const driverCreated = await DriverDao.createNewDriver(driverData, userData);
		if (!driverCreated) {
			return res.status(400).json({ error: "Failed to create new driver" });
		}

		res.status(201).json(driverCreated);
	} catch (error) {
		console.error("Error creating new driver:", error);
		res.status(400).json({ error: "Error creating new driver", detail: error.message });
	}
}

async function handleSosAlert(req, res) {
	const data = req.body
	try {
		io.emit("sos_alert", data);
		res.status(200).json(data);
	} catch (error) {
		console.error("Error sending SOS alert:", error);
		res.status(400).json({ error: "Error sending SOS alert", detail: error.message });
	}
}

/**
 * GET /drivers/:driver_id/history_location/:start_time/:end_time
 * @tag Drivers
 * @summary Get history of locations for a driver.
 * @description Get history of locations for a driver with a given driver id and between specified time interval
 * @operationId getDriverLocationsController
 * @bodyContent {Driver} application/json
 * @bodyRequired
 * @response 201 - Driver history locations fetched successfully
 * @responseContent {Driver} 201.application/json
 * @response 400 - Error fetching history locations for a particular driver
 */
async function getDriverHistoryLocations (req, res) {
	const { driver_id } = req.params;
	const { start_time, end_time } = req.query;
	console.info(req.params, 'getDriverHistoryLocations')

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
 * GET /drivers/:driver_id/earnings/:start_date/:end_date
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
		const driverOrders = await TaxiOrderDao.getOrdersByDriverId(driver.driver_id, {
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
				created_at: {
					gte: new Date(start_date), // Start date
					lte: new Date(end_date) // End date
				}
			}
		});
		const earningsData = calculateDriversEarnings(driverOrders, driver);

		if (earningsData) {
			res.status(200).json({ driver_id, ...earningsData });
		} else {
			res.status(404).json({ error: "Driver not found or no earnings data available" });
		}
	} catch (error) {
		console.error("Error retrieving driver's earnings:", error);
		res.status(400).json({ error: "Error retrieving driver's earnings", detail: error.message });
	}
}

/**
 * GET /drivers/earnings/:start_date/:end_date
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
            const driverOrders = await TaxiOrderDao.getOrdersByDriverId(driver.driver_id, {
                where: {
                    status: TAXI_ORDER_STATUS.TAXI_COMPLETED,
                    created_at: {
                        gte: new Date(start_date), // Start date
                        lte: new Date(end_date) // End date
                    }
                }
            });
			console.log("startDate", start_date, "endDate", end_date, driverOrders.length)
            return calculateDriversEarnings(driverOrders, driver);
        });

        const allEarnings = await Promise.all(earningsPromises);
        res.status(200).json(allEarnings);
    } catch (error) {
        console.error("Error retrieving all drivers' earnings:", error);
        res.status(400).json({ error: "Error retrieving all drivers' earnings", detail: error.message });
    }
}

/**
 * GET /drivers/total-earnings
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
		const orders = await TaxiOrderDao.getOrders({
			where: {
				status: TAXI_ORDER_STATUS.TAXI_COMPLETED
			}});
		const totalEarnings = calculateTotalDriversEarnings(orders);
		res.status(200).json(totalEarnings);
	} catch (error) {
		console.error("Error retrieving all drivers' total earnings:", error);
		res.status(400).json({ error: "Error retrieving all drivers' total earnings", detail: error.message });
	}
}

module.exports = {
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
	getTotalEarnings
};