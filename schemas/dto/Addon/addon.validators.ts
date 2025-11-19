import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE_TYPE } from '@prisma/client';

import { UUID } from '../../primitives.ts';

extendZodWithOpenApi(z);

// CreateAddon request schema
export const CreateAddonRequestSchema = z
	.object({
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string().min(1),
		price_cents: z.number().int().min(0),
		stripe_price_id: z.string().min(1),
	})
	.openapi('CreateAddonRequest');

export type CreateAddonRequest = z.infer<typeof CreateAddonRequestSchema>;

// UpdateAddon request schema
export const UpdateAddonRequestSchema = z
	.object({
		addon_id: UUID,
		module: z.nativeEnum(MODULE_TYPE).optional(),
		name: z.string().min(1).optional(),
		price_cents: z.number().int().min(0).optional(),
		stripe_price_id: z.string().min(1).optional(),
	})
	.openapi('UpdateAddonRequest');

export type UpdateAddonRequest = z.infer<typeof UpdateAddonRequestSchema>;

// DeleteAddon request schema
export const DeleteAddonRequestSchema = z
	.object({
		addonId: UUID,
	})
	.openapi('DeleteAddonRequest');

export type DeleteAddonRequest = z.infer<typeof DeleteAddonRequestSchema>;

// GetAddonById query schema
export const GetAddonByIdQuerySchema = z
	.object({
		addonId: UUID,
	})
	.openapi('GetAddonByIdQuery');

export type GetAddonByIdQuery = z.infer<typeof GetAddonByIdQuerySchema>;

// GetAddonsByModule query schema
export const GetAddonsByModuleQuerySchema = z
	.object({
		module: z.nativeEnum(MODULE_TYPE),
	})
	.openapi('GetAddonsByModuleQuery');

export type GetAddonsByModuleQuery = z.infer<typeof GetAddonsByModuleQuerySchema>;

// GetAddonsByBusinessId query schema
export const GetAddonsByBusinessIdQuerySchema = z
	.object({
		businessId: UUID,
	})
	.openapi('GetAddonsByBusinessIdQuery');

export type GetAddonsByBusinessIdQuery = z.infer<typeof GetAddonsByBusinessIdQuerySchema>;

// GetAddonsByReservationModuleId query schema
export const GetAddonsByReservationModuleIdQuerySchema = z
	.object({
		reservationModuleId: UUID,
	})
	.openapi('GetAddonsByReservationModuleIdQuery');

export type GetAddonsByReservationModuleIdQuery = z.infer<typeof GetAddonsByReservationModuleIdQuerySchema>;

// Registry function to register all schemas
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register request schemas
	registry.register('CreateAddonRequest', CreateAddonRequestSchema);
	registry.register('UpdateAddonRequest', UpdateAddonRequestSchema);
	registry.register('DeleteAddonRequest', DeleteAddonRequestSchema);
	registry.register('GetAddonByIdQuery', GetAddonByIdQuerySchema);
	registry.register('GetAddonsByModuleQuery', GetAddonsByModuleQuerySchema);
	registry.register('GetAddonsByBusinessIdQuery', GetAddonsByBusinessIdQuerySchema);
	registry.register('GetAddonsByReservationModuleIdQuery', GetAddonsByReservationModuleIdQuerySchema);
}
