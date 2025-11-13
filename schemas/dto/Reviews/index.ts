import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerReviewSchemas } from './review.dto.js';
import { registerSchemas as registerReviewValidatorSchemas } from './review.validators.js';

// === Reviews DTOs (Response) ===
export {
	ReviewItemBaseSchema,
	ReviewItemRefSchema,
	ReviewItemResponseSchema,
	ReviewBaseSchema,
	ReviewRefSchema,
	ReviewResponseSchema,
	type ReviewItemBase,
	type ReviewItemRef,
	type ReviewItemResponse,
	type ReviewBase,
	type ReviewRef,
	type ReviewResponse,
} from './review.dto.js';

// === Reviews Validators (Request Body, Query, Params) ===
export { ReviewBodySchema, type ReviewBody } from './review.validators.js';

// === Reviews Mappers ===
export * from './review.mapper.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerReviewSchemas(registry);
	registerReviewValidatorSchemas(registry);
}
