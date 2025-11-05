import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// === Address Base Schema (scalars only, no relations) ===
export const AddressBaseSchema = z
	.object({
		address_id: UUID,
		address: z.string().min(1).openapi({ example: 'Trg republike 3, Ljubljana' }),
		latitude: z.string().openapi({ example: '46.0511' }),
		longitude: z.string().openapi({ example: '14.5051' }),
		street: z.string().nullable().openapi({ example: 'Trg republike' }),
		house_number: z.string().nullable().openapi({ example: '3' }),
		city: z.string().nullable().openapi({ example: 'Ljubljana' }),
		country: z.string().nullable().openapi({ example: 'Slovenia' }),
		postal: z.string().nullable().openapi({ example: '1000' }),
	})
	.openapi({
		title: 'AddressBase',
		description: 'Base address schema with all scalar fields',
	});

export type AddressBase = z.infer<typeof AddressBaseSchema>;

// === Address Ref Schema (minimal identity for embedding elsewhere) ===
export const AddressRefSchema = z
	.object({
		address_id: UUID,
		address: z.string().min(1),
		latitude: z.string(),
		longitude: z.string(),
		city: z.string().nullable(),
		postal: z.string().nullable(),
	})
	.openapi({
		title: 'AddressRef',
		description: 'Minimal address reference for embedding in other responses',
	});

export type AddressRef = z.infer<typeof AddressRefSchema>;

// === Address Response Schema (extends Base, no relations to avoid circular imports) ===
export const AddressResponseSchema = AddressBaseSchema.openapi({
	title: 'AddressResponse',
	description: 'Complete address response with all fields',
});

export type AddressResponse = z.infer<typeof AddressResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register address schemas
	registry.register('AddressBase', AddressBaseSchema);
	registry.register('AddressRef', AddressRefSchema);
	registry.register('AddressResponse', AddressResponseSchema);
}
