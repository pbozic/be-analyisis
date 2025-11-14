import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === ElectronicDevice DTOs (Response) ===
export {
	ElectronicDeviceBaseSchema,
	ElectronicDeviceRefSchema,
	ElectronicDeviceResponseSchema,
	type ElectronicDeviceBase,
	type ElectronicDeviceRef,
	type ElectronicDeviceResponse,
	registerSchemas as registerElectronicDeviceSchemas,
} from './electronicDevice.dto.js';

// === ElectronicDevice Validators (Request Body, Query, Params) ===
export {
	CreateElectronicDeviceRequestSchema,
	DisableElectronicDeviceRequestSchema,
	type CreateElectronicDeviceRequest,
	type DisableElectronicDeviceRequest,
	registerSchemas as registerElectronicDeviceValidatorSchemas,
} from './electronicDevice.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerElectronicDeviceSchemas(registry);
	registerElectronicDeviceValidatorSchemas(registry);
}
