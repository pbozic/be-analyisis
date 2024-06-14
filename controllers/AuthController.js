const UserDao = require("../dao/User");
const { generateAccessToken, generateRefreshToken } = require("../lib/jwt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { post } = require("../routes/api/users");
const ReviewDao = require("../dao/Review");
const TokenDao = require("../dao/Token");
const BusinessDao = require("../dao/Business");
const FinancesDao = require("../dao/Finances");
const AddressDao = require("../dao/Address");
const DriverDao = require("../dao/Driver");
const VehicleDao = require("../dao/Vehicle");
const DocumentDao = require("../dao/Document");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const BusinessUsersDao = require("../dao/BusinessUsers");
const FileDao = require("../dao/File");
const S3Helper = require("../lib/s3");
const { S3 } = require("aws-sdk");

/**
 * POST /auth/login
 * @tag Authentication
 * @summary User login procedure.
 * @description This verifies the user's credentials and responds with an access token and refresh token if successful.
 * @operationId loginUser.
 * @bodyDescription Request body must include email and password for verification.
 * @bodyContent {LoginRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns user details along with accessToken and refreshToken in the response body, additionally sets Authorization header with the accessToken.
 * @responseContent {AuthenticatedUser} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Unsuccessful operation. Returns error message "Wrong email / password combination." if the either the email or password (or both) are incorrect.
 * @response 500 - Server error. Returns error message "Error something went wrong.." if any exception is encountered during execution.
 */
async function login(req, res) {
	let postData = req.body;
	console.log("hi, login", postData.email);
	try {
		let user = await UserDao.getUserByEmail(postData.email, {
			select: {
				password: true,
			},
		});
		if (!user) return res.status(400).json({ error: "Wrong email / password combination.." });
		console.log("db accesssed");
		let correctPw = await bcrypt.compare(postData.password, user.password);
		if (!correctPw) return res.status(400).json({ error: "Wrong email / password combination.." });
		user = await UserDao.getUserByEmail(postData.email, {
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
				driver: true,
			},
		});
		delete user["password"];
		const access_token = generateAccessToken(user);
		const refresh_token = generateRefreshToken(user);
		user = {
			...user,
			access_token,
			refresh_token,
		};
		res.status(200).header("Authorization", access_token).json(user);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /auth/register
 * @tag Authentication
 * @summary Register a new user
 * @description This endpoint is used to register a new user.
 * @operationId registerNewUser
 * @bodyDescription The required data to register a new user
 * @bodyContent {RegisterRequest} application/json
 * @bodyRequired
 * @response 200 - User registered successfully. Returns user info and tokens.
 * @responseContent {AuthenticatedUser} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Error something went wrong.
 */
async function register(req, res) {
	let postData = req.body;
	console.log(postData);
	try {
		let hash = await bcrypt.hash(postData.password, Number(process.env.BCRYPT_SALT_ROUNDS));
		let userObj = {
			...postData,
			date_of_birth: new Date(postData.date_of_birth),
			password: hash,
			user_role: "PERSONAL",
			reviewable: {
				create: {
					
				},
			}
		};
		delete userObj["confirm_password"];
		let user = await UserDao.createNewUser(userObj);
		delete user["password"];
		const access_token = generateAccessToken(user);
		const refresh_token = generateRefreshToken(user);
		// todo: send phone verification
		user = {
			...user,
			access_token,
			refresh_token,
		};
		res.status(200).header("Authorization", access_token).json(user);
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error something went wrong..", e });
	}
}

/**
 * POST /auth/refresh
 * @tag Authentication
 * @summary Refreshes the user's access token
 * @description This endpoint is used to refresh the user's access and refresh tokens.
 * @operationId refreshToken
 * @bodyDescription The refresh token of the user
 * @bodyContent {RefreshTokenRequest} application/json
 * @bodyRequired
 * @response 200 - Access token successfully refreshed. Returns newly generated access and refresh tokens.
 * @responseContent {RefreshTokenResponse} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Access Denied. No refresh token provided.
 * @response 401 - Access Denied. Token expired.
 */

async function refreshToken(req, res) {
	const refreshToken = req.body.refresh_token;
	if (!refreshToken) {
		return res.status(400).send("Access Denied. No refresh token provided.");
	}

	jwt.verify(refreshToken, process.env.JWT_TOKEN_SECRET, function (err, decoded) {
		if (err) {
			return res.status(401).json({ error: "Access Denied. Token expired.", e: err });
		}
		delete decoded["iat"];
		delete decoded["exp"];
		const access_token = generateAccessToken(decoded.user);
		const refresh_token = generateRefreshToken(decoded.user);

		let user = {
			...decoded,
			access_token,
			refresh_token,
		};
		res.status(200).header("Authorization", access_token).json(user);
	});
}
/**
 * POST /auth/password-reset
 * @tag Authentication
 * @summary Request a password reset
 * @description This endpoint is used to request a password reset. It will generate and send a password reset token to the user.
 * @operationId requestPasswordReset
 * @bodyDescription The email of the user who wants to reset their password.
 * @bodyContent {PasswordResetRequest} application/json
 * @bodyRequired
 * @response 200 - Password reset request processed. A token is sent to the user if the account is found.
 * @response 400 - Error obtaining user information.
 */
async function requestPasswordReset(req, res) {
	try {
		let user = await UserDao.getUserByEmail(req.body.email);
		await TokenDao.generateAndSendPaswordResetToken(user);
	} catch (e) {
		res.status(400).json({ error: "Error obtaining user information", e });
	}
}

/**
 * POST /auth/taxi/register
 * @tag Auth
 * @summary Register a new taxi service
 * @description Creates a new business, multiple taxi, vehicles, and optionally finances and documents, and links them together.
 * @operationId registerTaxiService
 * @bodyContent {TaxiServiceRegistration} application/json
 * @bodyRequired
 * @response 201 - Taxi service registered successfully
 * @responseContent {TaxiServiceRegistrationResponse} 201.application/json
 * @response 400 - Error registering taxi service
 */
async function registerTaxiService(req, res) {
	try {
		const business = await BusinessDao.createNewBusiness(req.body.business);
		// TODO: handle uniqueness here or with joi validation
		// Handle business documents
		if (req.body.business.documents) {
			for (const doc of req.body.business.documents) {
				const document = await DocumentDao.createDocument(doc);
				for (const file of doc.files) {
					let base64 = file.data;
					delete file.data;
					let fileData = await FileDao.addFileToDocument(document.document_id, file);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					await S3Helper.SaveObject(key, base64, file.mime_type, { users: [newUser.user_id], businesses: [business.business_id]});
				}
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}

		let finances = {};
		if (req.body.finances) {
			finances = await FinancesDao.addFinances(req.body.finances);
			await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
		}

		let businessAddress = {}
		if (req.body.addresses) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}

		let drivers = [];
		if (Array.isArray(req.body.drivers) && req.body.drivers.length) {
			for (const driverInfo of req.body.drivers) {

				const newUser = await UserDao.createNewUser(driverInfo.user.data);
				// Handle user documents
				if (driverInfo.user.documents) {
					for (const doc of driverInfo.user.documents) {
						
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.data;
							delete file.data;
							let fileData = await FileDao.addFileToDocument(document.document_id, file);
							
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							await S3Helper.SaveObject(key, base64, file.mime_type, { users: [newUser.user_id], businesses: [business.business_id]});
						}
						await DocumentDao.linkDocumentToUser(document.document_id, newUser.user_id);
					}
				}

				const driverData = { ...driverInfo.driver.data, business_id: business.business_id};
				const driver = await DriverDao.createNewDriver(driverData, newUser);
				// Handle taxi documents
				if (driverInfo.driver.documents) {
					for (const doc of driverInfo.driver.documents) {
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.data;
							delete file.data;
							let fileData = await FileDao.addFileToDocument(document.document_id, file);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							await S3Helper.SaveObject(key, base64, file.mime_type, { users: [newUser.user_id], businesses: [business.business_id]});
						}
						await DocumentDao.linkDocumentToDriver(document.document_id, driver.driver_id);
					}
				}

				let vehicles = [];
				if (Array.isArray(driverInfo.vehicles) && driverInfo.vehicles.length) {
					for (const vehicleInfo of driverInfo.vehicles) {
						const vehicle = await VehicleDao.createNewVehicle({...vehicleInfo?.data, business_id: business.business_id});
						await VehicleDao.assignVehicleToDriver(vehicle.vehicle_id, driver.driver_id);
						// Handle vehicle documents
						if (vehicleInfo.documents) {
							for (const doc of vehicleInfo.documents) {
								const document = await DocumentDao.createDocument(doc.documentData);
								for (const file of doc.files) {
									let base64 = file.data;
									delete file.data;
									let fileData = await FileDao.addFileToDocument(document.document_id, file);
									let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
									await S3Helper.SaveObject(key, base64, file.mime_type, { users: [newUser.user_id], businesses: [business.business_id]});
								}
								await DocumentDao.linkDocumentToVehicle(document.document_id, vehicle.vehicle_id);
							}
						}
						vehicles.push(vehicle);
					}
				}

				let addresses = []
				// if (driverInfo.user.addresses) {
				// 	for (const addressInfo of driverInfo.user.addresses) {
				// 		const address = await AddressDao.addAddress(addressInfo)
				// 		await AddressDao.addUserAddress(driver.driver_id, address.address_id);
				// 		addresses.push(address);
				// 	}
				// }


				drivers.push({ driver, vehicles, addresses });
			}
		}

		res.status(201).json({
			message: "Taxi service business registered successfully",
			business,
			drivers,
			finances,
			businessAddress
		});
	} catch (error) {
		console.error("Error registering taxi service:", error);
		res.status(400).json({ error: "Error registering taxi service", detail: error.message });
	}
}

/**
 * POST /auth/delivery/register
 * @tag Auth
 * @summary Register a new delivery service
 * @description Creates a new business, multiple delivery drivers, vehicles, and optionally finances and documents, and links them together.
 * @operationId registerDeliveryService
 * @bodyContent {DeliveryServiceRegistration} application/json
 * @bodyRequired
 * @response 201 - Delivery service registered successfully
 * @responseContent {DeliveryServiceRegistrationResponse} 201.application/json
 * @response 400 - Error registering delivery service
 */
async function registerDeliveryService(req, res) {
	try {
		const business = await BusinessDao.createNewBusiness(req.body.business);
		// Handle business documents
		if (req.body.business.documents) {
			for (const doc of req.body.business.documents) {
				const document = await DocumentDao.createDocument(doc.documentData, doc.files);
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}

		let finances = {};
		if (req.body.finances) {
			finances = await FinancesDao.addFinances(req.body.finances);
			await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
		}

		let businessAddress = {}
		if (req.body.addresses) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}

		let deliveryDrivers = [];
		if (Array.isArray(req.body.deliveryDrivers) && req.body.deliveryDrivers.length) {
			for (const deliveryDriverInfo of req.body.deliveryDrivers) {

				const newUser = await UserDao.createNewUser(deliveryDriverInfo.user.data);
				console.log('newUser', newUser);
				// Handle user documents
				if (deliveryDriverInfo.user.documents) {
					for (const doc of deliveryDriverInfo.user.documents) {
						const document = await DocumentDao.createDocument(doc.documentData, doc.files);
						await DocumentDao.linkDocumentToUser(document.document_id, newUser.user_id);
					}
				}

				const deliveryDriverData = { ...deliveryDriverInfo.driver.data, business_id: business.business_id };
				const deliveryDriver = await DeliveryDriverDao.createNewDeliveryDriver(deliveryDriverData, newUser);
				// Handle delivery taxi documents
				if (deliveryDriverInfo.driver.documents) {
					for (const doc of deliveryDriverInfo.driver.documents) {
						const document = await DocumentDao.createDocument(doc.documentData, doc.files);
						await DocumentDao.linkDocumentToDeliveryDriver(document.document_id, deliveryDriver.delivery_driver_id);
					}
				}

				let vehicles = [];
				if (Array.isArray(deliveryDriverInfo.vehicles) && deliveryDriverInfo.vehicles.length) {
					for (const vehicleInfo of deliveryDriverInfo.vehicles) {
						const vehicle = await VehicleDao.createNewVehicle({...vehicleInfo?.data, business_id: business.business_id});
						await VehicleDao.assignVehicleToDeliveryDriver(vehicle.vehicle_id, deliveryDriver.delivery_driver_id);
						// Handle vehicle documents
						if (vehicleInfo.documents) {
							for (const doc of vehicleInfo.documents) {
								const document = await DocumentDao.createDocument(doc.documentData, doc.files);
								await DocumentDao.linkDocumentToVehicle(document.document_id, vehicle.vehicle_id);
							}
						}
						vehicles.push(vehicle);
					}
				}

				let addresses = []
				// if (deliveryDriverInfo.user.addresses) {
				// 	for (const addressInfo of deliveryDriverInfo.user.addresses) {
				// 		const address = await AddressDao.addAddress(addressInfo)
				// 		await AddressDao.addUserAddress(deliveryDriver.delivery_driver_id, address.address_id);
				// 		addresses.push(address);
				// 	}
				// }

				deliveryDrivers.push({ deliveryDriver, vehicles, addresses });
			}
		}

		res.status(201).json({
			message: "Delivery service business registered successfully",
			business,
			deliveryDrivers,
			finances,
			businessAddress
		});
	} catch (error) {
		console.error("Error registering delivery service:", error);
		res.status(400).json({ error: "Error registering delivery service", detail: error.message });
	}
}

/**
 * POST /auth/merchant/register
 * @tag Auth
 * @summary Register a new merchant service
 * @description Creates a new business, optionally business users, finances, and documents, and links them together.
 * @operationId registerMerchantService
 * @bodyContent {MerchantServiceRegistration} application/json
 * @bodyRequired
 * @response 201 - Merchant service registered successfully
 * @responseContent {MerchantServiceRegistrationResponse} 201.application/json
 * @response 400 - Error registering merchant service
 */
async function registerMerchantService(req, res) {
	try {
		const business = await BusinessDao.createNewBusiness(req.body.business.data);

		// Handle business documents
		if (req.body.business.documents) {
			for (const doc of req.body.business.documents) {
				const document = await DocumentDao.createDocument(doc.documentData, doc.files);
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}

		let finances = {};
		if (req.body.finances) {
			finances = await FinancesDao.addFinances(req.body.finances);
			await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
		}

		let businessAddress = {}
		if (req.body.addresses) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}

		let deliveryAddress = {}
		if (req.body.addresses) {
			deliveryAddress = await BusinessDao.addDeliveryAddress(business.business_id, req.body.addresses.delivery);
		}

		let businessUsers = [];
		if (Array.isArray(req.body.users) && req.body.users.length) {
			for (const userInfo of req.body.users) {
				const businessUser = await BusinessUsersDao.createBusinessUser(userInfo.user, business.business_id);

				let addresses = []
				// if (userInfo.user.addresses) {
				// 	for (const addressInfo of userInfo.user.addresses) {
				// 		const address = await AddressDao.addAddress(addressInfo)
				// 		await AddressDao.addUserAddress(businessUser.business_users_id, address.address_id);
				// 		addresses.push(address);
				// 	}
				// }

				businessUsers.push({ businessUser, addresses});
			}
		}

		res.status(201).json({
			message: "Merchant service business registered successfully",
			business,
			businessUsers,
			finances,
			businessAddress,
			deliveryAddress
		});
	} catch (error) {
		console.error("Error registering merchant service:", error);
		res.status(400).json({ error: "Error registering merchant service", detail: error.message });
	}
}


module.exports = {
	login,
	register,
	refreshToken,
	requestPasswordReset,
	registerTaxiService,
	registerDeliveryService,
	registerMerchantService
};
