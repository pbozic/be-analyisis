import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerSearchValidatorSchemas } from './search.validators.js';

// === Search Validators (Request Body, Query, Params) ===
export {
	SearchBusinessQuerySchema,
	ListPromoSectionsMerchantBodySchema,
	SearchBusinessesBodySchema,
	SearchByNameQuerySchema,
	type SearchBusinessQuery,
	type ListPromoSectionsMerchantBody,
	type SearchBusinessesBody,
	type SearchByNameQuery,
} from './search.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerSearchValidatorSchemas(registry);
}
