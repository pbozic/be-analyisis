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
	MenuRefSchema,
	DailyMealsRefSchema,
	BusinessWithDailyMealsResponseDto,
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
	type TransportModuleRef,
	type FoodDrinksModuleRef,
	type StoresModuleRef,
	type ReservationModuleRef,
	type CrmModuleRef,
	type MenuRef,
	type DailyMealsRef,
	type MenuItemRef,
	type MenuCategoryRef,
	type BusinessByIdResponse,
	toBusinessByIdResponse,
	registerSchemas as registerBusinessSchemas,
} from './business.dto.js';

// Legacy exports for backwards compatibility
export {
	BusinessBaseSchema,
	BusinessRefSchema as BusinessRefSchemaLegacy,
	BusinessResponseSchema,
	BusinessListResponseSchema,
	BusinessSearchResponseSchema,
	BusinessAdminResponseSchema,
	type BusinessBase,
	type BusinessRef as BusinessRefLegacy,
	type BusinessResponse as BusinessResponseLegacy,
	type BusinessListResponse,
	type BusinessSearchResponse,
	type BusinessAdminResponse,
	registerSchemas as registerLegacyBusinessSchemas,
} from './business.js';

// BusinessUser DTOs
export {
	BusinessUserBaseSchema,
	BusinessUserRefSchema,
	BusinessUserDetailSchema,
	BusinessUserResponseSchema,
	type BusinessUserBase,
	type BusinessUserRef,
	type BusinessUserDetail,
	type BusinessUserResponse,
	registerSchemas as registerBusinessUserSchemas,
} from '../BusinessUser/businessUser.js';

// BusinessType DTOs
export {
	BusinessTypeBaseSchema,
	BusinessTypeRefSchema,
	BusinessTypeResponseSchema,
	BusinessToTypesSchema,
	type BusinessTypeBase,
	type BusinessTypeRef,
	type BusinessTypeResponse,
	type BusinessToTypes,
	registerSchemas as registerBusinessTypeSchemas,
} from './businessType.js';

// Schema Registration
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { registerSchemas as registerBusinessSchemas } from './business.dto.js';
import { registerSchemas as registerLegacyBusinessSchemas } from './business.js';
import { registerSchemas as registerBusinessUserSchemas } from '../BusinessUser/businessUser.js';
import { registerSchemas as registerBusinessTypeSchemas } from './businessType.js';

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register new business schemas with modules
	registerBusinessSchemas(registry);

	// Register legacy business schemas for backwards compatibility
	registerLegacyBusinessSchemas(registry);

	// Register business user schemas
	registerBusinessUserSchemas(registry);
	// Register business type schemas
	registerBusinessTypeSchemas(registry);
}
