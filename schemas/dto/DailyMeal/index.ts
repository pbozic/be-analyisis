import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerDailyMealSchemas } from './dailymeal.dto.js';
import { registerSchemas as registerDailyMealValidatorSchemas } from './dailymeal.validators.js';

// === DailyMeal DTOs (Response) ===
export {
	DailyMealSubscriptionBaseSchema,
	DailyMealSubscriptionRefSchema,
	DailyMealSubscriptionDetailSchema,
	type DailyMealSubscriptionBase,
	type DailyMealSubscriptionRef,
	type DailyMealSubscriptionDetail,
} from './dailymeal.dto.js';

// === DailyMeal Validators (Request Body, Query, Params) ===
// Note: These are DAO input schemas but are used in routes with validate()
export {
	GetDailyMealSubscriptionsByBusinessIdDaoInputSchema,
	GetActiveDailyMealSubscriptionsByBusinessIdDaoInputSchema,
	GetDailyMealSubscriptionsByUserIdDaoInputSchema,
	GetTodayDailyMealSubscriptionsByBusinessIdDaoInputSchema,
	GetDailyMealSubscriptionByIdDaoInputSchema,
	CreateDailyMealSubscriptionDaoInputSchema,
	GetSubscriptionByIdDaoInputSchema,
	UpdateSubscriptionStatusDaoInputSchema,
	ConnectSubscriptionWithDriverDaoInputSchema,
	UpdateDailyMealInstancesDaoInputSchema,
	UpdateDailyMealInstanceStatusByIdDaoInputSchema,
	type GetDailyMealSubscriptionsByBusinessIdDaoInput,
	type GetActiveDailyMealSubscriptionsByBusinessIdDaoInput,
	type GetDailyMealSubscriptionsByUserIdDaoInput,
	type GetTodayDailyMealSubscriptionsByBusinessIdDaoInput,
	type GetDailyMealSubscriptionByIdDaoInput,
	type CreateDailyMealSubscriptionDaoInput,
	type GetSubscriptionByIdDaoInput,
	type UpdateSubscriptionStatusDaoInput,
	type ConnectSubscriptionWithDriverDaoInput,
	type UpdateDailyMealInstancesDaoInput,
	type UpdateDailyMealInstanceStatusByIdDaoInput,
} from './dailymeal.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerDailyMealSchemas(registry);
	registerDailyMealValidatorSchemas(registry);
}
