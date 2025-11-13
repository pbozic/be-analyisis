import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerSubscriptionSchemas } from './subscription.dto.js';
import { registerSchemas as registerSubscriptionValidatorSchemas } from './subscription.validators.js';

// === Subscription DTOs (Response) ===
export {
	ModuleTypeSchema,
	SubscriptionBaseSchema,
	ActionBaseSchema,
	SubscriptionRefSchema,
	ActionRefSchema,
	ActionBundleActionRefSchema,
	ActionBundleActionResponseSchema,
	SubscriptionResponseSchema,
	SubscriptionsListResponseSchema,
	SubscriptionStatsSchema,
	AddonBaseSchema,
	AddonRefSchema,
	BusinessUsageBaseSchema,
	BusinessUsageRefSchema,
	type ModuleType,
	type SubscriptionBase,
	type ActionBase,
	type SubscriptionRef,
	type ActionRef,
	type ActionBundleActionRef,
	type ActionBundleActionResponse,
	type SubscriptionResponse,
	type SubscriptionsListResponse,
	type SubscriptionStats,
	type AddonBase,
	type AddonRef,
	type BusinessUsageBase,
	type BusinessUsageRef,
} from './subscription.dto.js';

// === Subscription Validators (Request Body, Query, Params) ===
export {
	CreateSubscriptionSchema,
	UpdateSubscriptionSchema,
	DeleteSubscriptionSchema,
	GetSubscriptionByIdQuerySchema,
	GetSubscriptionByNameQuerySchema,
	ListSubscriptionsByModuleQuerySchema,
	CreateAddonSchema,
	UpdateAddonSchema,
	CreateBusinessUsageSchema,
	type CreateSubscription,
	type UpdateSubscription,
	type DeleteSubscription,
	type GetSubscriptionByIdQuery,
	type GetSubscriptionByNameQuery,
	type ListSubscriptionsByModuleQuery,
	type CreateAddon,
	type UpdateAddon,
	type CreateBusinessUsage,
} from './subscription.validators.js';

// === Subscription Mappers ===
export * from './subscription.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerSubscriptionSchemas(registry);
	registerSubscriptionValidatorSchemas(registry);
}
