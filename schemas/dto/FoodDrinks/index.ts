import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerFoodDrinksSchemas } from './foodDrinks.dto.js';
import { registerSchemas as registerFoodDrinksValidatorSchemas } from './foodDrinks.validators.js';

// === FoodDrinks DTOs (Response) ===
export {
	FoodDrinksBaseSchema,
	FoodDrinksDetailSchema,
	type FoodDrinksBase,
	type FoodDrinksDetail,
} from './foodDrinks.dto.js';

// === FoodDrinks Validators (Request Body, Query, Params) ===
export {
	FoodDrinksOnlineBodySchema,
	FoodDrinksOverwhelmedBodySchema,
	type FoodDrinksOnlineBody,
	type FoodDrinksOverwhelmedBody,
} from './foodDrinks.validators.js';

// === FoodDrinks Mappers ===
export { toFoodDrinksDetail } from './foodDrinks.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerFoodDrinksSchemas(registry);
	registerFoodDrinksValidatorSchemas(registry);
}
