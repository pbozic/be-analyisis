import fs from 'fs';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { BUSINESS_TYPE, COMPANY_ROLE } from '@prisma/client';

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
import elasticsearch from '../elasticsearch/index.js';
import prisma from '../prisma/prisma.js';
import ReservationModule from '../dao/reservation/ReservationModule.js';
import { bootstrapModuleNotifications } from '../lib/reservationNotifications.js';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const { businessIndex } = elasticsearch;
config();
/**
 * POST /auth/scheduled_users
 * @tag User
 * @summary Get scheduled users
 * @description Fetches all scheduled users.
 * @operationId getScheduledUsers
 * @response 200 - Successful operation. Returns scheduled users list.
 * @responseContent {object} 200.application/json
 * @response 500 - Server error. Returns error message on failure.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
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
 * @summary User login
 * @description Verifies user credentials and returns access and refresh tokens on success.
 * @operationId loginUser
 * @bodyDescription Email and password for verification.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Returns user details with tokens; also sets Authorization header.
 * @responseContent {object} 200.application/json
 * @responseHeader {string} 200.Authorization - Newly generated access token.
 * @response 400 - Wrong email/password combination or account disabled/inactive.
 * @response 500 - Server error.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model drivers (see ./prisma/schemas/transport.prisma)
 * @prisma_model vehicles (see ./prisma/schemas/transport.prisma)
 * @prisma_model delivery_drivers (see ./prisma/schema.prisma)
 * @prisma_model business_users (see ./prisma/schemas/base.prisma)
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model reservation_module (see ./prisma/schemas/reservation.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 * @prisma_model user_roles (see ./prisma/schemas/user.prisma)
 * @prisma_model user_favorite_businesses (see ./prisma/schemas/base.prisma)
 * @prisma_model referrals (see ./prisma/schemas/base.prisma)
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
				user_favorite_businesses: true,
				business_users: {
					include: {
						business: {
							include: {
								address: true,
								delivery_address: true,
								reservation_module: true,
							},
						},
						operating_address: true,
					},
				},
				profile_picture: true,
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
		user = {
			...user,
			access_token,
			refresh_token,
			payment_methods,
		};
		user.profile_picture = user.profile_picture.url;
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
 * @description Registers a new user and returns user info with tokens.
 * @operationId registerNewUser
 * @bodyDescription User registration payload.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User registered successfully. Returns user info and tokens.
 * @responseContent {object} 200.application/json
 * @responseHeader {string} 200.Authorization - Newly generated access token.
 * @response 400 - Error registering user.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model user_roles (see ./prisma/schemas/user.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
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
		const normalizedPhoneNumber = await SMSHelper.getParsedPhoneNumber(postData.telephone, countryCode);
		let userObj = {
			...postData,
			// telephone_number: normalizedPhoneNumber?.number || phoneNumber,
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
		delete userObj['telephone_number'];
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
 * @summary Refresh access token
 * @description Refreshes the user's access and refresh tokens.
 * @operationId refreshToken
 * @bodyDescription The refresh token of the user.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Tokens refreshed; returns user with new tokens and Authorization header.
 * @responseContent {object} 200.application/json
 * @responseHeader {string} 200.Authorization - Newly generated access token.
 * @response 400 - Access denied; no refresh token or unknown error.
 * @response 401 - Token expired.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model user_roles (see ./prisma/schemas/user.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model tokens (see ./prisma/schemas/base.prisma)
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
				console.error(error);
				return res.status(400).send('Access Denied. Unknown error.', error);
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
 * @description Generates and sends a password reset token to the user via email or SMS.
 * @operationId requestPasswordReset
 * @bodyDescription User email or telephone.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Password reset request processed; token sent if account is found.
 * @responseContent {object} 200.application/json
 * @response 400 - Error obtaining user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model tokens (see ./prisma/schemas/base.prisma)
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
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Taxi service registered successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error registering taxi service
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model drivers (see ./prisma/schemas/transport.prisma)
 * @prisma_model vehicle_drivers (see ./prisma/schemas/transport.prisma)
 * @prisma_model vehicles (see ./prisma/schemas/transport.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 * @prisma_model user_roles (see ./prisma/schemas/user.prisma)
 */
async function registerTaxiService(req, res) {
	//TODO: Update business creation by linking to transport_module
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
		await prisma.transport_module.create({
			data: {
				business: { connect: { business_id: business.business_id } },
			},
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
					// telephone_number: normalizedPhoneNumber?.number || phoneNumber,
					stripe_customer_id: stripeCustomer.id,
				};
				delete userObj.telephone_number;
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
						if (doc.documentData.document_type === 'PROFILE_PICTURE') {
							for (const file of doc.files) {
								let base64 = file.base64;
								delete file.base64;
								let fileData = await FileDao.createFile(
									file.file_type,
									file.mime_type,
									file.size,
									true
								);
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
									true
								);
								await UserDao.updateUser(newUser.user_id, {
									profile_picture: {
										connect: { profile_picture_id: fileData.file_id },
									},
								});
							}
						}
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
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Delivery service registered successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error registering delivery service
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model delivery_drivers (see ./prisma/schema.prisma)
 * @prisma_model vehicles (see ./prisma/schemas/transport.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 * @prisma_model user_roles (see ./prisma/schemas/user.prisma)
 */
async function registerDeliveryService(req, res) {
	//TODO: Update business creation by linking to transport_module
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
		await prisma.transport_module.create({
			data: {
				business: { connect: { business_id: business.business_id } },
			},
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
					// telephone_number: normalizedPhoneNumber?.number || phoneNumber,
					stripe_customer_id: stripeCustomer.id,
				};
				delete userObj.telephone_number;
				delete userObj.user_roles;
				const newUser = await UserDao.createNewUser(userObj, true);
				const userRoles = deliveryDriverInfo.user.data.user_roles || [
					{ role: deliveryDriverInfo.user.data.user_role || 'DELIVERY_DRIVER', primary: true },
				];
				await UserDao.linkRolesToUser(newUser?.user_id, userRoles);
				// Handle user documents
				if (deliveryDriverInfo.user?.documents) {
					for (const doc of deliveryDriverInfo.user.documents) {
						if (doc.documentData.document_type === 'PROFILE_PICTURE') {
							for (const file of doc.files) {
								let base64 = file.base64;
								delete file.base64;
								let fileData = await FileDao.createFile(
									file.file_type,
									file.mime_type,
									file.size,
									true
								);
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
									true
								);
								await UserDao.updateUser(newUser.user_id, {
									profile_picture: {
										connect: { profile_picture_id: fileData.file_id },
									},
								});
							}
						}
					}
				}
				const deliveryDriverData = { ...deliveryDriverInfo.driver.data, business_id: business.business_id };
				const deliveryDriver = await DeliveryDriverDao.createDriver(deliveryDriverData, newUser);
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
						await DocumentDao.linkDocumentToDriver(document.document_id, deliveryDriver.delivery_driver_id);
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
						await VehicleDao.assignVehicleToDriver(vehicle.vehicle_id, deliveryDriver.delivery_driver_id);
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
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Merchant service registered successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error registering merchant service
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model business_users (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 * @prisma_model menus (see ./prisma/schemas/delivery.prisma)
 */
async function registerMerchantService(req, res) {
	//TODO: Update business creation by linking to stores_module/food_drinks_module
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
		const businessType = req.body.business.type;
		delete req.body.business.type;
		const business = await BusinessDao.createNewBusiness({
			...req.body.business.data,
			stripe_customer_id: stripeCustomer.id,
		});
		if (businessType === 'FOOD_DRINKS') {
			await prisma.food_drinks_module.create({
				data: {
					business: { connect: { business_id: business.business_id } },
				},
			});
		} else if (businessType === 'STORES') {
			await prisma.stores_module.create({
				data: {
					business: { connect: { business_id: business.business_id } },
				},
			});
		}
		// Ensure at least one business user data is provided & created
		if (!Array.isArray(req.body.users) || !req.body.users.length) {
			return res.status(400).json({ error: 'At least one business user must be provided.' });
		}
		let businessUsers = [];
		for (const userInfo of req.body.users) {
			const userObj = userInfo.user;
			delete userObj.data.user_roles;
			const { user, businessUser } = await BusinessUsersDao.createBusinessUser(userObj, business.business_id);
			const userRoles = userInfo.user.data.user_roles || [
				{ role: userInfo.user.user_role || 'BUSINESS_USER', primary: true },
			];
			await UserDao.linkRolesToUser(user?.user_id, userRoles);
			let addresses = [];
			if (userInfo.user.addresses) {
				for (const addressInfo of userInfo.user.addresses) {
					const address = await AddressDao.addAddress(addressInfo);
					await AddressDao.addUserAddress(user?.user_id, address.address_id);
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
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Business registered successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error registering business
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model business_users (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 */
async function registerBusiness(req, res) {
	//TODO: Update business creation by linking to crm_module
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
			const { user, businessUser } = await BusinessUsersDao.createBusinessUser(userObj, business.business_id);
			const userRoles = userInfo.user.data.user_roles || [
				{ role: userInfo.user.user_role || 'BUSINESS_USER', primary: true },
			];
			await UserDao.linkRolesToUser(user?.user_id, userRoles);
			let addresses = [];
			if (userInfo.user.addresses) {
				for (const addressInfo of userInfo.user.addresses) {
					const address = await AddressDao.addAddress(addressInfo);
					await AddressDao.addUserAddress(user?.user_id, address.address_id);
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
- POST /reservation/auth/register
- @tag Auth
- @summary Register a new reservation business
- @description Registers a new reservation business and user. If the business exists, connects it with a reservation module. If not, creates the business and required business users. If the user exists, connects the user to the business; otherwise, creates a new user. Also creates demo employee, location, and service for the reservation module.
- @operationId registerReservationBusiness
- @bodyDescription The required data to register a new reservation business and user.
- @bodyContent {
	"userData": {
	  "email": "user@_example.com",
	  "password": "Password123!",
	  "registration_token": "optional-token",
	  "date_of_birth": "1990-01-01",
	  "telephone": "+123456789",
	  "telephone_number": "123456789",
	  "telephone_code": "+1"
	},
	"businessData": {
	  "business_id": "optional-business-id",
	  "name": "Business Name",
	  "email": "business@_example.com",
	  "telephone": "+123456789",
	  "telephone_number": "123456789",
	  "telephone_code": "+1",
	  "type": "RESERVATION",
	  "tax_id": "TAX123",
	  "registration_id": "REG123"
	},
	"plan": "optional-plan"
  } application/json
- @bodyRequired
- @response 201 - Business registered successfully
- @responseContent {object} 201.application/json
- @response 400 - Error registering business
- @prisma_model users (see ./prisma/schema.prisma)
- @prisma_model business (see ./prisma/schema.prisma)
- @prisma_model business_users (see ./prisma/schema.prisma)
- @prisma_model reservation_module (see ./prisma/schema.prisma)
*/
async function registerReservationBusiness(req, res) {
	//TODO: What do if MITM attack steals registration token?
	try {
		let transactionSucceeded = false;
		let business = null;
		let reservationModule = null;
		let adminUser = null;
		let stripeCustomer = null;
		await prisma.$transaction(
			async (tx) => {
				console.log(req.body);
				const { userData, businessData, plan_tag } = req.body;
				let existingUser = null;
				if (userData?.registration_token) {
					//TODO: validate token if given
					const token = await TokenDao.validateRegistrationSessionToken(userData.registration_token);
					if (!token) {
						console.error('Invalid registration token!');
						throw new Error('Invalid registration token!');
					}
					existingUser = token.users;
				} else {
					existingUser =
						(await UserDao.getUserByEmail(userData.email)) ||
						(await UserDao.getUserByTelephone(userData.telephone));
					console.log('existingUser:', existingUser?.email, existingUser?.telephone);
					if (existingUser) {
						console.error('User with this email/telephone already exists!');
						throw new Error('User with this email/telephone already exists!');
					}
				}
				let existingBusiness = null;
				if (businessData.business_id) {
					//TODO: check that business exists if given
					existingBusiness = await BusinessDao.getBusinessById(businessData.business_id);
					if (!existingBusiness) {
						console.error('Unknown business_id!');
						throw new Error('Unknown business_id!');
					}
					//TODO: check that user is admin in business if business given
					const isAdmin =
						existingBusiness.business_users.find((bu) => bu.user_id === existingUser.user_id)
							?.company_role === COMPANY_ROLE.DIRECTOR;
					if (!isAdmin) {
						console.error('You dont have the required permissions for this business!');
						throw new Error('You dont have the required permissions for this business!');
					}
					if (existingBusiness.reservation_module !== null) {
						console.error('This business is already connected to the reservation platform!');
						throw new Error('This business is already connected to the reservation platform!');
					}
				} else {
					existingBusiness = await BusinessDao.getBusinessByEmail(businessData.email);
					if (existingBusiness) {
						console.error('Business with this email already exists.');
						throw new Error('Business with this email already exists.');
						// return res.status(400).json({ error: 'Business with this email already exists.' });
					}
				}

				stripeCustomer = await stripe.createCustomer(
					businessData.email,
					businessData.business_name,
					businessData.business_telephone
				);
				const userCreationObj = existingUser
					? null
					: {
							email: userData.email,
							password: userData.password,
							user_role: 'ADMIN',
							telephone: userData.telephone || businessData.business_telephone,
							// telephone_number: userData.telephone_number || businessData.business_telephone_number,
							telephone_code: userData.telephone_code || businessData.business_telephone_code,
						};
				const businessCreationObj = existingBusiness
					? null
					: {
							name: businessData.name,
							email: businessData.email,
							telephone: businessData.telephone,
							// telephone_number: businessData.telephone_number,
							telephone_code: businessData.telephone_code,
							type: BUSINESS_TYPE.RESERVATION,
							tax_id: businessData.tax_id,
							registration_id: businessData.registration_id,
							stripe_customer_id: stripeCustomer.id,
						};

				business = existingBusiness || (await BusinessDao.createNewBusiness(businessCreationObj, tx));

				reservationModule = await ReservationModule.createReservationModule(business.business_id, tx);
				let businessUserData = null;
				if (existingUser) {
					const existingBusinessUser = await BusinessUsersDao.getBusinessUserByUserId(existingUser.user_id);
					if (!existingBusinessUser) {
						const { businessUser } = await BusinessUsersDao.createBusinessUser(
							existingUser,
							business.business_id,
							false,
							tx
						);
					}
					businessUserData = existingBusinessUser;
					adminUser = existingUser;
					// const userRoles = userData.user_roles || [
					// 	{ role: userObj.data.user_role || 'BUSINESS_USER', primary: true },
					// ];
					// await UserDao.linkRolesToUser(existingUser.user_id, userRoles, tx);
				} else {
					const { user, businessUser } = await BusinessUsersDao.createBusinessUser(
						{ data: userCreationObj },
						business.business_id,
						true,
						tx
					);
					businessUserData = businessUser;
					const userRoles = userCreationObj.user_roles || [
						{ role: userCreationObj.user_role || 'BUSINESS_USER', primary: true },
					];
					await UserDao.linkRolesToUser(user?.user_id, userRoles, tx);
					adminUser = user;
				}
				const permissions = await tx.permission.findMany({});
				const ROLES = [
					{
						name: 'Owner',
						isAdmin: true,
						permissions: [
							'view_dashboard',
							'manage_booking',
							'add_employee',
							'add_location',
							'add_service',
							'send_sms',
						],
					},
					{
						name: 'Manager',
						permissions: [
							'view_dashboard',
							'manage_booking',
							'add_employee',
							'add_location',
							'add_service',
						],
					},
					{ name: 'Employee', permissions: ['view_dashboard', 'manage_booking'] },
				];
				for (const role of ROLES) {
					const roleData = await tx.role.create({
						data: {
							business: {
								connect: {
									business_id: business.business_id,
								},
							},
							name: role.name,
							is_admin: role.isAdmin || false,
							module: 'reservations',
						},
					});
					for (const permissionName of role.permissions) {
						const permission = permissions.find((p) => p.name === permissionName);
						if (permission) {
							await tx.role_permissions.create({
								data: {
									role: {
										connect: {
											role_id: roleData.role_id,
										},
									},
									permission: {
										connect: {
											permission_id: permission.permission_id,
										},
									},
								},
							});
						}
					}
				}
				let userRole = await tx.role.findFirst({
					where: {
						business_id: business.business_id,
						is_admin: true,
					},
				});
				if (businessUserData && userRole) {
					await tx.user_role.create({
						data: {
							reservation_module: {
								connect: {
									reservation_module_id: reservationModule.reservation_module_id,
								},
							},
							role: {
								connect: {
									role_id: userRole.role_id,
								},
							},
							user: {
								connect: {
									user_id: businessUserData.user_id,
								},
							},
						},
					});
				}
				//create employee user
				let employee = await tx.employee.create({
					data: {
						business_user: {
							connect: {
								business_users_id: businessUserData.business_users_id,
							},
						},
						reservation_module: {
							connect: {
								reservation_module_id: reservationModule.reservation_module_id,
							},
						},
					},
				});
				let employeeAction = await tx.action.findFirst({
					where: {
						name: 'add_employee',
					},
				});
				await tx.business_usage.create({
					data: {
						action: {
							connect: {
								action_id: employeeAction.action_id,
							},
						},
						reservation_module: {
							connect: {
								reservation_module_id: reservationModule.reservation_module_id,
							},
						},
						used: 1,
					},
				});

				//create demo location
				await tx.location.create({
					data: {
						reservation_module: {
							connect: {
								reservation_module_id: reservationModule.reservation_module_id,
							},
						},
						name: 'Main Location',
						working_days: [],
					},
				});
				let locationAction = await tx.action.findFirst({
					where: {
						name: 'add_location',
					},
				});
				await tx.business_usage.create({
					data: {
						action: {
							connect: {
								action_id: locationAction.action_id,
							},
						},
						reservation_module: {
							connect: {
								reservation_module_id: reservationModule.reservation_module_id,
							},
						},
						used: 1,
					},
				});
				//create demo service
				let service = await tx.service.create({
					data: {
						reservation_module: {
							connect: {
								reservation_module_id: reservationModule.reservation_module_id,
							},
						},
						name: { en: 'Test Service' },
						description: { en: 'This is a test service' },
						duration_minutes: 60,
						price_cents: 1000,
					},
				});
				await tx.service_assignment.create({
					data: {
						employee: {
							connect: {
								employee_id: employee.employee_id,
							},
						},
						service: {
							connect: {
								service_id: service.service_id,
							},
						},
					},
				});
				transactionSucceeded = true;
			},
			{
				timeout: 15000, // 30 seconds
			}
		);

		// businessUsers.push({ businessUser: businessUserData });
		// TODO: select user to login,
		if (!transactionSucceeded && stripeCustomer?.id) {
			try {
				await stripe.customers.del(stripeCustomer.id);
			} catch (stripeError) {
				console.error('Failed to delete Stripe customer:', stripeError);
			}
		}
		await bootstrapModuleNotifications(reservationModule.reservation_module_id, null, adminUser.user_id);
		res.status(201).json({
			message: 'Business registered successfully',
			business,
			// businessUsers,
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
 * @bodyDescription Scheduled user data and optional addresses.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns created user and addresses.
 * @responseContent {object} 200.application/json
 * @response 500 - Server error.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
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
 * @summary Update a scheduled user's details
 * @description Updates a scheduled user's data and addresses.
 * @operationId updateScheduledUser
 * @bodyDescription user_id, data, and optional addresses array.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User updated successfully.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
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
/**
 * GET /auth/municipalities/license-required
 * @tag Regions
 * @summary List municipalities requiring license
 * @description Returns municipalities where requires_license is true.
 * @operationId getMunicipalitiesWithLicenseRequirements
 * @response 200 - Successful operation. Returns municipalities list.
 * @responseContent {object} 200.application/json
 * @response 400 - Error fetching municipalities.
 * @prisma_model municipalities (see ./prisma/schemas/base.prisma)
 */
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

/**
 * GET /auth/email_availability/{email}
 * @tag Authentication
 * @summary Check if an email is already taken
 * @description Checks if the provided email is already registered in the system.
 * @operationId checkEmailAvailability
 * @pathParam {string} email - Email to check
 * @response 200 - Returns the availability status for email.
 * @responseContent {object} 200.application/json
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function checkEmailAvailability(req, res) {
	try {
		const { email } = req.params;
		if (!email) {
			return res.status(400).json({ error: 'Email must be provided.' });
		}

		const userByEmail = await UserDao.getUserByEmail(email.toLowerCase());
		const emailTaken = !!userByEmail;

		return res.status(200).json({ emailTaken });
	} catch (error) {
		console.error('Error checking email availability:', error);
		return res.status(500).json({ error: 'Error checking email availability', detail: error.message });
	}
}

/**
 * GET /auth/telephone_availability/{telephone}
 * @tag Authentication
 * @summary Check if a telephone number is already taken
 * @description Checks if the provided telephone is already registered in the system.
 * @operationId checkTelephoneAvailability
 * @pathParam {string} telephone - Telephone to check
 * @response 200 - Returns the availability status for telephone.
 * @responseContent {object} 200.application/json
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function checkTelephoneAvailability(req, res) {
	try {
		const { telephone } = req.params;
		if (!telephone) {
			return res.status(400).json({ error: 'Telephone must be provided.' });
		}

		const userByPhone = await UserDao.getUserByTelephone(telephone);
		const telephoneTaken = !!userByPhone;

		return res.status(200).json({ telephoneTaken });
	} catch (error) {
		console.error('Error checking telephone availability:', error);
		return res.status(500).json({ error: 'Error checking telephone availability', detail: error.message });
	}
}

/**
 * POST /auth/registration-session/authenticate
 * @tag Authentication
 * @summary Authenticate registration session
 * @description Authenticates user credentials and generates a registration session token.
 * @operationId authenticateRegistrationSession
 * @bodyDescription Email and password for verification.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Returns registration session token.
 * @responseContent {object} 200.application/json
 * @response 400 - User not authenticated or invalid credentials.
 * @response 500 - Internal server error.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model tokens (see ./prisma/schemas/base.prisma)
 */
async function authenticateRegistrationSession(req, res) {
	try {
		if (!req.user) {
			return res.status(400).json({ error: 'User not authenticated.' });
		}

		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ error: 'Email and password are required.' });
		}

		const user = await UserDao.getUserByEmailOrTelephone(email.toLowerCase(), {
			select: { user_id: true, password: true },
		});

		if (!user) {
			return res.status(400).json({ error: 'Wrong email / password combination.' });
		}
		const correctPw = await bcrypt.compare(password, user.password);
		if (!correctPw) {
			return res.status(400).json({ error: 'Wrong email / password combination.' });
		}

		const token = await TokenDao.generateRegistrationSessionToken(user);

		return res.status(200).json(token);
	} catch (err) {
		console.error('Error authenticating registration session:', err);
		return res.status(500).json({ error: 'Internal server error.' });
	}
}

async function appleLoginPost(req, res) {
	const { token, jwt, code, state } = req.body;
	console.log('Apple login POST', jwt, token);
	try {
		let web = false;
		let decodedToken;
		if (code) {
			console.log('Apple login POST web', code);
			web = true;
			const tokenResponse = await axios.post(
				'https://appleid.apple.com/auth/token',
				new URLSearchParams({
					client_id: process.env.APPLE_SIGN_IN_CLIENT_ID, // Your Apple Service ID
					client_secret: generateAppleClientSecret(), // Generated Apple Client Secret
					code: code,
					grant_type: 'authorization_code',
					redirect_uri: process.env.APPLE_REDIRECT_URI,
				}).toString(),
				{
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				}
			);
			const { id_token, access_token } = tokenResponse.data;
			// Verify the Apple ID token (with web=true)
			decodedToken = await verifyAppleToken(id_token, true);
		} else {
			console.log('Apple login POST app', jwt);
			decodedToken = await verifyAppleToken(jwt);
		}
		// Decode the Apple ID token
		console.log('Apple Decoded', decodedToken);
		appleId = token || decodedToken.sub;
		// Check if the user already exists in the database
		let user = await prisma.users.findMany({
			where: { apple_id: appleId },
		});
		if (user.length > 0) {
			user = await getUser(user[0].user_id, res);
			if (web) {
				return res.redirect(`${process.env.FRONTEND_URL}/#apple-login?jwt=${user.access_token}`);
				// If the user exists, generate a JWT token and return it
			}
			return res.json(user);
		}
		// If the user does not exist, return the auth data (no JWT token)
		if (!web) {
			return res.json({
				message: 'User not found',
				email: decodedToken.email,
			});
		}
		if (user.length > 0) {
			// User exists, generate session/token & redirect to frontend
		}
		// If user does not exist, return authentication data
		return res.redirect(`${process.env.FRONTEND_URL}/#register?apple_id=${appleId}&email=${decodedToken.email}`);
	} catch (error) {
		console.error('Apple token verification error:', error);
		if (web) return res.redirect(`${process.env.FRONTEND_URL}/#register?error="apple"`);
		res.status(500).send('Error during authentication');
	}
}

async function appleLoginWebGet(req, res) {
	const { code, state } = req.query;
	console.log('Apple login web GET', code, state);
	if (!code) {
		return res.status(400).json({ error: 'Missing authorization code' });
	}
	try {
		// Exchange authorization code for access token
		const tokenResponse = await axios.post(
			'https://appleid.apple.com/auth/token',
			new URLSearchParams({
				client_id: process.env.APPLE_SIGN_IN_CLIENT_ID, // Your Apple Service ID
				client_secret: generateAppleClientSecret(), // Generated Apple Client Secret
				code: code,
				grant_type: 'authorization_code',
				redirect_uri: process.env.APPLE_REDIRECT_URI,
			}).toString(),
			{
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			}
		);
		const { id_token, access_token } = tokenResponse.data;
		// Verify the Apple ID token (with web=true)
		const decodedToken = await verifyAppleToken(id_token, true);
		console.log('Verified Apple User:', decodedToken);
		// Check if user exists in DB
		let user = await prisma.users.findFirst({
			where: { apple_id: appleId },
		});
		if (user) {
			// User exists, generate session/token & redirect to frontend
			const jwtToken = generateAccessToken(user[0].user_id); // Your JWT generator function
			return res.redirect(`${process.env.FRONTEND_URL}/#register?jwt=${jwtToken}`);
		}
		// If user does not exist, return authentication data
		return res.redirect(`${process.env.FRONTEND_URL}/#register?apple_id=${appleId}&email=${email}`);
	} catch (error) {
		console.error('Apple authentication error:', error.response?.data || error);
		return res.redirect(`${process.env.FRONTEND_URL}/#register?error="apple"`);
	}
}

async function googleLogin(req, res) {
	const { token } = req.body;
	try {
		// Verify the Google ID token
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID,
		});
		const payload = ticket.getPayload();
		const googleId = payload.sub;
		const email = payload.email;
		const firstName = payload.given_name;
		const lastName = payload.family_name;
		// Check if the user already exists in the database
		let user = await prisma.users.findMany({
			where: { google_id: googleId },
		});
		if (user.length > 0) {
			// If the user exists, generate a JWT token and return it
			let usr = await getUser(user[0].user_id, res);
			res.json(usr);
			return;
		}
		// If the user does not exist, return the auth data (no JWT token)
		return res.json({
			message: 'User not found',
			user: {
				google_id: googleId,
				email,
				first_name: firstName,
				last_name: lastName,
			},
		});
	} catch (error) {
		console.error('Error verifying Google token:', error);
		res.status(500).send('Error during authentication');
	}
}

const verifyAppleToken = async (identityToken, web = false) => {
	try {
		// Fetch Apple's public keys
		const response = await axios.get('https://appleid.apple.com/auth/keys');
		const applePublicKeys = response.data.keys;
		// Decode JWT header to get the key ID (kid)
		const decodedHeader = jwt.decode(identityToken, { complete: true });
		if (!decodedHeader) throw new Error('Invalid Apple ID token.');
		const { kid } = decodedHeader.header;
		// Find the corresponding public key based on the `kid`
		const applePublicKey = applePublicKeys.find((key) => key.kid === kid);
		if (!applePublicKey) throw new Error('Apple public key not found.');
		// Convert the public key to PEM format
		const pem = jwkToPem(applePublicKey);
		// Define verification options
		let verifyOptions = { algorithms: ['RS256'] };
		if (web) {
			// Additional verification for web authentication
			verifyOptions.issuer = 'https://appleid.apple.com'; // Ensure token is from Apple
			verifyOptions.audience = process.env.APPLE_SIGN_IN_CLIENT_ID; // Your Apple Service/App ID
		}
		// Verify the JWT
		const decoded = jwt.verify(identityToken, pem, verifyOptions);
		console.log('Decoded Apple token:', decoded);
		return decoded;
	} catch (error) {
		console.error('Error verifying Apple token:', error);
		throw error;
	}
};
const generateAppleClientSecret = () => {
	const privateKey = fs.readFileSync(process.env.APPLE_P8_PATH, 'utf8'); // Load from secure storage
	const teamId = process.env.APPLE_TEAM_ID;
	const clientId = process.env.APPLE_SIGN_IN_CLIENT_ID;
	const keyId = process.env.APPLE_KEY_ID;
	const token = jwt.sign({}, privateKey, {
		algorithm: 'ES256',
		expiresIn: '180d', // 180 days expiry
		audience: 'https://appleid.apple.com',
		issuer: teamId,
		subject: clientId,
		keyid: keyId,
	});
	console.log('New APPLE_CLIENT_SECRET:', token);
	return token;
};

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
export { checkEmailAvailability };
export { checkTelephoneAvailability };
export { authenticateRegistrationSession };
export { appleLoginPost };
export { appleLoginWebGet };
export { googleLogin };
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
	registerReservationBusiness,
	createScheduledUser,
	getScheduledUsers,
	updateScheduledUser,
	getMunicipalitiesWithLicenseRequirements,
	checkEmailAvailability,
	checkTelephoneAvailability,
	authenticateRegistrationSession,
	appleLoginPost,
	appleLoginWebGet,
	googleLogin,
};
