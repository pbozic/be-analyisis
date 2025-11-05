import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Email, PhoneNumber, UUID } from '../../primitives.js';
import {
	BusinessRegistrationDataSchema,
	UserRegistrationDataSchema,
	DocumentWithFilesSchema,
	VehicleRegistrationSchema,
} from '../common/Business.dto.js';
import { BusinessAddressSchema } from '../common/Address.dto.js';

extendZodWithOpenApi(z);

// ===== AUTHENTICATION REQUESTS =====

/**
 * Used by login function - POST /auth/login
 * User login schema with email/telephone and password
 */
export const LoginSchema = z
	.object({
		email: z.string().min(1), // Can be email or telephone
		password: z.string().min(1),
	})
	.openapi({
		title: 'LoginRequest',
		description: 'Request body for user login with email/telephone and password',
	});

/**
 * Used by register function - POST /auth/register
 * User registration schema with all required user data
 */
export const RegisterUserSchema = z
	.object({
		first_name: z.string().min(1),
		last_name: z.string().min(1),
		email: Email.optional(),
		telephone: PhoneNumber,
		telephone_code: z.string(),
		telephone_number: z.string().optional(),
		password: z.string().min(8),
		confirm_password: z.string().min(8),
		date_of_birth: z.string().datetime(),
		user_role: z.string().default('PERSONAL'),
		user_roles: z
			.array(
				z.object({
					role: z.string(),
					primary: z.boolean(),
				})
			)
			.optional(),
		apple_id: z.string().optional(),
		google_id: z.string().optional(),
		referral_code: z.string().length(6).optional(),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords don't match",
		path: ['confirm_password'],
	})
	.openapi({
		title: 'RegisterUserRequest',
		description: 'Request body for user registration with all required user information',
	});

/**
 * Used by refreshToken function - POST /auth/refresh
 * Refresh token schema
 */
export const RefreshTokenSchema = z
	.object({
		refresh_token: z.string().min(1),
	})
	.openapi({
		title: 'RefreshTokenRequest',
		description: 'Request body for refreshing access token with refresh token',
	});

/**
 * Used by requestPasswordReset function - POST /auth/password-reset
 * Password reset request schema (email or telephone)
 */
export const RequestPasswordResetSchema = z
	.object({
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
	})
	.refine((data) => data.email || data.telephone, {
		message: 'Either email or telephone is required',
	})
	.openapi({
		title: 'RequestPasswordResetRequest',
		description: 'Request body for password reset with email or telephone',
	});

/**
 * Used by passwordReset function - POST /auth/reset-password/:token (form submission)
 * Password reset with new password schema
 */
export const PasswordResetSchema = z
	.object({
		password: z
			.string()
			.min(8)
			.regex(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
				'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
			),
		confirm_password: z.string().min(8),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords don't match",
		path: ['confirm_password'],
	})
	.openapi({
		title: 'PasswordResetRequest',
		description: 'Request body for resetting password with new password and confirmation',
	});

// ===== BUSINESS REGISTRATION REQUESTS =====

/**
 * Used by registerTaxiService function - POST /auth/taxi/register
 * Complex taxi service registration schema
 */
export const RegisterTaxiServiceSchema = z
	.object({
		business: z.object({
			...BusinessRegistrationDataSchema.shape,
			type: z.string().default('TAXI'),
			documents: z.array(DocumentWithFilesSchema).optional(),
		}),
		drivers: z
			.array(
				z.object({
					user: z.object({
						data: UserRegistrationDataSchema.extend({
							user_role: z.string().default('DRIVER'),
						}),
						documents: z.array(DocumentWithFilesSchema).optional(),
						addresses: z.array(z.record(z.any())).optional(),
					}),
					driver: z.object({
						data: z.object({
							online: z.boolean().default(false),
							working_hours: z.record(z.any()).optional(),
							ride_requirements: z.record(z.any()).optional(),
							transfer_requirements: z.record(z.any()).optional(),
							regions: z.array(z.string()).optional(),
						}),
						regions: z.array(z.string()).optional(),
						documents: z.array(DocumentWithFilesSchema).optional(),
					}),
				})
			)
			.optional(),
		vehicles: z.array(VehicleRegistrationSchema).optional(),
		addresses: z
			.object({
				business: BusinessAddressSchema.optional(),
			})
			.optional(),
	})
	.openapi({
		title: 'RegisterTaxiServiceRequest',
		description: 'Request body for registering a complete taxi service with business, drivers, and vehicles',
	});

/**
 * Used by registerDeliveryService function - POST /auth/delivery/register
 * Complex delivery service registration schema
 */
export const RegisterDeliveryServiceSchema = z
	.object({
		business: BusinessRegistrationDataSchema.extend({
			type: z.string().default('DELIVERY'),
		}),
		deliveryDrivers: z
			.array(
				z.object({
					user: z.object({
						data: UserRegistrationDataSchema.extend({
							user_role: z.string().default('DELIVERY_DRIVER'),
						}),
						documents: z.array(DocumentWithFilesSchema).optional(),
						addresses: z.array(z.record(z.any())).optional(),
					}),
					driver: z.object({
						data: z.object({
							online: z.boolean().default(false),
							delivers_daily_meals: z.boolean().default(false),
							working_hours: z.record(z.any()).optional(),
						}),
						documents: z
							.array(
								z.object({
									documentData: z.object({
										document_type: z.string(),
										public: z.boolean().default(false),
									}),
									files: z.array(
										z.object({
											file_type: z.string(),
											mime_type: z.string(),
											base64: z.string(),
										})
									),
								})
							)
							.optional(),
					}),
					vehicles: z
						.array(
							z.object({
								data: z.object({
									class: z.string(),
									category: z.string(),
									make: z.string(),
									model: z.string(),
									color: z.string(),
									license_plate: z.string(),
									year: z.number().optional(),
									active: z.boolean().default(true),
								}),
								documents: z
									.array(
										z.object({
											documentData: z.object({
												document_type: z.string(),
												public: z.boolean().default(false),
											}),
											files: z.array(
												z.object({
													file_type: z.string(),
													mime_type: z.string(),
													base64: z.string(),
												})
											),
										})
									)
									.optional(),
							})
						)
						.optional(),
				})
			)
			.optional(),
		addresses: z
			.object({
				business: z
					.object({
						address: z.string().min(1),
						city: z.string().min(1),
						postal_code: z.string().min(1),
						country: z.string().length(2).default('SI'),
						latitude: z.number().optional(),
						longitude: z.number().optional(),
					})
					.optional(),
			})
			.optional(),
	})
	.openapi({
		title: 'RegisterDeliveryServiceRequest',
		description: 'Request body for registering a complete delivery service with business and delivery drivers',
	});

/**
 * Used by registerMerchantService function - POST /auth/merchant/register
 * Complex merchant service registration schema
 */
export const RegisterMerchantServiceSchema = z
	.object({
		business: z.object({
			data: z.object({
				name: z.string().min(1),
				email: Email,
				telephone: PhoneNumber,
				telephone_code: z.string(),
				type: z.string().default('MERCHANT'),
				tax_id: z.string().optional(),
				registration_id: z.string().optional(),
				working_hours: z.record(z.any()).optional(),
			}),
			documents: z
				.array(
					z.object({
						documentData: z.object({
							document_type: z.string(),
							public: z.boolean().default(false),
						}),
						files: z.array(
							z.object({
								file_type: z.string(),
								mime_type: z.string(),
								base64: z.string(),
							})
						),
					})
				)
				.optional(),
		}),
		users: z
			.array(
				z.object({
					user: z.object({
						data: z.object({
							first_name: z.string().min(1),
							last_name: z.string().min(1),
							email: Email,
							telephone: PhoneNumber,
							telephone_code: z.string(),
							password: z.string().min(8),
							date_of_birth: z.string().datetime(),
							user_role: z.string().default('BUSINESS_USER'),
							user_roles: z
								.array(
									z.object({
										role: z.string(),
										primary: z.boolean(),
									})
								)
								.optional(),
						}),
						addresses: z.array(z.record(z.any())).optional(),
					}),
				})
			)
			.min(1),
		addresses: z
			.object({
				business: z
					.object({
						address: z.string().min(1),
						city: z.string().min(1),
						postal_code: z.string().min(1),
						country: z.string().length(2).default('SI'),
						latitude: z.number().optional(),
						longitude: z.number().optional(),
					})
					.optional(),
				delivery: z
					.object({
						address: z.string().min(1),
						city: z.string().min(1),
						postal_code: z.string().min(1),
						country: z.string().length(2).default('SI'),
						latitude: z.number().optional(),
						longitude: z.number().optional(),
					})
					.optional(),
			})
			.optional(),
	})
	.openapi({
		title: 'RegisterMerchantServiceRequest',
		description: 'Request body for registering a merchant service with business and business users',
	});

/**
 * Used by registerBusiness function - POST /auth/business/register
 * General business registration schema
 */
export const RegisterBusinessSchema = z
	.object({
		business: z.object({
			data: z.object({
				name: z.string().min(1),
				email: Email,
				telephone: PhoneNumber,
				telephone_code: z.string(),
				type: z.string(),
				tax_id: z.string().optional(),
				registration_id: z.string().optional(),
				working_hours: z.record(z.any()).optional(),
			}),
			documents: z
				.array(
					z.object({
						documentData: z.object({
							document_type: z.string(),
							public: z.boolean().default(false),
						}),
						files: z.array(
							z.object({
								file_type: z.string(),
								mime_type: z.string(),
								base64: z.string(),
							})
						),
					})
				)
				.optional(),
		}),
		users: z
			.array(
				z.object({
					user: z.object({
						data: z.object({
							first_name: z.string().min(1),
							last_name: z.string().min(1),
							email: Email,
							telephone: PhoneNumber,
							telephone_code: z.string(),
							password: z.string().min(8),
							date_of_birth: z.string().datetime(),
							user_role: z.string().default('BUSINESS_USER'),
							user_roles: z
								.array(
									z.object({
										role: z.string(),
										primary: z.boolean(),
									})
								)
								.optional(),
						}),
						addresses: z.array(z.record(z.any())).optional(),
					}),
				})
			)
			.min(1),
		addresses: z
			.object({
				business: z
					.object({
						address: z.string().min(1),
						city: z.string().min(1),
						postal_code: z.string().min(1),
						country: z.string().length(2).default('SI'),
						latitude: z.number().optional(),
						longitude: z.number().optional(),
					})
					.optional(),
			})
			.optional(),
	})
	.openapi({
		title: 'RegisterBusinessRequest',
		description: 'Request body for registering a general business with users',
	});

/**
 * Used by registerReservationBusiness function - POST /reservation/auth/register
 * Reservation business registration schema
 */
export const RegisterReservationBusinessSchema = z
	.object({
		userData: z.object({
			email: Email,
			password: z.string().min(8),
			registration_token: z.string().optional(),
			date_of_birth: z.string().datetime().optional(),
			telephone: PhoneNumber,
			telephone_number: z.string().optional(),
			telephone_code: z.string(),
			user_roles: z
				.array(
					z.object({
						role: z.string(),
						primary: z.boolean(),
					})
				)
				.optional(),
		}),
		businessData: z.object({
			business_id: UUID.optional(),
			name: z.string().min(1),
			business_name: z.string().min(1),
			email: Email,
			business_email: Email,
			telephone: PhoneNumber,
			business_telephone: PhoneNumber,
			telephone_number: z.string().optional(),
			business_telephone_number: z.string().optional(),
			telephone_code: z.string(),
			business_telephone_code: z.string(),
			type: z.string().default('RESERVATION'),
			tax_id: z.string().optional(),
			registration_id: z.string().optional(),
		}),
		plan_tag: z.string().optional(),
	})
	.openapi({
		title: 'RegisterReservationBusinessRequest',
		description: 'Request body for registering a reservation business with user and business data',
	});

// ===== USER MANAGEMENT REQUESTS =====

/**
 * Used by createScheduledUser function - POST /auth/create/scheduled_user
 * Create scheduled user schema
 */
export const CreateScheduledUserSchema = z
	.object({
		data: z.object({
			first_name: z.string().min(1),
			last_name: z.string().min(1),
			email: Email.optional(),
			telephone: PhoneNumber,
			telephone_code: z.string(),
			password: z.string().min(8).optional(),
			date_of_birth: z.string().datetime().optional(),
			user_role: z.string().default('PERSONAL'),
			details: z.record(z.any()).optional(),
		}),
		addresses: z
			.array(
				z.object({
					address: z.string().min(1),
					city: z.string().min(1),
					postal_code: z.string().min(1),
					country: z.string().length(2).default('SI'),
					latitude: z.number().optional(),
					longitude: z.number().optional(),
				})
			)
			.optional(),
	})
	.openapi({
		title: 'CreateScheduledUserRequest',
		description: 'Request body for creating a scheduled user with optional addresses',
	});

/**
 * Used by updateScheduledUser function - PATCH /update/scheduled_user
 * Update scheduled user schema
 */
export const UpdateScheduledUserSchema = z
	.object({
		user_id: UUID,
		data: z
			.object({
				first_name: z.string().min(1).optional(),
				last_name: z.string().min(1).optional(),
				email: Email.optional(),
				telephone: PhoneNumber.optional(),
				telephone_code: z.string().optional(),
				password: z.string().min(8).optional(),
				date_of_birth: z.string().datetime().optional(),
				user_role: z.string().optional(),
				details: z.record(z.any()).optional(),
			})
			.optional(),
		addresses: z
			.array(
				z.object({
					address: z.string().min(1),
					city: z.string().min(1),
					postal_code: z.string().min(1),
					country: z.string().length(2).default('SI'),
					latitude: z.number().optional(),
					longitude: z.number().optional(),
				})
			)
			.optional(),
	})
	.openapi({
		title: 'UpdateScheduledUserRequest',
		description: 'Request body for updating a scheduled user with optional data and addresses',
	});

/**
 * Used by authenticateRegistrationSession function - POST /auth/registration-session/authenticate
 * Registration session authentication schema
 */
export const AuthenticateRegistrationSessionSchema = z
	.object({
		email: Email,
		password: z.string().min(1),
	})
	.openapi({
		title: 'AuthenticateRegistrationSessionRequest',
		description: 'Request body for authenticating registration session with email and password',
	});

// Export all types
export type LoginRequest = z.infer<typeof LoginSchema>;
export type RegisterUserRequest = z.infer<typeof RegisterUserSchema>;
export type RefreshTokenRequest = z.infer<typeof RefreshTokenSchema>;
export type RequestPasswordResetRequest = z.infer<typeof RequestPasswordResetSchema>;
export type PasswordResetRequest = z.infer<typeof PasswordResetSchema>;
export type RegisterTaxiServiceRequest = z.infer<typeof RegisterTaxiServiceSchema>;
export type RegisterDeliveryServiceRequest = z.infer<typeof RegisterDeliveryServiceSchema>;
export type RegisterMerchantServiceRequest = z.infer<typeof RegisterMerchantServiceSchema>;
export type RegisterBusinessRequest = z.infer<typeof RegisterBusinessSchema>;
export type RegisterReservationBusinessRequest = z.infer<typeof RegisterReservationBusinessSchema>;
export type CreateScheduledUserRequest = z.infer<typeof CreateScheduledUserSchema>;
export type UpdateScheduledUserRequest = z.infer<typeof UpdateScheduledUserSchema>;
export type AuthenticateRegistrationSessionRequest = z.infer<typeof AuthenticateRegistrationSessionSchema>;

/**
 * Register all Auth request schemas with the OpenAPI registry
 */
export function registerSchemas(registry: OpenAPIRegistry) {
	// Authentication schemas
	registry.register('LoginRequest', LoginSchema);
	registry.register('RegisterUserRequest', RegisterUserSchema);
	registry.register('RefreshTokenRequest', RefreshTokenSchema);
	registry.register('RequestPasswordResetRequest', RequestPasswordResetSchema);
	registry.register('PasswordResetRequest', PasswordResetSchema);

	// Business registration schemas
	registry.register('RegisterTaxiServiceRequest', RegisterTaxiServiceSchema);
	registry.register('RegisterDeliveryServiceRequest', RegisterDeliveryServiceSchema);
	registry.register('RegisterMerchantServiceRequest', RegisterMerchantServiceSchema);
	registry.register('RegisterBusinessRequest', RegisterBusinessSchema);
	registry.register('RegisterReservationBusinessRequest', RegisterReservationBusinessSchema);

	// User management schemas
	registry.register('CreateScheduledUserRequest', CreateScheduledUserSchema);
	registry.register('UpdateScheduledUserRequest', UpdateScheduledUserSchema);
	registry.register('AuthenticateRegistrationSessionRequest', AuthenticateRegistrationSessionSchema);
}
