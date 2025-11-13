import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerBusinessMoneyFlowSchemas } from './businessMoneyFlow.dto.js';
import { registerSchemas as registerBusinessMoneyFlowValidatorSchemas } from './businessMoneyFlow.validators.js';

// === BusinessMoneyFlow DTOs (Response) ===
export { BusinessMoneyFlowResponseSchema, type BusinessMoneyFlowResponse } from './businessMoneyFlow.dto.js';

// === BusinessMoneyFlow Validators (Request Body, Query, Params) ===
export {
	CreateBusinessMoneyFlowSchema,
	UpdateBusinessMoneyFlowSchema,
	type CreateBusinessMoneyFlowInput,
	type UpdateBusinessMoneyFlowInput,
} from './businessMoneyFlow.validators.js';

// === BusinessMoneyFlow Mappers ===
export { toBusinessMoneyFlowResponse, toBusinessMoneyFlowsList } from './businessMoneyFlow.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerBusinessMoneyFlowSchemas(registry);
	registerBusinessMoneyFlowValidatorSchemas(registry);
}
