import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Address DTOs ===
export * from './address.ts';

export * from './Address.dao.dto.ts';
// Import registerSchemas functions with aliases
import { registerSchemas as registerAddressSchemas } from './address.js';
import { registerSchemas as registerAddressValidatorSchemas } from './address.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerAddressSchemas(registry);
	registerAddressValidatorSchemas(registry);
}
