import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerDailyMealCategorySchemas } from './dailyMealCategory.js';
import { registerSchemas as registerDailyMealCategoryValidatorSchemas } from './dailyMealCategory.validators.js';

// === DailyMealCategory DTOs (Response) ===
export {
	DailyMealCategoryPriceBaseSchema,
	DailyMealCategoryPriceRefSchema,
	DailyMealCategoryBaseSchema,
	DailyMealCategoryDetailSchema,
	type DailyMealCategoryPriceBase,
	type DailyMealCategoryPriceRef,
	type DailyMealCategoryBase,
	type DailyMealCategoryDetail,
} from './dailyMealCategory.js';

// === DailyMealCategory Validators (Request Body, Query, Params) ===
export {
	CreateDailyMealCategoryWithPriceSchema,
	AddPriceToDailyMealCategorySchema,
	type CreateDailyMealCategoryWithPriceInput,
	type AddPriceToDailyMealCategoryInput,
} from './dailyMealCategory.validators.js';

// === DailyMealCategory Mappers ===
export {
	toDailyMealCategoryPriceBase,
	toDailyMealCategoryDetail,
	toDailyMealCategoryResponse,
	toDailyMealCategoryList,
} from './dailyMealCategory.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerDailyMealCategorySchemas(registry);
	registerDailyMealCategoryValidatorSchemas(registry);
}
