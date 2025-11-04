// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Address } from '../addresses/Address.js';
import type { BusinessLocalLocation } from './BusinessLocalLocation.js';
import { AddressResponseSchema } from '../addresses/Address';
import { BusinessLocalLocationResponseSchema } from './BusinessLocalLocation';

extendZodWithOpenApi(z);

export const CreateLocalLocationSchema = z
	.object({
		local_location_id: z.string().uuid(),
		address_id: z.string().uuid(),
	})
	.openapi('CreateLocalLocation');

export type CreateLocalLocationInput = z.infer<typeof CreateLocalLocationSchema>;

export const UpdateLocalLocationSchema = CreateLocalLocationSchema.partial().openapi('UpdateLocalLocation');
export type UpdateLocalLocationInput = z.infer<typeof UpdateLocalLocationSchema>;

export const LocalLocationResponseSchema = z
	.object({
		local_location_id: z.string(),
		address_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		address: AddressResponseSchema,
		business_local_locations: z.array(BusinessLocalLocationResponseSchema),
	})
	.openapi('LocalLocationResponse');

export type LocalLocationResponse = z.infer<typeof LocalLocationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateLocalLocation', CreateLocalLocationSchema);
	registry.register('UpdateLocalLocation', UpdateLocalLocationSchema);
	registry.register('LocalLocationResponse', LocalLocationResponseSchema);
}

export type LocalLocation = {
	local_location_id: string;
	address_id: string;
	created_at: Date;
	updated_at: Date;
	address?: Address;
	business_local_locations?: BusinessLocalLocation[];
};
