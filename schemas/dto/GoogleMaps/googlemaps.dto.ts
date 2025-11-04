import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// =======================
// Geocode (address -> coords)
// =======================
export const GeocodeRequestSchema = z
	.object({
		address: z.string().min(1).openapi({ example: 'Prešernova cesta 1, 1000 Ljubljana, Slovenia' }),
	})
	.openapi('GeocodeRequest');

// (Responses removed - only request/input schemas retained)

// =======================
// Place Autocomplete / Predictions
// =======================
export const AutocompleteRequestSchema = z
	.object({
		inputText: z.string().min(1).openapi({ example: 'Prešernova' }),
	})
	.openapi('AutocompleteRequest');

// The controller reads the autocomplete input from the query string (req.query.inputText).
// Export a small query schema so the OpenAPI registry can document/query-parameter usage.
export const AutocompleteQuerySchema = z
	.object({
		inputText: z.string().min(1).openapi({ example: 'Prešernova' }),
	})
	.openapi('AutocompleteQuery');

// (Predictions/response schemas removed - only input schema retained)

// =======================
// Types/Exports
// =======================
export type GeocodeRequest = z.infer<typeof GeocodeRequestSchema>;
export type AutocompleteRequest = z.infer<typeof AutocompleteRequestSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('GeocodeRequest', GeocodeRequestSchema);
	registry.register('AutocompleteRequest', AutocompleteRequestSchema);
	registry.register('AutocompleteQuery', AutocompleteQuerySchema);
}
