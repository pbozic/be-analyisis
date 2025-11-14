import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { VEHICLE_CATEGORY, VEHICLE_CLASS, DOCUMENT_TYPE, FILE_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';
import { DriverRefSchema } from './vehicle.dto.js';

extendZodWithOpenApi(z);

// Request schemas moved from vehicle.dto.ts

// Base vehicle input (DB-level fields only; no ids/timestamps)
export const VehicleEntityBaseSchema = z
	.object({
		transport_module_id: UUID.nullable().optional(),
		// active: z.boolean().nullable().optional(),
		class: z.nativeEnum(VEHICLE_CLASS).nullable().optional(),
		category: z.nativeEnum(VEHICLE_CATEGORY).nullable().optional(),
		make: z.string().nullable().optional(),
		model: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
		license_plate: z.string().nullable().optional(),
		// vehicle_specification_id: UUID.nullable().optional(),
		// business_premise_id: UUID.nullable().optional(),
	})
	.openapi('VehicleEntityBase');

export type VehicleEntityBaseInput = z.infer<typeof VehicleEntityBaseSchema>;

// Create/update payloads used by controllers
export const VehicleCreateInputSchema = VehicleEntityBaseSchema.openapi('VehicleCreateInput');
export type VehicleCreateInput = z.infer<typeof VehicleCreateInputSchema>;

export const VehicleUpdateInputSchema = VehicleCreateInputSchema.openapi('VehicleUpdateInput');
export type VehicleUpdateInput = z.infer<typeof VehicleUpdateInputSchema>;

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
	document_id: UUID.optional(),
}).openapi('FileUploadUpdate');

export type FileUploadCreate = z.infer<typeof FileUploadCreateSchema>;
export type FileUploadUpdate = z.infer<typeof FileUploadUpdateSchema>;

// Document payload sent from the client
export const DocumentDataSchema = z
	.object({
		document_type: z.nativeEnum(DOCUMENT_TYPE),
		expiration_date: Timestamp.nullable().optional(),
		issue_date: Timestamp.nullable().optional(),
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
		document_id: UUID,
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

export const UpdateVehicleRequestSchema = CreateVehicleRequestSchema.openapi('UpdateVehicleRequest');
export type UpdateVehicleRequest = z.infer<typeof UpdateVehicleRequestSchema>;

// Shared body for assign/unassign vehicles to a driver
export const VehicleDriverAssignmentSchema = z
	.object({
		vehicle_ids: z.array(UUID).min(1),
		driver_id: UUID,
	})
	.openapi('VehicleDriverAssignment');
export type VehicleDriverAssignment = z.infer<typeof VehicleDriverAssignmentSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('VehicleEntityBase', VehicleEntityBaseSchema);
	registry.register('VehicleCreateInput', VehicleCreateInputSchema);
	registry.register('VehicleUpdateInput', VehicleUpdateInputSchema);
	registry.register('FileUploadCreate', FileUploadCreateSchema);
	registry.register('FileUploadUpdate', FileUploadUpdateSchema);
	registry.register('DocumentData', DocumentDataSchema);
	registry.register('VehicleDocumentCreate', VehicleDocumentCreateSchema);
	registry.register('VehicleDocumentUpdate', VehicleDocumentUpdateSchema);
	registry.register('CreateVehicleRequest', CreateVehicleRequestSchema);
	registry.register('UpdateVehicleRequest', UpdateVehicleRequestSchema);
	registry.register('VehicleDriverAssignment', VehicleDriverAssignmentSchema);
}
