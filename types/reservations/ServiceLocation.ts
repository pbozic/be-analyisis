// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Service } from './Service.js';
import type { Location } from './Location.js';
import { ServiceResponseSchema } from './Service';
import { LocationResponseSchema } from './Location';

extendZodWithOpenApi(z);

export type ServiceLocation = {
	service_location_id: string;
	service_id: string;
	location_id: string;
	service: Service;
	location: Location;
};

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

export const ServiceLocationResponseSchema = z
	.object({
		service_location_id: z.string(),
		service_id: z.string(),
		location_id: z.string(),
		service: ServiceResponseSchema,
		location: LocationResponseSchema,
	})
	.openapi('ServiceLocationResponse');

export type ServiceLocationResponse = z.infer<typeof ServiceLocationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateServiceLocation', CreateServiceLocationSchema);
	registry.register('UpdateServiceLocation', UpdateServiceLocationSchema);
	registry.register('ServiceLocationResponse', ServiceLocationResponseSchema);
}
