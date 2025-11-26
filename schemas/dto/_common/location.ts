import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

/**
 * Common location/coordinates schemas used across multiple modules
 * Extracted to prevent circular dependencies between Driver and Taxi
 */

export const CoordinatesSchema = z
	.object({
		latitude: z.number().openapi({ example: 46.056946 }),
		longitude: z.number().openapi({ example: 14.505751 }),
	})
	.openapi('Coordinates');

export const LocationSchema = z
	.object({
		address: z.string().optional().openapi({ example: 'Prešernova cesta 1, 1000 Ljubljana' }),
		coordinates: CoordinatesSchema.optional(),
	})
	.openapi('Location');

export type Coordinates = z.infer<typeof CoordinatesSchema>;
export type Location = z.infer<typeof LocationSchema>;
