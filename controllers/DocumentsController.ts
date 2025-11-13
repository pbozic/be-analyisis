import { Request, Response } from 'express';

import DocumentDao from '../dao/Document.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import {
	CreateDocumentBody,
	GetDocumentByIdParams,
	GetDocumentsForBusinessParams,
	GetDocumentsForDriverParams,
	GetDocumentsForVehicleParams,
	GetDocumentsByTypeParams,
	GetDocumentsForBusinessByTypeParams,
	GetDocumentsForDriverByTypeParams,
	GetDocumentsForVehicleByTypeParams,
	UpdateDocumentExpiration,
	UpdateDocumentIssue,
	UpdateDocumentFiles,
	UpdateDocumentAdditionalInfo,
} from '../schemas/dto/Documents/document.dto.ts';

/**
 * GET /documents
 * @tag Documents
 * @summary Get all documents
 * @description Retrieves all documents in the system. Intended for admin usage.
 * @operationId getDocuments
 * @response 200 - Successful operation, returns all documents
 * @responseContent {DocumentListResponse} 200.application/json
 * @response 400 - Error retrieving documents
 * @prisma_model documents
 */
export async function listDocuments(req: Request, res: Response): Promise<void> {
	try {
		const documents = await DocumentDao.getDocuments();
		res.status(200).json(documents);
	} catch (error: any) {
		console.error('Error getting all documents:', error);
		res.status(400).json({ error: error?.message ?? String(error) });
	}
}

/**
 * GET /documents/:documentId
 * @tag Documents
 * @summary Get a document by ID
 * @description Retrieves a specific document by its ID. Useful for detailed document viewing.
 * @operationId getDocumentById
 * @pathParam {string} document_id - The ID of the document to retrieve
 * @response 200 - Successful operation, returns the document
 * @responseContent {DocumentResponse} 200.application/json
 * @response 400 - Error retrieving the document
 * @prisma_model documents
 */
export async function getDocumentById(
	req: ValidatedRequest<never, GetDocumentByIdParams>,
	res: Response
): Promise<void> {
	try {
		const { document_id } = req.params;
		const document = await DocumentDao.getDocumentById(document_id);
		if (document) {
			res.status(200).json(document);
		} else {
			res.status(404).json({ message: 'Document not found' });
		}
	} catch (error: any) {
		console.error('Error getting document by ID:', error);
		res.status(400).json({ error: error?.message ?? String(error) });
	}
}

/**
 * GET /documents/businesses/:businessId
 * @tag Documents
 * @summary Get documents for a business
 * @description Retrieves all documents associated with a specific business.
 * @operationId getDocumentsForBusiness
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - Successful operation, returns documents
 * @responseContent {DocumentListResponse} 200.application/json
 * @response 400 - Error retrieving documents
 * @prisma_model documents
 */
export async function getDocumentsForBusiness(
	req: ValidatedRequest<never, GetDocumentsForBusinessParams>,
	res: Response
): Promise<void> {
	try {
		const { business_id } = req.params;
		const documents = await DocumentDao.getDocumentsForBusiness(business_id);
		res.status(200).json(documents);
	} catch (error: any) {
		console.error('Error getting documents for business:', error);
		res.status(400).json({ error: error?.message ?? String(error) });
	}
}

/**
 * GET /documents/drivers/:driverId
 * @tag Documents
 * @summary Get documents for a driver
 * @description Retrieves all documents associated with a specific driver.
 * @operationId getDocumentsForDriver
 * @pathParam {string} driver_id - The ID of the driver
 * @response 200 - Successful operation, returns documents
 * @responseContent {DocumentListResponse} 200.application/json
 * @response 400 - Error retrieving documents
 * @prisma_model documents
 */
export async function getDocumentsForDriver(
	req: ValidatedRequest<never, GetDocumentsForDriverParams>,
	res: Response
): Promise<void> {
	try {
		const { driver_id } = req.params;
		const documents = await DocumentDao.getDocumentsForDriver(driver_id);
		res.status(200).json(documents);
	} catch (error: any) {
		console.error('Error getting documents for driver:', error);
		res.status(400).json({ error: error?.message ?? String(error) });
	}
}

/**
 * GET /documents/vehicles/:vehicleId
 * @tag Documents
 * @summary Get documents for a vehicle
 * @description Retrieves all documents associated with a specific vehicle.
 * @operationId getDocumentsForVehicle
 * @pathParam {string} vehicle_id - The ID of the vehicle
 * @response 200 - Successful operation, returns documents
 * @responseContent {DocumentListResponse} 200.application/json
 * @response 400 - Error retrieving documents
 * @prisma_model documents
 */
export async function getDocumentsForVehicle(
	req: ValidatedRequest<never, GetDocumentsForVehicleParams>,
	res: Response
): Promise<void> {
	try {
		const { vehicle_id } = req.params;
		const documents = await DocumentDao.getDocumentsForVehicle(vehicle_id);
		res.status(200).json(documents);
	} catch (error: any) {
		console.error('Error getting documents for vehicle:', error);
		res.status(400).json({ error: error?.message ?? String(error) });
	}
}

/**
 * GET /documents/type/:documentType
 * @tag Documents
 * @summary Get documents by type
 * @description Retrieves documents of a specific type across all entities.
 * @operationId getDocumentsByDocumentType
 * @pathParam {string} document_type - The type of the documents to retrieve
 * @response 200 - Successful operation, returns documents
 * @responseContent {DocumentListResponse} 200.application/json
 * @response 400 - Error retrieving documents
 * @prisma_model documents
 */
export async function getDocumentsByDocumentType(
	req: ValidatedRequest<never, GetDocumentsByTypeParams>,
	res: Response
): Promise<void> {
	try {
		const { document_type } = req.params;
		const documents = await DocumentDao.getDocumentsByDocumentType(document_type);
		res.status(200).json(documents);
	} catch (error: any) {
		console.error('Error getting documents by type:', error);
		res.status(400).json({ error: 'Error retrieving documents', detail: error?.message });
	}
}

/**
 * GET /documents/business/:businessId/documents/type/:documentType
 * @tag Documents
 * @summary Get documents for a business by type
 * @description Retrieves documents of a specific type associated with a business.
 * @operationId getDocumentsForBusinessByType
 * @pathParam {string} business_id - The ID of the business
 * @pathParam {string} document_type - The type of the documents
 * @response 200 - Successful operation, returns documents
 * @responseContent {DocumentListResponse} 200.application/json
 * @response 400 - Error retrieving documents
 * @prisma_model documents
 */
export async function getDocumentsForBusinessByDocumentType(
	req: ValidatedRequest<never, GetDocumentsForBusinessByTypeParams>,
	res: Response
): Promise<void> {
	try {
		const { business_id, document_type } = req.params;
		const documents = await DocumentDao.getDocumentsForBusinessByDocumentType(business_id, document_type);
		res.status(200).json(documents);
	} catch (error: any) {
		console.error('Error getting documents for business by type:', error);
		res.status(400).json({ error: 'Error retrieving documents', detail: error?.message });
	}
}

/**
 * GET /documents/drivers/:driverId/documents/type/:documentType
 * @tag Documents
 * @summary Get documents for a driver by type
 * @description Retrieves documents of a specific type associated with a driver.
 * @operationId getDocumentsForDriverByType
 * @pathParam {string} driver_id - The ID of the driver
 * @pathParam {string} document_type - The type of the documents
 * @response 200 - Successful operation, returns documents
 * @responseContent {DocumentListResponse} 200.application/json
 * @response 400 - Error retrieving documents
 * @prisma_model documents
 */
export async function getDocumentsForDriverByDocumentType(
	req: ValidatedRequest<never, GetDocumentsForDriverByTypeParams>,
	res: Response
): Promise<void> {
	try {
		const { driver_id, document_type } = req.params;
		const documents = await DocumentDao.getDocumentsForDriverByDocumentType(driver_id, document_type);
		res.status(200).json(documents);
	} catch (error: any) {
		console.error('Error getting documents for driver by type:', error);
		res.status(400).json({ error: 'Error retrieving documents', detail: error?.message });
	}
}

/**
 * GET /documents/vehicles/:vehicleId/documents/type/:documentType
 * @tag Documents
 * @summary Get documents for a vehicle by type
 * @description Retrieves documents of a specific type associated with a vehicle.
 * @operationId getDocumentsForVehicleByType
 * @pathParam {string} vehicle_id - The ID of the vehicle
 * @pathParam {string} document_type - The type of the documents
 * @response 200 - Successful operation, returns documents
 * @responseContent {DocumentListResponse} 200.application/json
 * @response 400 - Error retrieving documents
 * @prisma_model documents
 */
export async function getDocumentsForVehicleByDocumentType(
	req: ValidatedRequest<never, GetDocumentsForVehicleByTypeParams>,
	res: Response
): Promise<void> {
	try {
		const { vehicle_id, document_type } = req.params;
		const documents = await DocumentDao.getDocumentsForVehicleByDocumentType(vehicle_id, document_type);
		res.status(200).json(documents);
	} catch (error: any) {
		console.error('Error getting documents for vehicle by type:', error);
		res.status(400).json({ error: 'Error retrieving documents', detail: error?.message });
	}
}

/**
 * POST /documents/create/business/:business_id
 * @tag Documents
 * @summary Create a document for a business
 * @description Creates a new document and links it to a specific business.
 * @operationId createBusinessDocument
 * @pathParam {string} business_id - The ID of the business
 * @bodyContent {CreateDocumentBody} application/json
 * @bodyRequired
 * @response 201 - Document created and linked successfully
 * @responseContent {DocumentResponse} 201.application/json
 * @response 400 - Error creating or linking the document
 * @prisma_model documents
 * @prisma_model files
 */
export async function createBusinessDocument(
	req: ValidatedRequest<CreateDocumentBody, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { documentData, files } = req.body;
		const businessId = req.params.business_id;
		const document = await DocumentDao.createDocument(documentData, files);
		if (!document) {
			res.status(400).json({ error: 'Error creating the document' });
			return;
		}
		await DocumentDao.linkDocumentToBusiness(document.document_id, businessId);
		res.status(201).json(document);
	} catch (error: any) {
		console.error('Error creating or linking the document:', error);
		res.status(400).json({ error: 'Error creating or linking the document', detail: error?.message });
	}
}

/**
 * POST /documents/create/driver/:driver_id
 * @tag Documents
 * @summary Create a document for a driver
 * @description Creates a new document and links it to a specific driver.
 * @operationId createDriverDocument
 * @pathParam {string} driver_id - The ID of the driver
 * @bodyContent {CreateDocumentBody} application/json
 * @bodyRequired
 * @response 201 - Document created and linked successfully
 * @responseContent {DocumentResponse} 201.application/json
 * @response 400 - Error creating or linking the document
 * @prisma_model documents
 * @prisma_model files
 */
export async function createDriverDocument(
	req: ValidatedRequest<CreateDocumentBody, { driver_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { documentData, files } = req.body;
		const driverId = req.params.driver_id;
		const document = await DocumentDao.createDocument(documentData, files);
		if (!document) {
			res.status(400).json({ error: 'Error creating the document' });
			return;
		}
		await DocumentDao.linkDocumentToDriver(document.document_id, driverId);
		res.status(201).json(document);
	} catch (error: any) {
		console.error('Error creating or linking the document:', error);
		res.status(400).json({ error: 'Error creating or linking the document', detail: error?.message });
	}
}

/**
 * POST /documents/create/vehicle/:vehicle_id
 * @tag Documents
 * @summary Create a document for a vehicle
 * @description Creates a new document and links it to a specific vehicle.
 * @operationId createVehicleDocument
 * @pathParam {string} vehicle_id - The ID of the vehicle
 * @bodyContent {CreateDocumentBody} application/json
 * @bodyRequired
 * @response 201 - Document created and linked successfully
 * @responseContent {DocumentResponse} 201.application/json
 * @response 400 - Error creating or linking the document
 * @prisma_model documents
 * @prisma_model files
 */
export async function createVehicleDocument(
	req: ValidatedRequest<CreateDocumentBody, { vehicle_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { documentData, files } = req.body;
		const vehicleId = req.params.vehicle_id;
		const document = await DocumentDao.createDocument(documentData, files);
		if (!document) {
			res.status(400).json({ error: 'Error creating the document' });
			return;
		}
		await DocumentDao.linkDocumentToVehicle(document.document_id, vehicleId);
		res.status(201).json(document);
	} catch (error: any) {
		console.error('Error creating document for vehicle:', error);
		res.status(400).json({
			error: 'Error creating vehicle document or linking the document',
			detail: error?.message,
		});
	}
}

/**
 * PATCH /documents/expirationDate
 * @tag Documents
 * @summary Update document's expiration date
 * @description Updates the expiration date of a specific document.
 * @operationId updateDocumentExpirationDate
 * @pathParam {string} document_id - The ID of the document to update
 * @bodyContent {UpdateDocumentExpirationInput} application/json
 * @bodyRequired
 * @response 200 - Document expiration date updated successfully
 * @responseContent {DocumentResponse} 200.application/json
 * @response 400 - Error updating document's expiration date
 * @prisma_model documents
 */
export async function updateDocumentExpirationDate(
	req: ValidatedRequest<UpdateDocumentExpiration>,
	res: Response
): Promise<void> {
	try {
		const { document_id, expirationDate } = req.body;
		const updatedDocument = await DocumentDao.updateDocumentExpirationDate(document_id, expirationDate);
		res.status(200).json(updatedDocument);
	} catch (error: any) {
		console.error("Error updating document's expiration date:", error);
		res.status(400).json({ error: "Error updating document's expiration date", detail: error?.message });
	}
}

/**
 * PATCH /documents/issueDate
 * @tag Documents
 * @summary Update document's issue date
 * @description Updates the issue date of a specific document.
 * @operationId updateDocumentIssueDate
 * @pathParam {string} document_id - The ID of the document to update
 * @bodyContent {UpdateDocumentIssueInput} application/json
 * @bodyRequired
 * @response 200 - Document issue date updated successfully
 * @responseContent {DocumentResponse} 200.application/json
 * @response 400 - Error updating document's issue date
 * @prisma_model documents
 */
export async function updateDocumentIssueDate(
	req: ValidatedRequest<UpdateDocumentIssue>,
	res: Response
): Promise<void> {
	try {
		const { document_id, issueDate } = req.body;
		const updatedDocument = await DocumentDao.updateDocumentIssueDate(document_id, issueDate);
		res.status(200).json(updatedDocument);
	} catch (error: any) {
		console.error("Error updating document's issue date:", error);
		res.status(400).json({ error: "Error updating document's issue date", detail: error?.message });
	}
}

/**
 * PATCH /documents/files
 * @tag Documents
 * @summary Update document's files
 * @description Updates the files associated with a specific document.
 * @operationId updateDocumentFiles
 * @pathParam {string} document_id - The ID of the document to update
 * @bodyContent {UpdateDocumentFilesInput} application/json
 * @bodyRequired
 * @response 200 - Document files updated successfully
 * @responseContent {DocumentResponse} 200.application/json
 * @response 400 - Error updating document's files
 * @prisma_model documents
 * @prisma_model files
 */
export async function updateDocumentFiles(req: ValidatedRequest<UpdateDocumentFiles>, res: Response): Promise<void> {
	try {
		const { document_id, files } = req.body;
		const updatedDocument = await DocumentDao.updateDocumentFiles(document_id, files);
		res.status(200).json(updatedDocument);
	} catch (error: any) {
		console.error("Error updating document's files:", error);
		res.status(400).json({ error: "Error updating document's files", detail: error?.message });
	}
}

/**
 * PATCH /documents/additionalInfo
 * @tag Documents
 * @summary Update document's additional info
 * @description Updates the additional information of a specific document.
 * @operationId updateDocumentAdditionalInfo
 * @pathParam {string} document_id - The ID of the document to update
 * @bodyContent {UpdateDocumentAdditionalInfoInput} application/json
 * @bodyRequired
 * @response 200 - Document additional info updated successfully
 * @responseContent {DocumentResponse} 200.application/json
 * @response 400 - Error updating document's additional info
 * @prisma_model documents
 */
export async function updateDocumentAdditionalInfo(
	req: ValidatedRequest<UpdateDocumentAdditionalInfo>,
	res: Response
): Promise<void> {
	try {
		const { document_id, jsonData } = req.body;
		const updatedDocument = await DocumentDao.updateDocumentAdditionalInfo(document_id, jsonData);
		res.status(200).json(updatedDocument);
	} catch (error: any) {
		console.error("Error updating document's additional info:", error);
		res.status(400).json({ error: "Error updating document's additional info", detail: error?.message });
	}
}

export default {
	listDocuments,
	getDocumentById,
	getDocumentsForBusiness,
	getDocumentsForDriver,
	getDocumentsForVehicle,
	getDocumentsByDocumentType,
	getDocumentsForBusinessByDocumentType,
	getDocumentsForDriverByDocumentType,
	getDocumentsForVehicleByDocumentType,
	createBusinessDocument,
	createDriverDocument,
	createVehicleDocument,
	updateDocumentExpirationDate,
	updateDocumentIssueDate,
	updateDocumentFiles,
	updateDocumentAdditionalInfo,
};
