import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== ENUMS =====

// Module Type Schema
export const ModuleTypeSchema = z.nativeEnum(MODULE_TYPE).openapi({
	title: 'ModuleType',
	description: 'Available module types for subscriptions',
});

export type ModuleType = z.infer<typeof ModuleTypeSchema>;

// ===== BASE SCHEMAS =====

// Subscription (ActionBundle) Base Schema - scalars only, no relations
export const SubscriptionBaseSchema = z
	.object({
		action_bundle_id: UUID.describe('Primary key for the subscription bundle'),
		module: ModuleTypeSchema,
		name: z.string().min(1).describe('Name of the subscription bundle'),
		price_cents: z.number().int().nonnegative().describe('Price in cents'),
		stripe_price_id: z.string().min(1).describe('Stripe price ID for billing'),
		stripe_product_id: z.string().min(1).describe('Stripe product ID'),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi({
		title: 'SubscriptionBase',
		description: 'Base subscription schema with scalar fields only',
	});

export type SubscriptionBase = z.infer<typeof SubscriptionBaseSchema>;

// Action Base Schema
export const ActionBaseSchema = z
	.object({
		action_id: UUID,
		module: ModuleTypeSchema,
		name: z.string().min(1),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi({
		title: 'ActionBase',
		description: 'Base action schema for subscription permissions',
	});

export type ActionBase = z.infer<typeof ActionBaseSchema>;

// ===== REF SCHEMAS =====

// Subscription Ref Schema - minimal identity for embedding elsewhere
export const SubscriptionRefSchema = z
	.object({
		action_bundle_id: UUID,
		module: ModuleTypeSchema,
		name: z.string(),
		price_cents: z.number().int().nonnegative(),
		stripe_price_id: z.string(),
	})
	.openapi({
		title: 'SubscriptionRef',
		description: 'Minimal subscription reference for embedding in other responses',
	});

export type SubscriptionRef = z.infer<typeof SubscriptionRefSchema>;

// Action Ref Schema
export const ActionRefSchema = z
	.object({
		action_id: UUID,
		name: z.string(),
		module: ModuleTypeSchema,
	})
	.openapi({
		title: 'ActionRef',
		description: 'Minimal action reference for embedding in subscription responses',
	});

export type ActionRef = z.infer<typeof ActionRefSchema>;

// Action Bundle Action Ref Schema
export const ActionBundleActionRefSchema = z
	.object({
		action_bundle_action_id: UUID,
		action_bundle_id: UUID,
		action_id: UUID,
		module: ModuleTypeSchema,
		limit: z.number().int().nonnegative().nullable().optional(),
	})
	.openapi({
		title: 'ActionBundleActionRef',
		description: 'Minimal action bundle action reference',
	});

export type ActionBundleActionRef = z.infer<typeof ActionBundleActionRefSchema>;

// ===== RESPONSE SCHEMAS =====

// Action Bundle Action Response Schema
export const ActionBundleActionResponseSchema = ActionBundleActionRefSchema.extend({
	action: ActionRefSchema.optional(),
}).openapi({
	title: 'ActionBundleActionResponse',
	description: 'Complete action bundle action with embedded action reference',
});

export type ActionBundleActionResponse = z.infer<typeof ActionBundleActionResponseSchema>;

// Subscription Response Schema - Base with embedded refs
export const SubscriptionResponseSchema = SubscriptionBaseSchema.extend({
	actions: z.array(ActionBundleActionResponseSchema).optional(),
}).openapi({
	title: 'SubscriptionResponse',
	description: 'Complete subscription response with related actions',
});

export type SubscriptionResponse = z.infer<typeof SubscriptionResponseSchema>;

// Request schemas moved to subscription.validators.ts

// ===== LIST RESPONSE SCHEMAS =====

// Subscriptions List Response - for paginated/bulk endpoints
export const SubscriptionsListResponseSchema = z
	.object({
		data: z.array(SubscriptionResponseSchema),
		total: z.number().optional(),
		page: z.number().optional(),
		limit: z.number().optional(),
	})
	.openapi({
		title: 'SubscriptionsList',
		description: 'Paginated list of subscription bundles',
	});

export type SubscriptionsListResponse = z.infer<typeof SubscriptionsListResponseSchema>;

// ===== STATISTICS SCHEMAS =====

// Subscription Statistics - aggregate data for reporting
export const SubscriptionStatsSchema = z
	.object({
		total_subscriptions: z.number().int().nonnegative(),
		avg_price_cents: z.number().nonnegative(),
		total_revenue_cents: z.number().int().nonnegative(),
		subscriptions_by_module: z.record(ModuleTypeSchema, z.number().int().nonnegative()),
		most_popular: SubscriptionRefSchema.optional(),
		least_popular: SubscriptionRefSchema.optional(),
	})
	.openapi({
		title: 'SubscriptionStats',
		description: 'Aggregated statistics for subscription bundles',
	});

export type SubscriptionStats = z.infer<typeof SubscriptionStatsSchema>;

// ===== ADDON SCHEMAS =====

// Addon Base Schema - for extension products
export const AddonBaseSchema = z
	.object({
		addon_id: UUID,
		module: ModuleTypeSchema,
		name: z.string().min(1),
		price_cents: z.number().int().nonnegative(),
		stripe_price_id: z.string().min(1),
		stripe_product_id: z.string().min(1),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi({
		title: 'AddonBase',
		description: 'Base addon schema for subscription extensions',
	});

export type AddonBase = z.infer<typeof AddonBaseSchema>;

// Addon Ref Schema
export const AddonRefSchema = z
	.object({
		addon_id: UUID,
		module: ModuleTypeSchema,
		name: z.string(),
		price_cents: z.number().int().nonnegative(),
		stripe_price_id: z.string(),
	})
	.openapi({
		title: 'AddonRef',
		description: 'Minimal addon reference for embedding in other responses',
	});

export type AddonRef = z.infer<typeof AddonRefSchema>;

// Addon request schemas moved to subscription.validators.ts

// ===== BUSINESS USAGE SCHEMAS =====

// Business Usage Base Schema - for tracking action usage
export const BusinessUsageBaseSchema = z
	.object({
		business_usage_id: UUID,
		action_id: UUID,
		used: z.number().int().nonnegative(),
		reset_date: Timestamp.nullable().optional(),
		reservation_module_id: UUID.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi({
		title: 'BusinessUsageBase',
		description: 'Base business usage schema for tracking action consumption',
	});

export type BusinessUsageBase = z.infer<typeof BusinessUsageBaseSchema>;

// Business Usage Ref Schema
export const BusinessUsageRefSchema = z
	.object({
		business_usage_id: UUID,
		action_id: UUID,
		used: z.number().int().nonnegative(),
		reset_date: Timestamp.nullable().optional(),
	})
	.openapi({
		title: 'BusinessUsageRef',
		description: 'Minimal business usage reference',
	});

export type BusinessUsageRef = z.infer<typeof BusinessUsageRefSchema>;

// Business Usage request schemas moved to subscription.validators.ts

// ===== REGISTRATION FUNCTION =====

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register enum schemas
	registry.register('ModuleType', ModuleTypeSchema);

	// Register base schemas
	registry.register('SubscriptionBase', SubscriptionBaseSchema);
	registry.register('ActionBase', ActionBaseSchema);
	registry.register('AddonBase', AddonBaseSchema);
	registry.register('BusinessUsageBase', BusinessUsageBaseSchema);

	// Register ref schemas
	registry.register('SubscriptionRef', SubscriptionRefSchema);
	registry.register('ActionRef', ActionRefSchema);
	registry.register('ActionBundleActionRef', ActionBundleActionRefSchema);
	registry.register('AddonRef', AddonRefSchema);
	registry.register('BusinessUsageRef', BusinessUsageRefSchema);

	// Request schemas registered in subscription.validators.ts

	// Register response schemas
	registry.register('ActionBundleActionResponse', ActionBundleActionResponseSchema);
	registry.register('Subscription', SubscriptionResponseSchema);
	registry.register('SubscriptionsList', SubscriptionsListResponseSchema);
	registry.register('SubscriptionStats', SubscriptionStatsSchema);

	// Register main response
	registry.register('SubscriptionResponse', SubscriptionResponseSchema);
}
