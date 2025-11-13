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

// Predictions/response schemas
export const PlacePredictionSchema = z
	.object({
		place_id: z.string().openapi({ example: 'ChIJ...xyz' }),
		description: z.string().openapi({ example: 'Prešernova cesta 1, 1000 Ljubljana, Slovenia' }),
	})
	.openapi('PlacePrediction');

export const AutocompleteResponseSchema = z
	.object({
		predictions: z
			.array(
				PlacePredictionSchema.extend({
					description: z.string().openapi({
						description: 'Shortened address without country and postal code',
						example: 'Prešernova cesta 1, Ljubljana',
					}),
				})
			)
			.openapi({
				description: 'List of address predictions based on the input text',
			}),
	})
	.openapi('AutocompleteResponse');

// =======================
// Types/Exports
// =======================
export type GeocodeRequest = z.infer<typeof GeocodeRequestSchema>;
export type AutocompleteRequest = z.infer<typeof AutocompleteRequestSchema>;
export type AutocompleteQuery = z.infer<typeof AutocompleteQuerySchema>;
export type PlacePrediction = z.infer<typeof PlacePredictionSchema>;
export type AutocompleteResponse = z.infer<typeof AutocompleteResponseSchema>;

// =======================
// Register schemas
// =======================

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('GeocodeRequest', GeocodeRequestSchema);
	registry.register('AutocompleteRequest', AutocompleteRequestSchema);
	registry.register('AutocompleteQuery', AutocompleteQuerySchema);
	registry.register('PlacePrediction', PlacePredictionSchema);
	registry.register('AutocompleteResponse', AutocompleteResponseSchema);
}
