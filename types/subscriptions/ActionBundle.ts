import { MODULE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { ActionBundleAction } from './ActionBundleAction.js';
import { ActionBundleActionResponseBaseSchema } from './ActionBundleAction';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateActionBundleSchema = z
	.object({
		action_bundle_id: z.string().uuid(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
		price_cents: z.number(),
		stripe_price_id: z.string().uuid(),
		stripe_product_id: z.string().uuid(),
	})
	.openapi('CreateActionBundle');

export type CreateActionBundleInput = z.infer<typeof CreateActionBundleSchema>;

export const UpdateActionBundleSchema = CreateActionBundleSchema.partial().openapi('UpdateActionBundle');
export type UpdateActionBundleInput = z.infer<typeof UpdateActionBundleSchema>;

export const ActionBundleResponseBaseSchema = z
	.object({
		action_bundle_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
		price_cents: z.number(),
		stripe_price_id: z.string(),
		stripe_product_id: z.string(),
	})
	.openapi('ActionBundleResponseBase');

export const ActionBundleResponseSchema = ActionBundleResponseBaseSchema.extend({
	actions: z.array(ActionBundleActionResponseBaseSchema),
	business_modules: z.array(ReservationModuleResponseBaseSchema),
}).openapi('ActionBundleResponse');

export type ActionBundleBase = z.infer<typeof ActionBundleResponseBaseSchema>;
export type ActionBundleResponse = z.infer<typeof ActionBundleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateActionBundle', CreateActionBundleSchema);
	registry.register('UpdateActionBundle', UpdateActionBundleSchema);
	registry.register('ActionBundleResponseBase', ActionBundleResponseBaseSchema);
	registry.register('ActionBundleResponse', ActionBundleResponseSchema);
}

export type ActionBundle = {
	action_bundle_id: string;
	module: MODULE_TYPE;
	name: string;
	price_cents: number;
	stripe_price_id: string;
	stripe_product_id: string;
	actions?: ActionBundleAction[];
	business_modules?: ReservationModule[];
};
