// --- ENUMS ---

// --- CREATE/UPDATE/DELETE SCHEMAS ---
import { z } from 'zod';
// --- TYPES ---
import type { business } from '@prisma/client';
import { MODULE_TYPE } from '@prisma/client';

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

export type ReservationModule = {
	business_id: string;
	subscription_id: string;
	subscription: Subscription;
	business: business;
	addons: BusinessAddon[];
	usages: BusinessUsage[];
};

export type Subscription = {
	subscription_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	actions: SubscriptionAction[];
	business_modules: ReservationModule[];
};

export type Addon = {
	addon_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	actions: AddonAction[];
	business_addons: BusinessAddon[];
};

export type Action = {
	action_id: string;
	module: MODULE_TYPE;
	name: string;
	subscription_actions: SubscriptionAction[];
	addon_actions: AddonAction[];
	business_usages: BusinessUsage[];
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

export type AddonAction = {
	id: string;
	addon_id: string;
	action_id: string;
	module: MODULE_TYPE;
	limit?: number;
	addon: Addon;
	action: Action;
};

export type BusinessAddon = {
	business_addon_id: string;
	addon_id: string;
	reservation_module_id?: string;
	sms_module_id?: string;
	ads_module_id?: string;
	addon: Addon;
	reservation_module?: ReservationModule;
};

export type BusinessUsage = {
	business_usage_id: string;
	action_id: string;
	used: number;
	reset_date?: string;
	reservation_module_id?: string;
	action: Action;
	reservation_module?: ReservationModule;
};
