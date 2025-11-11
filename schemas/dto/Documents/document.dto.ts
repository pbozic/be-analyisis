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
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		expirationDate: z.string().datetime().openapi({ example: '2026-01-01T00:00:00Z' }),
	})
	.openapi('UpdateDocumentExpiration');

export const UpdateDocumentIssueSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		issueDate: z.string().datetime().openapi({ example: '2024-01-01T00:00:00Z' }),
	})
	.openapi('UpdateDocumentIssue');

export const UpdateDocumentFilesSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		files: z.array(CreateFileDataSchema).openapi({ example: [] }),
	})
	.openapi('UpdateDocumentFiles');

export const UpdateDocumentAdditionalInfoSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		jsonData: z.any().openapi({ example: { notes: 'scanned copy uploaded' } }),
	})
	.openapi('UpdateDocumentAdditionalInfo');

// (Response/model shapes removed — this DTO file contains only request/input shapes as requested)

// -----------------------
// Function-specific input schemas (named, exported) — one per DAO function
// -----------------------

export const GetDocumentByIdParamsSchema = z
	.object({ document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }) })
	.openapi('GetDocumentByIdParams');
export type GetDocumentByIdParams = z.infer<typeof GetDocumentByIdParamsSchema>;

export const GetDocumentsForBusinessParamsSchema = z
	.object({ business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }) })
	.openapi('GetDocumentsForBusinessParams');
export type GetDocumentsForBusinessParams = z.infer<typeof GetDocumentsForBusinessParamsSchema>;

export const GetDocumentsForUserParamsSchema = z
	.object({ user_id: z.string().uuid().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }) })
	.openapi('GetDocumentsForUserParams');
export type GetDocumentsForUserParams = z.infer<typeof GetDocumentsForUserParamsSchema>;

export const GetDocumentsForDriverParamsSchema = z
	.object({ driver_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }) })
	.openapi('GetDocumentsForDriverParams');
export type GetDocumentsForDriverParams = z.infer<typeof GetDocumentsForDriverParamsSchema>;

export const GetDocumentsForVehicleParamsSchema = z
	.object({ vehicle_id: z.string().uuid().openapi({ example: 'dd0e8400-e29b-41d4-a716-446655440000' }) })
	.openapi('GetDocumentsForVehicleParams');
export type GetDocumentsForVehicleParams = z.infer<typeof GetDocumentsForVehicleParamsSchema>;

export const GetDocumentsByTypeParamsSchema = z
	.object({ document_type: z.nativeEnum(DOCUMENT_TYPE).openapi({ example: DOCUMENT_TYPE.PROFILE_PICTURE }) })
	.openapi('GetDocumentsByTypeParams');
export type GetDocumentsByTypeParams = z.infer<typeof GetDocumentsByTypeParamsSchema>;

export const GetDocumentsForUserByTypeParamsSchema = z
	.object({
		user_id: z.string().uuid().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }),
		document_type: z.nativeEnum(DOCUMENT_TYPE),
	})
	.openapi('GetDocumentsForUserByTypeParams');
export type GetDocumentsForUserByTypeParams = z.infer<typeof GetDocumentsForUserByTypeParamsSchema>;

export const GetDocumentsForBusinessByTypeParamsSchema = z
	.object({
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		document_type: z.nativeEnum(DOCUMENT_TYPE),
	})
	.openapi('GetDocumentsForBusinessByTypeParams');
export type GetDocumentsForBusinessByTypeParams = z.infer<typeof GetDocumentsForBusinessByTypeParamsSchema>;

export const GetDocumentsForDriverByTypeParamsSchema = z
	.object({
		driver_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		document_type: z.nativeEnum(DOCUMENT_TYPE),
	})
	.openapi('GetDocumentsForDriverByTypeParams');
export type GetDocumentsForDriverByTypeParams = z.infer<typeof GetDocumentsForDriverByTypeParamsSchema>;

export const GetDocumentsForVehicleByTypeParamsSchema = z
	.object({
		vehicle_id: z.string().uuid().openapi({ example: 'dd0e8400-e29b-41d4-a716-446655440000' }),
		document_type: z.nativeEnum(DOCUMENT_TYPE),
	})
	.openapi('GetDocumentsForVehicleByTypeParams');
export type GetDocumentsForVehicleByTypeParams = z.infer<typeof GetDocumentsForVehicleByTypeParamsSchema>;

export const FindDocumentByTypeAndDeliveryDriverParamsSchema = z
	.object({
		document_type: z.nativeEnum(DOCUMENT_TYPE),
		delivery_driver_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('FindDocumentByTypeAndDeliveryDriverParams');
export type FindDocumentByTypeAndDeliveryDriverParams = z.infer<typeof FindDocumentByTypeAndDeliveryDriverParamsSchema>;

export const FindDocumentByTypeAndDriverParamsSchema = z
	.object({
		document_type: z.nativeEnum(DOCUMENT_TYPE),
		driver_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('FindDocumentByTypeAndDriverParams');
export type FindDocumentByTypeAndDriverParams = z.infer<typeof FindDocumentByTypeAndDriverParamsSchema>;

export const CreateDocumentInputSchema = CreateDocumentBodySchema.openapi('CreateDocumentInput');
export type CreateDocumentInput = z.infer<typeof CreateDocumentInputSchema>;

export const UpdateDocumentExpirationInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		expirationDate: z.string().datetime().openapi({ example: '2026-01-01T00:00:00Z' }),
	})
	.openapi('UpdateDocumentExpirationInput');
export type UpdateDocumentExpirationInput = z.infer<typeof UpdateDocumentExpirationInputSchema>;

export const UpdateDocumentIssueInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		issueDate: z.string().datetime().openapi({ example: '2024-01-01T00:00:00Z' }),
	})
	.openapi('UpdateDocumentIssueInput');
export type UpdateDocumentIssueInput = z.infer<typeof UpdateDocumentIssueInputSchema>;

export const UpdateDocumentFilesInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		files: z.array(CreateFileDataSchema),
	})
	.openapi('UpdateDocumentFilesInput');
export type UpdateDocumentFilesInput = z.infer<typeof UpdateDocumentFilesInputSchema>;

export const UpdateDocumentAdditionalInfoInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		jsonData: z.any(),
	})
	.openapi('UpdateDocumentAdditionalInfoInput');
export type UpdateDocumentAdditionalInfoInput = z.infer<typeof UpdateDocumentAdditionalInfoInputSchema>;

export const LinkDocumentToUserInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		user_id: z.string().uuid().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('LinkDocumentToUserInput');
export type LinkDocumentToUserInput = z.infer<typeof LinkDocumentToUserInputSchema>;

export const LinkDocumentToTransactionInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		transaction_id: z.string().uuid().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('LinkDocumentToTransactionInput');
export type LinkDocumentToTransactionInput = z.infer<typeof LinkDocumentToTransactionInputSchema>;

export const LinkDocumentToVehicleInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		vehicle_id: z.string().uuid().openapi({ example: 'dd0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('LinkDocumentToVehicleInput');
export type LinkDocumentToVehicleInput = z.infer<typeof LinkDocumentToVehicleInputSchema>;

export const LinkDocumentToMenuItemInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		menu_item_id: z.string().uuid().openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('LinkDocumentToMenuItemInput');
export type LinkDocumentToMenuItemInput = z.infer<typeof LinkDocumentToMenuItemInputSchema>;

export const LinkDocumentToLostItemInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		lost_item_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('LinkDocumentToLostItemInput');
export type LinkDocumentToLostItemInput = z.infer<typeof LinkDocumentToLostItemInputSchema>;

export const LinkDocumentToDriverInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		driver_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('LinkDocumentToDriverInput');
export type LinkDocumentToDriverInput = z.infer<typeof LinkDocumentToDriverInputSchema>;

export const LinkDocumentToBusinessInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('LinkDocumentToBusinessInput');
export type LinkDocumentToBusinessInput = z.infer<typeof LinkDocumentToBusinessInputSchema>;

export const LinkDocumentToDeliveryDriverInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		delivery_driver_id: z.string().uuid().openapi({ example: 'cc0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('LinkDocumentToDeliveryDriverInput');
export type LinkDocumentToDeliveryDriverInput = z.infer<typeof LinkDocumentToDeliveryDriverInputSchema>;

export const DeleteDocumentInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteDocumentInput');
export type DeleteDocumentInput = z.infer<typeof DeleteDocumentInputSchema>;

export const DeleteDocumentsAndFilesByFieldInputSchema = z
	.object({
		field: z.string(),
		id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteDocumentsAndFilesByFieldInput');
export type DeleteDocumentsAndFilesByFieldInput = z.infer<typeof DeleteDocumentsAndFilesByFieldInputSchema>;

export const DeleteDocumentsAndFilesByDocumentIdInputSchema = z
	.object({
		document_type: z.nativeEnum(DOCUMENT_TYPE),
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteDocumentsAndFilesByDocumentIdInput');
export type DeleteDocumentsAndFilesByDocumentIdInput = z.infer<typeof DeleteDocumentsAndFilesByDocumentIdInputSchema>;

export const GetLastDocumentByTypeAndBusinessIdInputSchema = z
	.object({
		type: z.nativeEnum(DOCUMENT_TYPE),
		business_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetLastDocumentByTypeAndBusinessIdInput');
export type GetLastDocumentByTypeAndBusinessIdInput = z.infer<typeof GetLastDocumentByTypeAndBusinessIdInputSchema>;

export const UpdateDocumentByDocumentIdInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		updateData: z.any(),
	})
	.openapi('UpdateDocumentByDocumentIdInput');
export type UpdateDocumentByDocumentIdInput = z.infer<typeof UpdateDocumentByDocumentIdInputSchema>;

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

	// Register named, exported DAO-level schemas
	registry.register('GetDocumentByIdParams', GetDocumentByIdParamsSchema);
	registry.register('GetDocumentsForBusinessParams', GetDocumentsForBusinessParamsSchema);
	registry.register('GetDocumentsForUserParams', GetDocumentsForUserParamsSchema);
	registry.register('GetDocumentsForDriverParams', GetDocumentsForDriverParamsSchema);
	registry.register('GetDocumentsForVehicleParams', GetDocumentsForVehicleParamsSchema);
	registry.register('GetDocumentsByTypeParams', GetDocumentsByTypeParamsSchema);
	registry.register('GetDocumentsForUserByTypeParams', GetDocumentsForUserByTypeParamsSchema);
	registry.register('GetDocumentsForBusinessByTypeParams', GetDocumentsForBusinessByTypeParamsSchema);
	registry.register('GetDocumentsForDriverByTypeParams', GetDocumentsForDriverByTypeParamsSchema);
	registry.register('GetDocumentsForVehicleByTypeParams', GetDocumentsForVehicleByTypeParamsSchema);
	registry.register('FindDocumentByTypeAndDeliveryDriverParams', FindDocumentByTypeAndDeliveryDriverParamsSchema);
	registry.register('FindDocumentByTypeAndDriverParams', FindDocumentByTypeAndDriverParamsSchema);

	registry.register('CreateDocumentInput', CreateDocumentInputSchema);
	registry.register('UpdateDocumentExpirationInput', UpdateDocumentExpirationInputSchema);
	registry.register('UpdateDocumentIssueInput', UpdateDocumentIssueInputSchema);
	registry.register('UpdateDocumentFilesInput', UpdateDocumentFilesInputSchema);
	registry.register('UpdateDocumentAdditionalInfoInput', UpdateDocumentAdditionalInfoInputSchema);

	registry.register('LinkDocumentToUserInput', LinkDocumentToUserInputSchema);
	registry.register('LinkDocumentToTransactionInput', LinkDocumentToTransactionInputSchema);
	registry.register('LinkDocumentToVehicleInput', LinkDocumentToVehicleInputSchema);
	registry.register('LinkDocumentToMenuItemInput', LinkDocumentToMenuItemInputSchema);
	registry.register('LinkDocumentToLostItemInput', LinkDocumentToLostItemInputSchema);
	registry.register('LinkDocumentToDriverInput', LinkDocumentToDriverInputSchema);
	registry.register('LinkDocumentToBusinessInput', LinkDocumentToBusinessInputSchema);
	registry.register('LinkDocumentToDeliveryDriverInput', LinkDocumentToDeliveryDriverInputSchema);

	registry.register('DeleteDocumentInput', DeleteDocumentInputSchema);
	registry.register('DeleteDocumentsAndFilesByFieldInput', DeleteDocumentsAndFilesByFieldInputSchema);
	registry.register('DeleteDocumentsAndFilesByDocumentIdInput', DeleteDocumentsAndFilesByDocumentIdInputSchema);

	registry.register('GetLastDocumentByTypeAndBusinessIdInput', GetLastDocumentByTypeAndBusinessIdInputSchema);
	registry.register('UpdateDocumentByDocumentIdInput', UpdateDocumentByDocumentIdInputSchema);
}
