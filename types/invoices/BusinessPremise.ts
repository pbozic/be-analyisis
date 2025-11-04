import { PREMISE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { TransportModule } from '../transport/TransportModule.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { ElectronicDevice } from './ElectronicDevice.js';
import type { Invoice } from './Invoice.js';
import { TransportModuleResponseSchema } from '../transport/TransportModule';
import { VehicleResponseSchema } from '../vehicles/Vehicle';
import { ElectronicDeviceResponseSchema } from './ElectronicDevice';
import { InvoiceResponseSchema } from './Invoice';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BusinessPremise = {
	business_premise_id: string;
	transport_module_id: string;
	name?: string | null;
	premise_type: PREMISE_TYPE;
	validity_date?: Date | null;
	special_notes?: string | null;
	is_registered: boolean;
	registered_at?: Date | null;
	transport_module: TransportModule;
	vehicle?: Vehicle | null;
	devices: ElectronicDevice[];
	invoices: Invoice[];
	created_at: Date;
	updated_at: Date;
};

export const CreateBusinessPremiseSchema = z
	.object({
		business_premise_id: z.string().uuid(),
		transport_module_id: z.string().uuid(),
		name: z.string().nullable().optional(),
		premise_type: z.nativeEnum(PREMISE_TYPE),
		validity_date: z.unknown().nullable().optional(),
		special_notes: z.string().nullable().optional(),
		is_registered: z.boolean(),
		registered_at: z.unknown().nullable().optional(),
	})
	.openapi('CreateBusinessPremise');

export type CreateBusinessPremiseInput = z.infer<typeof CreateBusinessPremiseSchema>;

export const UpdateBusinessPremiseSchema = CreateBusinessPremiseSchema.partial().openapi('UpdateBusinessPremise');
export type UpdateBusinessPremiseInput = z.infer<typeof UpdateBusinessPremiseSchema>;

export const BusinessPremiseResponseSchema = z
	.object({
		business_premise_id: z.string(),
		transport_module_id: z.string(),
		name: z.string().nullable().optional(),
		premise_type: z.nativeEnum(PREMISE_TYPE),
		validity_date: z.string().datetime().nullable().optional(),
		special_notes: z.string().nullable().optional(),
		is_registered: z.boolean(),
		registered_at: z.string().datetime().nullable().optional(),
		transport_module: TransportModuleResponseSchema,
		vehicle: VehicleResponseSchema.nullable().optional(),
		devices: z.array(ElectronicDeviceResponseSchema),
		invoices: z.array(InvoiceResponseSchema),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('BusinessPremiseResponse');

export type BusinessPremiseResponse = z.infer<typeof BusinessPremiseResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessPremise', CreateBusinessPremiseSchema);
	registry.register('UpdateBusinessPremise', UpdateBusinessPremiseSchema);
	registry.register('BusinessPremiseResponse', BusinessPremiseResponseSchema);
}
