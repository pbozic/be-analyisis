import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// === Identifiers ===
export const UUID = z.string().uuid().openapi({
	title: 'UUID',
	example: 'b9a8f8a2-9f5a-4a2a-9e6c-0f3b6b5f0b34',
	description: 'Universally unique identifier used across entities',
});

// === Common strings with meaning ===
export const Email = z.string().email().openapi({
	title: 'Email',
	example: 'user@example.com',
});

export const URL = z.string().url().openapi({
	title: 'URL',
	example: 'https://klikni.si',
});

export const PhoneNumber = z
	.string()
	.regex(/^\+\d{6,15}$/, 'Must be in international format starting with +')
	.openapi({
		title: 'PhoneNumber',
		example: '+38640123456',
	});

// === Enums / codes ===
export const LanguageCode = z.enum(['en', 'sl', 'de', 'fr', 'it', 'es', 'hr', 'ru', 'bs', 'sr', 'ua']).openapi({
	title: 'LanguageCode',
	example: 'en',
});

// === Time ===
export const Timestamp = z.string().datetime().openapi({
	title: 'Timestamp',
	example: '2025-10-30T12:00:00Z',
	description: 'ISO 8601 timestamp in UTC',
});

// === Numbers with semantic meaning ===
export const PositiveInt = z.number().int().min(1).openapi({
	title: 'PositiveInt',
	example: 42,
});

// === Geolocation ===
export const GeoPoint = z
	.object({
		lat: z.number().min(-90).max(90).openapi({ example: 46.0569 }),
		lng: z.number().min(-180).max(180).openapi({ example: 14.5058 }),
	})
	.openapi({
		title: 'GeoPoint',
		description: 'Latitude and longitude coordinates',
	});

// === Money ===
export const Money = z
	.object({
		amount: z.number().int().nonnegative().openapi({ example: 1999 }),
		currency: z.string().length(3).openapi({ example: 'EUR' }),
	})
	.openapi({
		title: 'Money',
		description: 'Represents an amount and its currency in ISO-4217 format',
	});

// === Address ===
export const Address = z
	.object({
		line1: z.string().min(1).openapi({ example: 'Trg republike 3' }),
		line2: z.string().optional(),
		city: z.string().openapi({ example: 'Ljubljana' }),
		postalCode: z.string().openapi({ example: '1000' }),
		country: z.string().length(2).openapi({ example: 'SI' }),
	})
	.openapi({
		title: 'Address',
	});

// === Pagination ===
export const PaginationMeta = z
	.object({
		page: PositiveInt.openapi({ example: 1 }),
		pageSize: PositiveInt.openapi({ example: 20 }),
		total: z.number().int().nonnegative().openapi({ example: 200 }),
	})
	.openapi({
		title: 'PaginationMeta',
	});

// === Error response ===
export const ErrorResponse = z
	.object({
		code: z.string().openapi({ example: 'NOT_FOUND' }),
		message: z.string().openapi({ example: 'Resource not found' }),
	})
	.openapi({
		title: 'ErrorResponse',
	});

// === Bundle all primitives for convenience ===
export const primitives = {
	UUID,
	Email,
	URL,
	PhoneNumber,
	LanguageCode,
	Timestamp,
	PositiveInt,
	GeoPoint,
	Money,
	Address,
	PaginationMeta,
	ErrorResponse,
};

// === Types for all primitives ===
export type UUID = z.infer<typeof UUID>;
export type Email = z.infer<typeof Email>;
export type URL = z.infer<typeof URL>;
export type PhoneNumber = z.infer<typeof PhoneNumber>;
export type LanguageCode = z.infer<typeof LanguageCode>;
export type Timestamp = z.infer<typeof Timestamp>;
export type PositiveInt = z.infer<typeof PositiveInt>;
export type GeoPoint = z.infer<typeof GeoPoint>;
export type Money = z.infer<typeof Money>;
export type Address = z.infer<typeof Address>;
export type PaginationMeta = z.infer<typeof PaginationMeta>;
export type ErrorResponse = z.infer<typeof ErrorResponse>;

// === Helper for registry registration ===
export function registerPrimitives(registry: OpenAPIRegistry) {
	for (const [name, schema] of Object.entries(primitives)) {
		registry.register(name, schema);
	}
}
