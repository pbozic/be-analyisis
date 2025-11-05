import { z } from 'zod';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE_TYPE } from '@prisma/client';

import { UUID } from '../../primitives.js';

// Base Schema - scalar fields only
export const ActionBaseSchema = z.object({
	action_id: UUID,
	module: z.nativeEnum(MODULE_TYPE),
	name: z.string(),
});

export type ActionBase = z.infer<typeof ActionBaseSchema>;

// Ref Schema - minimal identity for embedding elsewhere
export const ActionRefSchema = z.object({
	action_id: UUID,
	name: z.string(),
	module: z.nativeEnum(MODULE_TYPE),
});

export type ActionRef = z.infer<typeof ActionRefSchema>;

// Response Schema - extends Base, relations would be added here if needed
export const ActionResponseSchema = ActionBaseSchema.extend({
	// Relations would be embedded here as Ref variants if needed
});

export type ActionResponse = z.infer<typeof ActionResponseSchema>;

// Request Schemas for DAO functions

// CreateAction request schema - reusing from types
export const CreateActionRequestSchema = z.object({
	module: z.nativeEnum(MODULE_TYPE),
	name: z.string().min(1),
});

export type CreateActionRequest = z.infer<typeof CreateActionRequestSchema>;

// UpdateAction request schema
export const UpdateActionRequestSchema = z.object({
	actionId: UUID,
	module: z.nativeEnum(MODULE_TYPE),
	name: z.string().min(1),
});

export type UpdateActionRequest = z.infer<typeof UpdateActionRequestSchema>;

// DeleteAction request schema
export const DeleteActionRequestSchema = z.object({
	actionId: UUID,
});

export type DeleteActionRequest = z.infer<typeof DeleteActionRequestSchema>;

// GetActionById query schema
export const GetActionByIdQuerySchema = z.object({
	actionId: UUID,
});

export type GetActionByIdQuery = z.infer<typeof GetActionByIdQuerySchema>;

// GetActionsByModule query schema
export const GetActionsByModuleQuerySchema = z.object({
	module: z.nativeEnum(MODULE_TYPE),
});

export type GetActionsByModuleQuery = z.infer<typeof GetActionsByModuleQuerySchema>;

// GetActionsByName query schema
export const GetActionsByNameQuerySchema = z.object({
	name: z.string().min(1),
});

export type GetActionsByNameQuery = z.infer<typeof GetActionsByNameQuerySchema>;

// CountActionsByModule query schema
export const CountActionsByModuleQuerySchema = z.object({
	module: z.nativeEnum(MODULE_TYPE),
});

export type CountActionsByModuleQuery = z.infer<typeof CountActionsByModuleQuerySchema>;

// ConnectActionToSubscription request schema
export const ConnectActionToSubscriptionRequestSchema = z.object({
	actionId: UUID,
	subscriptionId: UUID,
	limit: z.number().int().min(0).optional(),
});

export type ConnectActionToSubscriptionRequest = z.infer<typeof ConnectActionToSubscriptionRequestSchema>;

// ConnectActionToAddon request schema
export const ConnectActionToAddonRequestSchema = z.object({
	actionId: UUID,
	addonId: UUID,
	limit: z.number().int().min(0).optional(),
});

export type ConnectActionToAddonRequest = z.infer<typeof ConnectActionToAddonRequestSchema>;

// DisconnectActionFromSubscription request schema
export const DisconnectActionFromSubscriptionRequestSchema = z.object({
	actionId: UUID,
	subscriptionId: UUID,
});

export type DisconnectActionFromSubscriptionRequest = z.infer<typeof DisconnectActionFromSubscriptionRequestSchema>;

// DisconnectActionFromAddon request schema
export const DisconnectActionFromAddonRequestSchema = z.object({
	actionId: UUID,
	addonId: UUID,
});

export type DisconnectActionFromAddonRequest = z.infer<typeof DisconnectActionFromAddonRequestSchema>;

// LogBusinessUsage request schema
export const LogBusinessUsageRequestSchema = z.object({
	businessId: UUID,
	actionId: UUID,
	quantity: z.number().int().min(1).default(1),
});

export type LogBusinessUsageRequest = z.infer<typeof LogBusinessUsageRequestSchema>;

// Response schemas for collections
export const ActionsListResponseSchema = z.array(ActionResponseSchema);

export type ActionsListResponse = z.infer<typeof ActionsListResponseSchema>;

// Count response schema
export const ActionCountResponseSchema = z.object({
	count: z.number().int().min(0),
});

export type ActionCountResponse = z.infer<typeof ActionCountResponseSchema>;

// Registry function to register all schemas
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('ActionBase', ActionBaseSchema);
	registry.register('ActionRef', ActionRefSchema);
	registry.register('ActionResponse', ActionResponseSchema);

	// Register request schemas
	registry.register('CreateActionRequest', CreateActionRequestSchema);
	registry.register('UpdateActionRequest', UpdateActionRequestSchema);
	registry.register('DeleteActionRequest', DeleteActionRequestSchema);
	registry.register('GetActionByIdQuery', GetActionByIdQuerySchema);
	registry.register('GetActionsByModuleQuery', GetActionsByModuleQuerySchema);
	registry.register('GetActionsByNameQuery', GetActionsByNameQuerySchema);
	registry.register('CountActionsByModuleQuery', CountActionsByModuleQuerySchema);
	registry.register('ConnectActionToSubscriptionRequest', ConnectActionToSubscriptionRequestSchema);
	registry.register('ConnectActionToAddonRequest', ConnectActionToAddonRequestSchema);
	registry.register('DisconnectActionFromSubscriptionRequest', DisconnectActionFromSubscriptionRequestSchema);
	registry.register('DisconnectActionFromAddonRequest', DisconnectActionFromAddonRequestSchema);
	registry.register('LogBusinessUsageRequest', LogBusinessUsageRequestSchema);

	// Register response schemas
	registry.register('ActionsListResponse', ActionsListResponseSchema);
	registry.register('ActionCountResponse', ActionCountResponseSchema);
}
