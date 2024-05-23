const prisma = require("../prisma/prisma");

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

module.exports = {
	createDocument,
	getDocumentById,
	deleteDocument,
	updateDocumentFiles,
	updateDocumentExpirationDate,
	updateDocumentIssueDate,
	updateDocumentAdditionalInfo,
	getDocumentsForUser,
	getDocumentsForBusiness,
	getDocumentsForDeliveryPerson,
	getDocumentsForDriver,
	getDocumentsForVehicle,
};