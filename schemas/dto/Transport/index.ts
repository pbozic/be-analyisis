import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerTransportSchemas } from './transport.dto.js';

// === Transport DTOs (Response) ===
export {
	TransportModuleBaseSchema,
	TransportModuleRefSchema,
	TransportModuleDetailSchema,
	type TransportModuleBase,
	type TransportModuleRef,
	type TransportModuleDetail,
} from './transport.dto.js';

// === Transport Mappers ===
export { toTransportModuleDetail } from './transport.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerTransportSchemas(registry);
}
