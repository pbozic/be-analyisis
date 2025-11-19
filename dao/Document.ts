import { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { DocumentResponse } from '../schemas/dto/Document/index.js';
import documentsDefaultInclude from '../prisma/includes/document.js';
import type { DocumentWithIncludesPrisma } from '../prisma/includes/document.js';
import { toDocumentList, toDocumentResponse } from '../schemas/dto/Document/index.js';

type DocumentListResponse = DocumentResponse[];

/**
 * Get all documents with their files.
 *
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocuments = async (): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({ include: documentsDefaultInclude });
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting all documents:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents');
	}
};

/**
 * Get a document by ID with files included.
 *
 * @param {string} documentId - Document ID.
 * @returns {Promise<DocumentResponse | null>} Document or null.
 */
const getDocumentById = async (documentId: string): Promise<DocumentResponse | null> => {
	try {
		const row = await prisma.documents.findUnique({
			where: { document_id: documentId },
			include: documentsDefaultInclude,
		});
		if (!row) return null;
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting document by ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get document by ID');
	}
};

/**
 * Get documents linked to a business.
 *
 * @param {string} businessId - Business ID.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForBusiness = async (businessId: string): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { business_id: businessId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for business');
	}
};

/**
 * Get documents linked to a user.
 *
 * @param {string} userId - User ID.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForUser = async (userId: string): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({ where: { user_id: userId }, include: documentsDefaultInclude });
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for user:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for user');
	}
};

/**
 * Get documents linked to a delivery person.
 *
 * @param {string} deliveryPersonId - Delivery person ID.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForDeliveryPerson = async (deliveryPersonId: string): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { delivery_driver_id: deliveryPersonId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for delivery person:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for delivery person');
	}
};

/**
 * Get documents linked to a driver.
 *
 * @param {string} driverId - Driver ID.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForDriver = async (driverId: string): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { driver_id: driverId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for driver:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for driver');
	}
};

/**
 * Get documents linked to a vehicle.
 *
 * @param {string} vehicleId - Vehicle ID.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForVehicle = async (vehicleId: string): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { vehicle_id: vehicleId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for vehicle:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for vehicle');
	}
};

/**
 * Get documents by document type.
 *
 * @param {string} documentType - Document type.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsByDocumentType = async (documentType: string): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { document_type: documentType },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents by type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents by type');
	}
};

/**
 * Get documents for a business by document type.
 *
 * @param {string} businessId - Business ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForBusinessByDocumentType = async (
	businessId: string,
	documentType: string
): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { business_id: businessId, document_type: documentType },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for business by type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for business by type');
	}
};

/**
 * Get documents for a user by document type.
 *
 * @param {string} userId - User ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForUserByDocumentType = async (
	userId: string,
	documentType: string
): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { user_id: userId, document_type: documentType },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for user by type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for user by type');
	}
};

/**
 * Get documents for a driver by document type.
 *
 * @param {string} driverId - Driver ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForDriverByDocumentType = async (
	driverId: string,
	documentType: string
): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { driver_id: driverId, document_type: documentType },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for driver by type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for driver by type');
	}
};

/**
 * Get documents for a delivery person by document type.
 *
 * @param {string} deliveryPersonId - Delivery person ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForDeliveryPersonByDocumentType = async (
	deliveryPersonId: string,
	documentType: string
): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { delivery_driver_id: deliveryPersonId, document_type: documentType },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for delivery person by type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for delivery person by type');
	}
};

/**
 * Get documents for a vehicle by document type.
 *
 * @param {string} vehicleId - Vehicle ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocumentsForVehicleByDocumentType = async (
	vehicleId: string,
	documentType: string
): Promise<DocumentListResponse> => {
	try {
		const rows = await prisma.documents.findMany({
			where: { vehicle_id: vehicleId, document_type: documentType },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentList(rows as DocumentWithIncludesPrisma[]);
		} catch (e: any) {
			throw new Error('Failed to map documents to DTOs: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting documents for vehicle by type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get documents for vehicle by type');
	}
};

/**
 * Find a document by type and driver ID.
 *
 * @param {string} documentType - Document type.
 * @param {string} driverId - Driver ID.
 * @returns {Promise<DocumentResponse | null>} Document or null.
 */
const findDocumentByTypeAndDriverId = async (
	documentType: string,
	driverId: string
): Promise<DocumentResponse | null> => {
	try {
		const row = await prisma.documents.findFirst({
			where: { document_type: documentType, driver_id: driverId },
			include: documentsDefaultInclude,
		});
		if (!row) return null;
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error finding document by type and driver ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to find document by type and driver ID');
	}
};

/**
 * Create a new document with optional files.
 *
 * @param {any} documentData - Document data.
 * @param {any[]} filesData - Files data (optional).
 * @returns {Promise<DocumentResponse>} Created document.
 */
const createDocument = async (
	documentData: Record<string, unknown>,
	filesData: Array<Record<string, unknown>> = [],
	tx: any = prisma
): Promise<DocumentResponse> => {
	try {
		const document = await tx.documents.create({
			data: { ...documentData, files: { create: filesData as any } },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(document as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map created document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error creating document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create document');
	}
};

/**
 * Create a user document.
 *
 * @param {string} userId - User ID.
 * @param {any} documentData - Document data.
 * @returns {Promise<DocumentResponse>} Created document.
 */
const createUserDocument = async (userId: string, documentData: Record<string, unknown>): Promise<DocumentResponse> => {
	try {
		const row = await prisma.documents.create({
			data: { ...documentData, user_id: userId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map created document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error creating user document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create user document');
	}
};

/**
 * Create a business document.
 *
 * @param {string} businessId - Business ID.
 * @param {any} documentData - Document data.
 * @returns {Promise<DocumentResponse>} Created document.
 */
const createBusinessDocument = async (
	businessId: string,
	documentData: Record<string, unknown>,
	tx: any = prisma
): Promise<DocumentResponse> => {
	try {
		const row = await tx.documents.create({
			data: { ...documentData, business_id: businessId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map created document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error creating business document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create business document');
	}
};

/**
 * Create a driver document.
 *
 * @param {string} driverId - Driver ID.
 * @param {any} documentData - Document data.
 * @returns {Promise<DocumentResponse>} Created document.
 */
const createDriverDocument = async (
	driverId: string,
	documentData: Record<string, unknown>,
	tx: any = prisma
): Promise<DocumentResponse> => {
	try {
		const row = await tx.documents.create({
			data: { ...documentData, driver_id: driverId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map created document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error creating driver document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create driver document');
	}
};

/**
 * Create a vehicle document.
 *
 * @param {string} vehicleId - Vehicle ID.
 * @param {any} documentData - Document data.
 * @returns {Promise<DocumentResponse>} Created document.
 */
const createVehicleDocument = async (
	vehicleId: string,
	documentData: Record<string, unknown>,
	tx: any = prisma
): Promise<DocumentResponse> => {
	try {
		const row = await tx.documents.create({
			data: { ...documentData, vehicle_id: vehicleId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map created document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error creating vehicle document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create vehicle document');
	}
};

/**
 * Update document expiration date.
 *
 * @param {string} documentId - Document ID.
 * @param {string | Date} expirationDate - New expiration date.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
const updateDocumentExpirationDate = async (
	documentId: string,
	expirationDate: string | Date
): Promise<DocumentResponse> => {
	try {
		const row = await prisma.documents.update({
			where: { document_id: documentId },
			data: { expiration_date: expirationDate },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map updated document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error updating document expiration date:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update document expiration date');
	}
};

/**
 * Update document issue date.
 *
 * @param {string} documentId - Document ID.
 * @param {string | Date} issueDate - New issue date.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
const updateDocumentIssueDate = async (documentId: string, issueDate: string | Date): Promise<DocumentResponse> => {
	try {
		const row = await prisma.documents.update({
			where: { document_id: documentId },
			data: { issue_date: issueDate },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map updated document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error updating document issue date:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update document issue date');
	}
};

/**
 * Update document files.
 *
 * @param {string} documentId - Document ID.
 * @param {any[]} filesData - New files data.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
const updateDocumentFiles = async (
	documentId: string,
	filesData: Array<Record<string, unknown>>
): Promise<DocumentResponse> => {
	try {
		// Delete existing files and create new ones
		await prisma.files.deleteMany({ where: { document_id: documentId } });

		const row = await prisma.documents.update({
			where: { document_id: documentId },
			data: { files: { create: filesData as any } },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map updated document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error updating document files:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update document files');
	}
};

/**
 * Update document additional info.
 *
 * @param {string} documentId - Document ID.
 * @param {any} jsonData - Additional info JSON data.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
const updateDocumentAdditionalInfo = async (
	documentId: string,
	jsonData: Prisma.InputJsonValue
): Promise<DocumentResponse> => {
	try {
		const row = await prisma.documents.update({
			where: { document_id: documentId },
			data: { additional_info: jsonData },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map updated document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error updating document additional info:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update document additional info');
	}
};

/**
 * Link a document to a transaction.
 *
 * @param {string} documentId - Document ID.
 * @param {string} transactionId - Transaction ID.
 * @returns {Promise<any>} Link result.
 */
const linkDocumentToTransaction = async (documentId: string, transactionId: string): Promise<any> => {
	try {
		return await prisma.document_transactions.create({
			data: {
				document_id: documentId,
				transaction_id: transactionId,
			},
		});
	} catch (error) {
		console.error('Error linking document to transaction:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to link document to transaction');
	}
};

/**
 * Link a document to a vehicle.
 *
 * @param {string} documentId - Document ID.
 * @param {string} vehicleId - Vehicle ID.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
const linkDocumentToVehicle = async (
	documentId: string,
	vehicleId: string,
	tx: any = prisma
): Promise<DocumentResponse> => {
	try {
		const row = await tx.documents.update({
			where: { document_id: documentId },
			data: { vehicle_id: vehicleId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map updated document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error linking document to vehicle:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to link document to vehicle');
	}
};

/**
 * Link a document to a driver.
 *
 * @param {string} documentId - Document ID.
 * @param {string} driverId - Driver ID.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
const linkDocumentToDriver = async (
	documentId: string,
	driverId: string,
	tx: any = prisma
): Promise<DocumentResponse> => {
	try {
		const row = await tx.documents.update({
			where: { document_id: documentId },
			data: { driver_id: driverId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map updated document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error linking document to driver:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to link document to driver');
	}
};

/**
 * Link a document to a business.
 *
 * @param {string} documentId - Document ID.
 * @param {string} businessId - Business ID.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
const linkDocumentToBusiness = async (
	documentId: string,
	businessId: string,
	tx: any = prisma
): Promise<DocumentResponse> => {
	try {
		const row = await tx.documents.update({
			where: { document_id: documentId },
			data: { business_id: businessId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map updated document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error linking document to business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to link document to business');
	}
};

/**
 * Delete a document.
 *
 * @param {string} documentId - Document ID.
 * @returns {Promise<DocumentResponse>} Deleted document.
 */
const deleteDocument = async (documentId: string): Promise<DocumentResponse> => {
	try {
		const row = await prisma.documents.delete({
			where: { document_id: documentId },
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map deleted document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error deleting document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to delete document');
	}
};

/**
 * Delete all documents and files linked via a specific field and id.
 *
 * @param {string} field - Field name on documents (e.g., 'user_id').
 * @param {string} id - The identifier value to match.
 * @returns {Promise<DocumentResponse>} Resolves when deletion completes.
 */
const deleteDocumentsAndFiles = async (field: string, id: string): Promise<DocumentResponse> => {
	try {
		type DocWithFiles = { document_id: string; files?: { file_id: string }[] };

		const documents: DocWithFiles[] = await prisma.documents.findMany({
			where: { [field]: id },
			select: {
				document_id: true,
				files: {
					select: { file_id: true },
				},
			},
		});
		const documentIds = documents.map((d) => d.document_id);
		await prisma.files.deleteMany({
			where: {
				document_id: { in: documentIds }, // array of ids
			},
		});

		const row = await prisma.documents.deleteMany({
			where: {
				[field]: id,
			},
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map deleted document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error: unknown) {
		console.error(`Error deleting documents and files for ${field}:`, id, error);
		throw new Error(error instanceof Error ? error.message : 'Failed to delete document');
	}
};

/**
 * Get the most recently created document of a given type for a business.
 *
 * @param {string} type - Document type.
 * @param {string} business_id - Business ID.
 * @returns {Promise<DocumentResponse|null>} Latest matching document or null.
 */
async function getLastDocumentByTypeAndBusinessId(type: string, business_id: string): Promise<DocumentResponse> {
	try {
		const row = await prisma.documents.findFirst({
			where: {
				document_type: type,
				business_id: business_id,
			},
			orderBy: {
				created_at: 'desc',
			},
			include: documentsDefaultInclude,
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error) {
		console.error('Error getting last document by type and business ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get last document by type and business ID');
	}
}

/**
 * Find a document by associated file ID.
 *
 * @param {string} fileId - File ID.
 * @returns {Promise<DocumentResponse | null>} Document or null.
 */
export async function findDocumentByFileId(fileId: string): Promise<DocumentResponse | null> {
	try {
		const file = await prisma.files.findUnique({
			where: { file_id: fileId },
			include: { document: { include: documentsDefaultInclude } },
		});
		if (!file || !file.document) return null;

		return toDocumentResponse(file.document as DocumentWithIncludesPrisma);
	} catch (error) {
		console.error('Error finding document by file ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to find document by file ID');
	}
}
/**
 * Update a document by its document ID.
 *
 * @param {string} documentId - Document ID.
 * @param {Record<string, unknown>} updateData - Data to update.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
export async function updateDocumentByDocumentId(
	documentId: string,
	updateData: Record<string, unknown>
): Promise<DocumentResponse> {
	try {
		const row = await prisma.documents.update({
			where: { document_id: documentId },
			data: updateData,
			include: documentsDefaultInclude,
		});

		return toDocumentResponse(row as DocumentWithIncludesPrisma);
	} catch (error) {
		console.error('Error updating document by document ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update document by document ID');
	}
}

/**
 * Delete all documents and files by exact document_id and document_type.
 *
 * @param {string} documentType - Document type.
 * @param {string} documentId - Document ID.
 * @returns {Promise<DocumentResponse>} Resolves when deletion completes.
 */
const deleteDocumentsAndFilesByDocumentId = async (
	documentType: string,
	documentId: string
): Promise<DocumentResponse> => {
	try {
		type DocWithFiles = { document_id: string; files?: { file_id: string }[] };

		const documents: DocWithFiles[] = await prisma.documents.findMany({
			where: {
				document_id: documentId,
				document_type: documentType,
			},
			select: {
				document_id: true,
				files: {
					select: { file_id: true },
				},
			},
		});

		const documentIds = documents.map((d) => d.document_id);
		if (documentIds.length > 0) {
			await prisma.files.deleteMany({
				where: {
					document_id: { in: documentIds },
				},
			});
		}

		const row = await prisma.documents.deleteMany({
			where: {
				document_id: documentId,
				document_type: documentType,
			},
		});
		try {
			return toDocumentResponse(row as DocumentWithIncludesPrisma);
		} catch (e: any) {
			throw new Error('Failed to map deleted document to DTO: ' + (e?.message ?? String(e)));
		}
	} catch (error: unknown) {
		console.error(
			`Error deleting documents and files for documentType: ${documentType} and documentId: ${documentId}`,
			error
		);
		throw new Error(error instanceof Error ? error.message : 'Failed to delete document');
	}
};

export { getDocuments };
export { getDocumentById };
export { getDocumentsForBusiness };
export { getDocumentsForUser };
export { getDocumentsForDeliveryPerson };
export { getDocumentsForDriver };
export { getDocumentsForVehicle };
export { getDocumentsByDocumentType };
export { getDocumentsForBusinessByDocumentType };
export { getDocumentsForUserByDocumentType };
export { getDocumentsForDriverByDocumentType };
export { getDocumentsForDeliveryPersonByDocumentType };
export { getDocumentsForVehicleByDocumentType };
export { getLastDocumentByTypeAndBusinessId };
export { findDocumentByTypeAndDriverId };
export { createDocument };
export { createUserDocument };
export { createBusinessDocument };
export { createDriverDocument };
export { createVehicleDocument };
export { updateDocumentExpirationDate };
export { updateDocumentIssueDate };
export { updateDocumentFiles };
export { updateDocumentAdditionalInfo };
export { linkDocumentToTransaction };
export { linkDocumentToVehicle };
export { linkDocumentToDriver };
export { linkDocumentToBusiness };
export { deleteDocument };
export { deleteDocumentsAndFiles };
export { deleteDocumentsAndFilesByDocumentId };

export default {
	getDocuments,
	getDocumentById,
	getDocumentsForBusiness,
	getDocumentsForUser,
	getDocumentsForDeliveryPerson,
	getDocumentsForDriver,
	getDocumentsForVehicle,
	getDocumentsByDocumentType,
	getDocumentsForBusinessByDocumentType,
	getDocumentsForUserByDocumentType,
	getDocumentsForDriverByDocumentType,
	getDocumentsForDeliveryPersonByDocumentType,
	getDocumentsForVehicleByDocumentType,
	getLastDocumentByTypeAndBusinessId,
	findDocumentByTypeAndDriverId,
	createDocument,
	createUserDocument,
	createBusinessDocument,
	createDriverDocument,
	createVehicleDocument,
	updateDocumentExpirationDate,
	updateDocumentIssueDate,
	updateDocumentFiles,
	updateDocumentAdditionalInfo,
	linkDocumentToTransaction,
	linkDocumentToVehicle,
	linkDocumentToDriver,
	linkDocumentToBusiness,
	deleteDocument,
	deleteDocumentsAndFiles,
	deleteDocumentsAndFilesByDocumentId,
};
