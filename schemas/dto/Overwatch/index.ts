import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerOverwatchSchemas } from './overwatch.dto.js';

// === Overwatch DTOs (Response) ===
export { DriverActivitySettingsResponseSchema } from './overwatch.dto.js';

// === Overwatch Validators (Request Body, Query, Params) ===
export {
	GetOrdersWithPaginationSchema,
	UpdateDriverActivitySettingsSchema,
	ServiceTypeSchema,
	type GetOrdersWithPaginationInput,
	type UpdateDriverActivitySettingsInput,
} from './overwatch.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerOverwatchSchemas(registry);
}
