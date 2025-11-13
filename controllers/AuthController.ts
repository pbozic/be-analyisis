import fs from 'fs';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { BUSINESS_TYPE, COMPANY_ROLE, MODULE, Prisma } from '@prisma/client';
import axios from 'axios';
import { OAuth2Client } from 'google-auth-library';
import jwkToPem from 'jwk-to-pem';
import type { Response } from 'express';

import UserDao from '../dao/User.js';
import { generateAccessToken, generateRefreshToken } from '../lib/jwt.js';
import TokenDao from '../dao/Token.js';
import BusinessDao from '../dao/Business.js';
import AddressDao from '../dao/Address.js';
import DriverDao from '../dao/Driver.js';
import VehicleDao from '../dao/Vehicle.js';
import DocumentDao from '../dao/Document.js';
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
import { ValidatedRequest } from '../types/validatedRequest.ts';
import type {
	LoginRequest,
	RegisterUserRequest,
	RefreshTokenRequest,
	RequestPasswordResetRequest,
	PasswordResetRequest,
	RegisterTransportServiceRequest,
	RegisterMerchantServiceRequest,
	RegisterBusinessRequest,
	RegisterReservationBusinessRequest,
	AuthenticateRegistrationSessionRequest,
	AppleLoginRequest,
	GoogleLoginRequest,
	CreateUser,
} from '../schemas/dto/Auth/AuthRequest.dto.ts';
import { AuthUserResponse } from '../schemas/dto/Auth/AuthResponse.dto.ts';
import { DriverDetail } from '../schemas/dto/Driver/index.js';
import { UserBase } from '../schemas/dto/User/index.ts';
import { CreateBusinessUser } from '../schemas/dto/BusinessUser/businessUser.ts';
import { BusinessWithAllModulesResponse } from '../schemas/dto/Business/index.ts';
import { BusinessResponse } from '../schemas/dto/Business/business.ts';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const { businessIndex } = elasticsearch;
config();

/**
 * Internal helper to assemble full user payload with tokens and payment methods
 *
 * @param {string} userId - The ID of the user to retrieve
 * @returns {Promise<AuthUserResponse>} User object with tokens and payment methods
 */
async function getUserWithTokens(userId: string): Promise<AuthUserResponse> {
	const user = await UserDao.getUserByIdForLogin(userId);
	if (user?.disabled) throw new Error('Account is disabled.');
	if (!user?.active) throw new Error('Account is inactive.');
	let payment_methods: any[] = [];
	if (user?.stripe_customer_id) {
		payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
	}
	delete (user as any)['password'];
	const access_token = generateAccessToken({ user_id: user.user_id });
	const refresh_token = generateRefreshToken({ user_id: user.user_id });
	return {
		...user,
		access_token,
		refresh_token,
		payment_methods,
		profile_picture: (user as any).profile_picture?.url,
	};
}

/**
 * POST /auth/login
 * @tag Authentication
 * @summary User login
 * @description Verifies user credentials and returns access and refresh tokens on success.
 * @operationId loginUser
 * @bodyDescription Email and password for verification.
 * @bodyContent {LoginRequest} application/json
 * @bodyRequired
 * @response 200 - Returns user details with tokens; also sets Authorization header.
 * @responseContent {AuthUserResponse} 200.application/json
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
async function login(req: ValidatedRequest<LoginRequest>, res: Response) {
	let postData = req.body;
	try {
		let userPass = await UserDao.getUserPassword(postData.email.toLowerCase());
		if (!userPass) {
			res.status(400).json({ error: 'Wrong email / password combination..' });
			return;
		}
		let correctPw = await bcrypt.compare(postData.password, userPass.password);
		if (!correctPw) {
			res.status(400).json({ error: 'Wrong email / password combination..' });
			return;
		}
		const user = await UserDao.getUserByIdForLogin(userPass.user_id);
		if (user?.disabled) return res.status(400).json({ error: 'Account is disabled.' });
		if (!user?.active) return res.status(400).json({ error: 'Account is inactive.' });
		let payment_methods: any[] = [];
		if (user?.stripe_customer_id) {
			payment_methods = await stripe.getPaymentMethods(user.stripe_customer_id);
		}
		delete (user as any)['password'];
		const access_token = generateAccessToken({
			user_id: user.user_id,
		});
		const refresh_token = generateRefreshToken({
			user_id: user.user_id,
		});
		res.status(200)
			.header('Authorization', access_token)
			.json({
				...user,
				access_token,
				refresh_token,
				payment_methods,
				profile_picture: (user as any).profile_picture.url,
			});
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
 * @bodyContent {RegisterUserRequest} application/json
 * @bodyRequired
 * @response 200 - User registered successfully. Returns user info and tokens.
 * @responseContent {AuthUserResponse} 200.application/json
 * @responseHeader {string} 200.Authorization - Newly generated access token.
 * @response 400 - Error registering user.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model user_roles (see ./prisma/schemas/user.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 */
async function register(req: ValidatedRequest<RegisterUserRequest>, res: Response) {
	let postData = req.body;
	try {
		if (!postData.email) {
			postData.email = '';
		}
		postData.email = postData.email?.toLowerCase();
		let UserExistsPhone = await UserDao.getUserByTelephone(postData.telephone);
		if (UserExistsPhone) {
			res.status(400).json({ error: 'Telephone already in use!' });
			return;
		}
		let UserExistsEmail = await UserDao.getUserByEmail(postData.email as string);
		if (UserExistsEmail) {
			res.status(400).json({ error: 'Email already in use!' });
			return;
		}
		let stripeCustomer = await stripe.createCustomer(
			postData.email,
			postData.first_name + ' ' + postData.last_name,
			postData.telephone
		);
		const userRole = postData.user_role || 'PERSONAL';
		const userRoles = postData.user_roles || [{ role: userRole, primary: true }];
		// const countryCode = postData.telephone_code;
		// const phoneNumber = postData.telephone_number;
		// const normalizedPhoneNumber = await SMSHelper.getParsedPhoneNumber(postData.telephone, countryCode);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		let { confirm_password, telephone_number, referral_code, user_roles, ...userObj } = postData;
		userObj = {
			...userObj,
			user_role: userRole,
			stripe_customer_id: stripeCustomer.id,
			apple_id: postData.apple_id || undefined,
			google_id: postData.google_id || undefined,
		} as CreateUser;
		let user = await UserDao.createNewUser(userObj, true);
		await UserDao.linkRolesToUser(user?.user_id, userRoles);
		delete (user as any)['password'];
		const access_token = generateAccessToken({
			user_id: user.user_id,
		});
		const refresh_token = generateRefreshToken({
			user_id: user.user_id,
		});
		res.status(200)
			.header('Authorization', access_token)
			.json({
				...user,
				access_token,
				refresh_token,
			});
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
 * @bodyContent {RefreshTokenRequest} application/json
 * @bodyRequired
 * @response 200 - Tokens refreshed; returns user with new tokens and Authorization header.
 * @responseContent {RefreshUserResponse} 200.application/json
 * @responseHeader {string} 200.Authorization - Newly generated access token.
 * @response 400 - Access denied; no refresh token or unknown error.
 * @response 401 - Token expired.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model user_roles (see ./prisma/schemas/user.prisma)
 * @prisma_model user_address (see ./prisma/schemas/base.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model tokens (see ./prisma/schemas/base.prisma)
 */
async function refreshToken(req: ValidatedRequest<RefreshTokenRequest>, res: Response) {
	const refreshToken = req.body.refresh_token;
	if (!refreshToken) {
		res.status(400).json('Access Denied. No refresh token provided.');
		return;
	}
	try {
		jwt.verify(refreshToken, process.env.JWT_TOKEN_SECRET as string, async function (err: any, decoded: any) {
			try {
				if (err) {
					res.status(401).json({ error: 'Access Denied. Token expired.', e: err });
					return;
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
				delete (userDb as any)['password'];
				let user = {
					...userDb,
					access_token,
					refresh_token,
				};
				res.status(200).header('Authorization', access_token).json(user);
			} catch (error: unknown) {
				console.error(error);
				return res.status(400).send('Access Denied. Unknown error.');
			}
		});
	} catch (error: unknown) {
		console.error(error);
		return res.status(400).send('Access Denied. Unknown error.');
	}
}

/**
 * POST /auth/reset-password
 * @tag Authentication
 * @summary Request a password reset
 * @description Generates and sends a password reset token to the user via email or SMS.
 * @operationId requestPasswordReset
 * @bodyDescription User email or telephone.
 * @bodyContent {RequestPasswordResetRequest} application/json
 * @bodyRequired
 * @response 200 - Password reset request processed; token sent if account is found.
 * @responseContent {SuccessMessage} 200.application/json
 * @response 400 - Error obtaining user information.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model tokens (see ./prisma/schemas/base.prisma)
 */
async function requestPasswordReset(req: ValidatedRequest<RequestPasswordResetRequest>, res: Response) {
	try {
		const user = await UserDao.getUserByEmailOrTelephone((req.body.email || req.body.telephone) as string);
		let token = await TokenDao.generatePasswordResetToken(user?.user_id as string);
		if (req.body.email && user?.email) {
			let settings = {
				name: user.first_name,
				title: 'Password Reset Request',
				resetLink: process.env.LINK_BASE_URL + '/reset-password/' + token.token,
			};
			EmailHelper.sendEmailTemplate('Password Reset Request', 'passwordReset', user?.email, settings);
		} else if (req.body.telephone && user?.telephone) {
			await SMSHelper.sendSMSPasswordReset(
				user?.telephone,
				'Your password reset link is: ' + process.env.LINK_BASE_URL + '/reset-password/' + token.token
			);
		} else {
			res.status(400).send('Error obtaining user email or telephone');
		}
		res.status(200).send('Password reset request processed. A token is sent to the user if the account is found.');
	} catch (e: unknown) {
		console.log(e);
		res.status(400).json({ error: 'Error obtaining user information', e });
	}
}

/**
 * GET /auth/reset-password/:token
 * @tag Authentication
 * @summary Render password reset form
 * @description Renders the password reset form if the token is valid.
 * @operationId renderPasswordResetForm
 * @pathParam {string} token - Password reset token
 * @response 200 - Renders the password reset form.
 * @response 400 - Invalid or expired token.
 * @response 500 - Internal server error.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model tokens (see ./prisma/schemas/base.prisma)
 */
async function passwordResetForm(req: ValidatedRequest<never, { token: string }>, res: Response) {
	const token = req.params.token;
	try {
		let tkn = await UserDao.getUserByResetToken(token);
		console.log(tkn);
		if (!tkn && !(tkn as any).users) {
			return res.status(400).send('Invalid or expired token');
		}
		res.render('resetPasswordForm', { token });
	} catch (error) {
		console.error('Error fetching user by reset token:', error);
		res.status(500).send('Internal Server Error');
	}
}

/**
 * POST /auth/reset-password/:token
 * @tag Authentication
 * @summary Handle password reset
 * @description Resets the user's password if the token is valid and passwords match the criteria.
 * @operationId handlePasswordReset
 * @pathParam {string} token - Password reset token
 * @bodyDescription New password and confirmation.
 * @bodyContent {PasswordResetRequest} application/json
 * @bodyRequired
 * @response 200 - Renders password reset success page.
 * @response 400 - Invalid or expired token, password criteria not met, or passwords do not match.
 * @response 500 - Internal server error.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model tokens (see ./prisma/schemas/base.prisma)
 */
async function passwordReset(req: ValidatedRequest<PasswordResetRequest, { token: string }>, res: Response) {
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
		await UserDao.updateUserPassword((user as any).user_id, hash);
		let tokenObj = await TokenDao.getPasswordToken(token);
		await TokenDao.updateToken((tokenObj as any).token_id, { active: false });
		res.status(200).render('passwordResetSuccess'); // Render the success template
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /transport/auth/register
 * @tag Auth
 * @summary Register a new transport service
 * @description If the business already exists, attaches/initializes the Transport module on it and adds drivers/vehicles; otherwise creates the business first, then adds the module and entities.
 * @operationId registerTransportService
 * @bodyContent {RegisterTaxiServiceRequest} application/json
 * @bodyRequired
 * @response 201 - Transport service registered successfully
 * @responseContent {RegisterBusinessResponse} 201.application/json
 * @response 400 - Error registering transport service
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model drivers (see ./prisma/schemas/transport.prisma)
 * @prisma_model vehicle_drivers (see ./prisma/schemas/transport.prisma)
 * @prisma_model vehicles (see ./prisma/schemas/transport.prisma)
 * @prisma_model transport_module (see ./prisma/schemas/transport.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 * @prisma_model user_roles (see ./prisma/schemas/user.prisma)
 */
async function registerTransportService(req: ValidatedRequest<RegisterTransportServiceRequest>, res: Response) {
	fs.writeFileSync('transport-service.json', JSON.stringify(req.body, null, 2));
	try {
		let business: BusinessWithAllModulesResponse | null = null;
		let transactionSucceeded: boolean = false;
		let stripeCustomerId: string | null = null;
		const s3Uploads: Array<{
			key: string;
			base64: string;
			mime: string;
			access: any;
			fileData: any;
			isPublic: boolean;
		}> = [];

		await prisma.$transaction(
			async (tx: Prisma.TransactionClient) => {
				if (req.body.business) {
					const b = req.body.business;
					if (b.business_id) {
						business = await BusinessDao.getBusinessById(b.business_id);
						if (!business) throw new Error('Unknown business_id');
					} else if (b.email) {
						business = (await BusinessDao.getBusinessByEmail(b.email)) || null;
					}
				}
				const stripeCustomer = await stripe.createCustomer(
					req.body.business.email,
					req.body.business.name,
					req.body.business.telephone
				);
				stripeCustomerId = stripeCustomer.id;

				if (!business) {
					business = (await BusinessDao.createNewBusiness(
						{
							...req.body.business,
							stripe_customer_id: stripeCustomerId,
						},
						tx
					)) as any;
				} else if (!business.stripe_customer_id && stripeCustomerId) {
					await BusinessDao.updateBusiness(
						business.business_id,
						{ stripe_customer_id: stripeCustomerId },
						tx
					);
					business.stripe_customer_id = stripeCustomerId;
				}
				// Create transport module only if it does not exist
				const existingTransport = await tx.transport_module.findFirst({
					where: { business_id: business?.business_id },
				});
				let module_id;
				if (!existingTransport) {
					const module = await tx.transport_module.create({
						data: {
							business: { connect: { business_id: business?.business_id } },
						},
					});
					module_id = module?.transport_module_id;
				} else {
					module_id = existingTransport.transport_module_id;
				}
				const drivers = [];
				if (Array.isArray(req.body.drivers) && req.body.drivers.length) {
					for (const driverInfo of req.body.drivers) {
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						let { confirm_password, telephone_number, user_roles, ...userObj } = driverInfo.user.data;
						const driverData = { ...driverInfo.driver.data, transport_module_id: module_id };
						const driver = await DriverDao.createNewDriver(driverData, userObj);
						const regions = driverInfo.driver.regions || [];
						await DriverDao.addDriverMunicipalities(driver.driver_id, regions);
						// Handle taxi documents
						if (driverInfo.driver.documents) {
							for (const doc of driverInfo.driver.documents) {
								const document = await DocumentDao.createDocument(doc.documentData);
								for (const file of doc.files) {
									let base64 = file.base64;
									delete (file as any).base64;
									let fileData = await FileDao.addFileToDocument(
										document.document_id,
										file as any,
										(document as any).public
									);
									let key = S3Helper.getFileKey(fileData.file_id, (file as any).mime_type);
									s3Uploads.push({
										key,
										base64,
										mime: (file as any).mime_type,
										access: { users: [driver.user_id], businesses: [business?.business_id] },
										fileData,
										isPublic: (document as any).public,
									});
								}
								await DocumentDao.linkDocumentToDriver(document.document_id, driver.driver_id);
							}
						}
						//TODO: Handle addresses of the driver
						let addresses: any[] = [];
						drivers.push({ driver, addresses });
					}
				}
				const vehicles = [];
				if (Array.isArray(req.body.vehicles) && req.body.vehicles.length) {
					for (const vehicleInfo of req.body.vehicles) {
						const vehicle = await VehicleDao.createVehicle({
							...vehicleInfo.data.vehicle_information,
							transport_module_id: module_id,
						});
						if (Array.isArray(vehicleInfo?.data?.drivers) && vehicleInfo?.data?.drivers.length) {
							for (const email of vehicleInfo.data.drivers) {
								const driver = drivers.find(
									(d: { driver: DriverDetail; addresses: any[] }) => d.driver?.user?.email === email
								);
								await VehicleDao.assignVehicleToDriver(
									vehicle.vehicle_id,
									driver?.driver?.driver_id as string
								);
							}
						} else {
							await VehicleDao.assignVehicleToDriver(
								vehicle.vehicle_id,
								drivers[0]?.driver?.driver_id as string
							);
						}
						// Handle vehicle documents
						if ((vehicleInfo as any)?.data?.documents) {
							for (const doc of (vehicleInfo as any).data.documents) {
								const document = await DocumentDao.createDocument(doc.documentData);
								for (const file of doc.files) {
									let base64 = file.base64;
									delete (file as any).base64;
									let fileData = await FileDao.addFileToDocument(
										document.document_id,
										file as any,
										(document as any).public
									);
									let key = S3Helper.getFileKey(fileData.file_id, (file as any).mime_type);
									s3Uploads.push({
										key,
										base64,
										mime: (file as any).mime_type,
										access: { users: [], businesses: [business?.business_id] },
										fileData,
										isPublic: (document as any).public,
									});
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
						const document = await DocumentDao.createDocument(doc as any);
						for (const file of (doc as any).files) {
							let base64 = file.base64;
							delete (file as any).base64;
							let fileData = await FileDao.addFileToDocument(
								document.document_id,
								file as any,
								(document as any).public
							);
							let key = S3Helper.getFileKey(fileData.file_id, (file as any).mime_type);
							s3Uploads.push({
								key,
								base64,
								mime: (file as any).mime_type,
								access: { users: [], businesses: [business?.business_id] },
								fileData,
								isPublic: (document as any).public,
							});
						}
						await DocumentDao.linkDocumentToBusiness(document.document_id, business?.business_id as string);
					}
				}
				if (req.body.addresses?.business) {
					await AddressDao.addOrLinkAddress(
						req.body.addresses.business,
						'businesses',
						business?.business_id as string
					);
				}
				if (business) {
					// Ensure Stripe connect account exists and send onboarding link
					let accountLink = null;
					if (!business.stripe_account_id) {
						const stripeAccount = await stripe.createAccount({
							business_id: business.business_id,
							email: business.email,
							telephone: business.telephone,
							name: business.business_details?.name as string,
							tax_id: business.tax_id,
							registration_id: business.registration_id,
							stripe_customer_id: business.stripe_customer_id,
						});
						await BusinessDao.updateBusiness(business.business_id, { stripe_account_id: stripeAccount.id });
						business.stripe_account_id = stripeAccount.id;
					}
					accountLink = await stripe.getAccountLinks(business.stripe_account_id, business.business_id);
					EmailHelper.sendEmailTemplate('Stripe Onboarding', 'stripeOnboarding', business.email, {
						name: business.business_details?.name,
						title: 'Stripe Onboarding',
						onboardLink: accountLink.url,
					});
				}
				transactionSucceeded = true;
			},
			{ timeout: 15000 }
		);

		if (!transactionSucceeded && stripeCustomerId) {
			try {
				await stripe.deleteStripeCustomer(stripeCustomerId);
			} catch (stripeError) {
				console.error('Failed to delete Stripe customer:', stripeError);
			}
		}

		// Perform S3 uploads after transaction commit
		for (const u of s3Uploads) {
			await S3Helper.SaveObject(u.key, u.base64, u.mime, u.access, u.fileData, u.isPublic);
		}

		res.status(201).json({
			message: 'Transport service business registered successfully',
			business,
		});
	} catch (error: unknown) {
		console.error('Error registering transport service:', error);
		res.status(400).json({ error: 'Error registering transport service', detail: (error as Error).message });
	}
}

/**
 * POST /merchant/auth/register
 * @tag Auth
 * @summary Register a new merchant service
 * @description If the business already exists, attaches/initializes either the Stores or Food & Drinks module based on type; otherwise creates the business then the module. Adds business users and documents.
 * @operationId registerMerchantService
 * @bodyContent {RegisterMerchantServiceRequest} application/json
 * @bodyRequired
 * @response 201 - Merchant service registered successfully
 * @responseContent {RegisterBusinessResponse} 201.application/json
 * @response 400 - Error registering merchant service
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model business_users (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 * @prisma_model menus (see ./prisma/schemas/delivery.prisma)
 * @prisma_model stores_module (see ./prisma/schemas/delivery.prisma)
 * @prisma_model food_drinks_module (see ./prisma/schemas/delivery.prisma)
 */
async function registerMerchantService(req: ValidatedRequest<RegisterMerchantServiceRequest>, res: Response) {
	try {
		let business: BusinessWithAllModulesResponse | null = null;
		let transactionSucceeded: boolean = false;
		let stripeCustomerId: string | null = null;
		const s3Uploads: Array<{
			key: string;
			base64: string;
			mime: string;
			access: any;
			fileData: any;
			isPublic: boolean;
		}> = [];

		await prisma.$transaction(
			async (tx: Prisma.TransactionClient) => {
				if (req.body.business) {
					const b = req.body.business;
					if (b.data.business_id) {
						business = await BusinessDao.getBusinessById(b.data.business_id);
						if (!business) throw new Error('Unknown business_id');
					} else if (b.data.email) {
						business = await BusinessDao.getBusinessByEmail(b.data.email);
					}
				}

				const stripeCustomer = await stripe.createCustomer(
					req.body.business.data?.email,
					req.body.business.data?.name,
					req.body.business.data?.telephone
				);
				stripeCustomerId = stripeCustomer.id;
				const businessTypes = req.body.business?.types || [];
				delete req.body.business.types;
				if (!business) {
					business = await BusinessDao.createNewBusiness(
						{
							...req.body.business.data,
							stripe_customer_id: stripeCustomerId,
						},
						tx
					);
				} else if (!business.stripe_customer_id) {
					await BusinessDao.updateBusiness(
						business.business_id,
						{ stripe_customer_id: stripeCustomerId },
						tx
					);
				}

				// Link modules
				await BusinessDao.linkDeliveryModulesToBusiness(business.business_id, businessTypes, tx);

				const businessUsers = [];
				for (const userInfo of req.body.users) {
					const userObj = userInfo.user.data;
					delete userObj.user_roles;
					const { businessUser } = await BusinessUsersDao.createBusinessUser(
						{ ...userObj, company_role: userObj.user_role || 'ADMIN' } as CreateBusinessUser,
						business.business_id,
						true,
						tx
					);
					businessUsers.push(businessUser);
				}

				// Handle business documents
				if (req.body.business.documents) {
					for (const doc of req.body.business.documents) {
						//TODO: handle logo/banner per module
						if ((doc as any).documentData.document_type === 'LOGO') {
							for (const file of (doc as any).files) {
								const b64 = (file as any).base64;
								delete (file as any).base64;
								const fileData = await FileDao.createFile(
									(file as any).file_type,
									(file as any).mime_type,
									true,
									tx
								);
								await tx.business_details.update({
									where: { business_id: business.business_id },
									data: {
										logo: { connect: { logo_id: fileData.file_id } },
									},
								});
								const key = S3Helper.getFileKey(fileData.file_id, (file as any).mime_type);
								s3Uploads.push({
									key,
									base64: b64,
									mime: (file as any).mime_type,
									access: { businesses: [business.business_id] },
									fileData,
									isPublic: true,
								});
							}
							continue;
						}
						if ((doc as any).documentData.document_type === 'BANNER') {
							for (const file of (doc as any).files) {
								const b64 = (file as any).base64;
								delete (file as any).base64;
								const fileData = await FileDao.createFile(
									(file as any).file_type,
									(file as any).mime_type,
									true,
									tx
								);
								await tx.business_details.update({
									where: { business_id: business.business_id },
									data: {
										banner: { connect: { banner_id: fileData.file_id } },
									},
								});
								const key = S3Helper.getFileKey(fileData.file_id, (file as any).mime_type);
								s3Uploads.push({
									key,
									base64: b64,
									mime: (file as any).mime_type,
									access: { businesses: [business.business_id] },
									fileData,
									isPublic: true,
								});
							}
							continue;
						}

						const document = await DocumentDao.createDocument((doc as any).documentData, [], tx);
						for (const file of (doc as any).files) {
							const b64 = (file as any).base64;
							delete (file as any).base64;
							const fileData = await FileDao.addFileToDocument(
								(document as any).document_id,
								file as any,
								(document as any).public,
								tx
							);
							const key = S3Helper.getFileKey(fileData.file_id, (file as any).mime_type);
							s3Uploads.push({
								key,
								base64: b64,
								mime: (file as any).mime_type,
								access: { businesses: [business.business_id] },
								fileData,
								isPublic: (document as any).public,
							});
						}
						await DocumentDao.linkDocumentToBusiness(
							(document as any).document_id,
							business.business_id,
							tx
						);
					}
				}

				// Addresses
				if (req.body.addresses && req.body.addresses.business) {
					await AddressDao.addOrLinkAddress(
						req.body.addresses.business,
						'businesses',
						business.business_id,
						tx
					);
				}
				if (req.body.addresses && req.body.addresses.delivery) {
					await AddressDao.addOrLinkAddress(
						req.body.addresses.delivery,
						'business_delivery',
						business.business_id,
						tx
					);
				}

				// Create menus based on types
				if (businessTypes?.includes(MODULE.STORES)) {
					const stores = await tx.stores_module.findFirst({ where: { business_id: business.business_id } });
					if (stores?.stores_id) await MenuDao.createStoreMenu(stores.stores_id, tx);
				}
				if (businessTypes?.includes(MODULE.FOOD_DRINKS)) {
					const fd = await tx.food_drinks_module.findFirst({ where: { business_id: business.business_id } });
					if (fd?.food_drinks_id) await MenuDao.createFoodDrinksMenu(fd.food_drinks_id, tx);
				}

				let accountLink: any = null;
				if (business && !business.stripe_account_id) {
					const stripeAccount = await stripe.createAccount({
						...business,
						name: business.business_details?.name as string,
					});
					await BusinessDao.updateBusiness(business.business_id, { stripe_account_id: stripeAccount.id });
					business.stripe_account_id = stripeAccount.id;
				}
				if (business) {
					accountLink = await stripe.getAccountLinks(
						business.stripe_account_id as string,
						business.business_id
					);
					// send email to business user with account link
					EmailHelper.sendEmailTemplate('Stripe Onboarding', 'stripeOnboarding', business.email, {
						name: business?.business_details?.name,
						title: 'Stripe Onboarding',
						onboardLink: accountLink.url,
					});
					businessIndex(business.business_id);
				}
				transactionSucceeded = true;
			},
			{ timeout: 15000 }
		);

		if (!transactionSucceeded && stripeCustomerId) {
			try {
				await stripe.deleteStripeCustomer(stripeCustomerId);
			} catch (stripeError) {
				console.error('Failed to delete Stripe customer:', stripeError);
			}
		}

		// Perform S3 uploads
		for (const u of s3Uploads) {
			await S3Helper.SaveObject(u.key, u.base64, u.mime, u.access, u.fileData, u.isPublic);
		}

		res.status(201).json({
			message: 'Merchant service registered successfully',
			business,
		});
	} catch (error: any) {
		console.error('Error registering merchant service:', error);
		res.status(400).json({ error: 'Error registering merchant service', detail: error.message });
	}
}

/**
 * POST /business/auth/register
 * @tag Auth
 * @summary Register a new business
 * @description Creates a new business, optionally business users, finances, and documents, and links them together.
 * @operationId registerBusiness
 * @bodyContent {RegisterBusinessRequest} application/json
 * @bodyRequired
 * @response 201 - Business registered successfully
 * @responseContent {RegisterBusinessResponse} 201.application/json
 * @response 400 - Error registering business
 * @prisma_model business (see ./prisma/schemas/base.prisma)
 * @prisma_model business_users (see ./prisma/schemas/base.prisma)
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model addresses (see ./prisma/schemas/base.prisma)
 * @prisma_model documents (see ./prisma/schemas/base.prisma)
 * @prisma_model files (see ./prisma/schemas/base.prisma)
 */
async function registerBusiness(req: ValidatedRequest<RegisterBusinessRequest>, res: Response) {
	try {
		let business: BusinessResponse | null = null;
		let transactionSucceeded: boolean = false;
		let stripeCustomerId: string | null = null;
		const s3Uploads: Array<{
			key: string;
			base64: string;
			mime: string;
			access: any;
			fileData: any;
			isPublic: boolean;
		}> = [];

		await prisma.$transaction(
			async (tx: Prisma.TransactionClient) => {
				if (req.body.business) {
					const existingBusinessEmail = await BusinessDao.getBusinessByEmail(req.body.business.data.email);
					if (existingBusinessEmail) {
						console.error('Business with this email already exists.');
						throw new Error('Business with this email already exists.');
					}
				}
				const stripeCustomer = await stripe.createCustomer(
					req.body.business.data.email,
					req.body.business.data.name,
					req.body.business.data.telephone
				);
				stripeCustomerId = stripeCustomer.id;
				business = (await BusinessDao.createNewBusiness(
					{
						...req.body.business.data,
						stripe_customer_id: stripeCustomer.id,
					},
					tx
				)) as BusinessResponse;

				const businessUsers = [];
				for (const userInfo of req.body.users) {
					const userObj = userInfo.user.data;
					delete userObj.user_roles;
					const { businessUser } = await BusinessUsersDao.createBusinessUser(
						{ ...userObj, company_role: userObj.user_role || 'ADMIN' } as CreateBusinessUser,
						business.business_id,
						true,
						tx
					);
					businessUsers.push(businessUser);
				}
				business = { ...business, business_users: businessUsers };

				if (req.body.business.documents) {
					//TODO: handle logo and banner
					for (const doc of req.body.business.documents) {
						const document = await DocumentDao.createDocument((doc as any).documentData, [], tx);
						for (const file of (doc as any).files) {
							const b64 = (file as any).base64;
							delete (file as any).base64;
							const fileData = await FileDao.addFileToDocument(
								(document as any).document_id,
								file as any,
								(document as any).public,
								tx
							);
							const key = S3Helper.getFileKey(fileData.file_id, (file as any).mime_type);
							s3Uploads.push({
								key,
								base64: b64,
								mime: (file as any).mime_type,
								access: { businesses: [(business as any).business_id] },
								fileData,
								isPublic: (document as any).public,
							});
						}
						await DocumentDao.linkDocumentToBusiness(
							(document as any).document_id,
							(business as any).business_id,
							tx
						);
					}
				}

				if (req.body.addresses && req.body.addresses.business) {
					await AddressDao.addOrLinkAddress(
						req.body.addresses.business,
						'businesses',
						business.business_id,
						tx
					);
				}
				transactionSucceeded = true;
			},
			{ timeout: 15000 }
		);

		if (!transactionSucceeded && stripeCustomerId) {
			try {
				await stripe.deleteStripeCustomer(stripeCustomerId);
			} catch (stripeError) {
				console.error('Failed to delete Stripe customer:', stripeError);
			}
		}
		if (transactionSucceeded && s3Uploads.length !== 0) {
			for (const u of s3Uploads) {
				await S3Helper.SaveObject(u.key, u.base64, u.mime, u.access, u.fileData, u.isPublic);
			}
		}

		res.status(201).json({
			message: 'Business registered successfully',
			business,
		});
	} catch (error: unknown) {
		console.error('Error registering business:', error);
		res.status(400).json({ error: 'Error registering business', detail: (error as Error).message });
	}
}

/**
- POST /reservation/auth/register
- @tag Auth
- @summary Register a new reservation business
- @description Registers a new reservation business and user. If the business exists, connects it with a reservation module. If not, creates the business and required business users. If the user exists, connects the user to the business; otherwise, creates a new user. Also creates demo employee, location, and service for the reservation module.
- @operationId registerReservationBusiness
- @bodyDescription The required data to register a new reservation business and user.
- @bodyContent {RegisterReservationBusinessRequest} application/json
- @bodyRequired
- @response 201 - Business registered successfully
 - @responseContent {RegisterBusinessResponse} 201.application/json
- @response 400 - Error registering business
- @prisma_model users (see ./prisma/schema.prisma)
- @prisma_model business (see ./prisma/schema.prisma)
- @prisma_model business_users (see ./prisma/schema.prisma)
- @prisma_model reservation_module (see ./prisma/schema.prisma)
*/
async function registerReservationBusiness(req: ValidatedRequest<RegisterReservationBusinessRequest>, res: Response) {
	//TODO: What do if MITM attack steals registration token?
	// TODO: logo and banner images
	try {
		let transactionSucceeded: boolean = false;
		let business: BusinessWithAllModulesResponse | null = null;
		let stripeCustomerId: string | null = null;
		await prisma.$transaction(
			async (tx: Prisma.TransactionClient) => {
				let adminUser = null;
				// console.log(req.body);
				const { userData, businessData, plan_tag } = req.body;
				let existingUser: Partial<UserBase> | null = null;
				if (userData?.registration_token) {
					//TODO: validate token if given
					const token = await TokenDao.validateRegistrationSessionToken(userData.registration_token);
					if (!token) {
						console.error('Invalid registration token!');
						throw new Error('Invalid registration token!');
					}
					existingUser = { ...token.user, user_id: token.user_id };
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
				let existingBusiness: any = null;
				if (businessData.business_id) {
					existingBusiness = await BusinessDao.getBusinessById(businessData.business_id);
					if (!existingBusiness) {
						console.error('Unknown business_id!');
						throw new Error('Unknown business_id!');
					}
					//TODO: check that user is admin in business if business given
					const isAdmin =
						existingBusiness.business_users.find((bu: any) => bu.user_id === existingUser?.user_id)
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
					}
				}

				const stripeCustomer = await stripe.createCustomer(
					businessData.email,
					businessData.business_name,
					businessData.business_telephone
				);
				stripeCustomerId = stripeCustomer.id;

				business =
					existingBusiness ||
					(await BusinessDao.createNewBusiness(
						{
							name: businessData.name,
							email: businessData.email,
							telephone: businessData.telephone,
							// telephone_number: businessData.telephone_number,
							telephone_code: businessData.telephone_code,
							types: [BUSINESS_TYPE.RESERVATION],
							tax_id: businessData.tax_id,
							registration_id: businessData.registration_id,
							stripe_customer_id: stripeCustomer.id,
						},
						tx
					));

				const reservationModule = await ReservationModule.createReservationModule(
					business?.business_id as string,
					tx
				);
				let businessUserData = null;
				if (existingUser?.user_id) {
					const existingBusinessUser = await BusinessUsersDao.getBusinessUserByUserId(
						existingUser?.user_id as string
					);
					if (!existingBusinessUser) {
						await BusinessUsersDao.createBusinessUser(
							{ ...existingUser, company_role: 'ADMIN' } as CreateBusinessUser,
							business?.business_id as string,
							false,
							tx
						);
					}
					businessUserData = existingBusinessUser;
					adminUser = existingUser;
				} else {
					const { user, businessUser } = await BusinessUsersDao.createBusinessUser(
						{
							first_name: userData.first_name,
							last_name: userData.last_name,
							email: userData.email,
							// password: userData.password,
							company_role: 'ADMIN',
							telephone: userData.telephone || businessData.business_telephone,
							// telephone_number: userData.telephone_number || businessData.business_telephone_number,
							telephone_code: userData.telephone_code || businessData.business_telephone_code,
						},
						business?.business_id as string,
						true,
						tx
					);
					businessUserData = businessUser;
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
									business_id: business?.business_id as string,
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
							await tx.role_permission.create({
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
						business_id: business?.business_id as string,
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
								business_users_id: businessUserData?.business_users_id,
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
								action_id: employeeAction?.action_id,
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
								action_id: locationAction?.action_id,
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
				await bootstrapModuleNotifications(reservationModule?.reservation_module_id, [], adminUser?.user_id);
				transactionSucceeded = true;
				//TODO: index business once ES index for reservations is ready
			},
			{
				timeout: 15000, // 30 seconds
			}
		);

		if (!transactionSucceeded && stripeCustomerId) {
			try {
				await stripe.deleteStripeCustomer(stripeCustomerId);
			} catch (stripeError) {
				console.error('Failed to delete Stripe customer:', stripeError);
			}
		}
		res.status(201).json({
			message: 'Business registered successfully',
			business,
		});
	} catch (error: unknown) {
		console.error('Error registering business:', error);
		res.status(400).json({ error: 'Error registering business', detail: (error as Error).message });
	}
}

/**
 * GET /auth/municipalities/license-required
 * @tag Regions
 * @summary List municipalities requiring license
 * @description Returns municipalities where requires_license is true.
 * @operationId getMunicipalitiesWithLicenseRequirements
 * @response 200 - Successful operation. Returns municipalities list.
 * @responseContent {Municipality[]} 200.application/json
 * @response 400 - Error fetching municipalities.
 * @prisma_model municipalities (see ./prisma/schemas/base.prisma)
 */
async function getMunicipalitiesWithLicenseRequirements(req: ValidatedRequest, res: Response) {
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
	} catch (e: unknown) {
		res.status(400).json({ error: 'Error fetching municipalities', detail: (e as Error).message });
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
 * @responseContent {EmailAvailability} 200.application/json
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function checkEmailAvailability(req: ValidatedRequest<never, { email: string }>, res: Response) {
	try {
		const { email } = req.params;
		if (!email) {
			res.status(400).json({ error: 'Email must be provided.' });
			return;
		}

		const userByEmail = await UserDao.getUserByEmail(email.toLowerCase());
		const emailTaken = !!userByEmail;

		res.status(200).json({ emailTaken });
	} catch (error: unknown) {
		console.error('Error checking email availability:', error);
		res.status(500).json({ error: 'Error checking email availability', detail: (error as Error).message });
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
 * @responseContent {TelephoneAvailability} 200.application/json
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function checkTelephoneAvailability(req: ValidatedRequest<never, { telephone: string }>, res: Response) {
	try {
		const { telephone } = req.params;
		if (!telephone) {
			res.status(400).json({ error: 'Telephone must be provided.' });
			return;
		}

		const userByPhone = await UserDao.getUserByTelephone(telephone);
		const telephoneTaken = !!userByPhone;

		res.status(200).json({ telephoneTaken });
	} catch (error: unknown) {
		console.error('Error checking telephone availability:', error);
		res.status(500).json({ error: 'Error checking telephone availability', detail: (error as Error).message });
	}
}

/**
 * POST /auth/registration-session/authenticate
 * @tag Authentication
 * @summary Authenticate registration session
 * @description Authenticates user credentials and generates a registration session token.
 * @operationId authenticateRegistrationSession
 * @bodyDescription Email and password for verification.
 * @bodyContent {AuthenticateRegistrationSessionRequest} application/json
 * @bodyRequired
 * @response 200 - Returns registration session token.
 * @responseContent {TokenBase} 200.application/json
 * @response 400 - User not authenticated or invalid credentials.
 * @response 500 - Internal server error.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 * @prisma_model tokens (see ./prisma/schemas/base.prisma)
 */
async function authenticateRegistrationSession(
	req: ValidatedRequest<AuthenticateRegistrationSessionRequest>,
	res: Response
) {
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
		const correctPw = await bcrypt.compare(password, (user as any).password);
		if (!correctPw) {
			return res.status(400).json({ error: 'Wrong email / password combination.' });
		}

		const token = await TokenDao.generateRegistrationSessionToken(user as any);

		return res.status(200).json(token);
	} catch (err) {
		console.error('Error authenticating registration session:', err);
		return res.status(500).json({ error: 'Internal server error.' });
	}
}

/**
 * POST /auth/login/apple
 * @tag Auth
 * @summary Login with Apple
 * @description Authenticates a user using Apple Sign-In. Supports both app and web flows.
 * @operationId appleLogin
 * @bodyContent {AppleLoginRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns user data with JWT token if user exists.
 * @responseContent {AuthUserResponse} 200.application/json
 * @response 302 - Redirects to frontend with JWT token or registration data.
 * @response 400 - Error during authentication.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function appleLoginPost(req: ValidatedRequest<AppleLoginRequest>, res: Response) {
	const { token, jwt: jwtToken, code, state } = req.body;
	console.log('Apple login POST', jwtToken, token);
	try {
		let web = false;
		let decodedToken: any;
		if (code) {
			console.log('Apple login POST web', code);
			web = true;
			const tokenResponse = await axios.post(
				'https://appleid.apple.com/auth/token',
				new URLSearchParams({
					client_id: process.env.APPLE_SIGN_IN_CLIENT_ID as string,
					client_secret: generateAppleClientSecret(),
					code: code as string,
					grant_type: 'authorization_code',
					redirect_uri: process.env.APPLE_REDIRECT_URI as string,
				}).toString(),
				{
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				}
			);
			const { id_token, access_token } = tokenResponse.data;
			decodedToken = await verifyAppleToken(id_token, true);
		} else {
			console.log('Apple login POST app', jwtToken);
			decodedToken = await verifyAppleToken(jwtToken as string);
		}
		console.log('Apple Decoded', decodedToken);
		const appleId = token || decodedToken.sub;
		// Check if the user already exists in the database
		let user: any = await prisma.users.findMany({
			where: { apple_id: appleId },
		});
		if (user.length > 0) {
			user = await getUserWithTokens(user[0].user_id as string);
			if (web) {
				return res.redirect(`${process.env.FRONTEND_URL}/#apple-login?jwt=${user.access_token}`);
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
		// If user does not exist, return authentication data
		return res.redirect(`${process.env.FRONTEND_URL}/#register?apple_id=${appleId}&email=${decodedToken.email}`);
	} catch (error: any) {
		console.error('Apple token verification error:', error);
		return res.redirect(`${process.env.FRONTEND_URL}/#register?error="apple"`);
	}
}

/**
 * GET /auth/login/apple
 * @tag Auth
 * @summary Login with Apple (Web Flow)
 * @description Authenticates a user using Apple Sign-In web flow.
 * @operationId appleLoginWebGet
 * @queryParam {string} [code] - Authorization code from Apple
 * @queryParam {string} [state] - State parameter from Apple
 * @response 302 - Redirects to frontend with JWT token or registration data.
 * @response 400 - Error during authentication.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function appleLoginWebGet(req: ValidatedRequest<never, never, { code?: string; state?: string }>, res: Response) {
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
				client_id: process.env.APPLE_SIGN_IN_CLIENT_ID as string,
				client_secret: generateAppleClientSecret(),
				code: code as string,
				grant_type: 'authorization_code',
				redirect_uri: process.env.APPLE_REDIRECT_URI as string,
			}).toString(),
			{
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			}
		);
		const { id_token, access_token } = tokenResponse.data;
		const decodedToken: any = await verifyAppleToken(id_token, true);
		console.log('Verified Apple User:', decodedToken);
		const appleId = decodedToken?.sub as string;
		const email = decodedToken?.email as string;
		// Check if user exists in DB
		let user = await prisma.users.findFirst({
			where: { apple_id: appleId },
		});
		if (user) {
			// User exists, generate session/token & redirect to frontend
			const jwtToken = generateAccessToken({ user_id: (user as any).user_id });
			return res.redirect(`${process.env.FRONTEND_URL}/#register?jwt=${jwtToken}`);
		}
		// If user does not exist, return authentication data
		return res.redirect(`${process.env.FRONTEND_URL}/#register?apple_id=${appleId}&email=${email}`);
	} catch (error: any) {
		console.error('Apple authentication error:', error.response?.data || error);
		return res.redirect(`${process.env.FRONTEND_URL}/#register?error="apple"`);
	}
}

/**
 * POST /auth/login/google
 * @tag Auth
 * @summary Login with Google
 * @description Authenticates a user using Google Sign-In.
 * @operationId googleLogin
 * @bodyContent {GoogleLoginRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns user data with JWT token if user exists.
 * @responseContent {AuthUserResponse} 200.application/json
 * @response 400 - Error during authentication.
 * @prisma_model users (see ./prisma/schemas/user.prisma)
 */
async function googleLogin(req: ValidatedRequest<GoogleLoginRequest>, res: Response) {
	const { token } = req.body as any;
	try {
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID,
		});
		const payload = ticket.getPayload();
		const googleId = payload?.sub as string;
		const email = payload?.email as string;
		const firstName = payload?.given_name as string;
		const lastName = payload?.family_name as string;
		// Check if the user already exists in the database
		let user: any[] = await prisma.users.findMany({
			where: { google_id: googleId },
		});
		if (user.length > 0) {
			let usr = await getUserWithTokens(user[0].user_id as string);
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

/**
 * Verify Apple Identity Token
 * @param {string} identityToken - The Apple identity token (JWT)
 * @param {boolean} web - Whether the token is for web authentication
 * @returns {Promise<any>} Decoded token payload if valid, otherwise throws an error
 */
const verifyAppleToken = async (identityToken: string, web = false) => {
	try {
		// Fetch Apple's public keys
		const response = await axios.get('https://appleid.apple.com/auth/keys');
		const applePublicKeys = (response.data as any).keys as any[];
		// Decode JWT header to get the key ID (kid)
		const decodedHeader = jwt.decode(identityToken, { complete: true }) as any;
		if (!decodedHeader) throw new Error('Invalid Apple ID token.');
		const { kid } = decodedHeader.header;
		// Find the corresponding public key based on the `kid`
		const applePublicKey = applePublicKeys.find((key) => key.kid === kid);
		if (!applePublicKey) throw new Error('Apple public key not found.');
		// Convert the public key to PEM format
		const pem = jwkToPem(applePublicKey);
		// Define verification options
		let verifyOptions: any = { algorithms: ['RS256'] };
		if (web) {
			// Additional verification for web authentication
			verifyOptions.issuer = 'https://appleid.apple.com';
			verifyOptions.audience = process.env.APPLE_SIGN_IN_CLIENT_ID;
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

/**
 * Generate Apple Client Secret
 * @returns {string} Generated client secret JWT
 */
const generateAppleClientSecret = () => {
	const privateKey = fs.readFileSync(process.env.APPLE_P8_PATH as string, 'utf8');
	const teamId = process.env.APPLE_TEAM_ID as string;
	const clientId = process.env.APPLE_SIGN_IN_CLIENT_ID as string;
	const keyId = process.env.APPLE_KEY_ID as string;
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
export { registerTransportService };
export { registerMerchantService };
export { registerBusiness };
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
	registerTransportService,
	registerMerchantService,
	registerBusiness,
	registerReservationBusiness,
	getMunicipalitiesWithLicenseRequirements,
	checkEmailAvailability,
	checkTelephoneAvailability,
	authenticateRegistrationSession,
	appleLoginPost,
	appleLoginWebGet,
	googleLogin,
};
