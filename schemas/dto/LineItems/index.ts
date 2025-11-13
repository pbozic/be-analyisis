import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerLineItemsSchemas } from './lineItems.dto.js';
import { registerSchemas as registerLineItemsValidatorSchemas } from './lineItems.validators.js';

// === LineItems DTOs (Response) ===
export {
	LineItemBaseSchema,
	LineItemRefSchema,
	LineItemDetailSchema,
	type LineItemBase,
	type LineItemRef,
	type LineItemDetail,
} from './lineItems.dto.js';

// === LineItems Validators (Request Body, Query, Params) ===
export {
	LineItemDataSchema,
	CreateManyLineItemsBodySchema,
	UpdateLineItemBodySchema,
	LineItemCreateInputDataSchema,
	type LineItemData,
	type CreateManyLineItemsBody,
	type UpdateLineItemBody,
	type LineItemCreateInputData,
} from './lineItems.validators.js';

// === LineItems Mappers ===
export { toLineItemRef, toLineItemDetail } from './lineItems.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerLineItemsSchemas(registry);
	registerLineItemsValidatorSchemas(registry);
}
