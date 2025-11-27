import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerActionSchemas } from './action.dto.js';
import { registerSchemas as registerActionValidatorSchemas } from './action.validators.js';

// === Action DTOs (Response) ===
export {
	ActionBaseSchema,
	ActionRefSchema,
	ActionResponseSchema,
	ActionsListResponseSchema,
	ActionCountResponseSchema,
	type ActionBase,
	type ActionRef,
	type ActionResponse,
	type ActionsListResponse,
	type ActionCountResponse,
} from './action.dto.js';

// === Action Validators (Request Body, Query, Params) ===
export {
	CreateActionRequestSchema,
	UpdateActionRequestSchema,
	DeleteActionRequestSchema,
	GetActionByIdQuerySchema,
	GetActionsByModuleQuerySchema,
	GetActionsByNameQuerySchema,
	CountActionsByModuleQuerySchema,
	ConnectActionToSubscriptionRequestSchema,
	ConnectActionToAddonRequestSchema,
	DisconnectActionFromSubscriptionRequestSchema,
	DisconnectActionFromAddonRequestSchema,
	LogBusinessUsageRequestSchema,
	type CreateActionRequest,
	type UpdateActionRequest,
	type DeleteActionRequest,
	type GetActionByIdQuery,
	type GetActionsByModuleQuery,
	type GetActionsByNameQuery,
	type CountActionsByModuleQuery,
	type ConnectActionToSubscriptionRequest,
	type ConnectActionToAddonRequest,
	type DisconnectActionFromSubscriptionRequest,
	type DisconnectActionFromAddonRequest,
	type LogBusinessUsageRequest,
} from './action.validators.js';

// === Action Mappers ===
export * from './action.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerActionSchemas(registry);
	registerActionValidatorSchemas(registry);
}
