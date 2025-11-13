import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Document Response DTOs ===
export {
	DocumentBaseSchema,
	DocumentRefSchema,
	DocumentResponseSchema,
	type DocumentBase,
	type DocumentRef,
	type DocumentResponse,
	registerSchemas as registerDocumentSchemas,
} from './document.dto.js';

// === Document Validators (Request Body, Query, Params) ===
export {
	DocumentCreateSchema,
	DocumentIdParamsSchema,
	UserIdParamsSchema,
	BusinessIdParamsSchema,
	DriverIdParamsSchema,
	DeliveryPersonIdParamsSchema,
	VehicleIdParamsSchema,
	DocumentTypeParamSchema,
	CreateDocumentBodySchema,
	UpdateDocumentExpirationSchema,
	UpdateDocumentIssueSchema,
	UpdateDocumentFilesSchema,
	UpdateDocumentAdditionalInfoSchema,
	GetDocumentByIdParamsSchema,
	GetDocumentsForBusinessParamsSchema,
	GetDocumentsForUserParamsSchema,
	GetDocumentsForDriverParamsSchema,
	GetDocumentsForVehicleParamsSchema,
	GetDocumentsByTypeParamsSchema,
	GetDocumentsForUserByTypeParamsSchema,
	GetDocumentsForBusinessByTypeParamsSchema,
	GetDocumentsForDriverByTypeParamsSchema,
	GetDocumentsForVehicleByTypeParamsSchema,
	FindDocumentByTypeAndDeliveryDriverParamsSchema,
	FindDocumentByTypeAndDriverParamsSchema,
	CreateDocumentInputSchema,
	UpdateDocumentExpirationInputSchema,
	UpdateDocumentIssueInputSchema,
	UpdateDocumentFilesInputSchema,
	UpdateDocumentAdditionalInfoInputSchema,
	LinkDocumentToUserInputSchema,
	LinkDocumentToTransactionInputSchema,
	LinkDocumentToVehicleInputSchema,
	LinkDocumentToMenuItemInputSchema,
	LinkDocumentToLostItemInputSchema,
	LinkDocumentToDriverInputSchema,
	LinkDocumentToBusinessInputSchema,
	LinkDocumentToDeliveryDriverInputSchema,
	DeleteDocumentInputSchema,
	DeleteDocumentsAndFilesByFieldInputSchema,
	DeleteDocumentsAndFilesByDocumentIdInputSchema,
	GetLastDocumentByTypeAndBusinessIdInputSchema,
	UpdateDocumentByDocumentIdInputSchema,
	type CreateDocumentBody,
	type UpdateDocumentExpiration,
	type UpdateDocumentIssue,
	type UpdateDocumentFiles,
	type UpdateDocumentAdditionalInfo,
	type GetDocumentByIdParams,
	type GetDocumentsForBusinessParams,
	type GetDocumentsForUserParams,
	type GetDocumentsForDriverParams,
	type GetDocumentsForVehicleParams,
	type GetDocumentsByTypeParams,
	type GetDocumentsForUserByTypeParams,
	type GetDocumentsForBusinessByTypeParams,
	type GetDocumentsForDriverByTypeParams,
	type GetDocumentsForVehicleByTypeParams,
	type FindDocumentByTypeAndDeliveryDriverParams,
	type FindDocumentByTypeAndDriverParams,
	type CreateDocumentInput,
	type UpdateDocumentExpirationInput,
	type UpdateDocumentIssueInput,
	type UpdateDocumentFilesInput,
	type UpdateDocumentAdditionalInfoInput,
	type LinkDocumentToUserInput,
	type LinkDocumentToTransactionInput,
	type LinkDocumentToVehicleInput,
	type LinkDocumentToMenuItemInput,
	type LinkDocumentToLostItemInput,
	type LinkDocumentToDriverInput,
	type LinkDocumentToBusinessInput,
	type LinkDocumentToDeliveryDriverInput,
	type DeleteDocumentInput,
	type DeleteDocumentsAndFilesByFieldInput,
	type DeleteDocumentsAndFilesByDocumentIdInput,
	type GetLastDocumentByTypeAndBusinessIdInput,
	type UpdateDocumentByDocumentIdInput,
	registerSchemas as registerDocumentValidatorSchemas,
} from './document.validators.js';

// === Document Mappers ===
export { toDocumentResponse, toDocumentList } from './document.mappers.js';

// === Schema Registration ===
import { registerSchemas as registerDocumentSchemas } from './document.dto.js';
import { registerSchemas as registerDocumentValidatorSchemas } from './document.validators.js';

export function registerSchemas(registry: OpenAPIRegistry) {
	registerDocumentSchemas(registry);
	registerDocumentValidatorSchemas(registry);
}
