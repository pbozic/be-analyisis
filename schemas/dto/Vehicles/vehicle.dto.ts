import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { VEHICLE_CATEGORY, VEHICLE_CLASS, DOCUMENT_TYPE, FILE_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives';
import { BasicUserDataSchema } from '../common/User.dto.ts';
extendZodWithOpenApi(z);

// =============================
// Vehicle Response DTOs (DAO)
// =============================

export const DriverRefOutSchema = z
	.object({
		driver_id: UUID,
		user: BasicUserDataSchema,
	})
	.openapi('DriverRefOut');
export type DriverRefOut = z.infer<typeof DriverRefOutSchema>;

export const DocumentRefSchema = z
	.object({
		document_id: UUID,
		label: z.string().min(1),
	})
	.openapi('DocumentRef');
export type DocumentRef = z.infer<typeof DocumentRefSchema>;

export const VehicleBaseSchema = z
	.object({
		vehicle_id: UUID,
		transport_module_id: UUID.nullable().optional(),
		active: z.boolean().nullable().optional(),
		class: z.nativeEnum(VEHICLE_CLASS).nullable().optional(),
		category: z.nativeEnum(VEHICLE_CATEGORY).nullable().optional(),
		make: z.string().nullable().optional(),
		model: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
		license_plate: z.string().nullable().optional(),
		business_premise_id: UUID.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('VehicleBase');
export type VehicleBase = z.infer<typeof VehicleBaseSchema>;

export const VehicleRefSchema = z
	.object({
		vehicle_id: UUID,
		label: z.string().min(1),
	})
	.openapi('VehicleRef');
export type VehicleRef = z.infer<typeof VehicleRefSchema>;

export const VehicleDetailSchema = VehicleBaseSchema.extend({
	current_driver: DriverRefOutSchema.nullable().optional(),
	drivers: z.array(DriverRefOutSchema).optional().default([]),
	documents: z.array(DocumentRefSchema).optional().default([]),
}).openapi('VehicleDetail');
export type VehicleDetail = z.infer<typeof VehicleDetailSchema>;

// Mappers from Prisma payloads to DTOs
export function toDriverRefOut(driver: unknown | null | undefined): DriverRefOut | null {
	if (!driver) return null;
	const d = driver as {
		driver_id: string;
		user?: {
			first_name?: string;
			last_name?: string;
			email?: string | null;
			telephone?: string | null;
			telephone_code?: string | null;
			date_of_birth?: string | null;
		};
	};
	const basicUser = BasicUserDataSchema.parse({
		first_name: d.user?.first_name ?? '',
		last_name: d.user?.last_name ?? '',
		email: d.user?.email ?? undefined,
		telephone: d.user?.telephone ?? undefined,
		telephone_code: d.user?.telephone_code ?? undefined,
		date_of_birth: d.user?.date_of_birth ?? undefined,
	});
	return DriverRefOutSchema.parse({ driver_id: d.driver_id, user: basicUser });
}

export function toDocumentRef(doc: unknown): DocumentRef {
	const d = doc as { document_id: string; document_type?: string; documents_type?: string };
	const label = d.document_type || d.documents_type || 'document';
	return DocumentRefSchema.parse({ document_id: d.document_id, label });
}

export function toVehicleRef(vehicle: unknown): VehicleRef {
	const v = vehicle as {
		vehicle_id: string;
		license_plate?: string | null;
		make?: string | null;
		model?: string | null;
	};
	const makeModel = [v.make, v.model].filter(Boolean).join(' ').trim();
	const label = v.license_plate || makeModel || v.vehicle_id;
	return VehicleRefSchema.parse({ vehicle_id: v.vehicle_id, label });
}

type PrismaVehicle = {
	vehicle_id: string;
	transport_module_id?: string | null;
	active?: boolean | null;
	class?: VEHICLE_CLASS | null;
	category?: VEHICLE_CATEGORY | null;
	make?: string | null;
	model?: string | null;
	color?: string | null;
	license_plate?: string | null;
	business_premise_id?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	current_driver?: {
		driver_id: string;
		user?: { user_id: string; first_name?: string | null; last_name?: string | null };
	} | null;
	drivers?: Array<{
		driver?: {
			driver_id: string;
			user?: { user_id: string; first_name?: string | null; last_name?: string | null };
		};
	}>;
	documents?: Array<{ document_id: string; document_type?: string; documents_type?: string }>;
};

export function toVehicleDetail(vehicle: unknown): VehicleDetail {
	const v = vehicle as PrismaVehicle;
	const currentDriver = v.current_driver ? toDriverRefOut(v.current_driver) : null;
	const driverRecords = Array.isArray(v.drivers) ? v.drivers : [];
	const drivers = driverRecords
		.map((vd) => vd?.driver)
		.filter(Boolean)
		.map((d) => toDriverRefOut(d)!) as DriverRefOut[];
	const documentRecords = Array.isArray(v.documents) ? v.documents : [];
	const documents = documentRecords.map((d) => toDocumentRef(d));
	return VehicleDetailSchema.parse({
		vehicle_id: v.vehicle_id,
		transport_module_id: v.transport_module_id ?? null,
		active: v.active ?? null,
		class: v.class ?? null,
		category: v.category ?? null,
		make: v.make ?? null,
		model: v.model ?? null,
		color: v.color ?? null,
		license_plate: v.license_plate ?? null,
		business_premise_id: v.business_premise_id ?? null,
		created_at: v.created_at ? new Date(v.created_at as string | Date).toISOString() : undefined,
		updated_at: v.updated_at ? new Date(v.updated_at as string | Date).toISOString() : undefined,
		current_driver: currentDriver,
		drivers,
		documents,
	});
}

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

// Driver reference for assignment arrays
export const DriverRefSchema = z
	.object({
		driver_id: UUID,
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
	// Responses
	registry.register('DriverRefOut', DriverRefOutSchema);
	registry.register('DocumentRef', DocumentRefSchema);
	registry.register('VehicleBase', VehicleBaseSchema);
	registry.register('VehicleRef', VehicleRefSchema);
	registry.register('VehicleDetail', VehicleDetailSchema);
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
	registry.register('VehicleDriverAssignment', VehicleDriverAssignmentSchema);
}
