import prisma from '../prisma/prisma.js';

// Using any type for document responses since the schema is complex and spread across multiple DTOs
type DocumentResponse = any;
type DocumentListResponse = DocumentResponse[];

/**
 * Get all documents with their files.
 *
 * @returns {Promise<DocumentListResponse>} Array of documents.
 */
const getDocuments = async (): Promise<DocumentListResponse> => {
	try {
		return await prisma.documents.findMany({
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.findUnique({
			where: { document_id: documentId },
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.findMany({
			where: { business_id: businessId },
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.findMany({
			where: { user_id: userId },
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.findMany({
			where: { delivery_driver_id: deliveryPersonId },
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.findMany({
			where: { driver_id: driverId },
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.findMany({
			where: { vehicle_id: vehicleId },
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.findMany({
			where: { document_type: documentType },
			include: {
				files: true,
			},
		});
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
const getDocumentsForBusinessByDocumentType = async (businessId: string, documentType: string): Promise<DocumentListResponse> => {
	try {
		return await prisma.documents.findMany({
			where: {
				business_id: businessId,
				document_type: documentType,
			},
			include: {
				files: true,
			},
		});
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
const getDocumentsForUserByDocumentType = async (userId: string, documentType: string): Promise<DocumentListResponse> => {
	try {
		return await prisma.documents.findMany({
			where: {
				user_id: userId,
				document_type: documentType,
			},
			include: {
				files: true,
			},
		});
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
const getDocumentsForDriverByDocumentType = async (driverId: string, documentType: string): Promise<DocumentListResponse> => {
	try {
		return await prisma.documents.findMany({
			where: {
				driver_id: driverId,
				document_type: documentType,
			},
			include: {
				files: true,
			},
		});
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
const getDocumentsForDeliveryPersonByDocumentType = async (deliveryPersonId: string, documentType: string): Promise<DocumentListResponse> => {
	try {
		return await prisma.documents.findMany({
			where: {
				delivery_driver_id: deliveryPersonId,
				document_type: documentType,
			},
			include: {
				files: true,
			},
		});
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
const getDocumentsForVehicleByDocumentType = async (vehicleId: string, documentType: string): Promise<DocumentListResponse> => {
	try {
		return await prisma.documents.findMany({
			where: {
				vehicle_id: vehicleId,
				document_type: documentType,
			},
			include: {
				files: true,
			},
		});
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
const findDocumentByTypeAndDriverId = async (documentType: string, driverId: string): Promise<DocumentResponse | null> => {
	try {
		return await prisma.documents.findFirst({
			where: {
				document_type: documentType,
				driver_id: driverId,
			},
			include: {
				files: true,
			},
		});
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
const createDocument = async (documentData: any, filesData: any[] = []): Promise<DocumentResponse> => {
	try {
		const document = await prisma.documents.create({
			data: {
				...documentData,
				files: {
					create: filesData,
				},
			},
			include: {
				files: true,
			},
		});
		return document;
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
const createUserDocument = async (userId: string, documentData: any): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.create({
			data: {
				...documentData,
				user_id: userId,
			},
			include: {
				files: true,
			},
		});
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
const createBusinessDocument = async (businessId: string, documentData: any): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.create({
			data: {
				...documentData,
				business_id: businessId,
			},
			include: {
				files: true,
			},
		});
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
const createDriverDocument = async (driverId: string, documentData: any): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.create({
			data: {
				...documentData,
				driver_id: driverId,
			},
			include: {
				files: true,
			},
		});
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
const createVehicleDocument = async (vehicleId: string, documentData: any): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.create({
			data: {
				...documentData,
				vehicle_id: vehicleId,
			},
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error creating vehicle document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create vehicle document');
	}
};

/**
 * Create a delivery person document.
 *
 * @param {string} deliveryPersonId - Delivery person ID.
 * @param {any} documentData - Document data.
 * @returns {Promise<DocumentResponse>} Created document.
 */
const createDeliveryPersonDocument = async (deliveryPersonId: string, documentData: any): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.create({
			data: {
				...documentData,
				delivery_driver_id: deliveryPersonId,
			},
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error creating delivery person document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create delivery person document');
	}
};

/**
 * Update document expiration date.
 *
 * @param {string} documentId - Document ID.
 * @param {string | Date} expirationDate - New expiration date.
 * @returns {Promise<DocumentResponse>} Updated document.
 */
const updateDocumentExpirationDate = async (documentId: string, expirationDate: string | Date): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { expiration_date: expirationDate },
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { issue_date: issueDate },
			include: {
				files: true,
			},
		});
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
const updateDocumentFiles = async (documentId: string, filesData: any[]): Promise<DocumentResponse> => {
	try {
		// Delete existing files and create new ones
		await prisma.files.deleteMany({
			where: { document_id: documentId },
		});

		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				files: {
					create: filesData,
				},
			},
			include: {
				files: true,
			},
		});
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
const updateDocumentAdditionalInfo = async (documentId: string, jsonData: any): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { additional_info: jsonData },
			include: {
				files: true,
			},
		});
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
const linkDocumentToVehicle = async (documentId: string, vehicleId: string): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { vehicle_id: vehicleId },
			include: {
				files: true,
			},
		});
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
const linkDocumentToDriver = async (documentId: string, driverId: string): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { driver_id: driverId },
			include: {
				files: true,
			},
		});
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
const linkDocumentToBusiness = async (documentId: string, businessId: string): Promise<DocumentResponse> => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { business_id: businessId },
			include: {
				files: true,
			},
		});
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
		return await prisma.documents.delete({
			where: { document_id: documentId },
		});
	} catch (error) {
		console.error('Error deleting document:', error);
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
export { findDocumentByTypeAndDriverId };
export { createDocument };
export { createUserDocument };
export { createBusinessDocument };
export { createDriverDocument };
export { createVehicleDocument };
export { createDeliveryPersonDocument };
export { updateDocumentExpirationDate };
export { updateDocumentIssueDate };
export { updateDocumentFiles };
export { updateDocumentAdditionalInfo };
export { linkDocumentToTransaction };
export { linkDocumentToVehicle };
export { linkDocumentToDriver };
export { linkDocumentToBusiness };
export { deleteDocument };

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
	findDocumentByTypeAndDriverId,
	createDocument,
	createUserDocument,
	createBusinessDocument,
	createDriverDocument,
	createVehicleDocument,
	createDeliveryPersonDocument,
	updateDocumentExpirationDate,
	updateDocumentIssueDate,
	updateDocumentFiles,
	updateDocumentAdditionalInfo,
	linkDocumentToTransaction,
	linkDocumentToVehicle,
	linkDocumentToDriver,
	linkDocumentToBusiness,
	deleteDocument,
};