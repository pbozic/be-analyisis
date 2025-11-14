import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerDailyMealInstanceSchemas } from './dailyMealInstance.dto.js';
import { registerSchemas as registerDailyMealInstanceValidatorSchemas } from './dailyMealInstance.validators.js';

// === DailyMealInstance DTOs (Response) ===
export {
	DailyMealInstanceBaseSchema,
	DailyMealInstanceRefSchema,
	DailyMealInstanceResponseSchema,
	type DailyMealInstanceBase,
	type DailyMealInstanceRef,
	type DailyMealInstanceResponse,
} from './dailyMealInstance.dto.js';

// === DailyMealInstance Validators (Request Body, Query, Params) ===
// Note: No validators exported from dailyMealInstance.validators.js currently

// === DailyMealInstance Mappers ===
export { toDailyMealInstanceResponse, toDailyMealInstanceList } from './dailyMealInstance.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerDailyMealInstanceSchemas(registry);
	registerDailyMealInstanceValidatorSchemas(registry);
}
