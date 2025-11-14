import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASON, MODULE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Email, PhoneNumber, PositiveInt, Timestamp, UUID } from '../../primitives';
import { CreateAddressSchema } from '../../../types/addresses/Address';
import { UpdateBusinessSchema as UpdateBusinessSchemaType } from '../../../types/business/Business';
import { VehicleEntityBaseSchema } from '../Vehicles/vehicle.validators.js';
import { DocumentWithFilesSchema } from '../Document/document.dto.js';

extendZodWithOpenApi(z);

// === Business Registration Schemas (moved from common/Business.dto.ts) ===
// === Business Registration Data ===
export const BusinessRegistrationDataSchema = z
	.object({
		business_id: UUID.optional(),
		name: z.string().min(1),
		email: Email,
		telephone: PhoneNumber,
		telephone_code: z.string(),
		type: z.string(),
		tax_id: z.string().optional(),
		registration_id: z.string().optional(),
		working_hours: z.record(z.any()).optional(),
	})
	.openapi({
		title: 'BusinessRegistrationData',
		description: 'Core business registration data with contact and legal information',
	});

// === Vehicle Information ===
export const VehicleInformationSchema = VehicleEntityBaseSchema.openapi({
	title: 'VehicleInformation',
	description: 'Complete vehicle information for registration',
});

// === User Registration Data ===
export const UserRegistrationDataSchema = z
	.object({
		first_name: z.string().min(1),
		last_name: z.string().min(1),
		email: Email,
		telephone: PhoneNumber,
		telephone_code: z.string(),
		telephone_number: z.string().optional(),
		password: z.string().min(8),
		confirm_password: z.string().min(8),
		date_of_birth: z.string().datetime(),
		user_role: z.string(),
		user_roles: z
			.array(
				z.object({
					role: z.string(),
					primary: z.boolean(),
				})
			)
			.optional(),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: 'Passwords do not match',
	})
	.openapi({
		title: 'UserRegistrationData',
		description: 'Complete user registration data with roles',
	});

// === Driver Data ===
export const DriverDataSchema = z
	.object({
		online: z.boolean().default(false),
		working_hours: z.record(z.any()).optional(),
		ride_requirements: z.record(z.any()).optional(),
		transfer_requirements: z.record(z.any()).optional(),
		regions: z.array(z.string()).optional(),
		delivers_daily_meals: z.boolean().default(false),
	})
	.openapi({
		title: 'DriverData',
		description: 'Driver-specific data including availability, requirements, and service areas',
	});

// === Complete Driver Registration ===
export const DriverRegistrationSchema = z
	.object({
		user: z.object({
			data: UserRegistrationDataSchema,
			documents: z.array(DocumentWithFilesSchema).optional(),
			addresses: z.array(z.record(z.any())).optional(),
		}),
		driver: z.object({
			data: DriverDataSchema,
			regions: z.array(z.string()).optional(),
			documents: z.array(DocumentWithFilesSchema).optional(),
		}),
		vehicles: z
			.array(
				z.object({
					data: VehicleInformationSchema,
					documents: z.array(DocumentWithFilesSchema).optional(),
				})
			)
			.optional(),
	})
	.openapi({
		title: 'DriverRegistration',
		description: 'Complete driver registration including user, driver data, documents and optional vehicles',
	});

// === Vehicle Registration ===
export const VehicleRegistrationSchema = z
	.object({
		data: z.object({
			vehicle_information: VehicleInformationSchema,
			drivers: z.array(z.string()).optional(), // Array of driver emails
			documents: z.array(DocumentWithFilesSchema).optional(),
		}),
	})
	.openapi({
		title: 'VehicleRegistration',
		description: 'Vehicle registration with information, assigned drivers, and documents',
	});

// === Type exports ===
export type BusinessRegistrationData = z.infer<typeof BusinessRegistrationDataSchema>;
export type VehicleInformation = z.infer<typeof VehicleInformationSchema>;
export type UserRegistrationData = z.infer<typeof UserRegistrationDataSchema>;
export type DriverData = z.infer<typeof DriverDataSchema>;
export type DriverRegistration = z.infer<typeof DriverRegistrationSchema>;
export type VehicleRegistration = z.infer<typeof VehicleRegistrationSchema>;

export const SetBusinessTypesSchema = z
	.object({
		type_ids: z.array(UUID),
	})
	.openapi('SetBusinessTypes');
export type SetBusinessTypesInput = z.infer<typeof SetBusinessTypesSchema>;
export const GetBusinessesSchema = z
	.object({
		business_ids: z.array(UUID),
	})
	.openapi('GetBusinesses');
export type GetBusinessesInput = z.infer<typeof GetBusinessesSchema>;

export const AddBusinessToFavoritesSchema = z
	.object({
		business_id: UUID,
		module: z.nativeEnum(MODULE),
	})
	.openapi('AddBusinessToFavorites');
export type AddBusinessToFavoritesInput = z.infer<typeof AddBusinessToFavoritesSchema>;
export const RemoveBusinessFromFavoritesSchema = z
	.object({
		user_favorite_businesses_id: UUID,
	})
	.openapi('RemoveBusinessFromFavorites');
export type RemoveBusinessFromFavoritesInput = z.infer<typeof AddBusinessToFavoritesSchema>;

export const ActivateBusinessSchema = z.object({
	business_id: z.string().nullable().optional(),
	reason: z.nativeEnum(ACCOUNT_ACTIONS_REASON),
});
export type ActivateBusinessInput = z.infer<typeof ActivateBusinessSchema>;
export const DeactivateBusinessSchema = z.object({
	business_id: z.string().nullable().optional(),
	reason: z.nativeEnum(ACCOUNT_ACTIONS_REASON),
});
export type DeactivateBusinessInput = z.infer<typeof DeactivateBusinessSchema>;
export const AddAddressSchema = z.object({
	addressData: CreateAddressSchema,
});
export type AddAddressInput = z.infer<typeof AddAddressSchema>;

export const ManualSortScheduledUsersSchema = z
	.object({
		sorted_user_ids: z.array(UUID).nonempty(),
		business_id: UUID,
	})
	.openapi('ManualSortScheduledUsers');
export type ManualSortScheduledUsersInput = z.infer<typeof ManualSortScheduledUsersSchema>;

export const AddScheduledUserSortingTypeSchema = z
	.object({
		sorting_type: z.enum(['MANUAL', 'AUTOMATIC']).openapi({ example: 'MANUAL' }),
		business_id: UUID,
	})
	.openapi('AddScheduledUserSortingType');
export type AddScheduledUserSortingTypeInput = z.infer<typeof AddScheduledUserSortingTypeSchema>;

// =======================
// Get Business Earnings - GET /business/earnings/:business_id
// =======================
export const GetBusinessEarningsParamsSchema = z
	.object({
		business_id: UUID,
	})
	.openapi('GetBusinessEarningsParams');
export type GetBusinessEarningsParamsInput = z.infer<typeof GetBusinessEarningsParamsSchema>;

export const GetBusinessEarningsQuerySchema = z
	.object({
		start_date: z.string().min(1),
		end_date: z.string().min(1),
	})
	.openapi('GetBusinessEarningsQuery');
export type GetBusinessEarningsQueryInput = z.infer<typeof GetBusinessEarningsQuerySchema>;

// =======================
// Get All Businesses Earnings - GET /business/earnings/all
// =======================
export const GetAllBusinessesEarningsQuerySchema = z
	.object({
		start_date: z.string().min(1),
		end_date: z.string().min(1),
	})
	.openapi('GetAllBusinessesEarningsQuery');
export type GetAllBusinessesEarningsQueryInput = z.infer<typeof GetAllBusinessesEarningsQuerySchema>;

// =======================
// Get Business Total Earnings - GET /business/earnings/:business_id/total
// =======================
export const GetBusinessTotalEarningsParamsSchema = z
	.object({
		business_id: UUID,
	})
	.openapi('GetBusinessTotalEarningsParams');
export type GetBusinessTotalEarningsParamsInput = z.infer<typeof GetBusinessTotalEarningsParamsSchema>;

export const UpdateBusinessSchema = UpdateBusinessSchemaType.omit({ tax_id: true, registration_id: true });
export type UpdateBusinessInput = z.infer<typeof UpdateBusinessSchema>;

export const UpdateBusinessTypeSchema = z
	.object({
		type: z.enum(['MERCHANT', 'LOCAL', 'RESTAURANT', 'TRANSFER']).openapi({
			example: 'MERCHANT',
		}),
	})
	.openapi('UpdateBusinessType');
export type UpdateBusinessTypeInput = z.infer<typeof UpdateBusinessTypeSchema>;

export const UpdateIsBusinessUnitSchema = z
	.object({
		is_business_unit: z.boolean().openapi({ example: true }),
	})
	.openapi('UpdateIsBusinessUnit');
export type UpdateIsBusinessUnitInput = z.infer<typeof UpdateIsBusinessUnitSchema>;

export const UpdateBusinessGroupNameSchema = z
	.object({
		business_group_name: z.string().nullable().openapi({ example: 'Acme Holdings' }),
	})
	.openapi('UpdateBusinessGroupName');
export type UpdateBusinessGroupNameInput = z.infer<typeof UpdateBusinessGroupNameSchema>;

export const UpdateBusinessEmailSchema = z
	.object({
		email: Email,
	})
	.openapi('UpdateBusinessEmail');
export type UpdateBusinessEmailInput = z.infer<typeof UpdateBusinessEmailSchema>;

export const UpdateBusinessTelephoneSchema = z
	.object({
		telephone: PhoneNumber,
		telephone_code: z.string().min(1).openapi({ example: 'SI' }),
	})
	.openapi('UpdateBusinessTelephone');
export type UpdateBusinessTelephoneInput = z.infer<typeof UpdateBusinessTelephoneSchema>;

export const UpdateBusinessWorkingHoursSchema = z
	.object({
		working_hours: z
			.record(
				z.enum(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'holidays']),
				z.array(
					z.tuple([
						z
							.string()
							.regex(/^\d{2}:\d{2}$/)
							.openapi({ example: '10:00' }),
						z
							.string()
							.regex(/^\d{2}:\d{2}$/)
							.openapi({ example: '22:00' }),
					])
				)
			)
			.openapi({
				example: {
					fri: [['10:00', '23:00']],
					mon: [['10:00', '22:00']],
					sat: [['10:00', '23:00']],
					sun: [['10:00', '22:00']],
					thu: [['10:00', '22:00']],
					tue: [['10:00', '22:00']],
					wed: [['10:00', '22:00']],
					holidays: [['10:00', '22:00']],
				},
			}),
	})
	.openapi('UpdateBusinessWorkingHours');
export type UpdateBusinessWorkingHoursInput = z.infer<typeof UpdateBusinessWorkingHoursSchema>;

export const UpdateBusinessIsNewSchema = z
	.object({
		new: z.boolean().openapi({ example: true }),
	})
	.openapi('UpdateBusinessIsNew');
export type UpdateBusinessIsNewInput = z.infer<typeof UpdateBusinessIsNewSchema>;

export const UpdateBusinessIsPopularSchema = z
	.object({
		popular: z.boolean().openapi({ example: true }),
	})
	.openapi('UpdateBusinessIsPopular');
export type UpdateBusinessIsPopularInput = z.infer<typeof UpdateBusinessIsPopularSchema>;

export const UpdateParentBusinessIdSchema = z
	.object({
		parent_business_id: UUID,
	})
	.openapi('UpdateParentBusinessId');
export type UpdateParentBusinessIdInput = z.infer<typeof UpdateParentBusinessIdSchema>;

export const CreateScoringPointsSchema = z
	.object({
		points: PositiveInt,
		reason: z.string().min(1).openapi({ example: 'Excellently bad service' }),
		taxi_order_id: UUID.optional(),
		delivery_order_id: UUID.optional(),
	})
	.openapi('CreateScoringPoints');
export type CreateScoringPointsInput = z.infer<typeof CreateScoringPointsSchema>;

export const CreateBusinessLocalLocationSchema = z
	.object({
		location: z.object({
			local_location_id: UUID,
			time: z
				.string()
				.regex(/^\d{2}:\d{2}$/)
				.openapi({ example: '09:00' }),
		}),
	})
	.openapi('CreateBusinessLocalLocation');
export type CreateBusinessLocalLocationInput = z.infer<typeof CreateBusinessLocalLocationSchema>;

export const UpdateBusinessLocalLocationSchema = z
	.object({
		time: z
			.string()
			.regex(/^\d{2}:\d{2}$/)
			.openapi({ example: '10:00' }),
	})
	.openapi('UpdateBusinessLocalLocation');
export type UpdateBusinessLocalLocationInput = z.infer<typeof UpdateBusinessLocalLocationSchema>;

export const GetBusinessAnalyticsSchema = z
	.object({
		type: z.number().min(0).max(4).optional(),
		start_date: Timestamp.optional(),
		end_date: Timestamp.optional(),
	})
	.openapi('GetBusinessOverallAnalytics');
export type GetBusinessAnalyticsInput = z.infer<typeof GetBusinessAnalyticsSchema>;

export const ToggleTransportModuleSchema = z
	.object({
		enabled: z.boolean().openapi({ example: true }),
	})
	.openapi('ToggleTransportModule');
export type ToggleTransportModuleInput = z.infer<typeof ToggleTransportModuleSchema>;

export const BusinessIdParamsSchema = z
	.object({
		business_id: UUID,
	})
	.openapi('BusinessIdParams');
export type BusinessIdParamsInput = z.infer<typeof BusinessIdParamsSchema>;

export const GetBusinessForSearchSchema = z
	.object({
		ANALYTICS_PARAM_PROMO_WORDS: z.array(z.string()).optional(),
		ANALYTICS_PARAM_PROMO_SECTION: UUID.optional(),
		ANALYTICS_PARAM_PROMO_AD: UUID.optional(),
		module: z.nativeEnum(MODULE),
	})
	.openapi('GetBusinessForSearch');
export type GetBusinessForSearchInput = z.infer<typeof GetBusinessForSearchSchema>;

export const ParentBusinessIdParamsSchema = z
	.object({
		parent_business_id: UUID,
	})
	.openapi('ParentBusinessIdParams');
export type ParentBusinessIdParamsInput = z.infer<typeof ParentBusinessIdParamsSchema>;

export const CreateBusinessSchema = z
	.object({
		name: z.string(),
		description: z.string().optional(),
		tax_id: z.string(),
		registration_id: z.string(),
		email: Email,
		telephone: PhoneNumber,
		telephone_code: z.string().default('+385'),
		website_url: z.string().url().optional(),
		working_hours: z.record(z.any()).optional(),
		is_business_unit: z.boolean().default(false),
		business_group_name: z.string().optional(),
		parent_business_id: UUID.optional(),
	})
	.openapi('CreateBusiness');
export type CreateBusinessInput = z.infer<typeof CreateBusinessSchema>;

// =======================
// Search Businesses by Name - GET /businesses/search?search=
// =======================
export const SearchBusinessesByNameSchema = z
	.object({
		search: z.string().min(1),
	})
	.openapi('SearchBusinessesByName');
export type SearchBusinessesByNameInput = z.infer<typeof SearchBusinessesByNameSchema>;

// =======================
// Search Businesses by Group Name - GET /business/business_group_name/:search
// =======================
export const SearchBusinessesByGroupNameParamsSchema = z
	.object({
		search: z.string().min(1),
	})
	.openapi('SearchBusinessesByGroupNameParams');
export type SearchBusinessesByGroupNameParamsInput = z.infer<typeof SearchBusinessesByGroupNameParamsSchema>;

// =======================
// Create Payment Intent - POST /business/paymentIntent
// =======================
export const CreatePaymentIntentSchema = z
	.object({
		amount: z.number().positive(),
		payment_method: z.string(),
		user_id: UUID,
	})
	.openapi('CreatePaymentIntent');
export type CreatePaymentIntentInput = z.infer<typeof CreatePaymentIntentSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register request schemas
	registry.register('CreateBusiness', CreateBusinessSchema);
	registry.register('UpdateBusiness', UpdateBusinessSchema);
	registry.register('SearchBusinessesByName', SearchBusinessesByNameSchema);
	registry.register('CreatePaymentIntent', CreatePaymentIntentSchema);
	registry.register('SetBusinessTypes', SetBusinessTypesSchema);
	registry.register('GetBusinesses', GetBusinessesSchema);
	registry.register('AddBusinessToFavorites', AddBusinessToFavoritesSchema);
	registry.register('RemoveBusinessFromFavorites', RemoveBusinessFromFavoritesSchema);
	registry.register('ManualSortScheduledUsers', ManualSortScheduledUsersSchema);
	registry.register('AddScheduledUserSortingType', AddScheduledUserSortingTypeSchema);
	registry.register('GetBusinessEarningsParams', GetBusinessEarningsParamsSchema);
	registry.register('GetBusinessEarningsQuery', GetBusinessEarningsQuerySchema);
	registry.register('GetAllBusinessesEarningsQuery', GetAllBusinessesEarningsQuerySchema);
	registry.register('GetBusinessTotalEarningsParams', GetBusinessTotalEarningsParamsSchema);
	registry.register('UpdateBusinessType', UpdateBusinessTypeSchema);
	registry.register('UpdateIsBusinessUnit', UpdateIsBusinessUnitSchema);
	registry.register('UpdateBusinessGroupName', UpdateBusinessGroupNameSchema);
	registry.register('UpdateBusinessEmail', UpdateBusinessEmailSchema);
	registry.register('UpdateBusinessTelephone', UpdateBusinessTelephoneSchema);
	registry.register('UpdateBusinessWorkingHours', UpdateBusinessWorkingHoursSchema);
	registry.register('UpdateBusinessIsNew', UpdateBusinessIsNewSchema);
	registry.register('UpdateBusinessIsPopular', UpdateBusinessIsPopularSchema);
	registry.register('UpdateParentBusinessId', UpdateParentBusinessIdSchema);
	registry.register('CreateScoringPoints', CreateScoringPointsSchema);
	registry.register('CreateBusinessLocalLocation', CreateBusinessLocalLocationSchema);
	registry.register('UpdateBusinessLocalLocation', UpdateBusinessLocalLocationSchema);
	registry.register('GetBusinessOverallAnalytics', GetBusinessAnalyticsSchema);
	registry.register('ToggleTransportModule', ToggleTransportModuleSchema);
	registry.register('GetBusinessForSearch', GetBusinessForSearchSchema);
	registry.register('CreatePaymentIntent', CreatePaymentIntentSchema);

	// Register parameter schemas
	registry.register('BusinessIdParams', BusinessIdParamsSchema);
	registry.register('ParentBusinessIdParams', ParentBusinessIdParamsSchema);
	registry.register('SearchBusinessesByGroupNameParams', SearchBusinessesByGroupNameParamsSchema);
}
