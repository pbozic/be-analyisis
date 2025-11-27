// Business DTOs
export {
	BusinessCreateDto,
	BusinessResponseDto,
	BusinessRefSchema,
	BusinessWithTransportResponseDto,
	BusinessWithFoodDrinksResponseDto,
	BusinessWithFoodDrinksAndDailyMealsResponseDto,
	BusinessWithStoresResponseDto,
	BusinessWithReservationResponseDto,
	BusinessWithCrmResponseDto,
	BusinessWithAllModulesResponseDto,
	CrmModuleRefSchema,
	DailyMealsModuleSchema,
	BusinessWithDailyMealsResponseDto,
	BusinessWithAddressAndUsersResponseDto,
	BusinessWithIncludesResponseDto,
	type BusinessCreateDto as BusinessCreate,
	type BusinessResponseDto as BusinessResponse,
	type BusinessRefSchema as BusinessRef,
	type BusinessWithTransportResponseDto as BusinessWithTransportResponse,
	type BusinessWithFoodDrinksResponseDto as BusinessWithFoodDrinksResponse,
	type BusinessWithFoodDrinksAndDailyMealsResponseDto as BusinessWithFoodDrinksAndDailyMealsResponse,
	type BusinessWithStoresResponseDto as BusinessWithStoresResponse,
	type BusinessWithReservationResponseDto as BusinessWithReservationResponse,
	type BusinessWithCrmResponseDto as BusinessWithCrmResponse,
	type BusinessWithAllModulesResponseDto as BusinessWithAllModulesResponse,
	type ReservationModuleRef,
	type CrmModuleRef,
	type DailyMealsModule,
	registerSchemas as registerBusinessSchemas,
} from './business.dto.js';

// Business Validators
export {
	SetBusinessTypesSchema,
	GetBusinessesSchema,
	AddBusinessToFavoritesSchema,
	RemoveBusinessFromFavoritesSchema,
	ActivateBusinessSchema,
	DeactivateBusinessSchema,
	AddAddressSchema,
	ManualSortScheduledUsersSchema,
	AddScheduledUserSortingTypeSchema,
	GetBusinessEarningsParamsSchema,
	GetBusinessEarningsQuerySchema,
	GetAllBusinessesEarningsQuerySchema,
	GetBusinessTotalEarningsParamsSchema,
	UpdateBusinessSchema,
	UpdateBusinessTypeSchema,
	UpdateIsBusinessUnitSchema,
	UpdateBusinessGroupNameSchema,
	UpdateBusinessEmailSchema,
	UpdateBusinessTelephoneSchema,
	UpdateBusinessWorkingHoursSchema,
	UpdateBusinessIsNewSchema,
	UpdateBusinessIsPopularSchema,
	UpdateParentBusinessIdSchema,
	CreateScoringPointsSchema,
	CreateBusinessLocalLocationSchema,
	UpdateBusinessLocalLocationSchema,
	GetBusinessAnalyticsSchema,
	ToggleTransportModuleSchema,
	BusinessIdParamsSchema,
	GetBusinessForSearchSchema,
	ParentBusinessIdParamsSchema,
	CreateBusinessSchema,
	SearchBusinessesByNameSchema,
	SearchBusinessesByGroupNameParamsSchema,
	CreatePaymentIntentSchema,
	type SetBusinessTypesInput,
	type GetBusinessesInput,
	type AddBusinessToFavoritesInput,
	type RemoveBusinessFromFavoritesInput,
	type ActivateBusinessInput,
	type DeactivateBusinessInput,
	type AddAddressInput,
	type ManualSortScheduledUsersInput,
	type AddScheduledUserSortingTypeInput,
	type GetBusinessEarningsParamsInput,
	type GetBusinessEarningsQueryInput,
	type GetAllBusinessesEarningsQueryInput,
	type GetBusinessTotalEarningsParamsInput,
	type UpdateBusinessInput,
	type UpdateBusinessTypeInput,
	type UpdateIsBusinessUnitInput,
	type UpdateBusinessGroupNameInput,
	type UpdateBusinessEmailInput,
	type UpdateBusinessTelephoneInput,
	type UpdateBusinessWorkingHoursInput,
	type UpdateBusinessIsNewInput,
	type UpdateBusinessIsPopularInput,
	type UpdateParentBusinessIdInput,
	type CreateScoringPointsInput,
	type CreateBusinessLocalLocationInput,
	type UpdateBusinessLocalLocationInput,
	type GetBusinessAnalyticsInput,
	type ToggleTransportModuleInput,
	type BusinessIdParamsInput,
	type GetBusinessForSearchInput,
	type ParentBusinessIdParamsInput,
	type CreateBusinessInput,
	type SearchBusinessesByNameInput,
	type SearchBusinessesByGroupNameParamsInput,
	type CreatePaymentIntentInput,
	registerSchemas as registerBusinessValidatorSchemas,
} from './business.validators.js';

// Note: mappers are implemented in `business.mappers.ts` and should be imported directly
// where needed to avoid large transitive re-exports.

// Legacy exports for backwards compatibility
export {
	BusinessBaseSchema,
	BusinessResponseSchema,
	BusinessListResponseSchema,
	BusinessSearchResponseSchema,
	type BusinessBase,
	type BusinessResponse as BusinessResponseLegacy,
	type BusinessListResponse,
	type BusinessSearchResponse,
	registerSchemas as registerLegacyBusinessSchemas,
} from './business.js';

// BusinessUser DTOs
export {
	BusinessUserBaseSchema,
	BusinessUserRefSchema,
	BusinessUserLightSchema,
	UserMinimalRefSchema,
	BusinessUserDetailSchema,
	BusinessUserResponseSchema,
	type BusinessUserBase,
	type BusinessUserRef,
	type BusinessUserLight,
	type UserMinimalRef,
	type BusinessUserDetail,
	type BusinessUserResponse,
	registerSchemas as registerBusinessUserSchemas,
} from '../BusinessUser/businessUser.js';

// Schema Registration
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { registerSchemas as registerBusinessSchemas } from './business.dto.js';
import { registerSchemas as registerLegacyBusinessSchemas } from './business.js';
import { registerSchemas as registerBusinessValidatorSchemas } from './business.validators.js';
import { registerSchemas as registerBusinessUserSchemas } from '../BusinessUser/businessUser.js';

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register new business schemas with modules
	registerBusinessSchemas(registry);

	// Register legacy business schemas for backwards compatibility
	registerLegacyBusinessSchemas(registry);

	// Register business validator schemas
	registerBusinessValidatorSchemas(registry);

	// Register business user schemas
	registerBusinessUserSchemas(registry);
}
