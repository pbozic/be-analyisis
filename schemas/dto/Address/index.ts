import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Address DTOs ===
export * from './address.js';

// === UserAddress DTOs ===
export * from './userAddress.js';

export * from './Address.dao.dto.ts';
export * from './userAddress.ts';
// === Schema Registration ===
import { registerSchemas as registerAddressSchemas } from './address.js';
import { registerSchemas as registerUserAddressSchemas } from './userAddress.js';

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register address schemas
	registerAddressSchemas(registry);

	// Register user address schemas
	registerUserAddressSchemas(registry);
}
