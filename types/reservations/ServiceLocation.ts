// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Service } from './Service.js';
import type { Location } from './Location.js';
import { ServiceResponseBaseSchema } from './Service';
import { LocationResponseBaseSchema } from './Location';

extendZodWithOpenApi(z);

export const CreateServiceLocationSchema = z
	.object({
		service_location_id: z.string().uuid(),
		service_id: z.string().uuid(),
		location_id: z.string().uuid(),
	})
	.openapi('CreateServiceLocation');

export type CreateServiceLocationInput = z.infer<typeof CreateServiceLocationSchema>;

export const UpdateServiceLocationSchema = CreateServiceLocationSchema.partial().openapi('UpdateServiceLocation');
export type UpdateServiceLocationInput = z.infer<typeof UpdateServiceLocationSchema>;

export const ServiceLocationResponseBaseSchema = z
	.object({
		service_location_id: z.string(),
		service_id: z.string(),
		location_id: z.string(),
	})
	.openapi('ServiceLocationResponseBase');

export const ServiceLocationResponseSchema = ServiceLocationResponseBaseSchema.extend({
	service: ServiceResponseBaseSchema,
	location: LocationResponseBaseSchema,
}).openapi('ServiceLocationResponse');

export type ServiceLocationBase = z.infer<typeof ServiceLocationResponseBaseSchema>;
export type ServiceLocationResponse = z.infer<typeof ServiceLocationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateServiceLocation', CreateServiceLocationSchema);
	registry.register('UpdateServiceLocation', UpdateServiceLocationSchema);
	registry.register('ServiceLocationResponseBase', ServiceLocationResponseBaseSchema);
	registry.register('ServiceLocationResponse', ServiceLocationResponseSchema);
}

export type ServiceLocation = {
	service_location_id: string;
	service_id: string;
	location_id: string;
	service?: Service;
	location?: Location;
};
