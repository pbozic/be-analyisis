import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Invoice DTOs (Response) ===
export {
	InvoiceBaseSchema,
	InvoiceRefSchema,
	InvoiceResponseSchema,
	type InvoiceBase,
	type InvoiceRef,
	type InvoiceResponse,
	registerSchemas as registerInvoiceSchemas,
} from './invoice.dto.js';

// === Invoice Validators (Request Body, Query, Params) ===
export {
	CreateInvoiceSchema,
	UpdateInvoiceSchema,
	type CreateInvoiceInput,
	type UpdateInvoiceInput,
	registerSchemas as registerInvoiceValidatorSchemas,
} from './invoice.validators.js';

// === Invoice Mappers ===
// Note: invoice.mappers.ts contains mappers for BusinessPremise, ElectronicDevice, DeviceAssignment, Vehicle
// These are kept here for backward compatibility but should ideally be moved to their respective folders
export * from './invoice.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerInvoiceSchemas(registry);
	registerInvoiceValidatorSchemas(registry);
}
