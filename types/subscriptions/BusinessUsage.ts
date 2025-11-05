import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Action } from './Action.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import { ActionResponseBaseSchema } from './Action';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateBusinessUsageSchema = z
	.object({
		business_usage_id: z.string().uuid(),
		action_id: z.string().uuid(),
		used: z.number(),
		reset_date: z.unknown().nullable().optional(),
		reservation_module_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateBusinessUsage');

export type CreateBusinessUsageInput = z.infer<typeof CreateBusinessUsageSchema>;

export const UpdateBusinessUsageSchema = CreateBusinessUsageSchema.partial().openapi('UpdateBusinessUsage');
export type UpdateBusinessUsageInput = z.infer<typeof UpdateBusinessUsageSchema>;

export const BusinessUsageResponseBaseSchema = z
	.object({
		business_usage_id: z.string(),
		action_id: z.string(),
		used: z.number(),
		reset_date: z.string().datetime().nullable().optional(),
		reservation_module_id: z.string().nullable().optional(),
	})
	.openapi('BusinessUsageResponseBase');

export const BusinessUsageResponseSchema = BusinessUsageResponseBaseSchema.extend({
	action: ActionResponseBaseSchema,
	reservation_module: ReservationModuleResponseBaseSchema.nullable().optional(),
}).openapi('BusinessUsageResponse');

export type BusinessUsageBase = z.infer<typeof BusinessUsageResponseBaseSchema>;
export type BusinessUsageResponse = z.infer<typeof BusinessUsageResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessUsage', CreateBusinessUsageSchema);
	registry.register('UpdateBusinessUsage', UpdateBusinessUsageSchema);
	registry.register('BusinessUsageResponseBase', BusinessUsageResponseBaseSchema);
	registry.register('BusinessUsageResponse', BusinessUsageResponseSchema);
}

export type BusinessUsage = {
	business_usage_id: string;
	action_id: string;
	used: number;
	reset_date?: Date | null;
	reservation_module_id?: string | null;
	action?: Action;
	reservation_module?: ReservationModule | null;
};
