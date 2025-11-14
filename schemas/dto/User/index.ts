import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerUserSchemas } from './user.js';
import { registerSchemas as registerUserValidatorSchemas } from './user.validators.js';
import { registerSchemas as registerTransactionSchemas } from './transaction.js';
import { registerSchemas as registerAllowanceSchemas } from './allowance.js';

// === User DTOs (Response) ===
export {
	UserBaseSchema,
	UserRefSchema,
	UserResponseSchema,
	UserWithBusinessUsersResponseSchema,
	UserWithAddressesResponseSchema,
	UserDetailResponseSchema,
	UserWithTransactionsResponseSchema,
	UserListResponseSchema,
	type UserBase,
	type UserRef,
	type UserResponse,
	type UserWithBusinessUsersResponse,
	type UserWithAddressesResponse,
	type UserDetailResponse,
	type UserWithTransactionsResponse,
	type UserListResponse,
	type UserWithFavouritesResponse,
} from './user.js';

// === User Validators (Request Body, Query, Params) ===
export {
	UpdateMeSchema,
	UpdateUserLanguageSchema,
	UpdateUserByUserIdSchema,
	UpdatePasswordSchema,
	UpdateEmailSchema,
	UpdateTelephoneSchema,
	AddAddressSchema,
	EditAddressSchema,
	UpdateOneSignalIdSchema,
	VerifyPhoneSchema,
	RequestToAddFundsSchema,
	RequestPaymentIntentSchema,
	ConfirmPaymentIntentSchema,
	UpdateUserActiveSchema,
	UpdateUserDisabledSchema,
	SoftDeleteUserSchema,
	UpdateTaxiPreferencesSchema,
	UpdateNotificationPreferencesSchema,
	UpdateTaxiPushNotificationsSchema,
	UpdateTransferPushNotificationsSchema,
	UpdateDeliveryPushNotificationsSchema,
	UpdateSpicyPreferencesSchema,
	UpdateTransferPreferencesSchema,
	UpdateRadioPreferencesSchema,
	UpdateAllergiesPreferencesSchema,
	UpdateProfilePictureSchema,
	RedeemReferralCodeSchema,
	ClaimRewardSchema,
	UpdateMarketingNotificationsSchema,
	UpdateAdsPersonalizationSchema,
	UpdateNewsletterSchema,
	InviteFamilyMemberSchema,
	AcceptFamilyInvitationSchema,
	UpdateWalletBalanceSchema,
	UpdateFavoriteServicesBodySchema,
	UpdateChildUserAllowanceSchema,
	type UpdateMeRequest,
	type UpdateUserLanguageRequest,
	type UpdateUserByUserIdRequest,
	type UpdatePasswordRequest,
	type UpdateEmailRequest,
	type UpdateTelephoneRequest,
	type AddAddressInput,
	type EditAddressInput,
	type UpdateOneSignalIdRequest,
	type VerifyPhoneRequest,
	type RequestToAddFundsRequest,
	type RequestPaymentIntentRequest,
	type ConfirmPaymentIntentRequest,
	type UpdateUserActiveRequest,
	type UpdateUserDisabledRequest,
	type SoftDeleteUserRequest,
	type UpdateTaxiPreferencesRequest,
	type UpdateNotificationPreferencesRequest,
	type UpdateTaxiPushNotificationsRequest,
	type UpdateTransferPushNotificationsRequest,
	type UpdateDeliveryPushNotificationsRequest,
	type UpdateSpicyPreferencesRequest,
	type UpdateTransferPreferencesRequest,
	type UpdateRadioPreferencesRequest,
	type UpdateAllergiesPreferencesRequest,
	type UpdateProfilePictureRequest,
	type RedeemReferralCodeRequest,
	type ClaimRewardRequest,
	type UpdateMarketingNotificationsRequest,
	type UpdateAdsPersonalizationRequest,
	type UpdateNewsletterRequest,
	type InviteFamilyMemberRequest,
	type AcceptFamilyInvitationRequest,
	type UpdateWalletBalanceRequest,
	type UpdateFavoriteServicesBody,
	type UpdateChildUserAllowanceRequest,
} from './user.validators.js';

// === Transaction DTOs ===
export {
	TransactionBaseSchema,
	TransactionRefSchema,
	TransactionResponseSchema,
	TransactionListResponseSchema,
	type TransactionBase,
	type TransactionRef,
	type TransactionResponse,
	type TransactionListResponse,
} from './transaction.js';

// === Allowance DTOs ===
export {
	AllowanceBaseSchema,
	AllowanceRefSchema,
	AllowanceResponseSchema,
	type AllowanceBase,
	type AllowanceRef,
	type AllowanceResponse,
} from './allowance.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerUserSchemas(registry);
	registerUserValidatorSchemas(registry);
	registerTransactionSchemas(registry);
	registerAllowanceSchemas(registry);
}
