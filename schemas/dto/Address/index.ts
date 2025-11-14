import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Address DTOs ===
export * from './address.js';

// === UserAddress DTOs ===
export * from './userAddress.js';

export * from './Address.dao.dto.ts';
export * from './userAddress.ts';
// Import registerSchemas functions with aliases
import { registerSchemas as registerAddressSchemas } from './address.js';
import { registerSchemas as registerUserAddressSchemas } from './userAddress.js';
import { registerSchemas as registerAddressValidatorSchemas } from './address.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerAddressSchemas(registry);
	registerUserAddressSchemas(registry);
	registerAddressValidatorSchemas(registry);
}
