import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE_TYPE } from '@prisma/client';

import { UUID } from '../../primitives.ts';

extendZodWithOpenApi(z);

// CreateAction request schema
export const CreateActionRequestSchema = z
	.object({
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string().min(1),
	})
	.openapi('CreateActionRequest');

export type CreateActionRequest = z.infer<typeof CreateActionRequestSchema>;

// UpdateAction request schema
export const UpdateActionRequestSchema = z
	.object({
		actionId: UUID,
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string().min(1),
	})
	.openapi('UpdateActionRequest');

export type UpdateActionRequest = z.infer<typeof UpdateActionRequestSchema>;

// DeleteAction request schema
export const DeleteActionRequestSchema = z
	.object({
		actionId: UUID,
	})
	.openapi('DeleteActionRequest');

export type DeleteActionRequest = z.infer<typeof DeleteActionRequestSchema>;

// GetActionById query schema
export const GetActionByIdQuerySchema = z
	.object({
		actionId: UUID,
	})
	.openapi('GetActionByIdQuery');

export type GetActionByIdQuery = z.infer<typeof GetActionByIdQuerySchema>;

// GetActionsByModule query schema
export const GetActionsByModuleQuerySchema = z
	.object({
		module: z.nativeEnum(MODULE_TYPE),
	})
	.openapi('GetActionsByModuleQuery');

export type GetActionsByModuleQuery = z.infer<typeof GetActionsByModuleQuerySchema>;

// GetActionsByName query schema
export const GetActionsByNameQuerySchema = z
	.object({
		name: z.string().min(1),
	})
	.openapi('GetActionsByNameQuery');

export type GetActionsByNameQuery = z.infer<typeof GetActionsByNameQuerySchema>;

// CountActionsByModule query schema
export const CountActionsByModuleQuerySchema = z
	.object({
		module: z.nativeEnum(MODULE_TYPE),
	})
	.openapi('CountActionsByModuleQuery');

export type CountActionsByModuleQuery = z.infer<typeof CountActionsByModuleQuerySchema>;

// ConnectActionToSubscription request schema
export const ConnectActionToSubscriptionRequestSchema = z
	.object({
		actionId: UUID,
		subscriptionId: UUID,
		limit: z.number().int().min(0).optional(),
	})
	.openapi('ConnectActionToSubscriptionRequest');

export type ConnectActionToSubscriptionRequest = z.infer<typeof ConnectActionToSubscriptionRequestSchema>;

// ConnectActionToAddon request schema
export const ConnectActionToAddonRequestSchema = z
	.object({
		actionId: UUID,
		addonId: UUID,
		limit: z.number().int().min(0).optional(),
	})
	.openapi('ConnectActionToAddonRequest');

export type ConnectActionToAddonRequest = z.infer<typeof ConnectActionToAddonRequestSchema>;

// DisconnectActionFromSubscription request schema
export const DisconnectActionFromSubscriptionRequestSchema = z
	.object({
		actionId: UUID,
		subscriptionId: UUID,
	})
	.openapi('DisconnectActionFromSubscriptionRequest');

export type DisconnectActionFromSubscriptionRequest = z.infer<typeof DisconnectActionFromSubscriptionRequestSchema>;

// DisconnectActionFromAddon request schema
export const DisconnectActionFromAddonRequestSchema = z
	.object({
		actionId: UUID,
		addonId: UUID,
	})
	.openapi('DisconnectActionFromAddonRequest');

export type DisconnectActionFromAddonRequest = z.infer<typeof DisconnectActionFromAddonRequestSchema>;

// LogBusinessUsage request schema
export const LogBusinessUsageRequestSchema = z
	.object({
		businessId: UUID,
		actionId: UUID,
		quantity: z.number().int().min(1).default(1),
	})
	.openapi('LogBusinessUsageRequest');

export type LogBusinessUsageRequest = z.infer<typeof LogBusinessUsageRequestSchema>;

// Registry function to register all schemas
export function registerSchemas(registry: OpenAPIRegistry) {
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
}
