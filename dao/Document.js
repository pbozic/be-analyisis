const prisma = require("../prisma/prisma");

const getDocuments = async () => {
	try {
		return await prisma.documents.findMany({
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error getting all documents:", error);
		return new Error(error);
	}
};

const getDocumentById = async (documentId) => {
	try {
		return await prisma.documents.findUnique({
			where: { document_id: documentId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error getting document by ID:", error);
		return new Error(error);
	}
};

const getDocumentsForBusiness = async (businessId) => {
	try {
		return await prisma.documents.findMany({
			where: { business_id: businessId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error getting documents for business:", error);
		return new Error(error);
	}
};

const getDocumentsForDeliveryPerson = async (deliveryPersonId) => {
	try {
		return await prisma.documents.findMany({
			where: { delivery_person_id: deliveryPersonId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error getting documents for delivery person:", error);
		return new Error(error);
	}
};

const getDocumentsForDriver = async (driverId) => {
	try {
		return await prisma.documents.findMany({
			where: { driver_id: driverId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error getting documents for driver:", error);
		return new Error(error);
	}
};

const getDocumentsForUser = async (userId) => {
	try {
		return await prisma.documents.findMany({
			where: { user_id: userId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error getting documents for user:", error);
		return new Error(error);
	}
};

const getDocumentsForVehicle = async (vehicleId) => {
	try {
		return await prisma.documents.findMany({
			where: { vehicle_id: vehicleId },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error getting documents for vehicle:", error);
		return new Error(error);
	}
};

const getDocumentsByType = async (documentType) => {
	try {
		return await prisma.documents.findMany({
			where: { document_type: documentType },
			include: {
				files: true,
			},
		});
	} catch (error) {
		console.error("Error getting documents by type:", error);
		return new Error(error);
	}
};

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
		console.error("Error getting documents for user by type:", error);
		return new Error(error);
	}
};

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
		console.error("Error getting documents for business by type:", error);
		return new Error(error);
	}
};

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
		console.error("Error getting documents for driver by type:", error);
		return new Error(error);
	}
};

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
		console.error("Error getting documents for delivery person by type:", error);
		return new Error(error);
	}
};

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
		console.error("Error getting documents for vehicle by type:", error);
		return new Error(error);
	}
};

const createDocument = async (documentData, filesData) => {
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
		console.error("Error creating document:", error);
		return new Error(error);
	}
};

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

const linkDocumentToUser = async (documentId, userId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { user_id: userId },
		});
	} catch (error) {
		console.error("Error linking document to user:", error);
		return new Error(error);
	}
};

const linkDocumentToVehicle = async (documentId, vehicleId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { vehicle_id: vehicleId },
		});
	} catch (error) {
		console.error("Error linking document to vehicle:", error);
		return new Error(error);
	}
};

const linkDocumentToDriver = async (documentId, driverId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { driver_id: driverId },
		});
	} catch (error) {
		console.error("Error linking document to driver:", error);
		return new Error(error);
	}
};

const linkDocumentToBusiness = async (documentId, businessId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { business_id: businessId },
		});
	} catch (error) {
		console.error("Error linking document to business:", error);
		return new Error(error);
	}
};

const linkDocumentToDeliveryDriver = async (documentId, deliveryDriverId) => {
	try {
		return await prisma.documents.update({
			where: { document_id: documentId },
			data: { delivery_driver_id: deliveryDriverId },
		});
	} catch (error) {
		console.error("Error linking document to delivery driver:", error);
		return new Error(error);
	}
};

const deleteDocument = async (documentId) => {
	try {
		return await prisma.documents.delete({
			where: { document_id: documentId },
		});
	} catch (error) {
		console.error("Error deleting document:", error);
		return new Error(error);
	}
};

module.exports = {
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
	linkDocumentToVehicle,
	linkDocumentToDriver,
	linkDocumentToDeliveryDriver,
	linkDocumentToBusiness,
	deleteDocument,
};