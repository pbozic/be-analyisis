import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerGoogleMapsSchemas } from './googlemaps.dto.js';

// === GoogleMaps DTOs (Response) ===
export {
	AutocompleteResponseSchema,
	PlacePredictionSchema,
	type AutocompleteResponse,
	type PlacePrediction,
} from './googlemaps.dto.js';

// === GoogleMaps Validators (Request Body, Query, Params) ===
export {
	GeocodeRequestSchema,
	AutocompleteRequestSchema,
	AutocompleteQuerySchema,
	type GeocodeRequest,
	type AutocompleteRequest,
	type AutocompleteQuery,
} from './googlemaps.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerGoogleMapsSchemas(registry);
}
