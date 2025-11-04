import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { VEHICLE_CATEGORY, VEHICLE_CLASS, DOCUMENT_TYPE, FILE_TYPE } from '@prisma/client';

import type { Document } from '../../types/documents/Document.js';
import type { TaxiOrder } from '../../types/taxiOrders/TaxiOrder.js';
import type { DeliveryOrder } from '../../types/deliveryOrders/DeliveryOrder.js';
import type { Driver } from '../../types/drivers/Driver.js';
import type { BusinessPremise } from '../../types/invoices/BusinessPremise.js';
import type { Invoice } from '../../types/invoices/Invoice.js';
import type { TransportModule } from '../../types/transport/TransportModule.js';
import type { VehicleDriver } from '../../types/drivers/VehicleDriver.js';
import { DocumentResponseSchema } from '../../types/documents/Document.js';
import { VehicleDriverResponseSchema } from '../../types/drivers/VehicleDriver.js';
import { TaxiOrderResponseSchema } from '../../types/taxiOrders/TaxiOrder.js';
import { DeliveryOrderResponseSchema } from '../../types/deliveryOrders/DeliveryOrder.js';
import { DriverResponseSchema } from '../../types/drivers/Driver.js';
import { BusinessPremiseResponseSchema } from '../../types/invoices/BusinessPremise.js';
import { InvoiceResponseSchema } from '../../types/invoices/Invoice.js';
import { TransportModuleResponseSchema } from '../../types/transport/TransportModule.js';

extendZodWithOpenApi(z);

// Base vehicle input (DB-level fields only; no ids/timestamps)
export const VehicleEntityBaseSchema = z
	.object({
		transport_module_id: z.string().uuid().nullable().optional(),
		// active: z.boolean().nullable().optional(),
		class: z.nativeEnum(VEHICLE_CLASS).nullable().optional(),
		category: z.nativeEnum(VEHICLE_CATEGORY).nullable().optional(),
		make: z.string().nullable().optional(),
		model: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
		license_plate: z.string().nullable().optional(),
		// vehicle_specification_id: z.string().uuid().nullable().optional(),
		// business_premise_id: z.string().uuid().nullable().optional(),
	})
	.openapi('VehicleEntityBase');

export type VehicleEntityBaseInput = z.infer<typeof VehicleEntityBaseSchema>;

// Create/update payloads used by controllers
export const VehicleCreateInputSchema = VehicleEntityBaseSchema.openapi('VehicleCreateInput');
export type VehicleCreateInput = z.infer<typeof VehicleCreateInputSchema>;

export const VehicleUpdateInputSchema = VehicleEntityBaseSchema.partial().openapi('VehicleUpdateInput');
export type VehicleUpdateInput = z.infer<typeof VehicleUpdateInputSchema>;

// Driver reference for assignment arrays
export const DriverRefSchema = z
	.object({
		driver_id: z.string().uuid(),
	})
	.openapi('DriverRef');
export type DriverRef = z.infer<typeof DriverRefSchema>;

// File upload payload coming from the client (base64 + metadata)
const BaseFileUploadSchema = z.object({
	file_type: z.nativeEnum(FILE_TYPE),
	mime_type: z.string(),
	base64: z.string().min(1), // raw content used for S3 upload
	name: z.string().optional(),
});

// On update, a file may optionally carry document_id to signal it already belongs to the document
export const FileUploadCreateSchema = BaseFileUploadSchema.openapi('FileUploadCreate');
export const FileUploadUpdateSchema = BaseFileUploadSchema.extend({
	document_id: z.string().uuid().optional(),
}).openapi('FileUploadUpdate');

export type FileUploadCreate = z.infer<typeof FileUploadCreateSchema>;
export type FileUploadUpdate = z.infer<typeof FileUploadUpdateSchema>;

// Document payload sent from the client
export const DocumentDataSchema = z
	.object({
		document_type: z.nativeEnum(DOCUMENT_TYPE),
		expiration_date: z.string().datetime().nullable().optional(),
		issue_date: z.string().datetime().nullable().optional(),
		additional_info: z.record(z.unknown()).nullable().optional(),
		public: z.boolean().optional(), // may be auto-set for certain types server-side
	})
	.openapi('DocumentData');
export type DocumentDataInput = z.infer<typeof DocumentDataSchema>;

export const VehicleDocumentCreateSchema = z
	.object({
		documentData: DocumentDataSchema,
		files: z.array(FileUploadCreateSchema).min(1),
	})
	.openapi('VehicleDocumentCreate');
export type VehicleDocumentCreate = z.infer<typeof VehicleDocumentCreateSchema>;

export const VehicleDocumentUpdateSchema = z
	.object({
		document_id: z.string().uuid(),
		documentData: DocumentDataSchema.partial(),
		files: z.array(FileUploadUpdateSchema).default([]),
	})
	.openapi('VehicleDocumentUpdate');
export type VehicleDocumentUpdate = z.infer<typeof VehicleDocumentUpdateSchema>;

// Controller request bodies
export const CreateVehicleRequestSchema = z
	.object({
		vehicle_information: VehicleCreateInputSchema,
		drivers: z.array(DriverRefSchema).default([]).nullable().optional(),
		documents: z.array(VehicleDocumentCreateSchema).default([]).nullable().optional(),
	})
	.openapi('CreateVehicleRequest');
export type CreateVehicleRequest = z.infer<typeof CreateVehicleRequestSchema>;

export const UpdateVehicleRequestSchema = z
	.object({
		vehicle_id: z.string().uuid(),
		vehicle_information: VehicleUpdateInputSchema,
		drivers: z.array(DriverRefSchema).default([]).nullable().optional(),
		documents: z.array(VehicleDocumentUpdateSchema).default([]).nullable().optional(),
	})
	.openapi('UpdateVehicleRequest');
export type UpdateVehicleRequest = z.infer<typeof UpdateVehicleRequestSchema>;

// Shared body for assign/unassign vehicles to a driver
export const VehicleIdsArraySchema = z
	.object({
		vehicle_id: z.string().uuid(),
	})
	.openapi('VehicleIdRef');

export const VehicleDriverAssignmentSchema = z
	.object({
		vehicles: z.array(VehicleIdsArraySchema).min(1),
		driver_id: z.string().uuid(),
	})
	.openapi('VehicleDriverAssignment');
export type VehicleDriverAssignment = z.infer<typeof VehicleDriverAssignmentSchema>;

export const VehicleResponseSchema = z
	.object({
		vehicle_id: z.string(),
		transport_module_id: z.string().nullable().optional(),
		active: z.boolean().nullable().optional(),
		class: z.nativeEnum(VEHICLE_CLASS).nullable().optional(),
		category: z.nativeEnum(VEHICLE_CATEGORY).nullable().optional(),
		make: z.string().nullable().optional(),
		model: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
		license_plate: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		documents: z.array(DocumentResponseSchema),
		drivers: z.array(VehicleDriverResponseSchema),
		taxi_orders: z.array(TaxiOrderResponseSchema),
		delivery_orders: z.array(DeliveryOrderResponseSchema),
		current_driver: DriverResponseSchema.nullable().optional(),
		business_premise_id: z.string().nullable().optional(),
		business_premise: BusinessPremiseResponseSchema.nullable().optional(),
		invoices: z.array(InvoiceResponseSchema),
		transport_module: TransportModuleResponseSchema.nullable().optional(),
	})
	.openapi('VehicleResponse');

export type VehicleResponse = z.infer<typeof VehicleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('VehicleEntityBase', VehicleEntityBaseSchema);
	registry.register('VehicleCreateInput', VehicleCreateInputSchema);
	registry.register('VehicleUpdateInput', VehicleUpdateInputSchema);
	registry.register('DriverRef', DriverRefSchema);
	registry.register('FileUploadCreate', FileUploadCreateSchema);
	registry.register('FileUploadUpdate', FileUploadUpdateSchema);
	registry.register('DocumentData', DocumentDataSchema);
	registry.register('VehicleDocumentCreate', VehicleDocumentCreateSchema);
	registry.register('VehicleDocumentUpdate', VehicleDocumentUpdateSchema);
	registry.register('CreateVehicleRequest', CreateVehicleRequestSchema);
	registry.register('UpdateVehicleRequest', UpdateVehicleRequestSchema);
	registry.register('VehicleIdRef', VehicleIdsArraySchema);
	registry.register('VehicleDriverAssignment', VehicleDriverAssignmentSchema);
	registry.register('VehicleResponse', VehicleResponseSchema);
}

export type Vehicle = {
	vehicle_id: string;
	transport_module_id?: string | null;
	active?: boolean | null;
	class?: VEHICLE_CLASS | null;
	category?: VEHICLE_CATEGORY | null;
	make?: string | null;
	model?: string | null;
	color?: string | null;
	license_plate?: string | null;
	created_at: Date;
	updated_at: Date;
	documents?: Document[];
	drivers?: VehicleDriver[];
	taxi_orders?: TaxiOrder[];
	delivery_orders?: DeliveryOrder[];
	current_driver?: Driver | null;
	business_premise_id?: string | null;
	business_premise?: BusinessPremise | null;
	invoices?: Invoice[];
	transport_module?: TransportModule | null;
};
