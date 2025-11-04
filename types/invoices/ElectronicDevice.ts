import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { BusinessPremise } from './BusinessPremise.js';
import type { Invoice } from './Invoice.js';
import type { DeviceAssignment } from './DeviceAssignment.js';
import { BusinessPremiseResponseSchema } from './BusinessPremise';
import { InvoiceResponseSchema } from './Invoice';
import { DeviceAssignmentResponseSchema } from './DeviceAssignment';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateElectronicDeviceSchema = z
	.object({
		business_premise_id: z.string().uuid(),
		electronic_device_id: z.string().uuid(),
		name: z.string().nullable().optional(),
		active: z.boolean(),
	})
	.openapi('CreateElectronicDevice');

export type CreateElectronicDeviceInput = z.infer<typeof CreateElectronicDeviceSchema>;

export const UpdateElectronicDeviceSchema = CreateElectronicDeviceSchema.partial().openapi('UpdateElectronicDevice');
export type UpdateElectronicDeviceInput = z.infer<typeof UpdateElectronicDeviceSchema>;

export const ElectronicDeviceResponseSchema = z
	.object({
		business_premise_id: z.string(),
		electronic_device_id: z.string(),
		name: z.string().nullable().optional(),
		active: z.boolean(),
		business_premise: BusinessPremiseResponseSchema,
		invoices: z.array(InvoiceResponseSchema),
		assignments: z.array(DeviceAssignmentResponseSchema),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('ElectronicDeviceResponse');

export type ElectronicDeviceResponse = z.infer<typeof ElectronicDeviceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateElectronicDevice', CreateElectronicDeviceSchema);
	registry.register('UpdateElectronicDevice', UpdateElectronicDeviceSchema);
	registry.register('ElectronicDeviceResponse', ElectronicDeviceResponseSchema);
}

export type ElectronicDevice = {
	business_premise_id: string;
	electronic_device_id: string;
	name?: string | null;
	active: boolean;
	business_premise?: BusinessPremise;
	invoices?: Invoice[];
	assignments?: DeviceAssignment[];
	created_at: Date;
	updated_at: Date;
};
