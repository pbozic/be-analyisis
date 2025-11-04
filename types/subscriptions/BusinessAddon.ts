import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Addon } from './Addon.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import { AddonResponseSchema } from './Addon';
import { ReservationModuleResponseSchema } from '../reservations/ReservationModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessAddon = {
	business_addon_id: string;
	addon_id: string;
	reservation_module_id?: string | null;
	sms_module_id?: string | null;
	ads_module_id?: string | null;
	quantity: number;
	addon: Addon;
	reservation_module?: ReservationModule | null;
};

export const CreateBusinessAddonSchema = z
	.object({
		business_addon_id: z.string().uuid(),
		addon_id: z.string().uuid(),
		reservation_module_id: z.string().uuid().nullable().optional(),
		sms_module_id: z.string().uuid().nullable().optional(),
		ads_module_id: z.string().uuid().nullable().optional(),
		quantity: z.number(),
	})
	.openapi('CreateBusinessAddon');

export type CreateBusinessAddonInput = z.infer<typeof CreateBusinessAddonSchema>;

export const UpdateBusinessAddonSchema = CreateBusinessAddonSchema.partial().openapi('UpdateBusinessAddon');
export type UpdateBusinessAddonInput = z.infer<typeof UpdateBusinessAddonSchema>;

export const BusinessAddonResponseSchema = z
	.object({
		business_addon_id: z.string(),
		addon_id: z.string(),
		reservation_module_id: z.string().nullable().optional(),
		sms_module_id: z.string().nullable().optional(),
		ads_module_id: z.string().nullable().optional(),
		quantity: z.number(),
		addon: AddonResponseSchema,
		reservation_module: ReservationModuleResponseSchema.nullable().optional(),
	})
	.openapi('BusinessAddonResponse');

export type BusinessAddonResponse = z.infer<typeof BusinessAddonResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessAddon', CreateBusinessAddonSchema);
	registry.register('UpdateBusinessAddon', UpdateBusinessAddonSchema);
	registry.register('BusinessAddonResponse', BusinessAddonResponseSchema);
}
