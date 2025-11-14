import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === BusinessClient DTOs (Response) ===
export {
	BusinessClientBaseSchema,
	BusinessClientRefSchema,
	BusinessClientResponseSchema,
	BusinessClientWithBusinessResponseSchema,
	BusinessClientWithOrdersResponseSchema,
	BusinessClientDetailResponseSchema,
	BusinessClientListResponseSchema,
	type BusinessClientBase,
	type BusinessClientRef,
	type BusinessClientResponse,
	type BusinessClientWithBusinessResponse,
	type BusinessClientWithOrdersResponse,
	type BusinessClientDetailResponse,
	type BusinessClientListResponse,
	registerSchemas as registerBusinessClientSchemas,
} from './businessClient.dto.js';

// === BusinessClient Validators (Request Body, Query, Params) ===
export {
	CreateBusinessClientSchema,
	UpdateBusinessClientSchema,
	type CreateBusinessClientInput,
	type UpdateBusinessClientInput,
	registerSchemas as registerBusinessClientValidatorSchemas,
} from './businessClient.validators.js';

// === BusinessClient Mappers ===
export * from './businessClient.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerBusinessClientSchemas(registry);
	registerBusinessClientValidatorSchemas(registry);
}
