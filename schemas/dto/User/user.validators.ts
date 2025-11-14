import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { SERVICES } from '@prisma/client';

import { Email, PhoneNumber, UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== UPDATE PROFILE REQUESTS =====

/**
 * Used by updateMe function - PATCH /users/me
 * Generic user profile update schema
 */
export const UpdateMeSchema = z
	.object({
		first_name: z.string().min(1).optional(),
		last_name: z.string().min(1).optional(),
		date_of_birth: z.string().datetime().optional(),
		language: z.string().length(2).optional(),
		details: z.record(z.any()).optional(),
	})
	.openapi({
		title: 'UpdateMeRequest',
		description: 'Request body for updating current user profile',
	});

/**
 * Used by updateUserLanguage function - POST /auth/language
 * Update user language schema
 */
export const UpdateUserLanguageSchema = z
	.object({
		user_id: UUID,
		language: z.string().length(2),
	})
	.openapi({
		title: 'UpdateUserLanguageRequest',
		description: 'Request body for updating user language',
	});

/**
 * Used by updateUserByUserId function - POST /users/me/update_user
 * Update scheduled user schema
 */
export const UpdateUserByUserIdSchema = z
	.object({
		user_id: UUID,
		data: z.object({
			first_name: z.string().min(1).optional(),
			last_name: z.string().min(1).optional(),
			telephone: PhoneNumber.optional(),
			email: Email.optional(),
			date_of_birth: z.string().datetime().optional(),
			language: z.string().length(2).optional(),
			details: z.record(z.any()).optional(),
		}),
	})
	.openapi({
		title: 'UpdateUserByUserIdRequest',
		description: 'Request body for updating a user by admin with user_id and data fields',
	});

/**
 * Used by updatePassword function - PATCH /users/me/password
 * Password update schema
 */
export const UpdatePasswordSchema = z
	.object({
		password: z.string().min(1),
		new_password: z.string().min(8),
	})
	.openapi({
		title: 'UpdatePasswordRequest',
		description: 'Request body for updating user password with current and new password',
	});

/**
 * Used by updateEmail function - PATCH /users/me/email
 * Email update schema
 */
export const UpdateEmailSchema = z
	.object({
		email: Email,
	})
	.openapi({
		title: 'UpdateEmailRequest',
		description: 'Request body for updating user email address',
	});

/**
 * Used by updateTelephone function - PATCH /users/me/phone
 * Telephone update schema
 */
export const UpdateTelephoneSchema = z
	.object({
		telephone: PhoneNumber,
		telephone_code: z.string().optional(),
	})
	.openapi({
		title: 'UpdateTelephoneRequest',
		description: 'Request body for updating user telephone number',
	});

// ===== PREFERENCES UPDATE REQUESTS =====

/**
 * Used by updateUserTaxiPreferences function - PATCH /users/me/taxi-preferences
 * Taxi preferences update schema
 */
export const UpdateTaxiPreferencesSchema = z
	.object({
		taxi_preferences: z.record(z.any()), // TODO: Define specific structure if available
	})
	.openapi({
		title: 'UpdateTaxiPreferencesRequest',
		description: 'Request body for updating user taxi preferences as JSON object',
	});

/**
 * Used by updateUserNotificationPreferences function - PATCH /users/me/notification-preferences
 * Notification preferences update schema
 */
export const UpdateNotificationPreferencesSchema = z
	.object({
		notification_preferences: z.record(z.any()),
	})
	.openapi({
		title: 'UpdateNotificationPreferencesRequest',
		description: 'Request body for updating user notification preferences as JSON object',
	});

/**
 * Used by updateUserTaxiPushNotifications function - PATCH /users/me/taxi-push-notification-preferences
 * Taxi push notification preferences update schema
 */
export const UpdateTaxiPushNotificationsSchema = z
	.object({
		taxi_push_notification_preferences: z.record(z.any()),
	})
	.openapi({
		title: 'UpdateTaxiPushNotificationsRequest',
		description: 'Request body for updating user taxi push notification preferences as JSON object',
	});

/**
 * Used by updateUserTransferPushNotifications function - PATCH /users/me/transfer-push-notification-preferences
 * Transfer push notification preferences update schema
 */
export const UpdateTransferPushNotificationsSchema = z
	.object({
		transfer_push_notification_preferences: z.record(z.any()),
	})
	.openapi({
		title: 'UpdateTransferPushNotificationsRequest',
		description: 'Request body for updating user transfer push notification preferences as JSON object',
	});

/**
 * Used by updateUserDeliveryPushNotifications function - PATCH /users/me/delivery-push-notification-preferences
 * Delivery push notification preferences update schema
 */
export const UpdateDeliveryPushNotificationsSchema = z
	.object({
		delivery_push_notification_preferences: z.record(z.any()),
	})
	.openapi({
		title: 'UpdateDeliveryPushNotificationsRequest',
		description: 'Request body for updating user delivery push notification preferences as JSON object',
	});

/**
 * Used by updateUserSpicyPreferences function - PATCH /users/me/spicy-preferences
 * Spicy preferences update schema
 */
export const UpdateSpicyPreferencesSchema = z
	.object({
		spicy_preferences: z.record(z.any()), // TODO: Define specific structure if available
	})
	.openapi({
		title: 'UpdateSpicyPreferencesRequest',
		description: 'Request body for updating user spicy food preferences as JSON object',
	});

/**
 * Used by updateUserTransferPreferences function - PATCH /users/me/transfer-preferences
 * Transfer preferences update schema
 */
export const UpdateTransferPreferencesSchema = z
	.object({
		transfer_preferences: z.record(z.any()), // TODO: Define specific structure if available
	})
	.openapi({
		title: 'UpdateTransferPreferencesRequest',
		description: 'Request body for updating user transfer preferences as JSON object',
	});

/**
 * Used by updateUserRadioPreferences function - PATCH /users/me/radio-preferences
 * Radio preferences update schema
 */
export const UpdateRadioPreferencesSchema = z
	.object({
		radio_preferences: z.record(z.any()), // TODO: Define specific structure if available
	})
	.openapi({
		title: 'UpdateRadioPreferencesRequest',
		description: 'Request body for updating user radio preferences as JSON object',
	});

/**
 * Used by updateUserAllergiesPreferences function - PATCH /users/me/allergies-preferences
 * Allergies preferences update schema
 */
export const UpdateAllergiesPreferencesSchema = z
	.object({
		allergies_preferences: z.record(z.any()), // TODO: Define specific structure if available
	})
	.openapi({
		title: 'UpdateAllergiesPreferencesRequest',
		description: 'Request body for updating user allergies preferences as JSON object',
	});

// ===== PROFILE PICTURE UPDATE REQUESTS =====

/**
 * Used by updateProfilePicture function - PATCH /users/me/profile_picture
 * Profile picture update schema with document and files data
 */
export const UpdateProfilePictureSchema = z
	.object({
		image: z.object({
			documentData: z.object({
				document_type: z.literal('PROFILE_PICTURE'),
				public: z.boolean().default(true),
			}),
			files: z
				.array(
					z.object({
						file_type: z.string(),
						mime_type: z.string(),
						base64: z.string(),
					})
				)
				.min(1),
		}),
	})
	.openapi({
		title: 'UpdateProfilePictureRequest',
		description: 'Request body for updating user profile picture with document and file data',
	});

// ===== VERIFICATION REQUESTS =====

/**
 * Used by verifyMe function - POST /users/me/verify/phone
 * SMS verification token schema
 */
export const VerifyPhoneSchema = z
	.object({
		token: z.string().min(1),
	})
	.openapi({
		title: 'VerifyPhoneRequest',
		description: 'Request body for verifying phone number with SMS token',
	});

/**
 * Used by oneSignalId function - POST /users/me/oneSignalId
 * OneSignal player ID update schema
 */
export const UpdateOneSignalIdSchema = z
	.object({
		player_id: z.string().min(1),
	})
	.openapi({
		title: 'UpdateOneSignalIdRequest',
		description: 'Request body for updating OneSignal player ID for push notifications',
	});

// ===== ADDRESS MANAGEMENT REQUESTS =====

/**
 * Used by addAddress function - POST /users/me/address
 * Add address schema
 */
export const AddAddressSchema = z
	.object({
		address: z.string().min(1),
		city: z.string().min(1),
		postal_code: z.string().min(1),
		country: z.string().length(2).default('SI'),
		latitude: z.number(),
		longitude: z.number(),
		details: z.record(z.any()).optional(), // TODO: Define specific structure if available
	})
	.openapi({
		title: 'AddAddressRequest',
		description: 'Request body for adding a new address to user',
	});

/**
 * Used by editAddress function - PATCH /users/me/address/:address_id
 * Edit address schema
 */
export const EditAddressSchema = AddAddressSchema.partial().openapi({
	title: 'EditAddressRequest',
	description: 'Request body for editing an existing user address',
});

// ===== REVIEW REQUESTS =====

/**
 * Used by reviewUser function - POST /users/review
 * Review user schema
 */
export const ReviewUserSchema = z
	.object({
		user_id: UUID,
		comment: z.string().min(1),
		rating: z.number().min(1).max(5),
		feedback: z.record(z.any()).optional(),
	})
	.openapi({
		title: 'ReviewUserRequest',
		description: 'Request body for creating a review for a user',
	});

// ===== PAYMENT REQUESTS =====

/**
 * Used by requestToAddFundsToWallet function - POST /users/me/requestToAddFunds
 * Request to add funds to wallet schema
 */
export const RequestToAddFundsSchema = z
	.object({
		amount: z.number().positive(),
		currency: z.string().length(3).default('EUR'),
		payment_method_id: z.string().min(1),
		return_url: z.string().url().optional(),
	})
	.openapi({
		title: 'RequestToAddFundsRequest',
		description: 'Request body for creating payment intent to add funds to wallet',
	});

/**
 * Used by requestPaymentIntent function - POST /users/me/request-payment-intent
 * Request payment intent schema
 */
export const RequestPaymentIntentSchema = z
	.object({
		amount: z.number().positive(),
		currency: z.string().length(3).default('EUR'),
		return_url: z.string().url().optional(),
	})
	.openapi({
		title: 'RequestPaymentIntentRequest',
		description: 'Request body for creating a general payment intent',
	});

/**
 * Used by confirmPaymentIntent function - POST /users/me/confirm-payment-intent
 * Confirm payment intent schema
 */
export const ConfirmPaymentIntentSchema = z
	.object({
		payment_intent_id: z.string().min(1),
	})
	.openapi({
		title: 'ConfirmPaymentIntentRequest',
		description: 'Request body for confirming a payment intent by ID',
	});

// ===== ADMIN USER MANAGEMENT REQUESTS =====

/**
 * Used by updateUserActiveByUserId function - PATCH /users/active/:user_id
 * Update user active status schema
 */
export const UpdateUserActiveSchema = z
	.object({
		active: z.boolean(),
		reason: z.string().min(1),
	})
	.openapi({
		title: 'UpdateUserActiveRequest',
		description: 'Request body for updating user active status with reason',
	});

/**
 * Used by updateUserDisabledByUserId function - PATCH /users/disabled/:user_id
 * Update user disabled status schema
 */
export const UpdateUserDisabledSchema = z
	.object({
		disabled: z.boolean(),
		reason: z.string().min(1),
	})
	.openapi({
		title: 'UpdateUserDisabledRequest',
		description: 'Request body for updating user disabled status with reason',
	});

/**
 * Used by softDeleteUserByUserId function - DELETE /users/delete/:user_id
 * Soft delete user schema
 */
export const SoftDeleteUserSchema = z
	.object({
		reason: z.string().min(1),
	})
	.openapi({
		title: 'SoftDeleteUserRequest',
		description: 'Request body for soft deleting a user with reason',
	});

/**
 * Used by updateWalletBalance function - PATCH /users/:user_id/wallet
 * Update wallet balance schema
 */
export const UpdateWalletBalanceSchema = z
	.object({
		amount: z.number(),
		documents: z.array(z.record(z.any())).optional(),
	})
	.openapi({
		title: 'UpdateWalletBalanceRequest',
		description: 'Request body for updating user wallet balance with optional document attachments',
	});

// ===== GROUP USER (FAMILY) REQUESTS =====

/**
 * Used by registerChildUser function - POST /users/me/group_user/register-child
 * Register child user schema
 */
export const RegisterChildUserSchema = z
	.object({
		first_name: z.string().min(1),
		last_name: z.string().min(1),
		email: Email.optional(),
		telephone: PhoneNumber,
		telephone_code: z.string(),
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
		parent_user_id: UUID,
	})
	.openapi({
		title: 'RegisterChildUserRequest',
		description: 'Request body for registering a new child user linked to parent',
	});

/**
 * Used by updateChildUserEnabledByGroupUserId function - PATCH /users/me/group_user/status
 * Update child user enabled status schema
 */
export const UpdateChildUserEnabledSchema = z
	.object({
		group_user_id: UUID,
		value: z.boolean(),
	})
	.openapi({
		title: 'UpdateChildUserEnabledRequest',
		description: 'Request body for updating child user enabled status',
	});

/**
 * Used by updateChildUserAllowanceByGroupUserId function - PATCH /users/me/group_user/allowance
 * Update child user allowance schema
 */
export const UpdateChildUserAllowanceSchema = z
	.object({
		group_user_id: UUID,
		value: z.number().nonnegative(),
		type: z.string(),
	})
	.openapi({
		title: 'UpdateChildUserAllowanceRequest',
		description: 'Request body for updating child user allowance for specific service type',
	});

// ===== REFERRAL REQUESTS =====

/**
 * Used by redeemReferralCode function - POST /users/me/redeem-referral-code
 * Redeem referral code schema
 */
export const RedeemReferralCodeSchema = z
	.object({
		referral_code: z.string().length(6),
	})
	.openapi({
		title: 'RedeemReferralCodeRequest',
		description: 'Request body for redeeming a referral code',
	});

/**
 * Used by claimReward function - PATCH /users/me/claim-reward
 * Claim referral reward schema
 */
export const ClaimRewardSchema = z
	.object({
		referral_id: UUID,
	})
	.openapi({
		title: 'ClaimRewardRequest',
		description: 'Request body for claiming referral reward',
	});

// ===== PRIVACY & MARKETING REQUESTS =====

/**
 * Used by updateMarketingNotifications function - PATCH /users/me/marketing-notifications
 * Update marketing notifications preference schema
 */
export const UpdateMarketingNotificationsSchema = z
	.object({
		data: z.object({
			allow_marketing_push_notifications: z.boolean(),
		}),
	})
	.openapi({
		title: 'UpdateMarketingNotificationsRequest',
		description: 'Request body for updating marketing notifications preferences',
	});

/**
 * Used by updateAdsPersonalization function - PATCH /users/me/ads-personalization
 * Update ads personalization preference schema
 */
export const UpdateAdsPersonalizationSchema = z
	.object({
		data: z.object({
			allow_ads_personalization: z.boolean(),
		}),
	})
	.openapi({
		title: 'UpdateAdsPersonalizationRequest',
		description: 'Request body for updating ads personalization preferences',
	});

/**
 * Used by updateNewsletter function - PATCH /users/me/newsletter
 * Update newsletter subscription preference schema
 */
export const UpdateNewsletterSchema = z
	.object({
		data: z.object({
			allow_newsletter: z.boolean(),
		}),
	})
	.openapi({
		title: 'UpdateNewsletterRequest',
		description: 'Request body for updating newsletter subscription preferences',
	});

// ===== FAMILY INVITATION REQUESTS =====

/**
 * Used by inviteFamilyMember function - POST /users/family/invite
 * Invite family member schema
 */
export const InviteFamilyMemberSchema = z
	.object({
		email: Email.optional(),
		telephone: PhoneNumber.optional(),
	})
	.refine((data) => data.email || data.telephone, {
		message: 'Either email or telephone is required',
	})
	.openapi({
		title: 'InviteFamilyMemberRequest',
		description: 'Request body for inviting a family member via email or telephone',
	});

/**
 * Used by acceptFamilyInvitation function - POST /users/family/accept-invitation
 * Accept family invitation schema
 */
export const AcceptFamilyInvitationSchema = z
	.object({
		invitationCode: z.string().min(1),
	})
	.openapi({
		title: 'AcceptFamilyInvitationRequest',
		description: 'Request body for accepting a family invitation with invitation code',
	});

/**
 * Used by updateFavoriteServices function - PATCH /users/me/favorite-services
 * Update favorite services schema
 */
export const UpdateFavoriteServicesBodySchema = z
	.object({ services: z.array(z.nativeEnum(SERVICES)) })
	.openapi('UpdateFavoriteServicesBody');
export type UpdateFavoriteServicesBody = z.infer<typeof UpdateFavoriteServicesBodySchema>;

// Export all types
export type UpdateMeRequest = z.infer<typeof UpdateMeSchema>;
export type UpdateUserByUserIdRequest = z.infer<typeof UpdateUserByUserIdSchema>;
export type UpdatePasswordRequest = z.infer<typeof UpdatePasswordSchema>;
export type UpdateEmailRequest = z.infer<typeof UpdateEmailSchema>;
export type UpdateTelephoneRequest = z.infer<typeof UpdateTelephoneSchema>;
export type UpdateTaxiPreferencesRequest = z.infer<typeof UpdateTaxiPreferencesSchema>;
export type UpdateNotificationPreferencesRequest = z.infer<typeof UpdateNotificationPreferencesSchema>;
export type UpdateTaxiPushNotificationsRequest = z.infer<typeof UpdateTaxiPushNotificationsSchema>;
export type UpdateTransferPushNotificationsRequest = z.infer<typeof UpdateTransferPushNotificationsSchema>;
export type UpdateDeliveryPushNotificationsRequest = z.infer<typeof UpdateDeliveryPushNotificationsSchema>;
export type UpdateSpicyPreferencesRequest = z.infer<typeof UpdateSpicyPreferencesSchema>;
export type UpdateTransferPreferencesRequest = z.infer<typeof UpdateTransferPreferencesSchema>;
export type UpdateRadioPreferencesRequest = z.infer<typeof UpdateRadioPreferencesSchema>;
export type UpdateAllergiesPreferencesRequest = z.infer<typeof UpdateAllergiesPreferencesSchema>;
export type UpdateProfilePictureRequest = z.infer<typeof UpdateProfilePictureSchema>;
export type VerifyPhoneRequest = z.infer<typeof VerifyPhoneSchema>;
export type UpdateOneSignalIdRequest = z.infer<typeof UpdateOneSignalIdSchema>;
export type AddAddressRequest = z.infer<typeof AddAddressSchema>;
export type EditAddressRequest = z.infer<typeof EditAddressSchema>;
export type ReviewUserRequest = z.infer<typeof ReviewUserSchema>;
export type RequestToAddFundsRequest = z.infer<typeof RequestToAddFundsSchema>;
export type RequestPaymentIntentRequest = z.infer<typeof RequestPaymentIntentSchema>;
export type ConfirmPaymentIntentRequest = z.infer<typeof ConfirmPaymentIntentSchema>;
export type UpdateUserActiveRequest = z.infer<typeof UpdateUserActiveSchema>;
export type UpdateUserDisabledRequest = z.infer<typeof UpdateUserDisabledSchema>;
export type SoftDeleteUserRequest = z.infer<typeof SoftDeleteUserSchema>;
export type UpdateWalletBalanceRequest = z.infer<typeof UpdateWalletBalanceSchema>;
export type RegisterChildUserRequest = z.infer<typeof RegisterChildUserSchema>;
export type UpdateChildUserEnabledRequest = z.infer<typeof UpdateChildUserEnabledSchema>;
export type UpdateChildUserAllowanceRequest = z.infer<typeof UpdateChildUserAllowanceSchema>;
export type RedeemReferralCodeRequest = z.infer<typeof RedeemReferralCodeSchema>;
export type ClaimRewardRequest = z.infer<typeof ClaimRewardSchema>;
export type UpdateMarketingNotificationsRequest = z.infer<typeof UpdateMarketingNotificationsSchema>;
export type UpdateAdsPersonalizationRequest = z.infer<typeof UpdateAdsPersonalizationSchema>;
export type UpdateNewsletterRequest = z.infer<typeof UpdateNewsletterSchema>;
export type InviteFamilyMemberRequest = z.infer<typeof InviteFamilyMemberSchema>;
export type AcceptFamilyInvitationRequest = z.infer<typeof AcceptFamilyInvitationSchema>;
export type UpdateUserLanguageRequest = z.infer<typeof UpdateUserLanguageSchema>;

/**
 * Register all User request schemas with the OpenAPI registry
 */
export function registerSchemas(registry: OpenAPIRegistry) {
	// Profile update schemas
	registry.register('UpdateMeRequest', UpdateMeSchema);
	registry.register('UpdateUserByUserIdRequest', UpdateUserByUserIdSchema);
	registry.register('UpdatePasswordRequest', UpdatePasswordSchema);
	registry.register('UpdateEmailRequest', UpdateEmailSchema);
	registry.register('UpdateTelephoneRequest', UpdateTelephoneSchema);
	registry.register('UpdateUserLanguageRequest', UpdateUserLanguageSchema);
	// Preferences schemas
	registry.register('UpdateTaxiPreferencesRequest', UpdateTaxiPreferencesSchema);
	registry.register('UpdateNotificationPreferencesRequest', UpdateNotificationPreferencesSchema);
	registry.register('UpdateTaxiPushNotificationsRequest', UpdateTaxiPushNotificationsSchema);
	registry.register('UpdateTransferPushNotificationsRequest', UpdateTransferPushNotificationsSchema);
	registry.register('UpdateDeliveryPushNotificationsRequest', UpdateDeliveryPushNotificationsSchema);
	registry.register('UpdateSpicyPreferencesRequest', UpdateSpicyPreferencesSchema);
	registry.register('UpdateTransferPreferencesRequest', UpdateTransferPreferencesSchema);
	registry.register('UpdateRadioPreferencesRequest', UpdateRadioPreferencesSchema);
	registry.register('UpdateAllergiesPreferencesRequest', UpdateAllergiesPreferencesSchema);

	registry.register('UpdateUserRequest', UpdateUserSchema);
	// Profile picture schema
	registry.register('UpdateProfilePictureRequest', UpdateProfilePictureSchema);

	// Verification schemas
	registry.register('VerifyPhoneRequest', VerifyPhoneSchema);
	registry.register('UpdateOneSignalIdRequest', UpdateOneSignalIdSchema);

	// Address management schemas
	registry.register('AddAddressRequest', AddAddressSchema);
	registry.register('EditAddressRequest', EditAddressSchema);

	// Review schema
	registry.register('ReviewUserRequest', ReviewUserSchema);

	// Payment schemas
	registry.register('RequestToAddFundsRequest', RequestToAddFundsSchema);
	registry.register('RequestPaymentIntentRequest', RequestPaymentIntentSchema);
	registry.register('ConfirmPaymentIntentRequest', ConfirmPaymentIntentSchema);

	// Admin user management schemas
	registry.register('UpdateUserActiveRequest', UpdateUserActiveSchema);
	registry.register('UpdateUserDisabledRequest', UpdateUserDisabledSchema);
	registry.register('SoftDeleteUserRequest', SoftDeleteUserSchema);
	registry.register('UpdateWalletBalanceRequest', UpdateWalletBalanceSchema);

	// Group user (family) schemas
	registry.register('RegisterChildUserRequest', RegisterChildUserSchema);
	registry.register('UpdateChildUserEnabledRequest', UpdateChildUserEnabledSchema);
	registry.register('UpdateChildUserAllowanceRequest', UpdateChildUserAllowanceSchema);

	// Referral schemas
	registry.register('RedeemReferralCodeRequest', RedeemReferralCodeSchema);
	registry.register('ClaimRewardRequest', ClaimRewardSchema);

	// Privacy & marketing schemas
	registry.register('UpdateMarketingNotificationsRequest', UpdateMarketingNotificationsSchema);
	registry.register('UpdateAdsPersonalizationRequest', UpdateAdsPersonalizationSchema);
	registry.register('UpdateNewsletterRequest', UpdateNewsletterSchema);

	// Family invitation schemas
	registry.register('InviteFamilyMemberRequest', InviteFamilyMemberSchema);
	registry.register('AcceptFamilyInvitationRequest', AcceptFamilyInvitationSchema);
	registry.register('UpdateFavoriteServicesBody', UpdateFavoriteServicesBodySchema);
}
