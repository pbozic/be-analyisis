import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerBusinessPremiseSchemas } from './businessPremise.dto.js';
import { registerSchemas as registerBusinessPremiseValidatorSchemas } from './businessPremise.validators.js';

// === BusinessPremise DTOs (Response) ===
export {
	BusinessPremiseBaseSchema,
	BusinessPremiseRefSchema,
	BusinessPremiseResponseSchema,
	type BusinessPremiseBase,
	type BusinessPremiseRef,
	type BusinessPremiseResponse,
} from './businessPremise.dto.js';

// === BusinessPremise Validators (Request Body, Query, Params) ===
export {
	CreateBusinessPremiseRequestSchema,
	ConfirmBusinessPremiseRequestSchema,
	type CreateBusinessPremiseRequest,
	type ConfirmBusinessPremiseRequest,
} from './businessPremise.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerBusinessPremiseSchemas(registry);
	registerBusinessPremiseValidatorSchemas(registry);
}
