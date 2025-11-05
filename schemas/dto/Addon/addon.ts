import { z } from 'zod';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE_TYPE } from '@prisma/client';

import { UUID } from '../../primitives.js';
import { ActionRefSchema } from '../Action/action.js';

// Base Schema - scalar fields only
export const AddonBaseSchema = z.object({
	addon_id: UUID,
	module: z.nativeEnum(MODULE_TYPE),
	name: z.string(),
	price_cents: z.number().int().min(0),
	stripe_price_id: z.string(),
	stripe_product_id: z.string(),
});

export type AddonBase = z.infer<typeof AddonBaseSchema>;

// Ref Schema - minimal identity for embedding elsewhere
export const AddonRefSchema = z.object({
	addon_id: UUID,
	name: z.string(),
	module: z.nativeEnum(MODULE_TYPE),
	price_cents: z.number().int().min(0),
});

export type AddonRef = z.infer<typeof AddonRefSchema>;

// Response Schema - extends Base and embeds ONLY other models' Ref-variants
export const AddonResponseSchema = AddonBaseSchema.extend({
	actions: z.array(ActionRefSchema).optional(),
	// business_addons would be added here if needed
});

export type AddonResponse = z.infer<typeof AddonResponseSchema>;

// Request Schemas for DAO functions

// CreateAddon request schema - reusing structure from types
export const CreateAddonRequestSchema = z.object({
	module: z.nativeEnum(MODULE_TYPE),
	name: z.string().min(1),
	price_cents: z.number().int().min(0),
	stripe_price_id: z.string().min(1),
});

export type CreateAddonRequest = z.infer<typeof CreateAddonRequestSchema>;

// UpdateAddon request schema
export const UpdateAddonRequestSchema = z.object({
	addon_id: UUID,
	module: z.nativeEnum(MODULE_TYPE).optional(),
	name: z.string().min(1).optional(),
	price_cents: z.number().int().min(0).optional(),
	stripe_price_id: z.string().min(1).optional(),
});

export type UpdateAddonRequest = z.infer<typeof UpdateAddonRequestSchema>;

// DeleteAddon request schema
export const DeleteAddonRequestSchema = z.object({
	addonId: UUID,
});

export type DeleteAddonRequest = z.infer<typeof DeleteAddonRequestSchema>;

// GetAddonById query schema
export const GetAddonByIdQuerySchema = z.object({
	addonId: UUID,
});

export type GetAddonByIdQuery = z.infer<typeof GetAddonByIdQuerySchema>;

// GetAddonsByModule query schema
export const GetAddonsByModuleQuerySchema = z.object({
	module: z.nativeEnum(MODULE_TYPE),
});

export type GetAddonsByModuleQuery = z.infer<typeof GetAddonsByModuleQuerySchema>;

// GetAddonsByBusinessId query schema
export const GetAddonsByBusinessIdQuerySchema = z.object({
	businessId: UUID,
});

export type GetAddonsByBusinessIdQuery = z.infer<typeof GetAddonsByBusinessIdQuerySchema>;

// GetAddonsByReservationModuleId query schema
export const GetAddonsByReservationModuleIdQuerySchema = z.object({
	reservationModuleId: UUID,
});

export type GetAddonsByReservationModuleIdQuery = z.infer<typeof GetAddonsByReservationModuleIdQuerySchema>;

// Response schemas for collections
export const AddonsListResponseSchema = z.array(AddonResponseSchema);

export type AddonsListResponse = z.infer<typeof AddonsListResponseSchema>;

// Enhanced response schemas for complex queries with relations
export const AddonWithActionsResponseSchema = AddonResponseSchema.extend({
	actions: z.array(ActionRefSchema),
});

export type AddonWithActionsResponse = z.infer<typeof AddonWithActionsResponseSchema>;

export const AddonsWithActionsListResponseSchema = z.array(AddonWithActionsResponseSchema);

export type AddonsWithActionsListResponse = z.infer<typeof AddonsWithActionsListResponseSchema>;

// Registry function to register all schemas
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('AddonBase', AddonBaseSchema);
	registry.register('AddonRef', AddonRefSchema);
	registry.register('AddonResponse', AddonResponseSchema);

	// Register request schemas
	registry.register('CreateAddonRequest', CreateAddonRequestSchema);
	registry.register('UpdateAddonRequest', UpdateAddonRequestSchema);
	registry.register('DeleteAddonRequest', DeleteAddonRequestSchema);
	registry.register('GetAddonByIdQuery', GetAddonByIdQuerySchema);
	registry.register('GetAddonsByModuleQuery', GetAddonsByModuleQuerySchema);
	registry.register('GetAddonsByBusinessIdQuery', GetAddonsByBusinessIdQuerySchema);
	registry.register('GetAddonsByReservationModuleIdQuery', GetAddonsByReservationModuleIdQuerySchema);

	// Register response schemas
	registry.register('AddonsListResponse', AddonsListResponseSchema);
	registry.register('AddonWithActionsResponse', AddonWithActionsResponseSchema);
	registry.register('AddonsWithActionsListResponse', AddonsWithActionsListResponseSchema);
}
