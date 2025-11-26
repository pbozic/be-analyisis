import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerTokenSchemas } from './token.dto.js';

// === Token DTOs (Response) ===
export {
	TokenBaseSchema,
	TokenRefSchema,
	TokenDetailSchema,
	type TokenBase,
	type TokenRef,
	type TokenDetail,
} from './token.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerTokenSchemas(registry);
}
