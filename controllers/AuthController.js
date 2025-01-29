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
const EmailHelper = require("../lib/emailSender");
const { S3 } = require("aws-sdk");
const fs = require('fs');
const stripe = require("../lib/stripe");
const MenuDao = require('../dao/Menu');
const { PrismaClient } = require("@prisma/client");
const SMSHelper = require("../lib/SMS");
const { parseTelephone } = require("../lib/helpersLib");
const prisma = new PrismaClient();
require('dotenv').config();


/**
 * POST /user/auth/scheduled_users
 * @tag User
 * @summary Get scheduled users
 * @description This function fetches all scheduled users.
 * @operationId getScheduledUsers
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {getScheduledUsersRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the newly created order in the response body.
 * @responseContent {getScheduledUsers} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function getScheduledUsers(req, res) {
	try {
		let users = await UserDao.getScheduledUsers();
		res.status(200).json(users);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

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
	console.info("Login request ",req);
	let postData = req.body;
	try {
		let user = await UserDao.getUserByEmailOrTelephone(postData.email.toLowerCase(), {
			select: {
				password: true,
			},
		});
		console.log(user);
		if (!user) return res.status(400).json({ error: "Wrong email / password combination.." });
		let correctPw = await bcrypt.compare(postData.password, user.password);
		if (!correctPw) return res.status(400).json({ error: "Wrong email / password combination.." });
		user = await UserDao.getUserByEmailOrTelephone(postData.email.toLowerCase(), {
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
				driver: {
					select: {
						driver_id: true,
						business_id: true,
						ride_requirements: true,
						user_id: true,
						transfer_requirements: true,
						handles_taxi_orders: true,
						handles_transfer_orders: true,
						handles_delivery_orders: true,
					}
				},
				delivery_driver: {
					select: {
						delivery_driver_id: true,
						delivers_daily_meals: true,
						business_id: true,
						user_id: true
					}
				},
				child_users: { include:{child_user: true}},
				parent_user: { include:{parent_user: true}},
			},
		});
		if (user.disabled) return res.status(400).json({ error: "Account is disabled." });
		if (!user.active) return res.status(400).json({ error: "Account is inactive." });
		let payment_methods = []
		if (user.stripe_customer_id) {
			payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
		}
		delete user["password"];
		const access_token = generateAccessToken({
			...user,
			child_users: null,
			parent_user: null
		});
		const refresh_token = generateRefreshToken({
			...user,
			child_users: null,
			parent_user: null
		});
		user = {
			...user,
			access_token,
			refresh_token,
			payment_methods
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
	try {
		if (!postData.email)
		{
			postData.email = "";
		}
		postData.email = postData.email.toLowerCase();
		let UserExistsPhone = await UserDao.getUserByTelephone(postData.telephone);
		if (UserExistsPhone) {
			return res.status(400).json({ error: "Telephone already in use!" });
		}
		let UserExistsEmail = await UserDao.getUserByEmail(postData.email);
		if (UserExistsEmail) {
			return res.status(400).json({ error: "Email already in use!" });
		}
		let hash = await bcrypt.hash(postData.password, Number(process.env.BCRYPT_SALT_ROUNDS));
		let stripeCustomer = await stripe.createCustomer(
			postData.email,
			postData.first_name + " " + postData.last_name,
			postData.telephone,
		);
		const userRole = postData.user_role || "PERSONAL";
		const countryCode = postData.telephone_code;
		const phoneNumber = postData.telephone_number;
		//TODO: Adjust this for other country codes?
		const normalizedPhoneNumber = countryCode === 'SI' && !phoneNumber.startsWith('0') ? '0' + phoneNumber : phoneNumber;
		let userObj = {
			...postData,
			telephone_number: normalizedPhoneNumber,
			date_of_birth: new Date(postData.date_of_birth),
			password: hash,
			user_role: userRole,
			stripe_customer_id: stripeCustomer.id,
			reviewable: {
				create: {
					
				},
			},
			apple_id: postData.apple_id || null,
			google_id: postData.google_id || null,
			referred_by: postData.referral_code || null,
		};
		
		delete userObj["confirm_password"];
		delete userObj.referral_code;
		let user = await UserDao.createNewUser(userObj);
		user = await UserDao.getUserById(user.user_id,
			{
				include: {
					addresses: true
				},
			}
		);
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
		let user = req.body.email ? await UserDao.getUserByEmailOrTelephone(req.body.email) : await UserDao.getUserByEmailOrTelephone(req.body.telephone);
		let token = await TokenDao.generatePaswordResetToken(user);
		if (req.body.email && user.email) {
			let settings = {
				name: user.first_name,
				title: "Password Reset Request",
				resetLink: process.env.LINK_BASE_URL + '/reset-password/' + token.token
			};
			EmailHelper.sendEmailTemplate("Password Reset Request", "passwordReset", user.email, settings);
		} else if (req.body.telephone && user.telephone) {
			await SMSHelper.sendSMSPasswordReset(user.telephone, "Your password reset link is: " + process.env.LINK_BASE_URL + '/reset-password/' + token.token);
		} else {
			res.status(400).send("Error obtaining user email or telephone");
		}
		res.status(200).send("Password reset request processed. A token is sent to the user if the account is found.");
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error obtaining user information", e });
	}
}

async function passwordResetForm(req, res) {
	const token = req.params.token;
	try {
		let tkn = await UserDao.getUserByResetToken(token);
		console.log(tkn);
		if (!tkn && !tkn.users) {
			return res.status(400).send("Invalid or expired token");
		}
		res.render("resetPasswordForm", { token });
	} catch (error) {
		console.error("Error fetching user by reset token:", error);
		res.status(500).send("Internal Server Error");
	}
}

async function passwordReset(req, res) {
	const token = req.params.token;
	const password = req.body.password;
	const confirmPassword = req.body['confirm_password'];
	const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
	try {
		let user = await UserDao.getUserByResetToken(token);
		if (!user) {
			return res.status(400).send("Invalid or expired token");
		}
		if (!passwordPattern.test(password)) {
			return res.render('resetPasswordForm', { token, error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number' });
		} else if (password !== confirmPassword) {
			return res.render('resetPasswordForm', { token, error: 'Passwords do not match' });
		}
		let hash = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS));
		await UserDao.updateUserPassword(user.user_id, hash);
		let tokenObj = await TokenDao.getPasswordToken(token);
		await TokenDao.updateToken(tokenObj.token_id, { active: false });
		res.status(200).render('passwordResetSuccess'); // Render the success template
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
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
	// fs.writeFileSync('taxi-service.json', JSON.stringify(req.body, null, 2));
	try {
		if (req.body.business) {
			const existingBusinessEmail = await BusinessDao.getBusinessByEmail(req.body.business.email);
			if (existingBusinessEmail) {
				console.error('Business with this email already exists.');
				return res.status(400).json({ error: 'Business with this email already exists.' });
			}
			//const existingBusinessPhone = await BusinessDao.getBusinessByTelephone(req.body.business.telephone_number);
			//if (existingBusinessPhone) {
			//	console.error('Business with this phone number already exists.');
			//	return res.status(400).json({ error: 'Business with this phone number already exists.' });
			//}
		}
		if (Array.isArray(req.body.drivers) && req.body.drivers.length) {
			for (const driverInfo of req.body.drivers) {
				const existingDriverEmail = await UserDao.getUserByEmail(driverInfo.user.data.email);
				if (existingDriverEmail) {
					console.error('Driver with this email already exists.');
					return res.status(400).json({ error: `Driver with this email already exists.` });
				}
				const existingDriverPhone = await UserDao.getUserByTelephone(driverInfo.user.data.telephone);
				if (existingDriverPhone) {
					console.error('Driver with this phone number already exists.');
					return res.status(400).json({ error: `Driver with this phone number already exists.` });
				}
			}
		}
		if (req.body.finances) {
			const existingFinances = await FinancesDao.getFinancesByAccountNumber(req.body.finances.account_number);
			if (existingFinances) {
				console.error('This account number already exists.');
				return res.status(400).json({ error: 'This account number is already in use.' });
			}
		}

		const business = await BusinessDao.createNewBusiness(req.body.business);

		// TODO: handle uniqueness here or with joi validation
		let drivers = [];
		if (Array.isArray(req.body.drivers) && req.body.drivers.length) {
			for (const driverInfo of req.body.drivers) {
				let stripeCustomer = await stripe.createCustomer(
					driverInfo.user.data.email,
					driverInfo.user.data.first_name + " " + driverInfo.user.data.last_name,
					driverInfo.user.data.telephone,
				);
				let userObj = {
					...driverInfo.user.data,
					stripe_customer_id: stripeCustomer.id,
				};
				const newUser = await UserDao.createNewUser(userObj, true);

				// Handle user documents
				if (driverInfo.user.documents) {
					for (const doc of driverInfo.user.documents) {

						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.base64;
							delete file.base64;
							let fileData = await FileDao.addFileToDocument(document.document_id, file);

							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(key, base64, file.mime_type, {
								users: [newUser.user_id],
								businesses: [business.business_id]
							}, file);
						}
						await DocumentDao.linkDocumentToUser(document.document_id, newUser.user_id);
					}
				}

				const driverData = { ...driverInfo.driver.data, business_id: business.business_id };
				const driver = await DriverDao.createNewDriver(driverData, newUser);
				// Handle taxi documents
				if (driverInfo.driver.documents) {
					for (const doc of driverInfo.driver.documents) {
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.base64;
							delete file.base64;
							let fileData = await FileDao.addFileToDocument(document.document_id, file);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(key, base64, file.mime_type, {
								users: [newUser.user_id],
								businesses: [business.business_id]
							}, file);
						}
						await DocumentDao.linkDocumentToDriver(document.document_id, driver.driver_id);
					}
				}

				//Handle addresses of the driver
				let addresses = []
				// if (driverInfo.user.addresses) {
				// 	for (const addressInfo of driverInfo.user.addresses) {
				// 		const address = await AddressDao.addAddress(addressInfo)
				// 		await AddressDao.addUserAddress(newUser.user_id, address.address_id);
				// 		addresses.push(address);
				// 	}
				// }

				let vehicles = [];
				if (Array.isArray(driverInfo.vehicles) && driverInfo.vehicles.length) {
					for (const vehicleInfo of driverInfo.vehicles) {
						const vehicle = await VehicleDao.createNewVehicle({
							...vehicleInfo?.data,
							business_id: business.business_id
						});
						await VehicleDao.assignVehicleToDriver(vehicle.vehicle_id, driver.driver_id);
						// Handle vehicle documents
						if (vehicleInfo.documents) {
							for (const doc of vehicleInfo.documents) {
								const document = await DocumentDao.createDocument(doc.documentData);
								for (const file of doc.files) {
									let base64 = file.base64;
									delete file.base64;
									let fileData = await FileDao.addFileToDocument(document.document_id, file);
									let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
									S3Helper.SaveObject(key, base64, file.mime_type, {
										users: [newUser.user_id],
										businesses: [business.business_id]
									}, file);
								}
								await DocumentDao.linkDocumentToVehicle(document.document_id, vehicle.vehicle_id);
							}
						}
						vehicles.push(vehicle);
					}
				}

				drivers.push({ driver, vehicles, addresses });
			}
		}

		// Handle business documents
		if (req.body.business.documents) {
			for (const doc of req.body.business.documents) {
				const document = await DocumentDao.createDocument(doc);
				for (const file of doc.files) {
					let base64 = file.base64;
					delete file.base64;
					let fileData = await FileDao.addFileToDocument(document.document_id, file);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					S3Helper.SaveObject(key, base64, file.mime_type, {
						users: [newUser.user_id],
						businesses: [business.business_id]
					}, file);
				}
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}

		let stripeAccount = await stripe.createAccount(business);
		await BusinessDao.updateBusiness(business.business_id, { stripe_account_id: stripeAccount.id });

		let accountLink = await stripe.getAccountLinks(stripeAccount.id);
		// send email to business user with account link
		EmailHelper.sendEmailTemplate("Stripe Onboarding", "stripeOnboarding", business.email,  {
			name: business.name,
			title: "Stripe Onboarding",
			onboardLink: accountLink.url
		});

		let finances = {};
		if (req.body.finances) {
			finances = await FinancesDao.addFinances(req.body.finances);
			await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
		}

		let businessAddress = {}
		if (req.body.addresses) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}

		res.status(201).json({
			message: "Taxi service business registered successfully",
			business,
			drivers,
			finances,
			businessAddress,
			// accountLink
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
		if (req.body.business) {
			const existingBusinessEmail = await BusinessDao.getBusinessByEmail(req.body.business.email);
			if (existingBusinessEmail) {
				console.error('Business with this email already exists.');
				return res.status(400).json({ error: 'Business with this email already exists.' });
			}
			//const existingBusinessPhone = await BusinessDao.getBusinessByTelephone(req.body.business.telephone_number);
			//if (existingBusinessPhone) {
			//	console.error('Business with this phone number already exists.');
			//	return res.status(400).json({ error: 'Business with this phone number already exists.' });
			//}
		}
		if (Array.isArray(req.body.deliveryDrivers) && req.body.deliveryDrivers.length) {
			for (const driverInfo of req.body.deliveryDrivers) {
				const existingDriverEmail = await UserDao.getUserByEmail(driverInfo.user.data.email);
				if (existingDriverEmail) {
					console.error('Driver with this email already exists.');
					return res.status(400).json({ error: `Driver with this email already exists.` });
				}
				const existingDriverPhone = await UserDao.getUserByTelephone(driverInfo.user.data.telephone);
				if (existingDriverPhone) {
					console.error('Driver with this phone number already exists.');
					return res.status(400).json({ error: `Driver with this phone number already exists.` });
				}
			}
		}
		if (req.body.finances) {
			const existingFinances = await FinancesDao.getFinancesByAccountNumber(req.body.finances.account_number);
			if (existingFinances) {
				console.error('This account number already exists.');
				return res.status(400).json({ error: 'This account number is already in use.' });
			}
		}

		const business = await BusinessDao.createNewBusiness(req.body.business);

		let deliveryDrivers = [];
		if (Array.isArray(req.body.deliveryDrivers) && req.body.deliveryDrivers.length) {
			for (const deliveryDriverInfo of req.body.deliveryDrivers) {
				let stripeCustomer = await stripe.createCustomer(
					deliveryDriverInfo.user.data.email,
					deliveryDriverInfo.user.data.first_name + " " + deliveryDriverInfo.user.data.last_name,
					deliveryDriverInfo.user.data.telephone,
				);
				let userObj = {
					...deliveryDriverInfo.user.data,
					stripe_customer_id: stripeCustomer.id,
				};
				const newUser = await UserDao.createNewUser(userObj, true);

				// Handle user documents
				if (deliveryDriverInfo.user?.documents) {
					for (const doc of deliveryDriverInfo.user.documents) {
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.base64;
							delete file.base64;
							let fileData = await FileDao.addFileToDocument(document.document_id, file);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(key, base64, file.mime_type, { users: [newUser.user_id], businesses: [business.business_id] }, file);
						}
						await DocumentDao.linkDocumentToUser(document.document_id, newUser.user_id);
					}
				}

				const deliveryDriverData = { ...deliveryDriverInfo.driver.data, business_id: business.business_id };
				const deliveryDriver = await DeliveryDriverDao.createDeliveryDriver(deliveryDriverData, newUser);

				// Handle delivery driver documents
				if (deliveryDriverInfo.driver?.documents) {
					for (const doc of deliveryDriverInfo.driver.documents) {
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.base64;
							delete file.base64;
							let fileData = await FileDao.addFileToDocument(document.document_id, file);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(key, base64, file.mime_type, { users: [newUser.user_id], businesses: [business.business_id] }, file);
						}
						await DocumentDao.linkDocumentToDeliveryDriver(document.document_id, deliveryDriver.delivery_driver_id);
					}
				}

				// Handle addresses of the delivery driver
				let addresses = [];
				if (deliveryDriverInfo.user.addresses) {
					for (const addressInfo of deliveryDriverInfo.user.addresses) {
						const address = await AddressDao.addAddress(addressInfo);
						await AddressDao.addUserAddress(newUser.user_id, address.address_id);
						addresses.push(address);
					}
				}

				let vehicles = [];
				if (Array.isArray(deliveryDriverInfo.vehicles) && deliveryDriverInfo.vehicles.length) {
					for (const vehicleInfo of deliveryDriverInfo.vehicles) {
						const vehicle = await VehicleDao.createNewVehicle({ ...vehicleInfo?.data, business_id: business.business_id });
						await VehicleDao.assignVehicleToDeliveryDriver(vehicle.vehicle_id, deliveryDriver.delivery_driver_id);
						// Handle vehicle documents
						if (vehicleInfo.documents) {
							for (const doc of vehicleInfo.documents) {
								const document = await DocumentDao.createDocument(doc.documentData);
								for (const file of doc.files) {
									let base64 = file.base64;
									delete file.base64;
									let fileData = await FileDao.addFileToDocument(document.document_id, file);
									let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
									S3Helper.SaveObject(key, base64, file.mime_type, { users: [newUser.user_id], businesses: [business.business_id] }, file);
								}
								await DocumentDao.linkDocumentToVehicle(document.document_id, vehicle.vehicle_id);
							}
						}
						vehicles.push(vehicle);
					}
				}

				deliveryDrivers.push({ deliveryDriver, vehicles, addresses });
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
		// fs.writeFileSync("merchant-req.json", null, JSON.stringify(req.body, null, 2), 'utf8')
		if (req.body.business) {
			const existingBusinessEmail = await BusinessDao.getBusinessByEmail(req.body.business.data.email);
			if (existingBusinessEmail) {
				console.error('Business with this email already exists.');
				return res.status(400).json({ error: 'Business with this email already exists.' });
			}
			//const existingBusinessPhone = await BusinessDao.getBusinessByTelephone(req.body.business.telephone_number);
			//if (existingBusinessPhone) {
			//	console.error('Business with this phone number already exists.');
			//	return res.status(400).json({ error: 'Business with this phone number already exists.' });
			//}
		}
		if (Array.isArray(req.body.users) && req.body.users.length) {
			for (const driverInfo of req.body.users) {
				const existingDriverEmail = await UserDao.getUserByEmail(driverInfo.user.data.email);
				if (existingDriverEmail) {
					console.error('User with this email already exists.');
					return res.status(400).json({ error: `User with this email already exists.` });
				}
				const existingDriverPhone = await UserDao.getUserByTelephone(driverInfo.user.data.telephone);
				if (existingDriverPhone) {
					console.error('User with this phone number already exists.');
					return res.status(400).json({ error: `User with this phone number already exists.` });
				}
			}
		}
		if (req.body.finances) {
			const existingFinances = await FinancesDao.getFinancesByAccountNumber(req.body.finances.account_number);
			if (existingFinances) {
				console.error('This account number already exists.');
				return res.status(400).json({ error: 'This account number is already in use.' });
			}
		}

		const business = await BusinessDao.createNewBusiness(req.body.business.data);

		// Ensure at least one business user data is provided & created
		if (!Array.isArray(req.body.users) || !req.body.users.length) {
			return res.status(400).json({ error: "At least one business user must be provided." });
		}

		let businessUsers = [];
		for (const userInfo of req.body.users) {
			// userInfo.user.data.password = "lalaland1";
			const { newUser, businessUser } = await BusinessUsersDao.createBusinessUser(userInfo.user, business.business_id);

			let addresses = [];
			if (userInfo.user.addresses) {
				for (const addressInfo of userInfo.user.addresses) {
					const address = await AddressDao.addAddress(addressInfo);
					await AddressDao.addUserAddress(newUser.user_id, address.address_id);
					addresses.push(address);
				}
			}

			businessUsers.push({ businessUser, addresses });
		}

		// Handle business documents
		if (req.body.business.documents) {
			for (const doc of req.body.business.documents) {
				const document = await DocumentDao.createDocument(doc.documentData);
				for (const file of doc.files) {
					let base64 = file.base64;
					delete file.base64;
					let fileData = await FileDao.addFileToDocument(document.document_id, file);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					await S3Helper.SaveObject(key, base64, file.mime_type, { businesses: [business.business_id] });
				}
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}
		let stripeAccount = await stripe.createAccount(business);
		await BusinessDao.updateBusiness(business.business_id, { stripe_account_id: stripeAccount.id });

		let accountLink = await stripe.getAccountLinks(stripeAccount.id);
		// send email to business user with account link
		EmailHelper.sendEmailTemplate("Stripe Onboarding", "stripeOnboarding", business.email,  {
            name: business.name,
            title: "Stripe Onboarding",
            onboardLink: accountLink.url
        });
		let finances = {};
		if (req.body.finances) {
			finances = await FinancesDao.addFinances(req.body.finances);
			await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
		}

		let businessAddress = {};
		if (req.body.addresses && req.body.addresses.business) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}

		let deliveryAddress = {};
		if (req.body.addresses && req.body.addresses.delivery) {
			deliveryAddress = await BusinessDao.addDeliveryAddress(business.business_id, req.body.addresses.delivery);
		}

		const menu = await MenuDao.createMenu(business.business_id);

		console.log("ACCOUNT STRIPE ONBOARDING LINK", accountLink.url)

		res.status(201).json({
			message: "Merchant service business registered successfully",
			business,
			businessUsers,
			finances,
			businessAddress,
			deliveryAddress,
			menu
		});
	} catch (error) {
		console.error("Error registering merchant service:", error);
		res.status(400).json({ error: "Error registering merchant service", detail: error.message });
	}
}

/**
 * POST /auth/business/register
 * @tag Auth
 * @summary Register a new business
 * @description Creates a new business, optionally business users, finances, and documents, and links them together.
 * @operationId registerBusiness
 * @bodyContent {BusinessRegistration} application/json
 * @bodyRequired
 * @response 201 - Business registered successfully
 * @responseContent {BusinessRegistrationResponse} 201.application/json
 * @response 400 - Error registering business
 */
async function registerBusiness(req, res) {
	try {
		if (req.body.business) {
			const existingBusinessEmail = await BusinessDao.getBusinessByEmail(req.body.business.data.email);
			if (existingBusinessEmail) {
				console.error('Business with this email already exists.');
				return res.status(400).json({ error: 'Business with this email already exists.' });
			}
		}
		if (Array.isArray(req.body.users) && req.body.users.length) {
			for (const driverInfo of req.body.users) {
				console.info('User data:', driverInfo);
				const existingDriverEmail = await UserDao.getUserByEmail(driverInfo.user.data.email);
				if (existingDriverEmail) {
					console.error('User with this email already exists.', driverInfo.user.data.email,existingDriverEmail);
					return res.status(400).json({ error: `User with this email already exists.` });
				}
				const existingDriverPhone = await UserDao.getUserByTelephone(driverInfo.user.data.telephone);
				if (existingDriverPhone) {
					console.error('User with this phone number already exists.');
					return res.status(400).json({ error: `User with this phone number already exists.` });
				}
			}
		}
		if (req.body.finances) {
			const existingFinances = await FinancesDao.getFinancesByAccountNumber(req.body.finances.account_number);
			if (existingFinances) {
				console.error('This account number already exists.');
				return res.status(400).json({ error: 'This account number is already in use.' });
			}
		}

		const business = await BusinessDao.createNewBusiness(req.body.business.data);

		// Ensure at least one business user data is provided & created
		if (!Array.isArray(req.body.users) || !req.body.users.length) {
			return res.status(400).json({ error: "At least one business user must be provided." });
		}

		let businessUsers = [];
		for (const userInfo of req.body.users) {
			const { newUser, businessUser } = await BusinessUsersDao.createBusinessUser(userInfo.user, business.business_id);

			let addresses = [];
			if (userInfo.user.addresses) {
				for (const addressInfo of userInfo.user.addresses) {
					const address = await AddressDao.addAddress(addressInfo);
					await AddressDao.addUserAddress(newUser.user_id, address.address_id);
					addresses.push(address);
				}
			}

			businessUsers.push({ businessUser, addresses });
		}

		// Handle business documents
		if (req.body.business.documents) {
			for (const doc of req.body.business.documents) {
				const document = await DocumentDao.createDocument(doc.documentData);
				for (const file of doc.files) {
					let base64 = file.base64;
					delete file.base64;
					let fileData = await FileDao.addFileToDocument(document.document_id, file);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					await S3Helper.SaveObject(key, base64, file.mime_type, { businesses: [business.business_id] });
				}
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}

		let finances = {};
		if (req.body.finances) {
			finances = await FinancesDao.addFinances(req.body.finances);
			await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
		}

		let businessAddress = {};
		if (req.body.addresses && req.body.addresses.business) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}

		res.status(201).json({
			message: "Business registered successfully",
			business,
			businessUsers,
			finances,
			businessAddress
		});
	} catch (error) {
		console.error("Error registering business:", error);
		res.status(400).json({ error: "Error registering business", detail: error.message });
	}
}

/**
 * POST /user/auth/create/scheduled_user
 * @tag User
 * @summary Create a new scheduled user.
 * @description This created new scheduled user.
 * @operationId createScheduledUser
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {createScheduledUserRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the newly created order in the response body.
 * @responseContent {createScheduledUser} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function createScheduledUser(req, res) {
	const { data, addresses } = req.body
	try {
		let user = await UserDao.createNewUser({
			...data,
		}, true);

		let addressList = [];
		if (addresses) {
			for (const addressInfo of addresses) {
				const address = await AddressDao.addAddress(addressInfo);
				await AddressDao.addUserAddress(user.user_id, address.address_id);
				addressList.push(address);
			}
		}

		res.status(200).json({user,addresses: addressList});
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}


/**
 * PATCH /update/scheduled_user
 * @tag Users
 * @summary Updates a scheduled user's details
 * @description This endpoint is used to update a scheduled user's details.
 * @operationId updateScheduledUser
 * @bodyDescription The data to update for the current user
 * @bodyContent {updateScheduledUserRequest} application/json
 * @bodyRequired
 * @response 200 - User updated successfully. Returns the updated user's details.
 * @responseContent {AuthenticatedUser} 200.application/json
 * @response 400 - Error updating user information.
 */
async function updateScheduledUser(req, res) {
	const {user_id, data, addresses} = req.body
	const pass = data?.password
	delete data?.password
	let updatedData = data ? {...data} : {}

	try {
		if (pass && pass !== '') {
			updatedData.password = await bcrypt.hash(pass, Number(process.env.BCRYPT_SALT_ROUNDS));
		}

		let user = await UserDao.updateScheduledUser(user_id, updatedData);
		if (user) {
			let addressList = [];

			// Check if the user has existing addresses and delete them
			if (addresses && addresses.length > 0) {
				for (const userAddress of user.addresses) {
					await AddressDao.deleteUserAddress(user.user_id, userAddress.address_id);
				}

				// Add the new addresses
				for (const addressInfo of addresses) {
					const address = await AddressDao.addAddress(addressInfo);
					await AddressDao.addUserAddress(user.user_id, address.address_id);
					addressList.push(address);
				}
			}
			return res.status(200).json({ user, addresses: addressList });
		}
	} catch (e) {
		console.log(e)
		res.status(400).json({ error: "Error updating user information", e });
	}

}

module.exports = {
	login,
	register,
	refreshToken,
	requestPasswordReset,
	passwordResetForm,
	passwordReset,
	registerTaxiService,
	registerDeliveryService,
	registerMerchantService,
	registerBusiness,
	createScheduledUser,
	getScheduledUsers,
	updateScheduledUser
};
