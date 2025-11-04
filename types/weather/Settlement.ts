import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Municipality } from '../regions/Municipality.js';
import type { WeatherData } from './WeatherData.js';
import { MunicipalityResponseSchema } from '../regions/Municipality';
import { WeatherDataResponseSchema } from './WeatherData';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export type Settlement = {
	settlement_id: string;
	name: string;
	municipalities_id: string;
	eid_naselje?: string | null;
	feature_id?: string | null;
	geojson: unknown;
	created_at: Date;
	updated_at: Date;
	municipality: Municipality;
	weather_data: WeatherData[];
	geom_generated?: unknown | null;
};

export const CreateSettlementSchema = z
	.object({
		settlement_id: z.string().uuid(),
		name: z.string(),
		municipalities_id: z.string().uuid(),
		eid_naselje: z.string().nullable().optional(),
		feature_id: z.string().uuid().nullable().optional(),
		geojson: z.unknown(),
		geom_generated: z.unknown().nullable().optional(),
	})
	.openapi('CreateSettlement');

export type CreateSettlementInput = z.infer<typeof CreateSettlementSchema>;

export const UpdateSettlementSchema = CreateSettlementSchema.partial().openapi('UpdateSettlement');
export type UpdateSettlementInput = z.infer<typeof UpdateSettlementSchema>;

export const SettlementResponseSchema = z
	.object({
		settlement_id: z.string(),
		name: z.string(),
		municipalities_id: z.string(),
		eid_naselje: z.string().nullable().optional(),
		feature_id: z.string().nullable().optional(),
		geojson: z.unknown(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		municipality: MunicipalityResponseSchema,
		weather_data: z.array(WeatherDataResponseSchema),
		geom_generated: z.unknown().nullable().optional(),
	})
	.openapi('SettlementResponse');

export type SettlementResponse = z.infer<typeof SettlementResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateSettlement', CreateSettlementSchema);
	registry.register('UpdateSettlement', UpdateSettlementSchema);
	registry.register('SettlementResponse', SettlementResponseSchema);
}
