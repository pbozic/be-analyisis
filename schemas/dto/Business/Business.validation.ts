import z from 'zod';
import { ACCOUNT_ACTIONS_REASON, MODULE } from '@prisma/client';

import { Email, PhoneNumber, PositiveInt, Timestamp, UUID } from '../../primitives';
import { CreateAddressSchema } from '../../../types/addresses/Address';
import { UpdateBusinessSchema as UpdateBusinessSchemaType } from '../../../types/business/Business';

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

// export const ReviewBusinessSchema = z.object({
// 	business_id: z.string().nullable().optional(),
// 	driver_id: z.string().optional(),
// 	delivery_driver_id: z.string().optional(),
// 	comment: z.string().optional().or(z.literal('')),
// 	rating: z.number().optional(),
// 	feedback: z.object({}).optional(),
// });
// export type ReviewBusinessInput = z.infer<typeof ReviewBusinessSchema>;
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

// =======================
// Manual Sort Scheduled Users
// =======================
export const ManualSortScheduledUsersSchema = z
	.object({
		sorted_user_ids: z.array(UUID).nonempty(),
		business_id: UUID,
	})
	.openapi('ManualSortScheduledUsers');
export type ManualSortScheduledUsersInput = z.infer<typeof ManualSortScheduledUsersSchema>;

// =======================
// Add Scheduled User Sorting Type
// =======================
export const AddScheduledUserSortingTypeSchema = z
	.object({
		sorting_type: z.enum(['MANUAL', 'AUTOMATIC']).openapi({ example: 'MANUAL' }),
		business_id: UUID,
	})
	.openapi('AddScheduledUserSortingType');
export type AddScheduledUserSortingTypeInput = z.infer<typeof AddScheduledUserSortingTypeSchema>;

// =======================
// Update Business
// =======================
// TODO: Update what is allowed to be updated.
export const UpdateBusinessSchema = UpdateBusinessSchemaType.omit({ tax_id: true, registration_id: true });
export type UpdateBusinessInput = z.infer<typeof UpdateBusinessSchema>;

// =======================
// Update Business Type
// =======================
export const UpdateBusinessTypeSchema = z
	.object({
		type: z.enum(['MERCHANT', 'LOCAL', 'RESTAURANT', 'TRANSFER']).openapi({
			example: 'MERCHANT',
		}),
	})
	.openapi('UpdateBusinessType');
export type UpdateBusinessTypeInput = z.infer<typeof UpdateBusinessTypeSchema>;

// =======================
// Update Is Business Unit
// =======================
export const UpdateIsBusinessUnitSchema = z
	.object({
		is_business_unit: z.boolean().openapi({ example: true }),
	})
	.openapi('UpdateIsBusinessUnit');
export type UpdateIsBusinessUnitInput = z.infer<typeof UpdateIsBusinessUnitSchema>;

// =======================
// Update Business Group Name
// =======================
export const UpdateBusinessGroupNameSchema = z
	.object({
		business_group_name: z.string().nullable().openapi({ example: 'Acme Holdings' }),
	})
	.openapi('UpdateBusinessGroupName');
export type UpdateBusinessGroupNameInput = z.infer<typeof UpdateBusinessGroupNameSchema>;

// =======================
// Update Business Email
// =======================
export const UpdateBusinessEmailSchema = z
	.object({
		email: Email,
	})
	.openapi('UpdateBusinessEmail');
export type UpdateBusinessEmailInput = z.infer<typeof UpdateBusinessEmailSchema>;

// =======================
// Update Business Telephone
// =======================
export const UpdateBusinessTelephoneSchema = z
	.object({
		telephone: PhoneNumber,
		telephone_code: z.string().min(1).openapi({ example: 'SI' }),
	})
	.openapi('UpdateBusinessTelephone');
export type UpdateBusinessTelephoneInput = z.infer<typeof UpdateBusinessTelephoneSchema>;

// =======================
// Update Business Working Hours
// =======================
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

// export const UpdateRestaurantOverwhelmedSchema = z
// 	.object({
// 		restaurant_overwhelmed: z.boolean().openapi({ example: true }),
// 	})
// 	.openapi('UpdateRestaurantOverwhelmed');
// export type UpdateRestaurantOverwhelmedInput = z.infer<typeof UpdateRestaurantOverwhelmedSchema>;

// =======================
// Update Business Is New
// =======================
export const UpdateBusinessIsNewSchema = z
	.object({
		new: z.boolean().openapi({ example: true }),
	})
	.openapi('UpdateBusinessIsNew');
export type UpdateBusinessIsNewInput = z.infer<typeof UpdateBusinessIsNewSchema>;

// =======================
// Update Business Is Popular
// =======================
export const UpdateBusinessIsPopularSchema = z
	.object({
		popular: z.boolean().openapi({ example: true }),
	})
	.openapi('UpdateBusinessIsPopular');
export type UpdateBusinessIsPopularInput = z.infer<typeof UpdateBusinessIsPopularSchema>;

// =======================
// Update Parent Business ID
// =======================
export const UpdateParentBusinessIdSchema = z
	.object({
		parent_business_id: UUID,
	})
	.openapi('UpdateParentBusinessId');
export type UpdateParentBusinessIdInput = z.infer<typeof UpdateParentBusinessIdSchema>;

// =======================
// Create Scoring Points - POST /scoring_points
// =======================
export const CreateScoringPointsSchema = z
	.object({
		points: PositiveInt,
		reason: z.string().min(1).openapi({ example: 'Excellently bad service' }),
		taxi_order_id: UUID.optional(),
		delivery_order_id: UUID.optional(),
	})
	.openapi('CreateScoringPoints');
export type CreateScoringPointsInput = z.infer<typeof CreateScoringPointsSchema>;

// =======================
// Create Business Local Location - POST /local/locations/:business_id
// =======================
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

// =======================
// Update Business Local Location - PATCH /local/locations/:location_id
// =======================
export const UpdateBusinessLocalLocationSchema = z
	.object({
		time: z
			.string()
			.regex(/^\d{2}:\d{2}$/)
			.openapi({ example: '10:00' }),
	})
	.openapi('UpdateBusinessLocalLocation');
export type UpdateBusinessLocalLocationInput = z.infer<typeof UpdateBusinessLocalLocationSchema>;

// =======================
// Get Business Overall Analytics - POST /analytics/overall
// =======================
export const GetBusinessAnalyticsSchema = z
	.object({
		type: z.number().min(0).max(4).optional(),
		start_date: Timestamp.optional(),
		end_date: Timestamp.optional(),
	})
	.openapi('GetBusinessOverallAnalytics');
export type GetBusinessAnalyticsInput = z.infer<typeof GetBusinessAnalyticsSchema>;

// =======================
// Toggle Transport Module - PATCH /:business_id/transport-module
// =======================
export const ToggleTransportModuleSchema = z
	.object({
		enabled: z.boolean().openapi({ example: true }),
	})
	.openapi('ToggleTransportModule');
export type ToggleTransportModuleInput = z.infer<typeof ToggleTransportModuleSchema>;

// =======================
// Business ID Params - For routes with :business_id parameter
// =======================
export const BusinessIdParamsSchema = z
	.object({
		business_id: UUID,
	})
	.openapi('BusinessIdParams');
export type BusinessIdParamsInput = z.infer<typeof BusinessIdParamsSchema>;

// =======================
// Get Business For Search - POST /business/search/:business_id
// =======================
export const GetBusinessForSearchSchema = z
	.object({
		ANALYTICS_PARAM_PROMO_WORDS: z.array(z.string()).optional(),
		ANALYTICS_PARAM_PROMO_SECTION: UUID.optional(),
		ANALYTICS_PARAM_PROMO_AD: UUID.optional(),
		module: z.nativeEnum(MODULE),
	})
	.openapi('GetBusinessForSearch');
export type GetBusinessForSearchInput = z.infer<typeof GetBusinessForSearchSchema>;

// =======================
// Parent Business ID Params - For routes with :parent_business_id parameter
// =======================
export const ParentBusinessIdParamsSchema = z
	.object({
		parent_business_id: UUID,
	})
	.openapi('ParentBusinessIdParams');
export type ParentBusinessIdParamsInput = z.infer<typeof ParentBusinessIdParamsSchema>;

// =======================
// Create New Business - POST /business
// =======================
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
