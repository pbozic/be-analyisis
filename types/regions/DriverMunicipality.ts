// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Driver } from '../drivers/Driver.js';
import type { Municipality } from './Municipality.js';
import { DriverResponseSchema } from '../drivers/Driver';
import { MunicipalityResponseSchema } from './Municipality';

extendZodWithOpenApi(z);

export type DriverMunicipality = {
	driver_municipalities_id: string;
	driver_id: string;
	municipalities_id: string;
	created_at: Date;
	updated_at: Date;
	drivers: Driver;
	municipalities: Municipality;
};

export const CreateDriverMunicipalitySchema = z
	.object({
		driver_municipalities_id: z.string().uuid(),
		driver_id: z.string().uuid(),
		municipalities_id: z.string().uuid(),
	})
	.openapi('CreateDriverMunicipality');

export type CreateDriverMunicipalityInput = z.infer<typeof CreateDriverMunicipalitySchema>;

export const UpdateDriverMunicipalitySchema =
	CreateDriverMunicipalitySchema.partial().openapi('UpdateDriverMunicipality');
export type UpdateDriverMunicipalityInput = z.infer<typeof UpdateDriverMunicipalitySchema>;

export const DriverMunicipalityResponseSchema = z
	.object({
		driver_municipalities_id: z.string(),
		driver_id: z.string(),
		municipalities_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		drivers: DriverResponseSchema,
		municipalities: MunicipalityResponseSchema,
	})
	.openapi('DriverMunicipalityResponse');

export type DriverMunicipalityResponse = z.infer<typeof DriverMunicipalityResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDriverMunicipality', CreateDriverMunicipalitySchema);
	registry.register('UpdateDriverMunicipality', UpdateDriverMunicipalitySchema);
	registry.register('DriverMunicipalityResponse', DriverMunicipalityResponseSchema);
}
