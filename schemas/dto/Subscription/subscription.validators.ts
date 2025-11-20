import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives.js';
import { ModuleTypeSchema } from './subscription.dto.js';

extendZodWithOpenApi(z);

// ===== Subscription Request Schemas =====
export const CreateSubscriptionSchema = z
	.object({
		module: ModuleTypeSchema,
		name: z.string().min(1).describe('Name of the subscription bundle'),
		price_cents: z.number().int().nonnegative().describe('Price in cents'),
		stripe_price_id: z.string().min(1).describe('Stripe price ID for billing'),
		stripe_product_id: z.string().min(1).describe('Stripe product ID').optional(),
	})
	.openapi('CreateSubscription');

export type CreateSubscription = z.infer<typeof CreateSubscriptionSchema>;

export const UpdateSubscriptionSchema = z
	.object({
		subscription_id: UUID,
		data: z
			.object({
				module: ModuleTypeSchema.optional(),
				name: z.string().min(1).optional(),
				price_cents: z.number().int().nonnegative().optional(),
				stripe_price_id: z.string().min(1).optional(),
				stripe_product_id: z.string().min(1).optional(),
			})
			.openapi('UpdateSubscriptionData'),
	})
	.openapi('UpdateSubscription');

export type UpdateSubscription = z.infer<typeof UpdateSubscriptionSchema>;

export const DeleteSubscriptionSchema = z
	.object({
		subscription_id: UUID,
	})
	.openapi('DeleteSubscription');

export type DeleteSubscription = z.infer<typeof DeleteSubscriptionSchema>;

// ===== Query Schemas =====
export const GetSubscriptionByIdQuerySchema = z
	.object({
		subscription_id: UUID,
	})
	.openapi('GetSubscriptionByIdQuery');

export type GetSubscriptionByIdQuery = z.infer<typeof GetSubscriptionByIdQuerySchema>;

export const GetSubscriptionByNameQuerySchema = z
	.object({
		name: z.string().min(1),
	})
	.openapi('GetSubscriptionByNameQuery');

export type GetSubscriptionByNameQuery = z.infer<typeof GetSubscriptionByNameQuerySchema>;

export const ListSubscriptionsByModuleQuerySchema = z
	.object({
		module: ModuleTypeSchema,
	})
	.openapi('ListSubscriptionsByModuleQuery');

export type ListSubscriptionsByModuleQuery = z.infer<typeof ListSubscriptionsByModuleQuerySchema>;

// ===== Addon Request Schemas =====
export const CreateAddonSchema = z
	.object({
		module: ModuleTypeSchema,
		name: z.string().min(1),
		price_cents: z.number().int().nonnegative(),
		stripe_price_id: z.string().min(1),
		stripe_product_id: z.string().min(1).optional(),
	})
	.openapi('CreateAddon');

export type CreateAddon = z.infer<typeof CreateAddonSchema>;

export const UpdateAddonSchema = z
	.object({
		addon_id: UUID,
		data: z
			.object({
				module: ModuleTypeSchema.optional(),
				name: z.string().min(1).optional(),
				price_cents: z.number().int().nonnegative().optional(),
				stripe_price_id: z.string().min(1).optional(),
			})
			.openapi('UpdateAddonData'),
	})
	.openapi('UpdateAddon');

export type UpdateAddon = z.infer<typeof UpdateAddonSchema>;

// ===== Business Usage Request Schemas =====
export const CreateBusinessUsageSchema = z
	.object({
		action_id: UUID,
		used: z.number().int().nonnegative(),
		reset_date: Timestamp.nullable().optional(),
		reservation_module_id: UUID.nullable().optional(),
	})
	.openapi('CreateBusinessUsage');

export type CreateBusinessUsage = z.infer<typeof CreateBusinessUsageSchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateSubscription', CreateSubscriptionSchema);
	registry.register('UpdateSubscription', UpdateSubscriptionSchema);
	registry.register('DeleteSubscription', DeleteSubscriptionSchema);
	registry.register('GetSubscriptionByIdQuery', GetSubscriptionByIdQuerySchema);
	registry.register('GetSubscriptionByNameQuery', GetSubscriptionByNameQuerySchema);
	registry.register('ListSubscriptionsByModuleQuery', ListSubscriptionsByModuleQuerySchema);
	registry.register('CreateAddon', CreateAddonSchema);
	registry.register('UpdateAddon', UpdateAddonSchema);
	registry.register('CreateBusinessUsage', CreateBusinessUsageSchema);
}
