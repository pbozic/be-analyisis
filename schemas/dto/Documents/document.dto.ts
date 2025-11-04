import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DOCUMENT_TYPE } from '@prisma/client';
import { CreateFileDataSchema } from '../Files/file.dto.ts';
import { DocumentCreateSchema as LostItemDocumentCreateSchema } from '../LostItems/lostitem.dto.ts';

extendZodWithOpenApi(z);

// Use the DocumentCreateSchema already defined in LostItems DTO to keep shapes consistent
export const DocumentCreateSchema = LostItemDocumentCreateSchema.openapi('DocumentCreate');

// -----------------------
// Path param schemas
// -----------------------
export const DocumentIdParamsSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DocumentIdParams');

export const UserIdParamsSchema = z
	.object({
		user_id: z.string().uuid().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DocumentUserIdParams');

export const BusinessIdParamsSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DocumentBusinessIdParams');

export const DriverIdParamsSchema = z
	.object({
		driver_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DocumentDriverIdParams');

export const DeliveryPersonIdParamsSchema = z
	.object({
		delivery_driver_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DocumentDeliveryPersonIdParams');

export const VehicleIdParamsSchema = z
	.object({
		vehicle_id: z.string().uuid().openapi({ example: 'dd0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DocumentVehicleIdParams');

export const DocumentTypeParamSchema = z
	.object({
		document_type: z.nativeEnum(DOCUMENT_TYPE).openapi({ example: DOCUMENT_TYPE.PROFILE_PICTURE }),
	})
	.openapi('DocumentTypeParam');

// -----------------------
// Create document body (used by createUserDocument, createBusinessDocument, createDriverDocument, createVehicleDocument, createDeliveryPersonDocument)
// -----------------------
export const CreateDocumentBodySchema = z
	.object({
		documentData: DocumentCreateSchema,
		files: z.array(CreateFileDataSchema).optional(),
	})
	.openapi('CreateDocumentBody');

// -----------------------
// Update small bodies
// -----------------------
export const UpdateDocumentExpirationSchema = z
	.object({
		expirationDate: z.string().datetime().openapi({ example: '2026-01-01T00:00:00Z' }),
	})
	.openapi('UpdateDocumentExpiration');

export const UpdateDocumentIssueSchema = z
	.object({
		issueDate: z.string().datetime().openapi({ example: '2024-01-01T00:00:00Z' }),
	})
	.openapi('UpdateDocumentIssue');

export const UpdateDocumentFilesSchema = z
	.object({
		files: z.array(CreateFileDataSchema).openapi({ example: [] }),
	})
	.openapi('UpdateDocumentFiles');

export const UpdateDocumentAdditionalInfoSchema = z
	.object({
		jsonData: z.any().openapi({ example: { notes: 'scanned copy uploaded' } }),
	})
	.openapi('UpdateDocumentAdditionalInfo');

// -----------------------
// Types and register
// -----------------------
export type CreateDocumentBody = z.infer<typeof CreateDocumentBodySchema>;
export type UpdateDocumentExpiration = z.infer<typeof UpdateDocumentExpirationSchema>;
export type UpdateDocumentIssue = z.infer<typeof UpdateDocumentIssueSchema>;
export type UpdateDocumentFiles = z.infer<typeof UpdateDocumentFilesSchema>;
export type UpdateDocumentAdditionalInfo = z.infer<typeof UpdateDocumentAdditionalInfoSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DocumentCreate', DocumentCreateSchema);
	registry.register('DocumentIdParams', DocumentIdParamsSchema);
	registry.register('DocumentUserIdParams', UserIdParamsSchema);
	registry.register('DocumentBusinessIdParams', BusinessIdParamsSchema);
	registry.register('DocumentDriverIdParams', DriverIdParamsSchema);
	registry.register('DocumentDeliveryPersonIdParams', DeliveryPersonIdParamsSchema);
	registry.register('DocumentVehicleIdParams', VehicleIdParamsSchema);
	registry.register('DocumentTypeParam', DocumentTypeParamSchema);

	registry.register('CreateDocumentBody', CreateDocumentBodySchema);
	registry.register('UpdateDocumentExpiration', UpdateDocumentExpirationSchema);
	registry.register('UpdateDocumentIssue', UpdateDocumentIssueSchema);
	registry.register('UpdateDocumentFiles', UpdateDocumentFilesSchema);
	registry.register('UpdateDocumentAdditionalInfo', UpdateDocumentAdditionalInfoSchema);
}
