// --- ENUMS ---

// --- CREATE/UPDATE/DELETE SCHEMAS ---
import { z } from 'zod';

// --- TYPES ---
import { MODULE_TYPE } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Action } from '../subscriptions/Action.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import { ReservationModuleResponseSchema } from '../reservations/ReservationModule';

extendZodWithOpenApi(z);

export const CreateSubscriptionSchema = z.object({
	module: z.nativeEnum(MODULE_TYPE),
	name: z.string().min(1),
	price_cents: z.number().int().nonnegative(),
	stripe_price_id: z.string().min(1),
});

export const UpdateSubscriptionSchema = CreateSubscriptionSchema.extend({
	subscription_id: z.string().uuid(),
});

export const CreateAddonSchema = z.object({
	module: z.nativeEnum(MODULE_TYPE),
	name: z.string().min(1),
	price_cents: z.number().int().nonnegative(),
	stripe_price_id: z.string().min(1),
});

export const UpdateAddonSchema = CreateAddonSchema.extend({
	addon_id: z.string().uuid(),
});

export const CreateActionSchema = z.object({
	module: z.nativeEnum(MODULE_TYPE),
	name: z.string().min(1),
});

export const CreateSubscriptionActionSchema = z.object({
	subscription_id: z.string().uuid(),
	action_id: z.string().uuid(),
	module: z.nativeEnum(MODULE_TYPE),
	limit: z.number().int().nonnegative().optional(),
});

export const CreateAddonActionSchema = z.object({
	addon_id: z.string().uuid(),
	action_id: z.string().uuid(),
	module: z.nativeEnum(MODULE_TYPE),
	limit: z.number().int().nonnegative().optional(),
});

export const CreateBusinessAddonSchema = z.object({
	addon_id: z.string().uuid(),
	reservation_module_id: z.string().uuid().optional(),
	sms_module_id: z.string().uuid().optional(),
	ads_module_id: z.string().uuid().optional(),
});

export const CreateBusinessUsageSchema = z.object({
	action_id: z.string().uuid(),
	used: z.number().int().nonnegative(),
	reset_date: z.string().datetime().optional(),
	reservation_module_id: z.string().uuid().optional(),
});
export type CreateSubscriptionSchema = z.infer<typeof CreateSubscriptionSchema>;
export type UpdateSubscriptionSchema = z.infer<typeof UpdateSubscriptionSchema>;
export type CreateAddonSchema = z.infer<typeof CreateAddonSchema>;
export type UpdateAddonSchema = z.infer<typeof UpdateAddonSchema>;
export type CreateActionSchema = z.infer<typeof CreateActionSchema>;
export type CreateSubscriptionActionSchema = z.infer<typeof CreateSubscriptionActionSchema>;
export type CreateAddonActionSchema = z.infer<typeof CreateAddonActionSchema>;
export type CreateBusinessAddonSchema = z.infer<typeof CreateBusinessAddonSchema>;
export type CreateBusinessUsageSchema = z.infer<typeof CreateBusinessUsageSchema>;

export type Subscription = {
	subscription_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	actions: SubscriptionAction[];
	business_modules: ReservationModule[];
};

export type SubscriptionAction = {
	id: string;
	subscription_id: string;
	action_id: string;
	module: MODULE_TYPE;
	limit?: number;
	subscription: Subscription;
	action: Action;
};

export const SubscriptionResponseSchema = z
	.object({
		subscription_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
		price_cents: z.number(),
		stripe_price_id: z.string(),
		actions: z.array(z.unknown()),
		business_modules: z.array(ReservationModuleResponseSchema),
	})
	.openapi('SubscriptionResponse');

export type SubscriptionResponse = z.infer<typeof SubscriptionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateSubscription', CreateSubscriptionSchema);
	registry.register('UpdateSubscription', UpdateSubscriptionSchema);
	registry.register('SubscriptionResponse', SubscriptionResponseSchema);
}
