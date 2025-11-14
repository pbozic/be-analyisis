import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== Request Schemas =====
// Note: DailyMealSubscription request schemas are in DailyMeal/dailymeal.validators.ts
// (CreateDailyMealSubscriptionDaoInputSchema, etc.)
// This file is a placeholder for future DailyMealSubscription-specific validators

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	// No request schemas currently - add as needed
}
