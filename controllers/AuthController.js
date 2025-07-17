import fs from 'fs';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

import UserDao from '../dao/User.js';
import { generateAccessToken, generateRefreshToken } from '../lib/jwt.js';
import TokenDao from '../dao/Token.js';
import BusinessDao from '../dao/Business.js';
import AddressDao from '../dao/Address.js';
import DriverDao from '../dao/Driver.js';
import VehicleDao from '../dao/Vehicle.js';
import DocumentDao from '../dao/Document.js';
import DeliveryDriverDao from '../dao/DeliveryDriver.js';
import BusinessUsersDao from '../dao/BusinessUsers.js';
import FileDao from '../dao/File.js';
import S3Helper from '../lib/s3.js';
import EmailHelper from '../lib/emailSender.js';
import stripe from '../lib/stripe.js';
import MenuDao from '../dao/Menu.js';
import SMSHelper from '../lib/SMS.js';
import { DOCUMENT_TYPE } from '../lib/constants.js';
import elasticsearch from '../elasticsearch/index.js';
import prisma from '../prisma/prisma.js';
const { businessIndex } = elasticsearch;
config();
/**
 * POST /auth/scheduled_users
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
		//@ sddfsdfsdf
		let users = await UserDao.getScheduledUsers();
		res.status(200).json(users);
	} catch (e) {
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
	let postData = req.body;
	try {
		let user = await UserDao.getUserByEmailOrTelephone(postData.email.toLowerCase(), {
			select: {
				password: true,
			},
		});
		console.log(user);
		if (!user) return res.status(400).json({ error: 'Wrong email / password combination..' });
		let correctPw = await bcrypt.compare(postData.password, user.password);
		if (!correctPw) return res.status(400).json({ error: 'Wrong email / password combination..' });
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
						taxi_orders_toggled: true,
						transfer_orders_toggled: true,
						delivery_orders_toggled: true,
						vehicles: {
							select: {
								vehicle_drivers_id: true,
								vehicle_id: true,
								can_drive: true,
								vehicle: {
									select: {
										vehicle_id: true,
										business_id: true,
										active: true,
										class: true,
										category: true,
										make: true,
										model: true,
										color: true,
										license_plate: true,
										current_driver: true,
									},
								},
							},
						},
						last_used_vehicle_id: true,
						current_vehicle: true,
						activity_logs: {
							orderBy: {
								started_at: 'desc',
							},
						},
					},
				},
				delivery_driver: {
					select: {
						delivery_driver_id: true,
						delivers_daily_meals: true,
						business_id: true,
						user_id: true,
					},
				},
				child_users: { include: { child_user: true } },
				parent_user: { include: { parent_user: true } },
				referrals_made: true,
				referral: { include: { referrer: { select: { first_name: true, last_name: true } } } },
				user_roles: true,
				business_users: {
					include: {
						business: {
							include: {
								address: true,
							},
						},
					},
				},
			},
		});
		if (user.disabled) return res.status(400).json({ error: 'Account is disabled.' });
		if (!user.active) return res.status(400).json({ error: 'Account is inactive.' });
		let payment_methods = [];
		if (user.stripe_customer_id) {
			payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
		}
		delete user['password'];
		const access_token = generateAccessToken({
			user_id: user.user_id,
		});
		const refresh_token = generateRefreshToken({
			user_id: user.user_id,
		});
		let profile = await DocumentDao.getDocumentsForUserByType(user.user_id, DOCUMENT_TYPE.PROFILE_PICTURE);
		user = {
			...user,
			access_token,
			refresh_token,
			payment_methods,
		};
		if (profile) {
			user.profile_picture = profile[0]?.files[0]?.url;
		}
		res.status(200).header('Authorization', access_token).json(user);
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
		if (!postData.email) {
			postData.email = '';
		}
		postData.email = postData.email.toLowerCase();
		let UserExistsPhone = await UserDao.getUserByTelephone(postData.telephone);
		if (UserExistsPhone) {
			return res.status(400).json({ error: 'Telephone already in use!' });
		}
		let UserExistsEmail = await UserDao.getUserByEmail(postData.email);
		if (UserExistsEmail) {
			return res.status(400).json({ error: 'Email already in use!' });
		}
		let hash = await bcrypt.hash(postData.password, Number(process.env.BCRYPT_SALT_ROUNDS));
		let stripeCustomer = await stripe.createCustomer(
			postData.email,
			postData.first_name + ' ' + postData.last_name,
			postData.telephone
		);
		const userRole = postData.user_role || 'PERSONAL';
		const userRoles = postData.user_roles || [{ role: userRole, primary: true }];
		delete postData.user_roles;
		const countryCode = postData.telephone_code;
		const phoneNumber = postData.telephone_number;
		//TODO: Adjust this for other country codes?
		const normalizedPhoneNumber = await SMSHelper.getParsedPhoneNumber(postData.telephone, countryCode);
		let userObj = {
			...postData,
			telephone_number: normalizedPhoneNumber?.number || phoneNumber,
			date_of_birth: new Date(postData.date_of_birth),
			password: hash,
			user_role: userRole,
			stripe_customer_id: stripeCustomer.id,
			reviewable: {
				create: {},
			},
			apple_id: postData.apple_id || null,
			google_id: postData.google_id || null,
		};
		delete userObj['confirm_password'];
		delete userObj.referral_code;
		let user = await UserDao.createNewUser(userObj);
		await UserDao.linkRolesToUser(user?.user_id, userRoles);
		user = await UserDao.getUserById(user.user_id, {
			include: {
				addresses: true,
			},
		});
		delete user['password'];
		const access_token = generateAccessToken({
			user_id: user.user_id,
		});
		const refresh_token = generateRefreshToken({
			user_id: user.user_id,
		});
		user = {
			...user,
			access_token,
			refresh_token,
		};
		res.status(200).header('Authorization', access_token).json(user);
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error something went wrong..', e });
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
		return res.status(400).send('Access Denied. No refresh token provided.');
	}
	try {
		jwt.verify(refreshToken, process.env.JWT_TOKEN_SECRET, async function (err, decoded) {
			try {
				if (err) {
					return res.status(401).json({ error: 'Access Denied. Token expired.', e: err });
				}
				delete decoded['iat'];
				delete decoded['exp'];
				const access_token = generateAccessToken({
					user_id: decoded.user.user_id,
				});
				const refresh_token = generateRefreshToken({
					user_id: decoded.user.user_id,
				});
				let userDb = await UserDao.getUserById(decoded.user.user_id, {
					include: {
						addresses: true,
						user_roles: true,
					},
				});
				delete userDb['password'];
				let user = {
					...userDb,
					access_token,
					refresh_token,
				};
				res.status(200).header('Authorization', access_token).json(user);
			} catch (error) {
				return res.status(400).send('Access Denied. Unknown error.');
			}
		});
	} catch (error) {
		console.error(error);
		return res.status(400).send('Access Denied. Unknown error.');
	}
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
		let user = req.body.email
			? await UserDao.getUserByEmailOrTelephone(req.body.email)
			: await UserDao.getUserByEmailOrTelephone(req.body.telephone);
		let token = await TokenDao.generatePaswordResetToken(user);
		if (req.body.email && user.email) {
			let settings = {
				name: user.first_name,
				title: 'Password Reset Request',
				resetLink: process.env.LINK_BASE_URL + '/reset-password/' + token.token,
			};
			EmailHelper.sendEmailTemplate('Password Reset Request', 'passwordReset', user.email, settings);
		} else if (req.body.telephone && user.telephone) {
			await SMSHelper.sendSMSPasswordReset(
				user.telephone,
				'Your password reset link is: ' + process.env.LINK_BASE_URL + '/reset-password/' + token.token
			);
		} else {
			res.status(400).send('Error obtaining user email or telephone');
		}
		res.status(200).send('Password reset request processed. A token is sent to the user if the account is found.');
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error obtaining user information', e });
	}
}
async function passwordResetForm(req, res) {
	const token = req.params.token;
	try {
		let tkn = await UserDao.getUserByResetToken(token);
		console.log(tkn);
		if (!tkn && !tkn.users) {
			return res.status(400).send('Invalid or expired token');
		}
		res.render('resetPasswordForm', { token });
	} catch (error) {
		console.error('Error fetching user by reset token:', error);
		res.status(500).send('Internal Server Error');
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
			return res.status(400).send('Invalid or expired token');
		}
		if (!passwordPattern.test(password)) {
			return res.render('resetPasswordForm', {
				token,
				error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number',
			});
		} else if (password !== confirmPassword) {
			return res.render('resetPasswordForm', { token, error: 'Passwords do not match' });
		}
		let hash = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS));
		await UserDao.updateUserPassword(user.user_id, hash);
		let tokenObj = await TokenDao.getPasswordToken(token);
		await TokenDao.updateToken(tokenObj.token_id, { active: false });
		res.status(200).render('passwordResetSuccess'); // Render the success template
	} catch (e) {
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
	fs.writeFileSync('taxi-service.json', JSON.stringify(req.body, null, 2));
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
		let stripeCustomer = await stripe.createCustomer(
			req.body.business.email,
			req.body.business.name,
			req.body.business.telephone
		);
		const business = await BusinessDao.createNewBusiness({
			...req.body.business,
			stripe_customer_id: stripeCustomer.id,
		});
		// TODO: handle uniqueness here or with joi validation
		let drivers = [];
		if (Array.isArray(req.body.drivers) && req.body.drivers.length) {
			for (const driverInfo of req.body.drivers) {
				let stripeCustomer = await stripe.createCustomer(
					driverInfo.user.data.email,
					driverInfo.user.data.first_name + ' ' + driverInfo.user.data.last_name,
					driverInfo.user.data.telephone
				);
				const phoneNumber = driverInfo.user.data.telephone_number;
				const normalizedPhoneNumber = await SMSHelper.getParsedPhoneNumber(
					driverInfo.user.data.telephone,
					driverInfo.user.data.telephone_code
				);
				let userObj = {
					...driverInfo.user.data,
					telephone_number: normalizedPhoneNumber?.number || phoneNumber,
					stripe_customer_id: stripeCustomer.id,
				};
				delete userObj.user_roles;
				const newUser = await UserDao.createNewUser(userObj, true);
				const userRoles = driverInfo.user.data.user_roles || [
					{ role: driverInfo.user.data.user_role || 'DRIVER', primary: true },
				];
				const result = await UserDao.linkRolesToUser(newUser?.user_id, userRoles);
				console.log('User roles linked:', result);
				// Handle user documents
				if (driverInfo.user.documents) {
					for (const doc of driverInfo.user.documents) {
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.base64;
							delete file.base64;
							let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(
								key,
								base64,
								file.mime_type,
								{
									users: [newUser.user_id],
									businesses: [business.business_id],
								},
								fileData,
								document.public
							);
						}
						await DocumentDao.linkDocumentToUser(document.document_id, newUser.user_id);
					}
				}
				const driverData = { ...driverInfo.driver.data, business_id: business.business_id };
				const driver = await DriverDao.createNewDriver(driverData, newUser);
				const regions = driverInfo.driver.regions || [];
				await DriverDao.addDriverMunicipalities(driver.driver_id, regions);
				// Handle taxi documents
				if (driverInfo.driver.documents) {
					for (const doc of driverInfo.driver.documents) {
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.base64;
							delete file.base64;
							let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(
								key,
								base64,
								file.mime_type,
								{
									users: [newUser.user_id],
									businesses: [business.business_id],
								},
								fileData,
								document.public
							);
						}
						await DocumentDao.linkDocumentToDriver(document.document_id, driver.driver_id);
					}
				}
				//Handle addresses of the driver
				let addresses = [];
				drivers.push({ driver, addresses });
			}
		}
		let vehicles = [];
		if (Array.isArray(req.body.vehicles) && req.body.vehicles.length) {
			for (const vehicleInfo of req.body.vehicles) {
				const vehicle = await VehicleDao.createNewVehicle({
					...vehicleInfo?.data?.vehicle_information,
					business_id: business.business_id,
				});
				if (Array.isArray(vehicleInfo?.data?.drivers) && vehicleInfo?.data?.drivers.length) {
					for (const email of vehicleInfo.data.drivers) {
						const driver = drivers.find((d) => d.driver.user.email === email);
						await VehicleDao.assignVehicleToDriver(vehicle.vehicle_id, driver?.driver?.driver_id);
					}
				} else {
					await VehicleDao.assignVehicleToDriver(vehicle.vehicle_id, drivers[0]?.driver?.driver_id);
				}
				// Handle vehicle documents
				if (vehicleInfo?.data?.documents) {
					for (const doc of vehicleInfo.data.documents) {
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.base64;
							delete file.base64;
							let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(
								key,
								base64,
								file.mime_type,
								{
									users: [],
									businesses: [business.business_id],
								},
								fileData,
								document.public
							);
						}
						await DocumentDao.linkDocumentToVehicle(document.document_id, vehicle.vehicle_id);
					}
				}
				vehicles.push(vehicle);
			}
		}
		// Handle business documents
		if (req.body.business.documents) {
			for (const doc of req.body.business.documents) {
				const document = await DocumentDao.createDocument(doc);
				for (const file of doc.files) {
					let base64 = file.base64;
					delete file.base64;
					let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					S3Helper.SaveObject(
						key,
						base64,
						file.mime_type,
						{
							users: [],
							businesses: [business.business_id],
						},
						fileData,
						document.public
					);
				}
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}
		let stripeAccount = await stripe.createAccount(business);
		await BusinessDao.updateBusiness(business.business_id, { stripe_account_id: stripeAccount.id });
		let accountLink = await stripe.getAccountLinks(stripeAccount.id, business.business_id);
		// send email to business user with account link
		EmailHelper.sendEmailTemplate('Stripe Onboarding', 'stripeOnboarding', business.email, {
			name: business.name,
			title: 'Stripe Onboarding',
			onboardLink: accountLink.url,
		});
		/*let finances = {};
        if (req.body.finances) {
            finances = await FinancesDao.addFinances(req.body.finances);
            await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
        }*/
		let businessAddress = {};
		if (req.body.addresses) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}
		res.status(201).json({
			message: 'Taxi service business registered successfully',
			business,
			drivers,
			vehicles,
			businessAddress,
			// accountLink
		});
	} catch (error) {
		console.error('Error registering taxi service:', error);
		res.status(400).json({ error: 'Error registering taxi service', detail: error.message });
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
		let stripeCustomer = await stripe.createCustomer(
			req.body.business.email,
			req.body.business.name,
			req.body.business.telephone
		);
		const business = await BusinessDao.createNewBusiness({
			...req.body.business,
			stripe_customer_id: stripeCustomer.id,
		});
		let deliveryDrivers = [];
		if (Array.isArray(req.body.deliveryDrivers) && req.body.deliveryDrivers.length) {
			for (const deliveryDriverInfo of req.body.deliveryDrivers) {
				let stripeCustomer = await stripe.createCustomer(
					deliveryDriverInfo.user.data.email,
					deliveryDriverInfo.user.data.first_name + ' ' + deliveryDriverInfo.user.data.last_name,
					deliveryDriverInfo.user.data.telephone
				);
				const phoneNumber = deliveryDriverInfo.user.data.telephone_number;
				const normalizedPhoneNumber = await SMSHelper.getParsedPhoneNumber(
					deliveryDriverInfo.user.data.telephone,
					deliveryDriverInfo.user.data.telephone_code
				);
				let userObj = {
					...deliveryDriverInfo.user.data,
					telephone_number: normalizedPhoneNumber?.number || phoneNumber,
					stripe_customer_id: stripeCustomer.id,
				};
				delete userObj.user_roles;
				const newUser = await UserDao.createNewUser(userObj, true);
				const userRoles = deliveryDriverInfo.user.data.user_roles || [
					{ role: deliveryDriverInfo.user.data.user_role || 'DELIVERY_DRIVER', primary: true },
				];
				await UserDao.linkRolesToUser(newUser?.user_id, userRoles);
				// Handle user documents
				if (deliveryDriverInfo.user?.documents) {
					for (const doc of deliveryDriverInfo.user.documents) {
						const document = await DocumentDao.createDocument(doc.documentData);
						for (const file of doc.files) {
							let base64 = file.base64;
							delete file.base64;
							let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(
								key,
								base64,
								file.mime_type,
								{ users: [newUser.user_id], businesses: [business.business_id] },
								fileData,
								document.public
							);
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
							let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
							let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
							S3Helper.SaveObject(
								key,
								base64,
								file.mime_type,
								{ users: [newUser.user_id], businesses: [business.business_id] },
								fileData,
								document.public
							);
						}
						await DocumentDao.linkDocumentToDeliveryDriver(
							document.document_id,
							deliveryDriver.delivery_driver_id
						);
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
						const vehicle = await VehicleDao.createNewVehicle({
							...vehicleInfo?.data,
							business_id: business.business_id,
						});
						await VehicleDao.assignVehicleToDeliveryDriver(
							vehicle.vehicle_id,
							deliveryDriver.delivery_driver_id
						);
						// Handle vehicle documents
						if (vehicleInfo.documents) {
							for (const doc of vehicleInfo.documents) {
								const document = await DocumentDao.createDocument(doc.documentData);
								for (const file of doc.files) {
									let base64 = file.base64;
									delete file.base64;
									let fileData = await FileDao.addFileToDocument(
										document.document_id,
										file,
										document.public
									);
									let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
									S3Helper.SaveObject(
										key,
										base64,
										file.mime_type,
										{ users: [newUser.user_id], businesses: [business.business_id] },
										fileData,
										document.public
									);
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
		/*let finances = {};
        if (req.body.finances) {
            finances = await FinancesDao.addFinances(req.body.finances);
            await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
        }*/
		let businessAddress = {};
		if (req.body.addresses) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}
		res.status(201).json({
			message: 'Delivery service business registered successfully',
			business,
			deliveryDrivers,
			businessAddress,
		});
	} catch (error) {
		console.error('Error registering delivery service:', error);
		res.status(400).json({ error: 'Error registering delivery service', detail: error.message });
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
		let stripeCustomer = await stripe.createCustomer(
			req.body.business.email,
			req.body.business.name,
			req.body.business.telephone
		);
		const business = await BusinessDao.createNewBusiness({
			...req.body.business.data,
			stripe_customer_id: stripeCustomer.id,
		});
		// Ensure at least one business user data is provided & created
		if (!Array.isArray(req.body.users) || !req.body.users.length) {
			return res.status(400).json({ error: 'At least one business user must be provided.' });
		}
		let businessUsers = [];
		for (const userInfo of req.body.users) {
			const userObj = userInfo.user;
			delete userObj.data.user_roles;
			const { newUser, businessUser } = await BusinessUsersDao.createBusinessUser(userObj, business.business_id);
			const userRoles = userInfo.user.data.user_roles || [
				{ role: userInfo.user.user_role || 'BUSINESS_USER', primary: true },
			];
			await UserDao.linkRolesToUser(newUser?.user_id, userRoles);
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
					let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					await S3Helper.SaveObject(
						key,
						base64,
						file.mime_type,
						{ businesses: [business.business_id] },
						fileData,
						document.public
					);
				}
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}
		let stripeAccount = await stripe.createAccount(business);
		await BusinessDao.updateBusiness(business.business_id, { stripe_account_id: stripeAccount.id });
		let accountLink = await stripe.getAccountLinks(stripeAccount.id, business.business_id);
		// send email to business user with account link
		EmailHelper.sendEmailTemplate('Stripe Onboarding', 'stripeOnboarding', business.email, {
			name: business.name,
			title: 'Stripe Onboarding',
			onboardLink: accountLink.url,
		});
		// let finances = {};
		// if (req.body.finances) {
		// 	finances = await FinancesDao.addFinances(req.body.finances);
		// 	await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
		// }
		let businessAddress = {};
		if (req.body.addresses && req.body.addresses.business) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}
		let deliveryAddress = {};
		if (req.body.addresses && req.body.addresses.delivery) {
			deliveryAddress = await BusinessDao.addDeliveryAddress(business.business_id, req.body.addresses.delivery);
		}
		const menu = await MenuDao.createMenu(business.business_id);
		console.log('ACCOUNT STRIPE ONBOARDING LINK', accountLink.url);
		businessIndex(business.business_id);
		res.status(201).json({
			message: 'Merchant service business registered successfully',
			business,
			businessUsers,
			businessAddress,
			deliveryAddress,
			menu,
		});
	} catch (error) {
		console.error('Error registering merchant service:', error);
		res.status(400).json({ error: 'Error registering merchant service', detail: error.message });
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
					console.error(
						'User with this email already exists.',
						driverInfo.user.data.email,
						existingDriverEmail
					);
					return res.status(400).json({ error: `User with this email already exists.` });
				}
				const existingDriverPhone = await UserDao.getUserByTelephone(driverInfo.user.data.telephone);
				if (existingDriverPhone) {
					console.error('User with this phone number already exists.');
					return res.status(400).json({ error: `User with this phone number already exists.` });
				}
			}
		}
		let stripeCustomer = await stripe.createCustomer(
			req.body.business.email,
			req.body.business.name,
			req.body.business.telephone
		);
		const business = await BusinessDao.createNewBusiness({
			...req.body.business.data,
			stripe_customer_id: stripeCustomer.id,
		});
		// Ensure at least one business user data is provided & created
		if (!Array.isArray(req.body.users) || !req.body.users.length) {
			return res.status(400).json({ error: 'At least one business user must be provided.' });
		}
		let businessUsers = [];
		for (const userInfo of req.body.users) {
			const userObj = userInfo.user;
			delete userObj.data.user_roles;
			const { newUser, businessUser } = await BusinessUsersDao.createBusinessUser(userObj, business.business_id);
			const userRoles = userInfo.user.data.user_roles || [
				{ role: userInfo.user.user_role || 'BUSINESS_USER', primary: true },
			];
			await UserDao.linkRolesToUser(newUser?.user_id, userRoles);
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
					let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
					let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
					await S3Helper.SaveObject(
						key,
						base64,
						file.mime_type,
						{ businesses: [business.business_id] },
						fileData,
						document.public
					);
				}
				await DocumentDao.linkDocumentToBusiness(document.document_id, business.business_id);
			}
		}
		// let finances = {};
		// if (req.body.finances) {
		// 	finances = await FinancesDao.addFinances(req.body.finances);
		// 	await FinancesDao.linkFinancesToBusiness(business.business_id, finances.finance_id);
		// }
		let businessAddress = {};
		if (req.body.addresses && req.body.addresses.business) {
			businessAddress = await BusinessDao.addBusinessAddress(business.business_id, req.body.addresses.business);
		}
		// TODO: select user to login,
		res.status(201).json({
			message: 'Business registered successfully',
			business,
			businessUsers,
			businessAddress,
		});
	} catch (error) {
		console.error('Error registering business:', error);
		res.status(400).json({ error: 'Error registering business', detail: error.message });
	}
}
/**
 * POST /auth/reservation/register
 * @tag Auth
 * @summary Register a new reservation business
 * @description Creates a new reservation business.
 * @operationId registerBusiness
 * @bodyContent {BusinessRegistration} application/json
 * @bodyRequired
 * @response 201 - Business registered successfully
 * @responseContent {BusinessRegistrationResponse} 201.application/json
 * @response 400 - Error registering business
 */
async function registerReservationBusiness(req, res) {
	try {
		if (req.body.email) {
			const existingBusinessEmail = await BusinessDao.getBusinessByEmail(req.body.email);
			if (existingBusinessEmail) {
				console.error('Business with this email already exists.');
				return res.status(400).json({ error: 'Business with this email already exists.' });
			}
		}
		let stripeCustomer = await stripe.createCustomer(
			req.body.email,
			req.body.business_name,
			req.body.business_telephone
		);
		const businessData = {
			name: req.body.business_name,
			email: req.body.email,
			telephone: req.body.business_telephone,
			telephone_number: req.body.business_telephone_number,
			telephone_code: req.body.business_telephone_code,
			type: 'RESERVATION',
			tax_id: req.body.tax_id,
			registration_id: req.body.registration_id,
		};
		const business = await BusinessDao.createNewBusiness({
			...businessData,
			stripe_customer_id: stripeCustomer.id,
		});
		// Create reservation module for the business
		let reservationModule = await req.prisma.reservation_modules.create({
			data: {
				business: {
					connect: {
						business_id: business.business_id,
					},
				},
			},
		});

		let businessUsers = [];
		const userObj = {
			email: req.body.email,
			password: req.body.password,
			user_role: 'ADMIN',
		};
		delete userObj.data.user_roles;
		const { newUser, businessUser } = await BusinessUsersDao.createBusinessUser(userObj, business.business_id);
		const userRoles = userObj.data.user_roles || [{ role: userObj.user_role || 'BUSINESS_USER', primary: true }];
		await UserDao.linkRolesToUser(newUser?.user_id, userRoles);
		//create employee user
		let employee = await req.prisma.employee.create({
			data: {
				business_user: {
					connect: {
						business_user_id: businessUser.business_user_id,
					},
				},
				reservation_module: {
					connect: {
						reservation_module_id: reservationModule.reservation_module_id,
					},
				},
			},
		});

		//create demo location
		await req.prisma.location.create({
			data: {
				reservation_module: {
					connect: {
						reservation_module_id: reservationModule.reservation_module_id,
					},
				},
				name: 'Main Location',
				address: 'Testna ulica 123',
				working_days: [],
			},
		});

		//create demo service
		await req.prisma.service.create({
			data: {
				reservation_module: {
					connect: {
						reservation_module_id: reservationModule.reservation_module_id,
					},
				},
				name: { en: 'Test Service' },
				description: { en: 'This is a test service' },
				duration: 60,
				price_cents: 1000,
				employee: {
					connect: {
						employee_id: employee.employee_id,
					},
				},
			},
		});
		businessUsers.push({ businessUser });
		// TODO: select user to login,
		res.status(201).json({
			message: 'Business registered successfully',
			business,
			businessUsers,
		});
	} catch (error) {
		console.error('Error registering business:', error);
		res.status(400).json({ error: 'Error registering business', detail: error.message });
	}
}
/**
 * POST /auth/create/scheduled_user
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
	const { data, addresses } = req.body;
	try {
		let user = await UserDao.createNewUser(
			{
				...data,
			},
			true
		);
		let addressList = [];
		if (addresses) {
			for (const addressInfo of addresses) {
				const address = await AddressDao.addAddress(addressInfo);
				await AddressDao.addUserAddress(user.user_id, address.address_id);
				addressList.push(address);
			}
		}
		res.status(200).json({ user, addresses: addressList });
	} catch (e) {
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
	const { user_id, data, addresses } = req.body;
	const pass = data?.password;
	delete data?.password;
	let updatedData = data ? { ...data } : {};
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
		console.log(e);
		res.status(400).json({ error: 'Error updating user information', e });
	}
}
async function getMunicipalitiesWithLicenseRequirements(req, res) {
	try {
		let municipalities = await prisma.municipalities.findMany({
			where: {
				requires_license: true,
			},
			select: {
				municipalities_id: true,
				name: true,
			},
		});
		res.status(200).json(municipalities);
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error fetching municipalities', e });
	}
}
export { login };
export { register };
export { refreshToken };
export { requestPasswordReset };
export { passwordResetForm };
export { passwordReset };
export { registerTaxiService };
export { registerDeliveryService };
export { registerMerchantService };
export { registerBusiness };
export { createScheduledUser };
export { getScheduledUsers };
export { updateScheduledUser };
export { getMunicipalitiesWithLicenseRequirements };
export default {
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
	updateScheduledUser,
	getMunicipalitiesWithLicenseRequirements,
};
