import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerDailyMealSubscriptionSchemas } from './dailymealSubscription.dto.js';
import { registerSchemas as registerDailyMealSubscriptionValidatorSchemas } from './dailymealSubscription.validators.js';

// === DailyMealSubscription DTOs (Response) ===
export {
	DailyMealSubscriptionBaseSchema,
	DailyMealSubscriptionRefSchema,
	type DailyMealSubscriptionBase,
	type DailyMealSubscriptionRef,
} from './dailymealSubscription.dto.js';

// === DailyMealSubscription Validators (Request Body, Query, Params) ===
// Note: No validators exported from dailymealSubscription.validators.js currently

// === DailyMealSubscription Mappers ===
export { toDailyMealSubscriptionResponse, toDailyMealSubscriptionList } from './dailyMealSubscription.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerDailyMealSubscriptionSchemas(registry);
	registerDailyMealSubscriptionValidatorSchemas(registry);
}
