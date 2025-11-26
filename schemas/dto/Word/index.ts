import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerWordSchemas } from './word.dto.js';
import { registerSchemas as registerWordValidatorSchemas } from './word.validators.js';

// === Word DTOs (Response) ===
export {
	TranslationItemSchema,
	WordBaseSchema,
	WordDetailSchema,
	WordBuyItemDetailSchema,
	UpdateUserSubscriptionSuccessSchema,
	UpdateUserSubscriptionErrorSchema,
	UpdateUserSubscriptionResponseSchema,
	CreateWordBuySubscriptionResponseSchema,
	type TranslationItem,
	type WordBase,
	type WordDetail,
	type WordBuyItemDetail,
	type UpdateUserSubscriptionResponse,
	type CreateWordBuySubscriptionResponse,
} from './word.dto.js';

// === Word Validators (Request Body, Query, Params) ===
export {
	WordDataSchema,
	CreateWordRequestSchema,
	UpdateWordRequestSchema,
	WordBuyItemSchema,
	CreateWordBuyRequestSchema,
	UpdateWordBuysRequestSchema,
	UpdateSingleWordBuyRequestSchema,
	type CreateWordRequest,
	type UpdateWordRequest,
	type WordBuyItem,
	type CreateWordBuyRequest,
	type UpdateWordBuysRequest,
	type UpdateSingleWordBuyRequest,
} from './word.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerWordSchemas(registry);
	registerWordValidatorSchemas(registry);
}
