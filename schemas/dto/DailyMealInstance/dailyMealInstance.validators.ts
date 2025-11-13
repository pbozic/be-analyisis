import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== Request Schemas =====
// Note: DailyMealInstance may not have route-level validators
// This file is a placeholder for future request schemas

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	// No request schemas currently - add as needed
}
