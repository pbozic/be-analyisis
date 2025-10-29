import prisma from '../prisma/prisma.js';
/**
 * Get all documents with their files.
 *
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocuments = async () => {
	try {
		return await prisma.documents.findMany({
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting all documents:', error);
		return new Error(error);
	}
};
/**
 * Get a document by ID with files included.
 *
 * @param {string} documentId - Document ID.
 * @returns {Promise<object|null>} Document or null.
 */
const getDocumentById = async (documentId) => {
	try {
		return await prisma.documents.findUnique({
			where: { document_id: documentId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting document by ID:', error);
		return new Error(error);
	}
};
/**
 * Get documents linked to a business.
 *
 * @param {string} businessId - Business ID.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForBusiness = async (businessId) => {
	try {
		return await prisma.documents.findMany({
			where: { business_id: businessId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting documents for business:', error);
		return new Error(error);
	}
};
/**
 * Get documents linked to a delivery person.
 *
 * @param {string} deliveryPersonId - Delivery person ID.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForDeliveryPerson = async (deliveryPersonId) => {
	try {
		return await prisma.documents.findMany({
			where: { delivery_person_id: deliveryPersonId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting documents for delivery person:', error);
		return new Error(error);
	}
};
/**
 * Get documents linked to a driver.
 *
 * @param {string} driverId - Driver ID.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForDriver = async (driverId) => {
	try {
		return await prisma.documents.findMany({
			where: { driver_id: driverId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting documents for driver:', error);
		return new Error(error);
	}
};
/**
 * Get documents linked to a user.
 *
 * @param {string} userId - User ID.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForUser = async (userId) => {
	try {
		return await prisma.documents.findMany({
			where: { user_id: userId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting documents for user:', error);
		return new Error(error);
	}
};
/**
 * Get documents linked to a vehicle.
 *
 * @param {string} vehicleId - Vehicle ID.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForVehicle = async (vehicleId) => {
	try {
		return await prisma.documents.findMany({
			where: { vehicle_id: vehicleId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting documents for vehicle:', error);
		return new Error(error);
	}
};
/**
 * Get documents by document type.
 *
 * @param {string} documentType - Document type.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsByType = async (documentType) => {
	try {
		return await prisma.documents.findMany({
			where: { document_type: documentType },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting documents by type:', error);
		return new Error(error);
	}
};
/**
 * Get documents for a user filtered by type.
 *
 * @param {string} userId - User ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForUserByType = async (userId, documentType) => {
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
		return new Error(error);
	}
};
/**
 * Get documents for a business filtered by type.
 *
 * @param {string} businessId - Business ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForBusinessByType = async (businessId, documentType) => {
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
		return new Error(error);
	}
};
/**
 * Get documents for a driver filtered by type.
 *
 * @param {string} driverId - Driver ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForDriverByType = async (driverId, documentType) => {
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
		return new Error(error);
	}
};
/**
 * Get documents for a delivery person filtered by type.
 *
 * @param {string} deliveryPersonId - Delivery person ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForDeliveryPersonByType = async (deliveryPersonId, documentType) => {
	try {
		return await prisma.documents.findMany({
			where: {
				delivery_person_id: deliveryPersonId,
				document_type: documentType,
			},
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error('Error getting documents for delivery person by type:', error);
		return new Error(error);
	}
};
/**
 * Get documents for a vehicle filtered by type.
 *
 * @param {string} vehicleId - Vehicle ID.
 * @param {string} documentType - Document type.
 * @returns {Promise<object[]>} Array of documents.
 */
const getDocumentsForVehicleByType = async (vehicleId, documentType) => {
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
		return new Error(error);
	}
};
/**
 * Find a single document by type and delivery driver ID.
 *
 * @param {string} documentType - Document type.
 * @param {string} deliveryDriverId - Delivery driver ID.
 * @returns {Promise<object|null>} Document or null.
 */
const findDocumentByTypeAndDeliveryDriverId = async (documentType, deliveryDriverId) => {
	try {
		return await prisma.documents.findFirst({
			where: {
				AND: [{ document_type: documentType }, { delivery_driver_id: deliveryDriverId }],
			},
		});
	} catch (error) {
		console.error('Error finding document by type and delivery driver ID:', error);
		throw new Error('Unable to find document');
	}
};
/**
 * Find a single document by type and driver ID.
 *
 * @param {string} documentType - Document type.
 * @param {string} driverId - Driver ID.
 * @returns {Promise<object|null>} Document or null.
 */
const findDocumentByTypeAndDriverId = async (documentType, driverId) => {
	try {
		return await prisma.documents.findFirst({
			where: {
				AND: [{ document_type: documentType }, { driver_id: driverId }],
			},
		});
	} catch (error) {
		console.error('Error finding document by type and driver ID:', error);
		throw new Error('Unable to find document');
	}
};
/**
 * Create a document (sets public=true for selected types) with optional files.
 *
 * @param {object} documentData - Document payload.
 * @param {object[]} [filesData=[]] - Files to create for the document.
 * @returns {Promise<object>} Created document with files.
 */
const createDocument = async (documentData, filesData = []) => {
	for (let file of filesData) {
		delete file.data;
		delete file.base64;
		delete file.name;
	}
	const publicDocumentTypes = [
		'PROFILE_PICTURE',
		'LOGO',
		'BANNER',
		'MENU_ITEM_IMAGE',
		'LOST_ITEM',
		'DAILY_MEALS_MENU',
	];
	if (publicDocumentTypes.includes(documentData.document_type)) {
		documentData.public = true;
	}
	try {
		return await prisma.documents.create({
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
	} catch (error) {
		console.error('Error creating document:', error);
		return new Error(error);
	}
};
/**
 * Update a document's expiration_date.
 *
 * @param {string} documentId - Document ID.
 * @param {string|Date} expirationDate - New expiration date.
 * @returns {Promise<object>} Updated document.
 */
const updateDocumentExpirationDate = async (documentId, expirationDate) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				expiration_date: expirationDate,
			},
		});
	} catch (error) {
		console.error("Error updating document's expiration date:", error);
		return new Error(error);
	}
};
/**
 * Update a document's issue_date.
 *
 * @param {string} documentId - Document ID.
 * @param {string|Date} issueDate - Issue date.
 * @returns {Promise<object>} Updated document.
 */
const updateDocumentIssueDate = async (documentId, issueDate) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				issue_date: issueDate,
			},
		});
	} catch (error) {
		console.error("Error updating document's issue date:", error);
		return new Error(error);
	}
};
/**
 * Replace a document's files with new ones.
 *
 * @param {string} documentId - Document ID.
 * @param {object[]} filesData - New files to create.
 * @returns {Promise<object>} Updated document with files.
 */
const updateDocumentFiles = async (documentId, filesData) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				files: {
					deleteMany: [{ document_id: documentId }], // Deletes all files associated with the document
					create: filesData, // Creates new file entries
				},
			},
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error updating document's files:", error);
		return new Error(error);
	}
};
/**
 * Update a document's additional_info JSON field.
 *
 * @param {string} documentId - Document ID.
 * @param {object} jsonData - JSON payload.
 * @returns {Promise<object>} Updated document.
 */
const updateDocumentAdditionalInfo = async (documentId, jsonData) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { additional_info: jsonData },
		});
	} catch (error) {
		console.error("Error updating document's additional info:", error);
		return new Error(error);
	}
};
/**
 * Link a document to a user.
 *
 * @param {string} documentId - Document ID.
 * @param {string} userId - User ID.
 * @returns {Promise<object>} Updated document.
 */
const linkDocumentToUser = async (documentId, userId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				user: {
					connect: {
						user_id: userId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking document to user:', error);
		return new Error(error);
	}
};
/**
 * Link a document to a transaction.
 *
 * @param {string} documentId - Document ID.
 * @param {string} transactionId - Transaction ID.
 * @returns {Promise<object>} Updated document.
 */
const linkDocumentToTransaction = async (documentId, transactionId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				transactions: {
					connect: {
						transaction_id: transactionId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking document to transaction:', error);
		return new Error(error);
	}
};
/**
 * Link a document to a vehicle.
 *
 * @param {string} documentId - Document ID.
 * @param {string} vehicleId - Vehicle ID.
 * @returns {Promise<object>} Updated document.
 */
const linkDocumentToVehicle = async (documentId, vehicleId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				vehicles: {
					connect: {
						vehicle_id: vehicleId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking document to vehicle:', error);
		return new Error(error);
	}
};
/**
 * Link a document to a menu item.
 *
 * @param {string} documentId - Document ID.
 * @param {string} menuItemId - Menu item ID.
 * @returns {Promise<object>} Updated document.
 */
const linkDocumentToMenuItem = async (documentId, menuItemId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				menu_items: {
					connect: {
						menu_item_id: menuItemId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking menu item image to menu item:', error);
		return new Error(error);
	}
};
/**
 * Link a document to a lost item.
 *
 * @param {string} documentId - Document ID.
 * @param {string} lostItemId - Lost item ID.
 * @returns {Promise<object>} Updated document.
 */
const linkDocumentToLostItem = async (documentId, lostItemId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				lost_items: {
					connect: {
						lost_item_id: lostItemId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking lost item document:', error);
		return new Error(error);
	}
};
/**
 * Link a document to a driver.
 *
 * @param {string} documentId - Document ID.
 * @param {string} driverId - Driver ID.
 * @returns {Promise<object>} Updated document.
 */
const linkDocumentToDriver = async (documentId, driverId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				drivers: {
					connect: {
						driver_id: driverId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking document to driver:', error);
		return new Error(error);
	}
};
/**
 * Link a document to a business.
 *
 * @param {string} documentId - Document ID.
 * @param {string} businessId - Business ID.
 * @returns {Promise<object>} Updated document.
 */
const linkDocumentToBusiness = async (documentId, businessId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				business: {
					connect: {
						business_id: businessId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking document to business:', error);
		return new Error(error);
	}
};
/**
 * Link a document to a delivery driver.
 *
 * @param {string} documentId - Document ID.
 * @param {string} deliveryDriverId - Delivery driver ID.
 * @returns {Promise<object>} Updated document.
 */
const linkDocumentToDeliveryDriver = async (documentId, deliveryDriverId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: {
				delivery_driver: {
					connect: {
						delivery_driver_id: deliveryDriverId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error linking document to delivery driver:', error);
		return new Error(error);
	}
};
/**
 * Delete a document and all its files by document ID.
 *
 * @param {string} documentId - Document ID.
 * @returns {Promise<void>} Resolves when deletion completes.
 */
const deleteDocument = async (documentId) => {
	try {
		// Fetch document to get associated files
		const document = await prisma.documents.findUnique({
			where: { document_id: documentId },
			include: { files: true },
		});
		// Ensure document exists
		if (!document) {
			throw new Error(`Document with ID ${documentId} not found`);
		}
		// Await the resolution of document.files
		const files = await prisma.files.findMany({
			where: { document_id: documentId },
		});
		// Delete all files associated with the document
		for (const file of files) {
			await prisma.files.delete({
				where: { file_id: file.file_id },
			});
		}
		// Delete the document itself
		await prisma.documents.delete({
			where: { document_id: documentId },
		});
		console.log(`Document ${documentId} and associated files deleted`);
	} catch (error) {
		console.error('Error deleting document:', error);
		throw new Error(error);
	}
};
/**
 * Delete all documents and files linked via a specific field and id.
 *
 * @param {string} field - Field name on documents (e.g., 'user_id').
 * @param {string} id - The identifier value to match.
 * @returns {Promise<void>} Resolves when deletion completes.
 */
const deleteDocumentsAndFiles = async (field, id) => {
	try {
		// Fetch all documents based on the provided field and id
		const documents = await prisma.documents.findMany({
			where: { [field]: id },
			select: {
				document_id: true,
				files: {
					select: { file_id: true },
				},
			},
		});
		// Delete all files associated with the fetched documents
		for (const document of documents) {
			await prisma.files.deleteMany({
				where: {
					document_id: document.document_id,
				},
			});
		}
		// Delete all documents associated with the provided field and id
		await prisma.documents.deleteMany({
			where: {
				[field]: id,
			},
		});
		console.log(`All documents and files deleted for ${field}:`, id);
	} catch (error) {
		console.error(`Error deleting documents and files for ${field}:`, id, error);
	}
};
/**
 * Delete all documents and files by exact document_id and document_type.
 *
 * @param {string} documentType - Document type.
 * @param {string} documentId - Document ID.
 * @returns {Promise<void>} Resolves when deletion completes.
 */
const deleteDocumentsAndFilesByDocumentId = async (documentType, documentId) => {
	try {
		// Fetch all documents based on the provided documentType and documentId
		const documents = await prisma.documents.findMany({
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
		// Delete all files associated with the fetched documents
		for (const document of documents) {
			await prisma.files.deleteMany({
				where: {
					document_id: document.document_id,
				},
			});
		}
		// Delete all documents based on the provided documentType and documentId
		await prisma.documents.deleteMany({
			where: {
				document_id: documentId,
				document_type: documentType,
			},
		});
		console.log(`All documents and files deleted for documentType: ${documentType} and documentId: ${documentId}`);
	} catch (error) {
		console.error(
			`Error deleting documents and files for documentType: ${documentType} and documentId: ${documentId}`,
			error
		);
	}
};
/**
 * Get the most recently created document of a given type for a business.
 *
 * @param {string} type - Document type.
 * @param {string} business_id - Business ID.
 * @returns {Promise<object|null>} Latest matching document or null.
 */
async function getLastDocumentByTypeAndBusinessId(type, business_id) {
	return await prisma.documents.findFirst({
		where: {
			document_type: type,
			business_id: business_id,
		},
		orderBy: {
			created_at: 'desc',
		},
	});
}
/**
 * Update a document's fields by document_id.
 *
 * @param {string} documentId - Document ID.
 * @param {object} updateData - Fields to update.
 * @returns {Promise<object>} Updated document.
 */
const updateDocumentByDocumentId = async (documentId, updateData) => {
	try {
		const document = await prisma.documents.findUnique({
			where: { document_id: documentId },
			include: { files: true },
		});
		if (!document) {
			throw new Error('Document not found');
		}
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: updateData,
		});
	} catch (error) {
		console.error('Error updating document:', error);
		throw new Error(error);
	}
};
export { createDocument };
export { getDocuments };
export { getDocumentById };
export { getDocumentsForUser };
export { getDocumentsForBusiness };
export { getDocumentsForDeliveryPerson };
export { getDocumentsForDriver };
export { getDocumentsForVehicle };
export { getDocumentsByType };
export { getDocumentsForUserByType };
export { getDocumentsForBusinessByType };
export { getDocumentsForDriverByType };
export { getDocumentsForDeliveryPersonByType };
export { getDocumentsForVehicleByType };
export { updateDocumentFiles };
export { updateDocumentExpirationDate };
export { updateDocumentIssueDate };
export { updateDocumentAdditionalInfo };
export { linkDocumentToUser };
export { linkDocumentToTransaction };
export { linkDocumentToVehicle };
export { linkDocumentToDriver };
export { linkDocumentToDeliveryDriver };
export { linkDocumentToBusiness };
export { deleteDocument };
export { linkDocumentToMenuItem };
export { linkDocumentToLostItem };
export { deleteDocumentsAndFiles };
export { getLastDocumentByTypeAndBusinessId };
export { deleteDocumentsAndFilesByDocumentId };
export { updateDocumentByDocumentId };
export { findDocumentByTypeAndDeliveryDriverId };
export { findDocumentByTypeAndDriverId };
export default {
	createDocument,
	getDocuments,
	getDocumentById,
	getDocumentsForUser,
	getDocumentsForBusiness,
	getDocumentsForDeliveryPerson,
	getDocumentsForDriver,
	getDocumentsForVehicle,
	getDocumentsByType,
	getDocumentsForUserByType,
	getDocumentsForBusinessByType,
	getDocumentsForDriverByType,
	getDocumentsForDeliveryPersonByType,
	getDocumentsForVehicleByType,
	updateDocumentFiles,
	updateDocumentExpirationDate,
	updateDocumentIssueDate,
	updateDocumentAdditionalInfo,
	linkDocumentToUser,
	linkDocumentToTransaction,
	linkDocumentToVehicle,
	linkDocumentToDriver,
	linkDocumentToDeliveryDriver,
	linkDocumentToBusiness,
	deleteDocument,
	linkDocumentToMenuItem,
	linkDocumentToLostItem,
	deleteDocumentsAndFiles,
	getLastDocumentByTypeAndBusinessId,
	deleteDocumentsAndFilesByDocumentId,
	updateDocumentByDocumentId,
	findDocumentByTypeAndDeliveryDriverId,
	findDocumentByTypeAndDriverId,
};
