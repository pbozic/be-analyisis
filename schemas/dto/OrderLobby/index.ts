import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerOrderLobbySchemas } from './orderLobby.dto.ts';
import { registerSchemas as registerOrderLobbyValidatorSchemas } from './orderLobby.validators.js';
import { registerSchemas as registerOrderLobbyItemSchemas } from './orderLobbyItem.dto.js';
import { registerSchemas as registerOrderLobbyUserSchemas } from './orderLobbyUser.dto.js';

// === OrderLobby DTOs (Response) ===
export {
	OrderLobbyBaseSchema,
	OrderLobbyRefSchema,
	OrderLobbyResponseSchema,
	OrderLobbiesListResponseSchema,
	type OrderLobbyBase,
	type OrderLobbyRef,
	type OrderLobbyResponse,
	type OrderLobbiesListResponse,
} from './orderLobby.dto.js';

// === OrderLobby Validators (Request Body, Query, Params) ===
export {
	CreateOrderLobbySchema,
	UpdateOrderLobbySchema,
	DeleteOrderLobbySchema,
	SubmitLobbyRequestSchema,
	SetLobbyUsersWithLimitsRequestSchema,
	SetUserOrderLobbyItemsRequestSchema,
	SetOrderLobbyActiveSchema,
	EditUsersInOrderLobbySchema,
	GetOrderLobbyByIdQuerySchema,
	GetOrderLobbiesForBusinessQuerySchema,
	GetActiveOrderLobbiesByUserIdQuerySchema,
	type CreateOrderLobby,
	type UpdateOrderLobby,
	type DeleteOrderLobby,
	type SubmitLobbyRequest,
	type SetLobbyUsersWithLimitsRequest,
	type SetUserOrderLobbyItemsRequest,
	type SetOrderLobbyActive,
	type EditUsersInOrderLobby,
	type GetOrderLobbyByIdQuery,
	type GetOrderLobbiesForBusinessQuery,
	type GetActiveOrderLobbiesByUserIdQuery,
} from './orderLobby.validators.js';

// === OrderLobbyItem DTOs ===
export * from './orderLobbyItem.dto.js';

// === OrderLobbyUser DTOs ===
export * from './orderLobbyUser.dto.js';

// === OrderLobby Mappers ===
export * from './orderLobby.mappers.js';
export * from './orderLobbyItem.mappers.js';
export * from './orderLobbyUser.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerOrderLobbySchemas(registry);
	registerOrderLobbyValidatorSchemas(registry);
	registerOrderLobbyItemSchemas(registry);
	registerOrderLobbyUserSchemas(registry);
}
