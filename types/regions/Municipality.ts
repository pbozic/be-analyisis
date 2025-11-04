import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Driver } from '../drivers/Driver.js';
import type { Settlement } from '../weather/Settlement.js';
import type { WeatherData } from '../weather/WeatherData.js';
import type { DriverMunicipality } from './DriverMunicipality.js';
import { DriverMunicipalityResponseSchema } from './DriverMunicipality';
import { SettlementResponseSchema } from '../weather/Settlement';
import { WeatherDataResponseSchema } from '../weather/WeatherData';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateMunicipalitySchema = z
	.object({
		municipalities_id: z.string().uuid(),
		name: z.string(),
		geojson: z.unknown(),
		requires_license: z.boolean(),
		gis_sifra: z.string().nullable().optional(),
		eid_obcina: z.string().nullable().optional(),
		feature_id: z.string().uuid().nullable().optional(),
		geom_generated: z.unknown().nullable().optional(),
	})
	.openapi('CreateMunicipality');

export type CreateMunicipalityInput = z.infer<typeof CreateMunicipalitySchema>;

export const UpdateMunicipalitySchema = CreateMunicipalitySchema.partial().openapi('UpdateMunicipality');
export type UpdateMunicipalityInput = z.infer<typeof UpdateMunicipalitySchema>;

export const MunicipalityResponseSchema = z
	.object({
		municipalities_id: z.string(),
		name: z.string(),
		geojson: z.unknown(),
		requires_license: z.boolean(),
		gis_sifra: z.string().nullable().optional(),
		eid_obcina: z.string().nullable().optional(),
		feature_id: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		driver_municipalities: z.array(DriverMunicipalityResponseSchema),
		settlements: z.array(SettlementResponseSchema),
		weather_data: z.array(WeatherDataResponseSchema),
		geom_generated: z.unknown().nullable().optional(),
	})
	.openapi('MunicipalityResponse');

export type MunicipalityResponse = z.infer<typeof MunicipalityResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMunicipality', CreateMunicipalitySchema);
	registry.register('UpdateMunicipality', UpdateMunicipalitySchema);
	registry.register('MunicipalityResponse', MunicipalityResponseSchema);
}

export type Municipality = {
	municipalities_id: string;
	name: string;
	geojson: unknown;
	requires_license: boolean;
	gis_sifra?: string | null;
	eid_obcina?: string | null;
	feature_id?: string | null;
	created_at: Date;
	updated_at: Date;
	driver_municipalities?: DriverMunicipality[];
	settlements?: Settlement[];
	weather_data?: WeatherData[];
	geom_generated?: unknown | null;
};
