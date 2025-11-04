import { MODULE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { Action } from './Action.js';
import type { ActionBundleAction } from './ActionBundleAction.js';
import { ActionBundleActionResponseSchema } from './ActionBundleAction';
import { ReservationModuleResponseSchema } from '../reservations/ReservationModule';

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

export const ActionBundleResponseSchema = z
	.object({
		action_bundle_id: z.string(),
		module: z.nativeEnum(MODULE_TYPE),
		name: z.string(),
		price_cents: z.number(),
		stripe_price_id: z.string(),
		stripe_product_id: z.string(),
		actions: z.array(ActionBundleActionResponseSchema),
		business_modules: z.array(ReservationModuleResponseSchema),
	})
	.openapi('ActionBundleResponse');

export type ActionBundleResponse = z.infer<typeof ActionBundleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateActionBundle', CreateActionBundleSchema);
	registry.register('UpdateActionBundle', UpdateActionBundleSchema);
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
